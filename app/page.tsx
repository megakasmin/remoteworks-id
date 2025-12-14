import Button from "../components/ui/Button";

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

    </main>
  );
}
