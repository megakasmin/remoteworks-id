import Link from "next/link";

export type CardProps = {
  slug: string;
  title: string;
  company: string;
  location?: string;
  type: "Remote" | "Hybrid";
  verified?: boolean;
};

export default function Card({
  slug,
  title,
  company,
  type,
  verified,
}: CardProps) {
  const typeStyle =
    type === "Remote"
      ? "bg-primary-soft text-primary"
      : "bg-purple-100 text-purple-700";

  return (
    <Link href={`/jobs/${slug}`} className="group">
      <div
 className="
    h-full
    rounded-lg
    border border-gray-200/50 dark:border-gray-800
    bg-white dark:bg-[var(--surface)]
    p-5
    shadow-card
    transition-all
    hover:-translate-y-0.5
    hover:shadow-lg
  "
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
<h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Job Type */}
            <span
              className={`text-xs px-2 py-1 rounded-md font-medium ${typeStyle}`}
            >
              {type}
            </span>

            {/* Verified Badge */}
            {verified && (
              <span className="text-xs px-2 py-1 rounded-md bg-green-100 text-green-700 font-medium">
                ✔ Verified
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
