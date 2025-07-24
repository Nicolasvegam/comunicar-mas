import React from "react";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-comunicar-lavender/10 -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Comunicar Más Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-display font-semibold">
                <span className="text-comunicar-lavender">Comunicar</span>{" "}
                <span className="text-comunicar-blue">Más</span>
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              Centro especializado en el desarrollo infantil con un enfoque integral basado en el amor, la evidencia y el acompañamiento familiar.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/comunicarmas.cl/"
                className="bg-[#6d4e93] p-2 rounded-full shadow-md text-white hover:bg-[#5a3b80] transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:comunicarmascl@gmail.com"
                className="bg-[#d85c85] p-2 rounded-full shadow-md text-white hover:bg-[#c04c75] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#especialidades" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#enfoque" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Nuestro enfoque
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Holanda 099, piso 9, oficina 904
              </li>
              <li>
                <a href="mailto:comunicarmascl@gmail.com" className="text-muted-foreground hover:text-comunicar-lavender transition-colors">
                  comunicarmascl@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                Lun-Vie: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center text-muted-foreground">
          <p>© {currentYear} Comunicar Más. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;