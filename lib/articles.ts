import type { FaqItem } from "@/lib/content";

export type ArticleSection = {
  heading: string;
  answer: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleData = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  directAnswer: string;
  published: string;
  updated: string;
  readTime: string;
  sections: ArticleSection[];
  faqs: FaqItem[];
  internalLinks: { label: string; href: string }[];
  sources: { label: string; href: string }[];
};

const bookingFaq: FaqItem = {
  question: "What happens after I book an estimate?",
  answer:
    "Choose an available appointment through Appliance King’s calendar and share the appliance type, symptoms, and access details. The visit is used to inspect the situation, clarify the scope, and discuss the practical next step before work moves forward.",
};

const pillarFaqs: FaqItem[] = [
  {
    question: "Is it better to repair or replace a broken appliance?",
    answer:
      "Repair is often worth considering when the appliance fits your needs, the problem is isolated, and the likely cost is reasonable compared with replacement. Replacement becomes more sensible when failures repeat, essential parts are unavailable, safety is uncertain, or the appliance no longer suits the household.",
  },
  {
    question: "What is the 50 percent rule for appliance repair?",
    answer:
      "The 50 percent rule is a budgeting shortcut: if a repair approaches half the cost of a suitable replacement and the appliance is well into its expected service life, replacement deserves serious consideration. It is not a law. Installation, delivery, disposal, features, and the appliance’s condition can change the decision.",
  },
  {
    question: "How does appliance age affect the decision?",
    answer:
      "Age matters because wear accumulates and some parts become harder to source, but the calendar alone does not decide. A well-maintained older unit with one accessible fault may still be practical to repair, while a newer appliance with severe damage or repeated problems may not be.",
  },
  {
    question: "Should I repair a refrigerator that is not cooling?",
    answer:
      "Protect food first, then arrange diagnosis. A cooling problem can come from several causes with very different repair implications. Avoid deciding from the symptom alone. Note temperature changes, frost, noise, and cycling behavior so the technician has useful context.",
  },
  {
    question: "Should I repair a washer that will not drain?",
    answer:
      "A no-drain symptom does not automatically mean the washer is finished. Check for an unbalanced load, a kinked drain hose, or an obvious household drain issue without opening electrical panels. Diagnosis can distinguish a simple obstruction from a pump, control, or internal problem.",
  },
  {
    question: "Should I repair a dryer that is not heating?",
    answer:
      "First stop using the dryer if there is a burning smell, smoke, or severe overheating. No heat, weak heat, and long dry times can involve the appliance, power or fuel supply, or restricted venting. A correct diagnosis matters because replacing a dryer will not fix a blocked building vent.",
  },
  {
    question: "Does energy efficiency always justify replacement?",
    answer:
      "No. Efficiency gains can matter, especially for heavily used or inefficient equipment, but a new purchase also carries manufacturing, delivery, installation, and disposal costs. Compare realistic operating savings with the full replacement cost instead of relying on a single efficiency label.",
  },
  {
    question: "Do repeated repairs mean I should replace the appliance?",
    answer:
      "Repeated failures are a strong replacement signal when they involve different systems or create unpredictable downtime. One previous repair does not prove the appliance is unreliable. Look at the pattern, total spending, parts availability, and how disruptive another failure would be.",
  },
  {
    question: "What costs should I include in replacement?",
    answer:
      "Include the appliance, delivery, installation, required connections, fit modifications, haul-away, taxes, and possible downtime. For commercial properties, include operational disruption. Comparing only a repair estimate with the shelf price of a replacement understates the true replacement cost.",
  },
  {
    question: "Can an appliance be unsafe to repair or keep using?",
    answer:
      "Yes. Smoke, sparking, burning odors, active leaks near electricity, gas odor, damaged power cords, or severe overheating require immediate caution. Stop use, disconnect power only when safe, leave the area for a suspected gas leak, and contact an appropriately qualified professional or emergency service.",
  },
  {
    question: "Does parts availability matter?",
    answer:
      "Parts availability can determine whether a repair is practical and how long it may take. Model information helps identify options. Discontinued or backordered parts can shift an otherwise reasonable repair toward replacement, especially when the appliance is essential to daily operations.",
  },
  {
    question: "Should cosmetic damage affect the choice?",
    answer:
      "Cosmetic wear matters only as much as it matters to you or affects function. Scratches are different from rust, broken hinges, cracked tubs, damaged seals, or structural problems. Functional damage and corrosion deserve more weight than appearance alone.",
  },
  {
    question: "Is a built-in appliance more likely to be worth repairing?",
    answer:
      "Often, because replacement may require cabinetry work, specialty installation, or matching dimensions. But built-in status does not make every repair sensible. Consider the condition, fault, parts, access, and full installed replacement cost.",
  },
  {
    question: "How do I find the appliance model number?",
    answer:
      "Look for the manufacturer label around the door frame, behind a drawer, inside the cabinet, on the rear panel, or beneath a lid depending on the appliance. Photograph the complete label rather than copying one number; model and serial identifiers can look similar.",
  },
  {
    question: "What should I document before an estimate?",
    answer:
      "Record the model label, when the problem started, sounds or error codes, leaks or odors, and what happens during a normal cycle. A short video can capture intermittent behavior. Do not dismantle guarded components or create a safety risk to collect information.",
  },
  {
    question: "Can a repair estimate change after diagnosis?",
    answer:
      "The useful scope becomes clearer after inspection because one symptom can have several causes. Hidden damage, access limits, or additional failed parts may affect the next step. Ask what was observed, what is confirmed, and what remains uncertain.",
  },
  {
    question: "Should landlords repair or replace a rental appliance?",
    answer:
      "Landlords should consider habitability obligations, tenant disruption, appliance condition, reliability, and total cost. A dependable repair may minimize waste and downtime; replacement may be better when failure is recurring or parts are impractical. Local legal obligations should be reviewed separately.",
  },
  {
    question: "How should a business evaluate a commercial appliance?",
    answer:
      "Add downtime, capacity, sanitation or safety requirements, serviceability, and operational risk to the normal cost comparison. A repair that is inexpensive on paper may be costly if the unit remains unreliable during critical hours.",
  },
  {
    question: "Can I sell an appliance instead of repairing it?",
    answer:
      "Possibly. Appliance King reviews buy and sell inquiries, but interest and value depend on the appliance, condition, model, access, and current needs. Do not assume every appliance will be purchased. Share honest condition details and clear photos before moving it.",
  },
  bookingFaq,
];

const internalLinks = [
  { label: "Appliance repair in Macon", href: "/services/appliance-repair" },
  { label: "Washer repair", href: "/services/washer-repair" },
  { label: "Dryer repair", href: "/services/dryer-repair" },
  { label: "Refrigerator and freezer repair", href: "/services/refrigerator-freezer-repair" },
  { label: "Dishwasher repair", href: "/services/dishwasher-repair" },
  { label: "Range, oven, and stove repair", href: "/services/range-oven-stove-repair" },
  { label: "Appliance installation", href: "/services/appliance-installation" },
  { label: "Dryer-vent service", href: "/services/dryer-vent-cleaning-repair" },
  { label: "Used appliances", href: "/used-appliances" },
  { label: "Sell your appliance", href: "/sell-your-appliance" },
];

const sources = [
  {
    label: "U.S. Department of Energy — estimating appliance energy use",
    href: "https://www.energy.gov/energysaver/estimating-appliance-and-home-electronic-energy-use",
  },
  {
    label: "ENERGY STAR — appliances",
    href: "https://www.energystar.gov/products/appliances",
  },
  {
    label: "USDA — food safety during power outages",
    href: "https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/emergencies/keeping-food-safe-during-emergency",
  },
  {
    label: "U.S. Consumer Product Safety Commission — recalls",
    href: "https://www.cpsc.gov/Recalls",
  },
  {
    label: "NFPA — clothes dryer fire safety",
    href: "https://www.nfpa.org/education-and-research/home-fire-safety/clothes-dryers",
  },
];

export const pillarArticle: ArticleData = {
  slug: "repair-or-replace-appliance-macon-ga",
  h1: "Should You Repair or Replace a Broken Appliance in Macon, GA?",
  title: "Repair or Replace an Appliance? Macon, GA Guide",
  description:
    "Use this practical Macon appliance guide to compare repair, replacement, safety, age, parts, installation, and total cost.",
  directAnswer:
    "Repair is usually worth evaluating when the appliance still fits your needs, the problem is isolated, parts are obtainable, and the total repair is reasonable beside the installed cost of replacement. Replace when safety, repeated failures, severe structural damage, unavailable parts, or operational downtime outweigh the benefit of another repair.",
  published: "2026-07-30",
  updated: "2026-07-30",
  readTime: "10 min read",
  sections: [
    {
      heading: "What should you compare before deciding?",
      answer:
        "Compare the confirmed fault, appliance condition, likely remaining usefulness, parts availability, safety, and the complete installed replacement cost—not just the price tag.",
      paragraphs: [
        "A symptom is not a diagnosis. A washer that will not drain could have an accessible obstruction or a broader control problem. A dryer with long cycles could have an appliance fault, restricted venting, or both. Start with evidence.",
        "The replacement side should include delivery, installation, connection parts, fit changes, haul-away, and disruption. This is especially important for built-in units and commercial properties.",
      ],
      bullets: ["Confirmed cause", "Repair scope", "Parts outlook", "Safety", "Installed replacement cost", "Downtime"],
    },
    {
      heading: "When is appliance repair the practical choice?",
      answer:
        "Repair deserves priority when the appliance is otherwise sound, the issue is isolated, the unit fits the space and household, and the work restores useful service without creating unreasonable cost or risk.",
      paragraphs: [
        "A common mistake is replacing a machine because one visible symptom feels final. Another is authorizing a repair without asking whether other major wear is present. The better decision sits between those extremes.",
        "For a built-in appliance, matching size and installation work can make repair more valuable. For a basic freestanding unit, replacement options may be easier. Context changes the math.",
      ],
    },
    {
      heading: "When does replacement make more sense?",
      answer:
        "Replacement becomes more compelling when failures recur, the appliance has major structural deterioration, the required part is unavailable, safety is uncertain, or downtime costs more than the repair can reasonably protect.",
      paragraphs: [
        "Repeated unrelated failures are more concerning than one repaired component. Severe rust, cracked structures, damaged tubs, compromised gas components, or recurring electrical symptoms can also change the risk.",
        "Commercial decisions should include capacity and interruption. A repair can be affordable yet unsuitable if the machine cannot meet the operation’s needs.",
      ],
    },
    {
      heading: "How can you make the decision without guessing?",
      answer:
        "Document the model and symptoms, stop use when safety is uncertain, arrange diagnosis, and ask for a plain-language explanation of the observed fault, proposed scope, uncertainty, and alternatives.",
      paragraphs: [
        "A short symptom timeline is more useful than a long theory: what the appliance was doing, what changed, whether the issue is constant, and whether there are smells, leaks, noises, or error codes.",
        "Treat rules of thumb as prompts, not verdicts. The right outcome is the one supported by the actual unit, the actual space, and the real total cost.",
      ],
      bullets: ["Photograph the model label", "Record symptoms", "Protect people and property", "Get the cause assessed", "Compare complete costs"],
    },
  ],
  faqs: pillarFaqs,
  internalLinks,
  sources,
};

const supportingArticles: ArticleData[] = [
  {
    slug: "refrigerator-warning-signs-macon-ga",
    h1: "What Refrigerator Warning Signs Should Macon Homeowners Notice?",
    title: "Refrigerator Warning Signs in Macon, GA",
    description:
      "Learn which refrigerator cooling, frost, leak, noise, and cycling symptoms deserve attention and what to document before service.",
    directAnswer:
      "Important refrigerator warning signs include rising food temperature, heavy or fast-forming frost, water inside or beneath the unit, repeated clicking, constant running, unusual noise, and sudden ice-maker changes. Protect food first, minimize door opening, note the pattern, and arrange an assessment instead of guessing from one symptom.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readTime: "5 min read",
    sections: [
      {
        heading: "Which cooling changes matter most?",
        answer:
          "A sustained temperature rise matters more than a brief change after loading groceries or opening the doors repeatedly.",
        paragraphs: [
          "Use an appliance thermometer when available. Note whether the freezer, fresh-food section, or both are affected and whether airflow seems different.",
          "Food safety is separate from appliance repair. Follow authoritative storage guidance when temperature history is uncertain.",
        ],
        bullets: ["Warming food", "Soft frozen items", "Uneven shelves", "Constant cycling"],
      },
      {
        heading: "What should you check before booking?",
        answer:
          "Confirm power, check that doors close, note control settings, photograph the model label, and record frost, water, sounds, and timing without removing protected panels.",
        paragraphs: ["Those details help distinguish a door, airflow, defrost, water, or operating symptom during diagnosis."],
      },
    ],
    faqs: [
      { question: "Why is my refrigerator running constantly?", answer: "Frequent running can relate to room conditions, door sealing, loading, airflow, controls, or a cooling-system concern. The pattern and temperature matter more than the sound alone." },
      { question: "Is water under a refrigerator urgent?", answer: "Protect the floor and keep water away from electricity. A small leak can still cause damage, so note when it appears and book an assessment." },
      bookingFaq,
    ],
    internalLinks,
    sources: sources.slice(0, 4),
  },
  {
    slug: "washer-not-draining-macon-ga",
    h1: "Why Is Your Washing Machine Not Draining in Macon, GA?",
    title: "Washer Not Draining in Macon, GA? What to Check",
    description:
      "Understand common washer drainage symptoms, safe checks, and the details to gather before arranging washing machine repair in Macon.",
    directAnswer:
      "A washer may stop draining because of a load imbalance, kinked hose, household drain problem, obstruction, pump issue, lid or door sensing problem, or control fault. Stop if there is leaking, burning odor, or electrical risk. Document the cycle stage and sounds, then arrange diagnosis before dismantling the machine.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readTime: "5 min read",
    sections: [
      {
        heading: "What can you check without taking the washer apart?",
        answer:
          "Check the selected cycle, redistribute an unbalanced load, inspect the visible drain hose for a kink, and confirm the household drain is not overflowing.",
        paragraphs: ["Do not reach into moving equipment or remove electrical guards. Water and energized components require caution."],
        bullets: ["Cycle selection", "Load balance", "Visible hose", "Household drain", "Error code"],
      },
      {
        heading: "When does a no-drain symptom need service?",
        answer:
          "Book service when the simple visible checks do not resolve the problem, the symptom repeats, or there is leaking, grinding, humming without movement, or an error code.",
        paragraphs: ["Those details help separate a drain path problem from a pump, sensing, or control issue."],
      },
    ],
    faqs: [
      { question: "Can I open a washer full of water?", answer: "Avoid forcing a locked door or creating a spill near electricity. Follow the manufacturer’s safe drain procedure when known, or arrange service." },
      { question: "Why does my washer hum but not drain?", answer: "Humming can indicate an attempted operation, but it does not identify the cause. An obstruction, pump issue, or control condition may require diagnosis." },
      bookingFaq,
    ],
    internalLinks,
    sources: sources.slice(0, 2),
  },
  {
    slug: "dryer-not-heating-or-vent-blocked",
    h1: "Is Your Dryer Not Heating, or Is the Vent Blocked?",
    title: "Dryer Not Heating vs. Blocked Vent | Macon Guide",
    description:
      "Compare dryer heat problems with restricted vent symptoms, learn the safety signs, and know when to book repair or vent service.",
    directAnswer:
      "No heat can involve the dryer, electrical or gas supply, or controls. Long drying, excess heat, damp loads, lint around connections, and weak exterior airflow can point toward restricted venting. Because symptoms overlap, diagnosis should consider both the appliance and the complete exhaust path. Stop immediately for smoke, gas odor, or burning.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readTime: "6 min read",
    sections: [
      {
        heading: "What points toward a dryer problem?",
        answer:
          "A dryer-specific fault is more likely when the drum, controls, heating behavior, sensors, or power supply do not operate as expected.",
        paragraphs: ["Electric dryers can still tumble with a supply issue affecting heat. Gas dryers require special caution if fuel odor is present."],
      },
      {
        heading: "What points toward restricted venting?",
        answer:
          "Long cycles, hot clothing or cabinet surfaces, repeated shutoffs, lint at joints, and weak exterior airflow can signal restriction or a poor vent path.",
        paragraphs: ["Cleaning the lint screen does not clean the full duct. The transition connector and route to the exterior both matter."],
        bullets: ["Long cycles", "Excess heat", "Weak outlet airflow", "Lint leakage", "Crushed connector"],
      },
    ],
    faqs: [
      { question: "Will a new dryer fix a blocked vent?", answer: "No. A blocked or damaged building vent remains after the appliance is replaced and can continue causing poor performance and risk." },
      { question: "Should I run the dryer again to test it?", answer: "Do not continue testing when there is burning odor, smoke, gas odor, severe heat, or visible damage. Arrange the appropriate service." },
      bookingFaq,
    ],
    internalLinks,
    sources: [sources[4]],
  },
  {
    slug: "how-often-clean-dryer-vent",
    h1: "How Often Should You Clean a Dryer Vent in Macon, GA?",
    title: "How Often to Clean a Dryer Vent in Macon, GA",
    description:
      "Learn why dryer-vent cleaning frequency depends on use, vent length, airflow, installation, and warning signs—not one universal date.",
    directAnswer:
      "Dryer-vent cleaning frequency depends on household use, load volume, vent length, bends, connector condition, appliance performance, and exterior airflow. A calendar reminder is useful, but warning signs matter more: longer cycles, excess heat, weak outlet airflow, lint leakage, or a crushed connector deserve prompt attention.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readTime: "5 min read",
    sections: [
      {
        heading: "Why is there no perfect cleaning interval?",
        answer:
          "A short straight metal run used lightly behaves differently from a long route with several turns serving frequent loads.",
        paragraphs: ["Inspect performance and visible conditions rather than assuming every property follows the same timetable."],
      },
      {
        heading: "What dryer-vent signs should you act on?",
        answer:
          "Long dry times, excess heat, weak exterior airflow, lint at joints, repeated shutoffs, or a damaged connector are practical reasons to inspect the system.",
        paragraphs: ["The route should exhaust outdoors and remain intact, reasonably short, and appropriate for dryer use."],
      },
    ],
    faqs: [
      { question: "Does cleaning the lint screen clean the vent?", answer: "No. The screen catches part of the lint. The connector and building duct continue beyond it and can still restrict airflow." },
      { question: "Can a long dryer vent need more attention?", answer: "Yes. Length and turns increase resistance and create more places for lint to collect, so route design affects maintenance." },
      bookingFaq,
    ],
    internalLinks,
    sources: [sources[4]],
  },
  {
    slug: "prepare-for-appliance-installation",
    h1: "How Should You Prepare for Appliance Installation in Macon?",
    title: "Appliance Installation Preparation in Macon, GA",
    description:
      "Prepare dimensions, access, utilities, connections, flooring, and the appliance model before an installation estimate in Macon.",
    directAnswer:
      "Before appliance installation, confirm the exact model and dimensions, measure the opening and access route, clear the work area, identify water, drain, power, gas, and vent connections, and disclose stairs or tight turns. Do not assume an appliance fits because its category or nominal width matches the old one.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readTime: "5 min read",
    sections: [
      {
        heading: "What should you measure?",
        answer:
          "Measure the appliance opening, doorways, hallways, turns, stairs, and clearance needed for doors, hoses, ventilation, and service access.",
        paragraphs: ["Use the manufacturer’s specification sheet for the exact model; store listings may omit installation clearances."],
      },
      {
        heading: "Which site details change the installation?",
        answer:
          "Connection type, shutoff condition, drain position, vent route, flooring, cabinetry, stacking, mounting, and removal access can all change the scope.",
        paragraphs: ["Photographs and model information help screen the request, but site conditions are confirmed before work proceeds."],
      },
    ],
    faqs: [
      { question: "Should I buy connection parts before installation?", answer: "Use the exact appliance and site requirements. Buying generic hoses, cords, or adapters too early can create the wrong fit." },
      { question: "Can Appliance King install gas appliances?", answer: "Gas-related requests must be screened for the exact scope and lawful qualification requirements. Gas odor requires leaving the area and contacting the gas utility or emergency services." },
      bookingFaq,
    ],
    internalLinks,
    sources: sources.slice(0, 2),
  },
  {
    slug: "buying-used-appliance-checklist",
    h1: "What Should You Check Before Buying a Used Appliance?",
    title: "Used Appliance Buying Checklist | Macon, GA",
    description:
      "Use this practical checklist to compare fit, model, condition, connections, transport, and operating needs before buying used appliances.",
    directAnswer:
      "Before buying a used appliance, verify the exact dimensions and model, inspect cords, hoses, seals, racks, controls, rust, odor, and structural condition, ask what is known about operation, and plan transport and installation. Inventory and condition vary, so confirm the specific unit rather than relying on a category description.",
    published: "2026-07-30",
    updated: "2026-07-30",
    readTime: "6 min read",
    sections: [
      {
        heading: "What should you inspect on the actual appliance?",
        answer:
          "Inspect the model label, exterior and interior condition, doors and seals, controls, shelves or racks, connections, corrosion, odors, and visible damage.",
        paragraphs: ["Ask direct questions about what has been checked and what remains unknown. A clean appearance is not proof of complete function."],
      },
      {
        heading: "What costs are easy to forget?",
        answer:
          "Transport, stairs, protective equipment, connection parts, installation, haul-away, fit changes, and downtime can change the total purchase.",
        paragraphs: ["Measure both the final opening and every part of the delivery path before committing to a unit."],
        bullets: ["Opening", "Door swing", "Delivery path", "Connections", "Transport", "Installation"],
      },
    ],
    faqs: [
      { question: "Does Appliance King always have the same used inventory?", answer: "No. Used-appliance availability changes. Call to ask what is currently available and confirm the specific item before making plans." },
      { question: "Will Appliance King buy any appliance?", answer: "No universal purchase promise is made. Interest depends on appliance type, model, condition, access, and current business needs." },
      bookingFaq,
    ],
    internalLinks,
    sources: [sources[3]],
  },
];

export const articles = [pillarArticle, ...supportingArticles];
export const articleBySlug = new Map(articles.map((article) => [article.slug, article]));
