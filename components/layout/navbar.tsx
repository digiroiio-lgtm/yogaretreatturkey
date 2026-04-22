"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f9f6f1]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-sm font-semibold tracking-[0.22em] uppercase text-stone-900">
          Yoga Retreats Turkey
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition hover:text-stone-900 ${
                pathname === link.href || pathname.startsWith(`${link.href}/`)
                  ? "text-stone-900 font-medium"
                  : "text-stone-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://bookretreats.com/?a=fwfncwdpylkdjfqemjuf"
            target="_blank"
            rel="nofollow sponsored"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Book Retreat
          </a>
        </nav>

        <button
          aria-label="Toggle navigation"
          className="rounded-full border border-stone-200 p-2 text-stone-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-stone-200 bg-[#f9f6f1] px-4 py-5 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm text-stone-700 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://bookretreats.com/?a=fwfncwdpylkdjfqemjuf"
              target="_blank"
              rel="nofollow sponsored"
              className="mt-2 rounded-full bg-stone-900 px-4 py-2 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Book a Retreat
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
