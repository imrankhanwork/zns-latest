
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface ProductEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
  onUpdate: (updatedProduct: any) => void;
}

const ProductEditDialog = ({ isOpen, onClose, product, onUpdate }: ProductEditDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price?.toString() || '',
    category: product?.category || '',
    description: product?.description || '',
    image: product?.image || '',
    rating: product?.rating?.toString() || '4.5'
  });

  const categories = [
    { value: 'phone-skins', label: 'Phone Skins' },
    { value: 'laptop-skins', label: 'Laptop Skins' },
    { value: 'tablet-skins', label: 'Tablet Skins' },
    { value: 'charger-skins', label: 'Charger Skins' },
    { value: 't-shirts', label: 'T-Shirts' },
    { value: 'jerseys', label: 'Jerseys' },
    { value: 'sticker-packs', label: 'Sticker Packs' },
    { value: 'mouse-pads', label: 'Mouse Pads' },
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

    const updatedProduct = {
      ...product,
      name: formData.name,
      price: parseFloat(formData.price),
      category: formData.category,
      description: formData.description,
      image: formData.image,
      rating: parseFloat(formData.rating),
      inStock: true
    };

    onUpdate(updatedProduct);
    
    toast({
      title: "Success",
      description: "Product updated successfully!",
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        
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
              Update Product
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductEditDialog;
