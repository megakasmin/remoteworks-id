import { notFound } from "next/navigation";
import { getJobBySlug } from "@/lib/jobs";
import JobDetailClient from "./JobDetailClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return <JobDetailClient job={job} />;
}
