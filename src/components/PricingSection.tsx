"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import { Check, Sparkles } from "lucide-react";

export function PricingSection() {
  const t = useTranslations("pricing");

  const freeFeatures = t.raw("freeFeatures") as string[];
  const premiumFeatures = t.raw("premiumFeatures") as string[];

  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary dark:text-text-dark-primary sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary dark:text-text-dark-secondary">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Free */}
          <AnimatedSection>
            <div className="glass flex h-full flex-col rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold text-text-primary dark:text-text-dark-primary">
                {t("free")}
              </h3>
              <p className="mt-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                {t("freePriceLabel")}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {freeFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-pastel-green" />
                    <span className="text-sm text-text-primary dark:text-text-dark-primary">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-8 block cursor-pointer rounded-xl border border-gray-200 px-6 py-3 text-center text-sm font-semibold text-text-primary transition-all duration-200 hover:bg-surface-dim dark:border-white/10 dark:text-text-dark-primary dark:hover:bg-surface-dark-dim"
              >
                {t("cta")}
              </a>
            </div>
          </AnimatedSection>

          {/* Premium */}
          <AnimatedSection delay={0.1}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-xl shadow-primary/20">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

              <div className="flex items-center gap-2">
                <h3 className="font-heading text-2xl font-bold">{t("premium")}</h3>
                <Sparkles className="h-5 w-5 text-pastel-yellow" />
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold">
                  {t("monthlyPrice")}
                </span>
                <span className="text-sm opacity-80">/ {t("monthly")}</span>
              </div>
              <p className="mt-1 text-sm opacity-80">
                {t("yearlyPrice")} / {t("yearly")} · {t("yearlySaving")}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {premiumFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-pastel-yellow" />
                    <span className="text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="mt-8 block cursor-pointer rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-primary transition-all duration-200 hover:bg-white/90"
              >
                {t("cta")}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
