// Datos estructurados para SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HealthcareOrganization",
  "name": "Comunicar Más - Centro de Terapias Infantiles",
  "alternateName": "Comunicar Más",
  "description": "Centro especializado en fonoaudiología infantil, terapia ocupacional y psicología para niños en Santiago, Chile",
  "url": "https://www.comunicarmas.cl",
  "logo": "https://www.comunicarmas.cl/images/logo.png",
  "image": "https://www.comunicarmas.cl/images/centro-comunicar-mas.jpg",
  "telephone": "+56912345678",
  "email": "comunicarmascl@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Holanda 099, piso 9, oficina 904",
    "addressLocality": "Providencia",
    "addressRegion": "Región Metropolitana",
    "postalCode": "7510040",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.4242,
    "longitude": -70.6115
  },
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "areaServed": [
    "Las Condes",
    "Providencia", 
    "Ñuñoa",
    "Vitacura",
    "La Reina",
    "Santiago"
  ],
  "serviceType": [
    "Fonoaudiología Infantil",
    "Terapia Ocupacional",
    "Psicología Infantil",
    "Evaluación del Lenguaje",
    "Integración Sensorial"
  ],
  "medicalSpecialty": [
    "Speech-Language Pathology",
    "Occupational Therapy", 
    "Child Psychology"
  ],
  "sameAs": [
    "https://www.instagram.com/comunicarmas",
    "https://www.facebook.com/comunicarmas"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Comunicar Más",
  "description": "Centro de intervención temprana especializado en terapias infantiles",
  "url": "https://www.comunicarmas.cl",
  "telephone": "+56912345678",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Holanda 099, piso 9, oficina 904",
    "addressLocality": "Providencia",
    "addressRegion": "RM",
    "postalCode": "7510040",
    "addressCountry": "Chile"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.4242,
    "longitude": -70.6115
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿A qué edad mi hijo debería hablar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los hitos del lenguaje varían, pero generalmente: 12 meses - primeras palabras, 18 meses - 10-20 palabras, 2 años - frases de 2 palabras, 3 años - conversaciones simples. Si tienes dudas, una evaluación temprana es recomendable."
      }
    },
    {
      "@type": "Question", 
      "name": "¿Cuándo consultar por terapia ocupacional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consulta si tu hijo tiene dificultades con: coordinación motora, escritura, vestirse, comer, concentración en tareas, hipersensibilidad a texturas o sonidos, o dificultades en el juego."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye una evaluación integral?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestra evaluación incluye: entrevista familiar, observación del niño, pruebas estandarizadas, evaluación del desarrollo motor, lenguaje y cognición, y un informe detallado con recomendaciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura un tratamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La duración varía según cada caso. Generalmente los tratamientos duran entre 6 meses a 2 años, con sesiones semanales. Evaluamos el progreso mensualmente y ajustamos el plan según las necesidades."
      }
    },
    {
      "@type": "Question",
      "name": "¿Atienden con convenios de salud?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trabajamos con los principales seguros de salud y ofrecemos facilidades de pago. Emitimos boletas reembolsables para isapres. Consulta por tu convenio específico."
      }
    }
  ]
};

export const serviceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "HealthcareOrganization",
    "name": "Comunicar Más"
  },
  "areaServed": {
    "@type": "City",
    "name": "Santiago",
    "containedInPlace": {
      "@type": "Country",
      "name": "Chile"
    }
  }
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});