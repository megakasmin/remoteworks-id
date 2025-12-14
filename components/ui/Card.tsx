type CardProps = {
  title: string;
  company: string;
  location: string;
  type?: "Remote" | "Hybrid" | "Onsite";
};

export default function Card({
  title,
  company,
  location,
  type = "Remote",
}: CardProps) {
  const badgeColor = {
    Remote: "bg-green-100 text-green-700",
    Hybrid: "bg-yellow-100 text-yellow-700",
    Onsite: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="border rounded-lg p-4 hover:shadow transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{company}</p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded ${badgeColor[type]}`}
        >
          {type}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-500">{location}</p>
    </div>
  );
}
