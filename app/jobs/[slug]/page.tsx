import { notFound } from "next/navigation";
import { getJobBySlug } from "../../../lib/jobs";
import Button from "../../../components/ui/Button";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500 mb-4">{job.location}</p>

      <span
        className={`inline-block mb-6 text-xs font-medium px-2 py-1 rounded ${
          job.type === "Remote"
            ? "bg-blue-100 text-blue-700"
            : "bg-purple-100 text-purple-700"
        }`}
      >
        {job.type}
      </span>

      <p className="text-gray-700 leading-relaxed mb-8">
        {job.description}
      </p>

      <Button>Apply Now</Button>
    </main>
  );
}
