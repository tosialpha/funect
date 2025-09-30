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
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gradient leading-tight">
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
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
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
  );
};

export default Contact;
