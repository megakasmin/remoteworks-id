import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "@/components/language/LanguageContext";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          
          <main className="pt-20">
            {children}
          </main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

