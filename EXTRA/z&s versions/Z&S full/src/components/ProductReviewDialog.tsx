
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface ProductReviewDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
  onReviewSubmit: (review: any) => void;
}

const ProductReviewDialog = ({ isOpen, onClose, product, onReviewSubmit }: ProductReviewDialogProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating for this product.",
        variant: "destructive",
      });
      return;
    }

    const review = {
      id: Date.now().toString(),
      productId: product.id,
      productName: product.name,
      userId: user?.id,
      userName: user?.name,
      rating,
      comment,
      createdAt: new Date().toISOString()
    };

    // Save review to localStorage
    const existingReviews = JSON.parse(localStorage.getItem(`reviews_${user?.id}`) || '[]');
    existingReviews.push(review);
    localStorage.setItem(`reviews_${user?.id}`, JSON.stringify(existingReviews));

    onReviewSubmit(review);
    
    toast({
      title: "Review submitted!",
      description: "Thank you for your feedback.",
    });
    
    // Reset form
    setRating(0);
    setComment('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <p className="font-medium">{product?.name}</p>
            <p className="text-sm text-muted-foreground">Share your experience with this product</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Rating</Label>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="p-1"
                  >
                    <Star
                      size={24}
                      className={
                        star <= (hoveredRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="comment">Your Review (Optional)</Label>
              <Textarea
                id="comment"
                placeholder="Tell others about your experience with this product..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                Submit Review
              </Button>
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductReviewDialog;
