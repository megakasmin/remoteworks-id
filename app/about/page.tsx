"use client";

import { useLanguage } from "@/components/language/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About RemoteWorks ID",
      intro:
        "RemoteWorks ID is a curated platform focused on remote and hybrid job opportunities, built with trust, clarity, and quality in mind.",

      sections: [
        {
          title: "Why RemoteWorks ID",
          body:
            "Many job platforms prioritize quantity over quality. RemoteWorks ID exists to reduce noise, misleading listings, and low-quality postings by applying a manual review process.",
        },
        {
          title: "Our Approach",
          body:
            "We focus on remote and hybrid roles only. Every job submission is reviewed before being published to help job seekers browse with confidence.",
        },
        {
          title: "What We Are (and Aren’t)",
          body:
            "RemoteWorks ID is an information platform. We are not a recruitment agency, employer, or hiring intermediary.",
        },
        {
          title: "Trust & Safety",
          body:
            "Trust is our foundation. Review processes are designed to reduce scams and misleading postings, while maintaining fairness for employers.",
        },
      ],
    },

    id: {
      title: "Tentang RemoteWorks ID",
      intro:
        "RemoteWorks ID adalah platform kurasi lowongan remote dan hybrid yang dibangun dengan fokus pada kepercayaan, kejelasan, dan kualitas.",

      sections: [
        {
          title: "Mengapa RemoteWorks ID",
          body:
            "Banyak platform lowongan mengejar kuantitas. RemoteWorks ID hadir untuk mengurangi noise, lowongan menyesatkan, dan posting berkualitas rendah melalui proses peninjauan manual.",
        },
        {
          title: "Pendekatan Kami",
          body:
            "Kami hanya berfokus pada lowongan remote dan hybrid. Setiap lowongan ditinjau sebelum dipublikasikan agar pencari kerja dapat mencari dengan lebih percaya diri.",
        },
        {
          title: "Apa yang Kami Lakukan (dan Tidak)",
          body:
            "RemoteWorks ID adalah platform informasi. Kami bukan agen rekrutmen, perusahaan, atau perantara perekrutan.",
        },
        {
          title: "Trust & Safety",
          body:
            "Kepercayaan adalah fondasi kami. Proses kurasi dirancang untuk mengurangi risiko penipuan tanpa mengorbankan keadilan bagi perusahaan.",
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
