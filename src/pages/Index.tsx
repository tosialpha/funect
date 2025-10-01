import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Mission from "@/components/sections/Mission";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-white">
      {/* Animated Fluid Background with Glassmorphism */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Large Primary Blob - Top Right */}
        <div 
          className="gradient-blob-1 absolute -top-32 -right-32 w-[800px] h-[800px]"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.5), rgba(72, 202, 228, 0.4), rgba(144, 224, 239, 0.3))',
            filter: 'blur(40px)',
          }}
        />
        
        {/* Large Secondary Blob - Left Center */}
        <div 
          className="gradient-blob-2 absolute top-1/4 -left-64 w-[900px] h-[900px]"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 206, 209, 0.45), rgba(64, 224, 208, 0.35), rgba(127, 255, 212, 0.25))',
            filter: 'blur(45px)',
          }}
        />
        
        {/* Extra Large Bottom Blob */}
        <div 
          className="gradient-blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px]"
          style={{
            background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.48), rgba(72, 209, 204, 0.38), rgba(175, 238, 238, 0.28))',
            filter: 'blur(50px)',
          }}
        />

        {/* Medium Accent Blob - Upper Left */}
        <div 
          className="gradient-blob-drift absolute top-20 left-1/4 w-[600px] h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.42), rgba(135, 206, 250, 0.32), rgba(176, 224, 230, 0.22))',
            filter: 'blur(35px)',
            animationDelay: '5s',
          }}
        />

        {/* Medium Teal Blob - Right Center */}
        <div 
          className="gradient-blob-1 absolute top-1/3 right-1/4 w-[650px] h-[650px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(0, 139, 139, 0.46), rgba(72, 209, 204, 0.36), rgba(175, 238, 238, 0.26))',
            filter: 'blur(38px)',
            animationDelay: '10s',
          }}
        />

        {/* Small Accent Blob - Bottom Right */}
        <div 
          className="gradient-blob-drift absolute bottom-1/4 right-1/4 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(64, 224, 208, 0.4), rgba(127, 255, 212, 0.3), rgba(175, 238, 238, 0.2))',
            filter: 'blur(32px)',
            animationDelay: '15s',
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
