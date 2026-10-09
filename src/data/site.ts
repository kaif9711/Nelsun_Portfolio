/**
 * Every string in this file comes from the Nelsun company profile deck.
 * Edit here to update the site — no component changes needed.
 */

export const company = {
  name: "Nelsun",
  legalName: "Nelsun Tea Company",
  tagline: "A Tea Company",
  strapline: "Global Export & Private Label Tea Solutions",
  headquarters: "Delhi, India",
  origin: "Assam, India",
  phones: ["+91 98182 04877", "+91 95996 91577"],
  emails: ["vseth1@yahoo.in", "vansh0409@gmail.com"],
};

export const whatsappNumber = "919818204877";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#products" },
  { label: "Why Nelsun", href: "#why" },
  { label: "Journey", href: "#journey" },
  { label: "Team", href: "#team" },
];

export const heroStats = [
  { value: "Assam", label: "Direct garden origin" },
  { value: "BOPSM", label: "CTC black tea speciality" },
  { value: "22 / 35 kg", label: "Paper & poly sacks" },
  { value: "20ft / 40ft HC", label: "Container capacity" },
];

export const marqueeItems = [
  "BOPSM Assam CTC Black Tea",
  "Private Label / OEM",
  "Custom Blending",
  "Bulk Container Export",
  "Green Tea",
  "Herbal Infusions",
  "Contract Packing",
  "Full Batch Traceability",
];

export const aboutParagraphs = [
  "Nelsun Tea Company is a vertically integrated tea manufacturer, blender, and global bulk supplier headquartered in Delhi, India. Sourced directly from the lush, high-altitude tea gardens of Assam, we specialize in processing and distributing fresh, high-grade CTC black teas — principally BOPSM (Broken Orange Pekoe Small Medium) — alongside specialty green teas and custom botanical blends.",
  "Driven by a commitment to origin authenticity and supply chain scale, Nelsun serves a diverse global client base ranging from bulk importers, repackers, and commercial brand owners to retail chains. We offer comprehensive supply capabilities, including multi-ton bulk container shipments (22 kg / 35 kg paper sacks) and end-to-end private label / packaged retail solutions, including our signature 250g consumer pouches.",
  "By combining strict garden-level quality selection with modern processing standards, Nelsun ensures batch-to-batch consistency, full traceability, and competitive direct-from-origin pricing.",
];

export const aboutFacts = [
  { label: "Headquarters", value: "Delhi, India" },
  { label: "Sourcing region", value: "Assam tea gardens" },
  { label: "Core grade", value: "BOPSM CTC black tea" },
  { label: "Serving", value: "Importers, repackers, brand owners, retail chains" },
];

export const capabilities = [
  {
    title: "Direct Assam Sourcing",
    body: "Sourced directly from premier Assam tea gardens, ensuring fresh leaf origin and authentic regional flavor profiles.",
    icon: "leaf",
  },
  {
    title: "Custom Blending & Flavor Development",
    body: "Our experienced blenders formulate bespoke tea recipes to match specific target profiles, cup strengths, and regional market preferences.",
    icon: "beaker",
  },
  {
    title: "High Volume BOPSM Production",
    body: "Specializing in large quantities of high-grade BOPSM CTC black tea, delivering superior strength, bright liquor, and rich maltiness.",
    icon: "factory",
  },
  {
    title: "Private Labeling",
    body: "Brand-printed flexible pouches and custom retail packaging for premium loose-leaf lines, built to your artwork and spec.",
    icon: "tag",
  },
  {
    title: "Export Ready",
    body: "Equipped for bulk packaging, custom blending, and international container-load shipments with reliable fulfillment schedules.",
    icon: "ship",
  },
  {
    title: "Contract Packing",
    body: "Complete contract packing services across custom weight packets, jars, and consumer pouches — end to end, under one roof.",
    icon: "package",
  },
] as const;

export const whyNelsun = [
  {
    title: "Direct Garden-Fresh Sourcing",
    body: "Sourced directly from premier tea estates in Assam, ensuring authentic origin, superior leaf strength, bright liquor, and fresh batch consistency.",
  },
  {
    title: "High-Volume Bulk Export Capabilities",
    body: "Equipped to handle large-scale orders — from multi-ton trial lots to full container loads (20ft / 40ft HC) — with reliable fulfillment schedules.",
  },
  {
    title: "Competitive Direct-from-Origin Pricing",
    body: "By optimizing origin purchasing and streamlining processing, we provide cost-effective bulk rates without compromising on grade or quality.",
  },
  {
    title: "Supply Chain Reliability & Traceability",
    body: "Robust inventory management and end-to-end batch traceability guarantee on-time port dispatches and uninterrupted supply for your brand.",
  },
  {
    title: "Tailored Blending & Custom Packaging",
    body: "Flexible B2B services including specialized grade sizing (BOPSM, CTC brokens, green tea, herbal infusions), custom flavor blending, and private-label packaging options.",
  },
  {
    title: "Strict International Quality Compliance",
    body: "Processed under hygienic standards adhering to global MRL (Maximum Residue Limits), food safety guidelines, and export clearance documentation.",
  },
];

export const productTracks = [
  {
    id: "bulk",
    kicker: "Track 01",
    title: "Bulk CTC & Garden Supply",
    summary:
      "Multi-ton shipments of high-grade Assam CTC, packed at origin and loaded to container for direct export.",
    image: "/images/branded-sack.jpg",
    imageAlt: "Nelsun branded bulk tea sack",
    points: [
      "BOPSM Assam CTC Black Tea",
      "22 kg / 35 kg paper & poly sacks",
      "20ft / 40ft HC container capacity",
      "Multi-ton trial lots to full container loads",
    ],
  },
  {
    id: "retail",
    kicker: "Track 02",
    title: "Retail & Private Label (OEM)",
    summary:
      "Your brand, our origin. Brand-printed flexible packaging and contract packing for retail-ready tea lines.",
    image: "/images/pouches-tall.jpg",
    imageAlt: "Nelsun brand-printed retail tea pouches",
    points: [
      "250g brand-printed pouches",
      "Custom weight packets & jars",
      "Complete contract packing services",
      "Artwork-to-shelf private label programs",
    ],
  },
];

export const products = [
  {
    name: "BOPSM Assam CTC Black Tea",
    meta: "Bulk · 22 kg / 35 kg sacks",
    body: "High-grade CTC black tea delivering superior strength, bright liquor, and rich maltiness. Our core export grade.",
    image: "/images/bulk-sacks-stack.jpg",
  },
  {
    name: "250g Retail Pouches",
    meta: "Private label · Brand-printed",
    body: "Signature 250g consumer pouches printed to your brand artwork, packed under full contract-packing service.",
    image: "/images/retail-pouches.jpg",
  },
  {
    name: "Reusable Storage Jar",
    meta: "Retail · Air-tight screw cap",
    body: "Reusable plastic storage jar with an air-tight red screw cap, designed for long-term freshness and convenient kitchen storage. Filled with premium CTC tea blend offering rich aroma, deep color, and strong taste.",
    image: "/images/storage-jar.jpg",
  },
  {
    name: "Mixed Grade & Blend Lots",
    meta: "Bulk · Custom sizing",
    body: "CTC brokens, specialty green teas, and herbal infusions blended to your target cup profile and market preference.",
    image: "/images/bulk-sacks-row.jpg",
  },
];

export const specs = {
  columns: ["Grade / Line", "Typical format", "Export packing"],
  rows: [
    ["BOPSM Assam CTC Black Tea", "Bulk loose", "22 kg / 35 kg paper & poly sacks"],
    ["CTC Brokens", "Bulk loose", "22 kg / 35 kg paper & poly sacks"],
    ["Specialty Green Tea", "Bulk / retail", "Bulk sacks or custom retail packs"],
    ["Herbal Infusions & Botanical Blends", "Custom blend", "Bulk sacks or custom retail packs"],
    ["Private Label Retail", "250g pouches, packets, jars", "Brand-printed, contract packed"],
  ],
  footnote:
    "Container loadability: 20ft / 40ft HC. Multi-ton trial lots through to full container loads.",
};

export const journey = [
  {
    step: "01",
    title: "Garden Selection",
    body: "Strict garden-level quality selection across premier high-altitude estates in Assam.",
  },
  {
    step: "02",
    title: "CTC Processing",
    body: "Fresh leaf processed under modern, hygienic standards for consistent crush-tear-curl character.",
  },
  {
    step: "03",
    title: "Grading & Sizing",
    body: "Specialized grade sizing into BOPSM and CTC brokens for strength, liquor, and maltiness.",
  },
  {
    step: "04",
    title: "Blending",
    body: "Experienced blenders build bespoke recipes to match target profiles and regional preferences.",
  },
  {
    step: "05",
    title: "Packing",
    body: "Bulk sacks for container loads, or brand-printed retail packaging under contract packing.",
  },
  {
    step: "06",
    title: "Port Dispatch",
    body: "Batch traceability and inventory control guarantee on-time dispatch and uninterrupted supply.",
  },
];

export const vision =
  "To connect global buyers directly to the freshest tea gardens of Assam by supplying high-volume, premium BOPSM CTC black tea, green tea, and signature blends. We accomplish this by maintaining strict quality standards, delivering seamless supply chain execution, and building transparent, long-term partnerships with commercial brand owners, importers, and distributors worldwide.";

export const team = [
  {
    name: "Vikas Seth",
    image: "/images/team-vikas.jpg",
    phone: "+91 98182 04877",
    email: "vseth1@yahoo.in",
  },
  {
    name: "Vansh Seth",
    image: "/images/team-vansh.jpg",
    phone: "+91 95996 91577",
    email: "vansh0409@gmail.com",
  },
];
