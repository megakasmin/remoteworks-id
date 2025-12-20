import type { Metadata } from "next";

export const metadata = {
  title: "Remote & Hybrid Jobs — RemoteWorks ID",
  description:
    "Browse remote and hybrid job opportunities in tech, data, and digital roles.",
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
