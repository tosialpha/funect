import { motion } from "framer-motion";
import { Button } from "../ui/button";
import heroMockup from "../../assets/hero-mockup-new.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient pb-2 leading-tight">
            Connect Through Sports
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Find venues, join lobbies, and meet players. Funect makes it easier than ever to stay active together.
          </p>
          <Button size="lg" className="neumorphic glow-hover text-lg px-8 py-6">
            Join Funect!
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <img
            src={heroMockup}
            alt="Funect App Interface"
            className="max-w-4xl w-full mx-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
