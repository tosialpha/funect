import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/card";
import { Star } from "@phosphor-icons/react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      sport: "Padel",
      quote: "I've met 3 new padel partners through Funect! It's so easy to find people at my skill level.",
      outcome: "Met 3 new padel partners",
    },
    {
      name: "Marcus Lee",
      sport: "Basketball",
      quote: "Finally, a way to organize pickup games without endless group chats. Love the lobby system!",
      outcome: "Organized 15+ games",
    },
    {
      name: "Emma Rodriguez",
      sport: "Tennis",
      quote: "Discovered 5 amazing courts near me I didn't even know existed. Game changer!",
      outcome: "Discovered 5 new venues",
    },
    {
      name: "James Chen",
      sport: "Soccer",
      quote: "The community tournaments are incredible. Met so many awesome people through Funect.",
      outcome: "Joined 8 tournaments",
    },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-xl text-muted-foreground">
            Real stories from real players
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass p-6 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} weight="fill" className="text-primary" />
                  ))}
                </div>
                <p className="mb-6 italic">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.sport}</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium text-secondary">
                      ✓ {testimonial.outcome}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
