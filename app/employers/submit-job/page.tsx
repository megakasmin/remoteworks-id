import type { Metadata } from "next";
import SubmitJobClient from "./SubmitJobClient";

export const metadata: Metadata = {
  title: "Submit a Job — RemoteWorks ID",
  description:
    "Submit a remote or hybrid job to RemoteWorks ID. All job submissions are manually reviewed and curated.",
};

export default function SubmitJobPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <SubmitJobClient />
    </main>
  );
}
