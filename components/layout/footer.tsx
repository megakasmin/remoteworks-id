"use client";

import { useLanguage } from "@/components/language/LanguageContext";
import Link from "next/link";

export default function Footer() {
  const { language } = useLanguage();
  const year = new Date().getFullYear();

  const content = {
    en: {
      tagline: "Curated Remote & Hybrid Jobs You Can Trust",
      description:
        "RemoteWorks ID is a curated job platform focused on trust, quality, and transparency for remote and hybrid roles.",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
      copyright: `© ${year} RemoteWorks ID. All rights reserved.`,
    },
    id: {
      tagline: "Lowongan Remote & Hybrid yang Terpercaya",
      description:
        "RemoteWorks ID adalah platform lowongan kerja terkurasi dengan fokus pada kepercayaan, kualitas, dan transparansi.",
      legal: {
        privacy: "Kebijakan Privasi",
        terms: "Syarat & Ketentuan",
      },
      copyright: `© ${year} RemoteWorks ID. Hak cipta dilindungi.`,
    },
  };

  const t = content[language];

  return (
    <footer className="border-t bg-white dark:bg-black">
      {/* TOP */}
      <div className="max-w-6xl mx-auto px-6 py-10 text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          RemoteWorks ID
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {t.tagline}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
          {t.description}
        </p>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span>{t.copyright}</span>

          <div className="flex items-center gap-2">
            <Link
              href="/privacy"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition"
            >
              {t.legal.privacy}
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-gray-900 dark:hover:text-gray-100 transition"
            >
              {t.legal.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
