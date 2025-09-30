import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CalendarBlank, Clock } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();
  
  const articles = [
    {
      id: 1,
      title: t('blog.article1.title'),
      excerpt: t('blog.article1.excerpt'),
      date: "September 15, 2025",
      readTime: `5 ${t('blog.minRead')}`,
      category: t('blog.article1.category'),
    },
    {
      id: 2,
      title: t('blog.article2.title'),
      excerpt: t('blog.article2.excerpt'),
      date: "September 8, 2025",
      readTime: `7 ${t('blog.minRead')}`,
      category: t('blog.article2.category'),
    },
    {
      id: 3,
      title: t('blog.article3.title'),
      excerpt: t('blog.article3.excerpt'),
      date: "August 28, 2025",
      readTime: `6 ${t('blog.minRead')}`,
      category: t('blog.article3.category'),
    },
    {
      id: 4,
      title: t('blog.article4.title'),
      excerpt: t('blog.article4.excerpt'),
      date: "August 20, 2025",
      readTime: `8 ${t('blog.minRead')}`,
      category: t('blog.article4.category'),
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
              {t('blog.title')}
            </h1>
            <p className="text-xl md:text-2xl">
              {t('blog.subtitle')}
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
