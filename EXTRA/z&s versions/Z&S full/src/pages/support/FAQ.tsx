
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <PageLayout title="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              Standard shipping typically takes 3-5 business days within India. Express shipping is available for 1-2 business days delivery. International shipping may take 7-14 business days depending on the destination.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>What materials do you use for stickers and skins?</AccordionTrigger>
            <AccordionContent>
              We use premium vinyl material that is waterproof, fade-resistant, and designed to last. Our adhesive is strong yet removable, ensuring it won't damage your devices when removed properly.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I return or exchange my order?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer returns and exchanges within 7 days of delivery for defective or damaged items. Custom orders with personalized designs may have different return policies. Please check our refund policy for complete details.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger>Do you offer bulk discounts?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer special pricing for bulk orders. Discounts start from orders of 50+ pieces. Contact us with your requirements for a custom quote.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger>How do I apply laptop skins without bubbles?</AccordionTrigger>
            <AccordionContent>
              Start from one edge and slowly work your way across, using a credit card or squeegee to smooth out air bubbles as you go. Make sure your device is clean and dry before application. If bubbles appear, gently lift and reapply that section.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger>What file formats do you accept for custom designs?</AccordionTrigger>
            <AccordionContent>
              We accept PNG, JPG, PDF, AI, and PSD files. For best quality, we recommend high-resolution files (300 DPI or higher) in PNG or PDF format. Vector files (AI) are preferred for designs that need to be resized.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger>Are your stickers weather-resistant?</AccordionTrigger>
            <AccordionContent>
              Yes, our premium vinyl stickers are designed to withstand outdoor conditions including rain, UV rays, and temperature variations. They're perfect for both indoor and outdoor use.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8">
            <AccordionTrigger>How can I track my order?</AccordionTrigger>
            <AccordionContent>
              Once your order ships, you'll receive a tracking number via email. You can also use our order tracking page to check the status of your order anytime.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </PageLayout>
  );
};

export default FAQ;
