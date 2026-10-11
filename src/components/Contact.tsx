import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, whatsappNumber } from "@/data/site";
import EnquiryForm from "./EnquiryForm";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="grain relative overflow-hidden bg-forest py-24 sm:py-32"
    >
      <div className="relative mx-auto max-w-[82rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact Us"
              title="Tell us what"
              titleAccent="you need."
              tone="light"
              intro="Call us, WhatsApp us or send an email. Or fill the form below and we will send you a price."
            />

            <div className="mt-10 space-y-px overflow-hidden rounded-sm border border-cream/15">
              <ContactRow
                icon={<Phone size={16} />}
                label="Phone"
                items={company.phones.map((p) => ({
                  text: p,
                  href: `tel:${p.replace(/\s/g, "")}`,
                }))}
              />
              <ContactRow
                icon={<Mail size={16} />}
                label="Email"
                items={company.emails.map((e) => ({
                  text: e,
                  href: `mailto:${e}`,
                }))}
              />
              <ContactRow
                icon={<MessageCircle size={16} />}
                label="WhatsApp"
                items={[
                  {
                    text: "Chat with us",
                    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      "Hello Nelsun — I would like to enquire about bulk tea export.",
                    )}`,
                    external: true,
                  },
                ]}
              />
              <ContactRow
                icon={<MapPin size={16} />}
                label="Head office"
                items={[{ text: company.headquarters }]}
              />
            </div>

            <Reveal delay={0.1}>
              <p className="mt-8 text-sm leading-relaxed text-cream/55">
                Our tea comes from{" "}
                <span className="text-leaf-soft">{company.origin}</span> · Packed
                in 22 kg / 36 kg sacks
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <EnquiryForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type Item = { text: string; href?: string; external?: boolean };

function ContactRow({
  icon,
  label,
  items,
}: {
  icon: React.ReactNode;
  label: string;
  items: Item[];
}) {
  return (
    <div className="grid grid-cols-[1.75rem_1fr] items-start gap-4 bg-cream/[0.03] px-6 py-5 sm:grid-cols-[1.75rem_7rem_1fr]">
      <span className="mt-0.5 text-leaf">{icon}</span>
      <span className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-cream/50 sm:mt-1">
        {label}
      </span>
      <span className="col-span-2 flex flex-wrap gap-x-5 gap-y-1 sm:col-span-1">
        {items.map((item) =>
          item.href ? (
            <a
              key={item.text}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-[0.9375rem] text-cream/85 underline decoration-cream/20 decoration-1 underline-offset-4 transition-colors hover:text-leaf-soft hover:decoration-leaf"
            >
              {item.text}
            </a>
          ) : (
            <span key={item.text} className="text-[0.9375rem] text-cream/85">
              {item.text}
            </span>
          ),
        )}
      </span>
    </div>
  );
}
