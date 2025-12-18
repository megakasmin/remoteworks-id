import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "RemoteWorks ID — Curated Remote & Hybrid Jobs",
    template: "%s — RemoteWorks ID",
  },
  description:
    "Discover curated remote and hybrid job opportunities in tech, data, and digital roles. Scam-free, verified listings.",
  metadataBase: new URL("https://remoteworks-id.vercel.app"),
  openGraph: {
    title: "RemoteWorks ID",
    description:
      "Curated remote and hybrid job opportunities. Verified listings, no scams.",
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
      "Curated remote and hybrid job opportunities. Verified listings, no scams.",
    images: ["/og.png"],
  },
};
