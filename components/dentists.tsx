import { SparklesIcon, ToothIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { dentists } from "@/lib/content";

export function Dentists() {
  return (
    <section
      id="dentists"
      aria-labelledby="dentists-heading"
      className="scroll-mt-24 border-y border-navy-900/5 bg-mist py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            id="dentists-heading"
            eyebrow="Our dentists"
            title="Meet the people behind your care"
            description="A friendly, experienced team makes all the difference. These sample profiles show how your clinicians could be introduced."
          />

          <p className="flex max-w-sm items-start gap-3 rounded-2xl border border-sand bg-sand/60 p-4 text-xs leading-relaxed text-slate-600">
            <SparklesIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
            Sample profiles only. Names, bios, and credentials shown here are
            placeholders and do not describe real clinicians.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dentists.map((dentist) => (
            <article
              key={dentist.name}
              className="group overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/5"
            >
              <div
                className={`relative aspect-[5/4] overflow-hidden bg-gradient-to-br ${dentist.accent} p-6`}
              >
                <div
                  aria-hidden="true"
                  className="dot-grid absolute inset-0 opacity-15"
                />
                <ToothIcon
                  aria-hidden="true"
                  className="absolute -bottom-6 -right-4 h-32 w-32 text-white/10"
                  strokeWidth={1}
                />
                <span className="relative inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  Sample profile
                </span>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-28 w-28 place-items-center rounded-full border border-white/25 bg-white/10 text-3xl font-semibold tracking-wide text-white backdrop-blur-sm">
                    {dentist.initials}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight text-navy-950">
                  {dentist.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-700">
                  {dentist.focus}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {dentist.bio}
                </p>
                <p className="mt-5 border-t border-navy-900/10 pt-4 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  Profile details placeholder
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
