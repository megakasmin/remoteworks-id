"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import LanguageToggle from "@/components/LanguageToggle";

type Language = "en" | "id";

export default function SubmitJobClient() {
  const [lang, setLang] = useState<Language>("en");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // 🔒 No backend yet — curated manual flow
    router.push("/employers/submit-job/success");
  }

  return (
    <section className="space-y-12">
      {/* Language Toggle */}
<div className="flex justify-end">
  <LanguageToggle language={lang} onChange={setLang} />
</div>

      {/* COPY */}
      {lang === "en" ? (
        <>
          <h1 className="text-4xl font-bold">Submit a Job</h1>

          <p className="text-gray-700">
            RemoteWorks ID is a curated job discovery platform focused on remote
            and hybrid roles in tech, data, and digital fields.
          </p>

          <p className="text-gray-700">
            Every job submission is reviewed manually. Not all submissions will
            be published.
          </p>

          <div className="space-y-2 text-gray-700">
            <p className="font-semibold">Before publishing, we review:</p>
            <ul className="list-disc list-inside">
              <li>Company credibility and online presence</li>
              <li>Job clarity and role legitimacy</li>
              <li>No application fees or suspicious requests</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600">
            Submitting a job does not guarantee publication.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold">Kirim Lowongan</h1>

          <p className="text-gray-700">
            RemoteWorks ID adalah platform lowongan kerja terkurasi yang
            berfokus pada peran remote dan hybrid di bidang teknologi, data,
            dan digital.
          </p>

          <p className="text-gray-700">
            Setiap lowongan akan ditinjau secara manual. Tidak semua lowongan
            akan dipublikasikan.
          </p>

          <div className="space-y-2 text-gray-700">
            <p className="font-semibold">Sebelum dipublikasikan, kami meninjau:</p>
            <ul className="list-disc list-inside">
              <li>Kredibilitas dan kehadiran digital perusahaan</li>
              <li>Kejelasan dan keabsahan peran</li>
              <li>Tidak ada biaya melamar atau indikasi penipuan</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600">
            Mengirim lowongan tidak menjamin publikasi.
          </p>
        </>
      )}

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6 pt-6">
        <input
          required
          placeholder="Company Name"
          className="w-full border rounded-lg p-3"
        />
        <input
          required
          placeholder="Company Website"
          className="w-full border rounded-lg p-3"
        />
        <input
          required
          placeholder="Job Title"
          className="w-full border rounded-lg p-3"
        />

        <select required className="w-full border rounded-lg p-3">
          <option value="">Job Type</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <input
          placeholder="Location (optional)"
          className="w-full border rounded-lg p-3"
        />

        <input
          required
          placeholder="Apply URL"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Notes (optional)"
          className="w-full border rounded-lg p-3"
          rows={4}
        />

        <Button type="submit">Submit for Review</Button>
      </form>

{/* Optional Visibility & Review Options */}
<section className="mt-16 border-t pt-10 space-y-8">
  <h2 className="text-2xl font-semibold">
    {lang === "en"
      ? "Optional Visibility & Review Options"
      : "Opsi Tambahan Visibilitas & Review"}
  </h2>

  {/* Priority Review */}
  <div className="border rounded-xl p-6 space-y-3">
    <h3 className="text-lg font-semibold">Priority Review</h3>

    <p className="text-gray-700">
      {lang === "en"
        ? "For employers who need faster review turnaround."
        : "Untuk perusahaan yang membutuhkan proses review lebih cepat."}
    </p>

    <ul className="list-disc list-inside text-sm text-gray-600">
      {lang === "en" ? (
        <>
          <li>Faster manual review by our team</li>
          <li>Same quality and verification standards</li>
          <li>No guarantee of publication</li>
          <li>Ideal for time-sensitive roles</li>
        </>
      ) : (
        <>
          <li>Review manual lebih cepat oleh tim kami</li>
          <li>Tetap melalui standar kualitas dan verifikasi</li>
          <li>Tidak menjamin publikasi</li>
          <li>Cocok untuk lowongan yang bersifat mendesak</li>
        </>
      )}
    </ul>

    <p className="text-xs text-gray-500">
      {lang === "en"
        ? "Priority Review affects review speed, not editorial decisions."
        : "Priority Review hanya mempengaruhi kecepatan review, bukan keputusan publikasi."}
    </p>
  </div>

  {/* Featured Listing */}
  <div className="border rounded-xl p-6 space-y-3">
    <h3 className="text-lg font-semibold">Featured Listing</h3>

    <p className="text-gray-700">
      {lang === "en"
        ? "Highlight your job to increase visibility."
        : "Tingkatkan visibilitas lowongan Anda."}
    </p>

    <ul className="list-disc list-inside text-sm text-gray-600">
      {lang === "en" ? (
        <>
          <li>Featured placement on job listings</li>
          <li>Higher visibility to relevant candidates</li>
          <li>Available only for approved jobs</li>
          <li>Limited availability</li>
        </>
      ) : (
        <>
          <li>Penempatan khusus di halaman lowongan</li>
          <li>Lebih mudah ditemukan kandidat relevan</li>
          <li>Hanya tersedia untuk lowongan yang lolos review</li>
          <li>Slot terbatas</li>
        </>
      )}
    </ul>

    <p className="text-xs text-gray-500">
      {lang === "en"
        ? "Featured listings must meet all verification standards."
        : "Featured Listing tetap harus memenuhi seluruh standar verifikasi."}
    </p>
  </div>

  {/* Trust Disclaimer */}
  <div className="bg-gray-50 border rounded-xl p-4 text-sm text-gray-600">
    {lang === "en"
      ? "RemoteWorks ID does not sell job approvals. All submissions are reviewed manually. Monetization options apply only to review speed or listing visibility."
      : "RemoteWorks ID tidak menjual persetujuan lowongan. Semua lowongan ditinjau secara manual. Opsi monetisasi hanya mempengaruhi kecepatan review atau visibilitas lowongan."}
  </div>
</section>


    </section>
  );
}
