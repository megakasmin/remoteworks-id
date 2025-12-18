export default function Loading() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-2/3 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-6" />
      <div className="h-6 bg-gray-200 rounded w-20 mb-8" />
      <div className="space-y-3 mb-10">
        <div className="h-4 bg-gray-200 rounded" />
        <div className="h-4 bg-gray-200 rounded" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
      <div className="h-10 bg-gray-200 rounded w-32" />
    </main>
  );
}
