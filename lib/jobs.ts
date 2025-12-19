export type JobType = "Remote" | "Hybrid";

export type JobDetail = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  applyUrl: string;
};


export const jobs: JobDetail[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Jakarta / Remote",
    type: "Hybrid",
    applyUrl: "https://www.linkedin.com/in/mega-iriantika-kasmin",
  }, 
  {
    slug: "data-annotator",
    title: "Data Annotator",
    company: "AI Labs",
    location: "Remote",
    type: "Remote",
    applyUrl: "https://www.linkedin.com/in/mega-iriantika-kasmin",
  },
];

export function getJobs() {
  return jobs;
}

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
