"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/language/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const darkPages = ["/"];
  const isDark = true;

  return (
<header
  className="
    sticky top-0 z-50
    bg-white/80 dark:bg-black/60
    backdrop-blur
    border-b border-gray-200/50 dark:border-gray-800/50
  "
>
  <div className="mx-auto max-w-7xl px-6">
    <div className="flex items-center justify-between h-16">
      
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/test4.png"
          alt="RemoteWorks ID"
          width={80}
          height={80}
          priority
        />
        <span className="font-semibold text-lg leading-none">
          RemoteWorks ID
        </span>
      </Link>

          {/* Menu + Language */}
          <div className="flex items-center gap-6">
            <nav
              className="flex items-center gap-6 text-sm font-medium text-white">
              <Link href="/verify">
                {language === "en" ? "Verify" : "Verifikasi"}
              </Link>
              <Link href="/trust-and-safety">
                {language === "en" ? "Trust & Safety" : "Kepercayaan & Keamanan"}
              </Link>
                            <Link href="/about">
                {language === "en" ? "About Us" : "Tentang Kami"}
              </Link>
              <Link href="/contact">
                {language === "en" ? "Contact Us" : "Kontak Kami"}
              </Link>
            </nav>

            <LanguageToggle
              language={language}
              onChange={setLanguage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
