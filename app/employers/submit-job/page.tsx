"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/components/language/LanguageContext";

export default function SubmitJobPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const isEN = language === "en";

  /* REVIEW & VISIBILITY STATE */
  const [reviewType, setReviewType] =
    useState<"standard" | "priority">("standard");

  const [highlighted, setHighlighted] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [urgent, setUrgent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/employers/submit-job/success");
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-12">

      {/* HEADER */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">
          {isEN ? "Submit a Job" : "Kirim Lowongan"}
        </h1>
        <p className="text-gray-600">
          {isEN
            ? "All job submissions are manually reviewed before publishing."
            : "Semua lowongan ditinjau secara manual sebelum dipublikasikan."}
        </p>
      </section>

      {/* REVIEW TYPE */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">
          {isEN ? "Review Type" : "Jenis Review"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {/* STANDARD */}
          <button
            type="button"
            onClick={() => setReviewType("standard")}
            className={`border rounded-xl p-4 text-left transition ${
              reviewType === "standard"
                ? "border-blue-600 bg-blue-50"
                : "hover:border-gray-400"
            }`}
          >
            <h3 className="font-semibold">
              {isEN ? "Standard Review (Free)" : "Review Standar (Gratis)"}
            </h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• {isEN ? "Reviewed in 3–5 business days" : "Ditinjau 3–5 hari kerja"}</li>
              <li>• {isEN ? "Basic visibility" : "Visibilitas standar"}</li>
              <li>• {isEN ? "Manual scam screening" : "Pemeriksaan penipuan manual"}</li>
            </ul>
          </button>

          {/* PRIORITY */}
          <button
            type="button"
            onClick={() => setReviewType("priority")}
            className={`border rounded-xl p-4 text-left transition ${
              reviewType === "priority"
                ? "border-purple-600 bg-purple-50"
                : "hover:border-gray-400"
            }`}
          >
            <h3 className="font-semibold">
              {isEN ? "Priority Review" : "Review Prioritas"}{" "}
              <span className="text-purple-600">(Recommended)</span>
            </h3>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• {isEN ? "Reviewed within 24 hours" : "Ditinjau dalam 24 jam"}</li>
              <li>• {isEN ? "Eligible for Verified badge" : "Berpeluang mendapat badge Verified"}</li>
              <li>• {isEN ? "Higher listing priority" : "Prioritas tampilan lebih tinggi"}</li>
            </ul>
          </button>
        </div>
      </section>

      {/* VISIBILITY BOOST */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">
          {isEN ? "Visibility Boost (Optional)" : "Peningkatan Visibilitas (Opsional)"}
        </h2>

        <p className="text-sm text-gray-500">
          {isEN
            ? "Increase your job’s exposure to reach more qualified candidates."
            : "Tingkatkan visibilitas lowongan untuk menjangkau kandidat yang lebih relevan."}
        </p>

        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={highlighted}
              onChange={() => setHighlighted(!highlighted)}
              className="mt-1"
            />
            <div>
              <p className="font-medium">
                {isEN ? "Highlighted Listing" : "Lowongan Disorot"}
              </p>
              <p className="text-sm text-gray-600">
                {isEN
                  ? "Stand out visually in job listings."
                  : "Tampil lebih menonjol di daftar pekerjaan."}
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={pinned}
              onChange={() => setPinned(!pinned)}
              className="mt-1"
            />
            <div>
              <p className="font-medium">
                {isEN ? "Pinned Listing (7 Days)" : "Lowongan Dipin (7 Hari)"}
              </p>
              <p className="text-sm text-gray-600">
                {isEN
                  ? "Keep your job at the top of the job list."
                  : "Lowongan tetap di bagian atas daftar."}
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={urgent}
              onChange={() => setUrgent(!urgent)}
              className="mt-1"
            />
            <div>
              <p className="font-medium">
                {isEN ? "Urgent Hiring Badge" : "Badge Urgent Hiring"}
              </p>
              <p className="text-sm text-gray-600">
                {isEN
                  ? "Signal urgency and attract faster responses."
                  : "Menunjukkan urgensi untuk menarik respon lebih cepat."}
              </p>
            </div>
          </label>
        </div>
      </section>

      {/* TRUST & SAFETY */}
      <section className="border-t pt-6 space-y-3">
        <h3 className="text-sm font-semibold text-gray-700">
          {isEN ? "Trust & Safety Assurance" : "Jaminan Keamanan & Kepercayaan"}
        </h3>

        <ul className="text-sm text-gray-600 space-y-1">
          <li>• {isEN ? "Manual job & company verification" : "Verifikasi manual lowongan & perusahaan"}</li>
          <li>• {isEN ? "No application or listing fees" : "Tanpa biaya melamar atau mendaftar"}</li>
          <li>• {isEN ? "Clear separation from hiring decisions" : "Tidak terlibat dalam keputusan rekrutmen"}</li>
        </ul>

        <p className="text-xs text-gray-500">
          {isEN
            ? "Visibility options do not guarantee hiring outcomes."
            : "Opsi visibilitas tidak menjamin hasil perekrutan."}
        </p>
      </section>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          required
          placeholder={isEN ? "Job Title" : "Judul Pekerjaan"}
          className="w-full border rounded-lg p-3"
        />

        <input
          required
          placeholder={isEN ? "Company Name" : "Nama Perusahaan"}
          className="w-full border rounded-lg p-3"
        />

        <input
          required
          placeholder={isEN ? "Application URL" : "Link Lamaran"}
          className="w-full border rounded-lg p-3"
        />

        <Button type="submit">
          {isEN ? "Submit Job" : "Kirim Lowongan"}
        </Button>
      </form>
    </main>
  );
}
