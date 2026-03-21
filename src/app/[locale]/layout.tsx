import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import "../globals.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://lifetify.app"),
    alternates: {
      canonical: `https://lifetify.app/${locale}`,
      languages: {
        en: "https://lifetify.app/en",
        de: "https://lifetify.app/de",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://lifetify.app/${locale}`,
      siteName: "Lifetify",
      locale: locale === "de" ? "de_DE" : "en_US",
      images: [
        {
          url: "https://lifetify.app/og-image.png",
          width: 1200,
          height: 630,
          alt: "Lifetify — Your life, organized.",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://lifetify.app/og-image.png"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Lifetify",
              description:
                "Organize your finances, insurance, contracts, and more in one beautiful, secure app.",
              applicationCategory: "LifestyleApplication",
              operatingSystem: "iOS, Android",
              offers: [
                {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "EUR",
                  name: "Free",
                },
                {
                  "@type": "Offer",
                  price: "4.99",
                  priceCurrency: "EUR",
                  name: "Premium",
                },
              ],
              image: "https://lifetify.app/og-image.png",
              url: "https://lifetify.app",
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen min-w-[320px] font-body antialiased">
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
