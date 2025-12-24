"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import type { JobDetail } from "@/lib/jobs";

export default function JobsClient({ jobs }: { jobs: JobDetail[] }) {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] =
    useState<"All" | "Remote" | "Hybrid">("All");

  const filteredJobs = jobs.filter((job) => {
    const search = query.toLowerCase();

    const matchQuery =
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search);

    const matchType =
      typeFilter === "All" ? true : job.type === typeFilter;

    return matchQuery && matchType;
  });

  return (
  <main
  className="
    max-w-6xl mx-auto px-6 pt-8 pb-32 space-y-6
    min-h-[calc(100vh-80px)]
    bg-transparent
  "
>

      {/* Search */}
      <input
        placeholder="Search jobs, company, or location..."
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

      {/* Filter */}
      <div className="flex items-center gap-2">
        {["All", "Remote", "Hybrid"].map((type) => {
          const isActive = typeFilter === type;

          return (
            <button
              key={type}
              onClick={() =>
                setTypeFilter(type as "All" | "Remote" | "Hybrid")
              }
              className={`
                px-4 py-1.5 rounded-full text-sm font-medium transition
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              {type}
            </button>
          );
        })}
      </div>

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
            Try searching by job title, company, or location.
          </p>
        </div>
      )}
    </main>
  );
}
