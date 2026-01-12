
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <PageLayout title="Shipping Policy">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Truck className="text-primary" />
              <CardTitle>Shipping Options</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Standard Shipping</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• 3-5 business days</p>
                  <p>• Free for orders above ₹499</p>
                  <p>• ₹49 for smaller orders</p>
                  <p>• Tracking included</p>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Express Shipping</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• 1-2 business days</p>
                  <p>• ₹99 for all orders</p>
                  <p>• Priority handling</p>
                  <p>• SMS & email updates</p>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Same Day (Mumbai)</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Within Mumbai only</p>
                  <p>• Order before 2 PM</p>
                  <p>• ₹199 delivery charge</p>
                  <p>• 4-8 hours delivery</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" />
              <CardTitle>Delivery Areas</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Domestic Shipping (India)</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• All major cities and towns</p>
                  <p>• Pin code serviceability check available</p>
                  <p>• Remote areas may take 1-2 extra days</p>
                  <p>• Cash on Delivery available in most areas</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">International Shipping</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Currently limited to select countries</p>
                  <p>• 7-14 business days delivery</p>
                  <p>• Customs duties may apply</p>
                  <p>• Contact us for availability</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Package className="text-primary" />
              <CardTitle>Order Processing</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
                  <h4 className="font-semibold">Order Placed</h4>
                  <p className="text-sm text-muted-foreground">Confirmation email sent</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
                  <h4 className="font-semibold">Processing</h4>
                  <p className="text-sm text-muted-foreground">1-2 business days</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
                  <h4 className="font-semibold">Shipped</h4>
                  <p className="text-sm text-muted-foreground">Tracking details sent</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">4</div>
                  <h4 className="font-semibold">Delivered</h4>
                  <p className="text-sm text-muted-foreground">Package arrives</p>
                </div>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Processing Times by Product</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• Ready-made stickers: Same day processing</p>
                  <p>• Custom stickers: 1-2 business days</p>
                  <p>• Device skins: 1-2 business days</p>
                  <p>• Custom apparel: 2-3 business days</p>
                  <p>• Bulk orders: 3-5 business days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="text-primary" />
              <CardTitle>Important Notes</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p><strong>Order Cutoff Times:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Standard orders: 6 PM for same-day processing</li>
                <li>Express orders: 2 PM for same-day dispatch</li>
                <li>Custom orders: 4 PM for next-day processing</li>
              </ul>
              
              <p><strong>Holidays and Weekends:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>No processing on Sundays and national holidays</li>
                <li>Saturday processing available for urgent orders</li>
                <li>Holiday delays will be communicated in advance</li>
              </ul>
              
              <p><strong>Address Requirements:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Complete address with pin code required</li>
                <li>Phone number mandatory for delivery coordination</li>
                <li>Apartment/office building details helpful</li>
                <li>Alternative contact recommended for bulk orders</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shipping Issues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>If you experience any shipping-related issues:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Delayed delivery beyond estimated time</li>
                <li>Package marked as delivered but not received</li>
                <li>Damaged package upon arrival</li>
                <li>Incorrect shipping address used</li>
              </ul>
              
              <div className="mt-4 pt-4 border-t">
                <p><strong>Contact our shipping support:</strong></p>
                <p>Email: wecare@stickitup.xyz</p>
                <p>Phone: +91 7506232907</p>
                <p>Response time: Within 24 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ShippingPolicy;
