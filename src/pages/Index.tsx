import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight, Volume2, Music, Mic, Speaker, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import eventWedding from "@/assets/event-wedding.jpg";
import eventCorporate from "@/assets/event-corporate.jpg";
import eventFestival from "@/assets/event-festival.jpg";

const services = [
  {
    icon: Speaker,
    title: "PA Systems",
    description: "Powerful PA systems for any venue size, from intimate gatherings to large outdoor events.",
  },
  {
    icon: Mic,
    title: "DJ Equipment",
    description: "Complete DJ setups with mixers, turntables, and controllers for professional performances.",
  },
  {
    icon: Volume2,
    title: "Concert Sound",
    description: "Line arrays and professional-grade equipment for concerts and festivals.",
  },
  {
    icon: Music,
    title: "Wedding Audio",
    description: "Crystal-clear audio solutions tailored for wedding ceremonies and receptions.",
  },
];

const packages = [
  {
    name: "Basic",
    price: "₹6,000",
    image: eventWedding,
    features: ["2 Speakers + 2 Subwoofer", "Delivery & Setup", "4 Hours Duration"],
    ideal: "Small gatherings & parties",
  },
  {
    name: "Premium",
    price: "₹10,000",
    image: eventCorporate,
    features: ["4 Speakers + 4 Subwoofers", "2 Wireless Mics", "Professional Mixer", "8 Hours Duration"],
    ideal: "Corporate events & functions",
    popular: true,
  },
  {
    name: "Ultimate",
    price: "₹25,000",
    image: eventFestival,
    features: ["Line Array System", "4 Wireless Mics", "Full DJ Setup", "Full Day Coverage"],
    ideal: "Weddings & large events",
  },
];

const stats = [
  { number: "500+", label: "Events Completed" },
  { number: "25+", label: "Years Experience" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
];

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Home"
        description="Premium sound system rental services for weddings, corporate events, concerts, and celebrations. Professional audio equipment with expert setup and support."
        keywords="sound system rental, DJ equipment hire, PA system rental, wedding sound, event audio, speaker rental"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg })` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4 animate-fade-in">
              Premium Sound System Rentals
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Elevate Your Events With{" "}
              <span className="text-gradient">Crystal Clear Sound</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              From intimate celebrations to grand festivals, we provide professional audio solutions that make your events unforgettable.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/packages">
                  View Packages
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a href="https://wa.me/919978989990" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Get Quote
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional sound equipment and services tailored to make your event a success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 card-hover"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">Sound Packages</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Choose Your Perfect Package
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible packages designed to fit every event size and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card border rounded-2xl overflow-hidden card-hover ${
                  pkg.popular ? "border-primary" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <div className="h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={`${pkg.name} package`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-end gap-2 mb-2">
                    <h3 className="text-xl font-display font-bold text-foreground">
                      {pkg.name}
                    </h3>
                    <span className="text-muted-foreground text-sm mb-0.5">Package</span>
                  </div>
                  <p className="text-3xl font-display font-bold text-gradient mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-muted-foreground mb-6">Starting price</p>
                  <p className="text-sm text-primary mb-4">{pkg.ideal}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Button variant="whatsapp" size="sm" className="flex-1" asChild>
                      <a href="https://wa.me/919978989990" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4" />
                        Enquire
                      </a>
                    </Button>
                    <Button variant="call" size="sm" className="flex-1" asChild>
                      <a href="tel:+919978989990">
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/packages">
                View All Packages
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-ember/10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Ready to Make Your Event{" "}
              <span className="text-gradient">Unforgettable?</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get in touch with us today for a free consultation and quote. Our team is ready to help you create the perfect audio experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/919978989990" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
