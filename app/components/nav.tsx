"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavItems = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [isNavOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-nav text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">

        <button
          type="button"
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          aria-expanded={isNavOpen}
          className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 p-2 text-white hover:bg-white/10 sm:hidden"
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex h-5 w-6 flex-col justify-between">
            <span className={`block h-0.5 w-full bg-white transition ${isNavOpen ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-full bg-white transition ${isNavOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-white transition ${isNavOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>

        <nav className="hidden items-center gap-4 sm:flex">
          {NavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-lg font-medium text-white transition hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isNavOpen && (
        <nav className="space-y-2 border-t border-white/10 bg-nav px-4 pb-4 sm:hidden">
          {NavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-lg text-white hover:bg-white/10"
              onClick={() => setNavOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}


