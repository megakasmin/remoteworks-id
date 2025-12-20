import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Employer Pricing — RemoteWorks ID",
  description:
    "Transparent and ethical monetization options for employers on RemoteWorks ID.",
};

export default function PricingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <PricingClient />
    </main>
  );
}
