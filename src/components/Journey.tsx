import Image from "next/image";
import { journey } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Journey() {
  return (
    <section
      id="journey"
      className="grain relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-[82rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">
          <SectionHeading
            eyebrow="From Garden to Cup"
            title="The journey of"
            titleAccent="our tea powder."
            intro="Six controlled stages between the leaf and your port. Each one documented, each batch traceable."
          />

          <Reveal delay={0.1}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-sand lg:aspect-[4/3]">
              <Image
                src="/images/garden-terrace.jpg"
                alt="Terraced tea gardens under open sky"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-forest/12 bg-forest/12 sm:grid-cols-2 lg:grid-cols-3">
          {journey.map((stage, i) => (
            <Reveal
              as="li"
              key={stage.step}
              delay={i * 0.05}
              className="relative bg-paper p-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl leading-none text-leaf">
                  {stage.step}
                </span>
                <span
                  aria-hidden
                  className="h-px flex-1 bg-gradient-to-r from-forest/25 to-transparent"
                />
              </div>
              <h3 className="mt-5 text-xl leading-snug text-forest">
                {stage.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/65">
                {stage.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
