import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  /** Rendered in the display serif, dark. */
  title: string;
  /** Rendered in the display serif, leaf-green — sits on the line below. */
  titleAccent?: string;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  intro,
  align = "left",
  tone = "dark",
  className = "",
}: Props) {
  const isLight = tone === "light";

  return (
    <div
      className={[
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      ].join(" ")}
    >
      <Reveal>
        <span
          className={[
            "eyebrow",
            align === "center" ? "justify-center" : "",
            isLight ? "text-leaf-soft" : "text-moss",
          ].join(" ")}
        >
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2
          className={[
            "mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-[3.5rem]",
            isLight ? "text-cream" : "text-forest",
          ].join(" ")}
        >
          {title}
          {titleAccent ? (
            <>
              <br />
              <span className={isLight ? "text-leaf-soft" : "text-leaf"}>
                {titleAccent}
              </span>
            </>
          ) : null}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={0.12}>
          <div
            className={[
              "mt-6 text-[1.0625rem] leading-relaxed",
              isLight ? "text-cream/70" : "text-ink/70",
            ].join(" ")}
          >
            {intro}
          </div>
        </Reveal>
      ) : null}
    </div>
  );
}
