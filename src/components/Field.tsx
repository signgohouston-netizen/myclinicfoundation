import type { ReactNode } from "react";
import { Icon } from "./Icon";

const inputBase =
  "w-full rounded-xl border border-brand-100 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200";

export function Label({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
      {children}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputBase} ${props.className ?? ""}`} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${inputBase} ${props.className ?? ""}`} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${inputBase} ${props.className ?? ""}`} />;
}

export function FormNotice() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
      <Icon name="shield-check" className="mt-0.5 h-5 w-5 flex-none" />
      <p>
        This is a secure demo form. Account creation, document upload and payments
        connect to the platform backend during launch. Your information is never
        shared without consent.
      </p>
    </div>
  );
}
