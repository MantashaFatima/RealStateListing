"use client";

import { useState } from "react";
import Link from "next/link";

function Logo({ light = false, subtitle = false }: { light?: boolean; subtitle?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="4" fill="#3563e9" fillOpacity="0.1" />
        <path
          d="M16 8L8 15v9h6v-6h4v6h6v-9L16 8z"
          fill="#3563e9"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className={`text-[20px] font-bold tracking-tight ${light ? "text-white" : "text-[#3563e9]"}`}>
          REIS
        </span>
        {subtitle && (
          <span className={`mt-0.5 text-[11px] font-medium ${light ? "text-white/80" : "text-[#64748b]"}`}>
            Real Estate
          </span>
        )}
      </div>
    </Link>
  );
}

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "#" },
  { label: "OUR AGENTS", href: "#" },
  { label: "PROPERTIES", href: "/properties" },
  { label: "GALLERY", href: "#" },
  { label: "BLOG", href: "#" },
  { label: "CONTACT US", href: "#" },
];

const CATEGORIES = [
  { label: "Apartment", href: "#" },
  { label: "Villa", href: "#" },
  { label: "Office", href: "#" },
  { label: "Commercial", href: "#" },
];

export default function Header({
  light = false,
  activePage,
  showSearch = false,
  subtitle = false,
}: {
  light?: boolean;
  activePage?: string;
  showSearch?: boolean;
  subtitle?: boolean;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1e293b]">
      <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4 py-4">
        <Logo light={true} subtitle={subtitle} />

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activePage === link.label;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide ${
                  isActive ? "text-[#3563e9]" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="lg:hidden flex flex-col items-center justify-center gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-[#1e293b]">
          <div className="mx-auto max-w-[1170px] px-4 py-4">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => {
                const isActive = activePage === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-[14px] font-medium tracking-wide ${
                      isActive ? "text-[#3563e9]" : "text-white/90"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="text-[12px] font-medium text-white/60 block mb-3">
                Categories:
              </span>
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.label}
                    href={category.href}
                    className="text-[12px] font-medium text-white/80 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}

      <div className="mx-auto hidden max-w-[1170px] items-center gap-6 border-t border-white/10 px-4 py-3 lg:flex">
        <span className="text-[12px] font-medium text-white/60">Categories:</span>
        {CATEGORIES.map((category) => (
          <Link
            key={category.label}
            href={category.href}
            className="text-[12px] font-medium text-white/80 hover:text-white transition-colors"
          >
            {category.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export { Logo, NAV_LINKS };
