
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockProducts } from '@/data/mockProducts';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface SearchDropdownProps {
  onProductSelect?: () => void;
}

const SearchDropdown = ({ onProductSelect }: SearchDropdownProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockProducts
        .filter(product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 8); // Limit to 8 results
      setFilteredProducts(filtered);
      setIsOpen(true);
    } else {
      setFilteredProducts([]);
      setIsOpen(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClear = () => {
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleProductClick = () => {
    setSearchQuery('');
    setIsOpen(false);
    onProductSelect?.();
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-10 w-[280px] rounded-full border border-gray-300 px-4 py-1 pr-20 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
          {searchQuery && (
            <button
              onClick={handleClear}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X size={16} />
            </button>
          )}
          <Search size={20} className="text-gray-500" />
        </div>
      </div>

      {isOpen && filteredProducts.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto z-50 shadow-lg border bg-background">
          <div className="p-2">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={handleProductClick}
                className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-12 w-12 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{product.name}</h4>
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                  <p className="text-sm font-semibold text-primary">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {isOpen && searchQuery && filteredProducts.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 shadow-lg border bg-background">
          <div className="p-4 text-center text-muted-foreground">
            No products found for "{searchQuery}"
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchDropdown;
