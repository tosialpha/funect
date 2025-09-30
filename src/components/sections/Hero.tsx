import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Spline from "@splinetool/react-spline";
import { Card } from "../ui/card";
import { MapPin, Users, Trophy } from "@phosphor-icons/react";

const Hero = () => {
  const steps = [
    {
      icon: MapPin,
      title: "Find a Venue",
      description: "Browse and discover sports venues near you with real-time availability.",
    },
    {
      icon: Users,
      title: "Join or Create a Lobby",
      description: "Connect with players at your skill level and organize matches easily.",
    },
    {
      icon: Trophy,
      title: "Play and Connect",
      description: "Meet new people, stay active, and build lasting sports friendships.",
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
            Connect Through Sports
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Find venues, join lobbies, and meet players. Funect makes it easier than ever to stay active together.
          </p>
          <Button size="lg" className="neumorphic glow-hover text-lg px-8 py-6">
            Join Funect!
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Spline Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-[600px] relative isolate"
          >
            <div className="absolute inset-0 [&_canvas]:!bg-transparent [&>div]:!bg-transparent">
              <Spline 
                scene="https://prod.spline.design/K0UkJoRYVt9VXwCF/scene.splinecode"
                style={{ width: '100%', height: '100%', background: 'transparent' }}
              />
            </div>
          </motion.div>

          {/* Right: How It Works */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="mb-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">Getting started is simple</p>
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
              >
                <Card className="glass p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <step.icon size={24} weight="light" className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
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
