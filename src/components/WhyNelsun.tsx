import Image from "next/image";
import { whyNelsun } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function WhyNelsun() {
  return (
    <section
      id="why"
      className="grain relative overflow-hidden bg-forest py-24 sm:py-32"
    >
      {/* Soft photographic wash */}
      <div aria-hidden className="absolute inset-0 opacity-[0.07]">
        <Image
          src="/images/garden-terrace.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-[82rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Why Choose Nelsun"
              title="Six reasons buyers"
              titleAccent="keep coming back."
              tone="light"
            />

            <Reveal delay={0.16}>
              <div className="mt-10 overflow-hidden rounded-sm ring-1 ring-cream/15">
                <div className="relative aspect-[5/4]">
                  <Image
                    src="/images/bulk-sacks-row.jpg"
                    alt="Bulk tea sacks staged for container loading"
                    fill
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <ol className="space-y-0">
            {whyNelsun.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.05}>
                <div className="group grid grid-cols-[2.75rem_1fr] gap-5 border-b border-cream/12 py-7 first:border-t sm:gap-7">
                  <span className="font-display text-[1.75rem] leading-none text-leaf/70 transition-colors duration-300 group-hover:text-leaf-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl leading-snug text-cream sm:text-[1.375rem]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-cream/65">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
