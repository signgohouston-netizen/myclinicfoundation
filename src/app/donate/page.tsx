import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Sections";
import { Icon } from "@/components/Icon";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { DonateForm } from "./DonateForm";

export const metadata: Metadata = {
  title: "Donate — Sponsor a Patient's Medical Bill",
  description:
    "Give from anywhere in the world. Sponsor a doctor's fee, lab test, medicine or hospital bill for a MyClinic Foundation member in need. 100% of a sponsored bill goes to care.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Donate", url: "/donate" },
        ]}
      />
      <PageHero
        eyebrow="Donate & sponsor"
        title="Your gift pays someone's medical bill"
        description="Every donation helps a real patient receive care they couldn't otherwise afford — a consultation, a test, medicine, or a hospital stay."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink">
              Where your money goes
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Members in need share their verified condition and the costs they face.
              You choose what to support — or let us direct your gift where it&apos;s
              needed most. When insurance applies, it&apos;s billed first, so your
              donation stretches even further.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: "stethoscope" as const, t: "$25", d: "Toward a doctor's consultation" },
                { icon: "flask" as const, t: "$50", d: "Help fund diagnostic lab tests" },
                { icon: "pill" as const, t: "$100", d: "A month of essential medicine" },
                { icon: "hospital" as const, t: "$250+", d: "Toward hospital or surgical care" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-brand-100 bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon name={x.icon} className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-xl font-extrabold text-brand-600">{x.t}</p>
                  <p className="text-sm text-ink-soft">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl bg-brand-50/70 p-5">
              <Icon name="heart" className="mt-0.5 h-6 w-6 flex-none text-brand-600" />
              <p className="text-sm text-ink-soft">
                Prefer to give your time instead of money?{" "}
                <a href="/join?role=volunteer" className="font-semibold text-brand-600">
                  Volunteer your services
                </a>{" "}
                and help patients directly.
              </p>
            </div>
          </div>

          <DonateForm />
        </div>
      </Section>
    </>
  );
}
