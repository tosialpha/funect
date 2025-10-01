import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import Mission from "@/components/sections/Mission";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";

const Index = () => {
  return (
    <div className="relative bg-white">
      {/* Animated Fluid Background with Glassmorphism */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden pointer-events-none" style={{ minHeight: '100vh' }}>
        {/* White overlay at top for text readability */}
        <div 
          className="absolute top-0 left-0 right-0 h-[500px] z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 40%, transparent 100%)',
          }}
        />

        {/* Large Primary Blob - Top Right (pushed down) */}
        <div 
          className="gradient-blob-1 absolute top-32 -right-32 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgb(0, 180, 216), rgb(72, 202, 228), rgb(144, 224, 239))',
            filter: 'blur(40px)',
          }}
        />
        
        {/* Large Secondary Blob - Left Center */}
        <div 
          className="gradient-blob-2 absolute top-1/3 -left-64 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgb(0, 206, 209), rgb(64, 224, 208), rgb(127, 255, 212))',
            filter: 'blur(45px)',
          }}
        />
        
        {/* Extra Large Bottom Blob */}
        <div 
          className="gradient-blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgb(32, 178, 170), rgb(72, 209, 204), rgb(175, 238, 238))',
            filter: 'blur(50px)',
          }}
        />

        {/* Medium Accent Blob - Upper Left (reduced) */}
        <div 
          className="gradient-blob-drift absolute top-64 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgb(0, 191, 255), rgb(135, 206, 250), rgb(176, 224, 230))',
            filter: 'blur(35px)',
            animationDelay: '5s',
          }}
        />

        {/* Medium Teal Blob - Right Center */}
        <div 
          className="gradient-blob-1 absolute top-1/2 right-1/4 w-[650px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgb(0, 139, 139), rgb(72, 209, 204), rgb(175, 238, 238))',
            filter: 'blur(38px)',
            animationDelay: '10s',
          }}
        />

        {/* Small Accent Blob - Bottom Right */}
        <div 
          className="gradient-blob-drift absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgb(64, 224, 208), rgb(127, 255, 212), rgb(175, 238, 238))',
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
