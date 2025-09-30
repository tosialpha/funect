import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "@phosphor-icons/react";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Venue management tools",
    "Analytics dashboard",
    "Custom branding",
    "API access",
    "Dedicated support",
    "Priority booking system",
    "Multi-location support",
    "White-label options",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Club/Enterprise Solutions</h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools for venues and organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="glass p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Club/Enterprise</h3>
              <p className="text-muted-foreground mb-6">
                Custom solutions tailored to your organization's needs
              </p>
              <div className="mb-8">
                <span className="text-5xl font-bold">Custom Pricing</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check size={24} weight="bold" className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="neumorphic glow-hover text-lg px-12 py-6">
                Contact Sales
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
