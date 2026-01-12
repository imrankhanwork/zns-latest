
import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import AddressForm from './AddressForm';

interface Address {
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  isDefault: boolean;
}

const AddressManagement = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);

  useEffect(() => {
    if (user?.id) {
      const savedAddresses = JSON.parse(localStorage.getItem(`addresses_${user.id}`) || '[]');
      setAddresses(savedAddresses);
    }
  }, [user?.id]);

  const saveAddresses = (newAddresses: Address[]) => {
    if (user?.id) {
      localStorage.setItem(`addresses_${user.id}`, JSON.stringify(newAddresses));
      setAddresses(newAddresses);
    }
  };

  const handleAddAddress = (addressData: Omit<Address, 'id'>) => {
    const newAddress: Address = {
      ...addressData,
      id: Date.now().toString(),
      isDefault: addresses.length === 0
    };
    
    const updatedAddresses = [...addresses, newAddress];
    saveAddresses(updatedAddresses);
    setShowAddForm(false);
    
    toast({
      title: "Address added!",
      description: "Your new address has been saved.",
    });
  };

  const handleEditAddress = (addressData: Omit<Address, 'id'>) => {
    if (!editingAddress) return;
    
    const updatedAddresses = addresses.map(addr =>
      addr.id === editingAddress.id
        ? { ...addressData, id: editingAddress.id }
        : addr
    );
    
    saveAddresses(updatedAddresses);
    setEditingAddress(null);
    
    toast({
      title: "Address updated!",
      description: "Your address has been updated.",
    });
  };

  const handleDeleteAddress = (addressId: string) => {
    const addressToDelete = addresses.find(addr => addr.id === addressId);
    const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
    
    // If we're deleting the default address and there are other addresses, make the first one default
    if (addressToDelete?.isDefault && updatedAddresses.length > 0) {
      updatedAddresses[0].isDefault = true;
    }
    
    saveAddresses(updatedAddresses);
    
    toast({
      title: "Address deleted!",
      description: "The address has been removed.",
    });
  };

  const handleSetDefault = (addressId: string) => {
    const updatedAddresses = addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === addressId
    }));
    
    saveAddresses(updatedAddresses);
    
    toast({
      title: "Default address updated!",
      description: "Your default address has been changed.",
    });
  };

  if (showAddForm) {
    return (
      <AddressForm
        onSave={handleAddAddress}
        onCancel={() => setShowAddForm(false)}
        title="Add New Address"
      />
    );
  }

  if (editingAddress) {
    return (
      <AddressForm
        address={editingAddress}
        onSave={handleEditAddress}
        onCancel={() => setEditingAddress(null)}
        title="Edit Address"
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Manage Addresses</h3>
        <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
          <Plus size={16} />
          Add New Address
        </Button>
      </div>

      {addresses.length === 0 ? (
        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">No addresses saved yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {addresses.map((address) => (
            <Card key={address.id} className={address.isDefault ? "border-primary" : ""}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={16} className="text-muted-foreground" />
                      {address.isDefault && <Badge variant="secondary">Default</Badge>}
                    </div>
                    <p className="font-medium">{address.street}</p>
                    <p className="text-muted-foreground">
                      {address.city}, {address.state} {address.zip}
                    </p>
                  </div>
                  
                  <div className="flex gap-2">
                    {!address.isDefault && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSetDefault(address.id)}
                      >
                        Set Default
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingAddress(address)}
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteAddress(address.id)}
                      disabled={addresses.length === 1}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressManagement;
