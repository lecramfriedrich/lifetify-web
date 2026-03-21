import { useTranslations } from "next-intl";
import { Mail, AlertTriangle, Smartphone } from "lucide-react";

export default function DeleteAccountPage() {
  const t = useTranslations("deleteAccount");

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
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pastel-red text-text-primary/70">
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

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-pastel-yellow/30 p-4 text-left text-sm dark:bg-pastel-yellow/10">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-text-secondary" />
            <span className="text-text-secondary dark:text-text-dark-secondary">
              {t("note")}
            </span>
          </div>

          <div className="mt-4 flex items-start gap-3 rounded-xl bg-surface-dim p-4 text-left text-sm dark:bg-surface-dark-dim">
            <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-text-muted" />
            <span className="text-text-secondary dark:text-text-dark-secondary">
              {t("localData")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
