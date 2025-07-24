import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const MobileBookingButton = () => {
  return (
    <div 
      className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-4"
    >
      <Button 
        asChild 
        variant="default" 
        size="lg" 
        className="w-full shadow-lg bg-[#7d6aa9] hover:bg-[#5a4b8a] text-white"
      >
        <a href="#agendar" className="flex items-center justify-center gap-2">
          <Calendar size={18} />
          Agendar Cita
        </a>
      </Button>
    </div>
  );
};

export default MobileBookingButton;