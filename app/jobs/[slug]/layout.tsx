import { Metadata } from "next";
import { jobs } from "@/lib/jobs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return {
      title: "Job Not Found — RemoteWorks ID",
    };
  }

  return {
    title: `${job.title} at ${job.company} — RemoteWorks ID`,
  };
}

export default function JobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
