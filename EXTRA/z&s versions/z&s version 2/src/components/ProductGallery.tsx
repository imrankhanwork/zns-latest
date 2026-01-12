import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Custom Laptop Skins',
    image: '/assets/d849bc11-6317-4cb4-b845-419c527bcfd2.png',
    description: 'High-quality laptop skins where style, creativity, and protection come together.',
    rating: 4,
  },
  {
    id: 2,
    name: 'Phone Case Designs',
    image: '/assets/66ae9086-6f54-4729-bbc8-531d9c1e2db8.png',
    description: 'Bring your creativity to life with bold, expressive designs for your phone.',
    rating: 5,
  },
  {
    id: 3,
    name: 'T-Shirt Prints',
    image: '/assets/f4ad0a8c-1aef-4d11-801b-6364d9e7bdc7.png',
    description: 'Made with 100% premium cotton for all-day comfort with a perfect fit.',
    rating: 3,
  },
  {
    id: 4,
    name: 'Sticker Collections',
    image: '/assets/b405fc5f-d6dc-4188-8666-dc215f399008.png',
    description: 'Express your personality with our bold and fun sticker packs.',
    rating: 4,
  },
  {
    id: 5,
    name: 'Custom Keychains',
    image: '/assets/keychain-1.png',
    description: 'Create your own keychain with vibrant designs.',
    rating: 4,
  },
  {
    id: 6,
    name: 'Tablet Skins',
    image: '/assets/tablet-skin-1.png',
    description: 'Custom skins that protect and style your tablet.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Gaming Mouse Pads',
    image: '/assets/mousepad-1.png',
    description: 'Smooth, high-quality mouse pads for gamers.',
    rating: 4,
  },
  {
    id: 8,
    name: 'Custom Charger Skins',
    image: '/assets/charger-skin-1.png',
    description: 'Protect and decorate your chargers with custom skins.',
    rating: 3,
  },
  {
    id: 9,
    name: 'Mini Sticker Sheets',
    image: '/assets/mini-stickers-1.png',
    description: 'Fun, mini-sized stickers for planners and notes.',
    rating: 4,
  },
  {
    id: 10,
    name: 'Premium Notebooks',
    image: '/assets/notebook-1.png',
    description: 'Notebooks with unique cover designs and quality paper.',
    rating: 5,
  },
  {
    id: 11,
    name: 'Credit Card Skins',
    image: '/assets/card-skin-1.png',
    description: 'Stylish credit card skins for a personal touch.',
    rating: 4,
  },
  {
    id: 12,
    name: 'Mystery Box Stickers',
    image: '/assets/mystery-box-1.png',
    description: 'Surprise yourself with our mystery sticker box!',
    rating: 5,
  },
];


interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
}

const ProductGallery: React.FC = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center pb-10 mb-32">
          <p className="text-sm text-primary">Top Rated Products for You</p>
          <h2 className="text-3xl font-bold">Best Products</h2>
          <p className="text-xs text-gray-400 max-w-lg mx-auto">
            Top-rated quality. Trusted by thousands. Discover the best products for your everyday needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-36 place-items-center overflow-visible">
          {products.map((product) => (
            <div
              key={product.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-muted/40 dark:bg-muted/50 relative shadow-none duration-300 group w-[320px] flex flex-col items-center overflow-visible pb-2"
            >
              <div className="absolute -top-24 left-1/2 -translate-x-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[300px] md:w-[340px] transform group-hover:scale-110 duration-300 drop-shadow-xl"
                />
              </div>

              <div className="p-4 text-center mt-36 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-md font-bold">{product.name}</h3>
                  <p className="text-gray-500 text-xs mt-2 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <button
                  className="bg-primary dark:bg-gray-200 hover:scale-105 duration-300 text-white dark:text-black py-2 px-2 rounded-full mt-2 text-xs"
                  onClick={() => console.log('Order Now clicked for:', product.name)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;