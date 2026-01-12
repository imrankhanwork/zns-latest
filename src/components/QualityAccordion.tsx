
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const qualityFeatures = [
  {
    id: 'quality',
    title: 'Premium Quality',
    content: 'We use only the finest materials and state-of-the-art printing technology to ensure your designs look crisp, vibrant, and professional. Every product undergoes strict quality control.'
  },
  {
    id: 'innovation',
    title: 'Industry Innovation',
    content: 'Stay ahead with our cutting-edge printing techniques and latest design trends. We continuously invest in new technology to bring you the most innovative printing solutions.'
  },
  {
    id: 'weatherproof',
    title: 'Weatherproof Finishes',
    content: 'Our special coating technology makes all our products water-resistant, UV-protected, and scratch-resistant, ensuring your designs stay vibrant for years.'
  },
  {
    id: 'lasting',
    title: 'Long-lasting Prints',
    content: 'With our premium inks and advanced printing process, your custom designs will maintain their color and quality even after extensive use and washing.'
  }
];

const QualityAccordion = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative order-2 lg:order-10">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8">
              <img
                src="/assets/women2.jpg"
                alt="High quality sticker being applied"
                className="w-full h-auto  shadow-lg"
              />
              <img
                src="/assets/women4.jpg"
                alt="High quality sticker being applied"
                className="w-full h-auto shadow-lg"
              />
            </div>
            
            {/* Quality badges */}
            <div className="absolute -top-6 -left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Premium Quality
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Eco-Friendly
            </div>
          </div>

          {/* Right side - Accordion */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Why Choose Our
                <span className="block text-primary">Premium Quality?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We're committed to delivering excellence in every product we create.
              </p>
            </div>

            <Accordion type="single" collapsible defaultValue="quality">
              {qualityFeatures.map((feature) => (
                <AccordionItem key={feature.id} value={feature.id}>
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {feature.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {feature.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">99.8%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5⭐</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAccordion;
