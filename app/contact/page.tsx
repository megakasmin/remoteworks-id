"use client";

import { useLanguage } from "@/components/language/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Contact Us",
      intro:
        "Have questions, feedback, or partnership inquiries? We’d be happy to hear from you.",

      sections: [
        {
          title: "General Inquiries",
          body:
            "For general questions about the platform, job listings, or how RemoteWorks ID works.",
        },
        {
          title: "Employers & Partnerships",
          body:
            "If you represent a company and would like to submit a job or explore collaboration opportunities.",
        },
        {
          title: "Trust & Safety",
          body:
            "To report suspicious job listings or raise trust-related concerns.",
        },
      ],

      note:
        "Please include relevant details in your message so we can respond effectively.",
    },

    id: {
      title: "Hubungi Kami",
      intro:
        "Punya pertanyaan, masukan, atau ingin bekerja sama? Kami siap mendengar dari Anda.",

      sections: [
        {
          title: "Pertanyaan Umum",
          body:
            "Untuk pertanyaan seputar platform, lowongan, atau cara kerja RemoteWorks ID.",
        },
        {
          title: "Perusahaan & Kerja Sama",
          body:
            "Jika Anda mewakili perusahaan dan ingin mengirim lowongan atau menjajaki kolaborasi.",
        },
        {
          title: "Trust & Safety",
          body:
            "Untuk melaporkan lowongan mencurigakan atau menyampaikan isu kepercayaan.",
        },
      ],

      note:
        "Mohon sertakan informasi yang relevan agar kami dapat merespons dengan lebih efektif.",
    },
  };

  const t = content[language];

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold mb-6">{t.title}</h1>
      <p className="text-gray-600 mb-10">{t.intro}</p>

      <div className="space-y-8 mb-12">
        {t.sections.map((s, i) => (
          <section key={i}>
            <h2 className="font-semibold mb-2">{s.title}</h2>
            <p className="text-gray-600 text-sm">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="border rounded-xl p-6 text-sm text-gray-600">
        <p className="mb-2">
          Email:
          <span className="ml-2 font-medium text-gray-900">
            contact@remoteworksid.com
          </span>
        </p>
        <p className="text-xs">{t.note}</p>
      </div>
    </main>
  );
}
