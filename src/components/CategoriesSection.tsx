"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import {
  Landmark,
  Shield,
  FileText,
  Home,
  Users,
  TrendingUp,
  Car,
  Building2,
  Fingerprint,
} from "lucide-react";

const categories = [
  { key: "bankAccounts", icon: Landmark, color: "bg-pastel-blue" },
  { key: "insurance", icon: Shield, color: "bg-pastel-green" },
  { key: "contracts", icon: FileText, color: "bg-pastel-pink" },
  { key: "realEstate", icon: Home, color: "bg-pastel-yellow" },
  { key: "contacts", icon: Users, color: "bg-pastel-purple" },
  { key: "investments", icon: TrendingUp, color: "bg-pastel-orange" },
  { key: "cars", icon: Car, color: "bg-pastel-teal" },
  { key: "companies", icon: Building2, color: "bg-pastel-red" },
  { key: "personal", icon: Fingerprint, color: "bg-pastel-indigo" },
] as const;

export function CategoriesSection() {
  const t = useTranslations("categories");

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary dark:text-text-dark-primary sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary dark:text-text-dark-secondary">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.key} delay={i * 0.05} className="h-full">
              <div className="glass group h-full cursor-pointer rounded-2xl p-6 text-center transition-all duration-200 hover:shadow-lg sm:text-left">
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${cat.color}`}
                >
                  <cat.icon className="h-6 w-6 text-text-primary/70" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-primary dark:text-text-dark-primary">
                  {t(cat.key)}
                </h3>
                <p className="mt-1 text-sm text-text-secondary dark:text-text-dark-secondary">
                  {t(`${cat.key}Desc`)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
