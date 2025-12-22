"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageToggle from "@/components/LanguageToggle";

export default function Header() {
  const pathname = usePathname();

  // Optional: pages with dark background
  const darkPages = ["/"];
  const isDark = darkPages.includes(pathname);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-16 flex items-center">
<Image
  src="/test3.png"
  alt="RemoteWorks ID"
  width={100}
  height={100}
  priority
/>
<span className="font-semibold text-xl leading-none">
  RemoteWorks ID
</span>

            </div>
          </Link>

          

          {/* Menu + Language */}
          <div className="flex items-center gap-6">
            <nav
              className={`flex items-center gap-6 text-sm font-medium ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              <Link href="/jobs" className="hover:opacity-80">
                Jobs
              </Link>
              <Link
                href="/employers/submit-job"
                className="hover:opacity-80"
              >
                Post a Job
              </Link>
              <Link href="/verify" className="hover:opacity-80">
                Verify
              </Link>
            </nav>

            <div className={isDark ? "text-white" : "text-gray-800"}>
  <LanguageToggle language={"id"} onChange={function (lang: "id" | "en"): void {
                              throw new Error("Function not implemented.");
                          } } />
</div>

          </div>
        </div>
      </div>
    </header>
  );
}
