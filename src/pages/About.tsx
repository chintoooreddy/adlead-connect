import { Card } from "@/components/ui/card";
import { Target, Eye, Users, DollarSign, Zap, HeadphonesIcon } from "lucide-react";

const About = () => {
  const values = [
    { icon: Users, title: "Customer-Centered Service", description: "Your success is our priority" },
    { icon: DollarSign, title: "Affordable Pricing", description: "Transparent and fair pricing" },
    { icon: Zap, title: "High Deliverability", description: "Maximum message delivery rates" },
    { icon: HeadphonesIcon, title: "Quick Support", description: "Always here to help you" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">About AdLead Digital Media</h1>
            <p className="text-xl text-muted-foreground">
              Empowering businesses with innovative communication solutions since inception
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                AdLead Digital Media is a Hyderabad-based Digital Communication & Marketing
                solutions provider helping businesses expand their reach through SMS, WhatsApp,
                Voice Calls, and Digital Marketing tools.
              </p>
              <p>
                Located at <strong className="text-foreground">Gajularamaram (KPHB Road), Hyderabad</strong>, we support businesses of all
                sizes with technology-driven communication services that deliver results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-strong transition-all duration-300">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with fast, reliable, and cost-effective communication
                solutions that help them acquire, engage, and retain customers.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-strong transition-all duration-300">
              <Eye className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become India's most trusted communication partner enabling effortless
                business growth through innovation and technology.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What Defines Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Defines Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-bold mb-2">Smart Dashboard & API</h3>
                <p className="text-muted-foreground">
                  User-friendly interfaces and robust API integration for seamless operations.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-2">End-to-End Digital Solutions</h3>
                <p className="text-muted-foreground">
                  Complete communication ecosystem from messaging to marketing.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
