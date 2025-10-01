import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { EnvelopeSimple, Phone } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-screen bg-white">
      {/* Animated Fluid Background with Glassmorphism */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
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

      <div className="relative z-10">
        <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gradient leading-[1.3] pb-2">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass p-8">
                <h2 className="text-2xl font-semibold mb-6">{t('contact.formTitle')}</h2>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t('contact.name')}</Label>
                    <Input id="name" placeholder={t('contact.namePlaceholder')} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('contact.email')}</Label>
                    <Input id="email" type="email" placeholder={t('contact.emailPlaceholder')} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="subject">{t('contact.subject')}</Label>
                    <Input id="subject" placeholder={t('contact.subjectPlaceholder')} className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">{t('contact.message')}</Label>
                    <Textarea 
                      id="message" 
                      placeholder={t('contact.messagePlaceholder')} 
                      className="mt-2 min-h-[150px]" 
                    />
                  </div>
                  <Button className="w-full neumorphic glow-hover">
                    {t('contact.send')}
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="glass p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <EnvelopeSimple size={24} weight="light" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('contact.emailLabel')}</h3>
                    <p className="text-muted-foreground">hello@funect.com</p>
                    <p className="text-muted-foreground">support@funect.com</p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} weight="light" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{t('contact.phoneLabel')}</h3>
                    <p className="text-muted-foreground">+358 44 058 2663</p>
                    <p className="text-sm text-muted-foreground mt-1">{t('contact.phoneHours')}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
};

export default Contact;
