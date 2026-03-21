"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "de" : "en";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={switchLocale}
      className="cursor-pointer flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-surface-dim dark:text-text-dark-primary dark:hover:bg-surface-dark-dim"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{locale === "en" ? "DE" : "EN"}</span>
    </button>
  );
}
