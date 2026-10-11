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
  emails: ["vansh@nelsuntea.in"],
  gstin: "07AREPS5058H1ZI",
  fssai: "13315003000390",
};

export const whatsappNumber = "919599691577";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Products", href: "#products" },
  { label: "Why Nelsun", href: "#why" },
  { label: "Journey", href: "#journey" },
];

export const heroStats = [
  { value: "Assam", label: "Direct garden origin" },
  { value: "BOPSM/BOP/BP", label: "CTC black tea speciality" },
  { value: "22 / 36 kg", label: "Paper & poly sacks" },
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
  "Nelsun Tea Company makes, blends and supplies tea in bulk. We are based in Delhi, India, and we buy our tea straight from the gardens of Assam. Our main product is CTC black tea. We also do green tea and custom blends.",
  "We sell to buyers all over the world — importers, repackers, brands and retail chains. You can order tea in bulk (22 kg or 36 kg sacks, by the container) or have it packed in your own branded packs, like our 250g pouches.",
  "We pick our tea carefully at the garden and process it in clean, modern facilities. So every batch tastes the same, you can trace where it came from, and the price stays low because we buy at the source.",
];

export const aboutFacts = [
  { label: "Based in", value: "Delhi, India" },
  { label: "Tea comes from", value: "Assam tea gardens" },
  { label: "Main product", value: "CTC black tea" },
  { label: "We sell to", value: "Importers, repackers, brands, retail chains" },
];

export const capabilities = [
  {
    title: "Tea Straight From Assam",
    body: "We buy directly from the best tea gardens in Assam. Fresh leaf, real Assam taste, no middlemen.",
    icon: "leaf",
  },
  {
    title: "Custom Blends",
    body: "Tell us the taste and strength you want. Our blenders will mix a tea that matches it.",
    icon: "beaker",
  },
  {
    title: "Large Quantities",
    body: "We make high-grade CTC black tea in big volumes. Strong taste, bright colour, rich and malty.",
    icon: "factory",
  },
  {
    title: "Your Own Brand",
    body: "We print your design on pouches and packs. Send us your artwork and we handle the rest.",
    icon: "tag",
  },
  {
    title: "Ready To Export",
    body: "We pack, blend and ship full containers anywhere in the world, on time.",
    icon: "ship",
  },
  {
    title: "Packing Service",
    body: "We pack your tea into any size packet, jar or pouch you need — all done in one place.",
    icon: "package",
  },
] as const;

export const whyNelsun = [
  {
    title: "Fresh From The Garden",
    body: "Our tea comes straight from top Assam estates. Strong leaf, bright colour, and every batch tastes the same.",
  },
  {
    title: "Big Orders, No Problem",
    body: "Start with a small trial lot or order full containers. We handle both and we deliver on time.",
  },
  {
    title: "Better Prices",
    body: "We buy at the source and keep things simple, so you get a good bulk price without dropping quality.",
  },
  {
    title: "Reliable Supply",
    body: "We keep good stock and track every batch. Your shipments leave on time and your supply never stops.",
  },
  {
    title: "Blends And Packing To Order",
    body: "Pick your grade — CTC, brokens, green tea or herbal. We can blend it your way and pack it in your brand.",
  },
  {
    title: "Meets Export Rules",
    body: "We follow clean processing and global food safety rules, and we handle all the export paperwork.",
  },
];

export const productTracks = [
  {
    id: "bulk",
    kicker: "Track 01",
    title: "Bulk CTC & Garden Supply",
    summary:
      "Tea by the ton. We pack it at the garden and load it straight into your container.",
    image: "/images/branded-sack.jpg",
    imageAlt: "Nelsun branded bulk tea sack",
    points: [
      "BOPSM Assam CTC Black Tea",
      "22 kg / 36 kg paper & poly sacks",
      "Small trial lots or full containers",
    ],
  },
  {
    id: "retail",
    kicker: "Track 02",
    title: "Retail & Private Label (OEM)",
    summary:
      "Your brand on our tea. We print your packs and fill them, ready for the shelf.",
    image: "/images/pouches-tall.jpg",
    imageAlt: "Nelsun brand-printed retail tea pouches",
    points: [
      "250g pouches printed with your brand",
      "Any size packet or jar",
      "We handle the full packing",
      "From your artwork to the shelf",
    ],
  },
];

export const products = [
  {
    name: "BOPSM Assam CTC Black Tea",
    meta: "Bulk · 22 kg / 36 kg sacks",
    body: "Our main tea. Strong taste, bright colour and a rich malty flavour.",
    image: "/images/bulk-sacks-stack.jpg",
  },
  {
    name: "250g Retail Pouches",
    meta: "Private label · Your brand printed",
    body: "250g pouches printed with your design. We print, fill and seal them for you.",
    image: "/images/retail-pouches.jpg",
  },
  {
    name: "Reusable Storage Jar",
    meta: "Retail · Air-tight screw cap",
    body: "A plastic jar with a red screw cap that seals tight, so the tea stays fresh. Comes filled with our CTC blend — strong taste, deep colour, good smell.",
    image: "/images/storage-jar.jpg",
  },
  {
    name: "Mixed Grade & Blend Lots",
    meta: "Bulk · Any size",
    body: "CTC brokens, green teas and herbal teas, mixed to the taste your market wants.",
    image: "/images/bulk-sacks-row.jpg",
  },
];

/** The three portfolio lines a buyer can tick on the enquiry form. */
export const enquiryOptions = [
  {
    id: "bulk",
    label: "Bulk CTC & Garden Supply",
    detail: "BOPSM Assam CTC black tea · 22kg / 35kg paper & poly sacks",
  },
  {
    id: "retail",
    label: "Retail & Private Label (OEM)",
    detail: "250g pouches with your brand · any size packet or jar · we do the packing",
  },
  {
    id: "jar",
    label: "Reusable Storage Jar",
    detail: "Red screw-cap jar that seals tight · filled with our CTC blend",
  },
];

export const specs = {
  columns: ["Tea", "Sold as", "Packed in"],
  rows: [
    ["BOPSM Assam CTC Black Tea", "Loose, in bulk", "22 kg / 36 kg paper & poly sacks"],
    ["CTC Brokens", "Loose, in bulk", "22 kg / 36 kg paper & poly sacks"],
    ["Green Tea", "Bulk or retail", "Sacks or retail packs"],
    ["Herbal & Botanical Blends", "Made to order", "Sacks or retail packs"],
    ["Private Label Retail", "250g pouches, packets, jars", "Printed with your brand"],
  ],
  footnote: "Order a small trial lot or a full container — both work.",
};

export const journey = [
  {
    step: "01",
    title: "Picking The Garden",
    body: "We choose the best tea gardens in Assam and check the quality before we buy.",
  },
  {
    step: "02",
    title: "Processing",
    body: "Fresh leaf goes through our clean, modern machines to make CTC tea.",
  },
  {
    step: "03",
    title: "Sorting",
    body: "We sort the tea into grades like BOPSM and brokens, based on strength and taste.",
  },
  {
    step: "04",
    title: "Blending",
    body: "Our blenders mix the tea to match the taste you want for your market.",
  },
  {
    step: "05",
    title: "Packing",
    body: "Big sacks for container orders, or retail packs printed with your brand.",
  },
  {
    step: "06",
    title: "Shipping",
    body: "We track every batch and send it to the port on time, so your supply never stops.",
  },
];

export const vision =
  "We want to connect buyers around the world straight to the tea gardens of Assam. We do that by supplying good quality CTC black tea, green tea and blends in large volumes — keeping the quality high, the deliveries on time, and our dealings honest and long term.";
