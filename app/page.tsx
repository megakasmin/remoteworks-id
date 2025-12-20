"use client";

import { useState } from "react";
import Link from "next/link";

type Lang = "en" | "id";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");

  const content = {
    en: {
      heroTitle: "Curated Remote & Hybrid Jobs You Can Trust",
      heroDesc:
        "RemoteWorks ID connects job seekers with carefully reviewed remote and hybrid opportunities, while helping employers publish high-quality job listings with confidence.",

      seekerTitle: "For Job Seekers",
      seekerPoints: [
        "Manually reviewed job listings",
        "Remote & hybrid roles only",
        "Clear company information",
        "Reduced risk of scam postings",
      ],

      employerTitle: "For Employers",
      employerPoints: [
        "Submit curated job listings",
        "Internal trust & safety checks",
        "Optional priority review for faster approval",
        "Reach qualified remote-ready talent",
      ],

      ctaJobs: "Browse Jobs",
      ctaPost: "Post a Job",

      trustNote:
        "Every job listing is reviewed before being published. Priority review affects speed, not approval outcome.",
    },

    id: {
      heroTitle: "Lowongan Remote & Hybrid yang Dikurasi dan Terpercaya",
      heroDesc:
        "RemoteWorks ID membantu pencari kerja menemukan lowongan remote dan hybrid yang telah ditinjau, serta membantu perusahaan mempublikasikan lowongan berkualitas dengan aman.",

      seekerTitle: "Untuk Pencari Kerja",
      seekerPoints: [
        "Lowongan ditinjau secara manual",
        "Fokus remote & hybrid",
        "Informasi perusahaan lebih jelas",
        "Meminimalkan risiko lowongan palsu",
      ],

      employerTitle: "Untuk Perusahaan",
      employerPoints: [
        "Submit lowongan yang dikurasi",
        "Pemeriksaan trust & safety internal",
        "Opsi priority review untuk proses lebih cepat",
        "Menjangkau talenta yang siap kerja remote",
      ],

      ctaJobs: "Lihat Lowongan",
      ctaPost: "Pasang Lowongan",

      trustNote:
        "Setiap lowongan akan ditinjau sebelum dipublikasikan. Priority review hanya memengaruhi kecepatan, bukan hasil persetujuan.",
    },
  };

  const t = content[lang];

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      {/* Language Toggle */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 text-sm rounded-l border ${
            lang === "en" ? "bg-black text-white" : "bg-white"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("id")}
          className={`px-3 py-1 text-sm rounded-r border ${
            lang === "id" ? "bg-black text-white" : "bg-white"
          }`}
        >
          ID
        </button>
      </div>

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{t.heroTitle}</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          {t.heroDesc}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/jobs"
            className="px-8 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            {t.ctaJobs}
          </Link>

          <Link
            href="/employers/submit-job"
            className="px-8 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
          >
            {t.ctaPost}
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
<section className="mb-16">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
    <div className="border rounded-xl p-4">
      <p className="text-sm font-semibold mb-1">
        {lang === "en" ? "Curated Listings" : "Lowongan Terkurasi"}
      </p>
      <p className="text-xs text-gray-500">
        {lang === "en"
          ? "Every job is manually reviewed before publishing."
          : "Setiap lowongan ditinjau secara manual sebelum dipublikasikan."}
      </p>
    </div>

    <div className="border rounded-xl p-4">
      <p className="text-sm font-semibold mb-1">
        {lang === "en" ? "Trust & Safety Checks" : "Pemeriksaan Trust & Safety"}
      </p>
      <p className="text-xs text-gray-500">
        {lang === "en"
          ? "We help reduce misleading and fraudulent postings."
          : "Membantu mengurangi lowongan menyesatkan atau palsu."}
      </p>
    </div>

    <div className="border rounded-xl p-4">
      <p className="text-sm font-semibold mb-1">
        {lang === "en" ? "Remote-First Focus" : "Fokus Remote & Hybrid"}
      </p>
      <p className="text-xs text-gray-500">
        {lang === "en"
          ? "Only remote and hybrid opportunities are featured."
          : "Hanya lowongan remote dan hybrid yang ditampilkan."}
      </p>
    </div>
  </div>
</section>

      {/* Value Sections */}
      <section className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            {t.seekerTitle}
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            {t.seekerPoints.map((point, idx) => (
              <li key={idx}>• {point}</li>
            ))}
          </ul>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            {t.employerTitle}
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            {t.employerPoints.map((point, idx) => (
              <li key={idx}>• {point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Trust Note */}
      <section className="text-center">
        <p className="text-xs text-gray-500 max-w-3xl mx-auto">
          {t.trustNote}
        </p>
      </section>
    </main>
  );
}
