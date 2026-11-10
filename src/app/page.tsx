import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section, SectionHeading, CTABand, Eyebrow } from "@/components/Sections";
import { services, stats, seekerSteps, providerSteps, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
        <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-40 -z-10 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 bottom-0 -z-10 h-56 w-56 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <Eyebrow>501(c)(3) nonprofit · USA · Pakistan · Worldwide</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Volunteer healthcare,{" "}
              <span className="text-gradient">within reach of everyone</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {siteConfig.name} is a nonprofit marketplace that connects patients —
              especially the elderly and those who cannot afford care — with
              volunteer doctors, pharmacies, labs, hospitals and nurses, and with
              donors around the world who help pay their bills.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/find-help" size="lg" withArrow>
                I need help
              </Button>
              <Button href="/join?role=volunteer" variant="secondary" size="lg">
                Volunteer your services
              </Button>
            </div>
            <p className="mt-5 text-sm text-ink-soft">
              Free to join · Open to everyone, everywhere · Medicare, Medicaid &
              private insurance welcome
            </p>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-100 to-brand-50" />
              <div className="animate-floaty absolute inset-6 flex items-center justify-center rounded-[2rem] bg-white shadow-xl shadow-brand-500/10">
                <Image
                  src="/logo.avif"
                  alt={`${siteConfig.name} logo`}
                  width={260}
                  height={260}
                  priority
                  className="rounded-full"
                />
              </div>
              <FloatingCard className="left-0 top-6" icon="heart" label="Bill sponsored" sub="Donor in Texas" />
              <FloatingCard className="bottom-4 right-0" icon="stethoscope" label="Free consult" sub="Volunteer doctor" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container-page -mt-2 pb-8">
          <dl className="grid grid-cols-2 gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className="text-center">
                <dt
                  className="text-2xl font-extrabold sm:text-3xl"
                  style={{ color: ["#0294b2", "#f59e0b", "#10b981", "#8b5cf6"][i] }}
                >
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-tight text-ink-soft">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who we help */}
      <Section>
        <SectionHeading
          eyebrow="Who we serve"
          title="Care for the people who need it most"
          description="Anyone, anywhere can join — but we exist first for those least able to get help on their own."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "heartpulse" as const,
              accent: "#ec4899",
              title: "Elderly & vulnerable patients",
              body: "Seniors and patients who need volunteer doctors, nurses and private assistants for everyday care and recovery.",
            },
            {
              icon: "hands" as const,
              accent: "#f59e0b",
              title: "Patients who cannot pay",
              body: "People facing medical bills they cannot afford, who need their treatment, tests or medicine sponsored by donors.",
            },
            {
              icon: "globe" as const,
              accent: "#10b981",
              title: "Volunteers & donors worldwide",
              body: "Providers who want to give their services, and generous people anywhere in the world who want to pay someone's bill.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="card-hover rounded-2xl border border-brand-100 bg-white p-7"
              style={{ borderTop: `4px solid ${c.accent}` }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${c.accent}1a`, color: c.accent }}
              >
                <Icon name={c.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services marketplace */}
      <Section className="bg-brand-50/60">
        <SectionHeading
          eyebrow="The marketplace"
          title="Every kind of care, in one place"
          description="A growing network of volunteer and partner providers across eight categories of care."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`/services#${s.slug}`}
              className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white p-6"
            >
              <span
                className="absolute inset-x-0 top-0 h-1.5"
                style={{ backgroundColor: s.accent }}
              />
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${s.accent}1a`, color: s.accent }}
              >
                <Icon name={s.icon as never} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-bold text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {s.blurb}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                style={{ color: s.accent }}
              >
                Learn more <Icon name="arrow-right" className="h-4 w-4" />
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="primary" withArrow>
            Explore all services
          </Button>
        </div>
      </Section>

      {/* How it works — two paths */}
      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="Two simple paths — give care, or get care"
          description="Whether you need help or want to give it, getting started takes minutes."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <PathCard
            label="For patients seeking help"
            accent="bg-brand-500"
            steps={seekerSteps}
            cta={{ label: "Find help now", href: "/find-help" }}
          />
          <PathCard
            label="For volunteers & providers"
            accent="bg-brand-700"
            steps={providerSteps}
            cta={{ label: "Join as a volunteer", href: "/join?role=volunteer" }}
          />
        </div>
      </Section>

      {/* Donate / sponsor a bill */}
      <Section className="bg-brand-50/60">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Donate &amp; sponsor</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Pay someone&apos;s medical bill — from anywhere in the world
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Members in need share their verified condition and costs. You can
              sponsor a doctor&apos;s fee, a lab test, a course of medicine, or a
              hospital bill — fully or in part. 100% of a sponsored bill goes toward
              that patient&apos;s care.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Help a specific patient, or give to the general care fund",
                "Transparent, verified needs with uploaded reports",
                "Insurance billed first where Medicare, Medicaid or private plans apply",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-ink">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/donate" size="lg" withArrow>
                Sponsor a bill
              </Button>
              <Button href="/how-it-works" variant="secondary" size="lg">
                See how it works
              </Button>
            </div>
          </div>
          <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
              Ways to give
            </h3>
            <div className="mt-5 space-y-4">
              {[
                { icon: "stethoscope" as const, accent: "#0ea5e9", t: "Doctor's fee", d: "Cover a consultation or follow-up" },
                { icon: "flask" as const, accent: "#8b5cf6", t: "Lab & diagnostics", d: "Fund the tests a diagnosis needs" },
                { icon: "pill" as const, accent: "#10b981", t: "Medicine", d: "Sponsor a prescription or chronic-care refills" },
                { icon: "hospital" as const, accent: "#6366f1", t: "Hospital bill", d: "Help toward surgery or inpatient care" },
              ].map((g) => (
                <div key={g.t} className="flex items-center gap-4 rounded-xl bg-brand-50/70 p-4">
                  <div
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white shadow-sm"
                    style={{ color: g.accent }}
                  >
                    <Icon name={g.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">{g.t}</p>
                    <p className="text-sm text-ink-soft">{g.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Insurance + Advertise + Research row */}
      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon="shield-check"
            accent="#10b981"
            title="Insurance accepted"
            body="We work with Medicare, Medicaid and private insurance. Where a plan approves payment, providers are paid — so volunteer care stretches even further."
            href="/insurance"
            cta="Insurance & payments"
          />
          <InfoCard
            icon="flag"
            accent="#f97316"
            title="Advertise & partner"
            body="Doctors, labs, hospitals and pharmaceutical companies can advertise offers and introduce new products to a health-focused audience."
            href="/advertise"
            cta="Advertise with us"
          />
          <InfoCard
            icon="sparkles"
            accent="#8b5cf6"
            title="Research hub"
            body="Scientists and doctors can publish research and studies, and pharma companies can share innovations with our community."
            href="/research"
            cta="Explore research"
          />
        </div>
      </Section>

      {/* Regions */}
      <Section className="bg-brand-950 text-white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              <Icon name="globe" className="h-3.5 w-3.5" /> Global reach
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Rooted in the USA &amp; Pakistan. Open to the whole world.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              Our founding focus is the United States and Pakistan, but anyone —
              from any country — can join as a volunteer, a provider, a donor, or a
              patient seeking help. Compassion has no borders.
            </p>
            <div className="mt-8">
              <Button href="/join" variant="white" size="lg" withArrow>
                Join the movement
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "🇺🇸", t: "United States", d: "Founding region" },
              { k: "🇵🇰", t: "Pakistan", d: "Founding region" },
              { k: "🌍", t: "Everywhere else", d: "All welcome" },
            ].map((r) => (
              <div key={r.t} className="rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
                <div className="text-4xl">{r.k}</div>
                <p className="mt-3 font-bold">{r.t}</p>
                <p className="text-sm text-brand-200">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTABand
        title="Ready to give help — or get it?"
        description="Join MyClinic Foundation free today. Every member makes this community of care stronger."
        primary={{ label: "Join free", href: "/join" }}
        secondary={{ label: "Donate", href: "/donate" }}
      />
    </>
  );
}

function FloatingCard({
  className = "",
  icon,
  label,
  sub,
}: {
  className?: string;
  icon: "heart" | "stethoscope";
  label: string;
  sub: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-3 rounded-xl border border-brand-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur ${className}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-bold leading-tight text-ink">{label}</p>
        <p className="text-xs text-ink-soft">{sub}</p>
      </div>
    </div>
  );
}

function PathCard({
  label,
  accent,
  steps,
  cta,
}: {
  label: string;
  accent: string;
  steps: { title: string; body: string }[];
  cta: { label: string; href: string };
}) {
  return (
    <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
      <span className={`inline-block rounded-full ${accent} px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white`}>
        {label}
      </span>
      <ol className="mt-6 space-y-5">
        {steps.map((s, i) => (
          <li key={s.title} className="flex gap-4">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-ink">{s.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-7">
        <Button href={cta.href} withArrow>
          {cta.label}
        </Button>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  accent,
  title,
  body,
  href,
  cta,
}: {
  icon: "shield-check" | "flag" | "sparkles";
  accent: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <div
      className="card-hover flex flex-col rounded-2xl border border-brand-100 bg-white p-7"
      style={{ borderTop: `4px solid ${accent}` }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${accent}1a`, color: accent }}
      >
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{body}</p>
      <a
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
        style={{ color: accent }}
      >
        {cta} <Icon name="arrow-right" className="h-4 w-4" />
      </a>
    </div>
  );
}
