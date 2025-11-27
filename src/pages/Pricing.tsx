import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Pricing Plans</h1>
            <p className="text-xl text-muted-foreground">
              Get the best pricing tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center shadow-strong">
            <h2 className="text-3xl font-bold mb-6">
              Get Best Pricing for Your Business Needs
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              AdLead offers customized pricing based on:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <p className="font-semibold">Message Volume</p>
                <p className="text-sm text-muted-foreground">Scalable pricing tiers</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <p className="font-semibold">Service Type</p>
                <p className="text-sm text-muted-foreground">SMS / WhatsApp / Voice / IVR</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-primary" />
                <p className="font-semibold">Business Size</p>
                <p className="text-sm text-muted-foreground">From startups to enterprises</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Contact Us for a Quick Quotation</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:Sindhu@adlead.in"
                  className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Sindhu@adlead.in
                </a>
                <span className="hidden sm:block text-muted-foreground">|</span>
                <a
                  href="tel:+917780105776"
                  className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +91 7780105776
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild size="lg" className="gradient-hero shadow-strong">
                  <Link to="/contact">Get a Quote Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <Link to="/contact">Request a Callback</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Choose Our Pricing */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Transparent & Flexible Pricing
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-bold mb-2">No Hidden Charges</h3>
                <p className="text-muted-foreground">
                  Clear pricing with all costs disclosed upfront. What you see is what you pay.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-2">Scalable Plans</h3>
                <p className="text-muted-foreground">
                  Start small and scale up as your business grows. Pay only for what you use.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-primary">
                <h3 className="text-xl font-bold mb-2">Volume Discounts</h3>
                <p className="text-muted-foreground">
                  Better rates for higher volumes. Maximize ROI with bulk messaging plans.
                </p>
              </Card>
              <Card className="p-6 border-l-4 border-l-secondary">
                <h3 className="text-xl font-bold mb-2">Flexible Contracts</h3>
                <p className="text-muted-foreground">
                  No long-term lock-ins. Choose monthly or annual plans based on your needs.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
