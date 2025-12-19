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
    <div className="flex gap-2 text-sm">
      <button
        onClick={() => onChange("en")}
        className={`px-3 py-1 rounded ${
          language === "en"
            ? "bg-black text-white"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onChange("id")}
        className={`px-3 py-1 rounded ${
          language === "id"
            ? "bg-black text-white"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        ID
      </button>
    </div>
  );
}
