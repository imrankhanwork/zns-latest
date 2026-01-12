
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CreditCard, Wallet, Smartphone } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';

const PaymentOptions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { clearCart, getCartTotal } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay with Visa, Mastercard, or American Express'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: Wallet,
      description: 'Pay with your PayPal account'
    },
    {
      id: 'apple_pay',
      name: 'Apple Pay',
      icon: Smartphone,
      description: 'Pay with Touch ID or Face ID'
    }
  ];

  const handlePayment = async (methodId: string) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const orderId = 'ORD-' + Date.now();
      
      toast({
        title: "Payment Successful!",
        description: `Your order #${orderId} has been processed.`,
      });
      
      clearCart();
      setIsProcessing(false);
      navigate('/order-success', { state: { orderId } });
    }, 2000);
  };

  return (
    <PageLayout title="Payment Options" showBackButton={false}>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Choose Payment Method</h2>
          <p className="text-muted-foreground">
            Total: ${getCartTotal().toFixed(2)}
          </p>
        </div>

        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <Card key={method.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <method.icon size={24} className="text-primary" />
                    <div>
                      <h3 className="font-semibold">{method.name}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                  <Button
                    onClick={() => handlePayment(method.id)}
                    disabled={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : 'Pay Now'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default PaymentOptions;
