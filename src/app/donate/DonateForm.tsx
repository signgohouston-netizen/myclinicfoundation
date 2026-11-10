"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";
import { Label, Input, Select } from "@/components/Field";
import { DemoForm } from "@/components/DemoForm";

const amounts = [25, 50, 100, 250, 500];

export function DonateForm() {
  const [amount, setAmount] = useState<number | "custom">(100);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");

  return (
    <div className="rounded-3xl border border-brand-100 bg-white p-7 sm:p-9">
      <DemoForm
        submitLabel="Continue to secure checkout"
        successTitle="Thank you for your generosity!"
        successBody="In the live site this continues to secure payment. Your gift helps a patient get the care they need."
      >
        {/* Frequency */}
        <div className="grid grid-cols-2 gap-2 rounded-full bg-brand-50 p-1">
          {(["once", "monthly"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              className={`rounded-full py-2 text-sm font-semibold capitalize transition ${
                frequency === f ? "bg-brand-500 text-white" : "text-brand-700"
              }`}
            >
              {f === "once" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>

        {/* Amounts */}
        <div>
          <Label htmlFor="amount">Choose an amount (USD)</Label>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAmount(a)}
                className={`rounded-xl border py-3 text-sm font-bold transition ${
                  amount === a
                    ? "border-brand-400 bg-brand-500 text-white"
                    : "border-brand-100 bg-white text-ink hover:border-brand-300"
                }`}
              >
                ${a}
              </button>
            ))}
          </div>
          {amount === "custom" ? (
            <Input
              id="amount"
              name="amount"
              type="number"
              min={1}
              placeholder="Enter amount"
              className="mt-2"
              autoFocus
            />
          ) : (
            <button
              type="button"
              onClick={() => setAmount("custom")}
              className="mt-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Enter a custom amount
            </button>
          )}
        </div>

        {/* Designation */}
        <div>
          <Label htmlFor="designation">Direct my gift to</Label>
          <Select id="designation" name="designation" defaultValue="general">
            <option value="general">Where it's needed most (general care fund)</option>
            <option>A doctor&apos;s fee</option>
            <option>Lab &amp; diagnostic tests</option>
            <option>Medicine &amp; prescriptions</option>
            <option>A hospital bill</option>
          </Select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="donorName">Your name</Label>
            <Input id="donorName" name="donorName" required placeholder="Full name" />
          </div>
          <div>
            <Label htmlFor="donorEmail">Email (for your receipt)</Label>
            <Input id="donorEmail" name="donorEmail" type="email" required placeholder="you@example.com" />
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
          <Icon name="shield-check" className="mt-0.5 h-5 w-5 flex-none" />
          <p>
            Secure payment processing (e.g. Stripe) connects at launch. We never store
            your card details. Donations to MyClinic Foundation support patient care.
          </p>
        </div>
      </DemoForm>
    </div>
  );
}
