import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  // Get order ID from URL params if present
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('id');
    if (orderId) {
      setOrderNumber(orderId);
      handleTrackWithId(orderId);
    }
  }, []);

  const handleTrackWithId = (id: string) => {
    setNotFound(false);
    setOrderDetails(null);
    
    if (!id.trim()) return;
    
    // Get orders from localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    console.log('Available orders:', orders);
    const order = orders.find((o: any) => o.id === id.trim());
    
    if (order) {
      console.log('Found order:', order);
      setOrderDetails(order);
    } else {
      console.log('Order not found for ID:', id.trim());
      setNotFound(true);
    }
  };

  const handleTrack = () => {
    handleTrackWithId(orderNumber);
  };

  const getStatusStep = (status: string) => {
    switch (status) {
      case 'Processing':
        return 0;
      case 'Shipped':
        return 1;
      case 'Delivered':
        return 2;
      default:
        return 0;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleContactSupport = () => {
    navigate('/info/contact-us');
  };

  return (
    <PageLayout title="Track Your Order">
      <div className="max-w-2xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Search className="text-primary" />
              <CardTitle>Enter Order Details</CardTitle>
            </div>
            <CardDescription>Enter your order number to track its status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter your order number"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="flex-1"
                onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
              />
              <Button onClick={handleTrack}>
                Track Order
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Your order number can be found in your confirmation email or receipt.
            </p>
          </CardContent>
        </Card>

        {notFound && (
          <Card className="border-destructive">
            <CardContent className="p-6 text-center">
              <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Order Not Found</h3>
              <p className="text-muted-foreground">
                We couldn't find an order with that number. Please check your order number and try again.
              </p>
            </CardContent>
          </Card>
        )}

        {orderDetails && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order #{orderDetails.id}</CardTitle>
                <CardDescription>
                  Placed on {formatDate(orderDetails.createdAt)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium">Status</p>
                    <p className="text-lg">{orderDetails.status}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Total</p>
                    <p className="text-lg">₹{orderDetails.total?.toFixed(2) || '0.00'}</p>
                  </div>
                </div>
                
                {orderDetails.estimatedDelivery && (
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      Expected delivery: {formatDate(orderDetails.estimatedDelivery)}
                    </span>
                  </div>
                )}

                <div>
                  <p className="text-sm font-medium mb-2">Items Ordered</p>
                  <div className="space-y-2">
                    {orderDetails.items?.map((item: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-muted rounded">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-8 h-8 rounded object-cover" />
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm">x{item.quantity}</span>
                          <p className="text-xs text-muted-foreground">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    )) || (
                      <p className="text-sm text-muted-foreground">No items found</p>
                    )}
                  </div>
                </div>

                {orderDetails.billingInfo && (
                  <div>
                    <p className="text-sm font-medium mb-2">Shipping Address</p>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-1" />
                      <div className="text-sm text-muted-foreground">
                        <p>{orderDetails.billingInfo.fullName || `${orderDetails.billingInfo.firstName} ${orderDetails.billingInfo.lastName}`}</p>
                        <p>{orderDetails.billingInfo.address}</p>
                        <p>{orderDetails.billingInfo.city}, {orderDetails.billingInfo.state} {orderDetails.billingInfo.zipCode}</p>
                        <p>{orderDetails.billingInfo.email}</p>
                        <p>{orderDetails.billingInfo.phone}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className={orderDetails && getStatusStep(orderDetails.status) >= 0 ? 'border-primary' : ''}>
            <CardHeader className="text-center">
              <Package className={`mx-auto mb-2 ${orderDetails && getStatusStep(orderDetails.status) >= 0 ? 'text-primary' : 'text-muted-foreground'}`} size={32} />
              <CardTitle className="text-lg">Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Your order is being prepared
              </p>
            </CardContent>
          </Card>
          
          <Card className={orderDetails && getStatusStep(orderDetails.status) >= 1 ? 'border-primary' : ''}>
            <CardHeader className="text-center">
              <Truck className={`mx-auto mb-2 ${orderDetails && getStatusStep(orderDetails.status) >= 1 ? 'text-primary' : 'text-muted-foreground'}`} size={32} />
              <CardTitle className="text-lg">Shipped</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Your order is on its way
              </p>
            </CardContent>
          </Card>
          
          <Card className={orderDetails && getStatusStep(orderDetails.status) >= 2 ? 'border-primary' : ''}>
            <CardHeader className="text-center">
              <CheckCircle className={`mx-auto mb-2 ${orderDetails && getStatusStep(orderDetails.status) >= 2 ? 'text-primary' : 'text-muted-foreground'}`} size={32} />
              <CardTitle className="text-lg">Delivered</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Order has been delivered
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you're having trouble tracking your order or have any questions, please contact our support team.
            </p>
            <Button variant="outline" onClick={handleContactSupport}>
              Contact Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default TrackOrder;
