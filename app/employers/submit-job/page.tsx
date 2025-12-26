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

  const reviewLabel = {
  standard: isEN ? "Standard Review" : "Review Standar",
  priority: isEN ? "Priority Review" : "Review Prioritas",
};

const visibilityOptions = [
  highlighted && (isEN ? "Highlighted Listing" : "Lowongan Disorot"),
  pinned && (isEN ? "Pinned Listing (7 Days)" : "Lowongan Dipin (7 Hari)"),
  urgent && (isEN ? "Urgent Hiring Badge" : "Badge Urgent Hiring"),
].filter(Boolean);

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
  className={`
    border rounded-xl p-5 text-left transition
    ${
      reviewType === "standard"
        ? "border-white-500 bg-blue-50 dark:bg-gray-900 ring-1 ring-white-500/30"
        : "border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 hover:border-gray-400"
    }
  `}
>
<h3 className="font-semibold text-gray-900 dark:text-gray-100">
  {isEN ? "Standard Review" : "Review Standar"}
  <span className="ml-2 inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-300">
    Free
  </span>
</h3>


  <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
    <li>• {isEN ? "Reviewed within 3–5 business days" : "Ditinjau 3–5 hari kerja"}</li>
    <li>• {isEN ? "Basic visibility" : "Visibilitas standar"}</li>
    <li>• {isEN ? "Manual scam screening" : "Penyaringan penipuan manual"}</li>
  </ul>
</button>


          {/* PRIORITY */}
<button
  type="button"
  onClick={() => setReviewType("priority")}
  className={`
    border rounded-xl p-5 text-left transition
    ${
      reviewType === "priority"
        ? "border-white-600 bg-blue-50 dark:bg-gray-900 ring-1 ring-white-600/30"
        : "border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900 hover:border-gray-400"
    }
  `}
>
<h3 className="font-semibold text-gray-900 dark:text-gray-100">
  {isEN ? "Priority Review" : "Review Prioritas"}
  <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 text-xs font-medium text-yellow-700 dark:text-yellow-300">
    Paid · Coming Soon
  </span>
</h3>


  <ul className="text-sm text-gray-700 dark:text-gray-300 mt-2 space-y-1">
    <li>• {isEN ? "Reviewed within 24 hours" : "Ditinjau dalam 24 jam"}</li>
    <li>• {isEN ? "Curated & Verified badge" : "Badge Curated & Verified"}</li>
    <li>• {isEN ? "Higher listing priority" : "Prioritas tampilan lebih tinggi"}</li>
  </ul>
</button>

        </div>
      </section>

      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
  {isEN
    ? "Priority Review pricing will be announced soon. You can submit jobs for free during the early access phase."
    : "Harga Review Prioritas akan diumumkan segera. Selama fase early access, pengajuan lowongan masih gratis."}
</p>


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


        <input
          required
          placeholder={isEN ? "Contact Person" : "Kontak yang bisa dihubungi"}
          className="w-full border rounded-lg p-3"
        />

{/* REVIEW SUMMARY */}
<div
  className="
    border border-blue-100 dark:border-gray-800
    rounded-xl p-6
    bg-blue-50 dark:bg-gray-900
    space-y-4
  "
>
  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
    {isEN ? "Review Summary" : "Ringkasan Pengajuan"}
  </h3>

  <div className="text-sm space-y-3">
    <div className="flex justify-between">
      <span className="text-gray-600 dark:text-gray-400">
        {isEN ? "Review Type" : "Jenis Review"}
      </span>
      <span className="font-medium text-gray-900 dark:text-gray-100">
        {reviewLabel[reviewType]}
      </span>
    </div>

    <div>
      <p className="text-gray-600 dark:text-gray-400 mb-1">
        {isEN ? "Visibility Options" : "Opsi Visibilitas"}
      </p>

      {visibilityOptions.length > 0 ? (
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200">
          {visibilityOptions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="italic text-gray-500 dark:text-gray-500">
          {isEN
            ? "No additional visibility selected"
            : "Tidak ada peningkatan visibilitas"}
        </p>
      )}
    </div>
  </div>

  <p className="text-xs text-gray-500 dark:text-gray-400 pt-3 border-t border-blue-100 dark:border-gray-800">
    {isEN
      ? "All submissions are manually reviewed. Visibility options do not guarantee hiring outcomes."
      : "Semua pengajuan ditinjau manual. Opsi visibilitas tidak menjamin hasil perekrutan."}
  </p>
</div>


        <Button type="submit">
          {isEN ? "Submit Job" : "Kirim Lowongan"}
        </Button>
      </form>
    </main>
  );
}
