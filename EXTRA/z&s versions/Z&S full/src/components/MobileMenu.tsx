
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingCart, Moon, Sun, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SearchDropdown from '@/components/SearchDropdown';
import UserMenu from '@/components/UserMenu';
import { useCart } from '@/contexts/CartContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface MobileMenuProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  onLoginClick: () => void;
  onCartClick: () => void;
}

const MobileMenu = ({ isDarkMode, setIsDarkMode, onLoginClick, onCartClick }: MobileMenuProps) => {
  const navigate = useNavigate();
  const { getCartItemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showSkinsDropdown, setShowSkinsDropdown] = useState(false);
  const [showClothingDropdown, setShowClothingDropdown] = useState(false);

  return (
    <div className="lg:hidden flex items-center justify-between w-full">
      {/* Logo on the left */}
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-1">
          <img 
            src="/assets/zsdesignes.png" 
            alt="Z&S DESIGNS" 
            className="h-10 w-10"
          />
          <span className="text-sm font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Z&S DESIGNS
          </span>
        </Link>
      </div>

      {/* Icons on the right */}
      <div className="flex items-center gap-2">
        {/* Search for tablet only (hidden on mobile) */}
        <div className="hidden md:block">
          <SearchDropdown />
        </div>

        {/* Dark mode toggle */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Account */}
        <UserMenu onLoginClick={onLoginClick} />

        {/* Cart */}
        <button 
          className="p-2 hover:bg-muted rounded-lg transition-colors relative"
          onClick={onCartClick}
        >
          <ShoppingCart size={20} />
          {getCartItemCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </button>

        {/* Mobile/Tablet Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="p-2">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <SheetHeader className="p-6 border-b">
              <SheetTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img 
                    src="/assets/zsdesignes.png" 
                    alt="Z&S DESIGNS" 
                    className="h-12 w-12"
                  />
                  <span className="text-lg font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Z&S DESIGNS
                  </span>
                </div>
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex flex-col h-full">
              {/* Search for mobile only (hidden on tablet) */}
              <div className="p-4 border-b md:hidden">
                <SearchDropdown onProductSelect={() => setIsOpen(false)} />
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4">
                <div className="space-y-2">
                  {/* Skins Dropdown */}
                  <div>
                    <button 
                      onClick={() => setShowSkinsDropdown(!showSkinsDropdown)}
                      className="flex items-center justify-between w-full p-3 hover:bg-muted rounded-lg transition-colors text-left"
                    >
                      <span className="font-medium">Skins</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${showSkinsDropdown ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {showSkinsDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        <Link to="/skins/laptop" className="block p-2 hover:bg-muted rounded text-sm" onClick={() => setIsOpen(false)}>Laptop Skins</Link>
                        <Link to="/skins/phone" className="block p-2 hover:bg-muted rounded text-sm" onClick={() => setIsOpen(false)}>Phone Skins</Link>
                        <Link to="/skins/tablet" className="block p-2 hover:bg-muted rounded text-sm" onClick={() => setIsOpen(false)}>Tablet Skins</Link>
                        <Link to="/skins/charger" className="block p-2 hover:bg-muted rounded text-sm" onClick={() => setIsOpen(false)}>Charger Skins</Link>
                      </div>
                    )}
                  </div>

                  {/* Clothing Dropdown */}
                  <div>
                    <button 
                      onClick={() => setShowClothingDropdown(!showClothingDropdown)}
                      className="flex items-center justify-between w-full p-3 hover:bg-muted rounded-lg transition-colors text-left"
                    >
                      <span className="font-medium">Clothing</span>
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${showClothingDropdown ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {showClothingDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        <Link to="/clothing/t-shirts" className="block p-2 hover:bg-muted rounded text-sm" onClick={() => setIsOpen(false)}>T-shirts</Link>
                        <Link to="/clothing/jerseys" className="block p-2 hover:bg-muted rounded text-sm" onClick={() => setIsOpen(false)}>Jerseys</Link>
                      </div>
                    )}
                  </div>

                  {/* Other Links */}
                  <Link to="/sticker-packs" className="block p-3 hover:bg-muted rounded-lg transition-colors font-medium" onClick={() => setIsOpen(false)}>
                    Sticker Packs
                  </Link>
                  <Link to="/mystery-box" className="block p-3 hover:bg-muted rounded-lg transition-colors font-medium" onClick={() => setIsOpen(false)}>
                    Mystery Box
                  </Link>
                  <Link to="/custom-designs" className="block p-3 hover:bg-muted rounded-lg transition-colors font-medium" onClick={() => setIsOpen(false)}>
                    Custom Designs
                  </Link>
                  <Link to="/shop" className="block p-3 hover:bg-muted rounded-lg transition-colors font-medium" onClick={() => setIsOpen(false)}>
                    Shop All
                  </Link>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileMenu;
