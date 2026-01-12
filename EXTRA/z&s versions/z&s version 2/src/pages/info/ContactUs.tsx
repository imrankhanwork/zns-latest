
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <PageLayout title="Contact Us">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            We're here to help! Get in touch with us for any questions, custom orders, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Phone className="text-primary" />
                <CardTitle>Phone</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">+91 7506232907</p>
              <p className="text-muted-foreground">Call us for immediate assistance</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="text-primary" />
                <CardTitle>Email</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">wecare@stickitup.xyz</p>
              <p className="text-muted-foreground">Email us for detailed inquiries</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" />
              <CardTitle>Visit Our Store</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium mb-2">Stickitup</p>
            <p className="text-muted-foreground">
              Arthi Road, Dahisar East, behind Rajshree Cinema,<br />
              Mumbai, Maharashtra 400068
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Clock className="text-primary" />
              <CardTitle>Business Hours</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
