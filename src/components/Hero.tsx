import React from "react";
import { ArrowDown, Calendar } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-comunicar-lavender/40 to-comunicar-blue/40"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-comunicar-yellow/30 rounded-full blur-2xl opacity-30 transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-comunicar-pink/30 rounded-full blur-2xl opacity-30 transform -translate-x-1/4 -translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
          Espacio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d4e93] to-[#7c5bad] font-extrabold">Terapias Infantiles</span> Santiago
          </h1>
          <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
            Fonoaudiología, Terapia Ocupacional y Psicología Infantil
          </h2>
          <p className="mt-6 text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
            Especialistas en <strong>fonoaudiología infantil</strong>, <strong>terapia ocupacional pediátrica</strong> y 
            <strong> psicología infantil en Santiago</strong>. Evaluaciones integrales y tratamientos personalizados para el desarrollo de tu hijo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-4 py-2  text-indigo-800 rounded-full text-sm font-medium">
              TEA/Autismo
            </span>
            <span className="px-4 py-2  text-green-800 rounded-full text-sm font-medium">
              Retraso del Lenguaje
            </span>
            <span className="px-4 py-2  text-amber-800 rounded-full text-sm font-medium">
              Integración Sensorial
            </span>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#agendar"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Calendar size={20} />
              Agendar Cita
            </a>
            <a
              href="#especialidades"
              className="flex items-center gap-2 font-medium hover:text-comunicar-lavender transition-colors mt-4 sm:mt-0"
            >
              Ver nuestras especialidades
              <ArrowDown size={18} />
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative z-10 animate-float">
            <Image
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=100"
              alt="Espacio de terapias infantiles Santiago - Fonoaudiología, terapia ocupacional y psicología para niños"
              className="rounded-2xl shadow-xl object-cover h-[500px] max-w-full"
              loading="eager"
              width={1000}
              height={1000}
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-comunicar-yellow/30 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-comunicar-blue/30 rounded-full blur-2xl opacity-30"></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#especialidades" className="text-comunicar-lavender" aria-label="Ver especialidades">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;