import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ToothIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5.4C10.4 4.1 8.6 3.4 7 3.8c-2.3.5-3.5 2.6-3.5 5.2 0 2 .6 3.6 1.2 5.3.5 1.5.8 3.1.9 4.6.1 1 .8 1.5 1.5 1.3.8-.2 1.2-1 1.4-2.1l.5-2.5c.2-1.1.9-1.8 2-1.8s1.8.7 2 1.8l.5 2.5c.2 1.1.6 1.9 1.4 2.1.7.2 1.4-.3 1.5-1.3.1-1.5.4-3.1.9-4.6.6-1.7 1.2-3.3 1.2-5.3 0-2.6-1.2-4.7-3.5-5.2-1.6-.4-3.4.3-5 1.6Z" />
    </Icon>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3.5 13.4 8l4.5 1.4-4.5 1.4L12 15.3l-1.4-4.5L6.1 9.4 10.6 8 12 3.5Z" />
      <path d="M18.5 15.2 19.2 17l1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
      <path d="M5 15.5 5.5 17l1.5.5-1.5.5L5 19.5 4.5 18 3 17.5 4.5 17 5 15.5Z" />
    </Icon>
  );
}

export function BracesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 8.5h16" />
      <path d="M4 15.5h16" />
      <path d="M7 6v5.5M12 6v5.5M17 6v5.5" />
      <path d="M7 12.5V18M12 12.5V18M17 12.5V18" />
      <path d="M4 12h16" />
    </Icon>
  );
}

export function ImplantIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M8.5 4.5c1-1 2.2-1.5 3.5-1.5s2.5.5 3.5 1.5c1.3 1.3 1.1 3.1-.1 4.2-.7.7-1.1 1.6-1.2 2.6l-.4 4.6c-.1 1.6-.6 3.2-1.2 4.6-.3.7-1.3.7-1.6 0-.6-1.4-1.1-3-1.2-4.6l-.4-4.6c-.1-1-.5-1.9-1.2-2.6-1.2-1.1-1.4-2.9-.1-4.2Z" />
      <path d="M9.5 9.5h5M9.8 12h4.4M10.1 14.5h3.8" />
    </Icon>
  );
}

export function RootCanalIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 4.5C10.4 3.6 8.8 3.2 7.4 3.6 5.3 4.2 4.2 6.1 4.2 8.4c0 1.5.4 2.8.8 4.1.3 1 .5 2 .6 3l.3 2.9c.1 1 .9 1.6 1.7 1.4.9-.2 1.4-1.1 1.6-2.4l.5-3.4c.1-.8.7-1.3 1.5-1.3s1.4.5 1.5 1.3l.5 3.4c.2 1.3.7 2.2 1.6 2.4.8.2 1.6-.4 1.7-1.4l.3-2.9c.1-1 .3-2 .6-3 .4-1.3.8-2.6.8-4.1 0-2.3-1.1-4.2-3.2-4.8-1.4-.4-3 0-4.6.9Z" />
      <path d="M12 10v4" />
    </Icon>
  );
}

export function CheckupIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M9 4.5H7.5A2.5 2.5 0 0 0 5 7v11.5A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V7a2.5 2.5 0 0 0-2.5-2.5H15" />
      <rect x="9" y="2.5" width="6" height="4" rx="1.5" />
      <path d="m8.8 13.5 2.2 2.2 4.2-4.4" />
    </Icon>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3 5 6v5.5c0 4.3 2.8 7.5 7 9.5 4.2-2 7-5.2 7-9.5V6l-7-3Z" />
      <path d="m9 12 2.1 2.1L15.2 10" />
    </Icon>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 20s-7.5-4.4-7.5-9.5A4.5 4.5 0 0 1 12 7.4a4.5 4.5 0 0 1 7.5 3.1C19.5 15.6 12 20 12 20Z" />
    </Icon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7.1 3.8 9 3.2c.7-.2 1.4.1 1.7.8l1.2 2.8c.2.6.1 1.3-.4 1.7L10 10c.8 1.7 2.3 3.2 4 4l1.5-1.5c.4-.5 1.1-.6 1.7-.4l2.8 1.2c.7.3 1 1 .8 1.7l-.6 1.9c-.2.6-.8 1.1-1.5 1.1C10.5 18 6 13.5 5 5.3c0-.7.5-1.3 1.1-1.5Z" />
    </Icon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Icon>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7 7.5 5.5L19.5 7" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4.5 12h15M14 6.5l5.5 5.5-5.5 5.5" />
    </Icon>
  );
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 19.5v-15M6.5 10 12 4.5 17.5 10" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Icon>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <Icon fill="currentColor" stroke="none" {...props}>
      <path d="M9.8 5.5c-3.3 1-5.3 3.6-5.3 7.4 0 3.3 1.9 5.6 4.6 5.6 2.3 0 4-1.6 4-3.8 0-2.1-1.5-3.6-3.4-3.6-.4 0-.8 0-1 .2.3-1.6 1.5-2.9 3.2-3.6l-2.1-2.2Zm9 0c-3.3 1-5.3 3.6-5.3 7.4 0 3.3 1.9 5.6 4.6 5.6 2.3 0 4-1.6 4-3.8 0-2.1-1.5-3.6-3.4-3.6-.4 0-.8 0-1 .2.3-1.6 1.5-2.9 3.2-3.6l-2.1-2.2Z" />
    </Icon>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <Icon fill="currentColor" stroke="none" {...props}>
      <path d="m12 3.6 2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L12 3.6Z" />
    </Icon>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 9.5h17" />
      <path d="m9 14.5 2 2 4-4" />
    </Icon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="m5 12.5 4.5 4.5L19 6.5" />
    </Icon>
  );
}
