"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AppStoreBadges } from "./AppStoreBadges";
import { Smartphone } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pt-40">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pastel-blue/15 blur-3xl dark:bg-pastel-blue/20" />
        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-pastel-purple/10 blur-3xl dark:bg-pastel-purple/15" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-pastel-pink/10 blur-3xl dark:bg-pastel-pink/15" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary dark:bg-primary/30 dark:text-primary-light">
              {t("tagline")}
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight text-text-primary dark:text-text-dark-primary sm:text-5xl md:text-6xl">
              {t("headline").split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {i === 1 ? (
                    <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                      {line}
                    </span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-lg text-text-secondary dark:text-text-dark-secondary lg:mx-0">
              {t("subtitle")}
            </p>

            <div className="mt-10">
              <AppStoreBadges />
            </div>
          </motion.div>

          {/* App mockup placeholder */}
          <motion.div
            className="flex flex-1 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="glass-strong relative h-[580px] w-[280px] overflow-hidden rounded-[3rem] p-3 shadow-2xl shadow-primary/10 sm:h-[640px] sm:w-[310px]">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[2.25rem] bg-surface-dim dark:bg-surface-dark-dim">
                  <Smartphone className="mb-4 h-12 w-12 text-text-muted" />
                  <p className="text-sm font-medium text-text-muted">App Screenshot</p>
                  <p className="mt-1 text-xs text-text-muted/60">280 x 580</p>
                </div>
              </div>

              {/* Floating category badges */}
              <motion.div
                className="glass absolute -left-12 top-8 rounded-2xl px-4 py-2.5 shadow-lg sm:-left-16"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pastel-blue" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-dark-primary">Bank</span>
                </div>
              </motion.div>

              <motion.div
                className="glass absolute -right-10 top-16 rounded-2xl px-4 py-2.5 shadow-lg sm:-right-14"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pastel-green" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-dark-primary">Insurance</span>
                </div>
              </motion.div>

              <motion.div
                className="glass absolute -left-14 top-36 rounded-2xl px-4 py-2.5 shadow-lg sm:-left-20"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pastel-pink" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-dark-primary">Contracts</span>
                </div>
              </motion.div>

              <motion.div
                className="glass absolute -right-12 top-52 rounded-2xl px-4 py-2.5 shadow-lg sm:-right-16"
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pastel-yellow" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-dark-primary">Real Estate</span>
                </div>
              </motion.div>

              <motion.div
                className="glass absolute -left-10 top-64 rounded-2xl px-4 py-2.5 shadow-lg sm:-left-14"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pastel-purple" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-dark-primary">Contacts</span>
                </div>
              </motion.div>

              <motion.div
                className="glass absolute -right-14 top-80 rounded-2xl px-4 py-2.5 shadow-lg sm:-right-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pastel-orange" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-dark-primary">Investments</span>
                </div>
              </motion.div>

              <motion.div
                className="glass absolute -left-12 bottom-28 rounded-2xl px-4 py-2.5 shadow-lg sm:-left-16"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pastel-teal" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-dark-primary">Cars</span>
                </div>
              </motion.div>

              <motion.div
                className="glass absolute -right-10 bottom-24 rounded-2xl px-4 py-2.5 shadow-lg sm:-right-14"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 1.7 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pastel-red" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-dark-primary">Companies</span>
                </div>
              </motion.div>

              <motion.div
                className="glass absolute -left-10 bottom-8 rounded-2xl px-4 py-2.5 shadow-lg sm:-left-14"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 2.0 }}
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pastel-indigo" />
                  <span className="text-sm font-medium text-text-primary dark:text-text-dark-primary">Personal</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
