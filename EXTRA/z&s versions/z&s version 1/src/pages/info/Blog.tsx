
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Apply Laptop Skins Like a Pro",
      excerpt: "Learn the best techniques for bubble-free laptop skin application...",
      date: "December 15, 2024",
      author: "Z&S Team"
    },
    {
      title: "Top 10 Sticker Trends for 2024",
      excerpt: "Discover the hottest sticker designs and themes that are trending this year...",
      date: "December 10, 2024",
      author: "Design Team"
    },
    {
      title: "Care and Maintenance of Your Custom Skins",
      excerpt: "Keep your device skins looking fresh with these simple care tips...",
      date: "December 5, 2024",
      author: "Support Team"
    },
    {
      title: "Custom Design Ideas for Your Next Project",
      excerpt: "Get inspired with these creative custom design ideas for stickers and skins...",
      date: "November 30, 2024",
      author: "Creative Team"
    }
  ];

  return (
    <PageLayout title="Blog">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            Tips, trends, and inspiration for all things custom printing and design.
          </p>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="hover:text-primary cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {post.excerpt}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
