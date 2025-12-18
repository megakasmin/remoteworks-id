export default function TrustAndSafetyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-bold">
          Trust & Safety at RemoteWorks ID
        </h1>
        <p className="text-gray-600">
          Our commitment to providing verified, scam-free remote and hybrid job opportunities.
        </p>
        <p className="text-sm text-gray-500">
          Komitmen kami untuk menghadirkan lowongan kerja remote dan hybrid yang telah diverifikasi dan bebas dari penipuan.
        </p>
      </header>

      {/* Curated Jobs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          What “Curated Jobs” Mean
        </h2>
        <p className="text-gray-700">
          RemoteWorks ID operates as a curated job board. This means not every job submission is accepted or published.
          All job listings are reviewed manually to ensure quality, legitimacy, and relevance.
        </p>
        <p className="text-gray-700">
          Kami menerapkan sistem kurasi, artinya tidak semua lowongan akan dipublikasikan.
          Setiap lowongan ditinjau secara manual untuk memastikan kualitas, keabsahan, dan relevansi.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>No automatic job posting</li>
          <li>Manual review before publication</li>
          <li>Focus on remote and hybrid roles</li>
        </ul>
      </section>

      {/* Verification Process */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Our Job Verification Process
        </h2>
        <p className="text-gray-700">
          Each job listing published on RemoteWorks ID goes through a basic verification process designed to reduce the
          risk of scams and misleading opportunities.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Company legitimacy and online presence check</li>
          <li>Review of job title, description, and requirements</li>
          <li>Verification of official application links</li>
          <li>Screening for common scam red flags</li>
        </ul>
        <p className="text-gray-700">
          Setiap lowongan yang kami publikasikan melewati proses verifikasi dasar, termasuk pengecekan perusahaan,
          isi lowongan, dan tautan pendaftaran resmi untuk meminimalkan risiko penipuan.
        </p>
      </section>

      {/* What We Don’t Allow */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          What We Don’t Allow
        </h2>
        <p className="text-gray-700">
          To protect job seekers, RemoteWorks ID does not allow the following types of job listings:
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Jobs requiring application or registration fees</li>
          <li>Misleading or unrealistic income claims</li>
          <li>Unofficial communication channels (e.g. WhatsApp, Telegram)</li>
          <li>Requests for personal or sensitive data outside official platforms</li>
        </ul>
        <p className="text-gray-700">
          Kami tidak mengizinkan lowongan yang meminta biaya pendaftaran, menjanjikan penghasilan tidak realistis,
          atau mengarahkan pelamar ke jalur komunikasi tidak resmi.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Disclaimer
        </h2>
        <p className="text-gray-700">
          RemoteWorks ID is not an employer, recruitment agency, or hiring authority.
          We do not process applications or make hiring decisions.
          All applications are handled directly by the hiring company through their official platforms.
        </p>
        <p className="text-gray-700">
          RemoteWorks ID bukan pihak pemberi kerja atau agen rekrutmen.
          Kami tidak memproses lamaran atau mengambil keputusan perekrutan.
          Seluruh proses lamaran dilakukan langsung melalui platform resmi perusahaan terkait.
        </p>
      </section>

      {/* Reporting */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Reporting Suspicious Jobs
        </h2>
        <p className="text-gray-700">
          If you encounter a job listing that appears suspicious or misleading, please report it to us.
        </p>
        <p className="text-gray-700">
          Jika Anda menemukan lowongan yang mencurigakan atau menyesatkan, silakan laporkan kepada kami.
        </p>
        <p className="text-gray-700 font-medium">
          Contact: support@remoteworksid.com
        </p>
      </section>
    </main>
  );
}
