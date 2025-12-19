import type { Metadata } from "next";
import TrustSafetyClient from "./TrustSafetyClient";

export const metadata: Metadata = {
  title: "Trust & Safety — RemoteWorks ID",
  description:
    "Learn how RemoteWorks ID protects users and promotes a safe, scam-free job discovery experience.",
};

export default function TrustSafetyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <TrustSafetyClient
        en={
         <section className="space-y-12">
  <h1 className="text-4xl font-bold">Trust & Safety</h1>

  <p className="text-lg text-gray-700">
    Your safety matters to us. RemoteWorks ID is designed to help professionals
    discover job opportunities while minimizing exposure to scams and misleading
    listings.
  </p>

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Our Commitment</h2>

    <ul className="list-disc list-inside space-y-2">
      <li>No application or registration fees</li>
      <li>No requests for banking or financial information</li>
      <li>No off-platform communication requirements</li>
      <li>Clear separation between job discovery and hiring decisions</li>
    </ul>
  </div>

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">How to Stay Safe</h2>

    <ul className="list-disc list-inside space-y-2">
      <li>Always apply through official company websites or platforms</li>
      <li>Be cautious of offers that sound too good to be true</li>
      <li>Never pay to secure a job opportunity</li>
      <li>Report suspicious behavior immediately</li>
    </ul>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Report a Concern</h2>

    <p>
      If you encounter a suspicious listing or employer behavior, please contact
      us at <strong>support@remoteworksid.com</strong>. We actively investigate
      reports to keep the platform safe.
    </p>
  </div>

  <p className="text-sm text-gray-600">
    RemoteWorks ID does not act as an employer or recruiter and does not guarantee
    employment outcomes.
  </p>
</section>

        }
        id={
          <section className="space-y-12">
  <h1 className="text-4xl font-bold">Keamanan & Kepercayaan</h1>

  <p className="text-lg text-gray-700">
    Keamanan pengguna adalah prioritas kami. RemoteWorks ID membantu profesional
    menemukan peluang kerja sambil meminimalkan risiko penipuan.
  </p>

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Komitmen Kami</h2>

    <ul className="list-disc list-inside space-y-2">
      <li>Tidak ada biaya pendaftaran atau melamar</li>
      <li>Tidak meminta informasi keuangan</li>
      <li>Tidak mewajibkan komunikasi di luar kanal resmi</li>
      <li>Pemisahan jelas antara platform dan keputusan rekrutmen</li>
    </ul>
  </div>

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">Cara Tetap Aman</h2>

    <ul className="list-disc list-inside space-y-2">
      <li>Selalu melamar melalui situs resmi perusahaan</li>
      <li>Waspadai penawaran yang terlalu bagus</li>
      <li>Jangan pernah membayar untuk melamar kerja</li>
      <li>Laporkan aktivitas mencurigakan</li>
    </ul>
  </div>

  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Laporkan Masalah</h2>

    <p>
      Jika menemukan lowongan mencurigakan, hubungi kami di{" "}
      <strong>support@remoteworksid.com</strong>. Tim kami akan menindaklanjuti
      setiap laporan.
    </p>
  </div>

  <p className="text-sm text-gray-600">
    RemoteWorks ID bukan pemberi kerja dan tidak menjamin hasil perekrutan.
  </p>
</section>

        }
      />
    </main>
  );
}
