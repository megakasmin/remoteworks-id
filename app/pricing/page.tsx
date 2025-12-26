"use client";

import { useLanguage } from "@/components/language/LanguageContext";
import Link from "next/link";

export default function PricingPage() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* HEADER */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          {isEN ? "Simple, Transparent Pricing" : "Harga Sederhana & Transparan"}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {isEN
            ? "RemoteWorks ID focuses on trust-first hiring. Pricing is designed to support quality, not volume."
            : "RemoteWorks ID berfokus pada rekrutmen berbasis kepercayaan. Harga dirancang untuk kualitas, bukan kuantitas."}
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* STANDARD */}
        <div className="border rounded-2xl p-8 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-800 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              {isEN ? "Standard Review" : "Review Standar"}
            </h2>
            <span className="inline-block rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-sm font-medium text-green-700 dark:text-green-300">
              {isEN ? "Free" : "Gratis"}
            </span>
          </div>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>• {isEN ? "Manual job review (3–5 business days)" : "Review manual (3–5 hari kerja)"}</li>
            <li>• {isEN ? "Basic job visibility" : "Visibilitas standar"}</li>
            <li>• {isEN ? "Scam & legitimacy screening" : "Penyaringan penipuan & legitimasi"}</li>
            <li>• {isEN ? "Apply link redirection" : "Redirect ke link lamaran"}</li>
          </ul>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isEN
              ? "Perfect for companies testing the platform or hiring casually."
              : "Cocok untuk perusahaan yang baru mencoba platform atau kebutuhan rekrutmen ringan."}
          </p>
        </div>

        {/* PRIORITY */}
        <div className="border rounded-2xl p-8 bg-blue-50 dark:bg-gray-900 border-blue-200 dark:border-blue-800 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              {isEN ? "Priority Review" : "Review Prioritas"}
            </h2>
            <span className="inline-block rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 text-sm font-medium text-yellow-700 dark:text-yellow-300">
              {isEN ? "Paid · Coming Soon" : "Berbayar · Segera Hadir"}
            </span>
          </div>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>• {isEN ? "Reviewed within 24 hours" : "Ditinjau dalam 24 jam"}</li>
            <li>• {isEN ? "Curated & Verified badge" : "Badge Curated & Verified"}</li>
            <li>• {isEN ? "Higher listing priority" : "Prioritas tampilan lebih tinggi"}</li>
            <li>• {isEN ? "Better trust signal for candidates" : "Sinyal kepercayaan lebih kuat bagi kandidat"}</li>
          </ul>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isEN
              ? "Designed for serious hiring with speed, visibility, and trust."
              : "Dirancang untuk rekrutmen serius dengan kecepatan, visibilitas, dan kepercayaan."}
          </p>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-3xl mx-auto text-center space-y-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {isEN
            ? "During early access, all job submissions are free. Priority Review pricing will be announced before activation."
            : "Selama fase early access, semua pengajuan lowongan gratis. Harga Review Prioritas akan diumumkan sebelum diaktifkan."}
        </p>

        <p className="text-xs text-gray-400">
          {isEN
            ? "Payment does not guarantee hiring outcomes. RemoteWorks ID focuses on quality and legitimacy, not placement."
            : "Pembayaran tidak menjamin hasil perekrutan. RemoteWorks ID berfokus pada kualitas dan legitimasi."}
        </p>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          href="/employers/submit-job"
          className="inline-block rounded-lg bg-black text-white px-6 py-3 hover:bg-gray-800 transition"
        >
          {isEN ? "Submit a Job" : "Kirim Lowongan"}
        </Link>
      </section>
    </main>
  );
}
