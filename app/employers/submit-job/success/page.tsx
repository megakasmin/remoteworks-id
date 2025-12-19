export default function SubmitJobSuccessPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-24 text-center space-y-6">
      <h1 className="text-3xl font-bold">Submission Received</h1>

      <p className="text-gray-700">
        Thank you for submitting your job to RemoteWorks ID.
      </p>

      <p className="text-gray-700">
        Our team will review your submission manually. If it meets our
        standards, it will be published.
      </p>

      <p className="text-sm text-gray-500">
        Please note: submission does not guarantee publication.
      </p>
    </main>
  );
}
