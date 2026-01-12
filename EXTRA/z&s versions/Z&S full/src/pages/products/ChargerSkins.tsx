import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { useProducts } from '@/data/useProducts';

const ChargerSkins = () => {
  const { products, loading } = useProducts();

  // Filter products dynamically by category
  const chargerSkins = products.filter(p => p.category === 'charger-skins');

  if (loading) {
    return (
      <PageLayout title="Charger Skins" showBackButton={false}>
        <div className="text-center py-12">Loading products...</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Charger Skins" showBackButton={false}>
      <div className="mb-8">
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Custom vinyl skins for chargers and cables. Protect and personalize your charger while preventing tangling.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {chargerSkins.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {chargerSkins.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No charger skins available at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
};

export default ChargerSkins;
