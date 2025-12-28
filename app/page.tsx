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
<section className="pt-20 pb-16 text-center justify-center">

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {t.hero.title}
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          {t.hero.desc}
        </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center">
  {/* PRIMARY CTA */}
<Link
  href="/jobs"
  className="
    px-8 py-3 rounded-lg
    bg-white text-gray-900
    shadow-sm
    hover:shadow-md
    transition
    font-medium
  "
>
  {t.hero.ctaJobs}
</Link>


  {/* SECONDARY CTA */}
<Link
  href="/trust-and-safety"
  className="
    px-8 py-3 rounded-lg
    border border-gray-300
    text-gray-700
    hover:bg-gray-50
    transition
    font-medium
  "
>
  {t.hero.ctaPost}
</Link>

</div>

      </section>
      

{/* SUPPORTING TRUST POINTS */}
<section className="pt-16 pb-24 justify-center">

  <ul
    className="
      grid
      gap-x-12 gap-y-8
      sm:grid-cols-3
      text-sm
    "
  >
    {t.trustBadges.map((item, idx) => (
      <li key={idx}>
        <h3 className="text-white font-medium mb-2">
          {item.title}
        </h3>
        <p className="text-gray-500 leading-relaxed">
          {item.desc}
        </p>
      </li>
    ))}
  </ul>
</section>



{/* WHY REMOTEWORKS */}
<section className="max-w-3xl mx-auto text-center mb-24">
  <h2 className="text-2xl font-semibold mb-4">
    {t.why.title}
  </h2>
  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
    {t.why.desc}
  </p>
</section>

{/* VERIFICATION PROCESS */}
<section className="mb-24">
  <h2 className="text-2xl font-semibold text-center mb-12">
    {t.verification.title}
  </h2>

  <div className="grid md:grid-cols-4 gap-6">
    {t.verification.steps.map((step, idx) => (
      <div
        key={idx}
        className="rounded-xl p-6 bg-gray-50 dark:bg-gray-900"
      >
        <div className="text-sm font-semibold mb-2">
          {idx + 1}. {step.title}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {step.desc}
        </p>
      </div>
    ))}
  </div>
<div className="text-center mt-6">
  <Link
    href="/trust-and-safety"
    className="text-sm font-medium text-blue-600 hover:underline"
  >
    Learn more about Trust & Safety →
  </Link>
</div>
</section>

{/* HUMAN REVIEW NOTE */}
<section className="mt-12 mb-32 border-t pt-8">
  <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto">
    {t.humanReviewNote}
  </p>
</section>


      {/* VALUE SECTIONS */}
      <section className="grid md:grid-cols-2 gap-10 mb-20">
<div className="rounded-xl p-6 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-xl font-semibold mb-4">
            {t.seekers.title}
          </h2>
<ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            {t.seekers.points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>

<Link
  href="/jobs"
  className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
>
  Browse verified jobs →
</Link>

        </div>

<div className="rounded-xl p-6 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-xl font-semibold mb-4">
            {t.employers.title}
          </h2>
<ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            {t.employers.points.map((p, i) => (
              <li key={i}>• {p}</li>
            ))}
          </ul>

<Link
  href="/employers/submit-job"
  className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
>
  Submit a job →
</Link>


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
