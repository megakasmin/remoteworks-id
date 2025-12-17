export type JobType = "Remote" | "Hybrid";

export type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  description: string;
};

export const jobs: Job[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Remote",
    type: "Remote",
    description:
      "We are looking for a Frontend Developer to build modern, responsive web interfaces using React and Next.js.",
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    company: "Startup Inc",
    location: "Jakarta",
    type: "Hybrid",
    description:
      "Join our backend team to build scalable APIs and services using modern backend technologies.",
  },
  {
    slug: "data-annotator",
    title: "Data Annotator",
    company: "AI Labs",
    location: "Remote",
    type: "Remote",
    description:
      "Work on AI and machine learning projects by annotating and validating datasets remotely.",
  },
];

/**
 * Helper: get all jobs
 */
export function getJobs() {
  return jobs;
}

/**
 * Helper: get job by slug
 */
export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
