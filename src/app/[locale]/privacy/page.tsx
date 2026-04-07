import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  const sections = [
    "controller",
    "dataCollection",
    "localStorage",
    "cloudBackup",
    "authentication",
    "analytics",
    "crashReporting",
    "thirdParty",
    "cookies",
    "dataRetention",
    "rights",
    "children",
    "changes",
    "contact",
  ] as const;

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-3xl font-bold text-text-primary dark:text-text-dark-primary sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-text-muted">{t("lastUpdated")}</p>
        <p className="mt-6 text-text-secondary dark:text-text-dark-secondary">
          {t("intro")}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((key) => (
            <section key={key}>
              <h2 className="font-heading text-xl font-semibold text-text-primary dark:text-text-dark-primary">
                {t(`sections.${key}.title`)}
              </h2>
              <p className="mt-3 leading-relaxed text-text-secondary dark:text-text-dark-secondary">
                {t(`sections.${key}.content`)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
