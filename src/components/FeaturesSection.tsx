"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import {
  Link2,
  WifiOff,
  Cloud,
  Paperclip,
  Wand2,
  Copy,
  Search,
  Languages,
  Moon,
  ShieldCheck,
} from "lucide-react";

const features = [
  { key: "smartLinks", icon: Link2 },
  { key: "offlineFirst", icon: WifiOff },
  { key: "cloudBackup", icon: Cloud },
  { key: "attachments", icon: Paperclip },
  { key: "autocomplete", icon: Wand2 },
  { key: "duplicates", icon: Copy },
  { key: "search", icon: Search },
  { key: "multilingual", icon: Languages },
  { key: "darkMode", icon: Moon },
  { key: "privacy", icon: ShieldCheck },
] as const;

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary dark:text-text-dark-primary sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary dark:text-text-dark-secondary">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => (
            <AnimatedSection key={feat.key} delay={i * 0.04} className="h-full">
              <div className="glass group h-full rounded-2xl p-6 text-center transition-all duration-200 hover:shadow-lg sm:text-left">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
                  <feat.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-text-primary dark:text-text-dark-primary">
                  {t(feat.key)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary dark:text-text-dark-secondary">
                  {t(`${feat.key}Desc`)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
