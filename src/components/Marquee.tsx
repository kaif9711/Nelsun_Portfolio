import { marqueeItems } from "@/data/site";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-forest py-4">
      <div className="marquee-track flex w-max items-center">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-7 px-7 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-cream/70"
          >
            {item}
            <span aria-hidden className="h-1 w-1 rounded-full bg-leaf" />
          </span>
        ))}
      </div>
    </div>
  );
}
