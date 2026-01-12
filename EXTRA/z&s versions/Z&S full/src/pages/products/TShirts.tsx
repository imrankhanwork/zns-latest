import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/data/useProducts';

const TShirts = () => {
  const { products, loading } = useProducts();

  // Filter products that belong to t-shirts category
  const tShirtProducts = products.filter(product => product.category === 't-shirts');

  if (loading) {
    return (
      <PageLayout title="Custom T-Shirts" showBackButton={false}>
        <div className="text-center py-12">Loading products...</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Custom T-Shirts" showBackButton={false}>
      <div className="mb-8">
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          High-quality cotton t-shirts with custom printing. Upload your design or choose from our collection.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tShirtProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {tShirtProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No t-shirts available at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
};

export default TShirts;
