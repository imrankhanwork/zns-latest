
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/mockProducts';

const MousePads = () => {
  const products = getProductsByCategory('mouse-pads');

  return (
    <PageLayout title="Mouse Pads" showBackButton={false}>
      <div className="mb-8">
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Smooth, durable mouse pads designed for precision and comfort. 
          Ideal for desktops, workspaces, and gaming setups. Non-slip backing ensures steady control.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No Mouse Pads available at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
};

export default MousePads;
