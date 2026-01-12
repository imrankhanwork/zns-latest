import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/data/useProducts';

const TabletSkins = () => {
  const { products, loading } = useProducts();

  // Filter products that belong to tablet skins category
  const tabletProducts = products.filter(product => product.category === 'tablet-skins');

  if (loading) {
    return (
      <PageLayout title="Tablet Skins" showBackButton={false}>
        <div className="text-center py-12">Loading products...</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Tablet Skins" showBackButton={false}>
      <div className="mb-8">
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Perfect-fit vinyl skins for iPad, Samsung Galaxy Tab, and other tablet models. Durable materials with premium adhesive.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tabletProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {tabletProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No tablet skins available at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
};

export default TabletSkins;
