import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects your personal and medical information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Your trust matters to us. This is a plain-language summary of how we handle your information." />
      <Section>
        <div className="prose-legal mx-auto max-w-3xl space-y-6 text-ink-soft">
          <p className="text-sm text-ink-soft">Last updated: {new Date().getFullYear()}. This is a placeholder policy to be reviewed by legal counsel before launch.</p>
          {[
            { h: "Information we collect", b: "When you create an account or request help, we collect the information you provide — such as your name, contact details, country, and (for patients) the condition details and medical reports you choose to upload." },
            { h: "How we use your information", b: "We use your information to verify members, match patients with providers and donors, coordinate care and insurance, and communicate with you about your request." },
            { h: "Medical information & consent", b: "Medical reports and condition details are shared only with the care coordinators, providers and, where you consent, donors involved in helping you. You control your information and may request access or deletion at any time." },
            { h: "Insurance & payments", b: "Where insurance applies, relevant details may be shared with the provider and insurer to process approved claims. Donations are processed by a secure third-party payment provider; we do not store card details." },
            { h: "Data sharing", b: "We never sell your personal data. We share information only as needed to deliver the services you request or as required by law." },
            { h: "Your rights", b: "You may update, export or delete your information, and withdraw consent, by contacting us at the email below." },
            { h: "Contact", b: `Questions about privacy? Email ${siteConfig.email}.` },
          ].map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-bold text-ink">{s.h}</h2>
              <p className="mt-2 leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
