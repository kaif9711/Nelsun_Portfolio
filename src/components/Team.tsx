import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { team } from "@/data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Team() {
  return (
    <section
      id="team"
      className="grain relative overflow-hidden bg-paper py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-[82rem] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="The people behind"
          titleAccent="every shipment."
          intro="Enquiries go straight to the people who run the blend sheet and the container booking — no gatekeeping."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:max-w-3xl lg:gap-10">
          {team.map((person, i) => (
            <Reveal key={person.name} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-sm border border-forest/12 bg-cream">
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl text-forest">{person.name}</h3>
                  <p className="mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-moss">
                    Nelsun Tea Company
                  </p>

                  <div className="mt-5 space-y-2.5 border-t border-forest/12 pt-5">
                    <a
                      href={`tel:${person.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2.5 text-sm text-ink/70 transition-colors hover:text-forest"
                    >
                      <Phone size={14} className="text-leaf" />
                      {person.phone}
                    </a>
                    <a
                      href={`mailto:${person.email}`}
                      className="flex items-center gap-2.5 break-all text-sm text-ink/70 transition-colors hover:text-forest"
                    >
                      <Mail size={14} className="text-leaf" />
                      {person.email}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
