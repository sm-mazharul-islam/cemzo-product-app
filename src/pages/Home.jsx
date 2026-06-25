import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { useDebounce } from "../hooks/useDebounce";
import { fetchCategories, fetchProducts } from "../services/api";
import Loader from "../components/Loader";

export default function Home() {
  // --- Core State Architecture ---
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // --- Pagination State (Level 1 Bonus) ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // --- System Status Indicators ---
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const debouncedSearch = useDebounce(search, 300);

  // API Lifecycle
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // --- Safe Pagination Slicing Math (Derived State) ---
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // FIXED: Instead of an effect changing state, we calculate the active page safely.
  // If currentPage is out of bounds due to a new search filter, we safely drop back to page 1.
  const activePage = currentPage > totalPages ? 1 : currentPage;

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  if (error) {
    return (
      <div className="text-center py-20">
        <div className="bg-red-50 text-red-700 px-6 py-4 rounded-xl inline-block border border-red-200">
          ⚠️ Error: {error}. Please refresh and try again.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-4 py-8 sm:px-6 lg:px-8">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold text-indigo-950 tracking-tight mb-2">
          Cemzo Marketplace
        </h1>
        <p className="text-gray-500 text-sm">
          Explore items, view metrics, and filter through categories easily.
        </p>
      </header>

      <main className="max-w-7xl mx-auto">
        {/* Isolated Control Dashboard Panel */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-stretch sm:items-center">
          <SearchBar value={search} onChange={setSearch} />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        {/* Content Area */}
        {loading ? (
          <Loader />
        ) : currentItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentItems.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={(prod) => setSelectedProduct(prod)}
                />
              ))}
            </div>

            {/* --- Pagination Controls --- */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-10 mb-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={activePage === 1}
                  className="px-4 py-2 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 font-medium disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed transition duration-150 shadow-xs"
                >
                  Previous
                </button>

                <span className="text-sm font-semibold text-gray-600">
                  Page {activePage} of {totalPages}
                </span>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={activePage === totalPages}
                  className="px-4 py-2 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 text-gray-700 font-medium disabled:opacity-40 disabled:hover:bg-white disabled:cursor-not-allowed transition duration-150 shadow-xs"
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16 bg-white border border-dashed rounded-2xl text-gray-400">
            No items matched your search query configurations.
          </div>
        )}
      </main>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
