import Image from "next/image";
import { vision } from "@/data/site";
import Reveal from "./ui/Reveal";

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative isolate overflow-hidden bg-ink py-28 sm:py-36"
    >
      <Image
        src="/images/garden-to-cup.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-center opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/75 to-forest/85"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="eyebrow justify-center text-leaf-soft">
            Our Vision
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <blockquote className="mt-8">
            <p className="font-display text-[1.5rem] leading-[1.45] text-cream sm:text-[2rem] sm:leading-[1.4]">
              <span aria-hidden className="text-leaf-soft">
                &ldquo;
              </span>
              {vision}
              <span aria-hidden className="text-leaf-soft">
                &rdquo;
              </span>
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-10 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-cream/45">
            Nelsun Tea Company
          </p>
        </Reveal>
      </div>
    </section>
  );
}
