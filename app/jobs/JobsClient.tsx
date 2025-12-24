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
<main className="max-w-6xl mx-auto px-4 pt-16 pb-20 space-y-10">
<div className="mb-8">
<input className="
    w-full
    rounded-lg
    border border-gray-300
    p-4
    bg-black/20
    text-white
    placeholder-gray-400
    focus:outline-none
    focus:ring-2
    focus:ring-primary/30
  "
/>
</div>


<div className="grid md:grid-cols-2 gap-6 mt-4">
        {filteredJobs.map((job) => (
          <Card key={job.slug} {...job} />
        ))}
      </div>
    </main>
  );
}
