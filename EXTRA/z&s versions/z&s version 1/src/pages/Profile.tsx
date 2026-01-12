
import React, { useState, useEffect } from 'react';
import { User, Settings, MapPin, Package, Heart, Bell, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/PageLayout';
import { useAuth } from '@/contexts/AuthContext';
import AddressManagement from '@/components/AddressManagement';
import EditProfileDialog from '@/components/EditProfileDialog';
import MyOrders from '@/components/MyOrders';
import ProfileAvatarUpload from '@/components/ProfileAvatarUpload';
import { useWishlist } from '@/contexts/WishlistContext';
import ProductCard from '@/components/ProductCard';

const Profile = () => {
  const { user } = useAuth();
  const { wishlist } = useWishlist();
  const { toast } = useToast();
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: '',
  });

  // Settings state
  const [notifications, setNotifications] = useState({
    orderUpdates: false,
    promotionalEmails: false,
  });

  // Load user profile from localStorage or initialize with user data
  useEffect(() => {
    if (user) {
      const savedProfile = localStorage.getItem(`profile_${user.id}`);
      if (savedProfile) {
        setUserProfile(JSON.parse(savedProfile));
      } else {
        // Initialize with user data
        setUserProfile({
          name: user.name || '',
          email: user.email || '',
          phone: '',
          avatar: user.avatar || '',
        });
      }
    }
  }, [user]);

  const handleProfileUpdate = (updatedProfile: any) => {
    setUserProfile(updatedProfile);
    // Save to localStorage
    if (user) {
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(updatedProfile));
    }
  };

  const handleAvatarUpdate = (avatarUrl: string) => {
    const updatedProfile = { ...userProfile, avatar: avatarUrl };
    setUserProfile(updatedProfile);
    if (user) {
      localStorage.setItem(`profile_${user.id}`, JSON.stringify(updatedProfile));
    }
  };

  const handleNotificationToggle = (type: 'orderUpdates' | 'promotionalEmails') => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    toast({
      title: "Settings Updated",
      description: `${type === 'orderUpdates' ? 'Order updates' : 'Promotional emails'} ${!notifications[type] ? 'enabled' : 'disabled'}.`,
    });
  };

  const handleChangePassword = () => {
    toast({
      title: "Password Change",
      description: "Password change functionality would be implemented here.",
    });
  };

  const handleSetupTwoFactor = () => {
    toast({
      title: "Two-Factor Authentication",
      description: "Two-factor authentication setup would be implemented here.",
    });
  };

  const handleAddPaymentMethod = () => {
    toast({
      title: "Payment Method",
      description: "Add payment method functionality would be implemented here.",
    });
  };

  if (!user) {
    return (
      <PageLayout title="Profile">
        <div className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Please log in to view your profile</h2>
          <p className="text-muted-foreground">You need to be logged in to access your profile page.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="My Profile">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Profile Header */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <ProfileAvatarUpload 
                userProfile={userProfile} 
                onAvatarUpdate={handleAvatarUpdate}
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{userProfile.name || user.name || 'User'}</h1>
                <p className="text-muted-foreground">{userProfile.email || user.email}</p>
                <p className="text-sm text-muted-foreground">Member since {new Date().getFullYear()}</p>
              </div>
              <Button onClick={() => setShowEditProfile(true)}>
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package size={16} />
              Orders
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin size={16} />
              Addresses
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart size={16} />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings size={16} />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <MyOrders />
          </TabsContent>

          <TabsContent value="addresses">
            <AddressManagement />
          </TabsContent>

          <TabsContent value="wishlist">
            <Card>
              <CardHeader>
                <CardTitle>My Wishlist ({wishlist.length})</CardTitle>
                <CardDescription>Items you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                {wishlist.length === 0 ? (
                  <div className="text-center py-8">
                    <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
                    <p className="text-muted-foreground">Start adding items to your wishlist to see them here.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlist.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell size={20} />
                    Notifications
                  </CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Order Updates</p>
                        <p className="text-sm text-muted-foreground">Get notified about your order status</p>
                      </div>
                      <Switch
                        checked={notifications.orderUpdates}
                        onCheckedChange={() => handleNotificationToggle('orderUpdates')}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Promotional Emails</p>
                        <p className="text-sm text-muted-foreground">Receive offers and updates</p>
                      </div>
                      <Switch
                        checked={notifications.promotionalEmails}
                        onCheckedChange={() => handleNotificationToggle('promotionalEmails')}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield size={20} />
                    Security
                  </CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Change Password</p>
                        <p className="text-sm text-muted-foreground">Update your account password</p>
                      </div>
                      <Button variant="outline" size="sm" onClick={handleChangePassword}>
                        Change
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Button variant="outline" size="sm" onClick={handleSetupTwoFactor}>
                        Setup
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard size={20} />
                    Payment Methods
                  </CardTitle>
                  <CardDescription>Manage your saved payment methods</CardDescription>
                </CardHeader>
                <CardContent className="text-center py-8">
                  <CreditCard className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No payment methods saved</h3>
                  <p className="text-muted-foreground">Add a payment method to make checkout faster.</p>
                  <Button className="mt-4" variant="outline" onClick={handleAddPaymentMethod}>
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <EditProfileDialog 
          isOpen={showEditProfile} 
          onClose={() => setShowEditProfile(false)}
          userProfile={userProfile}
          onUpdate={handleProfileUpdate}
        />
      </div>
    </PageLayout>
  );
};

export default Profile;
