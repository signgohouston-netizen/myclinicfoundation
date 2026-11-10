import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading, CTABand } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { seekerSteps, providerSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works — Get Care, Give Care, Sponsor a Bill",
  description:
    "Learn how MyClinic Foundation connects patients with volunteer providers and donors: join free, share your condition and reports, get matched, and receive care or financial help.",
  alternates: { canonical: "/how-it-works" },
};

const faqs = [
  {
    q: "Who can join MyClinic Foundation?",
    a: "Anyone, anywhere. Patients seeking help, volunteer providers, and donors are all welcome. Our founding focus is the USA and Pakistan, but members join from around the world.",
  },
  {
    q: "What does it cost?",
    a: "Joining is free. Many services are offered by volunteers at no cost. Where a bill remains, donors can sponsor it, and insurance is billed first wherever a plan applies.",
  },
  {
    q: "What information do I need to provide to get help?",
    a: "To request care, you create an account with your complete information and securely upload details of your condition along with relevant medical reports, so the right provider can help you safely.",
  },
  {
    q: "How is my medical information protected?",
    a: "Your reports are shared only with the care coordinators and providers involved in helping you. You control your information and can request its removal at any time.",
  },
  {
    q: "Does insurance work here?",
    a: "Yes. We welcome Medicare, Medicaid and private insurance. When a plan approves payment, the provider is paid through insurance — which lets volunteer care help even more people.",
  },
  {
    q: "Is this emergency care?",
    a: "No. MyClinic Foundation is not an emergency service. In a medical emergency, call your local emergency number immediately.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "How it works", url: "/how-it-works" },
        ]}
      />
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <PageHero
        eyebrow="How it works"
        title="Give care, get care, or pay a bill — in a few simple steps"
        description="MyClinic Foundation is a trusted bridge between people who need healthcare and the volunteers and donors who make it possible."
      />

      <Section>
        <SectionHeading
          align="left"
          eyebrow="For patients"
          title="Seeking help"
          description="If you need medical care or help paying for it, here's your path."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {seekerSteps.map((s, i) => (
            <StepTile key={s.title} n={i + 1} title={s.title} body={s.body} />
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50/60">
        <SectionHeading
          align="left"
          eyebrow="For volunteers & providers"
          title="Offering help"
          description="If you're a provider or want to volunteer your services, here's how you help."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {providerSteps.map((s, i) => (
            <StepTile key={s.title} n={i + 1} title={s.title} body={s.body} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-brand-100 rounded-2xl border border-brand-100 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                {f.q}
                <Icon
                  name="arrow-right"
                  className="h-5 w-5 flex-none text-brand-500 transition-transform group-open:rotate-90"
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CTABand
        title="Start today — it's free"
        description="Create your account in minutes and become part of a worldwide community of care."
        primary={{ label: "Join free", href: "/join" }}
        secondary={{ label: "Find help", href: "/find-help" }}
      />
    </>
  );
}

function StepTile({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="relative rounded-2xl border border-brand-100 bg-white p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white">
        {n}
      </span>
      <h3 className="mt-4 font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
