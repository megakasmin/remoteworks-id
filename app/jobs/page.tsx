import Card from "../../components/ui/Card";

export default function JobsPage() {
  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-6">Remote Jobs</h1>

      <div className="grid gap-4">
        <Card
          title="Frontend Developer"
          company="RemoteWorks ID"
          location="Indonesia"
        />
        <Card
          title="Backend Engineer"
          company="Startup Singapore"
          location="Remote"
        />
        <Card
          title="Data Annotator"
          company="Global AI Company"
          location="Remote"
        />
      </div>
    </main>
  );
}
