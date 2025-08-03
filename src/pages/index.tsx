import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ApproachSection from "@/components/ApproachSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FaqSection, { faqs } from "@/components/FaqSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { organizationSchema, localBusinessSchema } from "@/lib/structured-data";
import { getFAQSchema } from "@/lib/schemas";

const Home = () => {
  const faqSchema = getFAQSchema(faqs);
  
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      faqSchema,
      {
        "@type": "WebPage",
        "name": "Espacio de Intervención Temprana Comunicar Más",
        "description": "Espacio especializado en fonoaudiología infantil, terapia ocupacional y psicología para niños en Santiago, Chile",
        "url": "https://www.comunicarmas.cl",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Comunicar Más",
          "url": "https://www.comunicarmas.cl"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="Comunicar Más - Espacio de Terapias Infantiles en Santiago | Fonoaudiología, Terapia Ocupacional, Psicología"
        description="Espacio especializado en fonoaudiología infantil, terapia ocupacional y psicología para niños en Santiago. Evaluaciones integrales y tratamientos personalizados en Providencia. ¡Agenda tu consulta!"
        keywords="fonoaudiología infantil Santiago, terapia ocupacional niños, psicología infantil, espacio terapias infantiles Providencia, evaluación del lenguaje, dificultades del habla, retraso del lenguaje, integración sensorial Santiago, apoyo neurodesarrollo, comunicar más"
        url="https://www.comunicarmas.cl"
        structuredData={combinedSchema}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <SpecialtiesSection />
          <ApproachSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;