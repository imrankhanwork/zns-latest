import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Shield, Truck, Users, Sun, Moon, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import HeroCarousel from '@/components/HeroCarousel';
import ProductGallery from '@/components/ProductGallery';
import CustomStickerCTA from '@/components/CustomStickerCTA';
import QualityAccordion from '@/components/QualityAccordion';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import AuthDialog from '@/components/AuthDialog';
import CartSidebar from '@/components/CartSidebar';
import UserMenu from '@/components/UserMenu';
import SearchDropdown from '@/components/SearchDropdown';
import { useCart } from '@/contexts/CartContext';

const Index = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const [currentProductBg, setCurrentProductBg] = useState('from-orange-400 via-red-500 to-pink-600');
  const { getCartItemCount } = useCart();

  // Dark mode toggle
  React.useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setIsDarkMode(JSON.parse(saved));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleOrderNow = () => {
    navigate('/shop');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu for mobile and tablet */}
            <div className="lg:hidden w-full">
              <MobileMenu 
                isDarkMode={isDarkMode} 
                setIsDarkMode={setIsDarkMode}
                onLoginClick={() => setShowAuthDialog(true)}
                onCartClick={() => setShowCartSidebar(true)}
              />
            </div>

            {/* Desktop Navigation - Only for large screens */}
            <div className="hidden lg:flex items-center gap-1 relative">
              {/* Logo - bigger and extending outside navbar */}
              <div className="relative z-[60]">
                <Link to="/">
                  <img 
                    src="/assets/zsdesignes.png" 
                    alt="Z&S DESIGNES" 
                    className="h-28 w-28 transform hover:scale-110 transition-transform duration-300 -mt-6 -mb-12"
                  />
                </Link>
              </div>
              
              {/* Company Name - positioned closer to the logo */}
              <div className="-ml-2">
                <Link to="/" className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
                  Z&S DESIGNES
                </Link>
              </div>
            </div>

            {/* Navigation Links and Actions - Desktop only */}
            <div className="hidden lg:flex items-center flex-1 justify-end gap-6">
              {/* Navigation Links */}
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <span>Skins</span>
                    <ChevronDown size={16} />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/skins/laptop" className="block px-4 py-2 hover:bg-muted rounded-t-lg">Laptop Skins</Link>
                    <Link to="/skins/phone" className="block px-4 py-2 hover:bg-muted">Phone Skins</Link>
                    <Link to="/skins/tablet" className="block px-4 py-2 hover:bg-muted">Tablet Skins</Link>
                    <Link to="/skins/charger" className="block px-4 py-2 hover:bg-muted rounded-b-lg">Charger Skins</Link>
                  </div>
                </div>
                
                <div className="relative group">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                    <span>Clothing</span>
                    <ChevronDown size={16} />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/clothing/t-shirts" className="block px-4 py-2 hover:bg-muted rounded-t-lg">T-shirts</Link>
                    <Link to="/clothing/jerseys" className="block px-4 py-2 hover:bg-muted rounded-b-lg">Jerseys</Link>
                  </div>
                </div>
                
                <Link to="/sticker-packs" className="hover:text-primary transition-colors">Sticker Packs</Link>
                <Link to="/mystery-box" className="hover:text-primary transition-colors">Mystery Box</Link>
                <Link to="/custom-designs" className="hover:text-primary transition-colors">Custom Designs</Link>
                <Link to="/shop" className="hover:text-primary transition-colors">Shop All</Link>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-2">
                {/* Search with Dropdown */}
                <SearchDropdown />

                {/* Dark mode toggle */}
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Account */}
                <UserMenu onLoginClick={() => setShowAuthDialog(true)} />

                {/* Cart */}
                <button 
                  className="p-2 hover:bg-muted rounded-lg transition-colors relative"
                  onClick={() => setShowCartSidebar(true)}
                >
                  <ShoppingCart size={20} />
                  {getCartItemCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartItemCount()}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${currentProductBg} transition-colors duration-700`}>
        <div className="container mx-auto px-4 py-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
            {/* Left side - Text Content */}
            <div className="lg:col-span-3 space-y-6 text-center md:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  PRINT<br />
                  WHATEVER<br />
                  YOU WANT
                </h1>
                <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
                  FROM T-SHIRT DESIGN TO STATIONERY, WE PRINT EVERYTHING. WE DO EVERYTHING WHAT OTHERS DON'T
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                onClick={handleOrderNow}
              >
                ORDER NOW →
              </Button>
            </div>

            {/* Right side - Product Carousel (hidden on mobile) */}
            <div className="lg:col-span-7 hidden md:block">
              <HeroCarousel onBackgroundChange={setCurrentProductBg} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="text-yellow-500" size={24} />
                  Unique Designs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover exclusive and trendy designs to personalize your devices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="text-green-500" size={24} />
                  Premium Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  High-quality materials ensure durability and long-lasting style.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="text-blue-500" size={24} />
                  Fast Shipping
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enjoy quick and reliable shipping to your doorstep.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-purple-500" size={24} />
                  Customer Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We're here to help with any questions or concerns you may have.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <ProductGallery />



      {/* Quality Assurance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <QualityAccordion />
        </div>
      </section>

      {/* Custom Sticker CTA Section */}
      <CustomStickerCTA />

      {/* Footer */}
      <Footer />

      {/* Auth Dialog */}
      <AuthDialog isOpen={showAuthDialog} onClose={() => setShowAuthDialog(false)} />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={showCartSidebar} onClose={() => setShowCartSidebar(false)} />
    </div>
  );
};

export default Index;
