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
            background: 'radial-gradient(ellipse at 30% 30%, rgba(100, 200, 255, 0.4), rgba(80, 180, 230, 0.3), rgba(130, 220, 250, 0.2))',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Large Secondary Blob - Left Center */}
        <div 
          className="gradient-blob-2 absolute top-1/4 -left-96 w-[1000px] h-[1000px]"
          style={{
            background: 'radial-gradient(ellipse at 60% 40%, rgba(70, 190, 220, 0.38), rgba(110, 210, 235, 0.28), rgba(150, 230, 245, 0.18))',
            filter: 'blur(70px)',
          }}
        />
        
        {/* Extra Large Bottom Blob */}
        <div 
          className="gradient-blob-3 absolute -bottom-48 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px]"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(120, 215, 240, 0.42), rgba(90, 200, 225, 0.32), rgba(160, 235, 250, 0.22))',
            filter: 'blur(80px)',
          }}
        />

        {/* Medium Accent Blob - Upper Left */}
        <div 
          className="gradient-blob-drift absolute top-32 left-1/4 w-[650px] h-[650px]"
          style={{
            background: 'radial-gradient(circle at 40% 50%, rgba(85, 205, 225, 0.36), rgba(125, 225, 240, 0.26), rgba(165, 235, 245, 0.16))',
            filter: 'blur(55px)',
            animationDelay: '5s',
          }}
        />

        {/* Medium Teal Blob - Right Center */}
        <div 
          className="gradient-blob-1 absolute top-1/3 right-1/4 w-[700px] h-[700px]"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(60, 180, 210, 0.4), rgba(100, 210, 230, 0.3), rgba(140, 225, 240, 0.2))',
            filter: 'blur(65px)',
            animationDelay: '10s',
          }}
        />

        {/* Small Accent Blob - Bottom Right */}
        <div 
          className="gradient-blob-drift absolute bottom-1/4 right-1/3 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle at 60% 60%, rgba(105, 215, 235, 0.34), rgba(145, 230, 242, 0.24), rgba(175, 240, 248, 0.14))',
            filter: 'blur(50px)',
            animationDelay: '15s',
          }}
        />

        {/* Overlay for subtle depth */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.2), transparent 70%)',
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
