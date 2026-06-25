export default function ProductModal({ product, onClose }) {
  // If no product is selected, do not render anything
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 animate-fadeIn">
      {/* Modal Box */}
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold transition"
        >
          {/* &times; */}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Left Column: Image */}
          <div className="flex items-center justify-center bg-gray-50 p-4 rounded-xl max-h-80">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-contain"
            />
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-indigo-600 font-bold">
                {product.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                {product.title}
              </h2>
              <div className="text-yellow-600 text-sm mb-4 font-medium">
                ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price & Action */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-2xl font-black text-gray-900">
                ${product.price}
              </span>
              <button
                onClick={onClose}
                className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-700 transition shadow-xs"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
