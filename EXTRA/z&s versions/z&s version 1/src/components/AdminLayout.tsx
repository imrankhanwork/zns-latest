
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAdmin } from '@/contexts/AdminContext';

interface AdminLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AdminLayout = ({ title, children }: AdminLayoutProps) => {
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Company Name */}
            <div className="flex items-center gap-2">
              <img 
                src="/assets/zsdesignes.png" 
                alt="Z&S DESIGNS" 
                className="h-10 w-10"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Z&S DESIGNS
              </span>
            </div>

            {/* Admin Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/admin/dashboard" 
                className="hover:text-primary transition-colors font-medium"
              >
                Dashboard
              </Link>
              <Link 
                to="/admin/orders" 
                className="hover:text-primary transition-colors font-medium"
              >
                Orders
              </Link>
              <Link 
                to="/admin/add-product" 
                className="hover:text-primary transition-colors font-medium"
              >
                Add Product
              </Link>

              {/* Admin User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User size={20} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
