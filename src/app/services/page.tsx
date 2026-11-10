import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, CTABand } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Doctors, Pharmacies, Labs, Hospitals, Nurses & More",
  description:
    "Explore MyClinic Foundation's volunteer care marketplace: doctors, pharmacies, laboratories, emergency rooms, hospitals, trauma centers, private nurses and private assistants.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <PageHero
        eyebrow="The marketplace"
        title="Every kind of care, in one place"
        description="Eight categories of volunteer and partner providers, ready to help members who need care — and donors who want to make it possible."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/find-help" size="lg" withArrow>
            Find help now
          </Button>
          <Button href="/join?role=provider" variant="secondary" size="lg">
            List your service
          </Button>
        </div>
      </PageHero>

      <Section>
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 grid gap-6 overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 sm:p-9 md:grid-cols-[auto_1fr_auto] md:items-center"
              style={{ borderLeft: `6px solid ${s.accent}` }}
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `${s.accent}1a`, color: s.accent }}
              >
                <Icon name={s.icon as never} className="h-8 w-8" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold" style={{ color: s.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold text-ink">{s.title}</h2>
                </div>
                <p className="mt-2 max-w-2xl text-ink-soft">{s.blurb}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-ink">
                      <Icon name="check" className="mt-0.5 h-4 w-4 flex-none" style={{ color: s.accent }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right">
                <Button href="/find-help" variant="secondary">
                  Request this care
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTABand
        title="Are you a provider who wants to help?"
        description="Doctors, clinics, pharmacies, labs, hospitals and nurses — list your volunteer offer and reach the patients who need you."
        primary={{ label: "Become a provider", href: "/join?role=provider" }}
        secondary={{ label: "How it works", href: "/how-it-works" }}
      />
    </>
  );
}
