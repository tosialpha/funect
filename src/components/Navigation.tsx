import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import { useLanguage } from "../contexts/LanguageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Handle hash navigation when coming from another page or refreshing
    if (location.hash) {
      const id = location.hash.replace('#', '');
      
      // Wait longer for all components to mount when navigating between pages
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 80;
          const targetPosition = element.offsetTop - navHeight;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }, 100);
      
      return () => clearTimeout(timer);
    } else if (location.pathname === "/" && !location.hash) {
      // If navigating to home without hash, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleHashNavigation = (hash: string) => {
    if (!isHomePage) {
      navigate(`/#${hash}`);
    } else {
      scrollToSection(hash);
    }
  };

  const navLinks = isHomePage ? [
    { label: t('nav.howItWorks'), id: "how-it-works" },
    { label: t('nav.forVenues'), id: "pricing" },
    { label: t('nav.about'), to: "/about" },
    { label: t('nav.articles'), to: "/blog" },
    { label: t('nav.faq'), id: "faq" },
    { label: t('nav.contact'), to: "/contact" },
  ] : [
    { label: t('nav.howItWorks'), hash: "how-it-works" },
    { label: t('nav.forVenues'), hash: "pricing" },
    { label: t('nav.about'), to: "/about" },
    { label: t('nav.articles'), to: "/blog" },
    { label: t('nav.faq'), hash: "faq" },
    { label: t('nav.contact'), to: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-background/80" : "bg-transparent"
        }`}
        style={{ pointerEvents: 'auto' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-semibold text-gradient">
              Funect
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link) =>
                "id" in link ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ) : "hash" in link ? (
                  <button
                    key={link.hash}
                    onClick={() => handleHashNavigation(link.hash)}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to!}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            
            <div className="hidden md:block">
              <button
                onClick={() => setLanguage(language === 'en' ? 'fi' : 'en')}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors"
                aria-label="Change language"
              >
                <span className="text-xl">{language === 'en' ? '🇬🇧' : '🇫🇮'}</span>
                <span className="font-semibold text-foreground">{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <List size={28} weight="light" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-background shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-8">
            <button
              className="self-end mb-8"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} weight="light" />
            </button>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) =>
                "id" in link ? (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-xl text-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ) : "hash" in link ? (
                  <button
                    key={link.hash}
                    onClick={() => {
                      handleHashNavigation(link.hash);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-xl text-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to!}
                    className="text-xl text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'fi' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-colors mt-4"
              >
                <span className="text-2xl">{language === 'en' ? '🇬🇧' : '🇫🇮'}</span>
                <span className="text-xl font-semibold text-foreground">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
