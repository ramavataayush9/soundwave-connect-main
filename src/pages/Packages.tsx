import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MessageCircle, Star } from "lucide-react";
import eventWedding from "@/assets/event-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventFestival from "@/assets/event-festival.jpg";

const packages = [
  {
    id: 1,
    name: "Basic",
    price: "₹6,000",
    priceNote: "Starting from",
    image: eventWedding,
    description: "Perfect for small house parties, birthday celebrations, and intimate gatherings up to 100 guests.",
    features: [
      "2 Premium Speakers (1000W)",
      "2 Subwoofer (500W)",
      "All Cables & Stands",
      "Professional Setup",
      "Up to 4 Hours",
    ],
    ideal: "House parties, Birthday celebrations, Small gatherings",
  },
  {
    id: 2,
    name: "Premium",
    price: "₹15,000",
    priceNote: "Most popular",
    image: eventCorporate,
    description: "Ideal for corporate events, medium weddings, and functions with 100-300 guests.",
    features: [
      "4 Premium Speakers (2000W each)",
      "4 Subwoofers (1000W each)",
      "2 Wireless Microphones",
      "Professional DJ Mixer",
      "On-site Technician",
      "Up to 8 Hours",
    ],
    ideal: "Corporate events, Medium weddings, Reception parties",
    popular: true,
  },
  {
    id: 3,
    name: "Ultimate",
    price: "₹25,000",
    priceNote: "Complete solution",
    image: eventFestival,
    description: "The complete audio-visual experience for grand weddings, concerts, and large-scale events with 300+ guests.",
    features: [
      "Line Array System (8 cabinets)",
      "4 High-power Subwoofers",
      "4 Wireless Microphones",
      "Full DJ Setup with CDJs",
      "On-site Technicians",
      "Full Day Coverage (12 Hours)",
    ],
    ideal: "Grand weddings, Concerts, Festivals, Large celebrations",
  },
  {
    id: 4,
    name: "Custom",
    price: "Custom Quote",
    priceNote: "Tailored for you",
    image: eventFestival,
    description: "Need something specific? We'll create a custom package based on your unique requirements.",
    features: [
      "Custom Equipment Selection",
      "Flexible Duration",
      "Multi-venue Support",
      "Dedicated Project Manager",
      "Advanced Technical Riders",
      "Priority Booking",
      "Extended Support",
      "Post-event Review",
    ],
    ideal: "Multi-day events, Tours, Special requirements",
  },
];

const addOns = [
  { name: "Additional Wireless Mic", price: "₹500/unit" },
  { name: "Extra Subwoofer", price: "₹1,500/unit" },
  { name: "Extended Hours", price: "₹1,500/hour" },
];

const Packages = () => {
  return (
    <Layout>
      <SEOHead
        title="Sound Packages"
        description="Explore our range of sound system rental packages for every event size. From basic party setups to concert-grade systems, find the perfect audio solution."
        keywords="sound system packages, DJ rental prices, PA system hire cost, wedding sound package, event audio pricing"
      />

      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4">Our Packages</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Sound Packages For{" "}
              <span className="text-gradient">Every Event</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose from our carefully curated packages or let us create a custom solution for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-card border rounded-2xl overflow-hidden card-hover ${
                  pkg.popular ? "border-primary ring-1 ring-primary/20" : "border-border"
                }`}
              >
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto overflow-hidden relative">
                    <img
                      src={pkg.image}
                      alt={`${pkg.name} package`}
                      className="w-full h-full object-cover"
                    />
                    {pkg.popular && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-primary font-medium mb-1">{pkg.priceNote}</p>
                    <div className="flex items-end gap-2 mb-2">
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        {pkg.name}
                      </h2>
                    </div>
                    <p className="text-3xl font-display font-bold text-gradient mb-4">
                      {pkg.price}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {pkg.description}
                    </p>
                    <p className="text-xs text-primary mb-4">Ideal for: {pkg.ideal}</p>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.slice(0, 5).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {pkg.features.length > 5 && (
                        <li className="text-xs text-muted-foreground pl-6">
                          +{pkg.features.length - 5} more features
                        </li>
                      )}
                    </ul>
                    <div className="flex gap-3">
                      <Button variant="whatsapp" size="sm" className="flex-1" asChild>
                        <a href="https://wa.me/919978989990" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </a>
                      </Button>
                      <Button variant="call" size="sm" className="flex-1" asChild>
                        <a href="tel:+919978989990">
                          <Phone className="w-4 h-4" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-3">Customize Your Package</p>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Add-On Equipment
              </h2>
              <p className="text-muted-foreground">
                Enhance your package with additional equipment to suit your specific needs.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="divide-y divide-border">
                {addOns.map((addon, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors">
                    <span className="text-foreground">{addon.name}</span>
                    <span className="text-primary font-semibold">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-6">
              * Prices may vary based on location and event duration. Contact us for a detailed quote.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Not Sure Which Package To Choose?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our team will help you select the perfect setup based on your venue, guest count, and requirements.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/919978989990" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Get Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
