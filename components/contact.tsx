import { AppointmentForm } from "@/components/appointment-form";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { contactDetails, openingHours } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-white pb-20 pt-4 sm:pb-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-950 px-6 py-12 shadow-2xl shadow-navy-950/20 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="dot-grid absolute inset-0 opacity-10" />
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-teal-700/30 blur-3xl" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-300">
                <span aria-hidden="true" className="h-px w-6 bg-teal-400/70" />
                Contact
              </p>
              <h2
                id="contact-heading"
                className="mt-4 text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
              >
                Let&apos;s plan your first visit.
              </h2>
              <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
                Send an appointment request with the form, or reach us directly
                by phone or email. This preview uses placeholder contact
                details, so nothing is sent to a real clinic.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contactDetails.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-teal-100"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call {contactDetails.phone}
                </a>
                <a
                  href={contactDetails.emailHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-teal-300 hover:bg-white/10"
                >
                  <MailIcon className="h-4 w-4" />
                  Send an email
                </a>
              </div>

              <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-400">
                <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                Placeholder contact details. No booking data is stored or sent
                automatically.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                    <MapPinIcon className="h-4 w-4 text-teal-300" />
                    Visit us
                  </h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-slate-300">
                    <span className="block">{contactDetails.addressLines[0]}</span>
                    <span className="block">{contactDetails.addressLines[1]}</span>
                  </address>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.12em] text-slate-400">
                    {contactDetails.addressLines[2]}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
                      <ClockIcon className="h-4 w-4 text-teal-300" />
                      Opening hours
                    </h3>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-teal-200">
                      Sample hours
                    </span>
                  </div>
                  <dl className="mt-3 grid gap-x-8 sm:grid-cols-2">
                    {openingHours.map((entry) => (
                      <div
                        key={entry.day}
                        className="flex items-center justify-between gap-4 border-b border-white/10 py-2.5 text-sm last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
                      >
                        <dt className="text-slate-300">{entry.day}</dt>
                        <dd
                          className={
                            entry.hours === "Closed"
                              ? "font-medium text-teal-300"
                              : "font-medium text-white"
                          }
                        >
                          {entry.hours}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
