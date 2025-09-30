import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "@phosphor-icons/react";
import { useLanguage } from "../../contexts/LanguageContext";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const features = [
    t('pricing.feature1'),
    t('pricing.feature2'),
    t('pricing.feature3'),
    t('pricing.feature4'),
    t('pricing.feature5'),
    t('pricing.feature6'),
    t('pricing.feature7'),
    t('pricing.feature8'),
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('pricing.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-2 border-border bg-background/95 backdrop-blur-sm p-12 shadow-xl">
            <div className="text-center mb-8">
              <div className="mb-8">
                <span className="text-5xl font-bold text-black dark:text-white">{t('pricing.custom')}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check size={24} weight="bold" className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-12 py-6 shadow-lg">
                {t('pricing.cta')}
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
