"use client";

import { useState } from "react";
import Card from "../../components/ui/Card";
import SearchBar from "../../components/ui/SearchBar";


type JobType = "Remote" | "Hybrid" | "Onsite";

type Job = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
};

const jobs: Job[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    company: "RemoteWorks ID",
    location: "Indonesia",
    type: "Remote",
  },
  {
    slug: "backend-engineer",
    title: "Backend Engineer",
    company: "Startup Singapore",
    location: "Remote",
    type: "Hybrid",
  },
  {
    slug: "data-annotator",
    title: "Data Annotator",
    company: "Global AI Company",
    location: "Remote",
    type: "Remote",
  },
];


export default function JobsPage() {
  // ✅ SEMUA HOOKS HARUS DI SINI
  const [filter, setFilter] = useState<"All" | JobType>("All");
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchType = filter === "All" || job.type === filter;
    const matchSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    return matchType && matchSearch;
  });

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Remote Jobs</h1>

      <SearchBar value={search} onChange={setSearch} />

      <div className="flex gap-2 mb-6">
        {["All", "Remote", "Hybrid"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item as "All" | JobType)}
            className={`px-3 py-1 rounded border ${
              filter === item
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filteredJobs.length === 0 ? (
  <div className="text-center py-20 text-gray-500">
    <p className="text-lg font-medium">No jobs found</p>
    <p className="text-sm mt-2">
      Try adjusting your search or filter.
    </p>
  </div>
) : (
  filteredJobs.map((job) => (
    <Card key={job.slug} {...job} />
  ))
)}
      </div>
    </main>
  );
}
