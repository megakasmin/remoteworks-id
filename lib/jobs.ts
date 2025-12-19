export type JobDetail = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: string;
  applyUrl: string;
};

export const jobs: JobDetail[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Jakarta / Remote",
    type: "Hybrid",
    applyUrl: "https://example.com/apply/frontend",
  },
  {
    slug: "data-annotator",
    title: "Data Annotator",
    company: "AI Labs",
    location: "Remote",
    type: "Remote",
    applyUrl: "https://example.com/apply/data-annotator",
  },
];
