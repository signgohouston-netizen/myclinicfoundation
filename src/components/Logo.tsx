import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Logo({
  className = "",
  withText = true,
  size = 40,
}: {
  className?: string;
  withText?: boolean;
  size?: number;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${siteConfig.name} — home`}
    >
      <Image
        src="/logo.avif"
        alt={`${siteConfig.name} logo`}
        width={size}
        height={size}
        priority
        className="rounded-full"
      />
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-extrabold tracking-tight text-brand-700">
            MyClinic
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            Foundation
          </span>
        </span>
      )}
    </Link>
  );
}
