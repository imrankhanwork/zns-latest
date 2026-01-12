import { Product } from '@/contexts/CartContext';

export const mockProducts: Product[] = [
  // Phone Skins
  {
    id: 'phone-1',
    name: 'iPhone 15 Pro Carbon Fiber Skin',
    price: 29.99,
    image: '/assets/1e2bfba6-78a5-4239-a88f-b5fbeef6b6fe.png',
    category: 'phone-skins',
    description: 'Premium carbon fiber texture skin for iPhone 15 Pro. Precision cut for perfect fit.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'phone-2',
    name: 'Samsung Galaxy S24 Ultra Wood Grain Skin',
    price: 27.99,
    image: '/assets/66ae9086-6f54-4729-bbc8-531d9c1e2db8.png',
    category: 'phone-skins',
    description: 'Natural wood grain pattern skin with 3M vinyl for durability.',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'phone-3',
    name: 'OnePlus 12 Marble Skin',
    price: 25.99,
    image: '/assets/b405fc5f-d6dc-4188-8666-dc215f399008.png',
    category: 'phone-skins',
    description: 'Elegant marble pattern skin with premium matte finish.',
    rating: 4.6,
    inStock: true
  },

  // Laptop Skins
  {
    id: 'laptop-1',
    name: 'MacBook Pro 16" Abstract Art Skin',
    price: 49.99,
    image: '/assets/d849bc11-6317-4cb4-b845-419c527bcfd2.png',
    category: 'laptop-skins',
    description: 'Vibrant abstract art design for MacBook Pro 16-inch. Easy application with bubble-free adhesive.',
    rating: 4.9,
    inStock: true
  },
  {
    id: 'laptop-2',
    name: 'Dell XPS 13 Minimalist Skin',
    price: 39.99,
    image: '/assets/eae1a3c2-a8d4-4dc7-8104-4e3a84b061f8.png',
    category: 'laptop-skins',
    description: 'Clean minimalist design perfect for professionals.',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'laptop-3',
    name: 'HP Pavilion Gaming Skin',
    price: 35.99,
    image: '/assets/f4ad0a8c-1aef-4d11-801b-6364d9e7bdc7.png',
    category: 'laptop-skins',
    description: 'Gaming-inspired design with RGB-like colors and patterns.',
    rating: 4.7,
    inStock: true
  },

  // Tablet Skins
  {
    id: 'tablet-1',
    name: 'iPad Pro 12.9" Nature Skin',
    price: 34.99,
    image: '/assets/1e2bfba6-78a5-4239-a88f-b5fbeef6b6fe.png',
    category: 'tablet-skins',
    description: 'Beautiful nature-inspired design for iPad Pro 12.9-inch.',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'tablet-2',
    name: 'Samsung Galaxy Tab S9 Space Skin',
    price: 32.99,
    image: '/assets/66ae9086-6f54-4729-bbc8-531d9c1e2db8.png',
    category: 'tablet-skins',
    description: 'Space-themed design with galaxy patterns and stars.',
    rating: 4.8,
    inStock: true
  },

  // Charger Skins
  {
    id: 'charger-1',
    name: 'MacBook Charger Skin Set',
    price: 19.99,
    image: '/assets/b405fc5f-d6dc-4188-8666-dc215f399008.png',
    category: 'charger-skins',
    description: 'Complete skin set for MacBook charger including adapter and cable wraps.',
    rating: 4.4,
    inStock: true
  },
  {
    id: 'charger-2',
    name: 'USB-C Charger Skin',
    price: 15.99,
    image: '/assets/d849bc11-6317-4cb4-b845-419c527bcfd2.png',
    category: 'charger-skins',
    description: 'Universal USB-C charger skin with premium vinyl material.',
    rating: 4.3,
    inStock: true
  },

  // T-Shirts
  {
    id: 'tshirt-1',
    name: 'Custom Graphic T-Shirt',
    price: 24.99,
    image: '/assets/eae1a3c2-a8d4-4dc7-8104-4e3a84b061f8.png',
    category: 't-shirts',
    description: 'High-quality cotton t-shirt with custom graphic design.',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'tshirt-2',
    name: 'Vintage Style T-Shirt',
    price: 22.99,
    image: '/assets/f4ad0a8c-1aef-4d11-801b-6364d9e7bdc7.png',
    category: 't-shirts',
    description: 'Retro vintage design with distressed print effect.',
    rating: 4.5,
    inStock: true
  },

  // Jerseys
  {
    id: 'jersey-1',
    name: 'Custom Sports Jersey',
    price: 59.99,
    image: '/assets/1e2bfba6-78a5-4239-a88f-b5fbeef6b6fe.png',
    category: 'jerseys',
    description: 'Professional quality sports jersey with custom name and number.',
    rating: 4.9,
    inStock: true
  },
  {
    id: 'jersey-2',
    name: 'Gaming Team Jersey',
    price: 54.99,
    image: '/assets/66ae9086-6f54-4729-bbc8-531d9c1e2db8.png',
    category: 'jerseys',
    description: 'E-sports team jersey with moisture-wicking fabric.',
    rating: 4.6,
    inStock: true
  },

  // Sticker Packs
  {
    id: 'sticker-1',
    name: 'Tech Sticker Pack',
    price: 12.99,
    image: '/assets/b405fc5f-d6dc-4188-8666-dc215f399008.png',
    category: 'sticker-packs',
    description: 'Collection of 20 tech-themed stickers for laptops and devices.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'sticker-2',
    name: 'Nature Sticker Pack',
    price: 11.99,
    image: '/assets/d849bc11-6317-4cb4-b845-419c527bcfd2.png',
    category: 'sticker-packs',
    description: 'Beautiful nature and wildlife sticker collection.',
    rating: 4.7,
    inStock: true
  },

  // Mini Sticker Sheets
  {
    id: 'mini-1',
    name: 'Mini Emoji Sticker Sheet',
    price: 7.99,
    image: '/assets/eae1a3c2-a8d4-4dc7-8104-4e3a84b061f8.png',
    category: 'mini-sticker-sheets',
    description: 'Compact sheet with 50+ mini emoji stickers.',
    rating: 4.5,
    inStock: true
  },

  // Credit Card Skins
  {
    id: 'card-1',
    name: 'Luxury Credit Card Skin',
    price: 9.99,
    image: '/assets/f4ad0a8c-1aef-4d11-801b-6364d9e7bdc7.png',
    category: 'credit-card-skins',
    description: 'Premium credit card skin with metallic finish.',
    rating: 4.4,
    inStock: true
  },

  // Mystery Box
  {
    id: 'mystery-1',
    name: 'Surprise Skin Mystery Box',
    price: 39.99,
    image: '/assets/1e2bfba6-78a5-4239-a88f-b5fbeef6b6fe.png',
    category: 'mystery-box',
    description: 'Mystery box containing 5-7 random premium skins worth $80+.',
    rating: 4.9,
    inStock: true
  },

  // Custom Designs
  {
    id: 'custom-1',
    name: 'Custom Design Service',
    price: 69.99,
    image: '/assets/66ae9086-6f54-4729-bbc8-531d9c1e2db8.png',
    category: 'custom-designs',
    description: 'Professional custom design service for any device skin.',
    rating: 5.0,
    inStock: true
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return mockProducts.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return mockProducts.find(product => product.id === id);
};