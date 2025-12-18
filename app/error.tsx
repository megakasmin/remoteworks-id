"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-bold">
          Something went wrong
        </h1>

        <p className="text-gray-600">
          An unexpected error occurred. Please try again or return to the homepage.
        </p>

        <p className="text-sm text-gray-500">
          Terjadi kesalahan yang tidak terduga. Silakan muat ulang halaman atau kembali ke beranda.
        </p>

        <div className="flex justify-center gap-3 pt-4">
          <button
            onClick={() => reset()}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Try Again
          </button>

          <a
            href="/"
            className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100 transition"
          >
            Go Home
          </a>
        </div>
      </div>
    </main>
  );
}
