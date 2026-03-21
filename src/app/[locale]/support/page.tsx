import { useTranslations } from "next-intl";
import { Mail, Clock } from "lucide-react";

export default function SupportPage() {
  const t = useTranslations("support");

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-3xl font-bold text-text-primary dark:text-text-dark-primary sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-text-secondary dark:text-text-dark-secondary">
          {t("subtitle")}
        </p>
        <p className="mt-6 text-text-secondary dark:text-text-dark-secondary">
          {t("description")}
        </p>

        <div className="glass mx-auto mt-12 max-w-md rounded-2xl p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary dark:bg-primary/20">
              <Mail className="h-7 w-7" />
            </div>
            <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
              {t("emailLabel")}
            </p>
            <a
              href={`mailto:${t("email")}`}
              className="cursor-pointer font-heading text-xl font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              {t("email")}
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-muted">
            <Clock className="h-4 w-4" />
            <span>{t("responseTime")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
