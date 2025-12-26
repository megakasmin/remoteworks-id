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
        content={{
          en: (
            <section className="space-y-12">
              <h1 className="text-4xl font-bold">How We Verify Jobs</h1>

              <p className="text-gray-700 text-lg">
                RemoteWorks ID is a curated job discovery platform. We do not aim
                to list every job available — instead, we focus on verified,
                high-quality opportunities that are relevant, legitimate, and
                safe for professionals.
              </p>

              <div className="space-y-8">
                <h2 className="text-2xl font-semibold">
                  What “Verified” Means
                </h2>

                <p>
                  A verified job on RemoteWorks ID has passed a multi-layer
                  review process conducted by our internal team. Verification
                  does not guarantee hiring, but it ensures that the opportunity
                  meets our quality and legitimacy standards.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">
                  Our Job Verification Process
                </h2>

                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Source Validation</strong> — Jobs must originate from
                    official company websites, verified LinkedIn pages, or
                    trusted employer partners.
                  </li>
                  <li>
                    <strong>Company Background Review</strong> — We evaluate the
                    company’s online presence, legitimacy, and consistency.
                  </li>
                  <li>
                    <strong>Role & Content Review</strong> — Job descriptions
                    must be clear, realistic, and free from misleading claims.
                  </li>
                  <li>
                    <strong>Scam Risk Screening</strong> — We reject listings
                    that request fees, personal financial data, or suspicious
                    communication channels.
                  </li>
                  <li>
                    <strong>Manual Approval</strong> — Every verified job is
                    approved by a human reviewer, not automation.
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  Important Disclaimer
                </h2>

                <p className="text-gray-600">
                  RemoteWorks ID is not an employer or recruitment agency. We do
                  not control hiring decisions, salaries, or employment
                  outcomes. Verification indicates legitimacy at the time of
                  review, not future guarantees.
                </p>
              </div>
            </section>
          ),

          id: (
            <section className="space-y-12">
              <h1 className="text-4xl font-bold">
                Bagaimana Kami Memverifikasi Lowongan
              </h1>

              <p className="text-gray-700 text-lg">
                RemoteWorks ID adalah platform lowongan kerja yang dikurasi. Kami
                tidak bertujuan menampilkan semua lowongan yang ada, melainkan
                hanya peluang kerja yang relevan, sah, dan aman bagi profesional.
              </p>

              <div className="space-y-8">
                <h2 className="text-2xl font-semibold">Arti “Verified”</h2>

                <p>
                  Lowongan berstatus verified telah melalui proses peninjauan
                  berlapis oleh tim internal kami. Verifikasi tidak menjamin
                  diterima kerja, tetapi memastikan lowongan tersebut memenuhi
                  standar kualitas dan legitimasi.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">
                  Proses Verifikasi Kami
                </h2>

                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <strong>Validasi Sumber</strong> — Lowongan berasal dari situs
                    resmi perusahaan, LinkedIn terverifikasi, atau mitra
                    terpercaya.
                  </li>
                  <li>
                    <strong>Pemeriksaan Perusahaan</strong> — Kami menilai
                    keberadaan dan konsistensi digital perusahaan.
                  </li>
                  <li>
                    <strong>Review Posisi & Konten</strong> — Deskripsi harus
                    jelas dan tidak menyesatkan.
                  </li>
                  <li>
                    <strong>Penyaringan Risiko Penipuan</strong> — Kami menolak
                    lowongan yang meminta biaya atau data sensitif.
                  </li>
                  <li>
                    <strong>Persetujuan Manual</strong> — Semua lowongan ditinjau
                    oleh manusia, bukan sistem otomatis.
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Catatan Penting</h2>

                <p className="text-gray-600">
                  RemoteWorks ID bukan pihak pemberi kerja dan tidak terlibat
                  dalam proses rekrutmen. Verifikasi menunjukkan validitas saat
                  peninjauan, bukan jaminan hasil di masa depan.
                </p>
              </div>
            </section>
          ),
        }}
      />
    </main>
  );
}
