
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getProductById } from '@/data/mockProducts';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import PageLayout from '@/components/PageLayout';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  
  const product = getProductById(id || '');
  const quantity = product ? getItemQuantity(product.id) : 0;
  const inWishlist = product ? isInWishlist(product.id) : false;

  if (!product) {
    return (
      <PageLayout title="Product Not Found">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleIncrease = () => {
    addToCart(product);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      updateQuantity(product.id, quantity - 1);
    }
  };

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <PageLayout title={product.name}>
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Out of Stock</span>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.rating} rating)</span>
          </div>

          <div className="text-4xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={handleWishlistToggle}
                className="flex items-center gap-2"
              >
                <Heart 
                  size={20} 
                  className={inWishlist ? 'fill-red-500 text-red-500' : ''} 
                />
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </Button>
            </div>

            {product.inStock && (
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Quantity:</span>
                  {quantity === 0 ? (
                    <Button
                      onClick={handleAddToCart}
                      className="flex items-center gap-2"
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </Button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                        <Button
                          onClick={handleDecrease}
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0"
                        >
                          <Minus size={16} />
                        </Button>
                        <span className="font-semibold min-w-[40px] text-center">{quantity}</span>
                        <Button
                          onClick={handleIncrease}
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                      <span className="text-sm text-muted-foreground">in cart</span>
                    </div>
                  )}
                </div>
              </Card>
            )}
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Product Features</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Premium quality materials</li>
              <li>• Easy application and removal</li>
              <li>• Bubble-free installation</li>
              <li>• Durable and long-lasting</li>
              <li>• Custom designs available</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetail;
