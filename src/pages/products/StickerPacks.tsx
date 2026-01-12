
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/data/mockProducts';

const StickerPacks = () => {
  // Filter products that belong to sticker category
  const stickerProducts = mockProducts.filter(product => 
    product.category === 'sticker-packs' || 
    product.name.toLowerCase().includes('sticker')
  );

  return (
    <PageLayout title="Sticker Packs">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center bg-muted/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Premium Sticker Collections</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated sticker packs featuring unique designs, premium quality materials, 
            and waterproof finish. Perfect for personalizing your devices, notebooks, and more.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-background border rounded-lg">
            <h3 className="font-semibold mb-2">Themed Collections</h3>
            <p className="text-sm text-muted-foreground">
              Curated sticker packs by theme including anime, nature, tech, and more.
            </p>
          </div>
          
          <div className="text-center p-6 bg-background border rounded-lg">
            <h3 className="font-semibold mb-2">Premium Quality</h3>
            <p className="text-sm text-muted-foreground">
              All our stickers are made with premium vinyl that's waterproof and UV-resistant.
            </p>
          </div>
          
          <div className="text-center p-6 bg-background border rounded-lg">
            <h3 className="font-semibold mb-2">Value Packs</h3>
            <p className="text-sm text-muted-foreground">
              Get more bang for your buck with our value packs containing 20-100 unique stickers.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Available Sticker Packs</h3>
          {stickerProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {stickerProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No sticker packs available at the moment.</p>
              <p className="text-sm text-muted-foreground">Check back soon for new arrivals!</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default StickerPacks;
