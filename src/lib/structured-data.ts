// Datos estructurados para SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "HealthcareOrganization",
  "name": "Comunicar Más - Espacio de Terapias Infantiles",
  "alternateName": "Comunicar Más",
  "description": "Espacio especializado en fonoaudiología infantil, terapia ocupacional y psicología para niños en Santiago, Chile",
  "url": "https://www.comunicarmas.cl",
  "logo": "https://www.comunicarmas.cl/images/logo.png",
  "image": "https://www.comunicarmas.cl/images/espacio-comunicar-mas.jpg",
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
  "openingHours": "Mo-Fr 08:00-19:00, Sa 09:00-13:00",
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
  "description": "Espacio de intervención temprana especializado en terapias infantiles",
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
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
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