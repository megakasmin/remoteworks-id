"use client";

import { useLanguage } from "@/components/language/LanguageContext";
import { aboutContent } from "@/components/content/about";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = aboutContent[language].about;

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 space-y-6">
      <h1 className="text-3xl font-semibold">{t.title}</h1>

      {t.description.map((paragraph, i) => (
        <p
          key={i}
          className="text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </main>
  );
}
