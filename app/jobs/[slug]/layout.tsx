import type { Metadata } from "next";
import type { ReactNode } from "react";

type JobSEO = {
  slug: string;
  title: string;
  description: string;
};

const jobsSEO: JobSEO[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    description: "Apply for Frontend Developer position at RemoteWorks ID.",
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    description: "Backend Engineer role for scalable services.",
  },
  {
    slug: "data-annotator",
    title: "Data Annotator",
    description: "Remote Data Annotator position for AI projects.",
  },
];

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;

  const job = jobsSEO.find((j) => j.slug === slug);

  if (!job) {
    return {
      title: "Job Not Found — RemoteWorks ID",
    };
  }

  return {
    title: `${job.title} — RemoteWorks ID`,
    description: job.description,
  };
}

export default function JobDetailLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
