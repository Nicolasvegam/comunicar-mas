// Schema.org structured data for Comunicar Más

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Comunicar Más",
  "alternateName": "Centro de Intervención Temprana Comunicar Más",
  "description": "Centro especializado en intervención temprana, terapia ocupacional, fonoaudiología y psicología infantil en Santiago, Chile. Atendemos niños de 0 a 6 años y sus familias.",
  "url": "https://www.comunicarmas.cl",
  "logo": "https://www.comunicarmas.cl/logo.png",
  "image": "https://www.comunicarmas.cl/centro-comunicar-mas.jpg",
  "telephone": "+56 9 1234 5678",
  "email": "comunicarmascl@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Holanda 099, piso 9, oficina 904",
    "addressLocality": "Providencia",
    "addressRegion": "Región Metropolitana",
    "addressCountry": "CL",
    "postalCode": "7510040"
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
    }
  ],
  "medicalSpecialty": [
    {
      "@type": "MedicalSpecialty",
      "name": "Terapia Ocupacional Infantil"
    },
    {
      "@type": "MedicalSpecialty",
      "name": "Fonoaudiología"
    },
    {
      "@type": "MedicalSpecialty",
      "name": "Psicología Infantil"
    },
    {
      "@type": "MedicalSpecialty",
      "name": "Intervención Temprana TEA"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Intervención Temprana",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Terapia Ocupacional Infantil",
          "description": "Evaluación y tratamiento de problemas de motricidad fina, integración sensorial y desarrollo motor en niños.",
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.comunicarmas.cl/contacto#agendar"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Fonoaudiología",
          "description": "Evaluación y tratamiento de trastornos del lenguaje, habla y comunicación en niños.",
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.comunicarmas.cl/contacto#agendar"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Psicología Infantil",
          "description": "Evaluación y tratamiento psicológico para niños y familias, enfocado en desarrollo emocional y conductual.",
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.comunicarmas.cl/contacto#agendar"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Evaluación y Diagnóstico TEA",
          "description": "Evaluación especializada para Trastorno del Espectro Autista utilizando herramientas estandarizadas.",
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.comunicarmas.cl/contacto#agendar"
            }
          }
        }
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/comunicarmas",
    "https://www.instagram.com/comunicarmas",
    "https://www.linkedin.com/company/comunicarmas"
  ]
};

// Local Business Schema for Google My Business
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Comunicar Más",
  "image": "https://www.comunicarmas.cl/centro-comunicar-mas.jpg",
  "telephone": "+56 9 1234 5678",
  "email": "comunicarmascl@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Holanda 099, piso 9, oficina 904",
    "addressLocality": "Providencia",
    "addressRegion": "RM",
    "postalCode": "7510040",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.4242,
    "longitude": -70.6115
  },
  "url": "https://www.comunicarmas.cl",
  "openingHours": "Mo-Fr 09:00-18:00",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
};

// FAQPage Schema
export const getFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// BreadcrumbList Schema
export const getBreadcrumbSchema = (items: Array<{name: string, item: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
});

// Service Page Schema
export const getServicePageSchema = (service: {
  name: string;
  description: string;
  provider: string;
  areaServed: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.name,
  "provider": {
    "@type": "MedicalOrganization",
    "name": service.provider
  },
  "areaServed": service.areaServed.map(area => ({
    "@type": "Place",
    "name": area
  })),
  "description": service.description,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `Servicios de ${service.name}`,
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }
    ]
  }
});

// Article Schema for Blog Posts
export const getArticleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.description,
  "author": {
    "@type": "Organization",
    "name": article.author
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified,
  "publisher": {
    "@type": "Organization",
    "name": "Comunicar Más",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.comunicarmas.cl/logo.png"
    }
  },
  "image": article.image,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});