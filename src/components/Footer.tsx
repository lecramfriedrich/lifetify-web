import { useTranslations } from "next-intl";
import { Logo } from "./Logo";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-gray-200/50 bg-white/50 dark:border-white/10 dark:bg-surface-dark-dim/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="space-y-3">
            <Logo />
            <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
              {t("tagline")}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
            <Link
              href="/use-cases"
              className="cursor-pointer text-text-secondary transition-colors hover:text-text-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary"
            >
              {t("useCases")}
            </Link>
            <Link
              href="/privacy"
              className="cursor-pointer text-text-secondary transition-colors hover:text-text-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms"
              className="cursor-pointer text-text-secondary transition-colors hover:text-text-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary"
            >
              {t("terms")}
            </Link>
            <Link
              href="/support"
              className="cursor-pointer text-text-secondary transition-colors hover:text-text-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary"
            >
              {t("support")}
            </Link>
            <Link
              href="/delete-account"
              className="cursor-pointer text-text-secondary transition-colors hover:text-text-primary dark:text-text-dark-secondary dark:hover:text-text-dark-primary"
            >
              {t("deleteAccount")}
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-gray-200/50 pt-8 text-xs text-text-muted dark:border-white/10 sm:flex-row">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <p>{t("madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
