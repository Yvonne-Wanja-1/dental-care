import {
  BracesIcon,
  CheckupIcon,
  ImplantIcon,
  RootCanalIcon,
  SparklesIcon,
  ToothIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    title: "General Dentistry",
    description:
      "Everyday care for healthy teeth and gums, from cleanings and fillings to preventive advice.",
    icon: ToothIcon,
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening options designed to brighten your smile safely and comfortably.",
    icon: SparklesIcon,
  },
  {
    title: "Braces",
    description:
      "Modern orthodontic solutions that guide teeth into a healthier, more confident alignment.",
    icon: BracesIcon,
  },
  {
    title: "Dental Implants",
    description:
      "A stable, natural-looking replacement for missing teeth, planned around your long-term health.",
    icon: ImplantIcon,
  },
  {
    title: "Root Canal Treatment",
    description:
      "Gentle treatment to relieve pain and save a damaged tooth, with comfort at every step.",
    icon: RootCanalIcon,
  },
  {
    title: "Routine Checkups",
    description:
      "Regular exams and cleanings that catch small issues before they become bigger ones.",
    icon: CheckupIcon,
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 border-y border-navy-900/5 bg-mist py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="Our services"
          title="Complete care for every stage of your smile"
          description="From preventive visits to restorative treatments, our sample service menu shows how a full-service clinic experience could be presented."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative rounded-3xl border border-navy-900/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-6 text-xs font-semibold tabular-nums text-slate-300"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-navy-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-teal-200/70 bg-teal-50 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
          <p className="text-pretty text-sm font-medium text-teal-900 sm:text-base">
            Not sure where to start? A consultation is the easiest first step.
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-teal-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-900"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}
