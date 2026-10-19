import { QuoteIcon, StarIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal-50 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sand/60 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="A glimpse of the patient experience"
          description="Fictional examples that show how genuine patient feedback could look once your clinic begins collecting reviews."
          align="center"
        />

        <p className="mx-auto mt-5 w-fit rounded-full border border-sand bg-sand/60 px-4 py-1.5 text-xs font-semibold text-slate-600">
          Fictional testimonials — design preview only
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="relative flex flex-col rounded-3xl border border-navy-900/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/5"
            >
              <QuoteIcon
                aria-hidden="true"
                className="absolute right-6 top-6 h-9 w-9 text-teal-100"
              />
              <div
                className="flex items-center gap-1 text-amber-500"
                aria-hidden="true"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1">
                <p className="text-pretty text-sm leading-relaxed text-slate-600">
                  {testimonial.quote}
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-900/10 pt-5">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 place-items-center rounded-full bg-teal-100 text-xs font-bold text-teal-900"
                >
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy-950">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs text-slate-500">
                    {testimonial.context}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-relaxed text-slate-500">
          All testimonials shown are fictional examples written for this
          preview. They are not real patient reviews.
        </p>
      </div>
    </section>
  );
}
