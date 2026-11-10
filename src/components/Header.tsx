"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { mainNav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-700 bg-brand-50"
                    : "text-ink-soft hover:text-brand-700 hover:bg-brand-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/donate" variant="ghost" size="md">
            Donate
          </Button>
          <Button href="/join" variant="primary" size="md">
            Join free
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-700 hover:bg-brand-50 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-100 bg-white lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-brand-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2">
              <Button href="/donate" variant="secondary" size="md" className="flex-1" onClick={() => setOpen(false)}>
                Donate
              </Button>
              <Button href="/join" variant="primary" size="md" className="flex-1" onClick={() => setOpen(false)}>
                Join free
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
