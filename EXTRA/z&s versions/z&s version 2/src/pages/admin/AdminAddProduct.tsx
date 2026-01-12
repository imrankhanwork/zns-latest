import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAdmin } from '@/contexts/AdminContext';

const AdminAddProduct = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAdmin();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: '',
    rating: '4.5'
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
      return;
    }
  }, [isAuthenticated, navigate]);

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  const categories = [
    { value: 'phone-skins', label: 'Phone Skins' },
    { value: 'laptop-skins', label: 'Laptop Skins' },
    { value: 'tablet-skins', label: 'Tablet Skins' },
    { value: 'charger-skins', label: 'Charger Skins' },
    { value: 't-shirts', label: 'T-Shirts' },
    { value: 'jerseys', label: 'Jerseys' },
    { value: 'sticker-packs', label: 'Sticker Packs' },
    { value: 'mini-sticker-sheets', label: 'Mini Sticker Sheets' },
    { value: 'credit-card-skins', label: 'Credit Card Skins' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.category || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Create new product
    const newProduct = {
      id: `admin-${Date.now()}`,
      name: formData.name,
      price: parseFloat(formData.price),
      category: formData.category,
      description: formData.description,
      image: formData.image || '/assets/d849bc11-6317-4cb4-b845-419c527bcfd2.png',
      rating: parseFloat(formData.rating),
      inStock: true
    };

    // Save to localStorage
    const existingProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]');
    const updatedProducts = [...existingProducts, newProduct];
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
    
    toast({
      title: "Success",
      description: "Product added successfully!",
    });
    
    // Reset form
    setFormData({
      name: '',
      price: '',
      category: '',
      description: '',
      image: '',
      rating: '4.5'
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/admin/dashboard')}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Button>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter product name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Enter product description"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  placeholder="Enter image URL"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rating">Rating</Label>
                <Select value={formData.rating} onValueChange={(value) => handleInputChange('rating', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5.0">5.0</SelectItem>
                    <SelectItem value="4.9">4.9</SelectItem>
                    <SelectItem value="4.8">4.8</SelectItem>
                    <SelectItem value="4.7">4.7</SelectItem>
                    <SelectItem value="4.6">4.6</SelectItem>
                    <SelectItem value="4.5">4.5</SelectItem>
                    <SelectItem value="4.4">4.4</SelectItem>
                    <SelectItem value="4.3">4.3</SelectItem>
                    <SelectItem value="4.2">4.2</SelectItem>
                    <SelectItem value="4.1">4.1</SelectItem>
                    <SelectItem value="4.0">4.0</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Add Product
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/admin/dashboard')}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAddProduct;
