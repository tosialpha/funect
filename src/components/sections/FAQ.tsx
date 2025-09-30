import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "How does Funect work?",
      answer: "Funect connects you with sports venues and players in your area. Simply create an account, browse venues or lobbies, and start playing! You can book venues directly or join/create lobbies to find players at your skill level.",
    },
    {
      question: "Is Funect free to use?",
      answer: "Yes! We offer a free plan that lets you browse venues, join public lobbies, and access our community. Our Pro plan ($9.99/month) unlocks premium features like unlimited lobby creation, priority booking, and tournament access.",
    },
    {
      question: "What sports are available on Funect?",
      answer: "Funect supports a wide range of sports including tennis, padel, basketball, soccer, volleyball, pickleball, and more. New sports and venues are being added regularly based on community demand.",
    },
    {
      question: "How does player matching work?",
      answer: "Our smart matching algorithm considers your skill level, location, preferred sports, and playing schedule to suggest compatible players.",
    },
    {
      question: "Can venues join Funect?",
      answer: "Absolutely! We offer a Club/Enterprise plan specifically for venues and sports organizations. This includes management tools, analytics, custom branding, and more. Contact our sales team for a custom quote.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
