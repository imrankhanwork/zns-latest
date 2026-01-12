
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/mockProducts';

const ChargerSkins = () => {
  const products = getProductsByCategory('charger-skins');

  return (
    <PageLayout title="Charger Skins" showBackButton={false}>
      <div className="mb-8">
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Custom vinyl skins for chargers and cables. Protect and personalize your charger while preventing tangling.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No charger skins available at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
};

export default ChargerSkins;
