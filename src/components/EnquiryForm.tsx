"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { company } from "@/data/site";

const interests = [
  "Bulk BOPSM CTC Black Tea",
  "CTC Brokens",
  "Specialty Green Tea",
  "Herbal Infusions / Custom Blend",
  "Private Label (250g pouches)",
  "Contract Packing",
];

const volumes = [
  "Trial lot (under 1 MT)",
  "1 – 5 MT",
  "20ft container",
  "40ft HC container",
  "Recurring monthly programme",
];

/**
 * No backend by design — the form composes a structured mailto: draft
 * in the buyer's own mail client. Nothing is sent or stored by the site.
 */
export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    country: "",
    interest: interests[0],
    volume: volumes[0],
    message: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const mailtoHref = () => {
    const subject = `Export enquiry — ${form.interest}${
      form.companyName ? ` — ${form.companyName}` : ""
    }`;
    const body = [
      `Name: ${form.name || "—"}`,
      `Company: ${form.companyName || "—"}`,
      `Country / port: ${form.country || "—"}`,
      `Product interest: ${form.interest}`,
      `Indicative volume: ${form.volume}`,
      "",
      "Details:",
      form.message || "—",
    ].join("\n");

    return `mailto:${company.emails[0]}?cc=${company.emails[1]}&subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref();
      }}
      className="rounded-sm border border-cream/15 bg-cream/[0.04] p-7 backdrop-blur sm:p-9"
    >
      <h3 className="text-2xl text-cream">Send an enquiry</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream/60">
        Tell us the grade and the volume. We will come back with pricing, samples
        and a packing plan.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Your name">
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Full name"
            className={inputClass}
          />
        </Field>

        <Field label="Company">
          <input
            type="text"
            value={form.companyName}
            onChange={(e) => set("companyName")(e.target.value)}
            placeholder="Company name"
            className={inputClass}
          />
        </Field>

        <Field label="Country / destination port">
          <input
            type="text"
            value={form.country}
            onChange={(e) => set("country")(e.target.value)}
            placeholder="e.g. Jebel Ali, UAE"
            className={inputClass}
          />
        </Field>

        <Field label="Indicative volume">
          <select
            value={form.volume}
            onChange={(e) => set("volume")(e.target.value)}
            className={inputClass}
          >
            {volumes.map((v) => (
              <option key={v} value={v} className="bg-forest text-cream">
                {v}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Product interest" className="sm:col-span-2">
          <select
            value={form.interest}
            onChange={(e) => set("interest")(e.target.value)}
            className={inputClass}
          >
            {interests.map((v) => (
              <option key={v} value={v} className="bg-forest text-cream">
                {v}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Details" className="sm:col-span-2">
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Target cup profile, packing spec, timelines, sample requirements…"
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-leaf-soft sm:w-auto"
      >
        Open enquiry in mail app
        <Send
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </button>

      <p className="mt-4 text-xs leading-relaxed text-cream/45">
        This opens a pre-filled draft in your own email client — nothing is sent
        or stored by this website.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-sm border border-cream/20 bg-forest/40 px-4 py-3 text-[0.9375rem] text-cream placeholder:text-cream/35 outline-none transition-colors focus:border-leaf focus:ring-1 focus:ring-leaf/40";

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-cream/55">
        {label}
      </span>
      {children}
    </label>
  );
}
