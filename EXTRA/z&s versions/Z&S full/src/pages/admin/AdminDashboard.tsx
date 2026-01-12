import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, ShoppingCart, TrendingUp, LogOut, Plus, Edit, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAdmin } from '@/contexts/AdminContext';
import { useProducts, Product as ProductType } from '@/data/useProducts';
import ProductEditDialog from '@/components/ProductEditDialog';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const { admin, logout, isAuthenticated } = useAdmin();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { products: fetchedProducts, loading } = useProducts(); // ✅ hook
  const [adminProducts, setAdminProducts] = useState<ProductType[]>([]);
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }

    // Load orders from localStorage
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);

    // Load admin-added products from localStorage
    const savedAdminProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]');
    setAdminProducts(savedAdminProducts);
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const allProducts = [...fetchedProducts, ...adminProducts]; // combine API + admin products

  const handleEditProduct = (product: ProductType) => {
    setEditingProduct(product);
    setShowEditDialog(true);
  };

  const handleUpdateProduct = (updatedProduct: ProductType) => {
    const updatedAdminProducts = adminProducts.map(p => 
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setAdminProducts(updatedAdminProducts);
    localStorage.setItem('adminProducts', JSON.stringify(updatedAdminProducts));
  };

  const handleDeleteProduct = (productId: number) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    const updatedAdminProducts = adminProducts.filter(p => p.id !== productId);
    setAdminProducts(updatedAdminProducts);
    localStorage.setItem('adminProducts', JSON.stringify(updatedAdminProducts));

    toast({
      title: "Success",
      description: "Product deleted successfully!",
    });
  };

  const stats = [
    { title: 'Total Products', value: allProducts.length, icon: Package, color: 'text-blue-600' },
    { title: 'Total Orders', value: orders.length, icon: ShoppingCart, color: 'text-green-600' },
    { 
      title: 'Revenue', 
      value: `$${orders.reduce((sum, order) => sum + (order.total || 0), 0).toFixed(2)}`, 
      icon: TrendingUp, 
      color: 'text-purple-600' 
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {admin?.username}</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
            <LogOut size={16} />
            Logout
          </Button>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Products Management</CardTitle>
              <Button onClick={() => navigate('/admin/add-product')} className="flex items-center gap-2">
                <Plus size={16} />
                Add Product
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allProducts.slice(0, 10).map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded" />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {adminProducts.find(p => p.id === product.id) && (
                            <>
                              <Button size="sm" variant="outline" onClick={() => handleEditProduct(product)}>
                                <Edit size={14} />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDeleteProduct(product.id)}>
                                <Trash2 size={14} />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Product Edit Dialog */}
      <ProductEditDialog
        isOpen={showEditDialog}
        onClose={() => setShowEditDialog(false)}
        product={editingProduct}
        onUpdate={handleUpdateProduct}
      />
    </div>
  );
};

export default AdminDashboard;
