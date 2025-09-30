import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: September 30, 2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none space-y-8"
          >
            <section>
              <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Funect, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily access Funect for personal, non-commercial use only. This license shall automatically terminate if you violate any of these restrictions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Under this license, you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to reverse engineer any software contained on Funect</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for safeguarding your account password and for any activities or actions under your account. You must immediately notify us of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">4. Content and Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Users are responsible for all content they post on Funect. You agree not to post content that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Is unlawful, harmful, threatening, abusive, or otherwise objectionable</li>
                <li>Infringes on any intellectual property rights</li>
                <li>Contains software viruses or any other malicious code</li>
                <li>Impersonates any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">5. Payment and Subscriptions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some parts of Funect are billed on a subscription basis. You will be billed in advance on a recurring basis. Billing cycles are set on a monthly basis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You may cancel your subscription at any time through your account settings. Upon cancellation, you will retain access to paid features until the end of your current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Funect or its suppliers be liable for any damages arising out of the use or inability to use Funect, even if Funect or an authorized representative has been notified of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">7. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes via email or through a notice on our platform. Your continued use of Funect after such modifications constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our Contact page or email us at legal@funect.com.
              </p>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
