import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthDialog = ({ isOpen, onClose }: AuthDialogProps) => {
  const navigate = useNavigate();
  const { login, loginWithGoogle, register, isLoading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { toast } = useToast()

  useEffect(() => {
    // Reset form and error when dialog opens/closes
    if (isOpen) {
      setFormData({ name: '', email: '', password: '' });
      setError('');
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const success = await login(formData.email, formData.password);
      if (success) {
        onClose();
        navigate('/profile');
        toast({
          title: "Login successful!",
          description: "You have successfully logged in.",
        })
      } else {
        setError('Invalid email or password');
        toast({
          variant: "destructive",
          title: "Login failed!",
          description: "Invalid email or password.",
        })
      }
    } else {
      const success = await register(formData.name, formData.email, formData.password);
      if (success) {
        onClose();
        // New user goes to address setup page
        navigate('/address-setup');
        toast({
          title: "Registration successful!",
          description: "You have successfully registered.",
        })
      } else {
        setError('Registration failed');
        toast({
          variant: "destructive",
          title: "Registration failed!",
          description: "Please try again.",
        })
      }
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    const result = await loginWithGoogle();
    if (result.success) {
      onClose();
      if (result.isNewUser) {
        // New Google user goes to address setup first
        navigate('/address-setup');
        toast({
          title: "Welcome!",
          description: "Please complete your profile setup.",
        })
      } else {
        // Existing Google user goes to profile
        navigate('/profile');
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        })
      }
    } else {
      setError('Failed to sign in with Google');
      toast({
        variant: "destructive",
        title: "Google sign in failed!",
        description: "Please try again.",
      })
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isLogin ? 'Login' : 'Register'}</DialogTitle>
          <DialogDescription>
            {isLogin ? 'Enter your email and password to login' : 'Enter your details to create an account'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          {!isLogin && (
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <DialogFooter className="flex flex-col gap-2">
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Loading...' : (isLogin ? 'Login' : 'Register')}
            </Button>
            
            <Button 
              type="button"
              variant="outline" 
              onClick={handleGoogleLogin} 
              disabled={isLoading}
              className="w-full"
            >
              Sign In with Google
            </Button>
          </DialogFooter>
        </form>
        
        <div className="text-center text-sm text-muted-foreground">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <button type="button" className="text-primary hover:underline" onClick={() => setIsLogin(false)}>
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button type="button" className="text-primary hover:underline" onClick={() => setIsLogin(true)}>
                Login
              </button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
