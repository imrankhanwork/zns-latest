
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <PageLayout title="About Z&S Designs">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <p className="text-xl text-muted-foreground">
            "There's a sticker for that!? Yes, there's a sticker for everyone."
          </p>
          <div className="text-yellow-400 font-medium">
            Made with ♥ in India
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="text-primary" />
                <CardTitle>Our Passion</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in the power of self-expression through custom designs. Every sticker and skin we create helps people showcase their personality.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="text-primary" />
                <CardTitle>Our Community</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Thousands of customers trust us to bring their ideas to life. From individual orders to bulk corporate needs, we serve everyone.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="text-primary" />
                <CardTitle>Our Quality</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We use only premium materials and state-of-the-art printing technology to ensure every product meets our high standards.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Z&S Designs started with a simple idea: everyone deserves to express themselves uniquely. What began as a small operation in Mumbai has grown into India's premier custom printing service.
          </p>
          <p className="text-muted-foreground">
            Today, we're proud to serve customers across India and beyond, helping them turn their creative visions into reality through high-quality stickers, skins, and custom apparel.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
