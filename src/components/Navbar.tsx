import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Enfoque", href: "#enfoque" },
    { name: "Equipo", href: "#equipo" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || isOpen
          ? "bg-white shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* Desktop Navbar - Hidden on mobile */}
      <div className="hidden md:flex container mx-auto px-4 justify-between items-center py-4">
        <a href="#" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Comunicar Más Logo" 
            className="h-12 w-auto"
          />
          <div className="ml-2">
            <span className="text-xl font-display font-semibold">
              <span className="text-comunicar-lavender">Comunicar</span>{" "}
              <span className="text-comunicar-blue">Más</span>
            </span>
          </div>
        </a>

        <div className="flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium hover:text-comunicar-lavender transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <Button 
          asChild 
          variant="default" 
          size="lg" 
          className="bg-[#7d6aa9] hover:bg-[#5a4b8a] text-white shadow-md"
        >
          <a href="#agendar">Agendar Cita</a>
        </Button>
      </div>

      {/* Mobile Navbar - Only logo and menu button */}
      <div className="md:hidden flex container mx-auto px-4 justify-between items-center py-4">
        <a href="#" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Comunicar Más Logo" 
            className="h-10 w-auto"
          />
        </a>

        <button
          className="focus:outline-none transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Separate dropdown with transition */}
      <div 
        className={`md:hidden fixed w-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 font-medium hover:text-comunicar-lavender transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Button 
              asChild 
              variant="default" 
              size="lg" 
              className="w-full bg-[#7d6aa9] hover:bg-[#5a4b8a] text-white shadow-md"
            >
              <a 
                href="#agendar"
                onClick={() => setIsOpen(false)}
              >
                Agendar Cita
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;