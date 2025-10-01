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
      {/* Animated Fluid Background with Glassmorphism */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Large Primary Blob - Top Right */}
        <div 
          className="gradient-blob-1 absolute -top-64 -right-64 w-[900px] h-[900px]"
          style={{
            background: 'radial-gradient(ellipse at 30% 30%, rgba(165, 230, 245, 0.6), rgba(125, 215, 235, 0.4), rgba(180, 240, 250, 0.3))',
            filter: 'blur(80px)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(125, 215, 235, 0.2)',
          }}
        />
        
        {/* Large Secondary Blob - Left Center */}
        <div 
          className="gradient-blob-2 absolute top-1/4 -left-96 w-[1000px] h-[1000px]"
          style={{
            background: 'radial-gradient(ellipse at 60% 40%, rgba(130, 220, 230, 0.5), rgba(160, 235, 240, 0.35), rgba(190, 245, 250, 0.25))',
            filter: 'blur(90px)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(160, 235, 240, 0.15)',
          }}
        />
        
        {/* Extra Large Bottom Blob */}
        <div 
          className="gradient-blob-3 absolute -bottom-48 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(175, 235, 245, 0.55), rgba(145, 225, 235, 0.4), rgba(200, 245, 250, 0.3))',
            filter: 'blur(100px)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(175, 235, 245, 0.18)',
          }}
        />

        {/* Medium Accent Blob - Upper Left */}
        <div 
          className="gradient-blob-drift absolute top-32 left-1/4 w-[650px] h-[650px]"
          style={{
            background: 'radial-gradient(circle at 40% 50%, rgba(140, 225, 235, 0.45), rgba(170, 240, 245, 0.3), rgba(190, 245, 250, 0.2))',
            filter: 'blur(70px)',
            backdropFilter: 'blur(8px)',
            animationDelay: '5s',
          }}
        />

        {/* Medium Teal Blob - Right Center */}
        <div 
          className="gradient-blob-1 absolute top-1/3 right-1/4 w-[700px] h-[700px]"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(120, 210, 220, 0.5), rgba(155, 230, 240, 0.35), rgba(185, 240, 245, 0.25))',
            filter: 'blur(85px)',
            backdropFilter: 'blur(10px)',
            animationDelay: '10s',
          }}
        />

        {/* Small Accent Blob - Bottom Right */}
        <div 
          className="gradient-blob-drift absolute bottom-1/4 right-1/3 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle at 60% 60%, rgba(155, 230, 240, 0.4), rgba(180, 240, 245, 0.28), rgba(200, 245, 250, 0.18))',
            filter: 'blur(65px)',
            backdropFilter: 'blur(8px)',
            animationDelay: '15s',
          }}
        />

        {/* Overlay for subtle depth */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.3), transparent 70%)',
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
