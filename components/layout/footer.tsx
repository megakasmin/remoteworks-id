"use client";

import Link from "next/link";

export default function Footer({ lang = "en" }: { lang?: "en" | "id" }) {
  const isEN = lang === "en";

  return (
    <footer className="border-t mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm text-gray-600">

        {/* BRAND */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">
            RemoteWorks ID
          </h3>
          <p>
            {isEN
              ? "Curated remote & hybrid jobs you can trust."
              : "Lowongan remote & hybrid terkurasi yang bisa dipercaya."}
          </p>
        </div>

        {/* JOB SEEKERS */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            {isEN ? "Job Seekers" : "Pencari Kerja"}
          </h4>
          <ul className="space-y-1">
            <li><Link href="/jobs">Browse Jobs</Link></li>
            <li><Link href="/verify">Verified Jobs</Link></li>
            <li><Link href="/trust-safety">Trust & Safety</Link></li>
          </ul>
        </div>

        {/* EMPLOYERS */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            {isEN ? "Employers" : "Perusahaan"}
          </h4>
          <ul className="space-y-1">
            <li><Link href="employers/submit-job">Submit a Job</Link></li>
            <li><Link href="/employers">Employer Options</Link></li>
            <li><Link href="/verify">Verification</Link></li>
          </ul>
        </div>

        {/* TRUST */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">
            {isEN ? "Trust" : "Kepercayaan"}
          </h4>
          <ul className="space-y-1">
            <li><Link href="/trust-safety">Trust & Safety</Link></li>
            <li><Link href="/verify">How We Verify</Link></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()} RemoteWorks ID. All rights reserved.
      </div>
    </footer>
  );
}
