"use client";

import { useState } from "react";
import ApplyRedirectModal from "@/components/apply/ApplyRedirectModal";
import { Job } from "@/lib/jobs";
import Button from "@/components/ui/Button";

export default function JobDetailClient({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <p className="text-gray-600">{job.company}</p>

        <Button onClick={() => setOpen(true)}>
          Apply Now
        </Button>
      </main>

      <ApplyRedirectModal
        open={open}
        onClose={() => setOpen(false)}
        jobTitle={job.title}
        company={job.company}
        applyUrl={job.applyUrl}
      />
    </>
  );
}
