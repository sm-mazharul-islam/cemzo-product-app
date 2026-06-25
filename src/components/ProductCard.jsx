export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={() => onClick(product)}
      className="bg-white p-4 border border-gray-100 rounded-xl shadow-xs hover:shadow-md transition duration-200 cursor-pointer flex flex-col justify-between h-full"
    >
      {/* Product Image Container */}
      <div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden bg-gray-50 rounded-lg p-2">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain hover:scale-105 transition duration-200"
        />
      </div>

      {/* Product Information */}
      <div className="flex-1">
        <span className="text-xs font-semibold uppercase text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="font-bold text-gray-800 text-sm line-clamp-2 mt-2 hover:text-indigo-600">
          {product.title}
        </h3>
      </div>

      {/* Price & Rating Footer */}
      <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
        <span className="text-lg font-extrabold text-gray-900">
          ${product.price}
        </span>
        <div className="text-sm bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded flex items-center gap-1">
          ⭐ <span>{product.rating?.rate || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}
