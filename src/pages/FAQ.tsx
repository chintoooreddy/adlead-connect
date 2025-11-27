import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you support DLT registration?",
      answer:
        "Yes. We offer full DLT (Distributed Ledger Technology) onboarding assistance to help you comply with TRAI regulations for commercial messaging.",
    },
    {
      question: "Can WhatsApp messages include media files?",
      answer:
        "Absolutely — you can send images, PDFs, videos, catalogs, call-to-action buttons, and more through our Bulk WhatsApp service.",
    },
    {
      question: "Do you provide delivery reports?",
      answer:
        "Yes, all SMS, WhatsApp, and Voice campaigns include real-time delivery reports with detailed analytics and insights.",
    },
    {
      question: "Do you support API integration?",
      answer:
        "Yes, all our communication services come with comprehensive API integration support for seamless connectivity with your existing systems.",
    },
    {
      question: "Is AdLead suitable for small businesses?",
      answer:
        "Yes. Our plans are designed to support startups, SMEs, and enterprise-level clients. We offer flexible pricing based on your business size and needs.",
    },
    {
      question: "Do you offer demo access?",
      answer:
        "Yes — request a demo and we will provide access to our platform so you can experience our services firsthand before making a commitment.",
    },
    {
      question: "What is the minimum order quantity?",
      answer:
        "We offer flexible plans starting from small volumes to enterprise-level requirements. Contact us to discuss your specific needs.",
    },
    {
      question: "How long does it take to get started?",
      answer:
        "Once you contact us, we can typically have you up and running within 24-48 hours, including DLT registration assistance if needed.",
    },
    {
      question: "What kind of customer support do you provide?",
      answer:
        "We offer dedicated customer support via email and phone during business hours (Mon-Sat, 9:00 AM – 8:00 PM). Our team is always ready to assist you.",
    },
    {
      question: "Can I track my message campaigns?",
      answer:
        "Yes, our smart dashboard provides real-time tracking, delivery reports, analytics, and insights for all your messaging campaigns.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 shadow-soft">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground">
              Our team is here to help you understand our services better and find the right
              solution for your business.
            </p>
            <div className="pt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 gradient-hero shadow-strong hover:opacity-90"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
