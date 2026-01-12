
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <PageLayout title="Refund Policy">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Refund Eligibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-green-700">Eligible for Refund</h4>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Defective products</li>
                    <li>• Damaged during shipping</li>
                    <li>• Wrong item received</li>
                    <li>• Manufacturing errors</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <XCircle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-red-700">Not Eligible</h4>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Custom design orders</li>
                    <li>• Used products</li>
                    <li>• Change of mind</li>
                    <li>• Color variations on screen</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-yellow-700">Time Limits</h4>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• 7 days from delivery</li>
                    <li>• 14 days for bulk orders</li>
                    <li>• Report damage within 24 hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Refund Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
                <h4 className="font-semibold">Contact Us</h4>
                <p className="text-sm text-muted-foreground">Email us with your order details and issue description</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
                <h4 className="font-semibold">Review</h4>
                <p className="text-sm text-muted-foreground">We'll review your case within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
                <h4 className="font-semibold">Return</h4>
                <p className="text-sm text-muted-foreground">Send back the item if required (we'll provide prepaid label)</p>
              </div>
              <div className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">4</div>
                <h4 className="font-semibold">Refund</h4>
                <p className="text-sm text-muted-foreground">Receive your refund within 5-7 business days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Refund Methods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>Refunds will be processed using the same payment method used for the original purchase:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Credit/Debit Card: 5-7 business days</li>
                <li>UPI/Digital Wallet: 2-3 business days</li>
                <li>Bank Transfer: 3-5 business days</li>
                <li>Cash on Delivery: Bank transfer (additional verification required)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Replacement vs Refund</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>In many cases, we may offer a replacement instead of a refund:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Faster resolution for defective items</li>
                <li>Same product with corrected specifications</li>
                <li>Upgraded shipping at no extra cost</li>
                <li>Additional compensation for inconvenience</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Partial Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-muted-foreground">
              <p>Partial refunds may be offered in the following situations:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Minor defects that don't affect functionality</li>
                <li>Bulk orders with only some defective items</li>
                <li>Items showing signs of wear beyond normal shipping</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact for Refunds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-muted-foreground">
              <p>To initiate a refund request, please contact us with:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Order number</li>
                <li>Photos of the issue (if applicable)</li>
                <li>Detailed description of the problem</li>
              </ul>
              <div className="mt-4 pt-4 border-t">
                <p>Email: wecare@stickitup.xyz</p>
                <p>Phone: +91 7506232907</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default RefundPolicy;
