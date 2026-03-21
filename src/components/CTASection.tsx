"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import { AppStoreBadges } from "./AppStoreBadges";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-pastel-blue/20 to-pastel-purple/20 p-12 text-center dark:from-primary/10 dark:via-pastel-blue/10 dark:to-pastel-purple/10 sm:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-pastel-pink/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-pastel-blue/30 blur-3xl" />

            <h2 className="font-heading text-3xl font-bold text-text-primary dark:text-text-dark-primary sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-text-secondary dark:text-text-dark-secondary">
              {t("subtitle")}
            </p>

            <div className="mt-10 flex justify-center">
              <AppStoreBadges />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
