"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarIcon,
  CloseIcon,
  MenuIcon,
  ToothIcon,
} from "@/components/icons";
import { navLinks } from "@/lib/content";

const DESKTOP_QUERY = "(min-width: 1024px)";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;

    function update() {
      frame = 0;
      setScrolled(window.scrollY > 8);

      const marker = window.scrollY + 140;
      let current = "#home";
      let currentTop = Number.NEGATIVE_INFINITY;

      for (const link of navLinks) {
        const section = document.getElementById(link.href.slice(1));
        if (!section) continue;

        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker && top > currentTop) {
          current = link.href;
          currentTop = top;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      setActiveHref(atBottom ? "#contact" : current);
    }

    function handleScroll() {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    function handleBreakpointChange(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false);
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    desktopQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      desktopQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-navy-900/10 bg-white/85 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-navy-950/5" : ""
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3 rounded-2xl"
          aria-label="DentalCare — back to top"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-500 to-teal-800 text-white shadow-lg shadow-teal-800/20 transition-transform duration-300 group-hover:-rotate-6">
            <ToothIcon className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xl font-semibold tracking-tight text-navy-950">
              Dental<span className="text-teal-700">Care</span>
            </span>
            <span className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-slate-500">
              Family &amp; cosmetic dentistry
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeHref === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`inline-flex rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-teal-50 text-teal-800"
                        : "text-navy-800 hover:bg-teal-50 hover:text-teal-800"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-800/20"
          >
            <CalendarIcon className="h-4 w-4" />
            Book an Appointment
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-navy-900/10 text-navy-900 transition-colors hover:bg-teal-50 lg:hidden"
        >
          {menuOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-navy-900/10 bg-white px-5 pb-6 pt-4 shadow-xl shadow-navy-950/5 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeHref === link.href;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? "location" : undefined}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-teal-50 text-teal-800"
                          : "text-navy-800 hover:bg-teal-50 hover:text-teal-800"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <a
            href="#book"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800"
          >
            <CalendarIcon className="h-4 w-4" />
            Book an Appointment
          </a>
        </div>
      ) : null}
    </header>
  );
}
