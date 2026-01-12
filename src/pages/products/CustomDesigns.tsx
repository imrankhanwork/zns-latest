
import React from 'react';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/mockProducts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Palette, Zap } from 'lucide-react';

const CustomDesigns = () => {
  const products = getProductsByCategory('custom-designs');

  return (
    <PageLayout title="Custom Designs" showBackButton={false}>
      <div className="space-y-8">
        {/* Service Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Upload className="text-primary" />
                <CardTitle>Upload Your Design</CardTitle>
              </div>
              <CardDescription>Bring your ideas to life</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Upload your own artwork, photos, or designs and we'll print them on high-quality stickers or skins.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="text-primary" />
                <CardTitle>Design Service</CardTitle>
              </div>
              <CardDescription>Professional design assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Need help with your design? Our professional designers can help bring your vision to reality.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="text-primary" />
                <CardTitle>Quick Turnaround</CardTitle>
              </div>
              <CardDescription>Fast production and delivery</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Most custom orders are processed within 2-3 business days with express shipping available.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Custom Design Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No custom design services available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default CustomDesigns;
