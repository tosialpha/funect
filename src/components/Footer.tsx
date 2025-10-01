import { Link } from "react-router-dom";
import { InstagramLogo, TiktokLogo, LinkedinLogo } from "@phosphor-icons/react";
import appStoreBadge from "../assets/app-store-badge-new.png";
import googlePlayBadge from "../assets/google-play-badge-new.webp";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-12 mb-12 text-center md:gap-16">
          <div className="flex-1 max-w-xs mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Funect</h3>
            <p className="text-muted-foreground mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#" className="hover:text-primary transition-colors">
                <InstagramLogo size={24} weight="light" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <TiktokLogo size={24} weight="light" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <LinkedinLogo size={24} weight="light" />
              </a>
            </div>
          </div>

          <div className="flex-1 max-w-xs mx-auto">
            <h4 className="font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.faq')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('pricing.title')}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.howItWorks')}
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 max-w-xs mx-auto">
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.articles')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1 max-w-xs mx-auto">
            <h4 className="font-semibold mb-4">{t('footer.downloadApp')}</h4>
            <div className="flex flex-col gap-3 items-center">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src={appStoreBadge} 
                  alt="Download on the App Store" 
                  className="w-full max-w-[160px]"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src={googlePlayBadge} 
                  alt="Get it on Google Play" 
                  className="w-full max-w-[160px]"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <Link to="/terms" className="hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
            <span className="hidden md:inline">•</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              {t('footer.privacy')}
            </Link>
          </div>
          <p>© {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
