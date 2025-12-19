import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RemoteWorks ID",
  description: "Curated remote & hybrid jobs in Indonesia and beyond",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
