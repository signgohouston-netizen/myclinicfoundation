export const siteConfig = {
  name: "MyClinic Foundation",
  legalName: "MyClinic Foundation",
  shortName: "MyClinic",
  domain: "myclinicfoundation.org",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://myclinicfoundation.org",
  description:
    "MyClinic Foundation is a 501(c)(3) nonprofit healthcare marketplace connecting patients with volunteer doctors, pharmacies, laboratories, hospitals, trauma centers, nurses and private assistants worldwide — and with donors who help cover their medical bills.",
  tagline: "Healthcare, given freely. Help, within reach.",
  email: "info@myclinicfoundation.org",
  facebook: "https://www.facebook.com/myclinicfoundation",
  primaryRegions: ["United States", "Pakistan"],
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Find help", href: "/find-help" },
  { label: "Insurance", href: "/insurance" },
  { label: "Research", href: "/research" },
  { label: "Advertise", href: "/advertise" },
  { label: "About", href: "/about" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Get involved",
    items: [
      { label: "Join as a volunteer", href: "/join?role=volunteer" },
      { label: "Find help", href: "/find-help" },
      { label: "Donate / sponsor a bill", href: "/donate" },
      { label: "Become a provider", href: "/join?role=provider" },
    ],
  },
  {
    heading: "Explore",
    items: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Services", href: "/services" },
      { label: "Insurance & payments", href: "/insurance" },
      { label: "Research hub", href: "/research" },
    ],
  },
  {
    heading: "Organization",
    items: [
      { label: "About us", href: "/about" },
      { label: "Advertise with us", href: "/advertise" },
      { label: "Contact", href: "/contact" },
      { label: "Facebook", href: siteConfig.facebook },
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  icon: string; // key used by the Icon component
  blurb: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "doctors",
    title: "Doctors & Physicians",
    icon: "stethoscope",
    blurb:
      "Volunteer general practitioners and specialists offering consultations, follow-ups and second opinions.",
    details: [
      "Free and low-cost consultations for members in need",
      "Telehealth and in-person options where available",
      "Specialists across cardiology, pediatrics, oncology and more",
    ],
  },
  {
    slug: "pharmacy",
    title: "Pharmacies",
    icon: "pill",
    blurb:
      "Partner pharmacies providing medicines at reduced cost or fully sponsored for qualifying patients.",
    details: [
      "Prescription fulfillment and medication guidance",
      "Discounted and donor-sponsored medicines",
      "Chronic-care and refill support",
    ],
  },
  {
    slug: "laboratories",
    title: "Laboratories",
    icon: "flask",
    blurb:
      "Diagnostic labs offering blood work, imaging and tests at volunteer or subsidized rates.",
    details: [
      "Pathology, radiology and diagnostic testing",
      "Sponsored tests for patients who cannot pay",
      "Fast reporting shared securely with your care team",
    ],
  },
  {
    slug: "emergency-rooms",
    title: "Emergency Rooms",
    icon: "ambulance",
    blurb:
      "Emergency departments and urgent-care partners for time-critical needs.",
    details: [
      "Urgent and emergency care coordination",
      "Guidance on where to go in a crisis",
      "Follow-up care after an ER visit",
    ],
  },
  {
    slug: "hospitals",
    title: "Hospitals",
    icon: "hospital",
    blurb:
      "Partner hospitals supporting admissions, surgeries and inpatient care for members.",
    details: [
      "Inpatient and surgical care partners",
      "Assistance navigating admissions and billing",
      "Donor sponsorship toward hospital bills",
    ],
  },
  {
    slug: "trauma-centers",
    title: "Trauma Centers",
    icon: "shield",
    blurb:
      "Specialized trauma centers for serious injuries and complex, life-threatening care.",
    details: [
      "Level I–III trauma care partners",
      "Rehabilitation and recovery support",
      "Coordination with your family and care team",
    ],
  },
  {
    slug: "private-nurses",
    title: "Private Nurses",
    icon: "heartpulse",
    blurb:
      "Volunteer and professional nurses for home care, elderly care and post-operative recovery.",
    details: [
      "In-home nursing and wound care",
      "Elderly and palliative care support",
      "Medication administration and monitoring",
    ],
  },
  {
    slug: "private-assistants",
    title: "Private Assistants",
    icon: "hands",
    blurb:
      "Caregivers and personal assistants helping elderly and disabled members with daily living.",
    details: [
      "Companionship and daily-living assistance",
      "Transport to appointments",
      "Errands, meals and household support",
    ],
  },
];

export type Step = { title: string; body: string };

export const seekerSteps: Step[] = [
  {
    title: "Create your free account",
    body: "Join with your complete information so our care coordinators and volunteers can verify and help you safely.",
  },
  {
    title: "Share your condition & reports",
    body: "Securely upload your medical history, diagnoses and reports so the right provider can understand your needs.",
  },
  {
    title: "Get matched to volunteers",
    body: "We connect you with doctors, labs, pharmacies, nurses or hospitals who volunteer their services.",
  },
  {
    title: "Receive care or financial help",
    body: "Get treated at no or low cost. If a bill remains, donors worldwide can sponsor it — and insurance is billed where approved.",
  },
];

export const providerSteps: Step[] = [
  {
    title: "Register your service",
    body: "Doctors, clinics, pharmacies, labs, hospitals and nurses sign up with their credentials and the help they can offer.",
  },
  {
    title: "Set your volunteer offer",
    body: "Choose how you help — free consultations, discounted tests, sponsored medicine, or accepting insurance-approved payments.",
  },
  {
    title: "Get matched with patients",
    body: "We route members whose needs fit your specialty and location to you.",
  },
  {
    title: "Make an impact",
    body: "Deliver care, log your contribution, and help someone who needed you most.",
  },
];

export const stats: { value: string; label: string }[] = [
  { value: "8", label: "Types of care partners" },
  { value: "2", label: "Founding focus regions: USA & Pakistan" },
  { value: "100%", label: "Open to volunteers worldwide" },
  { value: "501(c)(3)", label: "Nonprofit organization" },
];
