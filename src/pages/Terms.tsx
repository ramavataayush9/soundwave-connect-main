import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Terms = () => {
  return (
    <Layout>
      <SEOHead
        title="Terms of Service"
        description="Read SoundWave Rentals' terms of service governing the use of our sound system rental services."
        keywords="terms of service, rental agreement, sound equipment terms"
      />

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold text-foreground mb-8">Terms of Service</h1>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <p className="text-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">1. Rental Agreement</h2>
              <p>
                By booking our services, you agree to these terms and conditions. All rental equipment remains the property of Sitaram Sound throughout the rental period.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">2. Booking and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>A 50% advance payment is required to confirm your booking</li>
                <li>The remaining balance is due before or on the day of the event</li>
                <li>Prices are subject to change based on location and specific requirements</li>
                <li>We accept cash, bank transfer, and UPI payments</li>
              </ul>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">3. Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations made 7+ days before the event: Full refund minus processing fees</li>
                <li>Cancellations made 3-7 days before: 50% refund</li>
                <li>Cancellations made less than 3 days before: No refund</li>
                <li>Rescheduling is subject to availability and may incur additional charges</li>
              </ul>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">4. Equipment Care</h2>
              <p>
                The client is responsible for the safety of the equipment during the event. Any damage to the equipment due to misuse, negligence, or environmental factors will be charged to the client.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">5. Setup and Access</h2>
              <p>
                The client must provide adequate access to the venue for setup and teardown. Our team will arrive at least 2 hours before the event for proper setup and sound checks.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">6. Liability</h2>
              <p>
                Sitaram Sound is not liable for any injuries, damages, or losses that occur during the event. The client is responsible for ensuring a safe environment for the equipment and our technicians.
              </p>

              <h2 className="text-xl font-display font-semibold text-foreground mt-8">7. Contact</h2>
              <p>
                For any questions regarding these terms, please contact us at info@soundwave.com or call +91 99789 89990.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
