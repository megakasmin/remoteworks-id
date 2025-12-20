"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function SubmitJobPage() {
  const [lang, setLang] = useState<"en" | "id">("en");
  const isEN = lang === "en";

  const [priorityReview, setPriorityReview] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const [reviewType, setReviewType] = useState<"standard" | "priority">("standard");


  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/employers/submit-job/success");
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-10">

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

      <section className="mt-8">
  <h2 className="text-lg font-semibold mb-2">
    Review & Visibility Options
  </h2>
  <p className="text-sm text-gray-500 mb-4">
    Choose how your job listing will be reviewed and displayed.
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
      <h3 className="font-semibold">Standard Review (Free)</h3>
      <ul className="text-sm text-gray-600 mt-2 space-y-1">
        <li>• Review within 3–5 business days</li>
        <li>• Basic visibility</li>
        <li>• Manual scam screening</li>
      </ul>

      <p className="text-xs text-gray-500 mt-3 italic">
        Peninjauan standar tanpa biaya tambahan.
      </p>
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
        Priority Review <span className="text-purple-600">(Recommended)</span>
      </h3>
      <ul className="text-sm text-gray-600 mt-2 space-y-1">
        <li>• Reviewed within 24 hours</li>
        <li>• Curated & Verified badge</li>
        <li>• Higher listing priority</li>
      </ul>

      <p className="text-xs text-gray-500 mt-3 italic">
        Cocok untuk perusahaan yang ingin visibilitas dan kepercayaan lebih tinggi.
      </p>
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

        {/* OPTIONAL VISIBILITY */}
        <div className="border rounded-xl p-6 space-y-4">
          <h3 className="font-semibold">
            {isEN
              ? "Optional Visibility & Review"
              : "Opsi Visibilitas & Review"}
          </h3>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={priorityReview}
              onChange={() => setPriorityReview(!priorityReview)}
              className="mt-1"
            />
            <div>
              <p className="font-medium">
                {isEN ? "Priority Review" : "Review Prioritas"}
              </p>
              <p className="text-sm text-gray-600">
                {isEN
                  ? "Your job will be reviewed faster by our team."
                  : "Lowongan akan ditinjau lebih cepat oleh tim kami."}
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={highlighted}
              onChange={() => setHighlighted(!highlighted)}
              className="mt-1"
            />
            <div>
              <p className="font-medium">
                {isEN ? "Highlighted Listing" : "Lowongan Ditandai"}
              </p>
              <p className="text-sm text-gray-600">
                {isEN
                  ? "Increase visibility with a highlighted badge."
                  : "Tingkatkan visibilitas dengan badge khusus."}
              </p>
            </div>
          </label>
        </div>

        {/* NOTICE */}
        <div className="bg-gray-50 border rounded-xl p-6 text-sm text-gray-600">
          <p className="font-medium text-gray-900 mb-2">
            {isEN ? "Important Notice" : "Perhatian"}
          </p>
          <p>
            {isEN
              ? "Submitting a job does not guarantee publication. We reserve the right to reject listings that appear misleading or suspicious."
              : "Submit lowongan tidak menjamin publikasi. Kami berhak menolak lowongan yang tidak jelas atau mencurigakan."}
          </p>
        </div>

        <Button type="submit">
          {isEN ? "Submit Job" : "Kirim Lowongan"}
        </Button>
      </form>
    </main>
  );
}
