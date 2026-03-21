import Image from "next/image";
import { Link } from "@/i18n/navigation";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 cursor-pointer">
      <Image
        src="/logo.svg"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0"
      />
      <Image
        src="/lifetify_wordmark.svg"
        alt="Lifetify"
        width={100}
        height={24}
        className="hidden h-5 w-auto translate-y-0.5 dark:block"
      />
      <Image
        src="/lifetify_wordmark_black.svg"
        alt="Lifetify"
        width={100}
        height={24}
        className="block h-5 w-auto translate-y-0.5 dark:hidden"
      />
    </Link>
  );
}
