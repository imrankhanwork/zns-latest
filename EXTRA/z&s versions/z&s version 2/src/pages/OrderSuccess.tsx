
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId || 'Unknown';

  return (
    <PageLayout title="Order Confirmed" showBackButton={false}>
      <div className="max-w-2xl mx-auto text-center">
        <Card>
          <CardHeader>
            <div className="mx-auto mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-600">Order Placed Successfully!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-2">Your order ID is:</p>
              <p className="text-xl font-mono font-semibold">{orderId}</p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Package size={20} />
                <span className="font-semibold">What's Next?</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• You'll receive an email confirmation shortly</li>
                <li>• Your order will be processed within 1-2 business days</li>
                <li>• Tracking information will be sent once shipped</li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/shop')} variant="outline">
                Continue Shopping
              </Button>
              <Button onClick={() => navigate('/profile')} className="flex items-center gap-2">
                View Order Details
                <ArrowRight size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default OrderSuccess;
