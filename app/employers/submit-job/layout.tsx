export default function SubmitJobLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-3xl mx-auto py-12">
      {children}
    </section>
  );
}
