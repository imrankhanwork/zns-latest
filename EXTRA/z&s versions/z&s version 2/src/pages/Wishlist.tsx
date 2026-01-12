
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/contexts/WishlistContext';

const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, clearWishlist } = useWishlist();

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  return (
    <PageLayout title="My Wishlist" showBackButton={false}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="text-red-500" size={20} />
            <span className="text-muted-foreground">
              {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} in your wishlist
            </span>
          </div>
          {wishlist.length > 0 && (
            <Button variant="outline" onClick={clearWishlist}>
              Clear All
            </Button>
          )}
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground mb-6">
              Browse our products and add items you love to your wishlist.
            </p>
            <Button onClick={handleContinueShopping}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Wishlist;
