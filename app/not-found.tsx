import Link from "next/link";
import {
  ArrowRightIcon,
  CalendarIcon,
  ToothIcon,
} from "@/components/icons";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-white px-5 py-20 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-teal-50 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sand/60 blur-3xl" />
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-3 rounded-2xl"
        aria-label="DentalCare — home"
      >
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-800 text-white shadow-lg shadow-teal-800/20">
          <ToothIcon className="h-6 w-6" />
        </span>
        <span className="text-xl font-semibold tracking-tight text-navy-950">
          Dental<span className="text-teal-700">Care</span>
        </span>
      </Link>

      <p className="mt-12 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
        404 — Page not found
      </p>
      <h1 className="mt-4 max-w-lg text-balance text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl">
        This page is not part of the smile yet.
      </h1>
      <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
        The page you are looking for may have moved or no longer exists. Head
        back to the homepage to explore services or request an appointment.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
        >
          Back to home
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        <Link
          href="/#book"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:border-teal-300 hover:bg-teal-50"
        >
          <CalendarIcon className="h-4 w-4" />
          Book an appointment
        </Link>
      </div>
    </main>
  );
}
