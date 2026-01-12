
import React from 'react';
import { Star, Plus, Minus, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Product, useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

const ProductCard = ({ product, showAddToCart = true }: ProductCardProps) => {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const quantity = getItemQuantity(product.id);
  const inWishlist = isInWishlist(product.id);

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
    <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
      <div className="relative overflow-hidden rounded-t-lg">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
        {quantity > 0 && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">
            {quantity}
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 left-2 h-8 w-8 p-0 hover:bg-white/80"
          onClick={handleWishlistToggle}
        >
          <Heart 
            size={16} 
            className={inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'} 
          />
        </Button>
      </div>
      
      <CardHeader className="pb-2">
        <Link to={`/product/${product.id}`}>
          <CardTitle className="text-lg line-clamp-2 hover:text-primary">{product.name}</CardTitle>
        </Link>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({product.rating})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ₹{product.price.toFixed(2)}
          </span>
          
          {showAddToCart && product.inStock && (
            <div className="flex items-center gap-2">
              {quantity === 0 ? (
                <Button
                  onClick={handleAddToCart}
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </Button>
              ) : (
                <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
                  <Button
                    onClick={handleDecrease}
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0"
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="font-semibold min-w-[20px] text-center">{quantity}</span>
                  <Button
                    onClick={handleIncrease}
                    size="sm"
                    variant="ghost"
                    className="h-8 w-8 p-0"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
