
import React from 'react';
import { Button } from '@/components/ui/button';

const CustomStickerCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-300 to-blue-500 dark:from-purple-800 dark:to-blue-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Happy customer with custom stickers"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              NOW MAKE YOUR OWN <br />
              <span className="text-yellow-500 dark:text-yellow-400">CUSTOM STICKERS</span>
            </h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
              Make your own customer stickers, custom labels with few easy steps.
            </p>
            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
              Let's create stories with Z&S DESIGNES Custom stickers.
            </p>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 bg-yellow-400 hover:bg-yellow-500 text-black px-12 py-4 text-xl font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              SHOP NOW
            </button>
          </div>

        </div>
      </div>
    </section>

  );
};

export default CustomStickerCTA;
