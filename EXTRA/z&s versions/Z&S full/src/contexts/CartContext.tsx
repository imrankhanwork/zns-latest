import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
  id: number; // number ID
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  inStock: boolean;
}

interface CartItem {
  id: number; // number ID
  name: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
  variant?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  getItemQuantity: (id: number) => number;
  checkout: (billingInfo: any) => Promise<string>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setItems(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(i => i.id === item.id);
      if (existingItem) {
        return currentItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...currentItems, { ...item, quantity }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const getCartTotal = () => items.reduce((total, item) => total + item.price * item.quantity, 0);

  const getCartItemCount = () => items.reduce((count, item) => count + item.quantity, 0);

  const getItemQuantity = (id: number) => {
    const item = items.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  const checkout = async (billingInfo: any): Promise<string> => {
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const order = {
      id: orderId,
      items: [...items],
      total: getCartTotal(),
      billingInfo: {
        fullName: `${billingInfo.firstName} ${billingInfo.lastName}`,
        firstName: billingInfo.firstName,
        lastName: billingInfo.lastName,
        email: billingInfo.email,
        phone: billingInfo.phone,
        address: billingInfo.address,
        city: billingInfo.city,
        state: billingInfo.state,
        zipCode: billingInfo.zipCode,
        country: billingInfo.country || 'United States'
      },
      status: 'Processing',
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    clearCart();
    return orderId;
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartItemCount,
      getItemQuantity,
      checkout
    }}>
      {children}
    </CartContext.Provider>
  );
};
