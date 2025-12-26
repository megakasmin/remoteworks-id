"use client";

import { useLanguage } from "@/components/language/LanguageContext";

export default function TrustSafetyClient({
  content,
}: {
  content: {
    en: React.ReactNode;
    id: React.ReactNode;
  };
}) {
  const { language } = useLanguage();

  return <>{content[language]}</>;
}
