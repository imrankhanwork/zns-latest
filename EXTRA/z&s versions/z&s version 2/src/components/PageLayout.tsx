
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Moon, Sun, ChevronDown, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import AuthDialog from '@/components/AuthDialog';
import CartSidebar from '@/components/CartSidebar';
import UserMenu from '@/components/UserMenu';
import SearchDropdown from '@/components/SearchDropdown';
import { useCart } from '@/contexts/CartContext';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  showBackButton?: boolean;
}

const PageLayout = ({ title, children, showBackButton = false }: PageLayoutProps) => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const { getCartItemCount } = useCart();

  // Dark mode toggle
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      setIsDarkMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

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
                    src="/assets/eae1a3c2-a8d4-4dc7-8104-4e3a84b061f8.png" 
                    alt="Z&S DESIGNS" 
                    className="h-28 w-28 transform hover:scale-110 transition-transform duration-300 -mt-6 -mb-12"
                  />
                </Link>
              </div>
              
              {/* Company Name - positioned closer to the logo */}
              <div className="-ml-2">
                <Link to="/" className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
                  Z&S DESIGNS
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
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Dialog */}
      <AuthDialog isOpen={showAuthDialog} onClose={() => setShowAuthDialog(false)} />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={showCartSidebar} onClose={() => setShowCartSidebar(false)} />
    </div>
  );
};

export default PageLayout;
