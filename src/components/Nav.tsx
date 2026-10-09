"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./ui/Logo";
import { navLinks } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        open
          ? "border-b border-forest/10 bg-paper"
          : scrolled
            ? "border-b border-forest/10 bg-paper/85 backdrop-blur-xl"
            : "border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[82rem] items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Nelsun Tea Company — home">
          <Logo tone={solid ? "dark" : "light"} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={[
                "relative text-[0.8125rem] font-medium tracking-wide transition-colors",
                solid
                  ? "text-ink/70 hover:text-forest"
                  : "text-cream/80 hover:text-cream",
              ].join(" ")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={[
              "hidden rounded-full px-5 py-2.5 text-[0.8125rem] font-semibold tracking-wide transition-all duration-300 sm:inline-block",
              solid
                ? "bg-forest text-cream hover:bg-moss"
                : "bg-cream/95 text-forest hover:bg-cream",
            ].join(" ")}
          >
            Request a Quote
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className={[
              "grid h-10 w-10 place-items-center rounded-full border transition-colors lg:hidden",
              solid
                ? "border-forest/20 text-forest"
                : "border-cream/30 text-cream",
            ].join(" ")}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "overflow-hidden border-t border-forest/10 bg-paper transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col px-5 py-4 sm:px-8" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-forest/8 py-4 font-display text-xl text-forest last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-full bg-forest px-5 py-3.5 text-center text-sm font-semibold text-cream"
          >
            Request a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
