import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full shadow-strong bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300"
      >
        <a href="tel:7780105776" aria-label="Call us">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
      
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full shadow-strong bg-green-600 hover:bg-green-700 hover:scale-110 transition-all duration-300"
      >
        <a 
          href="https://wa.me/917780105776" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingActionButtons;
