import Link from "next/link";
import type { ComponentProps } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:opacity-60";

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-brand-500 text-white hover:bg-brand-600 shadow-sm shadow-brand-500/30",
  secondary: "bg-brand-50 text-brand-700 hover:bg-brand-100 border border-brand-100",
  ghost: "text-brand-700 hover:bg-brand-50",
  white: "bg-white text-brand-700 hover:bg-brand-50 shadow-sm",
};

type Props = {
  variant?: Variant;
  size?: keyof typeof sizes;
  withArrow?: boolean;
} & ComponentProps<typeof Link>;

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...props
}: Props) {
  return (
    <Link
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {withArrow && <Icon name="arrow-right" className="h-4 w-4" />}
    </Link>
  );
}
