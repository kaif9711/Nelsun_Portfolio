import Image from "next/image";
import { Check } from "lucide-react";
import { productTracks, products, specs } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Products() {
  return (
    <section
      id="products"
      className="grain relative overflow-hidden bg-paper py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-[82rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Two ways to buy,"
          titleAccent="pick what suits you."
          intro="Buy in bulk and blend it yourself, or send us your design and get packs ready for the shelf. Same Assam tea, same quality, either way."
        />

        {/* --- Tracks --- */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {productTracks.map((track, i) => (
            <Reveal key={track.id} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-forest/12 bg-cream">
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <Image
                    src={track.image}
                    alt={track.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-paper/90 px-3.5 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-forest backdrop-blur">
                    {track.kicker}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8 sm:p-9">
                  <h3 className="text-2xl leading-snug text-forest sm:text-[1.75rem]">
                    {track.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/65">
                    {track.summary}
                  </p>

                  <ul className="mt-7 space-y-3 border-t border-forest/12 pt-6">
                    {track.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[0.9375rem] text-forest"
                      >
                        <Check
                          size={15}
                          strokeWidth={2.5}
                          className="mt-1 shrink-0 text-leaf"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* --- Individual lines --- */}
        <Reveal className="mt-24">
          <h3 className="eyebrow text-moss">Product Lines</h3>
        </Reveal>

        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 0.06}>
              <article className="group h-full">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 23vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <p className="mt-5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-moss">
                  {product.meta}
                </p>
                <h4 className="mt-2 text-lg leading-snug text-forest">
                  {product.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {product.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* --- Spec table --- */}
        <Reveal className="mt-24">
          <div className="overflow-hidden rounded-sm border border-forest/12">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <caption className="sr-only">
                  Nelsun tea grades, formats and export packing options
                </caption>
                <thead>
                  <tr className="bg-forest">
                    {specs.columns.map((col) => (
                      <th
                        key={col}
                        scope="col"
                        className="px-6 py-4 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-cream/80"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specs.rows.map((row, i) => (
                    <tr
                      key={row[0]}
                      className={i % 2 ? "bg-cream/60" : "bg-paper"}
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={[
                            "border-t border-forest/10 px-6 py-4 text-[0.9375rem]",
                            j === 0
                              ? "font-medium text-forest"
                              : "text-ink/65",
                          ].join(" ")}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-forest/10 bg-cream px-6 py-4 text-[0.8125rem] text-ink/60">
              {specs.footnote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
