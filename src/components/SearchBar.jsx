export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full sm:max-w-md">
      <input
        type="text"
        placeholder="Search products by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-200 bg-white rounded-xl px-4 py-2.5 outline-hidden focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition duration-150"
      />
    </div>
  );
}
