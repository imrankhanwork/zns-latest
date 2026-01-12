import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/data/useProducts';

const PhoneSkins = () => {
  const { products, loading } = useProducts();

  // Filter products by category
  const filteredProducts = products.filter(p => p.category === 'phone-skins');

  if (loading) {
    return (
      <PageLayout title="Phone Skins" showBackButton={false}>
        <div className="text-center py-12">Loading products...</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Phone Skins" showBackButton={false}>
      <div className="mb-8">
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Premium vinyl skins designed specifically for all phone models. Protect your device while adding a unique style with our precision-cut skins.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No phone skins available at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
};

export default PhoneSkins;
