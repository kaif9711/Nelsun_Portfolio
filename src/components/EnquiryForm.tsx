"use client";

import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { AlertCircle, Check, CheckCircle2, Loader2, Send } from "lucide-react";
import { company, enquiryOptions } from "@/data/site";

/**
 * Submissions go through EmailJS, which relays them to the Nelsun inbox.
 * No backend and no database — the browser posts straight to EmailJS.
 *
 * Configure these in .env.local (and in the Vercel project settings):
 *   NEXT_PUBLIC_EMAILJS_SERVICE_ID
 *   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 *   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 */
const EMAILJS = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
};

const RECIPIENT = "vansh0409@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

const emptyForm = {
  name: "",
  companyName: "",
  phone: "",
  email: "",
  details: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(emptyForm);
  const [picked, setPicked] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggle = (id: string) =>
    setPicked((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );

  const productLabels = enquiryOptions
    .filter((option) => picked.includes(option.id))
    .map((option) => option.label);

  /** Plain-text body, also used for the mail-app fallback. */
  const buildMessage = () =>
    [
      `Name: ${form.name}`,
      `Company: ${form.companyName || "—"}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Product enquiry: ${productLabels.join(", ")}`,
      "",
      "Details:",
      form.details || "—",
    ].join("\n");

  const mailtoFallback = () =>
    `mailto:${RECIPIENT}?subject=${encodeURIComponent(
      `Export enquiry — ${productLabels.join(", ")}`,
    )}&body=${encodeURIComponent(buildMessage())}`;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (picked.length === 0) {
      setStatus("error");
      setError("Please tick at least one product you are enquiring about.");
      return;
    }

    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      setStatus("error");
      setError(
        "The email service is not configured yet. Use the link below to send this enquiry from your own mail app.",
      );
      return;
    }

    setStatus("sending");
    setError(null);

    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          to_email: RECIPIENT,
          name: form.name,
          company: form.companyName || "—",
          phone: form.phone,
          email: form.email,
          reply_to: form.email,
          products: productLabels.join(", "),
          details: form.details || "—",
          message: buildMessage(),
        },
        {
          publicKey: EMAILJS.publicKey,
          blockHeadless: true,
          limitRate: { id: "nelsun-enquiry", throttle: 15000 },
        },
      );

      setStatus("sent");
      setForm(emptyForm);
      setPicked([]);
    } catch (err) {
      setStatus("error");
      if (err instanceof EmailJSResponseStatus) {
        setError(
          err.status === 429
            ? "You have just sent an enquiry. Please wait a moment before sending another."
            : `We could not send that (error ${err.status}). Please try again, or email us directly at ${RECIPIENT}.`,
        );
      } else {
        setError(
          `We could not send that. Please check your connection and try again, or email us directly at ${RECIPIENT}.`,
        );
      }
    }
  };

  if (status === "sent") {
    return (
      <div className="flex min-h-[26rem] flex-col items-center justify-center rounded-sm border border-cream/15 bg-cream/[0.04] p-9 text-center backdrop-blur">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-leaf/20 text-leaf-soft">
          <CheckCircle2 size={26} strokeWidth={1.6} />
        </span>
        <h3 className="mt-6 text-2xl text-cream">Enquiry sent</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/60">
          Thank you. Our team has your message and will get back to you with
          prices, samples and packing details. If it is urgent, call{" "}
          <a
            href={`tel:${company.phones[0].replace(/\s/g, "")}`}
            className="text-leaf-soft underline decoration-leaf/40 underline-offset-4"
          >
            {company.phones[0]}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-cream/55 transition-colors hover:text-leaf-soft"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-cream/15 bg-cream/[0.04] p-7 backdrop-blur sm:p-9"
    >
      <h3 className="text-2xl text-cream">Send an enquiry</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream/60">
        Tell us what you need and we will send you prices, samples and packing
        details.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" required>
          <input
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Full name"
            className={inputClass}
          />
        </Field>

        <Field label="Company" hint="Optional">
          <input
            type="text"
            autoComplete="organization"
            value={form.companyName}
            onChange={(e) => set("companyName")(e.target.value)}
            placeholder="Company name"
            className={inputClass}
          />
        </Field>

        <Field label="Phone number" required>
          <input
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="+91 00000 00000"
            className={inputClass}
          />
        </Field>

        <Field label="Email address" required>
          <input
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="you@company.com"
            className={inputClass}
          />
        </Field>
      </div>

      {/* Product enquiry — checkboxes for the three portfolio lines */}
      <fieldset className="mt-7">
        <legend className="mb-3 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-cream/55">
          What are you looking for
          <span className="ml-1.5 text-leaf-soft" aria-hidden>
            *
          </span>
        </legend>

        <div className="space-y-2.5">
          {enquiryOptions.map((option) => {
            const checked = picked.includes(option.id);
            return (
              <label
                key={option.id}
                className={[
                  "flex cursor-pointer items-start gap-3.5 rounded-sm border p-4 transition-colors",
                  checked
                    ? "border-leaf/60 bg-leaf/10"
                    : "border-cream/15 bg-forest/30 hover:border-cream/30",
                ].join(" ")}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(option.id)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden
                  className={[
                    "mt-0.5 grid h-[1.125rem] w-[1.125rem] shrink-0 place-items-center rounded-[3px] border transition-colors",
                    checked
                      ? "border-leaf bg-leaf text-forest"
                      : "border-cream/35 text-transparent",
                  ].join(" ")}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>
                  <span className="block text-[0.9375rem] font-medium leading-snug text-cream">
                    {option.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-cream/55">
                    {option.detail}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <Field label="Details" hint="Optional">
          <textarea
            rows={4}
            value={form.details}
            onChange={(e) => set("details")(e.target.value)}
            placeholder="How much tea you need, the taste you want, pack sizes, when you need it, samples…"
            className={`${inputClass} resize-y`}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-leaf-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? (
          <>
            Sending…
            <Loader2 size={15} className="animate-spin" />
          </>
        ) : (
          <>
            Send Query
            <Send
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </>
        )}
      </button>

      <div aria-live="polite" className="mt-4">
        {status === "error" && error ? (
          <p className="flex items-start gap-2 text-xs leading-relaxed text-gold-soft">
            <AlertCircle size={14} className="mt-0.5 shrink-0" />
            <span>
              {error}{" "}
              {picked.length > 0 ? (
                <a
                  href={mailtoFallback()}
                  className="underline decoration-gold-soft/50 underline-offset-4"
                >
                  Open in mail app instead
                </a>
              ) : null}
            </span>
          </p>
        ) : (
          <p className="text-xs leading-relaxed text-cream/45">
            Your enquiry goes straight to the Nelsun team. We never share your
            details.
          </p>
        )}
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-sm border border-cream/20 bg-forest/40 px-4 py-3 text-[0.9375rem] text-cream placeholder:text-cream/35 outline-none transition-colors focus:border-leaf focus:ring-1 focus:ring-leaf/40";

function Field({
  label,
  children,
  className = "",
  required = false,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 flex items-baseline gap-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-cream/55">
        {label}
        {required ? (
          <span className="text-leaf-soft" aria-hidden>
            *
          </span>
        ) : null}
        {hint ? (
          <span className="font-normal normal-case tracking-normal text-cream/35">
            ({hint})
          </span>
        ) : null}
      </span>
      {children}
    </label>
  );
}
