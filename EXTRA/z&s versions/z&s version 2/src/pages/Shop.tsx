
import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockProducts } from '@/data/mockProducts';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Load admin products from localStorage and combine with mock products
    const loadProducts = () => {
      const savedProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]');
      console.log('Loading admin products:', savedProducts);
      const combinedProducts = [...mockProducts, ...savedProducts];
      console.log('Combined products:', combinedProducts);
      setAllProducts(combinedProducts);
    };

    loadProducts();

    // Listen for storage changes to update products when admin adds new ones
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'adminProducts') {
        loadProducts();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'phone-skins', label: 'Phone Skins' },
    { value: 'laptop-skins', label: 'Laptop Skins' },
    { value: 'tablet-skins', label: 'Tablet Skins' },
    { value: 'charger-skins', label: 'Charger Skins' },
    { value: 't-shirts', label: 'T-Shirts' },
    { value: 'jerseys', label: 'Jerseys' },
    { value: 'sticker-packs', label: 'Sticker Packs' },
    { value: 'mini-sticker-sheets', label: 'Mini Sticker Sheets' },
    { value: 'credit-card-skins', label: 'Credit Card Skins' },
  ];

  // Filter out custom designs and mystery box products
  const availableProducts = allProducts.filter(product => 
    product.category !== 'custom-designs' && product.category !== 'mystery-box'
  );

  const filteredProducts = availableProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <PageLayout title="Shop All Products" showBackButton={false}>
      <div className="space-y-6">
        {/* Filters and Search */}
        <div className="bg-muted/50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-0">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {availableProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Filter className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Shop;
