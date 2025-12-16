import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export const metadata = {
  title: "RemoteWorks ID — Find Remote & Hybrid Jobs",
  description:
    "RemoteWorks ID helps you find remote and hybrid job opportunities from Indonesia and global companies.",
};

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">RemoteWorks ID</h1>

      <p className="mt-4 text-gray-600">
        Platform job remote & hybrid untuk talenta Indonesia.
      </p>

      <div className="mt-6 flex gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
      </div>

         <div className="mt-10 grid gap-4">
       <Card
  slug="frontend-developer"
  title="Frontend Developer"
  company="RemoteWorks ID"
  location="Indonesia"
  type="Remote"
/>
<Card
  slug="frontend-developer"
  title="Frontend Developer"
  company="RemoteWorks ID"
  location="Indonesia"
  type="Remote"
/>
<Card
  slug="frontend-developer"
  title="Frontend Developer"
  company="RemoteWorks ID"
  location="Indonesia"
  type="Remote"
/>
      </div>

    </main>
  );
}
