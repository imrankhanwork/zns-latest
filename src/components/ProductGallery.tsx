import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Samurai Spirit Laptop Skin',
    image: '/assets/laptop-home-1.png',
    description: 'Bold samurai artwork for timeless inspiration.',
    linkId: 'laptop-3',
  },
  {
    id: 2,
    name: 'Deadpool Laptop Sticker',
    image: '/assets/stickerpack-home-2.png',
    description: 'Your inner anti-hero with this bold, waterproof Deadpool sticker.',
    linkId: 'sticker-3',
  },
  {
    id: 3,
    name: 'Rick and Morty Laptop Skin',
    image: '/assets/laptop-home-3.png',
    description: 'vibrant Rick and Morty laptop skin—perfect for fans who want their gear as wild as their favorite show.',
    linkId: 'laptop-4',
  },
  {
    id: 4,
    name: 'Vibrant Splash iPhone Skin',
    image: '/assets/phone-home-4.png',
    description: 'Ultra-thin skin—designed for bold style and everyday protection.',
    linkId: 'phone-3',
  },
  {
    id: 5,
    name: 'Barbie Dream Print T-Shirt',
    image: '/assets/t-shirt-home-5.png',
    description: 'Printed tee—fun, fashionable, and perfect for living your dream life in pink.',
    linkId: 'tshirt-3',
  },
  {
    id: 6,
    name: 'Cool Einstein Vinyl Sticker',
    image: '/assets/stickerpack-home-6.png',
    description: 'Turn up the genius with this cool Einstein sticker.',
    linkId: 'sticker-4',
  },
  {
    id: 7,
    name: 'Anime Robot Fairy T-Shirt',
    image: '/assets/t-shirt-home-7.png',
    description: 'Step into a sci-fi fantasy world with this anime-style robot fairy tee.',
    linkId: 'tshirt-4',
  },
  {
    id: 8,
    name: 'Angry Pink Rabbit Sticker',
    image: '/assets/stickerpack-home-8.png',
    description: 'Adding a punch of attitude to your laptop, phone, or journal.',
    linkId: 'sticker-5',
  },
    {
    id: 9,
    name: 'Flaming Anime Hero Laptop Skin',
    image: '/assets/laptop-home-9.png',
    description: 'Bold, and perfect for fans who love intense action vibes.',
    linkId: 'laptop-5',
  },
  {
    id: 10,
    name: 'Subtle Girl White iPhone Skin',
    image: '/assets/phone-home-10.png',
    description: 'Elegant and minimalist, this soft white iPhone skin',
    linkId: 'phone-4',
  },
  {
    id: 11,
    name: 'Anime Girl Iron Warrior Laptop Skin',
    image: '/assets/laptop-home-11.png',
    description: 'Unleash fierce power with this anime-style iron warrior girl.',
    linkId: 'laptop-6',
  },
  {
    id: 12,
    name: 'Angry Rabbit Sticker',
    image: '/assets/stickerpack-home-12.png',
    description: 'Crossed-out eyes—perfect for adding a wild, rebellious touch to your gear.',
    linkId: 'sticker-6',
  },
];

const ProductGallery: React.FC = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-8">
        <div className="text-center pb-28 mb-10">
          <p className="text-sm text-primary">Top Rated Products for You</p>
          <h2 className="text-5xl font-bold">Best Products</h2>
          <p className="text-xs text-gray-400 max-w-lg mx-auto">
            Top-rated quality. Trusted by thousands. Discover the best products for your everyday needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-28">
          {products.map((product) => (
            <Link
              to={`/product/${product.linkId}`}
              key={product.id}
              data-aos="zoom-in"
              className="relative rounded-xl bg-muted/40 dark:bg-muted/50 shadow-sm group flex flex-col items-center p-2 overflow-visible"
            >
              <div className="absolute -top-28 w-full flex justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-64 h-64 md:w-72 md:h-72 object-contain drop-shadow-xl"
                />
              </div>

              <div className="pt-40 pb-4 px-2 text-center">
                <h3 className="text-sm font-semibold">{product.name}</h3>
                <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                  {product.description}
                </p>
                <button className="bg-primary dark:bg-gray-200 hover:scale-105 duration-300 text-white dark:text-black py-1 px-3 rounded-full mt-3 text-xs">
                  View Product
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
