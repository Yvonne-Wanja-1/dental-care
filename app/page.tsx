import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Dentists } from "@/components/dentists";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <About />
        <Dentists />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
