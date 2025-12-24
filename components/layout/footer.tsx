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
<footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[var(--background)]">
  <div className="max-w-6xl mx-auto px-6 py-4">

    <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs
      text-gray-500 dark:text-gray-400
    ">
      <span>© 2025 RemoteWorks ID</span>

      <div className="flex items-center gap-2">
<Link
  href="/privacy"
  className="hover:text-gray-900 dark:hover:text-gray-100 transition"
>
  Privacy Policy
</Link>
        <span>·</span>
<Link
  href="/terms"
  className="hover:text-gray-900 dark:hover:text-gray-100 transition"
>
  Terms of Service
</Link>

      </div>
    </div>

  </div>
</footer>

  );
}
