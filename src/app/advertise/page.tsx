import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { Label, Input, Select, Textarea, FormNotice } from "@/components/Field";
import { DemoForm } from "@/components/DemoForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Advertise & Partner — Reach a Health-Focused Audience",
  description:
    "Doctors, laboratories, hospitals, pharmacies and pharmaceutical companies can advertise offers and introduce new products on MyClinic Foundation. Open to Google Ads partners too.",
  alternates: { canonical: "/advertise" },
};

export default function AdvertisePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Advertise", url: "/advertise" },
        ]}
      />
      <PageHero
        eyebrow="Advertise & partner"
        title="Reach people who care about health"
        description="Promote your services and products to a focused community of patients, caregivers, providers and donors — while supporting a nonprofit mission."
      />

      <Section>
        <SectionHeading
          eyebrow="Who advertises here"
          title="Built for the whole health ecosystem"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "stethoscope" as const, t: "Doctors & clinics", d: "Promote consultations, specialties and availability." },
            { icon: "flask" as const, t: "Laboratories", d: "Advertise diagnostic packages and testing offers." },
            { icon: "hospital" as const, t: "Hospitals", d: "Showcase departments, programs and centers of excellence." },
            { icon: "pill" as const, t: "Pharmacies", d: "Feature services, savings and delivery options." },
            { icon: "sparkles" as const, t: "Pharmaceutical companies", d: "Introduce new products and innovations to the community." },
            { icon: "flag" as const, t: "Google Ads & health brands", d: "We welcome responsible, health-related advertising partners." },
          ].map((c) => (
            <div key={c.t} className="card-hover rounded-2xl border border-brand-100 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={c.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-50/60">
        <div className="mx-auto max-w-2xl">
          <SectionHeading
            eyebrow="Get started"
            title="Tell us about your campaign"
            description="Share a few details and our partnerships team will follow up with options and pricing."
          />
          <div className="mt-10 rounded-3xl border border-brand-100 bg-white p-7 sm:p-9">
            <DemoForm
              submitLabel="Request advertising info"
              successTitle="Request received"
              successBody="Thanks! Our partnerships team will reach out with advertising options."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="org">Organization</Label>
                  <Input id="org" name="org" required placeholder="Company or practice name" />
                </div>
                <div>
                  <Label htmlFor="contact">Contact name</Label>
                  <Input id="contact" name="contact" required placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@company.com" />
                </div>
                <div>
                  <Label htmlFor="type">Advertiser type</Label>
                  <Select id="type" name="type" required defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Doctor / clinic</option>
                    <option>Laboratory</option>
                    <option>Hospital</option>
                    <option>Pharmacy</option>
                    <option>Pharmaceutical company</option>
                    <option>Other health brand</option>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">What would you like to promote?</Label>
                <Textarea id="message" name="message" rows={4} placeholder="Tell us about your offer, product or campaign goals." />
              </div>
              <FormNotice />
            </DemoForm>
          </div>
        </div>
      </Section>
    </>
  );
}
