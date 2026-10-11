import { ArrowUp } from "lucide-react";
import { company, navLinks } from "@/data/site";
import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink">
      <div className="mx-auto max-w-[82rem] px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_auto] lg:gap-16">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">
              {company.strapline}. BOPSM Assam CTC black tea, green teas and
              custom blends — sold in bulk or packed in your own brand, straight
              from the garden.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-cream/40">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-y-3">
              {[...navLinks, { label: "Contact", href: "#contact" }].map(
                (link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/65 transition-colors hover:text-leaf-soft"
                    >
                      {link.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-cream/40">
              Reach us
            </h2>
            <ul className="mt-5 space-y-2.5">
              {company.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-sm text-cream/65 transition-colors hover:text-leaf-soft"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              {company.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="break-all text-sm text-cream/65 transition-colors hover:text-leaf-soft"
                  >
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-cream/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/50 transition-colors hover:text-leaf-soft"
          >
            Back to top
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
