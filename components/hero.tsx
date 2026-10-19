import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  SparklesIcon,
  ToothIcon,
} from "@/components/icons";

const highlights = [
  "Comfort-first appointments",
  "Clear, honest recommendations",
  "Time for every question",
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-32 -top-40 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-sand/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-50 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-28 lg:pt-24">
        <div>
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-800"
            style={{ animationDelay: "40ms" }}
          >
            <SparklesIcon className="h-4 w-4" />
            Modern family &amp; cosmetic dentistry
          </p>

          <h1
            id="hero-heading"
            className="animate-rise mt-6 text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-navy-950 sm:text-6xl lg:text-[4.1rem]"
            style={{ animationDelay: "120ms" }}
          >
            Healthy smiles,{" "}
            <span className="font-serif font-normal italic text-teal-700">
              thoughtfully
            </span>{" "}
            cared for.
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Gentle, modern dentistry in a calm and welcoming space. From routine
            checkups to complete smile makeovers, every visit is designed around
            your comfort, your time, and your goals.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "280ms" }}
          >
            <a
              href="#book"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-navy-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-800/25"
            >
              <CalendarIcon className="h-4 w-4" />
              Book an Appointment
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-white px-7 py-4 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-50"
            >
              Explore our services
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <ul
            className="animate-rise mt-9 flex flex-wrap gap-x-6 gap-y-3"
            style={{ animationDelay: "360ms" }}
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-teal-100 text-teal-800">
                  <CheckIcon className="h-3 w-3" strokeWidth={2.4} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-rise relative mx-auto w-full max-w-lg lg:max-w-none"
          style={{ animationDelay: "220ms" }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-teal-200/50 via-transparent to-sand/60 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-600 via-teal-800 to-navy-950 p-5 shadow-2xl shadow-navy-950/25 sm:p-7">
            <div
              aria-hidden="true"
              className="dot-grid absolute inset-0 opacity-20"
            />
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full border border-white/10"
            />

            <div className="relative rounded-[1.8rem] border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-100">
                    Your visit, simplified
                  </p>
                  <p className="mt-3 max-w-[13rem] text-2xl font-semibold leading-snug text-white sm:text-[1.7rem]">
                    A calmer kind of dental experience
                  </p>
                </div>
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/10 text-white sm:h-20 sm:w-20">
                  <ToothIcon className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.2} />
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {[
                  "Gentle, unhurried appointments",
                  "Treatment plans explained clearly",
                  "A space designed to feel calm",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-teal-50"
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15 text-white">
                      <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
                <div className="flex -space-x-2.5" aria-hidden="true">
                  {["SA", "SB", "SC"].map((initials) => (
                    <span
                      key={initials}
                      className="grid h-9 w-9 place-items-center rounded-full border-2 border-teal-800 bg-teal-100 text-[0.65rem] font-bold text-teal-900"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-medium text-teal-100">
                  Placeholder care team
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
