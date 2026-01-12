import { Product } from '@/contexts/CartContext';

export const mockProducts: Product[] = [
  // Phone Skins
  {
    id: 'phone-1',
    name: 'iPhone 16 Pro series Carbon Fiber Skin',
    price: 299.99,
    image: '/assets/mobile-shop-1.jpg',
    category: 'phone-skins',
    description: 'Premium carbon fiber anime skin for iPhone 16 Pro. Precision cut for perfect fit.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'phone-2',
    name: 'iPhone 16 Pro anime Skin',
    price: 279.99,
    image: '/assets/mobile-shop-2.png',
    category: 'phone-skins',
    description: 'Premium anime skin for iPhone 16 Pro. Precision cut for perfect fit.',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'phone-3',
    name: 'Vibrant Splash iPhone Skin',
    price: 249.99,
    image: '/assets/phone-shop-3.png',
    category: 'phone-skins',
    description: 'Add a burst of color to your iPhone with this eye-catching, ultra-thin skin—designed for bold style and everyday protection.',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'phone-4',
    name: 'Subtle Girl White iPhone Skin',
    price: 299.99,
    image: '/assets/phone-shop-4.png',
    category: 'phone-skins',
    description: 'Elegant and minimalist, this soft white iPhone skin adds a gentle, feminine touch while protecting your device with style.',
    rating: 4.8,
    inStock: true
  },

  // Laptop Skins
  {
    id: 'laptop-1',
    name: 'MacBook Pro 16" Abstract Art Skin',
    price: 449.99,
    image: '/assets/laptop-shop-1.png',
    category: 'laptop-skins',
    description: 'Sleek and minimal gray laptop skin designed for Apple devices — offers smooth protection against scratches while giving your MacBook a clean, professional look. Easy to apply and remove without residue.',
    rating: 4.9,
    inStock: true
  },
  {
    id: 'laptop-2',
    name: 'HP Omen 16 black Skin',
    price: 339.99,
    image: '/assets/laptop-shop-2.jpg',
    category: 'laptop-skins',
    description: 'Make a bold statement with this black laptop skin featuring a striking golden flying warrior design. Durable, scratch-resistant, and perfect for adding a touch of power and elegance to your device.',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'laptop-3',
    name: 'Samurai Spirit Laptop Skin',
    price: 499.99,
    image: '/assets/laptop-shop-3.png',
    category: 'laptop-skins',
    description: 'Channel the honor and strength of a Japanese warrior with this sleek, durable laptop skin—featuring bold samurai artwork for timeless inspiration.',
    rating: 4.7,
    inStock: true
  },
    {
    id: 'laptop-4',
    name: 'Rick and Morty Laptop Skin',
    price: 499.99,
    image: '/assets/laptop-shop-4.png',
    category: 'laptop-skins',
    description: 'Dive into interdimensional chaos with this vibrant Rick and Morty laptop skin—perfect for fans who want their gear as wild as their favorite show.',
    rating: 4.9,
    inStock: true
  },
  {
    id: 'laptop-5',
    name: 'Flaming Anime Hero Laptop Skin',
    price: 499.99,
    image: '/assets/laptop-shop-5.png',
    category: 'laptop-skins',
    description: 'Ignite your device with this striking anime hero engulfed in flames—dynamic, bold, and perfect for fans who love intense action vibes.',
    rating: 4.9,
    inStock: true
  },
  {
    id: 'laptop-6',
    name: 'Anime Girl Iron Warrior Laptop Skin',
    price: 499.99,
    image: '/assets/laptop-shop-6.png',
    category: 'laptop-skins',
    description: 'Unleash fierce power with this anime-style iron warrior girl wielding a sword—perfect for adding bold, battle-ready vibes to your laptop.',
    rating: 4.9,
    inStock: true
  },

  // Tablet Skins
  {
    id: 'tablet-1',
    name: 'iPad Pro 12.9" Nature Skin',
    price: 349.99,
    image: '/assets/tablet-shop-1.jpg',
    category: 'tablet-skins',
    description: 'Beautiful nature-inspired design for iPad Pro 12.9-inch.',
    rating: 4.6,
    inStock: true
  },
  {
    id: 'tablet-2',
    name: 'Samsung Galaxy Tab S9 Space Skin',
    price: 329.99,
    image: '/assets/tablet-shop-2.png',
    category: 'tablet-skins',
    description: 'Space-themed design with galaxy patterns and stars.',
    rating: 4.8,
    inStock: true
  },

  // Charger Skins
  {
    id: 'charger-1',
    name: 'MacBook Charger Skin Set',
    price: 99.99,
    image: '/assets/zsdesigns-shop-1.jpg',
    category: 'charger-skins',
    description: 'Complete skin set for MacBook charger including adapter and cable wraps.',
    rating: 4.4,
    inStock: true
  },
  {
    id: 'charger-2',
    name: 'USB-C Charger Skin',
    price: 89.99,
    image: '/assets/zsdesigns-shop-1.jpg',
    category: 'charger-skins',
    description: 'Universal USB-C charger skin with premium vinyl material.',
    rating: 4.3,
    inStock: true
  },

  // T-Shirts
  {
    id: 'tshirt-1',
    name: 'T-Shirt white anime print',
    price: 399.99,
    image: '/assets/t-shirt-shop-1.png',
    category: 't-shirts',
    description: 'Clean, cool, and expressive — this white anime print t-shirt showcases vibrant designs on soft, comfortable fabric. Perfect for anime lovers who want to wear their fandom with style.',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'tshirt-2',
    name: 'T-Shirt black dragon print',
    price: 1299,
    image: '/assets/t-shirt-shop-2.jpg',
    category: 't-shirts',
    description: 'Unleash bold style with this black dragon printed t-shirt — featuring striking artwork on soft, breathable fabric. Perfect for those who embrace fierce, fearless fashion.',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'tshirt-3',
    name: 'Barbie Dream Print T-Shirt',
    price: 399.99,
    image: '/assets/t-shirt-shop-3.png',
    category: 't-shirts',
    description: 'Show off your Barbie style with this chic printed tee—fun, fashionable, and perfect for living your dream life in pink.',
    rating: 4.7,
    inStock: true
  },
  {
    id: 'tshirt-4',
    name: 'Anime Robot Fairy T-Shirt',
    price: 1299,
    image: '/assets/t-shirt-shop-4.png',
    category: 't-shirts',
    description: 'Step into a sci-fi fantasy world with this anime-style robot fairy tee—featuring vibrant art, glowing wings, and cyber-cute vibes for true otaku flair.',
    rating: 4.5,
    inStock: true
  },

  // Jerseys
  {
    id: 'jersey-1',
    name: 'Custom Sports Jersey',
    price: 5999.99,
    image: '/assets/Jerseys-shop-1.png',
    category: 'jerseys',
    description: 'Professional quality sports jersey with custom name and number.',
    rating: 4.9,
    inStock: true
  },


  // Sticker Packs
  {
    id: 'sticker-1',
    name: 'Vibrant Sticker Pack',
    price: 119.99,
    image: '/assets/stickerpack-shop-1.png',
    category: 'sticker-packs',
    description: 'A versatile collection of bold and vibrant stickers, perfect for personalizing laptops, tablets, and tech accessories. Durable, waterproof, and easy to apply.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'sticker-2',
    name: 'San Andreas Sticker Pack ',
    price: 119.99,
    image: '/assets/stickerpack-shop-2.png',
    category: 'sticker-packs',
    description: 'Iconic San Andreas stickers inspired by the legendary game — perfect for adding attitude to your laptop, phone, or gaming setup. Bold designs for true fans of the streets.',
    rating: 4.7,
    inStock: true
  },
    {
    id: 'sticker-3',
    name: 'Deadpool Laptop Sticker',
    price: 119.99,
    image: '/assets/stickerpack-shop-3.png',
    category: 'sticker-packs',
    description: 'Show off your inner anti-hero with this bold, waterproof Deadpool sticker—perfect for laptops, tablets, or notebooks. Maximum style, minimal effort.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'sticker-4',
    name: 'Cool Einstein Vinyl Sticker',
    price: 119.99,
    image: '/assets/stickerpack-shop-4.png',
    category: 'sticker-packs',
    description: 'Turn up the genius with this cool Einstein sticker—featuring the iconic physicist with a modern twist, perfect for laptops, notebooks, or water bottles.',
    rating: 4.7,
    inStock: true
  },
    {
    id: 'sticker-5',
    name: 'Angry Pink Rabbit Sticker',
    price: 119.99,
    image: '/assets/stickerpack-shop-5.png',
    category: 'sticker-packs',
    description: 'Cute meets chaos with this fiery pink rabbit sticker—perfect for adding a punch of attitude to your laptop, phone, or journal.',
    rating: 4.8,
    inStock: true
  },
  {
    id: 'sticker-6',
    name: 'Angry Rabbit Sticker',
    price: 119.99,
    image: '/assets/stickerpack-shop-6.png',
    category: 'sticker-packs',
    description: 'This edgy sticker features a furious rabbit with big ears and crossed-out eyes—perfect for adding a wild, rebellious touch to your gear.',
    rating: 4.7,
    inStock: true
  },

  // Mouse Pads
  {
    id: 'mouse-pad-1',
    name: 'mouse pads',
    price: 499.99,
    image: '/assets/mousepad-shop-1.jpg',
    category: 'mouse-pads',
    description: 'Smooth, durable mouse pads designed for precision and comfort.',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'mouse-pad-2',
    name: 'mouse pads',
    price: 379.99,
    image: '/assets/mousepad-shop-2.png',
    category: 'mouse-pads',
    description: 'Starry sky airplane mouse pad — featuring a smooth surface for effortless glide and a non-slip base for stable performance. Perfect for adding a touch of wanderlust to your desk.',
    rating: 4.5,
    inStock: true
  },
  {
    id: 'mouse-pad-3',
    name: 'mouse pads',
    price: 459.99,
    image: '/assets/mousepad-shop-3.jpg',
    category: 'mouse-pads',
    description: 'High-speed style for your desk — this racing car game print mouse pad offers a smooth, responsive surface for precision and a non-slip base for stability. Perfect for gamers and racing enthusiasts.',
    rating: 4.5,
    inStock: true
  },

  // Credit Card Skins
  {
    id: 'card-1',
    name: 'Luxury Credit Card Skin',
    price: 99.99,
    image: '/assets/craditcard-shop-1.png',
    category: 'credit-card-skins',
    description: 'Premium credit card skin with metallic finish.',
    rating: 4.4,
    inStock: true
  },

  // Mystery Box
  {
    id: 'mystery-1',
    name: 'Surprise Skin Mystery Box',
    price: 399.99,
    image: '/assets/mysterybox-shop-1.png',
    category: 'mystery-box',
    description: 'Mystery box containing 5-7 random premium skins worth $80+.',
    rating: 4.9,
    inStock: true
  },

  // Custom Designs
  {
    id: 'custom-1',
    name: 'Custom Design Service',
    price: 699.99,
    image: '/assets/mysterybox-shop-1.png',
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