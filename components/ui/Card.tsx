import Link from "next/link";

export type CardProps = {
  slug: string;
  title: string;
  company: string;
  location: string;
  type: "Remote" | "Hybrid";
};

export default function Card({
  slug,
  title,
  company,
  location,
  type,
}: CardProps) {
  const badgeStyle =
    type === "Remote"
      ? "bg-blue-100 text-blue-700"
      : "bg-purple-100 text-purple-700";

  return (
    <Link href={`/jobs/${slug}`}>
      <div className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">{company}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>

          {/* Badge */}
          <span
            className={`text-xs font-medium px-2 py-1 rounded ${badgeStyle}`}
          >
            {type}
          </span>
        </div>
      </div>
    </Link>
  );
}
