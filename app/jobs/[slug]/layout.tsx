import type { Metadata } from "next";
import { getJobBySlug } from "@/lib/jobs";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: LayoutProps
): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found — RemoteWorks ID",
    };
  }

  return {
    title: `${job.title} at ${job.company} — RemoteWorks ID`,
    description: `Apply for ${job.title} (${job.type}) at ${job.company}.`,
  };
}

export default async function JobDetailLayout(
  { children, params }: LayoutProps
) {
  // params HARUS di-await meskipun tidak dipakai
  await params;

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      {children}
    </section>
  );
}
