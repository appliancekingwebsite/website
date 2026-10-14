import type { FaqItem } from "@/lib/content";

export type ShopImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const dir = "/Images/appliances";

export const photos = {
  ranges: {
    src: `${dir}/black-glass-top-electric-ranges-macon-ga.webp`,
    alt: "Row of black and stainless glass-top electric ranges on the Appliance King showroom floor in Macon, GA",
    width: 1360,
    height: 765,
  },
  frontLoad: {
    src: `${dir}/front-load-washers-dryers-samsung-lg-macon-ga.webp`,
    alt: "Samsung and LG front-load washers and dryers wrapped for protection at Appliance King in Macon, GA",
    width: 1360,
    height: 1020,
  },
  cabrio: {
    src: `${dir}/whirlpool-cabrio-washer-dryer-macon-ga.webp`,
    alt: "Whirlpool Cabrio dryer next to a Whirlpool top-load washer available at Appliance King in Macon, GA",
    width: 1360,
    height: 1020,
  },
  maytag: {
    src: `${dir}/maytag-centennial-top-load-washer-macon-ga.webp`,
    alt: "Maytag Centennial top-load washer control panel and lid, used washer inventory in Macon, GA",
    width: 765,
    height: 1020,
  },
  rangeRow: {
    src: `${dir}/electric-range-showroom-row-macon-ga.webp`,
    alt: "Angled view of used electric ranges lined up in the Appliance King showroom in Macon, GA",
    width: 765,
    height: 1020,
  },
  geRange: {
    src: `${dir}/ge-stainless-electric-range-macon-ga.webp`,
    alt: "GE stainless steel electric range with glass cooktop for sale in Macon, GA",
    width: 574,
    height: 1020,
  },
  whirlpoolFridge: {
    src: `${dir}/whirlpool-stainless-side-by-side-refrigerator-macon-ga.webp`,
    alt: "Whirlpool stainless steel side-by-side refrigerator with water and ice dispenser in Macon, GA",
    width: 574,
    height: 1020,
  },
  fridgeLine: {
    src: `${dir}/stainless-refrigerator-lineup-macon-ga.webp`,
    alt: "Lineup of stainless steel refrigerators including French-door models at Appliance King in Macon, GA",
    width: 765,
    height: 1020,
  },
  pairSet: {
    src: `${dir}/whirlpool-top-load-washer-and-dryer-set-macon-ga.webp`,
    alt: "Matching Whirlpool dryer and top-load washer set at Appliance King in Macon, GA",
    width: 1360,
    height: 1020,
  },
  whiteRanges: {
    src: `${dir}/white-coil-top-electric-ranges-macon-ga.webp`,
    alt: "White coil-top electric ranges lined up in the Appliance King showroom in Macon, GA",
    width: 765,
    height: 1020,
  },
} satisfies Record<string, ShopImage>;

export const showroomVideo = `${dir}/appliance-king-showroom-tour-macon-ga.mp4`;

export type ShopCategory = {
  slug: string;
  name: string;
  short: string;
  h1: string;
  title: string;
  description: string;
  directAnswer: string;
  hero: ShopImage;
  gallery: ShopImage[];
  lookFor: string[];
  measure: string[];
  related: string[];
  faq: FaqItem[];
};

const deliveryFaq: FaqItem = {
  question: "Does Appliance King deliver and offer pickup?",
  answer:
    "Yes. Appliance King offers delivery and pickup in Macon and cities within about 40 miles, including Warner Robins, Perry, Fort Valley, Milledgeville, and Barnesville. Call 478-273-7539 to confirm your address, the appliance, and a time.",
};

const availabilityFaq: FaqItem = {
  question: "How do I know what is in stock?",
  answer:
    "Inventory changes as appliances sell and new ones arrive, so the photos on this page are examples of recent stock. Call 478-273-7539 or book a call to confirm what is available right now.",
};

export const shopCategories: ShopCategory[] = [
  {
    slug: "washers",
    name: "Used Washers",
    short: "Top-load and front-load washers",
    h1: "Used Washers for Sale in Macon, GA",
    title: "Used Washers for Sale in Macon, GA | Appliance King",
    description:
      "Shop used top-load and front-load washers in Macon, GA. Delivery and pickup within about 40 miles. Call or book a time with Appliance King.",
    directAnswer:
      "Appliance King sells used top-load and front-load washers in Macon, Georgia, and offers delivery and pickup within about 40 miles. Recent stock has included Whirlpool, Maytag, Samsung, and LG washers. Call or book a call to confirm what is on the floor today.",
    hero: photos.frontLoad,
    gallery: [photos.frontLoad, photos.cabrio, photos.maytag, photos.pairSet],
    lookFor: [
      "Top-load or front-load, based on your laundry space and hookups",
      "Capacity for your household size",
      "Control panel and lid or door condition",
      "Matching dryer if you want a pair",
    ],
    measure: [
      "Width, depth, and height of the space, plus clearance for hoses",
      "Door or lid swing, especially for front-load models",
      "Doorways, stairs, and hallway turns on the delivery path",
      "Water supply and drain connection positions",
    ],
    related: ["dryers", "refrigerators"],
    faq: [
      {
        question: "Should I buy a top-load or front-load washer?",
        answer:
          "Choose a top-load washer when you want simple controls and an easy fit in a standard laundry closet. Choose a front-load washer when you want to stack with a dryer or need a flatter top surface. Measure the space and door swing first.",
      },
      {
        question: "Can I buy a washer and dryer together?",
        answer:
          "Yes. Matching washer and dryer sets are often available, but the exact pairs change. Call to ask which sets are currently in stock.",
      },
      deliveryFaq,
      availabilityFaq,
    ],
  },
  {
    slug: "dryers",
    name: "Used Dryers",
    short: "Electric dryers and matching sets",
    h1: "Used Dryers for Sale in Macon, GA",
    title: "Used Dryers for Sale in Macon, GA | Appliance King",
    description:
      "Shop used electric dryers and washer-dryer sets in Macon, GA. Delivery and pickup within about 40 miles. Call or book with Appliance King.",
    directAnswer:
      "Appliance King sells used dryers and matching washer-dryer sets in Macon, Georgia, with delivery and pickup within about 40 miles. Before you buy, confirm your outlet type and vent route so the dryer fits and runs well. Call to check current stock.",
    hero: photos.cabrio,
    gallery: [photos.cabrio, photos.pairSet, photos.frontLoad, photos.maytag],
    lookFor: [
      "Electric or gas, matched to your home's hookup",
      "Drum capacity and control style",
      "Door seal and lint trap condition",
      "A matching washer if you want a set",
    ],
    measure: [
      "Space width and depth, including room behind the dryer for the vent",
      "Outlet type and cord compatibility",
      "Vent route and length to the outside",
      "Door swing direction",
    ],
    related: ["washers", "refrigerators"],
    faq: [
      {
        question: "What should I check before buying a used dryer?",
        answer:
          "Check the outlet type (electric or gas), the space dimensions, the door swing, and the vent route. A blocked or kinked vent can make any dryer run long and hot, so Appliance King also offers dryer vent cleaning and repair.",
      },
      {
        question: "Can Appliance King install the dryer after delivery?",
        answer:
          "Washer and dryer installation can be scheduled with delivery. Share your hookups and vent route when you call so the scope is clear.",
      },
      deliveryFaq,
      availabilityFaq,
    ],
  },
  {
    slug: "ovens-ranges",
    name: "Used Ovens & Ranges",
    short: "Electric ranges, glass-top and coil-top",
    h1: "Used Ovens and Ranges for Sale in Macon, GA",
    title: "Used Ovens & Ranges in Macon, GA | Appliance King",
    description:
      "Shop used electric ranges, ovens and stoves in Macon, GA, in black, white and stainless. Delivery and pickup within about 40 miles.",
    directAnswer:
      "Appliance King keeps a row of used electric ranges in Macon, Georgia, including glass-top and coil-top models in black, white, and stainless steel. Delivery and pickup are available within about 40 miles. Call to confirm which ranges are in stock today.",
    hero: photos.ranges,
    gallery: [photos.ranges, photos.geRange, photos.rangeRow, photos.whiteRanges],
    lookFor: [
      "Glass-top or coil-top cooking surface",
      "Color: black, white, or stainless steel",
      "Oven door, handle, and control condition",
      "Standard 30-inch width for most kitchen openings",
    ],
    measure: [
      "Opening width and depth, plus countertop height",
      "Electrical outlet type and cord length",
      "Anti-tip bracket position",
      "Delivery path through doors and hallways",
    ],
    related: ["refrigerators", "washers"],
    faq: [
      {
        question: "Are the ovens and ranges electric?",
        answer:
          "The ranges shown on this site are electric, with both glass-top and coil-top styles. If you need gas, call and ask whether a gas model is available.",
      },
      {
        question: "Can a range be repaired instead of replaced?",
        answer:
          "Often yes. Appliance King repairs ranges, ovens, and stoves, and a repair visit can show whether fixing the unit or swapping it makes more sense.",
      },
      deliveryFaq,
      availabilityFaq,
    ],
  },
  {
    slug: "refrigerators",
    name: "Used Refrigerators",
    short: "Side-by-side, French-door and top-freezer",
    h1: "Used Refrigerators for Sale in Macon, GA",
    title: "Used Refrigerators for Sale in Macon, GA | Appliance King",
    description:
      "Shop used stainless side-by-side, French-door and top-freezer refrigerators in Macon, GA. Delivery and pickup within about 40 miles.",
    directAnswer:
      "Appliance King sells used refrigerators in Macon, Georgia, including stainless steel side-by-side and French-door models, with delivery and pickup within about 40 miles. Measure the opening and the delivery path first, then call to see what is in stock.",
    hero: photos.fridgeLine,
    gallery: [photos.fridgeLine, photos.whirlpoolFridge],
    lookFor: [
      "Layout: side-by-side, French-door, or top-freezer",
      "Water and ice dispenser, if you want one",
      "Finish: stainless steel or black",
      "Door seals, shelves, and drawers",
    ],
    measure: [
      "Opening width, depth, and height, including cabinet clearance",
      "Door swing and how far doors open against walls",
      "Doorways and hallways on the delivery path",
      "Water line position for ice and water models",
    ],
    related: ["ovens-ranges", "washers"],
    faq: [
      {
        question: "How do I measure for a refrigerator?",
        answer:
          "Measure the opening width, depth, and height, then add clearance for doors to swing. Also measure every doorway and turn on the delivery path.",
      },
      {
        question: "Can Appliance King repair my refrigerator instead?",
        answer:
          "Yes. Refrigerator and freezer repair is one of the services you can book. Describe the symptom when you call, such as warm food, noise, or frost.",
      },
      deliveryFaq,
      availabilityFaq,
    ],
  },
];

export const shopBySlug = Object.fromEntries(shopCategories.map((c) => [c.slug, c])) as Record<string, ShopCategory>;

export const homeFaqs: FaqItem[] = [
  {
    question: "Where can I buy used appliances in Macon, GA?",
    answer:
      "Appliance King sells used washers, dryers, ovens and ranges, and refrigerators in Macon, Georgia. Call 478-273-7539 or book a call to confirm what is in stock, then arrange delivery or pickup.",
  },
  {
    question: "Do you deliver, and how far?",
    answer:
      "Yes. Appliance King delivers and offers pickup in Macon and cities within about 40 miles, including Warner Robins, Perry, Fort Valley, Milledgeville, Barnesville, Forsyth, and Gray. Confirm your address and the item when you call.",
  },
  {
    question: "Can you repair my washer, dryer, oven, or refrigerator?",
    answer:
      "Yes. Appliance King repairs major household appliances, including washers, dryers, refrigerators, freezers, dishwashers, ranges, and ovens. Book a time on the calendar or call to describe the problem.",
  },
  {
    question: "How do I book?",
    answer:
      "Choose an open time on the booking calendar on this page, or call 478-273-7539. Share the appliance, the problem or the item you want, and your city.",
  },
  {
    question: "Do you buy used appliances?",
    answer:
      "Appliance King buys and sells used appliances. Offers depend on the appliance type, model, condition, and access, so call or book a call and share a photo and model number.",
  },
  {
    question: "Is Appliance King insured?",
    answer:
      "Yes. Appliance King is insured and has a verified Google Business Profile.",
  },
];
