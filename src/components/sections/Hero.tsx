import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Spline from "@splinetool/react-spline";

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
          className="mt-16 w-full max-w-4xl mx-auto h-[600px]"
        >
          <Spline scene="https://prod.spline.design/bMz04PEgc1nHtuxwCn7oPGpI/scene.splinecode" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
