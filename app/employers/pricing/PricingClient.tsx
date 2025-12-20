"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";

type Language = "en" | "id";

export default function PricingClient() {
  const [lang, setLang] = useState<Language>("en");

  return (
    <section className="space-y-14">
      {/* Language Toggle */}
<div className="flex justify-end">
  <LanguageToggle language={lang} onChange={setLang} />
</div>


      {/* CONTENT */}
      {lang === "en" ? (
        <>
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">Employer Pricing</h1>
            <p className="text-gray-700">
              RemoteWorks ID is a curated job discovery platform focused on
              quality, legitimacy, and relevance.
            </p>
            <p className="text-gray-700">
              Our monetization options are designed to support sustainability
              without compromising trust.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Principles</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>We do not sell job approvals</li>
              <li>All jobs are reviewed manually</li>
              <li>Quality standards apply to all submissions</li>
            </ul>
            <p className="text-gray-600">
              Monetization only affects review speed or visibility — never
              editorial decisions.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            {/* Priority Review */}
            <div className="border rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Priority Review</h3>
              <p className="text-gray-700">
                Faster manual review for time-sensitive roles.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Accelerated review by our team</li>
                <li>Same verification standards</li>
                <li>No guarantee of publication</li>
              </ul>
              <p className="text-xs text-gray-500">
                Priority Review affects review time, not approval.
              </p>
            </div>

            {/* Featured Listing */}
            <div className="border rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Featured Listing</h3>
              <p className="text-gray-700">
                Increased visibility for approved roles.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Featured placement on job listings</li>
                <li>Higher exposure to relevant candidates</li>
                <li>Limited availability</li>
              </ul>
              <p className="text-xs text-gray-500">
                Featured listings require successful job review.
              </p>
            </div>
          </section>

          <section className="border-t pt-8 space-y-4">
            <p className="text-gray-600">
              RemoteWorks ID maintains a strict separation between monetization
              and job approval decisions.
            </p>

            <Link
              href="/employers/submit-job"
              className="inline-block font-medium underline"
            >
              Submit a Job →
            </Link>
          </section>
        </>
      ) : (
        <>
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">Harga untuk Perusahaan</h1>
            <p className="text-gray-700">
              RemoteWorks ID adalah platform lowongan kerja terkurasi yang
              mengutamakan kualitas, keabsahan, dan relevansi.
            </p>
            <p className="text-gray-700">
              Opsi monetisasi kami dirancang untuk mendukung keberlanjutan tanpa
              mengorbankan kepercayaan.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Prinsip Kami</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Kami tidak menjual persetujuan lowongan</li>
              <li>Semua lowongan ditinjau secara manual</li>
              <li>Standar kualitas berlaku untuk semua</li>
            </ul>
            <p className="text-gray-600">
              Monetisasi hanya mempengaruhi kecepatan review atau visibilitas.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Priority Review</h3>
              <p className="text-gray-700">
                Review lebih cepat untuk kebutuhan rekrutmen mendesak.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Proses review manual dipercepat</li>
                <li>Tetap melalui standar verifikasi</li>
                <li>Tidak menjamin publikasi</li>
              </ul>
              <p className="text-xs text-gray-500">
                Priority Review hanya mempengaruhi waktu review.
              </p>
            </div>

            <div className="border rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold">Featured Listing</h3>
              <p className="text-gray-700">
                Visibilitas lebih tinggi untuk lowongan terpilih.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Penempatan khusus di halaman lowongan</li>
                <li>Lebih mudah ditemukan kandidat relevan</li>
                <li>Slot terbatas</li>
              </ul>
              <p className="text-xs text-gray-500">
                Hanya tersedia untuk lowongan yang lolos review.
              </p>
            </div>
          </section>

          <section className="border-t pt-8 space-y-4">
            <p className="text-gray-600">
              RemoteWorks ID memisahkan secara tegas antara monetisasi dan
              keputusan publikasi lowongan.
            </p>

            <Link
              href="/employers/submit-job"
              className="inline-block font-medium underline"
            >
              Kirim Lowongan →
            </Link>
          </section>
        </>
      )}
    </section>
  );
}
