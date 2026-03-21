import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
