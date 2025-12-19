"use client";

import { useState } from "react";
import ApplyRedirectModal from "@/components/apply/ApplyRedirectModal";
import type { JobDetail } from "@/lib/jobs";
import Button from "@/components/ui/Button";

export default function JobDetailClient({ job }: { job: JobDetail }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Apply Now
      </Button>

      <ApplyRedirectModal
        open={open}
        onClose={() => setOpen(false)}
        applyUrl={job.applyUrl}
        jobTitle={job.title}
        company={job.company}
      />
    </>
  );
}
