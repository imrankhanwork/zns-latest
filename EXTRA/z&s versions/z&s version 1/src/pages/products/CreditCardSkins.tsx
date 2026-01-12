
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/mockProducts';

const CreditCardSkins = () => {
  const products = getProductsByCategory('credit-card-skins');

  return (
    <PageLayout title="Credit Card Skins" showBackButton={false}>
      <div className="mb-8">
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Personalize your credit cards with custom vinyl skins. RFID safe and doesn't interfere with contactless payments.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No credit card skins available at the moment.</p>
        </div>
      )}
    </PageLayout>
  );
};

export default CreditCardSkins;
