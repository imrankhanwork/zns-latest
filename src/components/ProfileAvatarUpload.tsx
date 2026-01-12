
import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';

interface ProfileAvatarUploadProps {
  userProfile: any;
  onAvatarUpdate: (avatarUrl: string) => void;
}

const ProfileAvatarUpload = ({ userProfile, onAvatarUpdate }: ProfileAvatarUploadProps) => {
  const { user } = useAuth();
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Create a FileReader to convert the file to base64
      const reader = new FileReader();
      reader.onload = (e) => {
        const avatarUrl = e.target?.result as string;
        onAvatarUpdate(avatarUrl);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative group">
      <Avatar className="h-20 w-20">
        <AvatarImage src={userProfile.avatar || user?.avatar} />
        <AvatarFallback className="text-lg">
          {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : user?.email.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <label htmlFor="avatar-upload" className="cursor-pointer">
          <div className="bg-white/20 rounded-full p-2">
            {isUploading ? (
              <Upload className="h-4 w-4 text-white animate-spin" />
            ) : (
              <Camera className="h-4 w-4 text-white" />
            )}
          </div>
        </label>
      </div>
      
      <input
        id="avatar-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileUpload}
        disabled={isUploading}
      />
    </div>
  );
};

export default ProfileAvatarUpload;
