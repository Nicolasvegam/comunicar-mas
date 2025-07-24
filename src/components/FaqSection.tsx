import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFAQSchema } from "@/lib/schemas";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "¿Qué es la intervención temprana y por qué es importante?",
    answer:
      "La intervención temprana es el conjunto de servicios terapéuticos dirigidos a niños de 0 a 6 años que presentan retrasos en el desarrollo o riesgo de presentarlos. Es fundamental porque aprovecha la neuroplasticidad del cerebro infantil, permitiendo mejores resultados. En Comunicar Más ofrecemos intervención temprana multidisciplinaria con fonoaudiología, terapia ocupacional y psicología infantil.",
  },
  {
    question: "¿Cuándo debo consultar a un fonoaudiólogo infantil?",
    answer:
      "Debes consultar si tu hijo: no balbucea a los 12 meses, no dice sus primeras palabras a los 18 meses, no combina dos palabras a los 2 años, tiene dificultades para pronunciar sonidos, o presenta tartamudez. Nuestros fonoaudiólogos especializados en intervención temprana pueden evaluar y tratar cualquier dificultad del lenguaje y comunicación.",
  },
  {
    question: "¿Qué problemas trata la terapia ocupacional infantil?",
    answer:
      "La terapia ocupacional infantil en Comunicar Más trata: dificultades en la motricidad fina y gruesa, problemas de integración sensorial, retrasos en el desarrollo motor, dificultades en actividades de la vida diaria (vestirse, comer, escribir), problemas de coordinación y equilibrio, y alteraciones en el procesamiento sensorial común en niños con TEA.",
  },
  {
    question: "¿Cómo puedo saber si mi hijo tiene TEA (autismo)?",
    answer:
      "Las señales tempranas del TEA incluyen: no responder al nombre, evitar el contacto visual, no señalar objetos, patrones de juego repetitivos, resistencia a cambios en la rutina, y dificultades en la comunicación social. En Comunicar Más realizamos evaluaciones especializadas para TEA utilizando herramientas estandarizadas y un enfoque multidisciplinario.",
  },
  {
    question: "¿Atienden con reembolso de Isapres?",
    answer:
      "Sí, contamos con profesionales que trabajan con reembolso de Isapres. Al momento de agendar tu cita, consulta sobre las opciones específicas de reembolso disponibles para el especialista asignado. Entregamos todos los documentos necesarios para tu reembolso.",
  },
  {
    question: "¿Dónde está ubicado el centro Comunicar Más?",
    answer:
      "Nuestro centro de intervención temprana está ubicado en Holanda 099, piso 9, oficina 904, Providencia, Santiago. Atendemos familias de toda la Región Metropolitana, incluyendo Las Condes, Ñuñoa, Vitacura y La Reina. Contamos con fácil acceso y estacionamiento.",
  },
  {
    question: "¿Cuál es la diferencia entre psicología infantil y psicopedagogía?",
    answer:
      "La psicología infantil se enfoca en el desarrollo emocional, social y conductual del niño, tratando problemas como ansiedad, miedos, problemas de conducta o adaptación. La psicopedagogía se centra específicamente en dificultades de aprendizaje escolar. En Comunicar Más, nuestros psicólogos infantiles trabajan el desarrollo integral del niño con un enfoque familiar.",
  },
  {
    question: "¿Cómo es la primera evaluación en Comunicar Más?",
    answer:
      "La primera sesión incluye una entrevista con los padres para conocer la historia del desarrollo y preocupaciones, seguida de una observación y evaluación del niño usando herramientas apropiadas para su edad. Al finalizar, entregamos un informe con resultados y recomendaciones. La evaluación puede tomar 1-2 sesiones dependiendo del caso.",
  },
  {
    question: "¿Trabajan con niños con síndrome de Down?",
    answer:
      "Sí, en Comunicar Más tenemos amplia experiencia trabajando con niños con síndrome de Down. Nuestro enfoque multidisciplinario combina fonoaudiología para el desarrollo del lenguaje, terapia ocupacional para habilidades motoras y de autonomía, y psicología para el apoyo emocional y conductual.",
  },
  {
    question: "¿Cuánto duran las sesiones de terapia?",
    answer:
      "Las sesiones regulares tienen una duración de 45 minutos a 1 hora, dependiendo de la edad del niño y el tipo de terapia. Para niños muy pequeños, las sesiones pueden ser más cortas (30-45 minutos) para respetar sus tiempos de atención. Las evaluaciones iniciales pueden requerir más tiempo.",
  },
];

const FaqSection = () => {
  const faqSchema = getFAQSchema(faqs);
  
  return (
    <section id="faq" className="bg-comunicar-lavender/10 relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-comunicar-pink/20 rounded-full blur-3xl opacity-20 transform -translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Preguntas frecuentes sobre intervención temprana</h2>
        
        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left py-4 hover:text-comunicar-lavender font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;