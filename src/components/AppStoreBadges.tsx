import { useTranslations } from "next-intl";
import { Apple } from "lucide-react";

function PlayStoreIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.395 12l2.303-2.492zM5.864 3.658L16.8 9.99l-2.302 2.302L5.864 3.658z" />
    </svg>
  );
}

export function AppStoreBadges() {
  const t = useTranslations("cta");

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
      <a
        href="#"
        className="glass cursor-pointer flex w-52 items-center justify-center gap-3 rounded-2xl px-6 py-3.5 text-text-primary transition-all duration-200 hover:shadow-lg dark:text-text-dark-primary"
      >
        <Apple className="h-7 w-7" />
        <div className="text-left">
          <div className="text-[10px] font-medium uppercase tracking-wide opacity-70">
            Download on the
          </div>
          <div className="font-heading text-lg font-semibold leading-tight">
            App Store
          </div>
        </div>
      </a>

      <a
        href="#"
        className="glass cursor-pointer flex w-52 items-center justify-center gap-3 rounded-2xl px-6 py-3.5 text-text-primary transition-all duration-200 hover:shadow-lg dark:text-text-dark-primary"
      >
        <PlayStoreIcon className="h-6 w-6" />
        <div className="text-left">
          <div className="text-[10px] font-medium uppercase tracking-wide opacity-70">
            Get it on
          </div>
          <div className="font-heading text-lg font-semibold leading-tight">
            Google Play
          </div>
        </div>
      </a>
    </div>
  );
}
