
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import PageLayout from '@/components/PageLayout';
import AddressForm from '@/components/AddressForm';

const AddressSetup = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleAddressSave = (address: any) => {
    // Save address to user profile
    const savedAddresses = JSON.parse(localStorage.getItem(`addresses_${user?.id}`) || '[]');
    const newAddress = {
      ...address,
      id: Date.now().toString(),
      isDefault: savedAddresses.length === 0 // First address is default
    };
    
    savedAddresses.push(newAddress);
    localStorage.setItem(`addresses_${user?.id}`, JSON.stringify(savedAddresses));
    
    // Update user profile with default address
    const userProfile = JSON.parse(localStorage.getItem(`profile_${user?.id}`) || '{}');
    userProfile.address = `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
    localStorage.setItem(`profile_${user?.id}`, JSON.stringify(userProfile));
    
    toast({
      title: "Address saved!",
      description: "Your address has been added to your profile.",
    });
    
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <PageLayout title="Complete Your Profile" showBackButton={false}>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-center">
          <p className="text-muted-foreground">
            Please add your address to complete your profile setup.
          </p>
        </div>
        <AddressForm
          onSave={handleAddressSave}
          onCancel={handleCancel}
          title="Add Your Address"
        />
      </div>
    </PageLayout>
  );
};

export default AddressSetup;
