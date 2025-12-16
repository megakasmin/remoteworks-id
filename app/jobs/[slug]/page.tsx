"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";

type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
};

const jobs: Job[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    company: "RemoteWorks ID",
    location: "Indonesia",
    type: "Remote",
    description: "Build modern UI using React and Tailwind.",
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    company: "Startup Singapore",
    location: "Remote",
    type: "Hybrid",
    description: "Build scalable backend services.",
  },
  {
    slug: "data-annotator",
    title: "Data Annotator",
    company: "Global AI Company",
    location: "Remote",
    type: "Remote",
    description: "Annotate data for AI and machine learning models.",
  },
];

export default function JobDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [showApply, setShowApply] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="p-10 max-w-2xl mx-auto">
      {/* Job Info */}
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600 mt-1">{job.company}</p>

      <div className="mt-4 flex gap-2 text-sm text-gray-700">
        <span>{job.location}</span>
        <span>•</span>
        <span>{job.type}</span>
      </div>

      <p className="mt-6 text-gray-700">{job.description}</p>

      {/* Apply Button */}
      <button
        onClick={() => {
          setShowApply(true);
          setSubmitted(false);
        }}
        className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Apply Now
      </button>

      {/* Apply Modal */}
      {showApply && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            {!submitted ? (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("SUBMITTED");
                  setSubmitted(true);
                }}
              >
                <h2 className="text-xl font-semibold">
                  Apply for {job.title}
                </h2>

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder-gray-400"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder-gray-400"
                />

                <textarea
                  placeholder="Why should we hire you?"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 placeholder-gray-400"
                />

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowApply(false)}
                    className="px-4 py-2 rounded border border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-green-600 mb-2">
                  Application Sent 🎉
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for applying. The employer will contact you if you are shortlisted.
                </p>

                <button
                  onClick={() => {
                    setShowApply(false);
                    setSubmitted(false);
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
