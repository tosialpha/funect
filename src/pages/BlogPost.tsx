import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { CalendarBlank, Clock, ArrowLeft } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { id } = useParams();

  const articles: { [key: string]: any } = {
    "1": {
      title: "5 Ways to Find Your Perfect Sports Community",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Community",
      content: `
        <p>Finding the right sports community can transform your athletic journey from a solitary pursuit into a shared adventure. Here are five proven strategies to connect with your perfect sports community through Funect.</p>
        
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
        
        <p>Remember, finding your sports community is a journey, not a destination. With Funect's tools and your commitment, you'll discover people who share your passion and help you grow as an athlete.</p>
      `,
    },
    "2": {
      title: "The Rise of Padel: Why Everyone's Talking About It",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Sports",
      content: `
        <p>Padel has exploded in popularity over the past few years, becoming one of the fastest-growing sports worldwide. But what makes this racquet sport so special?</p>
        
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
        
        <p>Ready to join the padel revolution? Find courts and players near you on Funect today!</p>
      `,
    },
    "3": {
      title: "How to Organize the Perfect Pickup Game",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Tips",
      content: `
        <p>Organizing successful pickup games requires more than just showing up. Here's your complete guide to creating games that players love.</p>
        
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
        
        <p>With these strategies and Funect's organizational tools, you'll create pickup games that players eagerly anticipate week after week.</p>
      `,
    },
    "4": {
      title: "Venue Spotlight: The Best Courts in Your City",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Venues",
      content: `
        <p>Finding the perfect venue can make or break your sports experience. Here's what to look for when discovering and booking courts through Funect.</p>
        
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
        
        <p>Ready to discover your new favorite venue? Explore hundreds of courts on Funect and book your next game today!</p>
      `,
    },
  };

  const article = articles[id || "1"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft size={20} weight="light" className="mr-2" />
                Back to Articles
              </Button>
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-muted-foreground mb-12">
              <div className="flex items-center gap-1">
                <CalendarBlank size={18} weight="light" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={18} weight="light" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75",
              }}
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
