import {
  Beaker,
  Factory,
  Leaf,
  Package,
  Ship,
  Tag,
  type LucideIcon,
} from "lucide-react";
import { capabilities } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  leaf: Leaf,
  beaker: Beaker,
  factory: Factory,
  tag: Tag,
  ship: Ship,
  package: Package,
};

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="grain relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-[82rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Service"
          title="Six capabilities,"
          titleAccent="one supply partner."
          intro="From garden-level leaf selection through to brand-printed retail pouches, every stage is handled in-house — so your spec stays intact from origin to shelf."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-forest/12 bg-forest/12 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => {
            const Icon = icons[item.icon] ?? Leaf;
            return (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-forest sm:p-9"
              >
                <span className="absolute right-7 top-7 font-display text-sm text-forest/20 transition-colors duration-500 group-hover:text-cream/25">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <Icon
                  size={26}
                  strokeWidth={1.4}
                  className="text-leaf transition-colors duration-500 group-hover:text-leaf-soft"
                />

                <h3 className="mt-6 text-xl leading-snug text-forest transition-colors duration-500 group-hover:text-cream">
                  {item.title}
                </h3>

                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/65 transition-colors duration-500 group-hover:text-cream/70">
                  {item.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
