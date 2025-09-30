import { Link } from "react-router-dom";
import { InstagramLogo, TiktokLogo, LinkedinLogo } from "@phosphor-icons/react";
import appStoreBadges from "../assets/app-store-badges.png";

const Footer = () => {
  return (
    <footer className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Funect</h3>
            <p className="text-muted-foreground mb-4">
              Connect through sports. Discover venues. Stay active together.
            </p>
            <div className="flex gap-4">
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

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Club/Enterprise
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Download App</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img 
                  src={appStoreBadges} 
                  alt="Available on App Store and Google Play" 
                  className="w-full max-w-[200px] -ml-2"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span className="hidden md:inline">•</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p>&copy; 2025 Funect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
