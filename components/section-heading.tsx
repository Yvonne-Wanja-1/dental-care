import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
        <span aria-hidden="true" className="h-px w-6 bg-teal-500/70" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-navy-950 sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
