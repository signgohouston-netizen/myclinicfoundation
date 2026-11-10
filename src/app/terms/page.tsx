import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that govern your use of the ${siteConfig.name} platform.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" description="The basic terms for using MyClinic Foundation. Please read them carefully." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-ink-soft">
          <p className="text-sm">Last updated: {new Date().getFullYear()}. This is a placeholder document to be reviewed by legal counsel before launch.</p>
          {[
            { h: "About the service", b: `${siteConfig.name} is a nonprofit platform that connects patients with volunteer healthcare providers and donors. We facilitate connections; we are not a healthcare provider and do not practice medicine.` },
            { h: "Not medical or emergency advice", b: "Content on this site is for general information only and is not a substitute for professional medical advice, diagnosis or treatment. In an emergency, call your local emergency number immediately." },
            { h: "Eligibility & accounts", b: "You agree to provide accurate information and to keep your account details current. You are responsible for activity under your account." },
            { h: "Providers & volunteers", b: "Providers represent that they hold the licenses and qualifications required to offer their services, and are responsible for the care they deliver and for complying with applicable laws." },
            { h: "Donations", b: "Donations support patient care and the foundation's mission. Donations are processed securely by a third-party provider. Tax treatment of donations depends on your jurisdiction." },
            { h: "Acceptable use", b: "You agree not to misuse the platform, submit false information, or use it for any unlawful purpose." },
            { h: "Changes", b: "We may update these terms from time to time. Continued use of the platform means you accept the updated terms." },
            { h: "Contact", b: `Questions about these terms? Email ${siteConfig.email}.` },
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
