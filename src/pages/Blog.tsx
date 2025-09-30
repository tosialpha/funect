import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CalendarBlank, Clock } from "@phosphor-icons/react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "5 Ways to Find Your Perfect Sports Community",
      excerpt: "Discover how Funect helps you connect with like-minded athletes and build lasting friendships through sports.",
      date: "September 15, 2025",
      readTime: "5 min read",
      category: "Community",
    },
    {
      id: 2,
      title: "The Rise of Padel: Why Everyone's Talking About It",
      excerpt: "Explore the fastest-growing sport in the world and why it's perfect for building social connections.",
      date: "September 8, 2025",
      readTime: "7 min read",
      category: "Sports",
    },
    {
      id: 3,
      title: "How to Organize the Perfect Pickup Game",
      excerpt: "Tips and tricks for creating engaging, well-organized games that keep players coming back.",
      date: "August 28, 2025",
      readTime: "6 min read",
      category: "Tips",
    },
    {
      id: 4,
      title: "Venue Spotlight: The Best Courts in Your City",
      excerpt: "A comprehensive guide to finding and booking the best sports venues in your area.",
      date: "August 20, 2025",
      readTime: "8 min read",
      category: "Venues",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Funect Articles
            </h1>
            <p className="text-xl md:text-2xl">
              Stories, tips, and insights from the sports community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${article.id}`}>
                  <Card className="glass p-6 h-full hover:scale-105 transition-transform cursor-pointer">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarBlank size={16} weight="light" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} weight="light" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
