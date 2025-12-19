import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Verify Jobs — RemoteWorks ID",
  description:
    "Learn how RemoteWorks ID verifies and curates job listings to ensure they are legitimate, scam-free, and high quality.",
};

export default function VerifyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">How We Verify Jobs</h1>
        <p className="text-lg text-gray-600">
          At <strong>RemoteWorks ID</strong>, we believe job seekers deserve
          transparency, trust, and quality. Every job listed on our platform is
          manually reviewed before publication.
        </p>
      </section>

      {/* Why */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why Verification Matters</h2>
        <p className="text-gray-700">
          Remote work opportunities have grown rapidly — and so have fake job
          postings and recruitment scams. Our goal is to reduce risk and noise
          by offering a curated job discovery experience, not a mass job board.
        </p>
      </section>

      {/* Process */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Verification Process</h2>

        <div className="space-y-4">
          <h3 className="font-semibold">1. Source Validation</h3>
          <p className="text-gray-700">
            We only publish jobs sourced from official company websites,
            verified LinkedIn pages, trusted hiring partners, or direct employer
            submissions reviewed by our team.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">2. Company Legitimacy Check</h3>
          <p className="text-gray-700">
            We verify the company’s online presence, business activity, and
            consistency between the role and the company’s operations.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">3. Role & Content Review</h3>
          <p className="text-gray-700">
            Job descriptions are reviewed to ensure clarity, realistic
            expectations, and the absence of misleading claims or vague offers.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">4. Scam Risk Screening</h3>
          <p className="text-gray-700">
            We actively filter out listings that request payments, sensitive
            personal data, or communication through unofficial channels only.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">5. Curated Publishing</h3>
          <p className="text-gray-700">
            Jobs that pass all checks are marked as{" "}
            <strong>“Curated by RemoteWorks ID”</strong>, meaning they have been
            reviewed by humans — not algorithms.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Important Disclaimer</h2>
        <p className="text-gray-700">
          RemoteWorks ID is not the employer. We encourage candidates to conduct
          their own due diligence and never share sensitive personal or
          financial information.
        </p>
      </section>

      {/* Contact */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Report a Job</h2>
        <p className="text-gray-700">
          If you encounter a suspicious listing, please contact us at:
        </p>
        <p className="font-medium">support@remoteworksid.com</p>
      </section>
    </main>
  );
}
