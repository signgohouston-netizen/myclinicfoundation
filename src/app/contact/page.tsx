import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { Label, Input, Textarea, FormNotice } from "@/components/Field";
import { DemoForm } from "@/components/DemoForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MyClinic Foundation — questions, partnerships, volunteering, donations or support. We're here to help.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Questions about getting help, volunteering, donating or partnering? Send us a message and we'll respond as soon as we can."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            {[
              { icon: "mail" as const, t: "Email", d: siteConfig.email },
              { icon: "globe" as const, t: "Facebook", d: "facebook.com/myclinicfoundation", href: siteConfig.facebook },
              { icon: "flag" as const, t: "Focus regions", d: "United States · Pakistan · Worldwide" },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-2xl border border-brand-100 bg-white p-5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={c.icon} className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-ink">{c.t}</p>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-brand-600 hover:underline">
                      {c.d}
                    </a>
                  ) : (
                    <p className="text-sm text-ink-soft">{c.d}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-brand-100 bg-white p-7 sm:p-9">
            <DemoForm
              submitLabel="Send message"
              successBody="Thanks for reaching out. We'll get back to you by email soon."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="How can we help?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} required placeholder="Write your message…" />
              </div>
              <FormNotice />
            </DemoForm>
          </div>
        </div>
      </Section>
    </>
  );
}
