import { jobs } from "@/lib/jobs";
import JobsClient from "./JobsClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Remote & Hybrid Jobs",
  description: "Browse curated remote and hybrid job opportunities.",
};

export default function JobsPage() {
  return (
    <section className="min-h-[calc(100vh-80px)]">
      <JobsClient jobs={jobs} />
    </section>
  );
}
