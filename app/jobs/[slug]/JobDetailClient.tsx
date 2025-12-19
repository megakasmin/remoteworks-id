"use client";

import { useState } from "react";
import ApplyRedirectModal from "@/components/apply/ApplyRedirectModal";
import Button from "@/components/ui/Button";
import type { JobDetail } from "@/lib/jobs";

export default function JobDetailClient({ job }: { job: JobDetail }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      {/* Job Header */}
      <div>
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <p className="text-gray-600 mt-1">{job.company}</p>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="bg-gray-100 text-blue-700 px-3 py-1 rounded">
          📍 {job.location}
        </span>
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded">
          {job.type}
        </span>
      </div>

      {/* Description (dummy for now) */}
      <div className="text-gray-700 leading-relaxed">
        <p>
          We are looking for a <strong>{job.title}</strong> to join{" "}
          <strong>{job.company}</strong>. This position is open for{" "}
          <strong>{job.type}</strong> work arrangement.
        </p>
      </div>

      {/* Apply Button */}
      <div>
        <Button onClick={() => setOpen(true)}>Apply Now</Button>
      </div>

      {/* Apply Modal */}
      <ApplyRedirectModal
        open={open}
        onClose={() => setOpen(false)}
        applyUrl={job.applyUrl}
        jobTitle={job.title}
        company={job.company}
      />
    </div>
  );
}
