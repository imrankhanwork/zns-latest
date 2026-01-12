import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Facebook, Instagram, Youtube, MapPin, Mail } from 'lucide-react';
import Banner from '/assets/footer-pattern.jpg';

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <footer className="text-white" data-aos="zoom-in">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Left Column - Brand Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <img 
                  src="/assets/eae1a3c2-a8d4-4dc7-8104-4e3a84b061f8.png" 
                  alt="Z&S DESIGNS" 
                  className="h-16 w-16"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Z&S DESIGNS
                </span>
              </div>
              
              <p className="text-gray-300 text-lg">
                There's a sticker for that!? Yes, there's a sticker for everyone.
              </p>
              
              <div className="text-yellow-400 font-medium underline">
                Made with ♥ in India
              </div>


              {/* Social Links under Address */}
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">QUICK LINKS</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link to="/sticker-packs" className="text-gray-300 hover:text-white transition-colors">Stickers</Link>
                <Link to="/mini-sticker-sheets" className="text-gray-300 hover:text-white transition-colors">Mini Sticker Sheets</Link>
                <Link to="/skins/laptop" className="text-gray-300 hover:text-white transition-colors">Laptop Skins</Link>
                <Link to="/credit-card-skins" className="text-gray-300 hover:text-white transition-colors">Credit Card Skins</Link>
              </div>
            </div>

            {/* Right Column - Support */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">SUPPORT</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
                <Link to="/track-order" className="text-gray-300 hover:text-white transition-colors">Track Your Order</Link>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">Frequently Asked Questions</Link>
                <Link to="/bulk-custom-orders" className="text-gray-300 hover:text-white transition-colors">Bulk & Custom Orders</Link>
                <Link to="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</Link>

              </div>
            </div>

            {/* Right Column - INFORMATION */}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">INFORMATION</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/refund-policy" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link>
                <Link to="/shipping-policy" className="text-gray-300 hover:text-white transition-colors">Shipping Policy</Link>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </div>
            </div>
          </div>
        </div>

       
      </footer>
    </div>
  );
};

export default Footer;
