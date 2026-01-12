import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/data/useProducts';

const MousePads = () => {
  const { products, loading } = useProducts();

  // Filter products by category
  const filteredProducts = products.filter(p => p.category === 'mouse-pads');

  if (loading) {
    return (
      <PageLayout title="Mouse Pads" showBackButton={false}>
        <div className="text-center py-12">Loading products...</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Mouse Pads" showBackButton={false}>
      <div className="mb-8">
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Smooth, durable mouse pads designed for precision and comfort. 
          Ideal for desktops, workspaces, and gaming setups. Non-slip backing ensures steady control.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No Mouse Pads available at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
};

export default MousePads;
