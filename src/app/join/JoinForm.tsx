"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { Label, Input, Select, Textarea, FormNotice } from "@/components/Field";
import { DemoForm } from "@/components/DemoForm";

type Role = "volunteer" | "provider" | "donor" | "patient";

const roles: { key: Role; label: string; icon: "users" | "stethoscope" | "heart" | "heartpulse"; desc: string }[] = [
  { key: "volunteer", label: "Volunteer", icon: "users", desc: "Give your time or services" },
  { key: "provider", label: "Provider", icon: "stethoscope", desc: "Doctor, lab, pharmacy, hospital, nurse" },
  { key: "donor", label: "Donor", icon: "heart", desc: "Help pay patients' bills" },
  { key: "patient", label: "Seeking help", icon: "heartpulse", desc: "I need care or financial help" },
];

export function JoinForm({ defaultRole = "volunteer" }: { defaultRole?: Role }) {
  const [role, setRole] = useState<Role>(defaultRole);

  return (
    <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
      {/* Role selector */}
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-700">
          I want to join as
        </h2>
        <div className="mt-4 space-y-3">
          {roles.map((r) => {
            const active = role === r.key;
            return (
              <button
                key={r.key}
                type="button"
                onClick={() => setRole(r.key)}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${
                  active
                    ? "border-brand-400 bg-brand-50 ring-2 ring-brand-200"
                    : "border-brand-100 bg-white hover:border-brand-300"
                }`}
              >
                <div
                  className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${
                    active ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"
                  }`}
                >
                  <Icon name={r.icon} className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-ink">{r.label}</p>
                  <p className="text-sm text-ink-soft">{r.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form */}
      <div className="rounded-3xl border border-brand-100 bg-white p-7 sm:p-9">
        <DemoForm
          submitLabel="Create my free account"
          successTitle="Welcome to MyClinic Foundation!"
          successBody="Your account request has been received. We'll verify your details and be in touch shortly."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" name="firstName" required placeholder="First name" />
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" name="lastName" required placeholder="Last name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input id="country" name="country" required placeholder="United States, Pakistan, …" />
            </div>
          </div>

          {role === "provider" && (
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="orgType">Provider type</Label>
                <Select id="orgType" name="orgType" defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Doctor / Physician</option>
                  <option>Pharmacy</option>
                  <option>Laboratory</option>
                  <option>Emergency room</option>
                  <option>Hospital</option>
                  <option>Trauma center</option>
                  <option>Private nurse</option>
                  <option>Private assistant</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="credentials">License / credentials</Label>
                <Input id="credentials" name="credentials" placeholder="License no. or registration" />
              </div>
            </div>
          )}

          {role === "patient" && (
            <>
              <div>
                <Label htmlFor="condition">Describe your condition</Label>
                <Textarea id="condition" name="condition" rows={4} placeholder="Tell us what you're experiencing and what help you need." />
              </div>
              <div className="rounded-xl border border-dashed border-brand-300 bg-brand-50/60 p-5 text-center">
                <Icon name="upload" className="mx-auto h-7 w-7 text-brand-500" />
                <p className="mt-2 text-sm font-semibold text-ink">Upload medical reports</p>
                <p className="text-xs text-ink-soft">
                  Securely attach diagnoses, prescriptions and lab reports (PDF or image).
                </p>
                <input type="file" multiple className="mt-3 w-full text-xs text-ink-soft file:mr-3 file:rounded-full file:border-0 file:bg-brand-500 file:px-4 file:py-2 file:text-white" />
              </div>
            </>
          )}

          {role === "donor" && (
            <div>
              <Label htmlFor="interest">How would you like to help?</Label>
              <Textarea id="interest" name="interest" rows={3} placeholder="E.g. sponsor doctor's fees, lab tests, medicine, or hospital bills." />
            </div>
          )}

          {role === "volunteer" && (
            <div>
              <Label htmlFor="skills">What can you offer?</Label>
              <Textarea id="skills" name="skills" rows={3} placeholder="Your skills, availability and how you'd like to volunteer." />
            </div>
          )}

          <label className="flex items-start gap-3 text-sm text-ink-soft">
            <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-brand-200 text-brand-600" />
            <span>
              I agree to the <a href="/terms" className="font-semibold text-brand-600">Terms</a> and{" "}
              <a href="/privacy" className="font-semibold text-brand-600">Privacy Policy</a>, and I consent to
              MyClinic Foundation contacting me about my request.
            </span>
          </label>

          <FormNotice />
        </DemoForm>
      </div>
    </div>
  );
}
