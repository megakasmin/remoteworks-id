import Card from "../../components/ui/Card";
import SearchBar from "../../components/ui/SearchBar";

export default function JobsPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Remote Jobs</h1>
      <SearchBar />

      <div className="grid gap-4">
<Card
  title="Frontend Developer"
  company="RemoteWorks ID"
  location="Indonesia"
  type="Remote"
/>
<Card
  title="Backend Engineer"
  company="Startup Singapore"
  location="Remote"
  type="Hybrid"
/>
<Card
  title="Data Annotator"
  company="Global AI Company"
  location="Remote"
  type="Remote"
/>
      </div>
    </main>
  );
}
