"use client";

import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  jobTitle: string;
  company: string;
  applyUrl: string;
};

export default function ApplyRedirectModal({
  open,
  onClose,
  jobTitle,
  company,
  applyUrl,
}: Props) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-md w-full p-6 space-y-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">
            You’re leaving RemoteWorks ID
          </h2>
          <p className="text-sm text-gray-500">
            Anda akan diarahkan ke situs eksternal
          </p>
        </div>

        {/* Body */}
        <div className="space-y-3 text-gray-700 text-sm">
          <p>
            You are about to apply for{" "}
            <strong>{jobTitle}</strong> at{" "}
            <strong>{company}</strong>.
          </p>
          <p>
            Your application will be completed on the employer’s official
            website or platform.
          </p>
          <p className="text-gray-500">
            Kami tidak menyimpan data lamaran Anda.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Continue to Apply
          </a>
        </div>
      </div>
    </div>
  );
}
