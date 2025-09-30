import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "@phosphor-icons/react";
import { Badge } from "../ui/badge";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for casual players",
      features: [
        "Browse venues",
        "Join public lobbies",
        "Basic player matching",
        "Community access",
      ],
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      description: "For dedicated athletes",
      recommended: true,
      features: [
        "Everything in Free",
        "Create unlimited lobbies",
        "Priority booking",
        "Advanced matching",
        "Tournament entry",
        "No booking fees",
      ],
    },
    {
      name: "Club/Enterprise",
      price: "Custom",
      description: "For venues and organizations",
      features: [
        "Everything in Pro",
        "Venue management tools",
        "Analytics dashboard",
        "Custom branding",
        "API access",
        "Dedicated support",
      ],
    },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.recommended && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary">
                  Recommended
                </Badge>
              )}
              <Card className={`glass p-8 h-full ${plan.recommended ? 'border-primary border-2' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check size={20} weight="bold" className="text-secondary mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full neumorphic glow-hover">
                  {plan.name === "Club/Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
