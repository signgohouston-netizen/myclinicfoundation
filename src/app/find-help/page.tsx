import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { Label, Input, Select, Textarea, FormNotice } from "@/components/Field";
import { DemoForm } from "@/components/DemoForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find Help — Request Volunteer Care or Bill Sponsorship",
  description:
    "Need medical care or help paying a bill? Tell MyClinic Foundation about your condition and we'll match you with volunteer providers and donors who can help.",
  alternates: { canonical: "/find-help" },
};

export default function FindHelpPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Find help", url: "/find-help" },
        ]}
      />
      <PageHero
        eyebrow="Find help"
        title="Tell us what you need — we'll help you find it"
        description="Share your situation and our coordinators will connect you with volunteer providers, insurance options, and donors who can sponsor your care."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="You're in the right place"
              title="Help is free to request"
            />
            <ul className="mt-6 space-y-4">
              {[
                { t: "No cost to ask", d: "Requesting help is always free. Many services are provided by volunteers at no charge." },
                { t: "Insurance welcome", d: "Medicare, Medicaid and private insurance are billed where they apply." },
                { t: "Bills can be sponsored", d: "If a bill remains, donors worldwide can cover it — fully or in part." },
                { t: "Your privacy matters", d: "Your condition and reports are shared only with those helping you." },
              ].map((x) => (
                <li key={x.t} className="flex gap-3">
                  <Icon name="check" className="mt-0.5 h-5 w-5 flex-none text-brand-600" />
                  <div>
                    <p className="font-semibold text-ink">{x.t}</p>
                    <p className="text-sm text-ink-soft">{x.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="flex items-center gap-2 font-semibold text-red-700">
                <Icon name="ambulance" className="h-5 w-5" /> In an emergency
              </p>
              <p className="mt-1 text-sm text-red-700/90">
                MyClinic Foundation is not an emergency service. If this is a
                medical emergency, call your local emergency number right now.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-white p-7 sm:p-9">
            <DemoForm
              submitLabel="Request help"
              successTitle="Your request is in"
              successBody="A care coordinator will review your request and reach out with next steps."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email or phone</Label>
                  <Input id="email" name="email" required placeholder="How we can reach you" />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" required placeholder="City, country" />
                </div>
                <div>
                  <Label htmlFor="service">Type of care needed</Label>
                  <Select id="service" name="service" defaultValue="">
                    <option value="" disabled>Select</option>
                    {services.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                    <option>Financial help with a bill</option>
                    <option>Not sure — need guidance</option>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="condition">Describe your condition &amp; what you need</Label>
                <Textarea id="condition" name="condition" rows={4} required placeholder="Share your diagnosis, symptoms, and the help you're looking for." />
              </div>
              <div className="rounded-xl border border-dashed border-brand-300 bg-brand-50/60 p-5 text-center">
                <Icon name="upload" className="mx-auto h-7 w-7 text-brand-500" />
                <p className="mt-2 text-sm font-semibold text-ink">Attach medical reports (optional)</p>
                <p className="text-xs text-ink-soft">Diagnoses, prescriptions, or lab reports help us help you faster.</p>
                <input type="file" multiple className="mt-3 w-full text-xs text-ink-soft file:mr-3 file:rounded-full file:border-0 file:bg-brand-500 file:px-4 file:py-2 file:text-white" />
              </div>
              <FormNotice />
            </DemoForm>
          </div>
        </div>
      </Section>
    </>
  );
}
