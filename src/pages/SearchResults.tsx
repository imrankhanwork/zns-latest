
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { useSearch } from '@/contexts/SearchContext';

const SearchResults = () => {
  const location = useLocation();
  const { searchResults, searchTerm } = useSearch();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || searchTerm;

  return (
    <PageLayout title={`Search Results for "${query}"`} showBackButton={false}>
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Search size={20} className="text-muted-foreground" />
          <span className="text-muted-foreground">
            {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found for "{query}"
          </span>
        </div>

        {searchResults.length === 0 ? (
          <div className="text-center py-16">
            <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse our categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default SearchResults;
