import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Sections";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { JoinForm } from "./JoinForm";

export const metadata: Metadata = {
  title: "Join Free — Volunteer, Provider, Donor or Patient",
  description:
    "Create your free MyClinic Foundation account. Join as a volunteer, healthcare provider, donor, or a patient seeking care and financial help. Open to everyone worldwide.",
  alternates: { canonical: "/join" },
};

type Role = "volunteer" | "provider" | "donor" | "patient";
const valid: Role[] = ["volunteer", "provider", "donor", "patient"];

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  const defaultRole: Role =
    role && valid.includes(role as Role) ? (role as Role) : "volunteer";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Join", url: "/join" },
        ]}
      />
      <PageHero
        eyebrow="Join free"
        title="Become part of a worldwide community of care"
        description="Whether you want to give help or get it, your free account takes just minutes. Everyone is welcome — from anywhere in the world."
      />
      <Section>
        <JoinForm defaultRole={defaultRole} />
      </Section>
    </>
  );
}
