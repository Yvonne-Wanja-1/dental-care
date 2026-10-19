import {
  ArrowUpIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ToothIcon,
} from "@/components/icons";
import {
  contactDetails,
  navLinks,
  serviceNames,
} from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy-900/5 bg-mist">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 rounded-2xl"
              aria-label="DentalCare — back to top"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-800 text-white shadow-lg shadow-teal-800/20">
                <ToothIcon className="h-6 w-6" />
              </span>
              <span className="text-xl font-semibold tracking-tight text-navy-950">
                Dental<span className="text-teal-700">Care</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-600">
              Gentle, modern dentistry designed around your comfort, your time,
              and your long-term smile health.
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Sample website for preview purposes. All clinic details are
              placeholders.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-teal-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceNames.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-slate-600 transition-colors hover:text-teal-800"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-900">
              Contact
            </h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-slate-600">
              <p className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                <span>
                  {contactDetails.addressLines[0]}
                  <br />
                  {contactDetails.addressLines[1]}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0 text-teal-700" />
                <a
                  href={contactDetails.phoneHref}
                  className="transition-colors hover:text-teal-800"
                >
                  {contactDetails.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-teal-700" />
                <a
                  href={contactDetails.emailHref}
                  className="break-all transition-colors hover:text-teal-800"
                >
                  {contactDetails.email}
                </a>
              </p>
            </address>
            <a
              href="#book"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-teal-800"
            >
              Book an appointment
            </a>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.12em] text-slate-500">
              Placeholder contact details
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-navy-900/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-500">
            © 2026 DentalCare. Sample content for design preview.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-full text-xs font-semibold text-teal-800 transition-colors hover:text-navy-900"
          >
            Back to top
            <ArrowUpIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
