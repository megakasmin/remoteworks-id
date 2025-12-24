export type JobType = "Remote" | "Hybrid";

export type JobDetail = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  applyUrl: string;
  verified?: boolean;
};

export const jobs: JobDetail[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Jakarta",
    type: "Hybrid",
    applyUrl: "https://example.com/apply/frontend",
    verified: true,
  },
  {
    slug: "data-annotator",
    title: "Data Annotator",
    company: "AI Labs",
    location: "Singapore",
    type: "Remote",
    applyUrl: "https://example.com/apply/data-annotator",
    verified: true,
  },

  {
    slug: "backend-engineer",
    title: "Backend Engineer (Node.js)",
    company: "Cloudify",
    location: "Remote – Asia",
    type: "Remote",
    applyUrl: "https://example.com/apply/backend",
    verified: false,
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "Bandung",
    type: "Hybrid",
    applyUrl: "https://example.com/apply/uiux",
    verified: true,
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    company: "SaaS Corp",
    location: "Remote – Global",
    type: "Remote",
    applyUrl: "https://example.com/apply/pm",
    verified: true,
  },
  {
    slug: "mobile-developer",
    title: "Mobile Developer (React Native)",
    company: "AppWorks",
    location: "Yogyakarta",
    type: "Hybrid",
    applyUrl: "https://example.com/apply/mobile",
    verified: true,
  },
  {
    slug: "qa-engineer",
    title: "QA Engineer",
    company: "Fintech ID",
    location: "Remote – Indonesia",
    type: "Remote",
    applyUrl: "https://example.com/apply/qa",
    verified: false,
  },
  {
    slug: "devops-engineer",
    title: "DevOps Engineer",
    company: "InfraCloud",
    location: "Remote – APAC",
    type: "Remote",
    applyUrl: "https://example.com/apply/devops",
    verified: true,
  },
];

export function getJobs() {
  return jobs;
}

export function getJobBySlug(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
