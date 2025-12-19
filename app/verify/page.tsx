import type { Metadata } from "next";
import VerifyClient from "./VerifyClient";

export const metadata: Metadata = {
  title: "How We Verify Jobs — RemoteWorks ID",
  description:
    "Learn how RemoteWorks ID curates and verifies job listings to ensure quality, legitimacy, and a scam-free job discovery experience.",
};

export default function VerifyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <VerifyClient
        en={
          <section className="space-y-12">
            <h1 className="text-4xl font-bold">How We Verify Jobs</h1>

            <p className="text-gray-700">
              RemoteWorks ID focuses on quality over quantity. Every job listed
              on our platform is manually reviewed to help professionals
              discover legitimate remote and hybrid opportunities.
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                Our Verification Process
              </h2>

              <p>
                <strong>1. Source Validation</strong> — Official company sites,
                verified LinkedIn pages, or trusted partners.
              </p>
              <p>
                <strong>2. Company Review</strong> — We check digital presence
                and role legitimacy.
              </p>
              <p>
                <strong>3. Content Review</strong> — Clear, realistic job
                descriptions only.
              </p>
              <p>
                <strong>4. Scam Screening</strong> — No fees, no suspicious
                requests.
              </p>
              <p>
                <strong>5. Curated Publishing</strong> — Reviewed by humans, not
                algorithms.
              </p>
            </div>
          </section>
        }
        id={
          <section className="space-y-12">
            <h1 className="text-4xl font-bold">
              Bagaimana Kami Memverifikasi Lowongan
            </h1>

            <p className="text-gray-700">
              RemoteWorks ID mengutamakan kualitas dibandingkan kuantitas.
              Setiap lowongan ditinjau secara manual untuk memastikan
              keabsahan dan relevansinya.
            </p>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">
                Proses Verifikasi Kami
              </h2>

              <p>
                <strong>1. Validasi Sumber</strong> — Situs resmi perusahaan atau
                LinkedIn terverifikasi.
              </p>
              <p>
                <strong>2. Pemeriksaan Perusahaan</strong> — Aktivitas dan
                kredibilitas.
              </p>
              <p>
                <strong>3. Review Deskripsi</strong> — Jelas dan realistis.
              </p>
              <p>
                <strong>4. Penyaringan Penipuan</strong> — Tanpa biaya atau
                permintaan mencurigakan.
              </p>
              <p>
                <strong>5. Publikasi Terkurasi</strong> — Ditinjau manual oleh
                tim.
              </p>
            </div>
          </section>
        }
      />
    </main>
  );
}
