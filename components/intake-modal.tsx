"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CookingPot,
  Refrigerator,
  MapPin,
  MessageSquareText,
  Phone,
  Utensils,
  WashingMachine,
  Wind,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { INTAKE_EVENT } from "@/components/intake-button";
import { business } from "@/lib/business";
import {
  appliances,
  budgets,
  buildMessage,
  estimateTimes,
  inServiceArea,
  isValidZip,
  smsHref,
  timelines,
  type IntakeData,
  type IntakeMode,
} from "@/lib/intake";
import { trackConversion } from "@/lib/track";

const icons: Record<string, LucideIcon> = {
  washer: WashingMachine,
  dryer: Wind,
  refrigerator: Refrigerator,
  stove: CookingPot,
  dishwasher: Utensils,
  other: Wrench,
};

const blank = (mode: IntakeMode): IntakeData => ({
  mode,
  items: [],
  fulfillment: "Delivery",
  budget: "Not sure yet",
  timeline: mode === "shop" ? "This week" : "ASAP",
  problem: "",
  name: "",
  city: "",
  address: "",
  zip: "",
});

export function IntakeModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [data, setData] = useState<IntakeData>(blank("shop"));
  const shop = data.mode === "shop";

  useEffect(() => {
    const launch = (mode: IntakeMode) => {
      setData(blank(mode));
      setStep(0);
      setOpen(true);
      trackConversion("intake_start");
    };
    const onEvent = (e: Event) => launch((e as CustomEvent<{ mode: IntakeMode }>).detail.mode);
    window.addEventListener(INTAKE_EVENT, onEvent);
    const q = new URLSearchParams(window.location.search).get("intake");
    if (q === "shop" || q === "estimate") launch(q);
    return () => window.removeEventListener(INTAKE_EVENT, onEvent);
  }, []);

  const set = <K extends keyof IntakeData>(key: K, value: IntakeData[K]) => setData((d) => ({ ...d, [key]: value }));
  const toggle = (id: string) =>
    set("items", data.items.includes(id) ? data.items.filter((i) => i !== id) : [...data.items, id]);

  const steps = shop ? ["What", "Preferences", "Send"] : ["What", "Problem", "Send"];
  const canNext = step === 0 ? data.items.length > 0 : true;
  const zipOk = isValidZip(data.zip);
  const nameOk = data.name.trim().length > 1;
  const areaOk = inServiceArea(data.city);
  const message = buildMessage(data);
  const progress = ((step + 1) / steps.length) * 100;

  const next = () => {
    if (step === 0) trackConversion("intake_items");
    setStep((s) => s + 1);
  };
  const send = () =>
    trackConversion(shop ? "shop_lead" : "estimate_lead", `${data.mode}-${Date.now()}`, { fn: data.name, ct: data.city, zp: data.zip });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="menu-overlay intake-overlay" />
        <Dialog.Content className="intake" aria-describedby={undefined}>
          <div className="intake__top">
            <Dialog.Title>{shop ? "Shop used appliances" : "Get your free estimate"}</Dialog.Title>
            <Dialog.Close className="intake__close" aria-label="Close">
              <X aria-hidden="true" size={20} />
            </Dialog.Close>
          </div>
          <div className="intake__bar" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
          <p className="intake__steps">Step {step + 1} of {steps.length} · {steps[step]}</p>

          <p className="intake__area">
            <MapPin aria-hidden="true" size={16} />
            <span>
              {shop ? "Delivery & pickup only" : "Service"} in <strong>Macon and cities within {business.serviceRadiusMiles} miles</strong>.
            </span>
          </p>

          {step === 0 && (
            <div>
              <h3>{shop ? "What are you shopping for?" : "What needs fixing?"}</h3>
              <p className="intake__hint">Tap all that apply.</p>
              <div className="intake__grid">
                {appliances.map((a) => {
                  const on = data.items.includes(a.id);
                  return (
                    <button
                      type="button"
                      key={a.id}
                      className={on ? "intake__tile is-on" : "intake__tile"}
                      aria-pressed={on}
                      onClick={() => toggle(a.id)}
                    >
                      {(() => {
                        const Icon = icons[a.id];
                        return <Icon className="intake__icon" aria-hidden="true" size={30} strokeWidth={1.8} />;
                      })()}
                      {a.label}
                      {on && <Check className="intake__tick" aria-hidden="true" size={16} />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 1 && shop && (
            <div>
              <h3>How do you want it?</h3>
              <div className="intake__chips" role="group" aria-label="Delivery or pickup">
                {(["Delivery", "Pickup"] as const).map((o) => (
                  <button type="button" key={o} className={data.fulfillment === o ? "is-on" : ""} aria-pressed={data.fulfillment === o} onClick={() => set("fulfillment", o)}>{o}</button>
                ))}
              </div>
              <h3>Budget</h3>
              <div className="intake__chips" role="group" aria-label="Budget">
                {budgets.map((o) => (
                  <button type="button" key={o} className={data.budget === o ? "is-on" : ""} aria-pressed={data.budget === o} onClick={() => set("budget", o)}>{o}</button>
                ))}
              </div>
              <h3>When?</h3>
              <div className="intake__chips" role="group" aria-label="Timing">
                {timelines.map((o) => (
                  <button type="button" key={o} className={data.timeline === o ? "is-on" : ""} aria-pressed={data.timeline === o} onClick={() => set("timeline", o)}>{o}</button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && !shop && (
            <div>
              <h3>What is it doing?</h3>
              <label className="intake__field">
                <span>Symptoms (optional)</span>
                <textarea rows={3} maxLength={240} placeholder="Won't drain, not cooling, no heat…" value={data.problem} onChange={(e) => set("problem", e.target.value)} />
              </label>
              <h3>How soon?</h3>
              <div className="intake__chips" role="group" aria-label="Timing">
                {estimateTimes.map((o) => (
                  <button type="button" key={o} className={data.timeline === o ? "is-on" : ""} aria-pressed={data.timeline === o} onClick={() => set("timeline", o)}>{o}</button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3>Where are you? We check how far you are.</h3>
              <label className="intake__field"><span>Your name *</span>
                <input autoComplete="given-name" value={data.name} onChange={(e) => set("name", e.target.value)} placeholder="First name" />
              </label>
              <label className="intake__field"><span>Street address (optional)</span>
                <input autoComplete="street-address" value={data.address} onChange={(e) => set("address", e.target.value)} placeholder="123 Main St" />
              </label>
              <div className="intake__two">
                <label className="intake__field"><span>City</span>
                  <input autoComplete="address-level2" list="intake-cities" value={data.city} onChange={(e) => set("city", e.target.value)} placeholder="Macon" />
                  <datalist id="intake-cities">
                    {business.normalAreas.map((c) => <option key={c} value={c} />)}
                  </datalist>
                </label>
                <label className="intake__field"><span>ZIP code *</span>
                  <input autoComplete="postal-code" inputMode="numeric" maxLength={5} value={data.zip} onChange={(e) => set("zip", e.target.value.replace(/\D/g, ""))} placeholder="31206" />
                </label>
              </div>
              {!areaOk && (
                <p className="intake__warn" role="alert">
                  {data.city} isn&apos;t on our usual list. Send it anyway and we&apos;ll confirm if we can reach you, or call {business.phoneDisplay}.
                </p>
              )}
              <pre className="intake__preview" aria-label="Your message preview">{message}</pre>
              {zipOk && nameOk ? (
                <a className="ak-btn ak-btn--primary intake__send" href={smsHref(message)} onClick={send}>
                  <MessageSquareText aria-hidden="true" size={19} /> Text this to Appliance King
                </a>
              ) : (
                <button type="button" className="ak-btn ak-btn--primary intake__send" disabled>
                  <MessageSquareText aria-hidden="true" size={19} /> Add your name &amp; ZIP to send
                </button>
              )}
              <p className="intake__hint">Opens your messages with everything filled in. Just tap send. We&apos;re at {business.address.full}.</p>
              <div className="intake__alt">
                <a href={business.phoneHref}><Phone aria-hidden="true" size={16} /> Call {business.phoneDisplay}</a>
                <Link href="/book" data-book onClick={() => setOpen(false)}><CalendarDays aria-hidden="true" size={16} /> Pick a time instead</Link>
              </div>
            </div>
          )}

          {step < 2 && (
            <div className="intake__nav">
              {step > 0 && (
                <button type="button" className="ak-btn ak-btn--ghost" onClick={() => setStep(step - 1)}>
                  <ArrowLeft aria-hidden="true" size={18} /> Back
                </button>
              )}
              <button type="button" className="ak-btn ak-btn--primary" disabled={!canNext} onClick={next}>
                Continue <ArrowRight aria-hidden="true" size={18} />
              </button>
            </div>
          )}
          {step === 2 && (
            <button type="button" className="intake__back" onClick={() => setStep(1)}>
              <ArrowLeft aria-hidden="true" size={15} /> Edit answers
            </button>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
