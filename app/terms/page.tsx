"use client";

import { useLanguage } from "@/components/language/LanguageContext";

export default function TermsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      intro:
        "By using RemoteWorks ID, you agree to the following terms and conditions. Please read them carefully.",

      sections: [
        {
          title: "Platform Purpose",
          body:
            "RemoteWorks ID provides curated information about remote and hybrid job opportunities. We do not act as an employer, recruiter, or hiring agent.",
        },
        {
          title: "Job Listings",
          body:
            "All job listings are submitted by third parties and may be reviewed before publication. We do not guarantee job accuracy, availability, or hiring outcomes.",
        },
        {
          title: "Employer Responsibility",
          body:
            "Employers are responsible for the accuracy and legitimacy of the jobs they submit. Priority review affects review speed, not approval outcome.",
        },
        {
          title: "User Responsibility",
          body:
            "Users are responsible for verifying job details independently before applying. RemoteWorks ID is not liable for losses resulting from job applications.",
        },
        {
          title: "Intellectual Property",
          body:
            "All content and branding on this platform belong to RemoteWorks ID and may not be reused without permission.",
        },
        {
          title: "Changes to Terms",
          body:
            "We may update these Terms at any time. Continued use of the platform constitutes acceptance of updated terms.",
        },
      ],
    },

    id: {
      title: "Syarat & Ketentuan",
      intro:
        "Dengan menggunakan RemoteWorks ID, Anda menyetujui syarat dan ketentuan berikut. Harap membaca dengan saksama.",

      sections: [
        {
          title: "Tujuan Platform",
          body:
            "RemoteWorks ID menyediakan informasi lowongan remote dan hybrid yang dikurasi. Kami bukan perusahaan perekrutan atau agen penyalur kerja.",
        },
        {
          title: "Lowongan Kerja",
          body:
            "Seluruh lowongan dikirimkan oleh pihak ketiga dan dapat ditinjau sebelum dipublikasikan. Kami tidak menjamin keakuratan atau hasil perekrutan.",
        },
        {
          title: "Tanggung Jawab Perusahaan",
          body:
            "Perusahaan bertanggung jawab atas keakuratan dan keabsahan lowongan. Priority review hanya memengaruhi kecepatan peninjauan.",
        },
        {
          title: "Tanggung Jawab Pengguna",
          body:
            "Pengguna bertanggung jawab untuk memverifikasi detail lowongan secara mandiri sebelum melamar. RemoteWorks ID tidak bertanggung jawab atas kerugian.",
        },
        {
          title: "Hak Kekayaan Intelektual",
          body:
            "Seluruh konten dan identitas visual adalah milik RemoteWorks ID dan tidak boleh digunakan tanpa izin.",
        },
        {
          title: "Perubahan Ketentuan",
          body:
            "Kami dapat memperbarui Syarat & Ketentuan ini kapan saja. Penggunaan berkelanjutan berarti persetujuan atas perubahan tersebut.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold mb-6">{t.title}</h1>
      <p className="text-gray-600 mb-10">{t.intro}</p>

      <div className="space-y-8">
        {t.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-semibold mb-2">{s.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {s.body}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
