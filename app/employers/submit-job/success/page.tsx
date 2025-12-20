import Link from "next/link";

export default function SubmitJobSuccessPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <div className="mb-6">
        <span className="inline-block rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm">
          Submission Received
        </span>
      </div>

      <h1 className="text-2xl font-bold mb-4">
        Your job has been successfully submitted
      </h1>

      <p className="text-gray-600 mb-6">
        Thank you for submitting your job listing to RemoteWorks ID.
        Our team will review your submission and notify you once it has been approved.
      </p>

      <p className="text-sm text-gray-500 mb-10">
        Terima kasih telah mengirimkan lowongan Anda.
        Tim kami akan melakukan peninjauan sesuai dengan opsi yang Anda pilih.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/employers/submit-job"
          className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
        >
          Submit Another Job
        </Link>

        <Link
          href="/trust-and-safety"
          className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          Learn About Our Review Process
        </Link>
      </div>
    </main>
  );
}
