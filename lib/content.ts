export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Dentists", href: "#dentists" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const serviceNames = [
  "General Dentistry",
  "Teeth Whitening",
  "Braces",
  "Dental Implants",
  "Root Canal Treatment",
  "Routine Checkups",
] as const;

export const contactDetails = {
  addressLines: [
    "123 Placeholder Street, Suite 000",
    "Sample City, ST 00000",
    "Address shown is a placeholder",
  ],
  phone: "(000) 000-0000",
  phoneHref: "tel:0000000000",
  email: "hello@example.com",
  emailHref: "mailto:hello@example.com",
};

export const openingHours = [
  { day: "Monday – Thursday", hours: "8:00 AM – 6:00 PM" },
  { day: "Friday", hours: "8:00 AM – 4:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 1:00 PM" },
  { day: "Sunday", hours: "Closed" },
] as const;

export const dentists = [
  {
    initials: "MS",
    name: "Dr. Maya Sample",
    focus: "General & cosmetic dentistry",
    bio: "Profile placeholder. Add a short introduction covering your approach to care, areas of interest, and what patients can expect.",
    accent: "from-teal-600 to-teal-800",
  },
  {
    initials: "DP",
    name: "Dr. Daniel Placeholder",
    focus: "Orthodontics",
    bio: "Profile placeholder. Use this space for education, professional memberships, and a personal note about your work.",
    accent: "from-navy-700 to-navy-900",
  },
  {
    initials: "PE",
    name: "Dr. Priya Example",
    focus: "Restorative & implant care",
    bio: "Profile placeholder. Share how you help patients feel comfortable and what you enjoy most about your practice.",
    accent: "from-teal-700 to-navy-800",
  },
] as const;

export const testimonials = [
  {
    quote:
      "This is a fictional testimonial used to preview the layout. It describes a calm first visit, clear explanations, and a team that took time to answer questions.",
    name: "Sample Patient A",
    context: "First visit — fictional review",
    initials: "SA",
  },
  {
    quote:
      "This is a fictional testimonial used to preview the layout. It mentions a comfortable cleaning, a straightforward treatment plan, and helpful reminders.",
    name: "Sample Patient B",
    context: "Routine checkup — fictional review",
    initials: "SB",
  },
  {
    quote:
      "This is a fictional testimonial used to preview the layout. It highlights a relaxed atmosphere, gentle care, and feeling informed at every step.",
    name: "Sample Patient C",
    context: "Whitening — fictional review",
    initials: "SC",
  },
] as const;
