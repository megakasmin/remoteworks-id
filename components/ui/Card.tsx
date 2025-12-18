import Link from "next/link";

export type CardProps = {
  slug: string;
  title: string;
  company: string;
  location: string;
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
  const badgeStyle =
    type === "Remote"
      ? "bg-blue-100 text-blue-700"
      : "bg-purple-100 text-purple-700";

  return (
    <Link href={`/jobs/${slug}`}>
      <div className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer">
        {/* Header */}
<div className="flex items-start justify-between">
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-500">{company}</p>
  </div>

  <div className="flex items-center gap-2">
    {/* Job Type */}
    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
      {type}
    </span>

    {/* Verified Badge */}
    {verified && (
      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
        Verified
      </span>
    )}
  </div>
</div>

      </div>
    </Link>
  );
}
