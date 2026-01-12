
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, Phone, Mail, Edit } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import AuthDialog from '@/components/AuthDialog';

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, getCartTotal, clearCart } = useCart();
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const [userAddresses, setUserAddresses] = useState<any[]>([]);
  const [showAuthDialog, setShowAuthDialog] = useState(false);

  useEffect(() => {
    // Show login dialog if not authenticated
    if (!user) {
      setShowAuthDialog(true);
      return;
    }

    // Load user addresses
    if (user?.id) {
      const savedAddresses = JSON.parse(localStorage.getItem(`addresses_${user.id}`) || '[]');
      setUserAddresses(savedAddresses);
      
      // Set first address as default
      if (savedAddresses.length > 0) {
        setSelectedAddress(savedAddresses[0]);
      }
    }
  }, [user, navigate]);

  const handleProceedToPayment = () => {
    if (!selectedAddress) {
      alert('Please select a billing address');
      return;
    }

    // Save order details to localStorage for payment processing
    const orderData = {
      items: items,
      total: getCartTotal(),
      billingAddress: selectedAddress,
      userEmail: user?.email
    };
    
    localStorage.setItem('pendingOrder', JSON.stringify(orderData));
    navigate('/payment-options');
  };

  const handleEditAddress = (address: any) => {
    // You can implement address editing here
    console.log('Edit address:', address);
  };

  const handleAuthClose = () => {
    setShowAuthDialog(false);
    if (!user) {
      navigate('/');
    }
  };

  if (items.length === 0) {
    return (
      <PageLayout title="Checkout" showBackButton={false}>
        <div className="max-w-2xl mx-auto text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some products to your cart to checkout.</p>
          <Button onClick={() => navigate('/shop')}>Continue Shopping</Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Checkout" showBackButton={false}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin size={20} />
                Billing Information
              </CardTitle>
              <CardDescription>
                Select or edit your billing address
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {userAddresses.length === 0 ? (
                <div className="text-center py-6">
                  <p className="text-muted-foreground mb-4">No saved addresses found</p>
                  <Button onClick={() => navigate('/address-setup')}>
                    Add Address
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {userAddresses.map((address, index) => (
                    <div
                      key={index}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedAddress === address
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedAddress(address)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Mail size={16} className="text-muted-foreground" />
                            <span className="text-sm">{address.email}</span>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            <Phone size={16} className="text-muted-foreground" />
                            <span className="text-sm">{address.phone}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin size={16} className="text-muted-foreground mt-0.5" />
                            <div className="text-sm">
                              <p>{address.street}</p>
                              <p>{address.city}, {address.state} {address.zipCode}</p>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditAddress(address);
                          }}
                        >
                          <Edit size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    onClick={() => navigate('/address-setup')}
                    className="w-full"
                  >
                    Add New Address
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">${getCartTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={handleProceedToPayment}
            className="w-full"
            size="lg"
            disabled={!selectedAddress}
          >
            <CreditCard className="mr-2 h-5 w-5" />
            Proceed to Payment
          </Button>
        </div>
      </div>

      {/* Auth Dialog for non-authenticated users */}
      <AuthDialog 
        isOpen={showAuthDialog} 
        onClose={handleAuthClose} 
      />
    </PageLayout>
  );
};

export default Checkout;
