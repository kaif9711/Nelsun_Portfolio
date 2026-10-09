import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import { company, heroStats } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero-plantation.jpg"
        alt="High-altitude tea gardens of Assam at first light"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-[center_72%]"
      />

      {/* Legibility scrim */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_30%,rgba(15,32,26,0.65)_100%)]"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[82rem] flex-col justify-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14">
        <div className="max-w-4xl">
          <p className="eyebrow text-leaf-soft">{company.strapline}</p>

          <h1 className="mt-7 text-[2.25rem] leading-[1.02] text-cream sm:text-6xl sm:leading-[0.98] lg:text-[5.25rem]">
            From the gardens of
            <span className="text-leaf-soft"> Assam</span>,
            <br />
            to containers worldwide.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-[1.0625rem]">
            A vertically integrated tea manufacturer, blender and global bulk
            supplier of high-grade BOPSM CTC black tea — with end-to-end private
            label and contract packing under one roof.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-leaf-soft"
            >
              Request a Quote
              <ArrowDownRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/60 hover:bg-cream/5"
            >
              View Export Catalog
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-cream/55">
            <MapPin size={13} className="text-leaf-soft" />
            Headquartered in {company.headquarters}
          </p>
        </div>

        {/* Stats rail */}
        <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-cream/15 pt-8 sm:mt-16 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-2xl text-cream sm:text-[1.75rem]">
                {stat.value}
              </dt>
              <dd className="mt-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-cream/55">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
