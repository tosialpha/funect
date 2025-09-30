import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('mission.title')}</h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            {t('mission.text')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
