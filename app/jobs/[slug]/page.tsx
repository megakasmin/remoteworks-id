import { notFound } from "next/navigation";

type JobType = "Remote" | "Hybrid" | "Onsite";

type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
};

const jobs: Job[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    company: "RemoteWorks ID",
    location: "Indonesia",
    type: "Remote",
    description: "Build modern UI using React and Tailwind.",
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    company: "Startup Singapore",
    location: "Remote",
    type: "Hybrid",
    description: "Build scalable backend services.",
  },
  {
    slug: "data-annotator",
    title: "Data Annotator",
    company: "Global AI Company",
    location: "Remote",
    type: "Remote",
    description: "Annotate data for AI and machine learning models.",
  },
];

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

  return (
    <main className="p-10 max-w-2xl">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600 mt-1">{job.company}</p>

      <div className="mt-4 flex gap-2 text-sm">
        <span>{job.location}</span>
        <span>•</span>
        <span>{job.type}</span>
      </div>

      <p className="mt-6 text-gray-700">{job.description}</p>
    </main>
  );
}
