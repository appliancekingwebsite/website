export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePageData = {
  slug: string;
  name: string;
  navLabel: string;
  h1: string;
  title: string;
  description: string;
  directAnswer: string;
  summary: string;
  includes: string[];
  signs: string[];
  estimateFactors: string[];
  timeline: string;
  residential: string;
  commercial: string;
  safetyNote?: string;
  faq: FaqItem[];
};

const sharedBookingFaq = {
  question: "What happens after I book an estimate?",
  answer:
    "Choose an available time through Appliance King’s booking calendar. Be ready to share the appliance type, the symptoms you noticed, and any access details. The visit is used to inspect the scope and explain the next practical step before work moves forward.",
};

export const services: ServicePageData[] = [
  {
    slug: "appliance-repair",
    name: "Appliance Repair",
    navLabel: "Appliance Repair",
    h1: "Appliance Repair in Macon, GA",
    title: "Appliance Repair in Macon, GA | Appliance King",
    description:
      "Book appliance repair in Macon, GA for washers, dryers, refrigerators, dishwashers, ranges and other major household appliances.",
    directAnswer:
      "Appliance King repairs major household appliances for homes and commercial properties in Macon and nearby Middle Georgia communities. Book an estimate for a washer, dryer, refrigerator, freezer, dishwasher, range, oven, or stove that is leaking, noisy, not heating, not cooling, or not completing its normal cycle.",
    summary:
      "A useful repair visit begins with the symptom, not a guess. Appliance King looks at what the machine is doing, how the problem developed, and whether repair is a sensible next step for that appliance.",
    includes: [
      "Symptom review and appliance inspection",
      "Washer and dryer repair",
      "Refrigerator and freezer repair",
      "Dishwasher repair",
      "Range, oven, and stove repair",
      "Repair-or-replace guidance based on the observed condition",
    ],
    signs: [
      "The appliance will not start or complete a cycle",
      "Water, heat, or cooling performance has changed",
      "New grinding, squealing, clicking, or rattling sounds",
      "Leaks, unusual odors, or repeated error messages",
      "The machine needs a second cycle to do the same work",
    ],
    estimateFactors: [
      "Appliance type and installation",
      "Symptoms and diagnostic time",
      "Access to the machine and connected utilities",
      "Parts condition and availability",
      "Whether related venting or installation work is involved",
    ],
    timeline:
      "Timing depends on the appliance, the fault, access, and any required parts. Booking the estimate first allows the condition and next steps to be discussed accurately.",
    residential:
      "Home service is available for the kitchen and laundry appliances a household depends on every day.",
    commercial:
      "Commercial and property-management requests are reviewed by equipment type, access, usage, and project scope.",
    faq: [
      {
        question: "Which appliances does Appliance King repair?",
        answer:
          "Appliance King works on major household appliances including washers, dryers, refrigerators, freezers, dishwashers, ranges, ovens, and stoves. Book an estimate with the appliance type and symptoms so the request can be reviewed before the visit.",
      },
      {
        question: "Should I repair or replace a broken appliance?",
        answer:
          "The answer depends on age, condition, failure type, repair scope, and how well the appliance met your needs before it failed. An inspection can help separate a contained repair from a machine with multiple age-related problems.",
      },
      sharedBookingFaq,
      {
        question: "Does Appliance King serve areas outside Macon?",
        answer:
          "Yes. Standard coverage includes Macon and nearby communities such as Warner Robins, Gray, Byron, Forsyth, Centerville, Lizella, Bolingbroke, Juliette, and Dry Branch. Larger Atlanta projects may be considered by request.",
      },
    ],
  },
  {
    slug: "washer-repair",
    name: "Washer Repair",
    navLabel: "Washer Repair",
    h1: "Washer Repair in Macon, GA",
    title: "Washer Repair in Macon, GA | Appliance King",
    description:
      "Book washer repair in Macon for drainage problems, leaks, shaking, cycle failures, unusual noise, and other washing machine issues.",
    directAnswer:
      "Appliance King provides washing machine repair in Macon for washers that will not drain, spin, fill, unlock, or complete a cycle. Service is available for common laundry problems including leaks, heavy vibration, unusual noise, standing water, and performance changes that make every load harder to finish.",
    summary:
      "Washer problems can come from the machine, its hoses, drainage, balance, or installation. The service visit is structured to identify the symptom and the surrounding conditions before a repair direction is recommended.",
    includes: [
      "Drain, fill, spin, and cycle symptom review",
      "Leak-source inspection",
      "Noise and vibration assessment",
      "Door, lid, and lock concerns",
      "Hose, level, and installation checks",
    ],
    signs: [
      "Water remains in the drum",
      "The washer walks or shakes during spin",
      "The door or lid will not unlock",
      "The cycle stops unexpectedly",
      "Water appears under or behind the washer",
    ],
    estimateFactors: [
      "Top-load or front-load configuration",
      "Observed cycle and error behavior",
      "Drain and water connection access",
      "Condition of hoses, seals, and moving components",
      "Parts and installation requirements",
    ],
    timeline:
      "Some issues can be isolated during the first inspection; others require a part or follow-up work. The estimate visit determines the practical sequence.",
    residential:
      "Residential washer service focuses on getting the laundry area safe, level, and usable again.",
    commercial:
      "Laundry equipment used in rentals or light commercial settings is reviewed with usage volume and access in mind.",
    faq: [
      {
        question: "Why is my washer not draining?",
        answer:
          "Standing water can be connected to a blocked drain path, pump problem, hose position, control issue, or an item caught where it should not be. Stop repeated cycles if water is not moving normally and book an inspection.",
      },
      {
        question: "Why does my washer shake during the spin cycle?",
        answer:
          "An unbalanced load can cause temporary movement, but repeated heavy shaking may also involve leveling, installation, suspension, or worn moving components. Persistent movement should be checked before it damages the machine or nearby surfaces.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "dryer-repair",
    name: "Dryer Repair",
    navLabel: "Dryer Repair",
    h1: "Dryer Repair in Macon, GA",
    title: "Dryer Repair in Macon, GA | Appliance King",
    description:
      "Book dryer repair in Macon for no heat, long dry times, noise, shutdowns, tumbling problems, or possible vent restrictions.",
    directAnswer:
      "Appliance King repairs dryers in Macon that are not heating, not tumbling, shutting off, making new noises, or taking too long to dry clothes. Because dryer performance can also be affected by the exhaust path, the service can distinguish a machine problem from a vent-cleaning or vent-repair need.",
    summary:
      "A dryer and its vent work as one airflow system. Looking at heat, tumbling, controls, and the exhaust path helps avoid treating only one part of the problem.",
    includes: [
      "Heat and tumbling symptom review",
      "Noise and shutdown assessment",
      "Door and control concerns",
      "Visible connection and airflow checks",
      "Coordination with dryer vent cleaning or repair when relevant",
    ],
    signs: [
      "Clothes require repeated cycles",
      "The drum turns but there is little or no heat",
      "The dryer stops before the load is dry",
      "The machine feels unusually hot",
      "Squealing, scraping, or thumping begins",
    ],
    estimateFactors: [
      "Gas or electric configuration",
      "Heat, tumble, and control symptoms",
      "Dryer and vent access",
      "Condition of the exhaust connection",
      "Parts and follow-up requirements",
    ],
    timeline:
      "The first visit determines whether the dryer, the vent path, or both need attention. Repair timing depends on the condition and required parts.",
    residential:
      "Home dryer service covers common laundry-room equipment and related vent conditions.",
    commercial:
      "Rental and light commercial dryer requests are reviewed with cycle volume, access, and exhaust layout in mind.",
    safetyNote:
      "Stop using a dryer that smells burned, smokes, sparks, or becomes abnormally hot. Disconnect it if safe and seek appropriate emergency help when there is an active fire risk.",
    faq: [
      {
        question: "Why is my dryer running but not heating?",
        answer:
          "A no-heat symptom can involve the appliance, its power or fuel supply, controls, safety components, or airflow. The correct next step depends on whether the drum tumbles, the cycle stops, and the vent is moving air normally.",
      },
      {
        question: "Can a blocked vent make a dryer seem broken?",
        answer:
          "Yes. Restricted airflow can lengthen dry times, raise operating temperature, and contribute to shutdowns. A dryer inspection should consider the exhaust path instead of assuming every performance problem is inside the appliance.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "refrigerator-freezer-repair",
    name: "Refrigerator & Freezer Repair",
    navLabel: "Refrigerator & Freezer",
    h1: "Refrigerator and Freezer Repair in Macon, GA",
    title: "Refrigerator Repair in Macon, GA | Appliance King",
    description:
      "Book refrigerator or freezer repair in Macon for cooling changes, leaks, frost, noise, cycling, and ice maker concerns.",
    directAnswer:
      "Appliance King provides refrigerator and freezer repair in Macon for cooling loss, water leaks, heavy frost, repeated cycling, unusual noise, and ice-making concerns. Because food temperature can change quickly, note when the symptom started, minimize unnecessary door opening, and move perishable food when safety is uncertain.",
    summary:
      "Cooling problems are easier to assess when temperature change, frost location, noise, and recent behavior are described clearly. The inspection looks at the visible condition before a repair direction is discussed.",
    includes: [
      "Cooling and temperature symptom review",
      "Leak and frost assessment",
      "Door and seal concerns",
      "Noise and cycling observations",
      "Ice maker and freezer performance concerns",
    ],
    signs: [
      "Fresh food or frozen food is warming",
      "Frost builds up unusually fast",
      "Water appears inside or below the unit",
      "The refrigerator runs constantly or clicks repeatedly",
      "Ice production changes unexpectedly",
    ],
    estimateFactors: [
      "Refrigerator configuration and accessibility",
      "Temperature pattern and symptom history",
      "Visible frost, water, and airflow conditions",
      "Component and parts requirements",
      "Built-in or freestanding installation",
    ],
    timeline:
      "Cooling complaints are assessed according to current scheduling, but repair timing depends on diagnosis, access, and parts requirements.",
    residential:
      "Residential service covers common kitchen refrigerators, freezers, and related cooling concerns.",
    commercial:
      "Commercial cooling requests are reviewed individually because equipment design and food-safety requirements vary.",
    safetyNote:
      "Use food-safety guidance when refrigerator or freezer temperatures have risen. Appliance King does not determine whether exposed food remains safe to consume.",
    faq: [
      {
        question: "What should I do if my refrigerator is not cooling?",
        answer:
          "Confirm the unit has power, avoid repeated door opening, note any sounds or error messages, and protect perishable food according to food-safety guidance. Book an estimate rather than repeatedly changing controls without knowing the cause.",
      },
      {
        question: "Is heavy freezer frost a repair sign?",
        answer:
          "A small amount of frost can be normal in some situations, but rapid or heavy buildup may point to air leaks, door sealing, defrost behavior, or airflow concerns. The location and timing of the frost help narrow the issue.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "dishwasher-repair",
    name: "Dishwasher Repair",
    navLabel: "Dishwasher Repair",
    h1: "Dishwasher Repair in Macon, GA",
    title: "Dishwasher Repair in Macon, GA | Appliance King",
    description:
      "Book dishwasher repair in Macon for standing water, leaks, cleaning problems, unusual noise, door issues, and failed cycles.",
    directAnswer:
      "Appliance King repairs dishwashers in Macon that will not drain, leak, stop mid-cycle, leave dishes dirty, or make unfamiliar noises. The inspection considers the machine, its visible water connections, drainage path, loading conditions, and installation so the estimate is based on the actual symptom.",
    summary:
      "Dishwasher symptoms often show up as water where it should not be or cleaning performance that declines over time. Capturing when the issue occurs helps the inspection.",
    includes: [
      "Drainage and standing-water concerns",
      "Visible leak assessment",
      "Cleaning and cycle-performance review",
      "Door, latch, and rack concerns",
      "Noise and installation observations",
    ],
    signs: [
      "Water remains after the cycle",
      "Dishes are still dirty or gritty",
      "Water appears at the door or cabinet",
      "The cycle stops or will not begin",
      "New grinding, humming, or knocking sounds",
    ],
    estimateFactors: [
      "Built-in access and cabinet installation",
      "When the leak or drainage issue appears",
      "Condition of visible hoses and connections",
      "Control and cycle behavior",
      "Parts and follow-up requirements",
    ],
    timeline:
      "The inspection identifies whether the issue can be addressed in place or needs parts and follow-up. Timing is confirmed after the condition is seen.",
    residential:
      "Residential dishwasher work is coordinated around kitchen access and surrounding cabinets and floors.",
    commercial:
      "Commercial dishwashing equipment is reviewed by equipment type and operating requirements before scheduling.",
    faq: [
      {
        question: "Why is there water in the bottom of my dishwasher?",
        answer:
          "Standing water can involve a filter, drain path, hose, pump, disposal connection, or control issue. Avoid repeated cycles if water is not leaving normally, especially when a leak or overflow is possible.",
      },
      {
        question: "Why are my dishes still dirty after a full cycle?",
        answer:
          "Loading, spray movement, water temperature, filters, detergent, drainage, and machine components can all affect cleaning. A pattern that persists across normal loading and maintenance is worth inspecting.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "range-oven-stove-repair",
    name: "Range, Oven & Stove Repair",
    navLabel: "Range, Oven & Stove",
    h1: "Range, Oven and Stove Repair in Macon, GA",
    title: "Oven & Stove Repair in Macon, GA | Appliance King",
    description:
      "Book range, oven, or stove repair in Macon for uneven heating, ignition, burner, control, door, and temperature problems.",
    directAnswer:
      "Appliance King repairs ranges, ovens, and stoves in Macon with heating, burner, ignition, control, and door problems. Service begins with the appliance type, whether it is gas or electric, the exact symptom, and any unusual smell or visible damage so unsafe conditions are not treated as routine.",
    summary:
      "Cooking-appliance problems deserve a precise description. Whether one burner fails or the whole oven heats incorrectly changes the likely scope and safety response.",
    includes: [
      "Heating and temperature concerns",
      "Burner and element issues",
      "Ignition and control symptoms",
      "Door and seal concerns",
      "Visible installation observations",
    ],
    signs: [
      "The oven does not reach or hold temperature",
      "Food cooks unevenly",
      "A burner or element will not heat",
      "Ignition clicks without lighting",
      "The door will not close or seal normally",
    ],
    estimateFactors: [
      "Gas or electric configuration",
      "Freestanding, slide-in, or built-in access",
      "Specific burner, element, or oven behavior",
      "Visible damage and control symptoms",
      "Parts and installation requirements",
    ],
    timeline:
      "Inspection and repair timing depend on the appliance configuration, fault, access, and parts. The estimate visit determines the correct next step.",
    residential:
      "Residential service covers common kitchen ranges, ovens, stoves, and cooktop-related concerns.",
    commercial:
      "Commercial cooking equipment is reviewed individually and is not assumed to fall within standard household-appliance service.",
    safetyNote:
      "If you smell gas, see sparking, or suspect an active electrical or fuel hazard, stop using the appliance, leave the area when appropriate, and contact the utility or emergency services.",
    faq: [
      {
        question: "Why is my oven heating unevenly?",
        answer:
          "Uneven heating can relate to airflow, sensors, elements, ignition, controls, rack position, or door sealing. Note whether the issue affects every recipe and whether the displayed temperature differs from actual cooking results.",
      },
      {
        question: "What should I do if a gas burner will not ignite?",
        answer:
          "Turn the control off if ignition does not occur. Do not keep releasing gas while troubleshooting. If gas odor persists, follow utility and emergency guidance rather than booking through the website as though it were a routine symptom.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "appliance-installation",
    name: "Appliance Installation",
    navLabel: "Appliance Installation",
    h1: "Appliance Installation in Macon, GA",
    title: "Appliance Installation in Macon, GA | Appliance King",
    description:
      "Book appliance installation in Macon for major household appliances with access, connection, leveling, and basic operation checks.",
    directAnswer:
      "Appliance King installs major household appliances in Macon when the location, utilities, dimensions, and connections are ready for the selected unit. Installation planning covers access, removal or movement needs, fit, leveling, visible connections, and a basic operation check without claiming licensed trade work outside the confirmed scope.",
    summary:
      "A successful installation starts before the appliance enters the room. Dimensions, access turns, floor condition, connections, and manufacturer requirements all need to match the unit.",
    includes: [
      "Access and fit review",
      "Positioning and leveling",
      "Visible manufacturer-specified connections within scope",
      "Basic operation check",
      "Removal or movement planning by request",
    ],
    signs: [
      "A replacement appliance is arriving",
      "The current appliance is unlevel or unstable",
      "A move requires reconnecting an appliance",
      "A rental turnover needs appliance setup",
      "The opening or access path may be tight",
    ],
    estimateFactors: [
      "Appliance dimensions and weight",
      "Stairs, doors, hallways, and floor protection",
      "Existing utility connections",
      "Removal or relocation of the old unit",
      "Built-in trim, cabinetry, and manufacturer requirements",
    ],
    timeline:
      "Timing depends on access, readiness, appliance type, and whether the existing installation needs correction. Share dimensions and photos before the appointment when possible.",
    residential:
      "Home installation is available for common kitchen and laundry appliances when the site is ready.",
    commercial:
      "Property managers and commercial clients can request coordinated installation for turnovers or equipment replacement.",
    safetyNote:
      "New circuits, panel work, rewiring, gas-line changes, plumbing relocation, and other licensed trade work are outside ordinary handyman installation scope unless handled by an appropriately licensed professional.",
    faq: [
      {
        question: "What should I measure before appliance installation?",
        answer:
          "Measure the appliance opening, doorways, hallways, turns, stairs, and required clearances. Confirm the appliance dimensions from its documentation and identify water, drain, gas, vent, and electrical connections before delivery day.",
      },
      {
        question: "Can Appliance King remove the old appliance?",
        answer:
          "Removal, movement, purchase, or haul-away needs should be discussed when booking because access, condition, and destination affect the scope. Do not assume an old appliance can be removed without prior coordination.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "washer-dryer-installation",
    name: "Washer & Dryer Installation",
    navLabel: "Washer & Dryer Installation",
    h1: "Washer and Dryer Installation in Macon, GA",
    title: "Washer & Dryer Installation in Macon | Appliance King",
    description:
      "Book washer and dryer installation in Macon with fit, leveling, visible connection, vent-path, and operation checks.",
    directAnswer:
      "Appliance King installs washers and dryers in Macon with attention to access, leveling, water and drain connections, dryer configuration, and the visible exhaust path. Share whether the unit is gas or electric, stacked or side-by-side, and whether the old machines need to be moved before the appointment.",
    summary:
      "Laundry installation links two machines to water, drainage, power or fuel, and airflow. Each connection must match the equipment and the room.",
    includes: [
      "Washer positioning and leveling",
      "Visible water and drain connection checks",
      "Dryer positioning and configuration review",
      "Visible vent connection and routing review",
      "Basic operation check",
    ],
    signs: [
      "A new laundry pair is being delivered",
      "A stacked unit needs setup",
      "The washer moves because it is not level",
      "The dryer vent connection is crushed or loose",
      "A move requires safe reconnection",
    ],
    estimateFactors: [
      "Stacked or side-by-side layout",
      "Gas or electric dryer",
      "Hose and vent condition",
      "Room and doorway access",
      "Old-unit movement or removal",
    ],
    timeline:
      "Straightforward installations may fit one visit, while access, damaged connections, or vent repairs can change the scope. The estimate confirms readiness.",
    residential:
      "Residential installation covers common laundry-room and closet configurations.",
    commercial:
      "Rental and light commercial laundry installations are reviewed based on equipment, access, and usage.",
    safetyNote:
      "Gas-line alteration, new electrical circuits, plumbing relocation, and other licensed work require the appropriate licensed contractor.",
    faq: [
      {
        question: "Do I need a new dryer vent hose for installation?",
        answer:
          "The existing connector should be inspected for condition, fit, crushing, and compatibility. If it is damaged, unsuitable, or restricts airflow, replacement or vent repair may be part of the recommended scope.",
      },
      {
        question: "Can a washer and dryer be installed in a tight closet?",
        answer:
          "Only when manufacturer clearances, door access, ventilation, connections, and service access can be maintained. Share the closet and appliance dimensions before scheduling so the fit can be reviewed.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "dryer-vent-cleaning-repair",
    name: "Dryer Vent Cleaning & Repair",
    navLabel: "Dryer Vent Cleaning",
    h1: "Dryer Vent Cleaning and Repair in Macon, GA",
    title: "Dryer Vent Cleaning in Macon, GA | Appliance King",
    description:
      "Book dryer vent cleaning or repair in Macon for long dry times, poor airflow, loose connections, damaged duct, and lint buildup.",
    directAnswer:
      "Appliance King cleans and repairs dryer vent paths in Macon when lint buildup, damaged connections, crushed duct, or poor routing reduces airflow. Longer dry times, excess heat, weak exterior airflow, and lint around the connection are common reasons to inspect both the dryer and its exhaust path.",
    summary:
      "The dryer cannot move moisture out of clothing if air cannot move through the duct. Cleaning addresses buildup; repair addresses a damaged, loose, crushed, or poorly routed section.",
    includes: [
      "Accessible vent-path inspection",
      "Lint and restriction cleaning",
      "Visible connector repair or replacement by scope",
      "Exterior termination observation when accessible",
      "Dryer performance coordination when needed",
    ],
    signs: [
      "Loads take longer than before",
      "The dryer or laundry room feels unusually hot",
      "Airflow at the exterior termination is weak",
      "Lint gathers around the dryer connection",
      "The visible duct is loose, crushed, torn, or sharply bent",
    ],
    estimateFactors: [
      "Vent length and routing",
      "Roof, wall, crawlspace, or upper-floor access",
      "Condition and material of the duct",
      "Severity and location of restrictions",
      "Repair versus cleaning scope",
    ],
    timeline:
      "Cleaning time depends on vent length, routing, access, and buildup. Repair work may require additional materials or access planning.",
    residential:
      "Residential service covers laundry rooms, closets, and common wall or roof exhaust layouts when safely accessible.",
    commercial:
      "Multi-unit and commercial vent requests are scoped by the number of machines, shared routing, access, and operating requirements.",
    safetyNote:
      "Stop using a dryer that smokes, sparks, smells burned, or becomes abnormally hot. An active fire or gas concern requires emergency or utility help, not an online booking.",
    faq: [
      {
        question: "How often should a dryer vent be cleaned?",
        answer:
          "There is no single interval for every home. Usage, pets, vent length, turns, exterior termination, and dryer performance all matter. Annual inspection is a practical starting point, with earlier attention when dry times or heat increase.",
      },
      {
        question: "What is the difference between vent cleaning and vent repair?",
        answer:
          "Cleaning removes lint and restrictions from an intact path. Repair corrects damaged, disconnected, crushed, unsuitable, or poorly routed duct sections. Some systems need both before airflow is restored.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "handyman-services",
    name: "Handyman Services",
    navLabel: "Handyman Services",
    h1: "Handyman Services in Macon, GA",
    title: "Handyman Services in Macon, GA | Appliance King",
    description:
      "Book practical handyman services in Macon for small repairs, fixture replacements, assembly, punch lists, and appliance-adjacent work.",
    directAnswer:
      "Appliance King provides practical handyman service in Macon for small repairs, fixture replacements, assembly, punch lists, appliance-adjacent work, and property upkeep. The scope is reviewed before booking so regulated electrical, plumbing, structural, or permitted work can be separated from ordinary handyman tasks.",
    summary:
      "A handyman visit works best when the list is specific. Photos, dimensions, access details, and a clear priority order make it easier to scope the work.",
    includes: [
      "Small repair and punch-list work",
      "Assembly and mounting by scope",
      "Minor fixture and hardware replacement",
      "Appliance-adjacent preparation and finish work",
      "Rental-turnover and commercial maintenance requests",
    ],
    signs: [
      "Several small repairs are accumulating",
      "A rental turnover needs a defined punch list",
      "An appliance project needs surrounding finish work",
      "Hardware, shelving, or fixtures need attention",
      "A property needs recurring practical maintenance",
    ],
    estimateFactors: [
      "Task list and priority",
      "Materials and dimensions",
      "Height, access, and surface condition",
      "Whether licensed or permitted work is involved",
      "Residential or commercial scheduling needs",
    ],
    timeline:
      "Small tasks may be grouped into one visit when the scope and materials are clear. Larger lists are scheduled based on priority and access.",
    residential:
      "Residential service helps homeowners clear defined repair and installation lists.",
    commercial:
      "Commercial service supports property managers, rentals, offices, and small facilities with scoped maintenance work.",
    safetyNote:
      "Appliance King does not present ordinary handyman service as licensed electrical, plumbing, HVAC, or structural contracting.",
    faq: [
      {
        question: "What kinds of handyman jobs can I book?",
        answer:
          "Book defined small repairs, assembly, hardware or fixture replacement, appliance-adjacent work, punch lists, and property upkeep. Share the complete task list so regulated or out-of-scope work can be identified before scheduling.",
      },
      {
        question: "Can I combine several small tasks in one visit?",
        answer:
          "Often, yes, when the tasks, materials, access, and priority are clear. Send a written list or discuss it during booking so enough time can be considered.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "minor-electrical-repairs",
    name: "Minor Electrical Tasks",
    navLabel: "Minor Electrical Tasks",
    h1: "Minor Electrical Handyman Tasks in Macon, GA",
    title: "Minor Electrical Handyman Tasks in Macon | Appliance King",
    description:
      "Book limited, minor electrical handyman tasks in Macon. Licensed contractor work, new circuits, panels, and rewiring are excluded.",
    directAnswer:
      "Appliance King handles only limited, minor electrical handyman tasks in Macon when they fall within lawful handyman scope. The service does not advertise panel work, new circuits, rewiring, permitted electrical contracting, or other work that requires a Georgia electrical contractor license.",
    summary:
      "Electrical symptoms can signal risk beyond a small fixture task. The request is screened before scheduling, and licensed work is not disguised as handyman service.",
    includes: [
      "Limited fixture replacement by confirmed scope",
      "Simple fan or device replacement where lawful",
      "Minor appliance-adjacent electrical tasks",
      "Visible condition review before work",
      "Referral-out decision when licensed work is required",
    ],
    signs: [
      "A like-for-like fixture needs replacement",
      "An appliance installation raises a connection question",
      "A fan or simple device needs scoped attention",
      "The task may involve hidden wiring or a new circuit",
      "Burning, sparking, or repeated breaker trips are present",
    ],
    estimateFactors: [
      "Exact device and existing condition",
      "Whether wiring changes are required",
      "Permit and licensing requirements",
      "Access and mounting condition",
      "Whether a licensed contractor must take over",
    ],
    timeline:
      "Requests are screened before scheduling. If the task requires licensed contracting, the correct next step is a qualified licensed professional rather than a handyman appointment.",
    residential:
      "Residential work is limited to clearly defined minor tasks that do not require licensed electrical contracting.",
    commercial:
      "Commercial electrical requests are more likely to involve code, permitting, or facility requirements and are screened accordingly.",
    safetyNote:
      "Sparking, smoke, burning odor, hot devices, exposed energized parts, or repeated breaker trips require immediate safety action and an appropriately qualified electrician or emergency response.",
    faq: [
      {
        question: "Is Appliance King a licensed electrical contractor?",
        answer:
          "No licensed electrical-contractor claim is made on this site. Appliance King limits this service to minor handyman tasks and does not advertise new circuits, panel work, rewiring, permitted contracting, or other licensed electrical work.",
      },
      {
        question: "When should I call a licensed electrician instead?",
        answer:
          "Use a licensed electrical contractor for new circuits, panel work, rewiring, code corrections, permit work, persistent breaker trips, or any task beyond a limited like-for-like handyman replacement. Active smoke, sparking, or fire risk requires emergency action.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "landscaping-property-maintenance",
    name: "Landscaping & Property Maintenance",
    navLabel: "Landscaping & Property",
    h1: "Landscaping and Property Maintenance in Macon, GA",
    title: "Property Maintenance in Macon, GA | Appliance King",
    description:
      "Book practical landscaping and property maintenance in Macon for cleanup, trimming, exterior punch lists, and turnover support.",
    directAnswer:
      "Appliance King provides practical landscaping and property-maintenance support in Macon for cleanup, trimming, exterior punch lists, turnover preparation, and defined upkeep projects. The page does not promise full landscape architecture, tree removal, pesticide application, or licensed specialty work outside the confirmed scope.",
    summary:
      "Exterior maintenance is scoped by the actual property, access, debris, tools, and disposal needs. Clear photos and priorities help shape a realistic estimate.",
    includes: [
      "Seasonal and project cleanup",
      "Basic trimming and tidy-up work",
      "Exterior punch lists",
      "Rental-turnover property preparation",
      "Coordination with interior handyman tasks",
    ],
    signs: [
      "A property needs cleanup before listing or turnover",
      "Overgrowth is affecting access or presentation",
      "Several exterior maintenance tasks need coordination",
      "A small commercial property needs routine attention",
      "Interior and exterior punch lists should be combined",
    ],
    estimateFactors: [
      "Property size and access",
      "Task list and vegetation condition",
      "Debris volume and disposal",
      "Tools, materials, and height",
      "One-time or recurring scope",
    ],
    timeline:
      "Scheduling and duration depend on property condition, weather, access, disposal, and the defined task list.",
    residential:
      "Residential work supports homeowners, landlords, and sellers with defined cleanup and upkeep projects.",
    commercial:
      "Commercial work supports small properties and managers with scoped maintenance rather than large-scale grounds contracts.",
    faq: [
      {
        question: "What landscaping work does Appliance King provide?",
        answer:
          "The service focuses on practical cleanup, basic trimming, exterior punch lists, turnover preparation, and defined upkeep. Share photos and the exact task list so larger specialty or licensed work can be identified.",
      },
      {
        question: "Can interior and exterior tasks be booked together?",
        answer:
          "Yes, a combined list can be reviewed. Group the tasks by priority and include photos, access notes, dimensions, and any disposal needs to help scope the visit.",
      },
      sharedBookingFaq,
    ],
  },
  {
    slug: "commercial-property-maintenance",
    name: "Commercial Property Maintenance",
    navLabel: "Commercial Maintenance",
    h1: "Commercial Property Maintenance in Macon, GA",
    title: "Commercial Maintenance in Macon, GA | Appliance King",
    description:
      "Book commercial appliance and property maintenance in Macon for rentals, offices, small facilities, turnovers, and defined repair lists.",
    directAnswer:
      "Appliance King supports Macon landlords, property managers, offices, and small commercial properties with appliance repair, installation, turnover punch lists, dryer-vent work, and defined maintenance tasks. Commercial requests are scoped by equipment, access, operating hours, safety requirements, and whether licensed specialty work is involved.",
    summary:
      "Commercial maintenance succeeds when responsibility, access, approvals, and completion expectations are clear. The estimate begins with the site and equipment list.",
    includes: [
      "Appliance repair and installation requests",
      "Rental-turnover punch lists",
      "Laundry and dryer-vent concerns",
      "Interior and exterior maintenance lists",
      "Recurring scope discussions for suitable properties",
    ],
    signs: [
      "Turnovers create repeated repair lists",
      "Several units need appliance coordination",
      "A small facility needs one practical point of contact",
      "Laundry equipment or vents need attention",
      "Access and work-hour constraints require planning",
    ],
    estimateFactors: [
      "Property and equipment count",
      "Tenant, manager, and key access",
      "Operating-hour restrictions",
      "Approval and documentation requirements",
      "Licensed specialty work and subcontractor boundaries",
    ],
    timeline:
      "Commercial timing is set after scope, access, approvals, operating needs, and equipment requirements are understood.",
    residential:
      "Homeowners should use the relevant residential service page for a simpler appointment path.",
    commercial:
      "Commercial work is intended for landlords, property managers, rental operators, offices, and small facilities with a defined scope.",
    faq: [
      {
        question: "Does Appliance King work with property managers?",
        answer:
          "Yes. Property managers can request appliance, turnover, vent, and practical maintenance work. Provide unit access, appliance details, approval limits, and the completion requirements when booking.",
      },
      {
        question: "Can commercial maintenance be recurring?",
        answer:
          "Recurring work may be considered when the property, task pattern, access, and scheduling expectations are a good fit. The site does not promise a plan until the scope is reviewed.",
      },
      sharedBookingFaq,
    ],
  },
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, ServicePageData>;

export type LocationPageData = {
  slug: string;
  city: string;
  county: string;
  h1: string;
  title: string;
  description: string;
  directAnswer: string;
  localNote: string;
  nearby: string[];
  faq: FaqItem[];
};

export const locations: LocationPageData[] = [
  {
    slug: "macon-ga",
    city: "Macon",
    county: "Macon-Bibb County",
    h1: "Appliance Repair and Handyman Service in Macon, GA",
    title: "Appliance Repair in Macon, GA | Appliance King",
    description:
      "Book appliance repair, installation, dryer vent, used appliance, and handyman service with Appliance King in Macon, Georgia.",
    directAnswer:
      "Macon is Appliance King’s primary service market for major appliance repair, appliance installation, dryer-vent work, used appliance buying and selling, and practical handyman support. Homeowners, landlords, property managers, and small commercial operators can call or book an estimate online.",
    localNote:
      "Macon appointments form the center of the normal route. Service availability still depends on the exact address, task, equipment, access, and schedule.",
    nearby: ["Lizella", "Bolingbroke", "Dry Branch", "Gray", "Byron"],
    faq: [
      {
        question: "What Appliance King services are available in Macon?",
        answer:
          "Macon customers can request major appliance repair, appliance installation, washer and dryer work, dryer vent cleaning or repair, used appliance buying and selling, handyman tasks, landscaping support, and scoped commercial maintenance.",
      },
      {
        question: "How do I book Appliance King in Macon?",
        answer:
          "Call 478-273-7539 or choose an available estimate time through the online calendar. Share the appliance, symptom, address area, access, and any related tasks.",
      },
    ],
  },
  {
    slug: "warner-robins-ga",
    city: "Warner Robins",
    county: "Houston County",
    h1: "Appliance Repair in Warner Robins, GA",
    title: "Appliance Repair in Warner Robins | Appliance King",
    description:
      "Request appliance repair, installation, dryer vent, and property maintenance service in Warner Robins, Georgia.",
    directAnswer:
      "Appliance King serves Warner Robins as part of its normal Middle Georgia coverage for major appliance repair, installation, dryer-vent work, used appliance requests, and practical property maintenance. Availability depends on the address, job scope, equipment, and route schedule.",
    localNote:
      "Warner Robins requests are coordinated from the Macon service base. Customers should include their appliance type and neighborhood or ZIP code when booking.",
    nearby: ["Centerville", "Byron", "Macon"],
    faq: [
      {
        question: "Does Appliance King travel from Macon to Warner Robins?",
        answer:
          "Yes. Warner Robins is within the normal service region, subject to route availability and the specific address and job scope.",
      },
      {
        question: "Can Warner Robins landlords request turnover help?",
        answer:
          "Yes. Appliance installation, repair, punch lists, dryer-vent work, and practical maintenance can be reviewed for rental turnovers.",
      },
    ],
  },
  {
    slug: "gray-ga",
    city: "Gray",
    county: "Jones County",
    h1: "Appliance Repair and Handyman Service in Gray, GA",
    title: "Appliance Repair in Gray, GA | Appliance King",
    description:
      "Book appliance repair, installation, dryer vent, and handyman support in Gray, Georgia with Appliance King.",
    directAnswer:
      "Appliance King serves Gray and nearby Jones County addresses with major appliance repair, appliance installation, dryer-vent cleaning or repair, used appliance requests, and practical handyman support. Confirm the address and project details when booking so travel and scope can be reviewed.",
    localNote:
      "Gray sits inside the standard Macon-centered service region. Rural access, property layout, and travel details may affect scheduling.",
    nearby: ["Macon", "Juliette", "Dry Branch"],
    faq: [
      {
        question: "Is Gray inside Appliance King’s normal service area?",
        answer:
          "Yes. Gray is listed as a standard service community, with scheduling based on address, scope, and route availability.",
      },
      {
        question: "Can I combine appliance and handyman work in Gray?",
        answer:
          "Yes, when the task list is shared before scheduling and the work stays within Appliance King’s confirmed scope.",
      },
    ],
  },
  {
    slug: "byron-ga",
    city: "Byron",
    county: "Peach County",
    h1: "Appliance Repair and Installation in Byron, GA",
    title: "Appliance Repair in Byron, GA | Appliance King",
    description:
      "Request appliance repair, washer and dryer installation, dryer vent, and property maintenance service in Byron, Georgia.",
    directAnswer:
      "Appliance King serves Byron with major appliance repair, washer and dryer installation, dryer-vent service, used appliance requests, and practical property-maintenance work. Booking details should include the equipment, symptoms, access, and whether an existing appliance must be moved.",
    localNote:
      "Byron appointments are coordinated with Macon and Warner Robins routes. Availability is confirmed after the address and job details are reviewed.",
    nearby: ["Warner Robins", "Centerville", "Macon"],
    faq: [
      {
        question: "Does Appliance King install washers and dryers in Byron?",
        answer:
          "Yes. Washer and dryer installation can be requested when the room, utilities, dimensions, and connections are ready for the selected equipment.",
      },
      {
        question: "Can I sell an appliance to Appliance King from Byron?",
        answer:
          "You can call or book an estimate to discuss the appliance, condition, access, and location. No purchase is promised until the item is reviewed.",
      },
    ],
  },
  {
    slug: "forsyth-ga",
    city: "Forsyth",
    county: "Monroe County",
    h1: "Appliance Repair and Property Service in Forsyth, GA",
    title: "Appliance Repair in Forsyth, GA | Appliance King",
    description:
      "Request appliance repair, installation, dryer vent, and practical property service in Forsyth, Georgia.",
    directAnswer:
      "Appliance King serves Forsyth as an outer standard service community for major appliance repair, appliance installation, dryer-vent work, used appliance requests, and defined property-maintenance projects. Exact addresses and larger scopes are confirmed before scheduling.",
    localNote:
      "Because Forsyth sits near the outer part of the regular coverage area, provide the exact address and full task list when booking.",
    nearby: ["Bolingbroke", "Juliette", "Macon"],
    faq: [
      {
        question: "Is Forsyth within Appliance King’s normal coverage?",
        answer:
          "Forsyth is included in the normal service region, with the exact address, route, and project scope confirmed before an appointment.",
      },
      {
        question: "Does Appliance King take commercial requests in Forsyth?",
        answer:
          "Commercial and property-management requests can be reviewed by equipment type, task list, access, operating hours, and travel requirements.",
      },
    ],
  },
];

type ExtendedCity = {
  slug: string;
  city: string;
  county: string;
  context: string;
  nearby: string[];
  extraQuestion: FaqItem;
};

function extendedCity(c: ExtendedCity): LocationPageData {
  return {
    slug: c.slug,
    city: c.city,
    county: c.county,
    h1: `Used Appliances and Appliance Repair in ${c.city}, GA`,
    title: `Appliance Repair & Used Sales in ${c.city}, GA | Appliance King`,
    description: `Buy used washers, dryers, ovens and refrigerators, book appliance repair, and arrange delivery or pickup in ${c.city}, GA with Appliance King.`,
    directAnswer: `Appliance King serves ${c.city} (${c.county}) from its Macon base. You can buy used washers, dryers, ovens and ranges, and refrigerators, book appliance repair, and arrange delivery or pickup. ${c.city} is inside the roughly 40-mile delivery and pickup radius, with the exact address and item confirmed when you call or book.`,
    localNote: c.context,
    nearby: c.nearby,
    faq: [
      {
        question: `Does Appliance King deliver used appliances to ${c.city}?`,
        answer: `Yes. ${c.city} is within about 40 miles of Macon, so delivery and pickup can be arranged. Call 478-273-7539 with the appliance and your address to confirm a time.`,
      },
      c.extraQuestion,
    ],
  };
}

locations.push(
  extendedCity({
    slug: "perry-ga",
    city: "Perry",
    county: "Houston County",
    context:
      "Perry sits along I-75 south of Macon, so deliveries and pickups follow the same corridor as Warner Robins and Centerville requests. Include your neighborhood or ZIP when you book.",
    nearby: ["Warner Robins", "Centerville", "Fort Valley"],
    extraQuestion: {
      question: "Can I book an appliance repair in Perry, GA?",
      answer:
        "Yes. Washer, dryer, refrigerator, dishwasher, and range repairs can be booked for Perry. Describe the appliance and the problem when you book on the calendar or call.",
    },
  }),
  extendedCity({
    slug: "fort-valley-ga",
    city: "Fort Valley",
    county: "Peach County",
    context:
      "Fort Valley is in Peach County, west of Macon. Landlords, students, and homeowners there can combine a used-appliance purchase with delivery in one trip.",
    nearby: ["Perry", "Byron", "Macon"],
    extraQuestion: {
      question: "Can I buy a washer and dryer set for a rental in Fort Valley?",
      answer:
        "Matching washer and dryer sets change from week to week. Call to ask what is on the floor, then arrange delivery to your Fort Valley address.",
    },
  }),
  extendedCity({
    slug: "milledgeville-ga",
    city: "Milledgeville",
    county: "Baldwin County",
    context:
      "Milledgeville is at the outer end of the normal radius, northeast of Macon. Share your exact address and the appliance details so delivery, pickup, or a repair visit can be scheduled in one trip.",
    nearby: ["Gray", "Irwinton", "Macon"],
    extraQuestion: {
      question: "Is Milledgeville inside the 40-mile service radius?",
      answer:
        "Milledgeville is within the roughly 40-mile area Appliance King serves from Macon. Call 478-273-7539 to confirm your address and a delivery or repair time.",
    },
  }),
  extendedCity({
    slug: "centerville-ga",
    city: "Centerville",
    county: "Houston County",
    context:
      "Centerville is a short drive from Macon and sits next to Warner Robins, so delivery and pickup requests there are among the easiest to schedule.",
    nearby: ["Warner Robins", "Byron", "Perry"],
    extraQuestion: {
      question: "What appliances can I buy in Centerville through Appliance King?",
      answer:
        "Appliance King sells used washers, dryers, ovens and ranges, and refrigerators. Inventory changes, so call to confirm what is available before you arrange delivery.",
    },
  }),
  extendedCity({
    slug: "barnesville-ga",
    city: "Barnesville",
    county: "Lamar County",
    context:
      "Barnesville is north of Macon along I-75 in Lamar County. Provide your address and the appliance you need so delivery and pickup can be planned around the route.",
    nearby: ["Forsyth", "Jackson", "Gordon"],
    extraQuestion: {
      question: "Can Appliance King pick up my old appliance in Barnesville?",
      answer:
        "Pickup is available within the service radius. Tell Appliance King the appliance type, model, and access details, and the next step will be confirmed by phone.",
    },
  }),
  extendedCity({
    slug: "jeffersonville-ga",
    city: "Jeffersonville",
    county: "Twiggs County",
    context:
      "Jeffersonville is the Twiggs County seat, southeast of Macon. Rural driveways and long roads are common, so mention access details when you book.",
    nearby: ["Gordon", "Irwinton", "Macon"],
    extraQuestion: {
      question: "How do I schedule appliance repair in Jeffersonville?",
      answer:
        "Pick an open time on the booking calendar or call 478-273-7539. Describe the appliance, the symptom, and any access notes for the property.",
    },
  }),
  extendedCity({
    slug: "cochran-ga",
    city: "Cochran",
    county: "Bleckley County",
    context:
      "Cochran is in Bleckley County, south of Macon along US-23 and I-16. It is near the edge of the normal radius, so confirm your address and the item before scheduling delivery or pickup.",
    nearby: ["Gordon", "Jeffersonville", "Macon"],
    extraQuestion: {
      question: "Is Cochran within the delivery area?",
      answer:
        "Cochran is within about 40 miles of Macon. Call to confirm your address, the appliance, and the delivery or pickup time.",
    },
  }),
);

export const locationBySlug = Object.fromEntries(
  locations.map((location) => [location.slug, location]),
) as Record<string, LocationPageData>;
