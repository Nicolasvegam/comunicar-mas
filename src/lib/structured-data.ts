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
      "name": "¿Cuándo consultar a un fonoaudiólogo infantil en Santiago? Señales de alerta en el desarrollo del lenguaje",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consulta con un fonoaudiólogo especialista en desarrollo infantil si tu hijo presenta: no balbucea a los 12 meses, ausencia de primeras palabras a los 18 meses, no combina dos palabras a los 24 meses, dificultades para pronunciar sonidos específicos después de los 3 años, tartamudez persistente, o problemas de comprensión del lenguaje. También si notas regresión en habilidades ya adquiridas. Nuestros fonoaudiólogos especializados en intervención temprana en Providencia realizan evaluaciones integrales del lenguaje, habla, comunicación y deglución, utilizando protocolos estandarizados para diseñar planes de tratamiento personalizados."
      }
    },
    {
      "@type": "Question",
      "name": "Señales tempranas de autismo (TEA): ¿Cómo identificar el espectro autista en niños pequeños?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las señales tempranas del Trastorno del Espectro Autista (TEA) incluyen: no responder consistentemente al nombre llamado (12-18 meses), evitar o tener dificultades con el contacto visual, ausencia de gestos comunicativos como señalar o mostrar objetos (12-15 meses), patrones de juego repetitivos o ritualizados, resistencia marcada a cambios en rutinas, movimientos estereotipados (aleteo de manos, balanceo), hipersensibilidad o hiposensibilidad sensorial, y retrasos o diferencias en el desarrollo de la comunicación social. En Comunicar Más realizamos evaluaciones especializadas para TEA utilizando herramientas gold standard como ADOS-2 y ADI-R, con un equipo multidisciplinario que incluye psicólogos, fonoaudiólogos y terapeutas ocupacionales especializados en autismo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué trata la terapia ocupacional infantil? Beneficios para el desarrollo motor y sensorial",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La terapia ocupacional pediátrica en Comunicar Más trata múltiples áreas del desarrollo: dificultades en motricidad fina (escritura, uso de tijeras, manipulación de objetos), motricidad gruesa (equilibrio, coordinación bilateral), problemas de integración sensorial (hipersensibilidad o hiposensibilidad a texturas, sonidos, movimiento), retrasos en el desarrollo motor, dificultades en actividades de la vida diaria como vestirse, alimentarse o higiene personal, problemas de planificación motora, y alteraciones del procesamiento sensorial frecuentes en niños con TEA, TDAH o síndrome de Down. Utilizamos enfoques basados en evidencia como integración sensorial de Ayres y métodos de neurodesarrollo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es la intervención temprana en Chile y por qué es crucial para el desarrollo infantil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La intervención temprana es un conjunto de servicios terapéuticos especializados dirigidos a bebés y niños de 0 a 6 años que presentan retrasos en el desarrollo, discapacidades o riesgo de presentarlos. Es fundamental porque aprovecha la neuroplasticidad del cerebro infantil durante los primeros años de vida, período crítico donde se logran los mejores resultados terapéuticos. En Comunicar Más, centro especializado en Santiago, ofrecemos intervención temprana multidisciplinaria que incluye fonoaudiología infantil, terapia ocupacional pediátrica y psicología del desarrollo, con un enfoque integral familia-centrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo es la primera evaluación integral en Comunicar Más? Proceso de diagnóstico",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La primera evaluación integral incluye: entrevista semi-estructurada con los padres (anamnesis) para conocer historia del embarazo, parto, desarrollo temprano y preocupaciones actuales; observación clínica del niño en situación de juego libre y dirigido; aplicación de pruebas estandarizadas apropiadas para la edad (Bayley-III, TEPSI, EEDP, según corresponda); evaluación del desarrollo en áreas de comunicación, motricidad, cognición, socialización y autocuidado. Al finalizar, entregamos informe detallado con resultados, diagnóstico diferencial y recomendaciones específicas. El proceso puede requerir 1-3 sesiones dependiendo de la complejidad del caso y la edad del niño."
      }
    },
    {
      "@type": "Question",
      "name": "Ubicación y horarios: ¿Dónde está el centro Comunicar Más en Santiago?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nuestro centro de intervención temprana está estratégicamente ubicado en Holanda 099, piso 9, oficina 904, Providencia, Santiago, con fácil acceso desde metro Manuel Montt y Los Leones. Atendemos familias de toda la Región Metropolitana, especialmente de Las Condes, Providencia, Ñuñoa, Vitacura, La Reina, Santiago Centro y Peñalolén. Contamos con estacionamiento para visitantes y nuestras instalaciones están adaptadas para niños con necesidades especiales. Horarios de atención: lunes a viernes de 8:30 a 18:30 hrs, sábados de 9:00 a 13:00 hrs. Ofrecemos flexibilidad horaria para familias trabajadoras."
      }
    },
    {
      "@type": "Question",
      "name": "¿Atienden con seguro complementario de salud e Isapres? Opciones de financiamiento",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, en Comunicar Más trabajamos con los principales seguros complementarios de salud y ofrecemos reembolso para Isapres (Cruz Blanca, Colmena, Consalud, Banmédica, Vida Tres). Al agendar tu consulta, consulta sobre las opciones específicas de reembolso disponibles para cada especialista. Emitimos boletas de honorarios y todos los documentos necesarios para tu reembolso. También ofrecemos planes de pago flexibles y descuentos por hermanos. Nuestros valores están dentro del rango promedio del mercado para terapias especializadas en Santiago."
      }
    },
    {
      "@type": "Question",
      "name": "Duración y frecuencia de las terapias infantiles: ¿Cuánto tiempo dura el tratamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las sesiones individuales tienen duración de 45 minutos a 1 hora, adaptándose a la edad del niño y tipo de terapia. Para niños menores de 3 años, las sesiones suelen ser de 30-45 minutos para respetar sus tiempos de atención y evitar fatiga. La frecuencia típica es de 1-2 sesiones semanales por disciplina. La duración total del tratamiento varía según objetivos terapéuticos: intervenciones específicas pueden durar 6-12 meses, mientras que condiciones del neurodesarrollo pueden requerir seguimiento de 1-3 años. Realizamos evaluaciones de progreso cada 3 meses para ajustar objetivos y determinar alta terapéutica. Las evaluaciones iniciales pueden extenderse por 60-90 minutos."
      }
    },
    {
      "@type": "Question",
      "name": "Diferencias entre psicología infantil y psicopedagogía: ¿Cuál necesita mi hijo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La psicología infantil se enfoca en el desarrollo emocional, social, conductual y de la personalidad del niño, tratando problemas como ansiedad infantil, trastornos del ánimo, problemas de conducta, dificultades de adaptación, trauma, duelo, y trastornos del neurodesarrollo. La psicopedagogía se especializa específicamente en dificultades de aprendizaje escolar, métodos de estudio, y estrategias pedagógicas. En Comunicar Más, nuestros psicólogos infantiles especializados en desarrollo trabajamos el crecimiento integral del niño con enfoque sistémico familiar, utilizando terapias basadas en evidencia como terapia cognitivo-conductual adaptada para niños y terapia de juego."
      }
    },
    {
      "@type": "Question",
      "name": "Terapias para niños con síndrome de Down: Enfoque multidisciplinario especializado",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, en Comunicar Más tenemos amplia experiencia de más de 10 años trabajando con niños con síndrome de Down y sus familias. Nuestro enfoque multidisciplinario incluye: fonoaudiología especializada para estimulación temprana del lenguaje, tratamiento de hipotonía oral y dificultades alimentarias; terapia ocupacional para desarrollo de motricidad fina, integración sensorial y habilidades de autonomía personal; psicología para apoyo emocional, conductual y desarrollo de habilidades sociales. Trabajamos con protocolos específicos para síndrome de Down, considerando las características típicas del desarrollo y las necesidades individuales de cada niño, siempre en coordinación con el equipo médico tratante."
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