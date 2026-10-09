import Image from "next/image";
import { aboutFacts, aboutParagraphs } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="grain relative overflow-hidden bg-paper py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-[82rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Left — imagery */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand">
                <Image
                  src="/images/retail-pouches.jpg"
                  alt="Nelsun brand-printed retail tea pouches and packets"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -right-4 hidden w-44 overflow-hidden rounded-sm border-4 border-paper shadow-xl sm:block lg:-right-8 lg:w-52">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/garden-to-cup.jpg"
                    alt="Tea plucking in an Assam garden"
                    fill
                    sizes="208px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About Our Business"
              title="Vertically integrated,"
              titleAccent="origin to container."
            />

            <div className="mt-8 space-y-5 border-l border-forest/15 pl-6 sm:pl-8">
              {aboutParagraphs.map((text, i) => (
                <Reveal key={i} delay={0.08 + i * 0.06}>
                  <p className="text-[1.0625rem] leading-[1.75] text-ink/75">
                    {text}
                  </p>
                </Reveal>
              ))}
            </div>

            <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {aboutFacts.map((fact, i) => (
                <Reveal key={fact.label} delay={0.1 + i * 0.05}>
                  <div className="border-t border-forest/15 pt-4">
                    <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-moss">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 text-[0.9375rem] font-medium leading-snug text-forest">
                      {fact.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
