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
  const isDark = darkPages.includes(pathname);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0">
            <Image
              src="/test3.png"
              alt="RemoteWorks ID"
              width={100}
              height={100}
              priority
            />
<span className="font-semibold text-xl leading-none -ml-0.5">
  RemoteWorks ID
</span>

          </Link>

          {/* Menu + Language */}
          <div className="flex items-center gap-6">
            <nav
              className={`flex items-center gap-6 text-sm font-medium ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              <Link href="/jobs">
                {language === "en" ? "Jobs" : "Lowongan"}
              </Link>
              <Link href="/employers/submit-job">
                {language === "en" ? "Post a Job" : "Pasang Lowongan"}
              </Link>
              <Link href="/verify">
                {language === "en" ? "Verify" : "Verifikasi"}
              </Link>
              <Link href="/trust-and-safety">
                {language === "en" ? "Trust & Safety" : "Kepercayaan & Keamanan"}
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
