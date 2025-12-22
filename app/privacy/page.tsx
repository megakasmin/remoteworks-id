"use client";

import { useLanguage } from "@/components/language/LanguageContext";

export default function PrivacyPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      intro:
        "RemoteWorks ID values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.",

      sections: [
        {
          title: "Information We Collect",
          body:
            "We may collect basic information such as your name, email address, and any details you voluntarily provide when submitting a job or contacting us.",
        },
        {
          title: "How We Use Information",
          body:
            "Information is used to operate and improve the platform, review job submissions, communicate with users, and maintain platform safety.",
        },
        {
          title: "Job Listings & Employers",
          body:
            "Job information submitted by employers may be reviewed internally before being published. We do not guarantee job availability or hiring outcomes.",
        },
        {
          title: "Cookies & Analytics",
          body:
            "We may use cookies or analytics tools to understand how the platform is used and improve user experience.",
        },
        {
          title: "Data Protection",
          body:
            "We take reasonable steps to protect your information but cannot guarantee absolute security of data transmitted online.",
        },
        {
          title: "Policy Updates",
          body:
            "This Privacy Policy may be updated from time to time. Continued use of the platform indicates acceptance of any changes.",
        },
      ],
    },

    id: {
      title: "Kebijakan Privasi",
      intro:
        "RemoteWorks ID menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.",

      sections: [
        {
          title: "Informasi yang Kami Kumpulkan",
          body:
            "Kami dapat mengumpulkan informasi dasar seperti nama, alamat email, serta data yang Anda berikan secara sukarela saat mengirim lowongan atau menghubungi kami.",
        },
        {
          title: "Penggunaan Informasi",
          body:
            "Informasi digunakan untuk mengoperasikan dan meningkatkan platform, meninjau lowongan, berkomunikasi dengan pengguna, serta menjaga keamanan platform.",
        },
        {
          title: "Lowongan & Perusahaan",
          body:
            "Informasi lowongan dari perusahaan dapat ditinjau secara internal sebelum dipublikasikan. Kami tidak menjamin ketersediaan lowongan atau hasil perekrutan.",
        },
        {
          title: "Cookie & Analitik",
          body:
            "Kami dapat menggunakan cookie atau alat analitik untuk memahami penggunaan platform dan meningkatkan pengalaman pengguna.",
        },
        {
          title: "Perlindungan Data",
          body:
            "Kami mengambil langkah wajar untuk melindungi data Anda, namun tidak dapat menjamin keamanan absolut atas data yang dikirimkan secara online.",
        },
        {
          title: "Perubahan Kebijakan",
          body:
            "Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu. Penggunaan berkelanjutan menandakan persetujuan terhadap perubahan tersebut.",
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
