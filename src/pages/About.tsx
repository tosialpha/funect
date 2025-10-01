import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Buildings } from "@phosphor-icons/react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Target,
      title: t('about.vision'),
      description: t('about.visionDesc'),
    },
    {
      icon: Heart,
      title: t('about.values'),
      description: t('about.valuesDesc'),
    },
    {
      icon: Lightbulb,
      title: t('about.innovation'),
      description: t('about.innovationDesc'),
    },
    {
      icon: Buildings,
      title: t('about.venues'),
      description: t('about.venuesDesc'),
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* Animated Fluid Background with Glassmorphism */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* White overlay at top for text readability */}
        <div 
          className="absolute top-0 left-0 right-0 h-[500px] z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 40%, transparent 100%)',
          }}
        />

        {/* Large Primary Blob - Top Right (pushed down) */}
        <div 
          className="gradient-blob-1 absolute top-32 -right-32 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgb(0, 180, 216), rgb(72, 202, 228), rgb(144, 224, 239))',
            filter: 'blur(40px)',
          }}
        />
        
        {/* Large Secondary Blob - Left Center */}
        <div 
          className="gradient-blob-2 absolute top-1/3 -left-64 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgb(0, 206, 209), rgb(64, 224, 208), rgb(127, 255, 212))',
            filter: 'blur(45px)',
          }}
        />
        
        {/* Extra Large Bottom Blob */}
        <div 
          className="gradient-blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgb(32, 178, 170), rgb(72, 209, 204), rgb(175, 238, 238))',
            filter: 'blur(50px)',
          }}
        />

        {/* Medium Accent Blob - Upper Left (reduced) */}
        <div 
          className="gradient-blob-drift absolute top-64 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgb(0, 191, 255), rgb(135, 206, 250), rgb(176, 224, 230))',
            filter: 'blur(35px)',
            animationDelay: '5s',
          }}
        />

        {/* Medium Teal Blob - Right Center */}
        <div 
          className="gradient-blob-1 absolute top-1/2 right-1/4 w-[650px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgb(0, 139, 139), rgb(72, 209, 204), rgb(175, 238, 238))',
            filter: 'blur(38px)',
            animationDelay: '10s',
          }}
        />

        {/* Small Accent Blob - Bottom Right */}
        <div 
          className="gradient-blob-drift absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgb(64, 224, 208), rgb(127, 255, 212), rgb(175, 238, 238))',
            filter: 'blur(32px)',
            animationDelay: '15s',
          }}
        />
      </div>

      <div className="relative z-10">
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
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-lg leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            <p className="text-lg leading-relaxed mb-6">
              {t('about.p2')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('about.p3')}
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
    </div>
  );
};

export default About;
