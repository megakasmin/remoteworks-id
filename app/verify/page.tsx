import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Verify Jobs — RemoteWorks ID",
  description:
    "Learn how RemoteWorks ID curates and verifies job listings to ensure quality, legitimacy, and a scam-free job discovery experience.",
};

export default function VerifyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-20">
      {/* ================= ENGLISH ================= */}
      <section className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">How We Verify Jobs</h1>
          <p className="text-lg text-gray-700">
            RemoteWorks ID is built on a simple principle:{" "}
            <strong>quality over quantity</strong>.  
            Every job listed on our platform is manually reviewed to help
            professionals discover legitimate remote and hybrid opportunities
            with confidence.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Why Verification Matters
          </h2>
          <p className="text-gray-700">
            As remote work continues to grow, so does the number of misleading
            and fraudulent job postings. RemoteWorks ID exists to reduce noise
            and risk by offering a curated job discovery experience — not an
            automated mass job board.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Our Job Verification Process
          </h2>

          <div className="space-y-4">
            <h3 className="font-semibold">1. Source Validation</h3>
            <p className="text-gray-700">
              We only publish jobs sourced from official company websites,
              verified LinkedIn company pages, trusted hiring partners, or
              direct employer submissions reviewed by our team.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">2. Company Legitimacy Review</h3>
            <p className="text-gray-700">
              We assess the company’s digital presence, business activity, and
              alignment between the role and the company’s core operations.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">3. Role & Content Evaluation</h3>
            <p className="text-gray-700">
              Job descriptions are reviewed for clarity, realistic expectations,
              and consistency. Listings with vague or misleading information are
              not approved.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">4. Scam Risk Screening</h3>
            <p className="text-gray-700">
              We actively filter out listings that request payments, sensitive
              personal data, or communication through unofficial channels.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">5. Curated Publishing</h3>
            <p className="text-gray-700">
              Jobs that pass all checks are labeled{" "}
              <strong>“Curated by RemoteWorks ID”</strong>, indicating that they
              have been reviewed by humans — not algorithms.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            What Verification Does — and Does Not — Mean
          </h2>
          <p className="text-gray-700">
            Verification helps reduce risk and improve job quality, but it does
            not guarantee hiring outcomes. Candidates are encouraged to perform
            their own due diligence before applying.
          </p>
        </section>
      </section>

      {/* ================= INDONESIAN ================= */}
      <section className="space-y-10 border-t pt-20">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">
            Bagaimana Kami Memverifikasi Lowongan
          </h1>
          <p className="text-lg text-gray-700">
            RemoteWorks ID dibangun dengan prinsip sederhana:{" "}
            <strong>kualitas lebih penting daripada kuantitas</strong>.  
            Setiap lowongan yang ditampilkan ditinjau secara manual untuk
            membantu profesional menemukan peluang kerja remote dan hybrid
            yang sah dan terpercaya.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">
            Mengapa Verifikasi Itu Penting
          </h2>
          <p className="text-gray-700">
            Seiring meningkatnya popularitas kerja remote, risiko penipuan
            lowongan kerja juga semakin tinggi. RemoteWorks ID hadir untuk
            mengurangi risiko tersebut dengan menghadirkan pengalaman pencarian
            kerja yang terkurasi — bukan papan lowongan massal otomatis.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">
            Proses Verifikasi Lowongan Kami
          </h2>

          <div className="space-y-4">
            <h3 className="font-semibold">1. Validasi Sumber</h3>
            <p className="text-gray-700">
              Kami hanya mempublikasikan lowongan yang berasal dari situs resmi
              perusahaan, halaman LinkedIn perusahaan terverifikasi, mitra
              rekrutmen terpercaya, atau pengajuan langsung dari perusahaan
              yang ditinjau secara manual.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">2. Pemeriksaan Legalitas Perusahaan</h3>
            <p className="text-gray-700">
              Kami menilai keberadaan digital perusahaan, aktivitas bisnis, dan
              kesesuaian antara posisi yang ditawarkan dengan kegiatan utama
              perusahaan.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">
              3. Evaluasi Peran & Deskripsi
            </h3>
            <p className="text-gray-700">
              Deskripsi pekerjaan ditinjau untuk memastikan kejelasan,
              ekspektasi yang realistis, dan konsistensi informasi. Lowongan
              yang ambigu atau menyesatkan tidak akan dipublikasikan.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">4. Penyaringan Risiko Penipuan</h3>
            <p className="text-gray-700">
              Kami menyaring lowongan yang meminta pembayaran, data pribadi
              sensitif, atau komunikasi melalui saluran tidak resmi.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">5. Publikasi Terkurasi</h3>
            <p className="text-gray-700">
              Lowongan yang lolos seluruh tahapan akan diberi label{" "}
              <strong>“Curated by RemoteWorks ID”</strong>, yang berarti telah
              ditinjau oleh manusia, bukan sistem otomatis.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Batasan Proses Verifikasi
          </h2>
          <p className="text-gray-700">
            Proses verifikasi bertujuan untuk mengurangi risiko dan meningkatkan
            kualitas lowongan, namun tidak menjamin hasil perekrutan. Kandidat
            tetap disarankan untuk melakukan verifikasi mandiri sebelum melamar.
          </p>
        </section>
      </section>
    </main>
  );
}
