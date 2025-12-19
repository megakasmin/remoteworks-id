import { notFound } from "next/navigation";
import { getJobBySlug } from "@/lib/jobs";
import JobDetailClient from "./JobDetailClient";

export const dynamic = "force-dynamic";

export default function JobDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      {/* JOB CONTENT */}
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="mt-2 text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">
        {job.location} • {job.type}
      </p>

      <div className="mt-6 prose">
        <p>
          This is a curated job opportunity at <strong>{job.company}</strong>.
          Please review the details and apply directly on the company website.
        </p>
      </div>

      {/* APPLY BUTTON (CLIENT) */}
      <div className="mt-8">
        <JobDetailClient job={job} />
      </div>
    </main>
  );
}
