export default function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
}) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-200 bg-white text-gray-700 rounded-xl px-4 py-2.5 outline-hidden capitalize focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 transition cursor-pointer"
    >
      <option value="all">All Categories</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
}
