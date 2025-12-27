"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/components/language/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Jangan auto-hide di hero (top page)
      if (currentScrollY < 80) {
        setHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scroll down → hide
      if (currentScrollY > lastScrollY.current + 10) {
        setHidden(true);
      }

      // Scroll up → show
      if (currentScrollY < lastScrollY.current - 10) {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 z-50 w-full
        bg-white/90 dark:bg-black/80
        backdrop-blur
        border-b border-gray-200/50 dark:border-gray-800/50
        transition-transform duration-200 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/test8.png"
              alt="RemoteWorks ID"
              width={90}
              height={90}
              priority
            />
            <span className="font-semibold text-lg leading-none">
              RemoteWorks ID
            </span>
          </Link>

          {/* Navigation + Language */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/verify">
                {language === "en" ? "Verify" : "Verifikasi"}
              </Link>
              <Link href="/trust-and-safety">
                {language === "en"
                  ? "Trust & Safety"
                  : "Kepercayaan & Keamanan"}
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
