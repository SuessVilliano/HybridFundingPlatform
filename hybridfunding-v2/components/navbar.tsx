"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteCopy } from "@/data/site-copy";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { nav, brand } = siteCopy;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-bold text-white text-sm">
              HF
            </div>
            <span className="text-lg font-semibold text-foreground">
              {brand.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-foreground bg-border/50"
                    : "text-muted hover:text-foreground hover:bg-border/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={nav.loginHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-3 py-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              Login
            </a>
            <Link
              href={nav.ctaHref}
              className="ml-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              {nav.ctaLabel}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-border py-4 space-y-1">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-foreground bg-border/50"
                    : "text-muted hover:text-foreground hover:bg-border/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={nav.loginHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              Login
            </a>
            <Link
              href={nav.ctaHref}
              onClick={() => setMobileOpen(false)}
              className="block mx-3 mt-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white text-center transition-colors hover:bg-accent-hover"
            >
              {nav.ctaLabel}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
