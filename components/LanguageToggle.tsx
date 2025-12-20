"use client";

type Language = "en" | "id";

export default function LanguageToggle({
  language,
  onChange,
}: {
  language: Language;
  onChange: (lang: Language) => void;
}) {
  return (
    <div className="flex rounded-lg border overflow-hidden">
      <button
        onClick={() => onChange("en")}
        className={`px-3 py-1 text-sm ${
          language === "en"
            ? "bg-black text-white"
            : "bg-white text-gray-600"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onChange("id")}
        className={`px-3 py-1 text-sm ${
          language === "id"
            ? "bg-black text-white"
            : "bg-white text-gray-600"
        }`}
      >
        ID
      </button>
    </div>
  );
}
