"use client";

import { useState } from "react";
import LanguageToggle from "@/components/LanguageToggle";

export default function TrustSafetyClient({
  en,
  id,
}: {
  en: React.ReactNode;
  id: React.ReactNode;
}) {
  const [lang, setLang] = useState<"en" | "id">("en");

  return (
    <>
      <div className="flex justify-end mb-8">
        <LanguageToggle language={lang} onChange={setLang} />
      </div>

      {lang === "en" ? en : id}
    </>
  );
}
