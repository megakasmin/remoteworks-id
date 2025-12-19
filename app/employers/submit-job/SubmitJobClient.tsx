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
    </section>
  );
}
