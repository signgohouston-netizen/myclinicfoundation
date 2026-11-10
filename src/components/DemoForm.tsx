"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "./Icon";

export function DemoForm({
  children,
  submitLabel,
  successTitle = "Thank you!",
  successBody = "We've received your submission. Our team will be in touch soon.",
}: {
  children: ReactNode;
  submitLabel: string;
  successTitle?: string;
  successBody?: string;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white">
          <Icon name="check" className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink">{successTitle}</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">{successBody}</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-5"
    >
      {children}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto"
      >
        {submitLabel}
        <Icon name="arrow-right" className="h-4 w-4" />
      </button>
    </form>
  );
}
