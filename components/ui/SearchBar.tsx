export default function SearchBar() {
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Search job or company..."
        className="border px-3 py-2 rounded w-full"
      />
      <button className="px-4 py-2 rounded bg-blue-600 text-white">
        Search
      </button>
    </div>
  );
}
