"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

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
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setLang("en")}
          className={`text-sm ${
            lang === "en" ? "font-semibold underline" : "text-gray-400"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLang("id")}
          className={`text-sm ${
            lang === "id" ? "font-semibold underline" : "text-gray-400"
          }`}
        >
          ID
        </button>
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

      {/* Monetization Section */}
<section className="mt-16 border-t pt-10 space-y-8">
  <h2 className="text-2xl font-semibold">
    Optional Visibility & Review Options
  </h2>

  {/* Priority Review */}
  <div className="border rounded-xl p-6 space-y-3">
    <h3 className="text-lg font-semibold">Priority Review</h3>

    <p className="text-gray-700">
      For employers who need faster review turnaround.
    </p>

    <ul className="list-disc list-inside text-sm text-gray-600">
      <li>Faster manual review by our team</li>
      <li>Same quality and verification standards</li>
      <li>No guarantee of publication</li>
      <li>Ideal for time-sensitive roles</li>
    </ul>

    <p className="text-xs text-gray-500">
      Priority Review affects review speed, not editorial decisions.
    </p>
  </div>

  {/* Featured Listing */}
  <div className="border rounded-xl p-6 space-y-3">
    <h3 className="text-lg font-semibold">Featured Listing</h3>

    <p className="text-gray-700">
      Highlight your job to increase visibility.
    </p>

    <ul className="list-disc list-inside text-sm text-gray-600">
      <li>Featured placement on job listings</li>
      <li>Higher visibility to relevant candidates</li>
      <li>Available only for approved jobs</li>
      <li>Limited availability</li>
    </ul>

    <p className="text-xs text-gray-500">
      Featured listings must meet all verification standards.
    </p>
  </div>

  {/* Trust Disclaimer */}
  <div className="bg-gray-50 border rounded-xl p-4 text-sm text-gray-600">
    RemoteWorks ID does not sell job approvals. All submissions are reviewed
    manually. Monetization options apply only to review speed or listing
    visibility.
  </div>
</section>

    </section>
  );
}
