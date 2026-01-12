// src/pages/Shop.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  category?: string;
  description?: string;
  rating?: number;
  inStock?: boolean;
  image?: string;
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:9092/HelloJavaServlet/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await res.json();

        const mapped = data.map((p) => ({
          ...p,
          category: p.category || "default",
          description: p.description || "",
          rating: p.rating ?? 4.5,
          inStock: p.inStock ?? true,
          image: p.image || "/assets/default.jpg",
        }));

        setProducts(mapped);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="text-center py-12">Loading products...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

  return (
    <PageLayout title="Shop">
      {/* Search input */}
      <div className="mb-6 relative max-w-md">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-muted dark:border-gray-700 dark:text-white"
        />
      </div>

      {/* Products grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p>No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block bg-white dark:bg-muted rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold dark:text-white">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-1">${product.price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground dark:text-gray-400 mb-1">
                  Category: {product.category}
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < Math.floor(product.rating!)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    {product.rating?.toFixed(1)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </PageLayout>
  );
};

export default Shop;
