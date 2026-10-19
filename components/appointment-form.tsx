"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
} from "@/components/icons";
import { contactDetails, serviceNames } from "@/lib/content";

const fieldClass =
  "mt-2 w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-base text-navy-950 outline-none transition-colors placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 sm:text-sm";
const labelClass =
  "block text-xs font-semibold uppercase tracking-[0.12em] text-navy-900";

type Status = "idle" | "ready" | "error";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [preparedHref, setPreparedHref] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const getValue = (key: string) =>
      String(formData.get(key) ?? "").trim();

    const name = getValue("name");
    const email = getValue("email");
    const phone = getValue("phone");
    const service = getValue("service");
    const preferredDate = getValue("date");
    const preferredTime = getValue("time");
    const notes = getValue("notes");

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const requestedDate = new Date(`${preferredDate}T00:00:00`);

    if (
      Number.isNaN(requestedDate.getTime()) ||
      requestedDate < today
    ) {
      setStatus("error");
      setErrorMessage("Please choose today or a future date.");
      return;
    }

    const subject = `Appointment request from ${name}`;
    const body = [
      "New appointment request (website demo)",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${service}`,
      `Preferred date: ${preferredDate}`,
      `Preferred time: ${preferredTime}`,
      "",
      `Notes: ${notes || "None"}`,
    ].join("\n");

    const mailtoHref = `mailto:${contactDetails.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setPreparedHref(mailtoHref);
    setErrorMessage("");
    setStatus("ready");
    window.location.href = mailtoHref;
  }

  return (
    <div
      id="book"
      aria-labelledby="booking-heading"
      className="scroll-mt-28 rounded-[2rem] bg-white p-6 text-navy-950 shadow-2xl shadow-navy-950/25 sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-teal-700">
            Appointment request
          </p>
          <h3
            id="booking-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-navy-950 sm:text-[1.7rem]"
          >
            Book your visit
          </h3>
        </div>
        <span className="rounded-full border border-sand bg-sand/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-600">
          Demo form
        </span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Share a few details and we&apos;ll prepare an email for you. Fields
        marked with <span aria-hidden="true">*</span> are required.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="appointment-name" className={labelClass}>
              Full name <span aria-hidden="true">*</span>
            </label>
            <input
              id="appointment-name"
              name="name"
              type="text"
              autoComplete="name"
              maxLength={80}
              required
              placeholder="Sample Patient"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="appointment-email" className={labelClass}>
              Email <span aria-hidden="true">*</span>
            </label>
            <input
              id="appointment-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={120}
              required
              placeholder="you@example.com"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="appointment-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="appointment-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              placeholder="(000) 000-0000"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="appointment-service" className={labelClass}>
              Service <span aria-hidden="true">*</span>
            </label>
            <select
              id="appointment-service"
              name="service"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceNames.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="appointment-date" className={labelClass}>
              Preferred date <span aria-hidden="true">*</span>
            </label>
            <input
              id="appointment-date"
              name="date"
              type="date"
              required
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="appointment-time" className={labelClass}>
              Preferred time <span aria-hidden="true">*</span>
            </label>
            <select
              id="appointment-time"
              name="time"
              required
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select a time
              </option>
              <option value="Morning (8am–12pm)">Morning (8am–12pm)</option>
              <option value="Afternoon (12pm–4pm)">Afternoon (12pm–4pm)</option>
              <option value="Late afternoon (4pm–6pm)">
                Late afternoon (4pm–6pm)
              </option>
              <option value="No preference">No preference</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="appointment-notes" className={labelClass}>
              Notes
            </label>
            <textarea
              id="appointment-notes"
              name="notes"
              rows={3}
              maxLength={800}
              placeholder="Tell us anything helpful about your visit (optional)."
              className={`${fieldClass} resize-y`}
            />
          </div>
        </div>

        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-900/20"
        >
          Request appointment
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {status === "error" ? (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {errorMessage}
          </p>
        ) : null}

        {status === "ready" ? (
          <div
            role="status"
            aria-live="polite"
            className="flex items-start gap-3 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-900"
          >
            <CheckIcon
              className="mt-0.5 h-4 w-4 shrink-0"
              strokeWidth={2.4}
            />
            <p>
              Your email app should open with the request details. Nothing was
              sent automatically. If it did not open,{" "}
              <a
                href={preparedHref}
                className="font-semibold underline underline-offset-2"
              >
                open the prefilled email
              </a>
              .
            </p>
          </div>
        ) : null}
      </form>

      <p
        id="booking-demo-note"
        className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-slate-500"
      >
        <SparklesIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-700" />
        Demo only: submitting opens your email app using the placeholder clinic
        address. Nothing is sent or stored by this website.
      </p>
    </div>
  );
}
