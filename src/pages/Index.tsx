import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import Mission from "@/components/sections/Mission";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Mission />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
