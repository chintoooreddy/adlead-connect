import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  Phone,
  MessageCircle,
  PhoneCall,
  Target,
  CheckCircle2,
  Zap,
  Shield,
  BarChart3,
  Users,
  Building2,
  GraduationCap,
  Home as HomeIcon,
  Rocket,
  Store,
} from "lucide-react";

const Home = () => {
  const strengths = [
    { icon: Zap, text: "Fast & Reliable Delivery" },
    { icon: Shield, text: "High Quality Routes" },
    { icon: BarChart3, text: "Real-Time Reports" },
    { icon: CheckCircle2, text: "Easy-to-Use Dashboard" },
  ];

  const services = [
    {
      icon: MessageSquare,
      title: "Bulk SMS",
      description: "Reach thousands instantly with Promotional & Transactional SMS.",
      color: "text-primary",
    },
    {
      icon: MessageCircle,
      title: "Bulk WhatsApp",
      description: "Send branded messages with buttons, catalogs, images & more.",
      color: "text-secondary",
    },
    {
      icon: Phone,
      title: "Bulk Voice Calls",
      description: "Automated voice broadcasting for promotions & reminders.",
      color: "text-primary",
    },
    {
      icon: PhoneCall,
      title: "IVR & Missed Call",
      description: "24/7 automated call solutions for customer experience.",
      color: "text-secondary",
    },
    {
      icon: Target,
      title: "Digital Marketing",
      description: "Professional ads, lead generation & online presence management.",
      color: "text-primary",
    },
  ];

  const industries = [
    { icon: Building2, name: "Abroad Consultancies" },
    { icon: GraduationCap, name: "Training Institutes" },
    { icon: HomeIcon, name: "Real Estate" },
    { icon: Rocket, name: "Startups" },
    { icon: Store, name: "SME Businesses" },
    { icon: Users, name: "Enterprises" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Grow Your Business Faster with{" "}
              <span className="text-primary">Smart Digital Communication</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Deliver your message instantly across SMS, WhatsApp, Voice, and Digital
              Platforms — strengthen your customer reach with AdLead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="gradient-hero text-lg px-8 shadow-strong">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 border-2">
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <service.icon className={`w-12 h-12 mb-4 ${service.color}`} />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AdLead?</h2>
            <p className="text-lg text-muted-foreground">
              AdLead Digital Media helps businesses connect, engage, and grow with
              powerful communication tools designed for high delivery and high ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <strength.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="font-semibold">{strength.text}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">API Integration Support</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">End-to-End DLT Assistance</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">Best Pricing for All Businesses</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">Dedicated Customer Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Support</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="p-4 text-center hover:shadow-soft transition-all duration-300 border-border/50"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">{industry.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-combined opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Increase your reach and boost your conversions with AdLead's communication
            solutions.
          </p>
          <Button asChild size="lg" className="gradient-hero text-lg px-8 shadow-strong">
            <Link to="/contact">Talk to Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
