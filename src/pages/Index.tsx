import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Mission from "@/components/sections/Mission";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Animated Abstract Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Large Blob - Top Right */}
        <div 
          className="gradient-blob-1 absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, hsl(195, 85%, 75%), hsl(185, 90%, 70%))',
          }}
        />
        
        {/* Medium Blob - Left Center */}
        <div 
          className="gradient-blob-2 absolute top-1/4 -left-48 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, hsl(175, 70%, 80%), hsl(190, 85%, 75%))',
          }}
        />
        
        {/* Large Blob - Bottom Center */}
        <div 
          className="gradient-blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'linear-gradient(135deg, hsl(180, 80%, 85%), hsl(195, 90%, 80%))',
          }}
        />

        {/* Small Accent Blob - Top Left */}
        <div 
          className="gradient-blob-1 absolute top-20 left-1/4 w-[300px] h-[300px] rounded-full opacity-15 blur-2xl"
          style={{
            background: 'radial-gradient(circle, hsl(200, 75%, 80%), hsl(185, 70%, 85%))',
            animationDelay: '5s',
          }}
        />

        {/* Glassmorphism Layer - Top */}
        <div 
          className="gradient-blob-2 absolute -top-20 right-1/4 w-[450px] h-[450px] rounded-full opacity-20 blur-2xl"
          style={{
            background: 'linear-gradient(135deg, hsl(170, 65%, 85%), hsl(195, 75%, 80%))',
            animationDelay: '3s',
          }}
        />

        {/* Small Accent Blob - Bottom Right */}
        <div 
          className="gradient-blob-3 absolute bottom-32 right-20 w-[350px] h-[350px] rounded-full opacity-18 blur-2xl"
          style={{
            background: 'radial-gradient(circle, hsl(185, 80%, 82%), hsl(175, 70%, 88%))',
            animationDelay: '7s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Testimonials />
        <Mission />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
