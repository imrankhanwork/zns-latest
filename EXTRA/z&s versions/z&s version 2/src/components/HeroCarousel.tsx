
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '@/data/mockProducts';

const lightModeProducts = [
  {
    id: 1,
    name: 'T-Shirts and Jersey Design Print',
    description: 'Custom sports jerseys and casual wear',
    cardBg: {
      light: 'from-orange-400 via-red-500 to-pink-600',
      dark: 'from-slate-800 via-gray-800 to-zinc-900'
    },
    backgroundImage: '/assets/',
    productImage: '/assets/stickerpack_white_fg.png',
    productId: 't-shirt-1'
  },
  {
    id: 2,
    name: 'Product and Label Print',
    description: 'Bottles, packaging, and product labels',
    cardBg: {
      light: 'from-teal-400 via-blue-500 to-purple-600',
      dark: 'from-slate-700 via-gray-700 to-zinc-800'
    },
    backgroundImage: '/assets/t-shirt_white_bg.png',
    productImage: '/assets/t-shirt_white_fg.png',
    productId: 'label-1'
  },
  {
    id: 3,
    name: 'iPhone Back Cover Prints',
    description: 'Custom phone cases and covers',
    cardBg: {
      light: 'from-yellow-400 via-orange-500 to-red-500',
      dark: 'from-slate-600 via-gray-600 to-zinc-700'
    },
    backgroundImage: '/assets/mousepad_white_bg.jpg',
    productImage: '/assets/mousepad_white_fg.png',
    productId: 'phone-case-1'
  },
  {
    id: 4,
    name: 'Shopping Bags Prints',
    description: 'Eco-friendly custom shopping bags',
    cardBg: {
      light: 'from-pink-400 via-purple-500 to-indigo-600',
      dark: 'from-slate-900 via-gray-900 to-zinc-950'
    },
    backgroundImage: '/assets/d849bc11-6317-4cb4-b845-419c527bcfd2.png',
    productImage: '/assets/mobile_white_fg.png',
    productId: 'bag-1'
  },
  {
    id: 5,
    name: 'Custom Sticker Packs',
    description: 'Personalized sticker collections',
    cardBg: {
      light: 'from-green-400 via-cyan-500 to-blue-600',
      dark: 'from-slate-700 via-gray-700 to-zinc-800'
    },
    backgroundImage: '/assets/leptop_white_bg.png',
    productImage: '/assets/leptop_white_fg.png',
    productId: 'sticker-pack-1'
  }
];

const darkModeProducts = [
  {
    id: 6,
    name: 'Dark Series T-Shirts',
    description: 'Premium dark themed custom apparel',
    cardBg: {
      light: 'from-gray-800 via-slate-700 to-zinc-800',
      dark: 'from-purple-950 via-fuchsia-900 to-indigo-900'
    },
    backgroundImage: '/assets/mousepad_dark_bg.jpg',
    productImage: '/assets/mousepad_dark_fg.png',
    productId: 'dark-tshirt-1'
  },
  {
    id: 7,
    name: 'Dark Label Collection',
    description: 'Sleek dark-themed product labels',
    cardBg: {
      light: 'from-slate-600 via-gray-700 to-zinc-700',
      dark: 'from-purple-950 via-indigo-900 to-slate-950'
    },
    backgroundImage: '/assets/t-shirt_dark_bg.png',
    productImage: '/assets/t-shirt_dark_fg.png',
    productId: 'dark-label-1'
  },
  {
    id: 8,
    name: 'Dark Phone Cases',
    description: 'Stylish dark phone protection',
    cardBg: {
      light: 'from-zinc-700 via-slate-600 to-gray-700',
      dark: 'from-red-800 via-rose-900 to-black'
    },
    backgroundImage: '/assets/skicker_dark_bg.png',
    productImage: '/assets/skicker_dark_fg.png',
    productId: 'dark-phone-1'
  },
  {
    id: 9,
    name: 'Dark Shopping Bags',
    description: 'Elegant dark eco-friendly bags',
    cardBg: {
      light: 'from-slate-800 via-zinc-700 to-gray-800',
      dark: 'from-slate-950 via-zinc-900 to-gray-950'
    },
    backgroundImage: '/assets/laptop_dark_bg.png',
    productImage: '/assets/laptop_dark_fg.png',
    productId: 'dark-bag-1'
  },
  {
    id: 10,
    name: 'Dark Mystery Pack',
    description: 'Exclusive dark themed mystery items',
    cardBg: {
      light: 'from-purple-800 via-indigo-700 to-slate-800',
      dark: 'from-cyan-900 via-teal-950 to-black'
    },
    backgroundImage: '/assets/mobile_dark_bg.png',
    productImage: '/assets/mobile_dark_fg.png',
    productId: 'dark-mystery-1'
  }
];

interface HeroCarouselProps {
  onBackgroundChange?: (bg: string) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onBackgroundChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Watch for changes to dark mode
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Get current products based on theme
  const products = isDarkMode ? darkModeProducts : lightModeProducts;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [products.length]);

  useEffect(() => {
    if (onBackgroundChange) {
      const currentProduct = products[currentIndex];
      const bgColor = isDarkMode ? currentProduct.cardBg.dark : currentProduct.cardBg.light;
      onBackgroundChange(bgColor);
    }
  }, [currentIndex, isDarkMode, onBackgroundChange, products]);

  const handleCardClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const getCardStyle = (index: number, currentIndex: number) => {
    // Calculate position relative to current active card
    const position = (index - currentIndex + products.length) % products.length;
    
    // Define positions with translateX, scale, and rotateY for each card
    const positions = [
      { x: -280, scale: 1, rotateY: 0 },           // Front position
      { x: -40, scale: 0.85, rotateY: 10 },       // Second position  
      { x: 160, scale: 0.75, rotateY: 20 },       // Third position
      { x: 320, scale: 0.65, rotateY: 25 },       // Fourth position
      { x: 450, scale: 0.55, rotateY: 30 }        // Fifth position
    ];
    
    const pos = positions[position] || positions[4];
    
    return {
      transform: `translateX(${pos.x}px) scale(${pos.scale}) rotateY(${pos.rotateY}deg)`,
      opacity: 1,
      zIndex: 5 - position
    };
  };

  return (
    <div className="relative w-full h-[450px] hidden md:block">
      {/* Cards Container */}
      <div className="flex items-start justify-center h-full perspective-1000 overflow-hidden">
        {products.map((product, index) => {
          const style = getCardStyle(index, currentIndex);
          const bgColor = isDarkMode ? product.cardBg.dark : product.cardBg.light;
          
          return (
            <div
              key={product.id}
              className="absolute w-60 transition-all duration-1000 ease-in-out preserve-3d cursor-pointer"
              style={{ ...style, aspectRatio: '9/16', height: '400px' }}
              onClick={() => handleCardClick(product.productId)}
            >
              {/* Card with background image - 9:16 aspect ratio */}
              <div 
                className={`relative w-full h-full bg-gradient-to-br ${bgColor} rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300`}
                style={{
                  backgroundImage: `url(${product.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                {/* Overlay for text contrast */}
                <div className="absolute inset-0 bg-black/15 rounded-2xl" />
                
                {/* Floating Product Image */}
                <div className="absolute inset-[3px] right-[-20px] z-20">
                  <img
                    src={product.productImage}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-xl"
                  />
                </div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                  <h3 className="text-sm font-semibold mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs opacity-90 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Dot Indicators */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
