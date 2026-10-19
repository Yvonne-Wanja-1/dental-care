import {
  ArrowRightIcon,
  CheckIcon,
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ToothIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    title: "Comfort-first care",
    description: "Gentle techniques and a pace that works for you.",
  },
  {
    title: "Honest guidance",
    description: "Clear options, transparent pricing, no pressure.",
  },
  {
    title: "Modern approach",
    description: "Thoughtful, minimally invasive treatment where possible.",
  },
  {
    title: "Time to talk",
    description: "Appointments that leave room for your questions.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="dot-grid absolute -left-6 -top-6 h-32 w-32 rounded-3xl opacity-50"
          />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-navy-900/10 bg-gradient-to-br from-teal-100 via-white to-sand p-6 shadow-xl shadow-navy-950/5 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
                Inside the clinic
              </p>
              <span className="rounded-full bg-white/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Sample image
              </span>
            </div>

            <div className="mt-6 grid aspect-[4/3] place-items-center rounded-[1.75rem] border border-dashed border-teal-300 bg-white/60 px-6 text-center">
              <div>
                <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-teal-600 to-teal-800 text-white shadow-xl shadow-teal-800/25">
                  <ToothIcon className="h-10 w-10" strokeWidth={1.3} />
                </span>
                <p className="mt-5 text-sm font-semibold text-navy-900">
                  Clinic photo placeholder
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Add a warm, real photo of your space and team.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <HeartIcon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-navy-900">
                  Care that listens
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/80 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
                  <ShieldCheckIcon className="h-4 w-4" />
                </span>
                <span className="text-xs font-semibold text-navy-900">
                  Quality you can trust
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 rotate-3 rounded-2xl border border-navy-900/5 bg-white p-4 shadow-xl shadow-navy-950/10 sm:block lg:-right-6">
            <SparklesIcon className="h-5 w-5 text-teal-600" />
            <p className="mt-2 text-xs font-semibold text-navy-950">
              Feel at ease
            </p>
            <p className="text-[0.65rem] text-slate-500">From the first hello</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            id="about-heading"
            eyebrow="Why DentalCare"
            title="A calmer kind of dental visit."
            description="We believe great dentistry starts with feeling understood. Our sample clinic concept is built around patient comfort, quality care, and clear communication at every step."
          />

          <p className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
            From the moment you walk in, the experience is designed to feel
            unhurried and reassuring — soft surroundings, simple explanations,
            and a team that treats you like a person, not an appointment slot.
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="flex gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-800">
                  <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy-950">
                    {pillar.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                    {pillar.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#dentists"
            className="group mt-9 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-teal-800 transition-colors hover:text-navy-900"
          >
            Meet our dentists
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <p className="mt-8 text-xs leading-relaxed text-slate-500">
            Story, imagery, and details in this section are sample content for
            preview purposes.
          </p>
        </div>
      </div>
    </section>
  );
}
