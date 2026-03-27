"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import { Users, Home, Car, Smartphone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const useCases = [
  { key: "familyTree", icon: Users, color: "bg-pastel-pink", screenshot: "/use-cases/family-tree.jpg" },
  { key: "rental", icon: Home, color: "bg-pastel-blue", screenshot: "/use-cases/rental.jpg" },
  { key: "car", icon: Car, color: "bg-pastel-green", screenshot: "/use-cases/car.jpg" },
] as const;

function UseCasePhone({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="glass-strong relative h-[480px] w-[240px] overflow-hidden rounded-[2.5rem] p-2.5 shadow-xl shadow-primary/10 sm:h-[540px] sm:w-[270px]">
      <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
        {failed ? (
          <div className="flex h-full w-full flex-col items-center justify-center bg-surface-dim dark:bg-surface-dark-dim">
            <Smartphone className="mb-3 h-10 w-10 text-text-muted" />
            <p className="text-sm font-medium text-text-muted">Screenshot</p>
            <p className="mt-1 text-xs text-text-muted/60">Coming soon</p>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}

export function UseCasesSection() {
  const t = useTranslations("useCases");

  return (
    <section className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection className="mb-16 text-center">
          <h1 className="font-heading text-3xl font-bold text-text-primary dark:text-text-dark-primary sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary dark:text-text-dark-secondary">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <div className="flex flex-col gap-20">
          {useCases.map((useCase, i) => (
            <AnimatedSection key={useCase.key} delay={i * 0.1}>
              <div
                className={`flex flex-col items-center gap-10 lg:gap-16 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Screenshot */}
                <div className="flex flex-1 justify-center">
                  <UseCasePhone
                    src={useCase.screenshot}
                    alt={t(`${useCase.key}.screenshotAlt`)}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${useCase.color}/20`}
                  >
                    <useCase.icon className={`h-6 w-6 text-text-primary dark:text-text-dark-primary`} />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-text-primary dark:text-text-dark-primary sm:text-3xl">
                    {t(`${useCase.key}.title`)}
                  </h2>
                  <p className="mt-4 max-w-lg text-text-secondary dark:text-text-dark-secondary lg:mx-0">
                    {t(`${useCase.key}.description`)}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
