import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Heart, Lightbulb } from "@phosphor-icons/react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Vision",
      description: "To create a world where staying active and connecting with others through sports is effortless for everyone.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Community, inclusivity, and passion for sports drive everything we do at Funect.",
    },
    {
      icon: Lightbulb,
      title: "Our Innovation",
      description: "We're constantly evolving with new features to make sports more accessible and social.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              About Funect
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              We're on a mission to make sports more social, accessible, and fun for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-lg leading-relaxed mb-6">
              Founded in 2025, Funect started with a simple observation: finding people to play sports with 
              and discovering great venues was unnecessarily difficult. We set out to change that.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We're building a platform to connect athletes of all levels, from casual players to competitive 
              competitors, making it easier to stay active and build meaningful connections through sports.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you're looking for a pickup basketball game, a tennis partner, or a padel tournament, 
              Funect brings the sports community together in one intuitive platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="glass p-6 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon size={24} weight="light" className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
