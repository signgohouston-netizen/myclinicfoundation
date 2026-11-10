import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading, CTABand } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Insurance & Payments — Medicare, Medicaid & Private Insurance",
  description:
    "MyClinic Foundation welcomes Medicare, Medicaid and private insurance. Where a plan approves payment, providers are paid — so volunteer care and donor support reach more patients.",
  alternates: { canonical: "/insurance" },
};

const plans = [
  {
    title: "Medicare",
    body: "For eligible seniors and people with qualifying conditions. We help coordinate covered services with participating providers.",
  },
  {
    title: "Medicaid",
    body: "For eligible low-income individuals and families. We work to connect members with Medicaid-accepting partners.",
  },
  {
    title: "Private insurance",
    body: "Have a private or employer plan? Providers can bill approved services directly, so your benefits go further.",
  },
];

export default function InsurancePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Insurance", url: "/insurance" },
        ]}
      />
      <PageHero
        eyebrow="Insurance & payments"
        title="Medicare, Medicaid & private insurance — all welcome"
        description="MyClinic Foundation combines three sources of support — volunteer providers, generous donors, and insurance — so no patient is turned away for lack of funds."
      />

      <Section>
        <SectionHeading
          eyebrow="How payment works"
          title="Three ways a bill gets covered"
          description="For every member in need, we look for the most sustainable way to get them care."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: "heart" as const, accent: "#ec4899", t: "1. Volunteer care", d: "Many providers give their time and services for free to members who qualify." },
            { icon: "shield-check" as const, accent: "#10b981", t: "2. Insurance billed", d: "Where Medicare, Medicaid or private insurance approves, the provider is paid by the plan." },
            { icon: "users" as const, accent: "#6366f1", t: "3. Donor sponsorship", d: "Any remaining bill can be sponsored by donors anywhere in the world." },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl border border-brand-100 bg-white p-7"
              style={{ borderTop: `4px solid ${c.accent}` }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${c.accent}1a`, color: c.accent }}
              >
                <Icon name={c.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50/60">
        <SectionHeading eyebrow="Accepted plans" title="Insurance we work with" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.title} className="rounded-2xl border border-brand-100 bg-white p-7">
              <h3 className="text-lg font-bold text-brand-700">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-soft">
          Coverage depends on your plan, eligibility and the participating provider.
          Our coordinators help you understand your options before any care begins.
        </p>
      </Section>

      <CTABand
        title="Not sure what you qualify for?"
        description="Join free and our team will help you understand how insurance, volunteer care and donor support can work together for you."
        primary={{ label: "Find help", href: "/find-help" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
