import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Constanza Figueroa",
    role: "Fonoaudióloga",
    experience: "8 años de experiencia",
    specialty: "Especialista en apego y desarrollo emocional temprano.",
    image: "/equipo/constanza.jpeg",
    universityLogo: "/universidades/uc-logo.png",
    bgColor: "bg-white",
  },
  {
    id: 2,
    name: "Fernanda Rojas",
    role: "Terapeuta Ocupacional",
    experience: "10 años de experiencia",
    specialty: "Especialista en trastornos del habla y lenguaje en primera infancia.",
    image: "/equipo/fernanda.jpeg",
    universityLogo: "/universidades/andes-logo.png",
    bgColor: "bg-white",
  },
  {
    id: 3,
    name: "Javiera Leiva",
    role: "Fonoaudióloga",
    experience: "6 años de experiencia",
    specialty: "Especialista en integración sensorial y neurodesarrollo.",
    image: "/equipo/javiera.jpeg",
    universityLogo: "/universidades/uc-logo.png",
    bgColor: "bg-white",
  },
  {
    id: 4,
    name: "Manuela Jordán",
    role: "Psicóloga Infantil",
    experience: "5 años de experiencia",
    specialty: "Especialista en estimulación temprana y desarrollo cognitivo.",
    image: "/equipo/manu.jpeg",
    universityLogo: "/universidades/uc-logo.png",
    bgColor: "bg-white",
  },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-comunicar-blue/20 rounded-full blur-3xl opacity-20 transform -translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Especialistas en el desarrollo infantil</h2>
        <p className="section-subtitle">
          Nuestro equipo de profesionales cuenta con amplia experiencia en el ámbito de la salud infantil
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`text-center rounded-2xl overflow-hidden shadow-lg card-hover ${member.bgColor}`}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-comunicar-lavender font-medium mb-2">{member.role}</p>
                {member.universityLogo && (
                  <div className="flex justify-center mt-4">
                    <img
                      src={member.universityLogo}
                      alt="Universidad"
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;