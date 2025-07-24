import React from "react";
import { MessageSquare, Activity, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const specialties = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Fonoaudiología",
    description:
      "Desarrollo del lenguaje, habla y deglución. Ayudamos a mejorar la comunicación y expresión de tu hijo.",
    bgColor: "bg-white",
    iconColor: "text-comunicar-blue font-bold", // Added font-bold
  },
  {
    id: 2,
    icon: Activity,
    title: "Terapia Ocupacional",
    description:
      "Motricidad, integración sensorial y autonomía. Potenciamos las habilidades físicas y la independencia.",
    bgColor: "bg-white",
    iconColor: "text-comunicar-lavender font-bold", // Added font-bold
  },
  {
    id: 3,
    icon: Brain,
    title: "Psicología Infantil",
    description:
      "Regulación emocional, conducta y acompañamiento familiar. Cuidamos la salud mental y el desarrollo emocional.",
    bgColor: "bg-white",
    iconColor: "text-comunicar-yellow font-bold", // Added font-bold
  },
];

const SpecialtyCard = ({
  icon: Icon,
  title,
  description,
  bgColor,
  iconColor,
  index,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 shadow-lg card-hover",
        bgColor,
        "transition-all duration-300"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center mb-4",
          iconColor,
          "bg-white"
        )}
      >
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-comunicar-lavender rounded-full blur-3xl opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-gray-800">Especialidades para cada etapa del desarrollo</h2>
        <p className="section-subtitle">
          Nuestro equipo atiende de forma personalizada y coordinada las siguientes áreas:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCard key={specialty.id} {...specialty} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;