import Link from "next/link";
import { Logo } from "./Logo";
import { footerNav, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-brand-100 bg-brand-950 text-brand-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <div className="rounded-xl bg-white/95 p-2 inline-block">
            <Logo />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            A 501(c)(3) nonprofit healthcare marketplace connecting patients with
            volunteer care providers and generous donors — in the USA, Pakistan, and
            around the world.
          </p>
          <p className="mt-4 text-sm text-brand-300">{siteConfig.email}</p>
          <p className="mt-1 text-sm text-brand-300">{siteConfig.location.display}</p>
        </div>

        {footerNav.map((col) => (
          <div key={col.heading}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-brand-200 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved. A registered
            nonprofit organization.
          </p>
          <p className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </p>
        </div>
        <div className="container-page pb-6">
          <p className="text-[11px] leading-relaxed text-brand-400">
            MyClinic Foundation does not provide emergency services. If you or
            someone else is experiencing a medical emergency, call your local
            emergency number immediately. Information on this site is not a
            substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
