"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/LanguageContext";
import { landingContent } from "@/components/content/landingContent";

export default function HomePage() {
  const { language } = useLanguage();
  const t = landingContent[language];

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t.hero.title}
        </h1>
        <p className="text-gray-500 max-w-3xl mx-auto mb-10">
          {t.hero.desc}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/jobs"
            className="px-8 py-3 rounded-lg bg-white text-black hover:bg-gray-800 transition"
          >
            {t.hero.ctaJobs}
          </Link>
          <Link
            href="/employers/submit-job"
            className="px-8 py-3 rounded-lg bg-white text-black hover:bg-gray-800 transition"
          >
            {t.hero.ctaPost}
          </Link>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="grid sm:grid-cols-3 gap-6 mb-20">
        {t.trustBadges.map((item, idx) => (
          <div key={idx} className="border rounded-xl p-6 text-center">
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* VALUE SECTIONS */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            {t.seekers.title}
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            {t.seekers.points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            {t.employers.title}
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            {t.employers.points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* TRUST NOTE */}
      <section className="text-center">
        <p className="text-xs text-gray-500 max-w-3xl mx-auto">
          {t.trustNote}
        </p>
      </section>
    </main>
  );
}
