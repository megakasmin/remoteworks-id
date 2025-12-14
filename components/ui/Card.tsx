type CardProps = {
  title: string;
  company: string;
  location: string;
  type?: string;
};

export default function Card({
  title,
  company,
  location,
  type = "Remote",
}: CardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow transition">
      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-gray-600">{company}</p>

      <div className="mt-2 flex gap-2 text-sm text-gray-500">
        <span>{location}</span>
        <span>•</span>
        <span>{type}</span>
      </div>
    </div>
  );
}
