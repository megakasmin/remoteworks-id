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
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-6">
      <input
        placeholder="Search jobs..."
        className="w-full border rounded-lg p-3"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <Card key={job.slug} {...job} />
        ))}
      </div>
    </main>
  );
}
