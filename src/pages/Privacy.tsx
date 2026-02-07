import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Privacy = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy"
        description="Read SoundWave Rentals' privacy policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, sound rental privacy"
      />

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and details about your event.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process and fulfill your rental bookings</li>
                <li>Send you updates about your bookings</li>
                <li>Improve our services and website</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only with service providers who assist us in operating our business, and only when necessary to fulfill your requests.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at info@soundwave.com or call +91 98765 43210.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
