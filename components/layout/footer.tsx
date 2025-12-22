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

      copyright: `© ${year} RemoteWorks ID`,
    },

    id: {
      tagline: "Lowongan Remote & Hybrid yang Terpercaya",
      description:
        "RemoteWorks ID adalah platform lowongan kerja terkurasi dengan fokus pada kepercayaan, kualitas, dan transparansi.",

legal: {
privacy: "Kebijakan Privasi",
terms: "Syarat dan Ketentuan",
},

      copyright: `© ${year} RemoteWorks ID`,
    },
  };

  const t = content[language];

  return (
    <footer className="border-t mt-10 bg-gray">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-center gap-10">

        {/* LEFT: BRAND */}
        <div className="max-w-md space-y-2">
          <h3 className="text-lg font-semibold text-gray-600 text-center">
            RemoteWorks ID
          </h3>
          <p className="text-sm text-gray-500 font-medium text-center">
            {t.tagline}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed text-center">
            {t.description}
          </p>
        </div>

      </div>

 {/* BOTTOM LEGAL */}
      <div className="border-t py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">

          <span>{t.copyright}</span>

          <div className="flex items-center gap-2">
            <Link
              href="/privacy"
              className="hover:text-black transition"
            >
              {t.legal.privacy}
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-black transition"
            >
              {t.legal.terms}
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
