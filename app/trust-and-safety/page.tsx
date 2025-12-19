import type { Metadata } from "next";
import TrustSafetyClient from "./TrustSafetyClient";

export const metadata: Metadata = {
  title: "Trust & Safety — RemoteWorks ID",
  description:
    "Learn how RemoteWorks ID protects users and promotes a safe, scam-free job discovery experience.",
};

export default function TrustSafetyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <TrustSafetyClient
        en={
          <section className="space-y-10">
            <h1 className="text-4xl font-bold">Trust & Safety</h1>

            <p>
              RemoteWorks ID is committed to providing a safe and transparent job
              discovery experience.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>No application fees</li>
              <li>No requests for sensitive personal data</li>
              <li>Communication via official company channels only</li>
            </ul>

            <p>
              Report suspicious listings to{" "}
              <strong>support@remoteworksid.com</strong>.
            </p>

            <p className="text-sm text-gray-600">
              RemoteWorks ID is not an employer and does not guarantee hiring
              outcomes.
            </p>
          </section>
        }
        id={
          <section className="space-y-10">
            <h1 className="text-4xl font-bold">Keamanan & Kepercayaan</h1>

            <p>
              RemoteWorks ID berkomitmen menyediakan pengalaman pencarian kerja
              yang aman dan transparan.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Tidak ada biaya melamar</li>
              <li>Tidak meminta data pribadi sensitif</li>
              <li>Gunakan saluran resmi perusahaan</li>
            </ul>

            <p>
              Laporkan lowongan mencurigakan ke{" "}
              <strong>support@remoteworksid.com</strong>.
            </p>

            <p className="text-sm text-gray-600">
              RemoteWorks ID bukan pihak pemberi kerja dan tidak menjamin hasil
              perekrutan.
            </p>
          </section>
        }
      />
    </main>
  );
}
