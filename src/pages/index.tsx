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
import { SEOHead } from "@/components/SEOHead";
import { organizationSchema, localBusinessSchema } from "@/lib/schemas";

const Home = () => {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Centro de Intervención Temprana Comunicar Más",
    "description": "Centro especializado en intervención temprana, terapia ocupacional, fonoaudiología y psicología infantil en Santiago, Chile",
    "url": "https://www.comunicarmas.cl",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Comunicar Más",
      "url": "https://www.comunicarmas.cl"
    },
    "about": organizationSchema,
    "provider": localBusinessSchema
  };

  return (
    <>
      <SEOHead
        title=""
        description="Centro de intervención temprana en Santiago. Especialistas en terapia ocupacional, fonoaudiología y psicología infantil. Atendemos niños de 0-6 años con enfoque interdisciplinario."
        keywords={[
          "intervención temprana",
          "desarrollo infantil", 
          "terapia ocupacional infantil",
          "fonoaudiología niños",
          "psicología infantil",
          "centro desarrollo infantil santiago",
          "TEA autismo chile",
          "comunicar más"
        ]}
        canonicalUrl="https://www.comunicarmas.cl"
        schema={homePageSchema}
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