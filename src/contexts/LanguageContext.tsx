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
    'nav.forVenues': 'For Venues',
    'nav.about': 'About Us',
    'nav.articles': 'Articles',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Playful meetups, effortless booking',
    'hero.subtitle': 'Find activities, connect with people, join the fun - all in one place.',
    'hero.cta': 'Join Funect!',
    'hero.howItWorks': 'How It Works',
    'hero.howItWorksSubtitle': 'Getting started is simple',
    'hero.step1.title': 'Find a Venue',
    'hero.step1.desc': 'Browse and discover activity venues near you with real-time availability.',
    'hero.step2.title': 'Join or Create a Group',
    'hero.step2.desc': 'Connect with people at your level and organize sessions easily.',
    'hero.step3.title': 'Get Active and Connect',
    'hero.step3.desc': 'Meet new people, stay active, and build lasting friendships.',
    
    // Testimonials
    'testimonials.title': 'What Our Community Says',
    'testimonials.subtitle': 'Real stories from real people',
    'testimonials.1.quote': "I've met 3 new padel partners through Funect! It's so easy to find people at my skill level.",
    'testimonials.1.outcome': 'Met 3 new padel partners',
    'testimonials.2.sport': 'Basketball',
    'testimonials.2.quote': 'Finally, a way to organize pickup sessions without endless group chats. Love the group system!',
    'testimonials.2.outcome': 'Organized 15+ sessions',
    'testimonials.3.quote': 'Discovered 5 amazing courts near me I didn\'t even know existed. Game changer!',
    'testimonials.3.outcome': 'Discovered 5 new venues',
    'testimonials.4.sport': 'Soccer',
    'testimonials.4.quote': 'The community tournaments are incredible. Met so many awesome people through Funect.',
    'testimonials.4.outcome': 'Joined 8 tournaments',
    'testimonials.5.sport': 'Badminton',
    'testimonials.5.quote': 'Funect helped me find regular training partners at my skill level. Now I play 3 times a week!',
    'testimonials.5.outcome': 'Regular playing schedule',
    'testimonials.6.sport': 'Squash',
    'testimonials.6.quote': 'The app made it so easy to connect with other squash enthusiasts. Love the community!',
    'testimonials.6.outcome': 'Found 5+ playing partners',
    'testimonials.7.sport': 'Table Tennis',
    'testimonials.7.quote': 'I was new to the city and Funect helped me make friends through activity. Amazing experience!',
    'testimonials.7.outcome': 'Built new friendships',
    'testimonials.8.sport': 'Basketball',
    'testimonials.8.quote': 'Great way to stay active and meet people who share the same passion for being active!',
    'testimonials.8.outcome': 'Weekly game sessions',
    
    // Mission  
    'mission.title': 'Our Mission',
    'mission.text': 'At Funect, we believe physical activity has the power to bring people together. Our mission is to make staying active and building connections easier than ever—to find great venues, stay active, and build community. Whether you\'re experienced or just starting out, Funect helps you find your activity, your venue, and your people.',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Got questions? We\'ve got answers',
    'faq.q1': 'How does Funect work?',
    'faq.a1': 'Funect connects you with activity venues and people in your area. Simply create an account, browse venues or groups, and start participating! You can book venues directly or join/create groups to find people at your level.',
    'faq.q2': 'Is Funect free to use?',
    'faq.a2': 'Yes! Funect is free to use. You can browse venues, join public groups, and access our community.',
    'faq.q3': 'What activities are available on Funect?',
    'faq.a3': 'Funect supports a wide range of activities including tennis, padel, basketball, soccer, volleyball, pickleball, and more. New activities and venues are being added regularly based on community demand.',
    'faq.q4': 'How does matching work?',
    'faq.a4': 'Our smart matching algorithm considers your skill level, location, preferred activities, and schedule to suggest compatible people.',
    'faq.q5': 'Can venues join Funect?',
    'faq.a5': 'Absolutely! We offer a Club/Enterprise plan specifically for venues and activity organizations. This includes management tools, analytics, custom branding, and more. Contact our sales team for a custom quote.',
    
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
    'footer.tagline': 'Playful meetups, effortless booking',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.downloadApp': 'Download App',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': '2025 Funect. All rights reserved.',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'We\'re on a mission to make staying active more social, accessible, and fun for everyone.',
    'about.p1': 'Founded in 2025, Funect started with a simple observation: finding people to be active with and discovering great venues was unnecessarily difficult. We set out to change that.',
    'about.p2': 'We\'re building a platform to connect people of all levels, from casual participants to competitive enthusiasts, making it easier to stay active and build meaningful connections through shared activities.',
    'about.p3': 'Whether you\'re looking for a pickup basketball session, a tennis partner, or a padel tournament, Funect brings the active community together in one intuitive platform.',
    'about.vision': 'Our Vision',
    'about.visionDesc': 'To create a world where staying active and connecting with others through activity is effortless for everyone.',
    'about.values': 'Our Values',
    'about.valuesDesc': 'Community, inclusivity, and passion for activity drive everything we do at Funect.',
    'about.innovation': 'Our Innovation',
    'about.innovationDesc': 'We\'re constantly evolving with new features to make staying active more accessible and social.',
    'about.venues': 'Our Commitment to Venues',
    'about.venuesDesc': 'Empowering activity facilities and organizations with tools to thrive, reach more people, and build stronger communities.',
    
    // Blog
    'blog.title': 'Funect Articles',
    'blog.subtitle': 'Stories, tips, and insights from the active community',
    'blog.readMore': 'Read More',
    'blog.backToArticles': 'Back to Articles',
    'blog.minRead': 'min read',
    
    // Blog Articles
    'blog.article1.title': '5 Ways to Find Your Perfect Activity Community',
    'blog.article1.excerpt': 'Discover how Funect helps you connect with like-minded people and build lasting friendships through activity.',
    'blog.article1.category': 'Community',
    'blog.article2.title': "The Rise of Padel: Why Everyone's Talking About It",
    'blog.article2.excerpt': "Explore one of the fastest-growing activities in the world and why it's perfect for building social connections.",
    'blog.article2.category': 'Activities',
    'blog.article3.title': 'How to Organize the Perfect Pickup Session',
    'blog.article3.excerpt': 'Tips and tricks for creating engaging, well-organized sessions that keep people coming back.',
    'blog.article3.category': 'Tips',
    'blog.article4.title': 'Venue Spotlight: The Best Facilities in Your City',
    'blog.article4.excerpt': 'A comprehensive guide to finding and booking the best activity venues in your area.',
    'blog.article4.category': 'Venues',
    
    // Article 1 content
    'blog.article1.content': `<p>Finding the right activity community can transform your journey from a solitary pursuit into a shared adventure. Here are five proven strategies to connect with your perfect activity community through Funect.</p>

        <h2>1. Start with Your Interests</h2>
        <p>The first step is identifying what activities genuinely excite you. Whether it's tennis, padel, basketball, or soccer, Funect's smart matching algorithm helps you connect with people who share your passion.</p>

        <h2>2. Be Honest About Your Skill Level</h2>
        <p>One of the biggest barriers to enjoying activities is mismatched skill levels. Funect's profiles allow you to specify your experience, ensuring you're matched with compatible people who'll challenge you appropriately.</p>

        <h2>3. Attend Community Events</h2>
        <p>Regular tournaments and social events are perfect opportunities to meet multiple people at once. These gatherings create natural connections that often extend beyond the court.</p>

        <h2>4. Join Multiple Groups</h2>
        <p>Don't limit yourself to one group. Explore different groups to experience various styles and social dynamics. This diversity helps you find where you truly fit.</p>

        <h2>5. Be Consistent</h2>
        <p>Building community takes time. Regular participation helps you become a familiar face, leading to stronger connections and lasting friendships.</p>

        <p>Remember, finding your activity community is a journey, not a destination. With Funect's tools and your commitment, you'll discover people who share your passion and help you grow.</p>`,
    
    // Article 2 content
    'blog.article2.content': `<p>Padel has exploded in popularity over the past few years, becoming one of the fastest-growing activities worldwide. But what makes this racquet activity so special?</p>

        <h2>Easy to Learn, Hard to Master</h2>
        <p>Unlike tennis, padel has a gentler learning curve. Beginners can enjoy rallies from day one, while advanced players find endless tactical depth. This accessibility makes it perfect for building social connections.</p>

        <h2>The Social Factor</h2>
        <p>Padel is always played in doubles on an enclosed court, creating a uniquely social atmosphere. The smaller court size facilitates conversation between points, making it as much a social event as an activity session.</p>

        <h2>Perfect for All Ages</h2>
        <p>From teenagers to retirees, padel welcomes everyone. The enclosed court and underarm serving reduce the physical demands, making it accessible for people of all fitness levels.</p>

        <h2>Growing Infrastructure</h2>
        <p>New padel courts are opening daily across North America. Through Funect, people can easily discover these venues and book courts with just a few taps.</p>

        <h2>The Community Effect</h2>
        <p>Padel enthusiasts are passionate about the activity and welcoming to newcomers. This creates tight-knit communities that extend beyond the court into lasting friendships.</p>

        <p>Ready to join the padel revolution? Find courts and people near you on Funect today!</p>`,
    
    // Article 3 content
    'blog.article3.content': `<p>Organizing successful pickup sessions requires more than just showing up. Here's your complete guide to creating sessions that people love.</p>

        <h2>Set Clear Expectations</h2>
        <p>When creating a group on Funect, be specific about skill level, session format, and rules. Clear expectations prevent misunderstandings and ensure everyone has fun.</p>

        <h2>Choose the Right Venue</h2>
        <p>Consider accessibility, parking, and amenities when selecting a venue. Funect's venue reviews help you pick locations that people enjoy returning to.</p>

        <h2>Communicate Effectively</h2>
        <p>Use Funect's built-in messaging to keep people informed about any changes. Send reminders 24 hours before and confirm attendees the morning of the session.</p>

        <h2>Balance Teams Thoughtfully</h2>
        <p>Mixed skill levels? Rotate teams each session to keep things competitive and give everyone time with different partners.</p>

        <h2>Create Traditions</h2>
        <p>Regular weekly sessions at the same time and place help build community. People can plan around your sessions, leading to better attendance.</p>

        <h2>Handle Cancellations Gracefully</h2>
        <p>Life happens. Build a waiting list and have backup plans. Funect's notification system makes it easy to fill last-minute spots.</p>

        <h2>Foster Inclusivity</h2>
        <p>Welcome newcomers, rotate partners, and maintain a positive atmosphere. The best sessions are where everyone feels valued.</p>

        <p>With these strategies and Funect's organizational tools, you'll create pickup sessions that people eagerly anticipate week after week.</p>`,
    
    // Article 4 content
    'blog.article4.content': `<p>Finding the perfect venue can make or break your activity experience. Here's what to look for when discovering and booking courts through Funect.</p>

        <h2>Court Quality Matters</h2>
        <p>Surface condition, lighting, and equipment directly impact your session. Funect's detailed venue profiles include photos, amenities lists, and reviews so you know exactly what to expect.</p>

        <h2>Location and Accessibility</h2>
        <p>The best venue is the one you'll actually use. Consider proximity to home or work, parking availability, and public transit access. Funect's map view makes it easy to find convenient options.</p>

        <h2>Amenities and Facilities</h2>
        <p>Locker rooms, showers, equipment rental, and on-site dining enhance the experience. Premium venues offer more than just courts—they provide complete activity destinations.</p>

        <h2>Community and Atmosphere</h2>
        <p>Some venues cultivate vibrant communities with regular leagues and social events. Read reviews on Funect to find venues that match your social preferences.</p>

        <h2>Pricing and Value</h2>
        <p>Compare rates, membership options, and booking policies. Funect displays all pricing information upfront, helping you find the best value for your budget.</p>

        <h2>Peak and Off-Peak Times</h2>
        <p>Smart users take advantage of off-peak discounts. Funect's real-time availability shows when courts are cheaper and less crowded.</p>

        <h2>Supporting Local Businesses</h2>
        <p>Many of Funect's venues are locally owned. By booking through our platform, you're supporting small businesses and helping grow the active community in your area.</p>

        <p>Ready to discover your new favorite venue? Explore hundreds of courts on Funect and book your next session today!</p>`,
    
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
    'nav.forVenues': 'Yrityksille',
    'nav.about': 'Tietoa Meistä',
    'nav.articles': 'Artikkelit',
    'nav.contact': 'Yhteystiedot',
    
    // Hero
    'hero.title': 'Hauskoja tapaamisia, vaivatonta varausta',
    'hero.subtitle': 'Löydä aktiviteetteja, yhdistä ihmisiin, liity mukaan - kaikki yhdessä paikassa.',
    'hero.cta': 'Liity Funectiin!',
    'hero.howItWorks': 'Miten Funect toimii',
    'hero.howItWorksSubtitle': 'Aloittaminen on helppoa:',
    'hero.step1.title': 'Löydä paikka',
    'hero.step1.desc': 'Selaa ja löydä liikuntapaikkoja läheltäsi reaaliaikaisella saatavuudella.',
    'hero.step2.title': 'Liity tai luo ryhmä',
    'hero.step2.desc': 'Yhdistä ihmisiin, joilla on sama taitotaso, ja järjestä sessioita vaivattomasti.',
    'hero.step3.title': 'Ole aktiivinen ja luo yhteyksiä',
    'hero.step3.desc': 'Tapaa uusia ihmisiä, pysy aktiivisena ja luo pysyviä ystävyyssuhteita.',
    
    // Testimonials
    'testimonials.title': 'Mitä yhteisömme sanoo',
    'testimonials.subtitle': 'Oikeita tarinoita oikeilta ihmisiltä:',
    'testimonials.1.quote': 'Olen löytänyt kolme uutta padel-kaveria Funectin kautta! On niin helppoa löytää ihmisiä omalla tasollani.',
    'testimonials.1.outcome': 'Löysi 3 uutta pelikaveria',
    'testimonials.2.sport': 'Koripallo',
    'testimonials.2.quote': 'Vihdoin tapa järjestää pickup-sessioita ilman loputtomia ryhmäkeskusteluja. Rakastan ryhmäjärjestelmää!',
    'testimonials.2.outcome': 'Järjesti yli 15 sessiota',
    'testimonials.3.quote': 'Löysin 5 upeaa kenttää läheltäni, joista en tiennyt mitään. Todellinen pelinmuuttaja!',
    'testimonials.3.outcome': 'Löysi 5 uutta kenttää',
    'testimonials.4.sport': 'Jalkapallo',
    'testimonials.4.quote': 'Yhteisön turnaukset ovat mahtavia. Olen tavannut niin paljon upeita ihmisiä Funectin kautta.',
    'testimonials.4.outcome': 'Osallistui 8 turnaukseen',
    'testimonials.5.sport': 'Sulkapallo',
    'testimonials.5.quote': 'Funect auttoi minua löytämään säännöllisiä harjoituskavereita omalla taitotasollani. Nyt pelaan 3 kertaa viikossa!',
    'testimonials.5.outcome': 'Säännöllinen peliharjoitus',
    'testimonials.6.sport': 'Squash',
    'testimonials.6.quote': 'Sovellus teki niin helpoksi yhdistyä muiden squash-harrastajien kanssa. Rakastan yhteisöä!',
    'testimonials.6.outcome': 'Löysi yli 5 pelikaveria',
    'testimonials.7.sport': 'Pöytätennis',
    'testimonials.7.quote': 'Olin uusi kaupungissa ja Funect auttoi minua saamaan ystäviä liikunnan kautta. Upea kokemus!',
    'testimonials.7.outcome': 'Rakensi uusia ystävyyksiä',
    'testimonials.8.sport': 'Koripallo',
    'testimonials.8.quote': 'Loistava tapa pysyä aktiivisena ja tavata ihmisiä, jotka jakavat saman intohimon liikkumiseen!',
    'testimonials.8.outcome': 'Viikoittaiset sessiot',

    // Mission
    'mission.title': 'Missiomme',
    'mission.text': 'Funectissa uskomme, että liikunnalla on voima tuoda ihmiset yhteen. Missiomme on tehdä aktiivisena pysymisestä ja yhteyksien luomisesta helpompaa kuin koskaan — löytää upeita paikkoja, pysyä aktiivisena ja rakentaa yhteisöä. Olitpa kokenut harrastaja tai vasta aloittamassa, Funect auttaa sinua löytämään oman lajisi, paikkasi ja ihmisesi.',
    
    // FAQ
    'faq.title': 'Usein kysytyt kysymykset',
    'faq.subtitle': 'Onko sinulla kysymyksiä? Meillä on vastaukset',
    'faq.q1': 'Miten Funect toimii?',
    'faq.a1': 'Funect yhdistää sinut liikuntapaikkoihin ja ihmisiin alueellasi. Luo tili, selaa paikkoja tai ryhmiä ja aloita! Voit varata paikkoja suoraan tai liittyä/luoda ryhmiä löytääksesi ihmisiä taitotasollasi.',
    'faq.q2': 'Onko Funect ilmainen?',
    'faq.a2': 'Kyllä! Funect on ilmainen. Voit selata paikkoja, liittyä julkisiin ryhmiin ja käyttää yhteisöämme.',
    'faq.q3': 'Mitä lajeja Funectissa on saatavilla?',
    'faq.a3': 'Funect tukee laajaa valikoimaa lajeja, mukaan lukien tennis, padel, koripallo, jalkapallo, lentopallo, pickleball ja paljon muuta. Uusia lajeja ja paikkoja lisätään säännöllisesti yhteisön kysynnän mukaan.',
    'faq.q4': 'Miten yhteensovitus toimii?',
    'faq.a4': 'Älykäs algoritmi ottaa huomioon taitotasosi, sijaintisi, suosikkilajisi ja aikataulusi ehdottaakseen yhteensopivia ihmisiä.',
    'faq.q5': 'Voivatko liikuntapaikat liittyä Funectiin?',
    'faq.a5': 'Ehdottomasti! Tarjoamme Seura/Yritys-suunnitelman erityisesti paikoille ja liikuntajärjestöille. Tämä sisältää hallintatyökaluja, analytiikkaa, mukautettua brändäystä ja paljon muuta. Ota yhteyttä myyntitiimimme saadaksesi mukautetun tarjouksen.',
    
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
    'footer.tagline': 'Hauskoja tapaamisia, vaivatonta varausta',
    'footer.product': 'Tuote',
    'footer.company': 'Yritys',
    'footer.downloadApp': 'Lataa sovellus',
    'footer.terms': 'Käyttöehdot',
    'footer.privacy': 'Tietosuojakäytäntö',
    'footer.rights': '2025 Funect. Kaikki oikeudet pidätetään.',
    
    // About
    'about.title': 'Funectista',
    'about.subtitle': 'Missiomme on tehdä aktiivisena pysymisestä kaikille sosiaalisempaa, helpommin saavutettavaa ja ennen kaikkea hauskempaa.',
    'about.p1': 'Funect perustettiin vuonna 2025 yksinkertaisesta havainnosta: aktiivisten ihmisten löytäminen ja hyvien liikuntapaikkojen bongaaminen oli turhan hankalaa. Me halusimme muuttaa tämän.',
    'about.p2': 'Rakennamme alustaa, joka yhdistää ihmisiä kaikilta tasoilta – aina harrastelijoista kilpailullisiin harrastajiin – tehden aktiivisena pysymisestä ja uusien yhteyksien luomisesta helpompaa kuin koskaan.',
    'about.p3': 'Etsitpä sitten pickup-koripallosessiota, tenniskaveria tai padel-turnausta, Funect tuo aktiivisen yhteisön yhteen selkeällä ja intuitiivisella alustalla.',
    'about.vision': 'Visiomme',
    'about.visionDesc': 'Luoda maailma, jossa aktiivisena pysyminen ja yhteyksien luominen liikunnan kautta on vaivatonta kaikille.',
    'about.values': 'Arvomme',
    'about.valuesDesc': 'Yhteisö, osallisuus ja intohimo liikuntaan ohjaavat kaikkea, mitä Funectissa teemme.',
    'about.innovation': 'Innovaatio',
    'about.innovationDesc': 'Kehitämme jatkuvasti uusia ominaisuuksia, joiden avulla aktiivinen elämä on entistä saavutettavampaa ja sosiaalisempaa.',
    'about.venues': 'Sitoutumisemme liikuntapaikkoihin',
    'about.venuesDesc': 'Tarjoamme liikuntatiloille ja -organisaatioille työkalut kasvuun, uusien ihmisten tavoittamiseen ja vahvemman yhteisön rakentamiseen.',
    
    // Blog
    'blog.title': 'Funect Artikkelit',
    'blog.subtitle': 'Tarinoita, vinkkejä ja oivalluksia aktiivisesta yhteisöstä',
    'blog.readMore': 'Lue lisää',
    'blog.backToArticles': 'Takaisin artikkeleihin',
    'blog.minRead': 'min lukuaika',
    
    // Blog Articles
    'blog.article1.title': '5 tapaa löytää täydellinen liikuntayhteisö',
    'blog.article1.excerpt': 'Opi miten Funect auttaa sinua yhdistymään samanhenkisten ihmisten kanssa ja rakentamaan pysyviä ystävyyksiä liikunnan kautta.',
    'blog.article1.category': 'Yhteisö',
    'blog.article2.title': 'Padelin nousu: Miksi kaikki puhuvat siitä',
    'blog.article2.excerpt': 'Tutki maailman nopeimmin kasvavaa lajia ja miksi se on täydellinen sosiaalisten yhteyksien luomiseen.',
    'blog.article2.category': 'Lajit',
    'blog.article3.title': 'Kuinka järjestää täydellinen pickup-sessio',
    'blog.article3.excerpt': 'Vinkkejä ja niksejä mukaansatempaavien, hyvin järjestettyjen sessioiden luomiseen, joihin ihmiset palaavat.',
    'blog.article3.category': 'Vinkit',
    'blog.article4.title': 'Paikkavalokeila: Parhaat kentät kaupungissasi',
    'blog.article4.excerpt': 'Kattava opas parhaiden liikuntapaikkojen löytämiseen ja varaamiseen alueellasi.',
    'blog.article4.category': 'Paikat',
    
    // Article 1 content
    'blog.article1.content': `<p>Oikean liikuntayhteisön löytäminen voi muuttaa matkasi yksinäisestä harrastuksesta jaetuksi seikkailuksi. Tässä viisi todistettua strategiaa yhdistyä täydelliseen liikuntayhteisöön Funectin kautta.</p>

        <h2>1. Aloita kiinnostuksesi kohteista</h2>
        <p>Ensimmäinen askel on tunnistaa, mitkä lajit todella innostavat sinua. Olipa kyse tenniksestä, padelistä, koripallosta tai jalkapallosta, Funectin älykäs yhdistämisalgoritmi auttaa sinua löytämään ihmisiä, jotka jakavat intohimosi.</p>

        <h2>2. Ole rehellinen taitotasostasi</h2>
        <p>Yksi suurimmista esteistä harrastuksen nauttimiselle on yhteensopimattomat taitotasot. Funectin profiilit mahdollistavat kokemuksesi määrittelyn, varmistaen että sinut yhdistetään yhteensopiviin ihmisiin, jotka haastavat sinut sopivasti.</p>

        <h2>3. Osallistu yhteisötapahtumiin</h2>
        <p>Säännölliset turnaukset ja sosiaaliset tapahtumat ovat täydellisiä tilaisuuksia tavata useita ihmisiä kerralla. Nämä kokoontumisset luovat luonnollisia yhteyksiä, jotka usein ulottuvat kentän ulkopuolelle.</p>

        <h2>4. Liity useisiin ryhmiin</h2>
        <p>Älä rajoita itseäsi yhteen ryhmään. Tutustu erilaisiin ryhmiin kokeaksesi erilaisia tyylejä ja sosiaalisia dynamiikkoja. Tämä monimuotoisuus auttaa sinua löytämään paikan, johon todella kuulut.</p>

        <h2>5. Ole johdonmukainen</h2>
        <p>Yhteisön rakentaminen vie aikaa. Säännöllinen osallistuminen auttaa sinusta tulemaan tuttu kasvot, mikä johtaa vahvempiin yhteyksiin ja pysyviin ystävyyssuhteisiin.</p>

        <p>Muista, että liikuntayhteisön löytäminen on matka, ei määränpää. Funectin työkalujen ja sitoutumisesi avulla löydät ihmisiä, jotka jakavat intohimosi ja auttavat sinua kasvamaan.</p>`,
    
    // Article 2 content
    'blog.article2.content': `<p>Padel on räjähdysmäisesti kasvanut suosiossa viime vuosina, ja siitä on tullut yksi maailman nopeimmin kasvavista lajeista. Mutta mikä tekee tästä harrastuksesta niin erityisen?</p>

        <h2>Helppo oppia, vaikea hallita</h2>
        <p>Toisin kuin tennis, padelilla on loivempi oppimiskäyrä. Aloittelijat voivat nauttia ralleista ensimmäisestä päivästä lähtien, kun taas edistyneet harrastajat löytävät loputtomasti taktista syvyyttä. Tämä saavutettavuus tekee siitä täydellisen sosiaalisten yhteyksien rakentamiseen.</p>

        <h2>Sosiaalinen tekijä</h2>
        <p>Padelia pelataan aina kaksinpelinä suljetulla kentällä, mikä luo ainutlaatuisen sosiaalisen ilmapiirin. Pienempi kentän koko helpottaa keskustelua pisteiden välillä, tehden siitä yhtä paljon sosiaalisen tapahtuman kuin liikuntasession.</p>

        <h2>Täydellinen kaikenikäisille</h2>
        <p>Teini-ikäisistä eläkeläisiin, padel tervehtii kaikkia. Suljettu kenttä ja alakautta syöttäminen vähentävät fyysisiä vaatimuksia, tehden siitä saavutettavan kaikentasoisille ihmisille.</p>

        <h2>Kasvava infrastruktuuri</h2>
        <p>Uusia padelkenttiä avataan päivittäin ympäri Pohjois-Amerikkaa. Funectin kautta ihmiset voivat helposti löytää näitä paikkoja ja varata kenttiä muutamalla napautuksella.</p>

        <h2>Yhteisövaikutus</h2>
        <p>Padel-harrastajat ovat intohimoisia lajistaan ja toivottavat uudet tulokkaat tervetulleiksi. Tämä luo tiiviitä yhteisöjä, jotka ulottuvat kentän ulkopuolelle pysyviksi ystävyyssuhteiksi.</p>

        <p>Valmis liittymään padel-vallankumoukseen? Löydä kenttiä ja ihmisiä läheltäsi Funectista tänään!</p>`,
    
    // Article 3 content
    'blog.article3.content': `<p>Onnistuneiden pickup-sessioiden järjestäminen vaatii enemmän kuin vain paikalle saapumisen. Tässä on täydellinen oppaasi sessioiden luomiseen, joita ihmiset rakastavat.</p>

        <h2>Aseta selkeät odotukset</h2>
        <p>Kun luot ryhmän Funectiin, ole tarkka taitotasosta, sessioformaatista ja säännöistä. Selkeät odotukset ehkäisevät väärinkäsitykset ja varmistavat, että kaikki pitävät hauskaa.</p>

        <h2>Valitse oikea paikka</h2>
        <p>Harkitse saavutettavuutta, pysäköintiä ja mukavuuksia paikkaa valitessasi. Funectin paikka-arvostelut auttavat sinua valitsemaan sijainteja, joihin ihmiset haluavat palata.</p>

        <h2>Kommunikoi tehokkaasti</h2>
        <p>Käytä Funectin sisäänrakennettua viestitoimintoa pitääksesi ihmiset ajan tasalla muutoksista. Lähetä muistutukset 24 tuntia ennen ja vahvista osallistujat session aamuna.</p>

        <h2>Tasapainota joukkueet harkiten</h2>
        <p>Sekoitetut taitotasot? Vaihda joukkueita joka sessiossa pitääksesi asiat kilpailullisina ja antaaksesi kaikille aikaa eri kumppaneiden kanssa.</p>

        <h2>Luo perinteitä</h2>
        <p>Säännölliset viikoittaiset sessiot samaan aikaan ja paikassa auttavat rakentamaan yhteisöä. Ihmiset voivat suunnitella sessioitasi ympärille, mikä johtaa parempaan osallistumiseen.</p>

        <h2>Käsittele peruutukset armollisesti</h2>
        <p>Elämää tapahtuu. Rakenna odotuslistoja ja varaa varasuunnitelmat. Funectin ilmoitusjärjestelmä tekee viime hetken paikkojen täyttämisestä helppoa.</p>

        <h2>Edistä osallisuutta</h2>
        <p>Toivota uudet tulokkaat tervetulleiksi, vaihda kumppaneita ja ylläpidä positiivista ilmapiiriä. Parhaat sessiot ovat niitä, joissa jokainen tuntee olevansa arvostettu.</p>

        <p>Näillä strategioilla ja Funectin organisointityökaluilla luot pickup-sessioita, joita ihmiset odottavat innokkaasti viikosta toiseen.</p>`,
    
    // Article 4 content
    'blog.article4.content': `<p>Täydellisen paikan löytäminen voi tehdä tai rikkoa liikuntakokemuksesi. Tässä mitä etsiä kun löydät ja varaat kenttiä Funectin kautta.</p>

        <h2>Kentän laatu on tärkeää</h2>
        <p>Pinnan kunto, valaistus ja varusteet vaikuttavat suoraan sessioosi. Funectin yksityiskohtaiset paikkaprofiilit sisältävät kuvia, mukavuusluetteloita ja arvioita, joten tiedät tarkalleen mitä odottaa.</p>

        <h2>Sijainti ja saavutettavuus</h2>
        <p>Paras paikka on se, jota todella käytät. Harkitse läheisyyttä kotiin tai työhön, pysäköintimahdollisuuksia ja julkisen liikenteen saatavuutta. Funectin karttanäkymä tekee kätevien vaihtoehtojen löytämisestä helppoa.</p>

        <h2>Mukavuudet ja tilat</h2>
        <p>Pukuhuoneet, suihkut, välinevuokraus ja paikan päällä oleva ravintola parantavat kokemusta. Premium-paikat tarjoavat enemmän kuin vain kenttiä—ne tarjoavat täydellisiä liikuntakohteita.</p>

        <h2>Yhteisö ja ilmapiiri</h2>
        <p>Jotkut paikat viljelevät elinvoimaisia yhteisöjä säännöllisillä liigoilla ja sosiaalisilla tapahtumilla. Lue arvosteluja Funectista löytääksesi paikkoja, jotka vastaavat sosiaalisia mieltymyksiäsi.</p>

        <h2>Hinnoittelu ja arvo</h2>
        <p>Vertaile hintoja, jäsenyys-vaihtoehtoja ja varausehtoja. Funect näyttää kaikki hintatiedot etukäteen, auttaen sinua löytämään parhaan vastineen budjetillesi.</p>

        <h2>Ruuhka- ja hiljaiset ajat</h2>
        <p>Älykkäät käyttäjät hyödyntävät hiljaisten aikojen alennuksia. Funectin reaaliaikainen saatavuus näyttää milloin kentät ovat halvempia ja vähemmän täynnä.</p>

        <h2>Paikallisten yritysten tukeminen</h2>
        <p>Monet Funectin paikoista ovat paikallisessa omistuksessa. Varaamalla alustamme kautta tuet pienyrityksiä ja autat kasvattamaan aktiivista yhteisöä alueellasi.</p>

        <p>Valmis löytämään uuden suosikkipaikkasi? Tutustu satoihin kenttiin Funectissa ja varaa seuraava sessiosi tänään!</p>`,
    
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
