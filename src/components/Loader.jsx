export default function Loader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="flex flex-col justify-between h-80 p-4 border border-gray-100 rounded-xl bg-gray-200"
        >
          {/* Simulated Image area */}
          <div className="h-48 w-full bg-gray-300 rounded-lg mb-4"></div>
          {/* Simulated Title lines */}
          <div className="h-4 bg-gray-300 rounded-sm w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-sm w-1/2"></div>
          {/* Simulated Footer */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-300">
            <div className="h-6 bg-gray-300 rounded-sm w-1/4"></div>
            <div className="h-6 bg-gray-300 rounded-sm w-1/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
