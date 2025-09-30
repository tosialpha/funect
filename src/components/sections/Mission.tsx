import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            At Funect, we believe that sports have the power to bring people together. 
            Our mission is to make it easier for everyone to{" "}
            <span className="text-gradient font-semibold">connect through sports</span>, 
            discover amazing venues, and stay active as a community. Whether you're a seasoned 
            athlete or just starting out, Funect is here to help you find your people and your place.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
