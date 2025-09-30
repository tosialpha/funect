import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { CalendarBlank, Clock, ArrowLeft } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  const articles: { [key: string]: any } = {
    "1": {
      title: t('blog.article1.title'),
      date: "March 15, 2024",
      readTime: `5 ${t('blog.minRead')}`,
      category: t('blog.article1.category'),
      content: t('blog.article1.content'),
    },
    "2": {
      title: t('blog.article2.title'),
      date: "March 10, 2024",
      readTime: `7 ${t('blog.minRead')}`,
      category: t('blog.article2.category'),
      content: t('blog.article2.content'),
    },
    "3": {
      title: t('blog.article3.title'),
      date: "March 5, 2024",
      readTime: `6 ${t('blog.minRead')}`,
      category: t('blog.article3.category'),
      content: t('blog.article3.content'),
    },
    "4": {
      title: t('blog.article4.title'),
      date: "February 28, 2024",
      readTime: `8 ${t('blog.minRead')}`,
      category: t('blog.article4.category'),
      content: t('blog.article4.content'),
    },
  };

  const article = articles[id || "1"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft size={20} weight="light" className="mr-2" />
                {t('blog.backToArticles')}
              </Button>
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-muted-foreground mb-12">
              <div className="flex items-center gap-1">
                <CalendarBlank size={18} weight="light" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={18} weight="light" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75",
              }}
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;