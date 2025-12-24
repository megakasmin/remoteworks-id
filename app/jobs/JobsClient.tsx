"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import type { JobDetail } from "@/lib/jobs";

export default function JobsClient({ jobs }: { jobs: JobDetail[] }) {
  const [query, setQuery] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto px-6 pt-8 pb-20 space-y-6">
      {/* Search */}
      <input
        placeholder="Search jobs..."
        className="
          w-full border border-gray-200 dark:border-gray-800
          rounded-lg p-3
          bg-white dark:bg-black
          text-gray-900 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Jobs Grid / Empty State */}
      {filteredJobs.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.slug}
              slug={job.slug}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              verified={job.verified}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 space-y-3">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            No jobs found
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search or check back later.
          </p>
        </div>
      )}
    </main>
  );
}
