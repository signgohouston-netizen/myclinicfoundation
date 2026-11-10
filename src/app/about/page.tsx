import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading, CTABand } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Our Nonprofit Mission",
  description:
    "MyClinic Foundation is a 501(c)(3) nonprofit building a worldwide marketplace of volunteer healthcare and donor support, with a founding focus on the USA and Pakistan.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "heart" as const, t: "Compassion first", d: "We exist for the elderly, the vulnerable and anyone who cannot get care on their own." },
  { icon: "shield-check" as const, t: "Trust & dignity", d: "Verified needs, protected information, and respect for every member we serve." },
  { icon: "globe" as const, t: "No borders", d: "Volunteers, donors and patients from every country are welcome here." },
  { icon: "users" as const, t: "Community powered", d: "Thousands of small acts of generosity add up to life-changing care." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <PageHero
        eyebrow="About us"
        title="Healthcare, given freely. Help, within reach."
        description={`${siteConfig.name} is a nonprofit organization on a mission to make quality healthcare accessible to everyone — by connecting patients with volunteer providers and generous donors around the world.`}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">Our mission</h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Too many people — especially the elderly and those without means — go
              without the care they need. MyClinic Foundation brings together doctors,
              pharmacies, laboratories, emergency rooms, hospitals, trauma centers,
              private nurses and private assistants who volunteer their services, and
              pairs them with donors willing to pay a patient&apos;s bill when needed.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We welcome Medicare, Medicaid and private insurance, so every available
              resource works together to make care possible. Our founding focus is the
              United States and Pakistan — but membership is open to everyone,
              everywhere.
            </p>
          </div>
          <div className="rounded-3xl brand-gradient p-8 text-white">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-50">
              What we do
            </h3>
            <ul className="mt-5 space-y-4">
              {[
                "Connect patients with volunteer healthcare providers",
                "Let donors worldwide sponsor medical bills",
                "Coordinate insurance where it applies",
                "Give researchers and companies a place to share knowledge",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-none" />
                  <span className="text-brand-50">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-brand-50/60">
        <SectionHeading eyebrow="Our values" title="What guides us" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl border border-brand-100 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={v.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-bold text-ink">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-brand-100 bg-white p-8 text-center sm:p-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
            <Icon name="shield-check" className="h-4 w-4" /> 501(c)(3) nonprofit organization
          </span>
          <p className="mx-auto mt-5 max-w-2xl text-ink-soft">
            MyClinic Foundation is organized as a nonprofit. Donations support patient
            care and the mission of making healthcare accessible to all. Formal tax and
            registration details will be published here as part of our commitment to
            transparency.
          </p>
        </div>
      </Section>

      <CTABand
        title="Be part of the mission"
        description="Join as a volunteer, support a patient, or get the help you need — all in one community."
        primary={{ label: "Join free", href: "/join" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
