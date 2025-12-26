"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/LanguageContext";

export default function SubmitJobSuccessPage() {
  const { language } = useLanguage();
  const isEN = language === "en";

  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="mb-6">
        <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm">
          {isEN ? "Submission Received" : "Pengajuan Diterima"}
        </span>
      </div>

      <h1 className="text-2xl font-bold mb-4">
        {isEN
          ? "Your job has been successfully submitted"
          : "Lowongan berhasil dikirim"}
      </h1>

      <p className="text-gray-600 mb-6">
        {isEN
          ? "Thank you for submitting your job listing to RemoteWorks ID. Our team will review your submission and notify you once it has been approved."
          : "Terima kasih telah mengirimkan lowongan ke RemoteWorks ID. Tim kami akan meninjau pengajuan Anda dan memberi tahu setelah disetujui."}
      </p>

      <p className="text-xs text-gray-500 mt-6">
        {isEN
          ? "Every submission is reviewed by our team. Priority Review affects review speed, while verification is granted separately after internal checks."
          : "Setiap pengajuan ditinjau oleh tim kami. Priority Review memengaruhi kecepatan peninjauan, sedangkan verifikasi diberikan secara terpisah setelah pemeriksaan internal."}
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/employers/submit-job"
          className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
        >
          {isEN ? "Submit Another Job" : "Kirim Lowongan Lain"}
        </Link>

        <Link
          href="/trust-and-safety"
          className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          {isEN
            ? "Learn About Our Review Process"
            : "Pelajari Proses Peninjauan Kami"}
        </Link>
      </div>
    </main>
  );
}
