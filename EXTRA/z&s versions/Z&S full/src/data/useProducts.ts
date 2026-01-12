import { useEffect, useState } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  inStock: boolean;
}

/**
 * Custom hook to fetch products from servlet
 * @param search optional search query
 */
export function useProducts(search: string = "") {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const queryParam = search ? `?search=${encodeURIComponent(search)}` : "";
    fetch(`http://localhost:9092/HelloJavaServlet/api/products${queryParam}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setProducts([]);
        setLoading(false);
      });
  }, [search]); // refetch whenever search changes

  return { products, loading };
}
