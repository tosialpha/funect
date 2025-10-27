import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { MapPin, Users, Trophy } from "@phosphor-icons/react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Suspense, lazy, useState, useEffect } from "react";

// Lazy load Spline component
const LazySpline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  const { t } = useLanguage();
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);

  useEffect(() => {
    // Check network connection speed
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;

    if (connection) {
      const effectiveType = connection.effectiveType;
      // Load Spline on 3G and above, skip on slow 2G
      if (effectiveType !== 'slow-2g' && effectiveType !== '2g') {
        setShouldLoadSpline(true);
      }
    } else {
      // If we can't detect connection, load anyway (most modern browsers/connections)
      setShouldLoadSpline(true);
    }
  }, []);

  const steps = [
    {
      icon: MapPin,
      title: t('hero.step1.title'),
      description: t('hero.step1.desc'),
    },
    {
      icon: Users,
      title: t('hero.step2.title'),
      description: t('hero.step2.desc'),
    },
    {
      icon: Trophy,
      title: t('hero.step3.title'),
      description: t('hero.step3.desc'),
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient pb-2 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Button size="lg" className="neumorphic glow-hover text-lg px-8 py-6">
            {t('hero.cta')}
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Spline Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-[750px] relative isolate -mt-44"
          >
            {shouldLoadSpline && (
              <div className="absolute inset-0 [&_canvas]:!bg-transparent [&>div]:!bg-transparent pointer-events-none">
                <Suspense fallback={<div className="w-full h-full" />}>
                  <LazySpline
                    scene="/dynamic_i_phone_mockup.spline"
                    style={{ width: '100%', height: '100%', background: 'transparent', pointerEvents: 'none' }}
                    onLoad={() => setSplineLoaded(true)}
                  />
                </Suspense>
              </div>
            )}
          </motion.div>

          {/* Right: How It Works */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="mb-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('hero.howItWorks')}</h2>
              <p className="text-xl text-foreground/80">{t('hero.howItWorksSubtitle')}</p>
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
              >
                <Card className="border-2 border-border bg-background shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon size={24} weight="light" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                      <p className="text-foreground/80">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
