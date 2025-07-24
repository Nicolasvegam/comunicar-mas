import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ApproachSection from "@/components/ApproachSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MobileBookingButton from "@/components/MobileBookingButton";
import SEO from "@/components/SEO";
import { organizationSchema, localBusinessSchema, faqSchema } from "@/lib/structured-data";

const Home = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      faqSchema,
      {
        "@type": "WebPage",
        "name": "Centro de Intervención Temprana Comunicar Más",
        "description": "Centro especializado en fonoaudiología infantil, terapia ocupacional y psicología para niños en Santiago, Chile",
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
        title="Comunicar Más - Centro de Terapias Infantiles en Santiago | Fonoaudiología, Terapia Ocupacional, Psicología"
        description="Centro especializado en fonoaudiología infantil, terapia ocupacional y psicología para niños en Santiago. Evaluaciones integrales y tratamientos personalizados en Providencia. ¡Agenda tu consulta!"
        keywords="fonoaudiología infantil Santiago, terapia ocupacional niños, psicología infantil, centro terapias infantiles Providencia, evaluación del lenguaje, dificultades del habla, retraso del lenguaje, integración sensorial Santiago, apoyo neurodesarrollo, comunicar más"
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
        <MobileBookingButton />
      </div>
    </>
  );
};

export default Home;