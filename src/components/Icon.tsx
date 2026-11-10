import type { SVGProps } from "react";

type IconName =
  | "stethoscope"
  | "pill"
  | "flask"
  | "ambulance"
  | "hospital"
  | "shield"
  | "heartpulse"
  | "hands"
  | "heart"
  | "globe"
  | "shield-check"
  | "upload"
  | "users"
  | "search"
  | "sparkles"
  | "arrow-right"
  | "check"
  | "menu"
  | "close"
  | "mail"
  | "flag";

const paths: Record<IconName, React.ReactNode> = {
  stethoscope: (
    <>
      <path d="M4 3v5a4 4 0 0 0 8 0V3" />
      <path d="M8 15a5 5 0 0 0 10 0v-2" />
      <circle cx="18" cy="11" r="2" />
    </>
  ),
  pill: (
    <>
      <path d="m10.5 20.5-7-7a4.95 4.95 0 1 1 7-7l7 7a4.95 4.95 0 1 1-7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6" />
      <path d="M10 3v6.5L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3" />
      <path d="M7 15h10" />
    </>
  ),
  ambulance: (
    <>
      <path d="M10 10H6" />
      <path d="M8 8v4" />
      <path d="M2 8a2 2 0 0 1 2-2h10v11H3a1 1 0 0 1-1-1Z" />
      <path d="M14 9h4l3 4v4h-7Z" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
    </>
  ),
  hospital: (
    <>
      <path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14" />
      <path d="M3 21h18" />
      <path d="M12 6v6M9 9h6" />
      <path d="M9 21v-4h6v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5Z" />
    </>
  ),
  heartpulse: (
    <>
      <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7Z" />
      <path d="M3.2 12h4l1.5-3 2.5 5 1.5-3h4.5" />
    </>
  ),
  hands: (
    <>
      <path d="M11 14v-3a1.5 1.5 0 0 1 3 0V8a1.5 1.5 0 0 1 3 0v6a6 6 0 0 1-6 6h-1.5a5 5 0 0 1-3.5-1.5L3 15" />
      <path d="M8 14V6a1.5 1.5 0 0 1 3 0v5" />
    </>
  ),
  heart: (
    <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7Z" />
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 2 4 5v6c0 5 3.5 8 8 11 4.5-3 8-6 8-11V5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V4" />
      <path d="m7 9 5-5 5 5" />
      <path d="M5 20h14" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 6a3 3 0 0 1 0 6" />
      <path d="M17 14a6 6 0 0 1 4 6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="m6 6 2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 7" />,
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  flag: (
    <>
      <path d="M4 22V4" />
      <path d="M4 4h13l-2 4 2 4H4" />
    </>
  ),
};

export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
