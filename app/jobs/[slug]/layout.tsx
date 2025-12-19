import type { Metadata } from "next";
import { getJobBySlug } from "@/lib/jobs";

type LayoutProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: LayoutProps
): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return { title: "Job Not Found — RemoteWorks ID" };
  }

  return {
    title: `${job.title} — RemoteWorks ID`,
    description: `Apply for ${job.title} at ${job.company}`,
  };
}

export default function JobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
