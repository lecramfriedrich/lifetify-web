"use client";

import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: t("features") },
    { href: "#pricing", label: t("pricing") },
  ];

  return (
    <nav className="glass-strong fixed left-4 right-4 top-4 z-50 rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Logo />

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-xl px-4 py-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:bg-surface-dim hover:text-text-primary dark:text-text-dark-secondary dark:hover:bg-surface-dark-dim dark:hover:text-text-dark-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer rounded-xl p-2 text-text-primary dark:text-text-dark-primary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200/50 px-6 pb-4 pt-2 dark:border-white/10 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block cursor-pointer rounded-xl px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-dim dark:text-text-dark-secondary dark:hover:bg-surface-dark-dim"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 border-t border-gray-200/50 pt-2 dark:border-white/10">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
