import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  Phone,
  MessageCircle,
  PhoneCall,
  Target,
  CheckCircle2,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Bulk SMS Services",
      description: "Send instant messages to your customers with high delivery accuracy.",
      features: [
        "Promotional SMS",
        "Transactional SMS",
        "OTP SMS",
        "API Integration",
        "Delivery Reports",
        "DLT Support",
      ],
      color: "text-primary",
    },
    {
      icon: MessageCircle,
      title: "Bulk WhatsApp Services",
      description: "Engage customers on the most active messaging platform.",
      features: [
        "Text, Images, Videos, PDFs",
        "Call-to-Action Buttons",
        "Quick Replies",
        "Bulk Campaign Dashboard",
        "Multi-Device Support",
        "Real-Time Analytics",
      ],
      color: "text-secondary",
    },
    {
      icon: Phone,
      title: "Voice Call Broadcasting",
      description: "Reach thousands with pre-recorded voice messages.",
      features: [
        "Announcements",
        "Promotions",
        "Reminders",
        "Campaign Marketing",
        "Multi-Language Support",
        "Instant Delivery",
      ],
      color: "text-primary",
    },
    {
      icon: PhoneCall,
      title: "IVR Solutions",
      description: "Automate customer communication with smart cloud IVR.",
      features: [
        "Multi-Level IVR",
        "Call Routing",
        "Missed Call Alerts",
        "Call Forwarding",
        "Call Recording",
        "24/7 Availability",
      ],
      color: "text-secondary",
    },
    {
      icon: Target,
      title: "Digital Marketing",
      description: "End-to-end online branding & lead generation.",
      features: [
        "Social Media Marketing",
        "Google Ads",
        "Lead Generation",
        "Brand Awareness",
        "Performance Marketing",
        "Analytics & Reporting",
      ],
      color: "text-primary",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive communication solutions designed to help your business grow
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-strong transition-all duration-300 hover:bg-primary/5 hover:border-primary/30 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <service.icon className={`w-16 h-16 mb-4 ${service.color}`} />
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 text-lg">Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Perfect for Every Business Need
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">For Consultancies</h3>
                <p className="text-sm text-muted-foreground">
                  Reach abroad education prospects instantly with SMS and WhatsApp campaigns
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">For Real Estate</h3>
                <p className="text-sm text-muted-foreground">
                  Send property updates and schedule visits via automated voice calls
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">For Training Institutes</h3>
                <p className="text-sm text-muted-foreground">
                  Promote courses and send admission reminders through bulk messaging
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
