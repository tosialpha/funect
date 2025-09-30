import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.howItWorks': 'How It Works',
    'nav.faq': 'FAQ',
    'nav.about': 'About',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Connect Through Sports',
    'hero.subtitle': 'Find venues, join lobbies, and meet players. Funect makes it easier than ever to stay active together.',
    'hero.cta': 'Join Funect!',
    'hero.howItWorks': 'How It Works',
    'hero.howItWorksSubtitle': 'Getting started is simple',
    'hero.step1.title': 'Find a Venue',
    'hero.step1.desc': 'Browse and discover sports venues near you with real-time availability.',
    'hero.step2.title': 'Join or Create a Lobby',
    'hero.step2.desc': 'Connect with players at your skill level and organize matches easily.',
    'hero.step3.title': 'Play and Connect',
    'hero.step3.desc': 'Meet new people, stay active, and build lasting sports friendships.',
    
    // Testimonials
    'testimonials.title': 'What Our Community Says',
    'testimonials.subtitle': 'Real stories from real players',
    
    // Mission  
    'mission.title': 'Our Mission',
    'mission.text': 'At Funect, we believe sports have the power to bring people together. Our mission is to make staying active and building connections easier than ever—to find great venues, stay active, and build community. Whether you\'re a seasoned athlete or just starting out, Funect helps you find your sport, your venue, and your teammates.',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Got questions? We\'ve got answers',
    'faq.q1': 'How does Funect work?',
    'faq.a1': 'Funect connects you with sports venues and players in your area. Simply create an account, browse venues or lobbies, and start playing! You can book venues directly or join/create lobbies to find players at your skill level.',
    'faq.q2': 'Is Funect free to use?',
    'faq.a2': 'Yes! We offer a free plan that lets you browse venues, join public lobbies, and access our community.',
    'faq.q3': 'What sports are available on Funect?',
    'faq.a3': 'Funect supports a wide range of sports including tennis, padel, basketball, soccer, volleyball, pickleball, and more. New sports and venues are being added regularly based on community demand.',
    'faq.q4': 'How does player matching work?',
    'faq.a4': 'Our smart matching algorithm considers your skill level, location, preferred sports, and playing schedule to suggest compatible players.',
    'faq.q5': 'Can venues join Funect?',
    'faq.a5': 'Absolutely! We offer a Club/Enterprise plan specifically for venues and sports organizations. This includes management tools, analytics, custom branding, and more. Contact our sales team for a custom quote.',
    
    // Pricing
    'pricing.title': 'Club/Enterprise Solutions',
    'pricing.subtitle': 'Custom solutions tailored to your organization\'s needs',
    'pricing.custom': 'Custom Pricing',
    'pricing.feature1': 'Venue management tools',
    'pricing.feature2': 'Analytics dashboard',
    'pricing.feature3': 'Custom branding',
    'pricing.feature4': 'API access',
    'pricing.feature5': 'Dedicated support',
    'pricing.feature6': 'Priority booking system',
    'pricing.feature7': 'Multi-location support',
    'pricing.feature8': 'White-label options',
    'pricing.cta': 'Contact Sales',
    
    // Footer
    'footer.tagline': 'Connect through sports. Discover venues. Stay active together.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.downloadApp': 'Download App',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': '2025 Funect. All rights reserved.',
    
    // About
    'about.title': 'About Funect',
    'about.subtitle': 'We\'re on a mission to make sports more social, accessible, and fun for everyone.',
    'about.p1': 'Founded in 2025, Funect started with a simple observation: finding people to play sports with and discovering great venues was unnecessarily difficult. We set out to change that.',
    'about.p2': 'We\'re building a platform to connect athletes of all levels, from casual players to competitive competitors, making it easier to stay active and build meaningful connections through sports.',
    'about.p3': 'Whether you\'re looking for a pickup basketball game, a tennis partner, or a padel tournament, Funect brings the sports community together in one intuitive platform.',
    'about.vision': 'Our Vision',
    'about.visionDesc': 'To create a world where staying active and connecting with others through sports is effortless for everyone.',
    'about.values': 'Our Values',
    'about.valuesDesc': 'Community, inclusivity, and passion for sports drive everything we do at Funect.',
    'about.innovation': 'Our Innovation',
    'about.innovationDesc': 'We\'re constantly evolving with new features to make sports more accessible and social.',
    'about.venues': 'Our Commitment to Venues',
    'about.venuesDesc': 'Empowering sports facilities and organizations with tools to thrive, reach more athletes, and build stronger communities.',
    
    // Blog
    'blog.title': 'Funect Articles',
    'blog.subtitle': 'Stories, tips, and insights from the sports community',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have a question or want to learn more? We\'d love to hear from you.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
  },
  fi: {
    // Navigation
    'nav.howItWorks': 'Miten Se Toimii',
    'nav.faq': 'UKK',
    'nav.about': 'Tietoa Meistä',
    'nav.articles': 'Artikkelit',
    'nav.contact': 'Yhteystiedot',
    
    // Hero
    'hero.title': 'Yhdessä liikunnan kautta',
    'hero.subtitle': 'Löydä paikat, liity lobbyihin ja tapaa uusia pelikavereita. Funect tekee aktiivisena pysymisestä helpompaa kuin koskaan.',
    'hero.cta': 'Liity Funectiin!',
    'hero.howItWorks': 'Miten se toimii',
    'hero.howItWorksSubtitle': 'Aloittaminen on helppoa:',
    'hero.step1.title': 'Löydä paikka',
    'hero.step1.desc': 'Selaa ja löydä urheilupaikkoja läheltäsi reaaliaikaisella saatavuudella.',
    'hero.step2.title': 'Liity tai luo lobby',
    'hero.step2.desc': 'Yhdistä pelaajiin, joilla on sama taitotaso, ja järjestä otteluita vaivattomasti.',
    'hero.step3.title': 'Pelaa yhdessä',
    'hero.step3.desc': 'Tapaa uusia ihmisiä, pysy aktiivisena ja luo pysyviä ystävyyssuhteita liikunnan kautta.',
    
    // Testimonials
    'testimonials.title': 'Mitä yhteisömme sanoo',
    'testimonials.subtitle': 'Oikeita tarinoita oikeilta pelaajilta:',
    
    // Mission
    'mission.title': 'Missiomme',
    'mission.text': 'Funectissa uskomme, että urheilulla on voima tuoda ihmiset yhteen. Missiomme on tehdä liikkumisesta ja yhteyksien luomisesta helpompaa kuin koskaan — löytää upeita paikkoja, pysyä aktiivisena ja rakentaa yhteisöä. Olitpa kokenut urheilija tai vasta aloittamassa, Funect auttaa sinua löytämään oman lajisi, paikkasi ja pelikaverisi.',
    
    // FAQ
    'faq.title': 'Usein kysytyt kysymykset',
    'faq.subtitle': 'Onko sinulla kysymyksiä? Meillä on vastaukset',
    'faq.q1': 'Miten Funect toimii?',
    'faq.a1': 'Funect yhdistää sinut urheilupaikkoihin ja pelaajiin alueellasi. Luo tili, selaa paikkoja tai lobbeja ja aloita pelaaminen! Voit varata paikkoja suoraan tai liittyä/luoda lobbeja löytääksesi pelaajia taitotasollasi.',
    'faq.q2': 'Onko Funect ilmainen?',
    'faq.a2': 'Kyllä! Tarjoamme ilmaisen version, jolla voit selata paikkoja, liittyä julkisiin lobbyihin ja käyttää yhteisöämme.',
    'faq.q3': 'Mitä lajeja Funectissa on saatavilla?',
    'faq.a3': 'Funect tukee laajaa valikoimaa lajeja, mukaan lukien tennis, padel, koripallo, jalkapallo, lentopallo, pickleball ja paljon muuta. Uusia lajeja ja paikkoja lisätään säännöllisesti yhteisön kysynnän mukaan.',
    'faq.q4': 'Miten pelaajien yhteensovitus toimii?',
    'faq.a4': 'Älykäs algoritmi ottaa huomioon taitotasosi, sijaintisi, suosikkiurheilulajisi ja pelailuaikataulusi ehdottaakseen yhteensopivia pelaajia.',
    'faq.q5': 'Voivatko urheilupaikat liittyä Funectiin?',
    'faq.a5': 'Ehdottomasti! Tarjoamme Seura/Yritys-suunnitelman erityisesti paikoille ja urheilujärjestöille. Tämä sisältää hallintatyökaluja, analytiikkaa, mukautettua brändäystä ja paljon muuta. Ota yhteyttä myyntitiimimme saadaksesi mukautetun tarjouksen.',
    
    // Pricing
    'pricing.title': 'Seura- ja yritysratkaisut',
    'pricing.subtitle': 'Räätälöidyt palvelut organisaatioille:',
    'pricing.custom': 'Mukautettu hinnoittelu',
    'pricing.feature1': 'Paikan hallintatyökalut',
    'pricing.feature2': 'Analytiikkapaneeli',
    'pricing.feature3': 'Mukautettu brändäys',
    'pricing.feature4': 'API-käyttö',
    'pricing.feature5': 'Omistautunut tuki',
    'pricing.feature6': 'Ensisijainen varausjärjestelmä',
    'pricing.feature7': 'Monen sijainnin tuki',
    'pricing.feature8': 'White label -vaihtoehdot',
    'pricing.cta': 'Ota yhteyttä',
    
    // Footer
    'footer.tagline': 'Yhdessä liikunnan kautta. Löydä paikat. Pysy aktiivisena yhdessä.',
    'footer.product': 'Tuote',
    'footer.company': 'Yritys',
    'footer.downloadApp': 'Lataa sovellus',
    'footer.terms': 'Käyttöehdot',
    'footer.privacy': 'Tietosuojakäytäntö',
    'footer.rights': '2025 Funect. Kaikki oikeudet pidätetään.',
    
    // About
    'about.title': 'Tietoa Funectista',
    'about.subtitle': 'Tehtävämme on tehdä urheilusta sosiaalisempaa, helpommin saavutettavaa ja hauskempaa kaikille.',
    'about.p1': 'Vuonna 2025 perustettu Funect lähti liikkeelle yksinkertaisesta havainnostа: liikuntakumppaneiden löytäminen ja urheilupaikkojen löytäminen oli tarpeettoman vaikeaa. Lähdimme muuttamaan tätä.',
    'about.p2': 'Rakennamme alustaa yhdistääksemme urheilijoita kaikilla tasoilla, satunnaisista pelaajista kilpailullisiin urheilijoihin, helpottaaksemme aktiivisena pysymistä ja merkityksellisten yhteyksien rakentamista urheilun kautta.',
    'about.p3': 'Olitpa etsimässä koripallo-ottelua, tennispartneria tai padel-turnausta, Funect kokoaa urheiluyhteisön yhteen intuitiivisessa alustassa.',
    'about.vision': 'Visiomme',
    'about.visionDesc': 'Luoda maailma, jossa aktiivisena pysyminen ja yhdistyminen muiden kanssa urheilun kautta on vaivatonta kaikille.',
    'about.values': 'Arvomme',
    'about.valuesDesc': 'Yhteisö, osallisuus ja intohimo urheiluun ohjaavat kaikkea mitä teemme Funectissa.',
    'about.innovation': 'Innovaatiomme',
    'about.innovationDesc': 'Kehitymme jatkuvasti uusilla ominaisuuksilla tehdäksemme urheilusta helpommin saavutettavaa ja sosiaalista.',
    'about.venues': 'Sitoutumisemme Paikkoihin',
    'about.venuesDesc': 'Voimaannutamme urheilulaitoksia ja organisaatioita työkaluilla menestyä, tavoittaa enemmän urheilijoita ja rakentaa vahvempia yhteisöjä.',
    
    // Blog
    'blog.title': 'Funect Artikkelit',
    'blog.subtitle': 'Tarinoita, vinkkejä ja oivalluksia urheiluyhteisöstä',
    
    // Contact
    'contact.title': 'Ota Yhteyttä',
    'contact.subtitle': 'Onko sinulla kysymys tai haluatko oppia lisää? Haluamme kuulla sinusta.',
    'contact.name': 'Nimi',
    'contact.email': 'Sähköposti',
    'contact.message': 'Viesti',
    'contact.send': 'Lähetä Viesti',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('funect-language');
    return (saved === 'fi' ? 'fi' : 'en') as Language;
  });

  useEffect(() => {
    localStorage.setItem('funect-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
