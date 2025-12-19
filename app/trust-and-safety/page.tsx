import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Safety — RemoteWorks ID",
  description:
    "Learn how RemoteWorks ID protects job seekers, handles reports, and promotes a safe and transparent job discovery experience.",
};

export default function TrustSafetyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
      {/* ================= ENGLISH ================= */}
      <section className="space-y-8">
        <h1 className="text-4xl font-bold">Trust & Safety</h1>

        <p className="text-gray-700">
          RemoteWorks ID is committed to providing a safe, transparent, and
          trustworthy job discovery experience for professionals seeking remote
          and hybrid opportunities.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Our Commitment</h2>
            <p className="text-gray-700 mt-2">
              We aim to reduce exposure to job scams, misleading listings, and
              unethical recruitment practices. While we curate job listings,
              user awareness and responsible decision-making remain essential.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">User Safety Guidelines</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Never pay fees to apply for a job</li>
              <li>
                Avoid sharing sensitive personal or financial information
              </li>
              <li>Communicate through official company channels only</li>
            </ul>
            <p className="text-gray-700 mt-2">
              RemoteWorks ID will never request payments from job seekers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Reporting Suspicious Listings
            </h2>
            <p className="text-gray-700 mt-2">
              If you encounter a job listing that appears misleading,
              suspicious, or unethical, please report it to us immediately.
            </p>
            <p className="font-medium mt-2">
              Email: support@remoteworksid.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Disclaimer</h2>
            <p className="text-gray-700 mt-2">
              RemoteWorks ID is not an employer and does not guarantee hiring
              outcomes. We act solely as a curated job discovery platform and
              encourage users to conduct their own due diligence before
              applying.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INDONESIAN ================= */}
      <section className="space-y-8 border-t pt-16">
        <h1 className="text-4xl font-bold">Keamanan & Kepercayaan</h1>

        <p className="text-gray-700">
          RemoteWorks ID berkomitmen untuk menyediakan pengalaman pencarian
          lowongan kerja yang aman, transparan, dan dapat dipercaya bagi para
          profesional yang mencari pekerjaan remote dan hybrid.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Komitmen Kami</h2>
            <p className="text-gray-700 mt-2">
              Kami berupaya mengurangi risiko penipuan lowongan kerja, informasi
              yang menyesatkan, dan praktik rekrutmen yang tidak etis. Meskipun
              lowongan dikurasi, kewaspadaan pengguna tetap sangat penting.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Panduan Keamanan untuk Pencari Kerja
            </h2>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Jangan pernah membayar biaya untuk melamar pekerjaan</li>
              <li>
                Hindari membagikan data pribadi atau keuangan yang sensitif
              </li>
              <li>
                Berkomunikasilah hanya melalui saluran resmi perusahaan
              </li>
            </ul>
            <p className="text-gray-700 mt-2">
              RemoteWorks ID tidak pernah meminta pembayaran dari pencari kerja.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              Melaporkan Lowongan Mencurigakan
            </h2>
            <p className="text-gray-700 mt-2">
              Jika Anda menemukan lowongan yang mencurigakan atau menyesatkan,
              silakan laporkan kepada kami.
            </p>
            <p className="font-medium mt-2">
              Email: support@remoteworksid.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Penafian</h2>
            <p className="text-gray-700 mt-2">
              RemoteWorks ID bukan pihak pemberi kerja dan tidak menjamin hasil
              perekrutan. Kami berfungsi sebagai platform kurasi lowongan kerja
              dan menyarankan pengguna untuk melakukan verifikasi mandiri
              sebelum melamar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
