import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFAQSchema } from "@/lib/schemas";

const faqs = [
  {
    question: "¿Cuándo consultar a un fonoaudiólogo infantil en Santiago? Señales de alerta en el desarrollo del lenguaje",
    answer:
      "Consulta con un fonoaudiólogo especialista en desarrollo infantil si tu hijo presenta: no balbucea a los 12 meses, ausencia de primeras palabras a los 18 meses, no combina dos palabras a los 24 meses, dificultades para pronunciar sonidos específicos después de los 3 años, tartamudez persistente, o problemas de comprensión del lenguaje. También si notas regresión en habilidades ya adquiridas. Nuestros fonoaudiólogos especializados en intervención temprana en Providencia realizan evaluaciones integrales del lenguaje, habla, comunicación y deglución, utilizando protocolos estandarizados para diseñar planes de tratamiento personalizados.",
  },
  {
    question: "Señales tempranas de autismo (TEA): ¿Cómo identificar el espectro autista en niños pequeños?",
    answer:
      "Las señales tempranas del Trastorno del Espectro Autista (TEA) incluyen: no responder consistentemente al nombre llamado (12-18 meses), evitar o tener dificultades con el contacto visual, ausencia de gestos comunicativos como señalar o mostrar objetos (12-15 meses), patrones de juego repetitivos o ritualizados, resistencia marcada a cambios en rutinas, movimientos estereotipados (aleteo de manos, balanceo), hipersensibilidad o hiposensibilidad sensorial, y retrasos o diferencias en el desarrollo de la comunicación social. En Comunicar Más realizamos evaluaciones especializadas para TEA utilizando herramientas gold standard como ADOS-2 y ADI-R, con un equipo multidisciplinario que incluye psicólogos, fonoaudiólogos y terapeutas ocupacionales especializados en autismo.",
  },
  {
    question: "¿Qué trata la terapia ocupacional infantil? Beneficios para el desarrollo motor y sensorial",
    answer:
      "La terapia ocupacional pediátrica en Comunicar Más trata múltiples áreas del desarrollo: dificultades en motricidad fina (escritura, uso de tijeras, manipulación de objetos), motricidad gruesa (equilibrio, coordinación bilateral), problemas de integración sensorial (hipersensibilidad o hiposensibilidad a texturas, sonidos, movimiento), retrasos en el desarrollo motor, dificultades en actividades de la vida diaria como vestirse, alimentarse o higiene personal, problemas de planificación motora, y alteraciones del procesamiento sensorial frecuentes en niños con TEA, TDAH o síndrome de Down. Utilizamos enfoques basados en evidencia como integración sensorial de Ayres y métodos de neurodesarrollo.",
  },
  {
    question: "¿Qué es la intervención temprana en Chile y por qué es crucial para el desarrollo infantil?",
    answer:
      "La intervención temprana es un conjunto de servicios terapéuticos especializados dirigidos a bebés y niños de 0 a 6 años que presentan retrasos en el desarrollo, discapacidades o riesgo de presentarlos. Es fundamental porque aprovecha la neuroplasticidad del cerebro infantil durante los primeros años de vida, período crítico donde se logran los mejores resultados terapéuticos. En Comunicar Más, centro especializado en Santiago, ofrecemos intervención temprana multidisciplinaria que incluye fonoaudiología infantil, terapia ocupacional pediátrica y psicología del desarrollo, con un enfoque integral familia-centrado.",
  },
  {
    question: "¿Cómo es la primera evaluación integral en Comunicar Más? Proceso de diagnóstico",
    answer:
      "La primera evaluación integral incluye: entrevista semi-estructurada con los padres (anamnesis) para conocer historia del embarazo, parto, desarrollo temprano y preocupaciones actuales; observación clínica del niño en situación de juego libre y dirigido; aplicación de pruebas estandarizadas apropiadas para la edad (Bayley-III, TEPSI, EEDP, según corresponda); evaluación del desarrollo en áreas de comunicación, motricidad, cognición, socialización y autocuidado. Al finalizar, entregamos informe detallado con resultados, diagnóstico diferencial y recomendaciones específicas. El proceso puede requerir 1-3 sesiones dependiendo de la complejidad del caso y la edad del niño.",
  },
  {
    question: "Ubicación y horarios: ¿Dónde está el centro Comunicar Más en Santiago?",
    answer:
      "Nuestro centro de intervención temprana está estratégicamente ubicado en Holanda 099, piso 9, oficina 904, Providencia, Santiago, con fácil acceso desde metro Manuel Montt y Los Leones. Atendemos familias de toda la Región Metropolitana, especialmente de Las Condes, Providencia, Ñuñoa, Vitacura, La Reina, Santiago Centro y Peñalolén. Contamos con estacionamiento para visitantes y nuestras instalaciones están adaptadas para niños con necesidades especiales. Horarios de atención: lunes a viernes de 8:30 a 18:30 hrs, sábados de 9:00 a 13:00 hrs. Ofrecemos flexibilidad horaria para familias trabajadoras.",
  },
  {
    question: "¿Atienden con seguro complementario de salud e Isapres? Opciones de financiamiento",
    answer:
      "Sí, en Comunicar Más trabajamos con los principales seguros complementarios de salud y ofrecemos reembolso para Isapres (Cruz Blanca, Colmena, Consalud, Banmédica, Vida Tres). Al agendar tu consulta, consulta sobre las opciones específicas de reembolso disponibles para cada especialista. Emitimos boletas de honorarios y todos los documentos necesarios para tu reembolso. También ofrecemos planes de pago flexibles y descuentos por hermanos. Nuestros valores están dentro del rango promedio del mercado para terapias especializadas en Santiago.",
  },
  {
    question: "Duración y frecuencia de las terapias infantiles: ¿Cuánto tiempo dura el tratamiento?",
    answer:
      "Las sesiones individuales tienen duración de 45 minutos a 1 hora, adaptándose a la edad del niño y tipo de terapia. Para niños menores de 3 años, las sesiones suelen ser de 30-45 minutos para respetar sus tiempos de atención y evitar fatiga. La frecuencia típica es de 1-2 sesiones semanales por disciplina. La duración total del tratamiento varía según objetivos terapéuticos: intervenciones específicas pueden durar 6-12 meses, mientras que condiciones del neurodesarrollo pueden requerir seguimiento de 1-3 años. Realizamos evaluaciones de progreso cada 3 meses para ajustar objetivos y determinar alta terapéutica. Las evaluaciones iniciales pueden extenderse por 60-90 minutos.",
  },
  {
    question: "Diferencias entre psicología infantil y psicopedagogía: ¿Cuál necesita mi hijo?",
    answer:
      "La psicología infantil se enfoca en el desarrollo emocional, social, conductual y de la personalidad del niño, tratando problemas como ansiedad infantil, trastornos del ánimo, problemas de conducta, dificultades de adaptación, trauma, duelo, y trastornos del neurodesarrollo. La psicopedagogía se especializa específicamente en dificultades de aprendizaje escolar, métodos de estudio, y estrategias pedagógicas. En Comunicar Más, nuestros psicólogos infantiles especializados en desarrollo trabajamos el crecimiento integral del niño con enfoque sistémico familiar, utilizando terapias basadas en evidencia como terapia cognitivo-conductual adaptada para niños y terapia de juego.",
  },
  {
    question: "Terapias para niños con síndrome de Down: Enfoque multidisciplinario especializado",
    answer:
      "Sí, en Comunicar Más tenemos amplia experiencia de más de 10 años trabajando con niños con síndrome de Down y sus familias. Nuestro enfoque multidisciplinario incluye: fonoaudiología especializada para estimulación temprana del lenguaje, tratamiento de hipotonía oral y dificultades alimentarias; terapia ocupacional para desarrollo de motricidad fina, integración sensorial y habilidades de autonomía personal; psicología para apoyo emocional, conductual y desarrollo de habilidades sociales. Trabajamos con protocolos específicos para síndrome de Down, considerando las características típicas del desarrollo y las necesidades individuales de cada niño, siempre en coordinación con el equipo médico tratante.",
  },
];

const FaqSection = () => {
  const faqSchema = getFAQSchema(faqs);
  
  return (
    <>
      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <section 
        id="faq" 
        className="bg-comunicar-lavender/10 relative overflow-hidden py-16 lg:py-24"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-comunicar-pink/20 rounded-full blur-3xl opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <header className="text-center mb-12">
            <h2 className="section-title">
              Preguntas frecuentes sobre intervención temprana
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Resolvemos las dudas más comunes sobre terapias infantiles, desarrollo del lenguaje, 
              terapia ocupacional y evaluaciones especializadas en Santiago, Chile.
            </p>
          </header>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-gray-200 rounded-lg bg-white shadow-sm"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <AccordionTrigger 
                    className="text-left px-6 py-5 hover:text-comunicar-lavender font-semibold text-lg group"
                    itemProp="name"
                  >
                    <span className="pr-4 group-hover:text-comunicar-purple transition-colors">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="px-6 pb-6 text-gray-700 leading-relaxed"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text" className="prose prose-gray max-w-none">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              ¿No encuentras la respuesta que buscas?
            </p>
            <a 
              href="#contacto"
              className="inline-flex items-center px-6 py-3 bg-comunicar-purple text-white font-semibold rounded-lg hover:bg-comunicar-purple/90 transition-colors"
            >
              Contacta con nuestros especialistas
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;