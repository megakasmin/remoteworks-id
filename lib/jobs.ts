export type JobType = "Remote" | "Hybrid";

export type JobDetail = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  applyUrl: string;
  curated?: boolean;
};


export const jobs: JobDetail[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Jakarta",
    type: "Hybrid",
    applyUrl: "https://www.linkedin.com/in/mega-iriantika-kasmin",
    curated: true,
  }, 
  {
    slug: "data-annotator",
    title: "Data Annotator",
    company: "AI Labs",
    location: "Singapura",
    type: "Remote",
    applyUrl: "https://www.linkedin.com/in/mega-iriantika-kasmin",
    curated: true,
  },
];

export function getJobs() {
  return jobs;
}

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
