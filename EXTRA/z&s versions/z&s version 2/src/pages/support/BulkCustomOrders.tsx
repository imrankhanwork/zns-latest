
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, DollarSign, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BulkCustomOrders = () => {
  return (
    <PageLayout title="Bulk & Custom Orders">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <p className="text-lg text-muted-foreground">
            Need large quantities or have a special project in mind? We've got you covered with our bulk and custom order services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="text-center">
              <Users className="mx-auto text-primary mb-2" size={32} />
              <CardTitle className="text-lg">Team Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Perfect for teams, clubs, and organizations
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <DollarSign className="mx-auto text-primary mb-2" size={32} />
              <CardTitle className="text-lg">Better Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Significant discounts on large quantity orders
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Clock className="mx-auto text-primary mb-2" size={32} />
              <CardTitle className="text-lg">Priority Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Dedicated support and faster processing
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="text-center">
              <Award className="mx-auto text-primary mb-2" size={32} />
              <CardTitle className="text-lg">Quality Guarantee</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Consistent quality across all pieces
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bulk Order Benefits</CardTitle>
            <CardDescription>Why choose our bulk services?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Volume Discounts</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 50-99 pieces: 10% off</li>
                  <li>• 100-299 pieces: 15% off</li>
                  <li>• 300-499 pieces: 20% off</li>
                  <li>• 500+ pieces: 25% off</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Services Included</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Free design consultation</li>
                  <li>• Digital proofs before printing</li>
                  <li>• Dedicated account manager</li>
                  <li>• Priority customer support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
                <h4 className="font-semibold">Contact Us</h4>
                <p className="text-sm text-muted-foreground">Reach out with your requirements</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
                <h4 className="font-semibold">Get Quote</h4>
                <p className="text-sm text-muted-foreground">Receive custom pricing</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
                <h4 className="font-semibold">Design Review</h4>
                <p className="text-sm text-muted-foreground">Approve designs and proofs</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">4</div>
                <h4 className="font-semibold">Production</h4>
                <p className="text-sm text-muted-foreground">We print and ship your order</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            Request Bulk Quote
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default BulkCustomOrders;
