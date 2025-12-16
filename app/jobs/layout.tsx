import type { ReactNode } from "react";

export const metadata = {
  title: "Remote & Hybrid Jobs — RemoteWorks ID",
  description:
    "Browse remote and hybrid job opportunities in tech, data, and digital roles.",
};

export default function JobsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
