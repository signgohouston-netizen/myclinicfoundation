import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading, CTABand } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { Label, Input, Select, Textarea, FormNotice } from "@/components/Field";
import { DemoForm } from "@/components/DemoForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Research Hub — Publish Studies & Share Medical Innovation",
  description:
    "Scientists, doctors and pharmaceutical companies can publish research, studies and new products on MyClinic Foundation's community research hub.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Research", url: "/research" },
        ]}
      />
      <PageHero
        eyebrow="Research hub"
        title="Share the science that moves medicine forward"
        description="A home for researchers, doctors and companies to publish studies, present findings, and introduce innovations to a community that cares about health."
      />

      <Section>
        <SectionHeading eyebrow="What you can share" title="Knowledge, openly exchanged" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: "sparkles" as const, t: "Research & studies", d: "Publish peer-ready studies, case reports and clinical findings for the community." },
            { icon: "flask" as const, t: "Scientific work", d: "Scientists and doctors can present ongoing work and invite collaboration." },
            { icon: "pill" as const, t: "New products", d: "Pharmaceutical companies can introduce new medicines and health innovations." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-brand-100 bg-white p-7">
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
            eyebrow="Submit"
            title="Submit your research or product"
            description="Share the details and our editorial team will review your submission for the research hub."
          />
          <div className="mt-10 rounded-3xl border border-brand-100 bg-white p-7 sm:p-9">
            <DemoForm
              submitLabel="Submit for review"
              successTitle="Submission received"
              successBody="Thank you. Our editorial team will review your submission and follow up."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="author">Author / organization</Label>
                  <Input id="author" name="author" required placeholder="Name or institution" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@institution.org" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" required placeholder="Title of your study or product" />
                </div>
                <div>
                  <Label htmlFor="kind">Submission type</Label>
                  <Select id="kind" name="kind" required defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Research / study</option>
                    <option>Case report</option>
                    <option>New product</option>
                    <option>Other</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="link">Link (optional)</Label>
                  <Input id="link" name="link" placeholder="DOI, preprint or product page" />
                </div>
              </div>
              <div>
                <Label htmlFor="abstract">Abstract / summary</Label>
                <Textarea id="abstract" name="abstract" rows={4} placeholder="Summarize your work for the community." />
              </div>
              <FormNotice />
            </DemoForm>
          </div>
        </div>
      </Section>

      <CTABand
        title="Advance healthcare with us"
        description="Join a community where science, care and generosity meet."
        primary={{ label: "Join free", href: "/join" }}
        secondary={{ label: "Advertise a product", href: "/advertise" }}
      />
    </>
  );
}
