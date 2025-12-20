import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-28">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Curated Remote & Hybrid Jobs <br />
          You Can Trust
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover handpicked remote and hybrid opportunities in tech, data,
          and digital roles — reviewed for legitimacy, clarity, and quality.
        </p>

        <div className="flex justify-center gap-4">
          <Button href="/jobs">Browse Jobs</Button>
          <Button href="/submit-job" variant="secondary">
            Submit a Job
          </Button>
        </div>
      </section>

      {/* WHY */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Curated, Not Crawled",
            desc: "Every job is reviewed by humans, not scraped by bots.",
          },
          {
            title: "Trust & Safety First",
            desc: "We apply internal checks to reduce scams and low-quality listings.",
          },
          {
            title: "Clear Apply Flow",
            desc: "No fake apply buttons. Apply directly on official employer sites.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="border rounded-xl p-6 space-y-2"
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* TRUST & VERIFY */}
      <section className="bg-gray-50 rounded-2xl p-10 space-y-6">
        <h2 className="text-2xl font-semibold">
          Trust & Verified Listings
        </h2>

        <p className="text-gray-600 max-w-3xl">
          Job scams are real. That’s why RemoteWorks ID applies internal
          checks before publishing jobs. Some listings go through additional
          verification for higher confidence.
        </p>

        <div className="flex gap-4">
          <Button href="/trust-and-safety" variant="secondary">
            Trust & Safety
          </Button>
          <Button href="/verify" variant="secondary">
            Verification Process
          </Button>
        </div>
      </section>

      {/* FOR JOB SEEKERS */}
      <section className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
  <div className="space-y-4 p-6 border rounded-xl">
    <h2 className="text-2xl font-semibold">For Job Seekers</h2>
    <ul className="space-y-2 text-gray-600">
      <li>• Browse remote & hybrid roles</li>
      <li>• No account required</li>
      <li>• No misleading apply buttons</li>
      <li>• Clear job type labeling</li>
    </ul>
  </div>

  <div className="space-y-4 p-6 border rounded-xl">
    <h2 className="text-2xl font-semibold">For Employers</h2>
    <ul className="space-y-2 text-gray-600">
      <li>• Reach focused candidates</li>
      <li>• Manual review for all submissions</li>
      <li>• Priority review options available</li>
      <li>• Optional visibility & trust signals</li>
    </ul>
  </div>
</section>


      {/* CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">
          Built for the Long Term
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          RemoteWorks ID is not a mass listing site. It’s a curated discovery
          layer for serious job seekers and employers.
        </p>

        <Button href="/jobs">Explore Opportunities</Button>
      </section>
    </main>
  );
}
