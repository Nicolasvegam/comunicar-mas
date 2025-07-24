import React from "react";
import { Heart, Star, Book, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Atención personalizada",
    description: "Cada niño es único y adaptamos nuestro trabajo a sus necesidades específicas.",
  },
  {
    icon: Star,
    title: "Objetivos claros",
    description: "Definimos metas terapéuticas medibles para evaluar el progreso constante.",
  },
  {
    icon: Book,
    title: "Evidencia científica",
    description: "Utilizamos metodologías actualizadas y respaldadas por investigación.",
  },
  {
    icon: Users,
    title: "Trabajo colaborativo",
    description: "Involucramos a la familia y el entorno escolar en el proceso terapéutico.",
  },
];

const ApproachSection = () => {
  return (
    <section id="enfoque" className="bg-comunicar-lavender/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-comunicar-blue/20 rounded-full blur-3xl opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Un enfoque cálido, integral y basado en evidencia</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Cada niño es único. Por eso evaluamos de forma individual, definimos objetivos terapéuticos claros y trabajamos en conjunto con la familia y el entorno escolar. Usamos metodologías basadas en evidencia y promovemos el juego como herramienta de desarrollo.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-comunicar-lavender">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://plus.unsplash.com/premium_photo-1701984401462-f1c709ce722e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Niño en terapia"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-comunicar-yellow/30 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-comunicar-pink/30 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;