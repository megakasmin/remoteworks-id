import "./globals.css";
import Footer from "@/components/layout/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "RemoteWorks ID — Curated Remote & Hybrid Jobs",
    template: "%s — RemoteWorks ID",
  },
  description:
    "Curated remote and hybrid jobs in tech, data, and digital roles. Reviewed for trust, clarity, and legitimacy.",
  openGraph: {
    title: "RemoteWorks ID",
    description:
      "Curated remote & hybrid jobs you can trust.",
    url: "https://remoteworks-id.vercel.app",
    siteName: "RemoteWorks ID",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "RemoteWorks ID",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RemoteWorks ID",
    description:
      "Curated remote & hybrid jobs you can trust.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
