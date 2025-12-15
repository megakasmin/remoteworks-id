type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search job or company..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-3 py-2 rounded w-full mb-6"
    />
  );
}
