import type { Metadata } from "next";
import { getJobBySlug } from "@/lib/jobs";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const job = getJobBySlug(params.slug);

  if (!job) {
    return {
      title: "Job - RemoteWorks ID",
    };
  }

  return {
    title: `${job.title} at ${job.company} — RemoteWorks ID`,
    description: `Apply for ${job.title} (${job.type}) at ${job.company}.`,
  };
}

export default function JobDetailLayout({ children }: Props) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      {children}
    </section>
  );
}
