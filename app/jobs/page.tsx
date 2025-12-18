"use client";

import { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import { getJobs } from "../../lib/jobs";
import type { Job, JobType } from "../../lib/jobs";

function JobCardSkeleton() {
  return (
    <div className="border rounded-xl p-4 animate-pulse space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="h-3 bg-gray-200 rounded w-1/3" />
    </div>
  );
}

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | JobType>("All");
  const [loading, setLoading] = useState(true);

  const jobs: Job[] = getJobs();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "All" ? true : job.type === filter;

    return matchSearch && matchFilter;
  });

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Remote & Hybrid Jobs
      </h1>

      {/* Search & Filter */}
      <div className="flex gap-3 mb-8">
        <input
          type="text"
          placeholder="Search job or company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring"
        />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value as "All" | JobType)
          }
          className="border rounded-lg px-3 py-2"
        >
          <option value="All">All</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Job List */}
      {loading ? (
        <div className="grid gap-4">
          {[...Array(3)].map((_, i) => (
            <JobCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg font-medium">No jobs found</p>
          <p className="text-sm mt-2">
            Try adjusting your search or filter.
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredJobs.map((job) => (
            <Card key={job.slug} {...job} />
          ))}
        </div>
      )}
    </main>
  );
}
