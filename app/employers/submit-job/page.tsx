"use client";

import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/language/LanguageContext";

export default function SubmitJobPage() {
  const { language } = useLanguage();
  const isEN = language === "en";

  const [priorityReview, setPriorityReview] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const [reviewType, setReviewType] =
    useState<"standard" | "priority">("standard");

  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/employers/submit-job/success");
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">
      {/* HEADER */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">
          {isEN ? "Submit a Job" : "Submit Lowongan"}
        </h1>
        <p className="text-gray-600">
          {isEN
            ? "All job submissions are manually reviewed before publishing."
            : "Semua lowongan akan ditinjau manual sebelum dipublikasikan."}
        </p>
      </section>

      {/* REVIEW OPTIONS */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-2">
          {isEN ? "Review & Visibility Options" : "Opsi Review & Visibilitas"}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          {isEN
            ? "Choose how your job listing will be reviewed and displayed."
            : "Pilih bagaimana lowongan Anda akan ditinjau dan ditampilkan."}
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Standard */}
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
          </button>

          {/* Priority */}
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
              {isEN ? "Priority Review" : "Review Prioritas"}
            </h3>
          </button>
        </div>
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
