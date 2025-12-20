import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "RemoteWorks ID — Curated Remote & Hybrid Jobs",
    template: "%s | RemoteWorks ID",
  },
  description:
    "Curated remote and hybrid job opportunities with a trust-first review process for job seekers and employers.",
  metadataBase: new URL("https://remoteworks-id.vercel.app"),
  openGraph: {
    title: "RemoteWorks ID",
    description:
      "Find curated remote & hybrid jobs. Employers can post trusted listings reviewed by our team.",
    url: "https://remoteworks-id.vercel.app",
    siteName: "RemoteWorks ID",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "RemoteWorks ID — Curated Remote & Hybrid Jobs",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RemoteWorks ID",
    description:
      "Curated remote & hybrid job platform with a trust-first approach.",
    images: ["/og.png"],
  },
};
