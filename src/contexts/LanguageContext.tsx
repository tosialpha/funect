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
    'testimonials.1.quote': "I've met 3 new padel partners through Funect! It's so easy to find people at my skill level.",
    'testimonials.1.outcome': 'Met 3 new padel partners',
    'testimonials.2.sport': 'Basketball',
    'testimonials.2.quote': 'Finally, a way to organize pickup games without endless group chats. Love the lobby system!',
    'testimonials.2.outcome': 'Organized 15+ games',
    'testimonials.3.quote': 'Discovered 5 amazing courts near me I didn\'t even know existed. Game changer!',
    'testimonials.3.outcome': 'Discovered 5 new venues',
    'testimonials.4.sport': 'Soccer',
    'testimonials.4.quote': 'The community tournaments are incredible. Met so many awesome people through Funect.',
    'testimonials.4.outcome': 'Joined 8 tournaments',
    
    // Mission  
    'mission.title': 'Our Mission',
    'mission.text': 'At Funect, we believe sports have the power to bring people together. Our mission is to make staying active and building connections easier than ever—to find great venues, stay active, and build community. Whether you\'re a seasoned athlete or just starting out, Funect helps you find your sport, your venue, and your teammates.',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Got questions? We\'ve got answers',
    'faq.q1': 'How does Funect work?',
    'faq.a1': 'Funect connects you with sports venues and players in your area. Simply create an account, browse venues or lobbies, and start playing! You can book venues directly or join/create lobbies to find players at your skill level.',
    'faq.q2': 'Is Funect free to use?',
    'faq.a2': 'Yes! Funect is free to use. You can browse venues, join public lobbies, and access our community.',
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
    'blog.readMore': 'Read More',
    'blog.backToArticles': 'Back to Articles',
    'blog.minRead': 'min read',
    
    // Blog Articles
    'blog.article1.title': '5 Ways to Find Your Perfect Sports Community',
    'blog.article1.excerpt': 'Discover how Funect helps you connect with like-minded athletes and build lasting friendships through sports.',
    'blog.article1.category': 'Community',
    'blog.article2.title': "The Rise of Padel: Why Everyone's Talking About It",
    'blog.article2.excerpt': "Explore the fastest-growing sport in the world and why it's perfect for building social connections.",
    'blog.article2.category': 'Sports',
    'blog.article3.title': 'How to Organize the Perfect Pickup Game',
    'blog.article3.excerpt': 'Tips and tricks for creating engaging, well-organized games that keep players coming back.',
    'blog.article3.category': 'Tips',
    'blog.article4.title': 'Venue Spotlight: The Best Courts in Your City',
    'blog.article4.excerpt': 'A comprehensive guide to finding and booking the best sports venues in your area.',
    'blog.article4.category': 'Venues',
    
    // Article 1 content
    'blog.article1.content': `<p>Finding the right sports community can transform your athletic journey from a solitary pursuit into a shared adventure. Here are five proven strategies to connect with your perfect sports community through Funect.</p>
        
        <h2>1. Start with Your Interests</h2>
        <p>The first step is identifying what sports genuinely excite you. Whether it's tennis, padel, basketball, or soccer, Funect's smart matching algorithm helps you connect with players who share your passion.</p>
        
        <h2>2. Be Honest About Your Skill Level</h2>
        <p>One of the biggest barriers to enjoying sports is mismatched skill levels. Funect's player profiles allow you to specify your experience, ensuring you're matched with compatible players who'll challenge you appropriately.</p>
        
        <h2>3. Attend Community Events</h2>
        <p>Regular tournaments and social events are perfect opportunities to meet multiple players at once. These gatherings create natural connections that often extend beyond the court.</p>
        
        <h2>4. Join Multiple Lobbies</h2>
        <p>Don't limit yourself to one group. Explore different lobbies to experience various playing styles and social dynamics. This diversity helps you find where you truly fit.</p>
        
        <h2>5. Be Consistent</h2>
        <p>Building community takes time. Regular participation helps you become a familiar face, leading to stronger connections and lasting friendships.</p>
        
        <p>Remember, finding your sports community is a journey, not a destination. With Funect's tools and your commitment, you'll discover people who share your passion and help you grow as an athlete.</p>`,
    
    // Article 2 content
    'blog.article2.content': `<p>Padel has exploded in popularity over the past few years, becoming one of the fastest-growing sports worldwide. But what makes this racquet sport so special?</p>
        
        <h2>Easy to Learn, Hard to Master</h2>
        <p>Unlike tennis, padel has a gentler learning curve. Beginners can enjoy rallies from day one, while advanced players find endless tactical depth. This accessibility makes it perfect for building social connections.</p>
        
        <h2>The Social Factor</h2>
        <p>Padel is always played in doubles on an enclosed court, creating a uniquely social atmosphere. The smaller court size facilitates conversation between points, making it as much a social event as a sporting one.</p>
        
        <h2>Perfect for All Ages</h2>
        <p>From teenagers to retirees, padel welcomes everyone. The enclosed court and underarm serving reduce the physical demands, making it accessible for players of all fitness levels.</p>
        
        <h2>Growing Infrastructure</h2>
        <p>New padel courts are opening daily across North America. Through Funect, players can easily discover these venues and book courts with just a few taps.</p>
        
        <h2>The Community Effect</h2>
        <p>Padel players are passionate about their sport and welcoming to newcomers. This creates tight-knit communities that extend beyond the court into lasting friendships.</p>
        
        <p>Ready to join the padel revolution? Find courts and players near you on Funect today!</p>`,
    
    // Article 3 content
    'blog.article3.content': `<p>Organizing successful pickup games requires more than just showing up. Here's your complete guide to creating games that players love.</p>
        
        <h2>Set Clear Expectations</h2>
        <p>When creating a lobby on Funect, be specific about skill level, game format, and rules. Clear expectations prevent misunderstandings and ensure everyone has fun.</p>
        
        <h2>Choose the Right Venue</h2>
        <p>Consider accessibility, parking, and amenities when selecting a venue. Funect's venue reviews help you pick locations that players enjoy returning to.</p>
        
        <h2>Communicate Effectively</h2>
        <p>Use Funect's built-in messaging to keep players informed about any changes. Send reminders 24 hours before and confirm attendees the morning of the game.</p>
        
        <h2>Balance Teams Thoughtfully</h2>
        <p>Mixed skill levels? Rotate teams each game to keep things competitive and give everyone playing time with different partners.</p>
        
        <h2>Create Traditions</h2>
        <p>Regular weekly games at the same time and place help build community. Players can plan around your games, leading to better attendance.</p>
        
        <h2>Handle Cancellations Gracefully</h2>
        <p>Life happens. Build a waiting list and have backup plans. Funect's notification system makes it easy to fill last-minute spots.</p>
        
        <h2>Foster Inclusivity</h2>
        <p>Welcome newcomers, rotate partners, and maintain a positive atmosphere. The best games are where everyone feels valued.</p>
        
        <p>With these strategies and Funect's organizational tools, you'll create pickup games that players eagerly anticipate week after week.</p>`,
    
    // Article 4 content
    'blog.article4.content': `<p>Finding the perfect venue can make or break your sports experience. Here's what to look for when discovering and booking courts through Funect.</p>
        
        <h2>Court Quality Matters</h2>
        <p>Surface condition, lighting, and equipment directly impact your game. Funect's detailed venue profiles include photos, amenities lists, and player reviews so you know exactly what to expect.</p>
        
        <h2>Location and Accessibility</h2>
        <p>The best venue is the one you'll actually use. Consider proximity to home or work, parking availability, and public transit access. Funect's map view makes it easy to find convenient options.</p>
        
        <h2>Amenities and Facilities</h2>
        <p>Locker rooms, showers, equipment rental, and on-site dining enhance the experience. Premium venues offer more than just courts—they provide complete sports destinations.</p>
        
        <h2>Community and Atmosphere</h2>
        <p>Some venues cultivate vibrant communities with regular leagues and social events. Read reviews on Funect to find venues that match your social preferences.</p>
        
        <h2>Pricing and Value</h2>
        <p>Compare rates, membership options, and booking policies. Funect displays all pricing information upfront, helping you find the best value for your budget.</p>
        
        <h2>Peak and Off-Peak Times</h2>
        <p>Smart players take advantage of off-peak discounts. Funect's real-time availability shows when courts are cheaper and less crowded.</p>
        
        <h2>Supporting Local Businesses</h2>
        <p>Many of Funect's venues are locally owned. By booking through our platform, you're supporting small businesses and helping grow the sports community in your area.</p>
        
        <p>Ready to discover your new favorite venue? Explore hundreds of courts on Funect and book your next game today!</p>`,
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions? We\'d love to hear from you.',
    'contact.formTitle': 'Send us a message',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.email': 'Email',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'How can we help?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Tell us more...',
    'contact.send': 'Send Message',
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'Phone',
    'contact.phoneHours': 'Mon-Fri 9am-6pm',
    'contact.officeLabel': 'Office',
    'contact.officeAddress': '123 Sports Avenue\nSan Francisco, CA 94102\nUnited States',
  },
  fi: {
    // Navigation
    'nav.howItWorks': 'Miten Funect toimii',
    'nav.faq': 'UKK',
    'nav.about': 'Tietoa Meistä',
    'nav.articles': 'Artikkelit',
    'nav.contact': 'Yhteystiedot',
    
    // Hero
    'hero.title': 'Yhdessä liikunnan kautta',
    'hero.subtitle': 'Löydä paikat, liity lobbyihin ja tapaa uusia pelikavereita. Funect tekee aktiivisena pysymisestä helpompaa kuin koskaan.',
    'hero.cta': 'Liity Funectiin!',
    'hero.howItWorks': 'Miten Funect toimii',
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
    'testimonials.1.quote': 'Olen löytänyt kolme uutta padel-kaveria Funectin kautta! On niin helppoa löytää ihmisiä omalla tasollani.',
    'testimonials.1.outcome': 'Löysi 3 uutta pelikaveria',
    'testimonials.2.sport': 'Koripallo',
    'testimonials.2.quote': 'Vihdoin tapa järjestää pickup-pelejä ilman loputtomia ryhmäkeskusteluja. Rakastan lobby-järjestelmää!',
    'testimonials.2.outcome': 'Järjesti yli 15 peliä',
    'testimonials.3.quote': 'Löysin 5 upeaa kenttää läheltäni, joista en tiennyt mitään. Todellinen pelinmuuttaja!',
    'testimonials.3.outcome': 'Löysi 5 uutta kenttää',
    'testimonials.4.sport': 'Jalkapallo',
    'testimonials.4.quote': 'Yhteisön turnaukset ovat mahtavia. Olen tavannut niin paljon upeita ihmisiä Funectin kautta.',
    'testimonials.4.outcome': 'Osallistui 8 turnaukseen',
    
    // Mission
    'mission.title': 'Missiomme',
    'mission.text': 'Funectissa uskomme, että urheilulla on voima tuoda ihmiset yhteen. Missiomme on tehdä liikkumisesta ja yhteyksien luomisesta helpompaa kuin koskaan — löytää upeita paikkoja, pysyä aktiivisena ja rakentaa yhteisöä. Olitpa kokenut urheilija tai vasta aloittamassa, Funect auttaa sinua löytämään oman lajisi, paikkasi ja pelikaverisi.',
    
    // FAQ
    'faq.title': 'Usein kysytyt kysymykset',
    'faq.subtitle': 'Onko sinulla kysymyksiä? Meillä on vastaukset',
    'faq.q1': 'Miten Funect toimii?',
    'faq.a1': 'Funect yhdistää sinut urheilupaikkoihin ja pelaajiin alueellasi. Luo tili, selaa paikkoja tai lobbeja ja aloita pelaaminen! Voit varata paikkoja suoraan tai liittyä/luoda lobbeja löytääksesi pelaajia taitotasollasi.',
    'faq.q2': 'Onko Funect ilmainen?',
    'faq.a2': 'Kyllä! Funect on ilmainen. Voit selata paikkoja, liittyä julkisiin lobbyihin ja käyttää yhteisöämme.',
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
    'about.title': 'Funectista',
    'about.subtitle': 'Missiomme on tehdä urheilusta kaikille sosiaalisempaa, helpommin saavutettavaa ja ennen kaikkea hauskempaa.',
    'about.p1': 'Funect perustettiin vuonna 2025 yksinkertaisesta havainnosta: pelikavereiden löytäminen ja hyvien urheilupaikkojen bongaaminen oli turhan hankalaa. Me halusimme muuttaa tämän.',
    'about.p2': 'Rakennamme alustaa, joka yhdistää urheilijat kaikilta tasoilta – aina harrastelijoista kilpailullisiin pelaajiin – tehden aktiivisena pysymisestä ja uusien yhteyksien luomisesta helpompaa kuin koskaan.',
    'about.p3': 'Etsitpä sitten pickup-koripallopeliä, tenniskaveria tai padel-turnausta, Funect tuo urheiluyhteisön yhteen selkeällä ja intuitiivisella alustalla.',
    'about.vision': 'Visiomme',
    'about.visionDesc': 'Luoda maailma, jossa aktiivisena pysyminen ja yhteyksien luominen urheilun kautta on vaivatonta kaikille.',
    'about.values': 'Arvomme',
    'about.valuesDesc': 'Yhteisö, osallisuus ja intohimo urheiluun ohjaavat kaikkea, mitä Funectissa teemme.',
    'about.innovation': 'Innovaatio',
    'about.innovationDesc': 'Kehitämme jatkuvasti uusia ominaisuuksia, joiden avulla urheilu on entistä saavutettavampaa ja sosiaalisempaa.',
    'about.venues': 'Sitoutumisemme urheilupaikkoihin',
    'about.venuesDesc': 'Tarjoamme urheilutiloille ja -organisaatioille työkalut kasvuun, uusien pelaajien tavoittamiseen ja vahvemman yhteisön rakentamiseen.',
    
    // Blog
    'blog.title': 'Funect Artikkelit',
    'blog.subtitle': 'Tarinoita, vinkkejä ja oivalluksia urheiluyhteisöstä',
    'blog.readMore': 'Lue lisää',
    'blog.backToArticles': 'Takaisin artikkeleihin',
    'blog.minRead': 'min lukuaika',
    
    // Blog Articles  
    'blog.article1.title': '5 tapaa löytää täydellinen urheiluyhteisö',
    'blog.article1.excerpt': 'Opi miten Funect auttaa sinua yhdistymään samanhenkisten urheilijoiden kanssa ja rakentamaan pysyviä ystävyyksiä liikunnan kautta.',
    'blog.article1.category': 'Yhteisö',
    'blog.article2.title': 'Padelin nousu: Miksi kaikki puhuvat siitä',
    'blog.article2.excerpt': 'Tutki maailman nopeimmin kasvavaa urheilulajia ja miksi se on täydellinen sosiaalisten yhteyksien luomiseen.',
    'blog.article2.category': 'Lajit',
    'blog.article3.title': 'Kuinka järjestää täydellinen pickup-peli',
    'blog.article3.excerpt': 'Vinkkejä ja niksejä mukaansatempaavien, hyvin järjestettyjen pelien luomiseen, joihin pelaajat palaavat.',
    'blog.article3.category': 'Vinkit',
    'blog.article4.title': 'Paikkavalokeila: Parhaat kentät kaupungissasi',
    'blog.article4.excerpt': 'Kattava opas parhaiden urheilupaikkojen löytämiseen ja varaamiseen alueellasi.',
    'blog.article4.category': 'Paikat',
    
    // Article 1 content
    'blog.article1.content': `<p>Oikean urheiluyhteisön löytäminen voi muuttaa urheilullisen matkasi yksinäisestä harrastuksesta jaetuksi seikkailuksi. Tässä viisi todistettua strategiaa yhdistyä täydelliseen urheiluyhteisöön Funectin kautta.</p>
        
        <h2>1. Aloita kiinnostuksesi kohteista</h2>
        <p>Ensimmäinen askel on tunnistaa, mitkä lajit todella innostavat sinua. Olipa kyse tenniksestä, padelistä, koripallosta tai jalkapallosta, Funectin älykäs yhdistämisalgoritmi auttaa sinua löytämään pelaajia, jotka jakavat intohimosi.</p>
        
        <h2>2. Ole rehellinen taitotasostasi</h2>
        <p>Yksi suurimmista esteistä urheilun nauttimiselle on yhteensopimattomat taitotasot. Funectin pelaajaprofiilit mahdollistavat kokemuksesi määrittelyn, varmistaen että sinut yhdistetään yhteensopiviin pelaajiin, jotka haastavat sinut sopivasti.</p>
        
        <h2>3. Osallistu yhteisötapahtumiin</h2>
        <p>Säännölliset turnaukset ja sosiaaliset tapahtumat ovat täydellisiä tilaisuuksia tavata useita pelaajia kerralla. Nämä kokoontumisset luovat luonnollisia yhteyksiä, jotka usein ulottuvat kentän ulkopuolelle.</p>
        
        <h2>4. Liity useisiin lobbyihin</h2>
        <p>Älä rajoita itseäsi yhteen ryhmään. Tutustu erilaisiin lobbyihin kokeaksesi erilaisia pelityylejä ja sosiaalisia dynamiikkoja. Tämä monimuotoisuus auttaa sinua löytämään paikan, johon todella kuulut.</p>
        
        <h2>5. Ole johdonmukainen</h2>
        <p>Yhteisön rakentaminen vie aikaa. Säännöllinen osallistuminen auttaa sinusta tulemaan tuttu kasvot, mikä johtaa vahvempiin yhteyksiin ja pysyviin ystävyyssuhteisiin.</p>
        
        <p>Muista, että urheiluyhteisön löytäminen on matka, ei määränpää. Funectin työkalujen ja sitoutumisesi avulla löydät ihmisiä, jotka jakavat intohimosi ja auttavat sinua kasvamaan urheilijana.</p>`,
    
    // Article 2 content
    'blog.article2.content': `<p>Padel on räjähdysmäisesti kasvanut suosiossa viime vuosina, ja siitä on tullut yksi maailman nopeimmin kasvavista lajeista. Mutta mikä tekee tästä mailapelistä niin erityisen?</p>
        
        <h2>Helppo oppia, vaikea hallita</h2>
        <p>Toisin kuin tennis, padelilla on loivempi oppimiskäyrä. Aloittelijat voivat nauttia ralleista ensimmäisestä päivästä lähtien, kun taas edistyneet pelaajat löytävät loputtomasti taktista syvyyttä. Tämä saavutettavuus tekee siitä täydellisen sosiaalisten yhteyksien rakentamiseen.</p>
        
        <h2>Sosiaalinen tekijä</h2>
        <p>Padelia pelataan aina kaksinpelinä suljetulla kentällä, mikä luo ainutlaatuisen sosiaalisen ilmapiirin. Pienempi kentän koko helpottaa keskustelua pisteiden välillä, tehden siitä yhtä paljon sosiaalisen tapahtuman kuin urheilullisen.</p>
        
        <h2>Täydellinen kaikenikäisille</h2>
        <p>Teini-ikäisistä eläkeläisiin, padel tervehtii kaikkia. Suljettu kenttä ja alakautta syöttäminen vähentävät fyysisiä vaatimuksia, tehden siitä saavutettavan kaikentasoisille pelaajille.</p>
        
        <h2>Kasvava infrastruktuuri</h2>
        <p>Uusia padelkenttiä avataan päivittäin ympäri Pohjois-Amerikkaa. Funectin kautta pelaajat voivat helposti löytää näitä paikkoja ja varata kenttiä muutamalla napautuksella.</p>
        
        <h2>Yhteisövaikutus</h2>
        <p>Padel-pelaajat ovat intohimoisia lajistaan ja toivottavat uudet tulokkaat tervetulleiksi. Tämä luo tiiviitä yhteisöjä, jotka ulottuvat kentän ulkopuolelle pysyviksi ystävyyssuhteiksi.</p>
        
        <p>Valmis liittymään padel-vallankumoukseen? Löydä kenttiä ja pelaajia läheltäsi Funectista tänään!</p>`,
    
    // Article 3 content
    'blog.article3.content': `<p>Onnistuneiden pickup-pelien järjestäminen vaatii enemmän kuin vain paikalle saapumisen. Tässä on täydellinen oppaasi pelien luomiseen, joita pelaajat rakastavat.</p>
        
        <h2>Aseta selkeät odotukset</h2>
        <p>Kun luot lobbyn Funectiin, ole tarkka taitotasosta, peliformaatista ja säännöistä. Selkeät odotukset ehkäisevät väärinkäsitykset ja varmistavat, että kaikki pitävät hauskaa.</p>
        
        <h2>Valitse oikea paikka</h2>
        <p>Harkitse saavutettavuutta, pysäköintiä ja mukavuuksia paikkaa valitessasi. Funectin paikka-arvostelut auttavat sinua valitsemaan sijainteja, joihin pelaajat haluavat palata.</p>
        
        <h2>Kommunikoi tehokkaasti</h2>
        <p>Käytä Funectin sisäänrakennettua viestitoimintoa pitääksesi pelaajat ajan tasalla muutoksista. Lähetä muistutukset 24 tuntia ennen ja vahvista osallistujat pelin aamuna.</p>
        
        <h2>Tasapainota joukkueet harkiten</h2>
        <p>Sekoitetut taitotasot? Vaihda joukkueita joka pelissä pitääksesi asiat kilpailullisina ja antaaksesi kaikille pelailuaikaa eri kumppaneiden kanssa.</p>
        
        <h2>Luo perinteitä</h2>
        <p>Säännölliset viikoittaiset pelit samaan aikaan ja paikassa auttavat rakentamaan yhteisöä. Pelaajat voivat suunnitella pelejäsi ympärille, mikä johtaa parempaan osallistumiseen.</p>
        
        <h2>Käsittele peruutukset armollisesti</h2>
        <p>Elämää tapahtuu. Rakenna odotuslistoja ja varaa varasuunnitelmat. Funectin ilmoitusjärjestelmä tekee viime hetken paikkojen täyttämisestä helppoa.</p>
        
        <h2>Edistä osallisuutta</h2>
        <p>Toivota uudet tulokkaat tervetulleiksi, vaihda kumppaneita ja ylläpidä positiivista ilmapiiriä. Parhaat pelit ovat niitä, joissa jokainen tuntee olevansa arvostettu.</p>
        
        <p>Näillä strategioilla ja Funectin organisointityökaluilla luot pickup-pelejä, joita pelaajat odottavat innokkaasti viikosta toiseen.</p>`,
    
    // Article 4 content
    'blog.article4.content': `<p>Täydellisen paikan löytäminen voi tehdä tai rikkoa urheilukokemuksesi. Tässä mitä etsiä kun löydät ja varaat kenttiä Funectin kautta.</p>
        
        <h2>Kentän laatu on tärkeää</h2>
        <p>Pinnan kunto, valaistus ja varusteet vaikuttavat suoraan peliisi. Funectin yksityiskohtaiset paikkaprofiilit sisältävät kuvia, mukavuusluetteloita ja pelaaja-arvioita, joten tiedät tarkalleen mitä odottaa.</p>
        
        <h2>Sijainti ja saavutettavuus</h2>
        <p>Paras paikka on se, jota todella käytät. Harkitse läheisyyttä kotiin tai työhön, pysäköintimahdollisuuksia ja julkisen liikenteen saatavuutta. Funectin karttanäkymä tekee kätevien vaihtoehtojen löytämisestä helppoa.</p>
        
        <h2>Mukavuudet ja tilat</h2>
        <p>Pukuhuoneet, suihkut, välinevuokraus ja paikan päällä oleva ravintola parantavat kokemusta. Premium-paikat tarjoavat enemmän kuin vain kenttiä—ne tarjoavat täydellisiä urheilukohteita.</p>
        
        <h2>Yhteisö ja ilmapiiri</h2>
        <p>Jotkut paikat viljelevät elinvoimaisia yhteisöjä säännöllisillä liigoilla ja sosiaalisilla tapahtumilla. Lue arvosteluja Funectista löytääksesi paikkoja, jotka vastaavat sosiaalisia mieltymyksiäsi.</p>
        
        <h2>Hinnoittelu ja arvo</h2>
        <p>Vertaile hintoja, jäsenyys-vaihtoehtoja ja varausehtoja. Funect näyttää kaikki hintatiedot etukäteen, auttaen sinua löytämään parhaan vastineen budjetillesi.</p>
        
        <h2>Ruuhka- ja hiljaiset ajat</h2>
        <p>Älykkäät pelaajat hyödyntävät hiljaisten aikojen alennuksia. Funectin reaaliaikainen saatavuus näyttää milloin kentät ovat halvempia ja vähemmän täynnä.</p>
        
        <h2>Paikallisten yritysten tukeminen</h2>
        <p>Monet Funectin paikoista ovat paikallisessa omistuksessa. Varaamalla alustamme kautta tuet pienyrityksiä ja autat kasvattamaan urheiluyhteisöä alueellasi.</p>
        
        <p>Valmis löytämään uuden suosikkipaikkasi? Tutustu satoihin kenttiin Funectissa ja varaa seuraava pelisi tänään!</p>`,
    
    // Contact
    'contact.title': 'Ota Yhteyttä',
    'contact.subtitle': 'Onko sinulla kysyttävää? Haluaisimme kuulla sinulta.',
    'contact.formTitle': 'Lähetä viesti',
    'contact.name': 'Nimi',
    'contact.namePlaceholder': 'Nimesi',
    'contact.email': 'Sähköposti',
    'contact.emailPlaceholder': 'sähköpostisi@esimerkki.com',
    'contact.subject': 'Aihe',
    'contact.subjectPlaceholder': 'Miten voimme auttaa?',
    'contact.message': 'Viesti',
    'contact.messagePlaceholder': 'Kerro lisää…',
    'contact.send': 'Lähetä viesti',
    'contact.emailLabel': 'Sähköposti',
    'contact.phoneLabel': 'Puhelin',
    'contact.phoneHours': 'ma–pe klo 9–18',
    'contact.officeLabel': 'Toimisto',
    'contact.officeAddress': '123 Sports Avenue\nSan Francisco, CA 94102\nYhdysvallat',
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
