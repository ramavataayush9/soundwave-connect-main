import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, Clock, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Award,
    title: "Quality Equipment",
    description: "We invest in top-tier audio equipment from renowned brands to ensure the best sound quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced technicians handle setup and provide on-site support throughout your event.",
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description: "We arrive early, set up efficiently, and ensure everything runs smoothly on time.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
];

const milestones = [
  { year: "1999", event: "Started with basic PA systems for local events" },
  { year: "2015", event: "Expanded to wedding and corporate events" },
  { year: "2020", event: "Added professional DJ equipment to our inventory" },
  { year: "2023", event: "Invested in line array systems for larger venues" },
  { year: "2024", event: "Partnered with major event management companies" },
  { year: "2026", event: "Serving 500+ events annually across the region" },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Us"
        description="Learn about Sitaram Sound - your trusted partner for premium sound system rentals with over 10 years of experience in creating unforgettable audio experiences."
        keywords="about sound rental company, audio equipment provider, event sound specialist, professional sound services"
      />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl">
            <p className="text-primary font-medium mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Crafting Perfect Sound{" "}
              <span className="text-gradient">Since 2014</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sitaram Sound was born from a passion for music and a commitment to excellence. Over the past decade, we've grown from a small local service to a trusted name in professional audio rentals, serving hundreds of events each year.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To provide exceptional audio solutions that transform ordinary events into extraordinary experiences. We believe that great sound is the foundation of memorable celebrations, and we're dedicated to delivering nothing but the best.
              </p>
              <ul className="space-y-4">
                {[
                  "Premium equipment from trusted brands",
                  "Professional setup and technical support",
                  "Competitive pricing for all budgets",
                  "Reliable service with 24/7 availability",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">Our Journey</h3>
              <div className="space-y-6">
                {milestones.map((milestone, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-16">
                      <span className="text-primary font-bold">{milestone.year}</span>
                    </div>
                    <div className="flex-1 pb-6 border-l border-border pl-4 relative">
                      <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-primary -translate-x-[5px]" />
                      <p className="text-muted-foreground text-sm">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-3">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 card-hover text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/10 via-card to-ember/10 border border-border rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Ready to experience the SoundWave difference? Get in touch and let's make your next event unforgettable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/packages">View Packages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
