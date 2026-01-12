import React, { createContext, useContext, useState } from 'react';
import { useProducts, Product as ProductType } from '@/data/useProducts';

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: ProductType[];
  isSearching: boolean;
  loading: boolean;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch products dynamically from servlet
  const { products, loading } = useProducts(searchTerm); // pass searchTerm for server-side filtering

  // Optional client-side filter as backup
  const searchResults: ProductType[] = searchTerm.trim()
    ? products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const isSearching = searchTerm.trim().length > 0;

  return (
    <SearchContext.Provider value={{
      searchTerm,
      setSearchTerm,
      searchResults,
      isSearching,
      loading
    }}>
      {children}
    </SearchContext.Provider>
  );
};
