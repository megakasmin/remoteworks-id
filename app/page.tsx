"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function HomePage() {
  const [lang, setLang] = useState<"en" | "id">("en");

  const isEN = lang === "en";

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-28">

      {/* LANGUAGE TOGGLE */}
      <div className="flex justify-end">
        <div className="flex gap-2 border rounded-full p-1 text-sm">
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-1 rounded-full ${
              isEN ? "bg-black text-white" : "text-gray-500"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("id")}
            className={`px-4 py-1 rounded-full ${
              !isEN ? "bg-black text-white" : "text-gray-500"
            }`}
          >
            ID
          </button>
        </div>
      </div>

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {isEN
            ? "Curated Remote & Hybrid Jobs You Can Trust"
            : "Lowongan Remote & Hybrid Terkurasi yang Bisa Dipercaya"}
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          {isEN
            ? "Discover handpicked remote and hybrid opportunities in tech, data, and digital roles — reviewed for legitimacy, clarity, and quality."
            : "Temukan lowongan remote dan hybrid terkurasi di bidang tech, data, dan digital — ditinjau untuk memastikan kejelasan dan keamanan."}
        </p>

        <div className="flex justify-center gap-4">
          <Button href="/jobs">
            {isEN ? "Browse Jobs" : "Lihat Lowongan"}
          </Button>
          <Button href="/employers/submit-job" variant="secondary">
            {isEN ? "Submit a Job" : "Submit Lowongan"}
          </Button>
        </div>
      </section>

      {/* WHY */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            en: {
              title: "Curated, Not Crawled",
              desc: "Every job is reviewed by humans, not scraped by bots.",
            },
            id: {
              title: "Kurasi, Bukan Crawl",
              desc: "Setiap lowongan ditinjau manual, bukan hasil scraping bot.",
            },
          },
          {
            en: {
              title: "Trust & Safety First",
              desc: "We apply internal checks to reduce scams and low-quality listings.",
            },
            id: {
              title: "Keamanan Prioritas",
              desc: "Kami menerapkan pengecekan internal untuk mengurangi risiko scam.",
            },
          },
          {
            en: {
              title: "Clear Apply Flow",
              desc: "Apply directly on official employer websites.",
            },
            id: {
              title: "Alur Lamar Jelas",
              desc: "Lamaran langsung ke website resmi perusahaan.",
            },
          },
        ].map((item) => (
          <div key={item.en.title} className="border rounded-xl p-6 space-y-2">
            <h3 className="font-semibold text-lg">
              {isEN ? item.en.title : item.id.title}
            </h3>
            <p className="text-sm text-gray-600">
              {isEN ? item.en.desc : item.id.desc}
            </p>
          </div>
        ))}
      </section>

      {/* FOR JOB SEEKERS & EMPLOYERS */}
      <section className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div className="space-y-4 p-6 border rounded-xl">
          <h2 className="text-2xl font-semibold">
            {isEN ? "For Job Seekers" : "Untuk Pencari Kerja"}
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>{isEN ? "• No account required" : "• Tanpa perlu akun"}</li>
            <li>
              {isEN
                ? "• Direct application to employer sites"
                : "• Langsung ke website perusahaan"}
            </li>
            <li>
              {isEN
                ? "• Clear Remote / Hybrid labels"
                : "• Label Remote / Hybrid yang jelas"}
            </li>
          </ul>
        </div>

        <div className="space-y-4 p-6 border rounded-xl">
          <h2 className="text-2xl font-semibold">
            {isEN ? "For Employers" : "Untuk Perusahaan"}
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              {isEN
                ? "• Manual review for all job submissions"
                : "• Semua lowongan ditinjau manual"}
            </li>
            <li>
              {isEN
                ? "• Priority review options"
                : "• Opsi review prioritas"}
            </li>
            <li>
              {isEN
                ? "• Optional trust & visibility signals"
                : "• Opsi trust & visibilitas tambahan"}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
