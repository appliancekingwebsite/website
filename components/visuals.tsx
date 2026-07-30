import { business } from "@/lib/business";
import type { ServicePageData } from "@/lib/content";

export function DiagnosticPanel() {
  return (
    <div className="diagnostic-panel repair-panel" aria-label="Appliance repair estimate process illustration">
      <div className="repair-panel__stage">
        <svg viewBox="0 0 620 420" role="img" aria-labelledby="repair-title repair-desc">
          <title id="repair-title">Appliance repair workbench</title>
          <desc id="repair-desc">
            A service bench with a washer, tools, parts tray, and job tags for inspect, repair, and test.
          </desc>
          <path className="repair-grid" d="M30 82H590M30 148H590M30 214H590M30 280H590M30 346H590M116 34V386M202 34V386M288 34V386M374 34V386M460 34V386M546 34V386" />
          <rect className="repair-shadow" x="62" y="318" width="502" height="34" rx="4" />
          <rect className="repair-machine" x="80" y="88" width="188" height="232" rx="12" />
          <rect className="repair-panel__screenbox" x="105" y="116" width="74" height="22" rx="4" />
          <circle className="repair-drum" cx="174" cy="222" r="62" />
          <circle className="repair-drum repair-drum--inner" cx="174" cy="222" r="38" />
          <circle className="repair-light" cx="230" cy="127" r="9" />
          <path className="repair-wrench" d="M385 105c26-25 66-28 95-8l-44 44 25 25 44-44c19 29 16 69-9 95-28 28-72 31-103 9l-83 83c-9 9-24 9-33 0s-9-24 0-33l83-83c-22-31-19-75 9-103z" />
          <path className="repair-driver" d="M352 274l95 52 48-83 37 20-48 84 31 17-13 24-163-90z" />
          <rect className="repair-tag" x="315" y="64" width="94" height="42" rx="5" />
          <rect className="repair-tag repair-tag--two" x="436" y="248" width="104" height="42" rx="5" />
          <path className="repair-pulse" d="M104 354h86l18-22 19 39 24-17h265" />
        </svg>
      </div>
      <div className="diagnostic-panel__controls" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>INSPECT / REPAIR / TEST</span>
      </div>
    </div>
  );
}

export function HeroRepairVisual() {
  return (
    <div className="hero-repair" aria-label="Appliance King repair, installation, and handyman service illustration">
      <svg viewBox="0 0 620 620" role="img" aria-labelledby="hero-repair-title hero-repair-desc">
        <title id="hero-repair-title">Appliance service bench</title>
        <desc id="hero-repair-desc">
          A service-bay workbench with a washer, tools, airflow duct, and repair tags for Appliance King.
        </desc>
        <path className="hero-repair__rail" d="M58 118H562M58 310H562M58 502H562M118 58V562M310 58V562M502 58V562" />
        <rect className="hero-repair__bench" x="74" y="430" width="472" height="46" rx="5" />
        <rect className="hero-repair__machine" x="118" y="156" width="218" height="282" rx="14" />
        <rect className="hero-repair__control" x="144" y="186" width="102" height="24" rx="4" />
        <circle className="hero-repair__lamp" cx="286" cy="198" r="10" />
        <circle className="hero-repair__drum" cx="227" cy="304" r="77" />
        <circle className="hero-repair__drum hero-repair__drum--inner" cx="227" cy="304" r="46" />
        <path className="hero-repair__hose" d="M336 356h60V239h83v84h58" />
        <path className="hero-repair__air hero-repair__air--one" d="M350 356h46V239h77" />
        <path className="hero-repair__air hero-repair__air--two" d="M481 239v84h45" />
        <path className="hero-repair__wrench" d="M420 118c31-28 78-28 110 0l-51 51 24 24 51-51c28 32 28 79 0 110-31 35-82 39-118 12l-70 70c-8 8-22 8-30 0s-8-22 0-30l70-70c-27-36-23-87 12-118z" />
        <path className="hero-repair__driver" d="M398 406l79 43 39-70 39 21-39 70 29 16-14 25-146-80z" />
        <rect className="hero-repair__ticket" x="382" y="74" width="108" height="48" rx="5" />
        <rect className="hero-repair__ticket hero-repair__ticket--two" x="402" y="520" width="128" height="48" rx="5" />
        <path className="hero-repair__spark" d="M96 116l18-34 18 34M512 346l24-24 24 24M76 524l34-11 12 32" />
      </svg>
      <div className="hero-repair__labels" aria-hidden="true">
        <span>Repair</span>
        <span>Install</span>
        <span>Handyman</span>
      </div>
    </div>
  );
}

type ServiceIconProps = {
  slug: ServicePageData["slug"];
};

const serviceIconTitles: Record<string, string> = {
  "appliance-repair": "Appliance repair",
  "washer-repair": "Washer repair",
  "dryer-repair": "Dryer repair",
  "refrigerator-freezer-repair": "Refrigerator and freezer repair",
  "dishwasher-repair": "Dishwasher repair",
  "range-oven-stove-repair": "Range, oven, and stove repair",
  "appliance-installation": "Appliance installation",
  "washer-dryer-installation": "Washer and dryer installation",
  "dryer-vent-cleaning-repair": "Dryer vent cleaning and repair",
  "handyman-services": "Handyman services",
  "minor-electrical-repairs": "Minor electrical repairs",
  "landscaping-property-maintenance": "Landscaping and property maintenance",
  "commercial-property-maintenance": "Commercial property maintenance",
};

export function ServiceIcon({ slug }: ServiceIconProps) {
  const title = serviceIconTitles[slug] ?? "Service";
  return (
    <svg className="service-icon" viewBox="0 0 64 64" role="img" aria-label={title}>
      <rect className="service-icon__plate" x="6" y="6" width="52" height="52" rx="8" />
      {renderServiceIcon(slug)}
    </svg>
  );
}

function renderServiceIcon(slug: string) {
  switch (slug) {
    case "washer-repair":
    case "washer-dryer-installation":
      return (
        <>
          <rect className="service-icon__line" x="18" y="14" width="28" height="38" rx="4" />
          <circle className="service-icon__accent" cx="32" cy="35" r="10" />
          <circle className="service-icon__dot" cx="41" cy="21" r="2.5" />
        </>
      );
    case "dryer-repair":
      return (
        <>
          <rect className="service-icon__line" x="16" y="16" width="25" height="32" rx="4" />
          <circle className="service-icon__accent" cx="28" cy="34" r="8" />
          <path className="service-icon__line" d="M41 40h7V24h7" />
        </>
      );
    case "refrigerator-freezer-repair":
      return (
        <>
          <rect className="service-icon__line" x="20" y="12" width="24" height="42" rx="4" />
          <path className="service-icon__line" d="M20 29h24M26 20v5M26 37v5" />
          <path className="service-icon__accent-line" d="M49 18l4 4-4 4M53 22h-9" />
        </>
      );
    case "dishwasher-repair":
      return (
        <>
          <rect className="service-icon__line" x="16" y="17" width="32" height="30" rx="4" />
          <path className="service-icon__accent-line" d="M22 28c5 4 15 4 20 0M22 37c5 4 15 4 20 0" />
          <circle className="service-icon__dot" cx="25" cy="23" r="2" />
        </>
      );
    case "range-oven-stove-repair":
      return (
        <>
          <rect className="service-icon__line" x="16" y="16" width="32" height="34" rx="4" />
          <path className="service-icon__line" d="M20 27h24" />
          <circle className="service-icon__accent" cx="25" cy="22" r="3" />
          <circle className="service-icon__accent" cx="39" cy="22" r="3" />
          <path className="service-icon__accent-line" d="M27 39h10" />
        </>
      );
    case "appliance-installation":
      return (
        <>
          <rect className="service-icon__line" x="16" y="18" width="24" height="30" rx="4" />
          <path className="service-icon__accent-line" d="M37 24h11M43 18v12M42 40l7 7M49 40l-7 7" />
        </>
      );
    case "dryer-vent-cleaning-repair":
      return (
        <>
          <rect className="service-icon__line" x="12" y="33" width="19" height="16" rx="3" />
          <path className="service-icon__line" d="M31 41h9V22h11" />
          <path className="service-icon__accent-line" d="M17 26h19M21 20h13M42 32h10" />
        </>
      );
    case "handyman-services":
      return (
        <>
          <path className="service-icon__line" d="M19 45l24-24 6 6-24 24z" />
          <path className="service-icon__accent-line" d="M38 17l9-9 9 9-9 9" />
          <path className="service-icon__line" d="M15 19l30 30" />
        </>
      );
    case "minor-electrical-repairs":
      return (
        <>
          <path className="service-icon__line" d="M34 10L19 35h12l-3 19 17-28H32z" />
          <path className="service-icon__accent-line" d="M47 15l5-5M50 28h8M45 41l6 6" />
        </>
      );
    case "landscaping-property-maintenance":
      return (
        <>
          <path className="service-icon__line" d="M14 45h38M32 45V29" />
          <path className="service-icon__accent" d="M32 30c-12-2-16-10-15-18 10 0 17 6 18 16" />
          <path className="service-icon__accent" d="M32 33c10-2 15-8 15-16-9 0-15 5-17 14" />
        </>
      );
    case "commercial-property-maintenance":
      return (
        <>
          <rect className="service-icon__line" x="16" y="17" width="32" height="32" rx="2" />
          <path className="service-icon__line" d="M24 49V17M40 49V17M16 28h32M16 39h32" />
          <path className="service-icon__accent-line" d="M25 12h14" />
        </>
      );
    default:
      return (
        <>
          <rect className="service-icon__line" x="17" y="16" width="30" height="34" rx="4" />
          <path className="service-icon__accent-line" d="M23 41l18-18M29 23h12v12" />
        </>
      );
  }
}

export function AirflowVisual() {
  return (
    <svg className="airflow-visual" viewBox="0 0 760 330" role="img" aria-labelledby="airflow-title airflow-desc">
      <title id="airflow-title">Dryer vent airflow path</title>
      <desc id="airflow-desc">A dryer connected through a vent route to an outdoor exhaust, with animated airflow.</desc>
      <rect x="26" y="58" width="220" height="236" rx="12" className="air-appliance" />
      <circle cx="136" cy="180" r="72" className="air-drum" />
      <circle cx="136" cy="180" r="50" className="air-drum-inner" />
      <rect x="54" y="80" width="110" height="19" rx="4" className="air-slot" />
      <circle cx="209" cy="90" r="9" className="air-light" />
      <path className="air-duct" d="M246 239h86V115h154v86h112" />
      <path className="air-flow air-flow--one" d="M256 239h70V115h151" />
      <path className="air-flow air-flow--two" d="M493 115v86h98" />
      <path className="air-house" d="M598 256V84l65-44 66 44v172z" />
      <path className="air-vent" d="M598 201h65" />
      <text x="26" y="25">DRYER</text>
      <text x="332" y="96">DUCT ROUTE</text>
      <text x="594" y="292">OUTDOOR EXHAUST</text>
    </svg>
  );
}

export function LifecycleVisual() {
  return (
    <div className="lifecycle" aria-label="Buy, sell, fix appliance lifecycle">
      <div><span>01</span><strong>BUY</strong><small>Changing inventory</small></div>
      <i aria-hidden="true">→</i>
      <div><span>02</span><strong>FIX</strong><small>Diagnose first</small></div>
      <i aria-hidden="true">→</i>
      <div><span>03</span><strong>SELL</strong><small>Reviewed by condition</small></div>
    </div>
  );
}

export function ServiceAreaMap() {
  const points = [
    { name: "Macon", x: 310, y: 190, main: true },
    { name: "Warner Robins", x: 322, y: 286 },
    { name: "Gray", x: 413, y: 138 },
    { name: "Byron", x: 238, y: 285 },
    { name: "Forsyth", x: 254, y: 88 },
  ];
  return (
    <div className="service-map">
      <svg viewBox="0 0 640 400" role="img" aria-label={`Service area centered on ${business.baseCity}, Georgia`}>
        <circle cx="310" cy="190" r="154" className="map-radius" />
        <circle cx="310" cy="190" r="102" className="map-ring" />
        <path className="map-road" d="M60 240C160 204 225 244 310 190s161-62 274-18M233 17c11 90 31 144 77 173 47 31 54 93 46 184" />
        {points.map((point) => (
          <g key={point.name} transform={`translate(${point.x} ${point.y})`}>
            <circle r={point.main ? 12 : 7} className={point.main ? "map-dot map-dot--main" : "map-dot"} />
            <text x="15" y="5">{point.name}</text>
          </g>
        ))}
      </svg>
      <p>Normal scheduling centers on Macon and nearby communities. Atlanta-area work is considered only for larger projects by request.</p>
    </div>
  );
}
