export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { jobs } from "@/lib/jobs";
import JobDetailClient from "./JobDetailClient";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
