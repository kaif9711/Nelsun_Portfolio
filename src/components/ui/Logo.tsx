type Props = {
  /** `light` for dark backgrounds, `dark` for cream backgrounds. */
  tone?: "light" | "dark";
  className?: string;
  showTagline?: boolean;
};

export default function Logo({
  tone = "dark",
  className = "",
  showTagline = true,
}: Props) {
  const text = tone === "light" ? "text-cream" : "text-forest";
  const sub = tone === "light" ? "text-cream/60" : "text-moss/70";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LeafMark className={tone === "light" ? "text-leaf-soft" : "text-leaf"} />
      <span className="flex flex-col leading-none">
        <span className={`wordmark text-[1.0625rem] ${text}`}>Nelsun</span>
        {showTagline ? (
          <span
            className={`mt-0.5 text-[0.5rem] font-medium uppercase tracking-[0.3em] ${sub}`}
          >
            A Tea Company
          </span>
        ) : null}
      </span>
    </span>
  );
}

function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`h-7 w-7 shrink-0 ${className}`}
      fill="none"
    >
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.25" opacity="0.4" />
      <path
        d="M16 24.5c0-5.6 2.9-9.9 7.4-11.6-.5 5.9-3.3 9.9-7.4 11.6Z"
        fill="currentColor"
      />
      <path
        d="M16 24.5c0-5.6-2.9-9.9-7.4-11.6.5 5.9 3.3 9.9 7.4 11.6Z"
        fill="currentColor"
        opacity="0.55"
      />
      <path
        d="M16 24.8V14"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M16 7.2c1.6 1.5 2.4 3 2.4 4.5 0 1.4-.8 2.4-2.4 3-1.6-.6-2.4-1.6-2.4-3 0-1.5.8-3 2.4-4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
