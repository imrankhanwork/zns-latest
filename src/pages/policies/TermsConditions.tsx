
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TermsConditions = () => {
  return (
    <PageLayout title="Terms & Conditions">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>1. Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By using our website and services, you agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, you may not use our services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Products and Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>We provide custom printing services including but not limited to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Custom stickers and decals</li>
                <li>Device skins for laptops, phones, and tablets</li>
                <li>Custom apparel including t-shirts and jerseys</li>
                <li>Bulk and corporate printing services</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Orders and Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order.</p>
              <p>Payment must be made in full before production begins unless alternative arrangements have been made.</p>
              <p>Prices are subject to change without notice.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Intellectual Property</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>You warrant that any designs or content you provide do not infringe on any third-party rights.</p>
              <p>We reserve the right to refuse printing of any content that may infringe copyright or trademark laws.</p>
              <p>All original designs created by Z&S Designs remain our intellectual property.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Shipping and Delivery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>Delivery times are estimates and not guaranteed. We are not liable for delays beyond our control.</p>
              <p>Risk of loss or damage passes to you upon delivery to the carrier.</p>
              <p>You are responsible for providing accurate shipping information.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Returns and Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>Returns are accepted for defective or damaged products within 7 days of delivery.</p>
              <p>Custom orders may not be returnable unless defective.</p>
              <p>Return shipping costs are the responsibility of the customer unless the item is defective.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>Our liability is limited to the purchase price of the products.</p>
              <p>We are not liable for any indirect, consequential, or punitive damages.</p>
              <p>Some jurisdictions do not allow the exclusion of certain warranties or damages, so some of the above may not apply to you.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p>For questions about these Terms & Conditions, please contact us:</p>
              <p>Email: wecare@stickitup.xyz</p>
              <p>Phone: +91 7506232907</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default TermsConditions;
