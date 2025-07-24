import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Después de unas semanas, mi hijo empezó a comunicarse mejor y ahora va feliz a sus sesiones.",
    author: "Camila, mamá de Tomás (4 años)",
    service: "Fonoaudiología",
  },
  {
    id: 2,
    quote: "La paciencia y dedicación con la que trabajan con mi hija ha sido fundamental para su desarrollo. Hemos visto un gran avance en poco tiempo.",
    author: "Roberto, papá de Antonia (3 años)",
    service: "Terapia Ocupacional",
  },
  {
    id: 3,
    quote: "El enfoque integral ha sido clave para ayudar a mi hijo con sus desafíos emocionales. Toda la familia se ha beneficiado de este acompañamiento.",
    author: "Marcela, mamá de Benjamín (7 años)",
    service: "Psicología Infantil",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (autoplay) {
      timerRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [autoplay, currentIndex]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section id="testimonios" className="bg-comunicar-blue/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-comunicar-yellow/20 rounded-full blur-3xl opacity-20 transform translate-x-1/4 translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Lo que dicen las familias</h2>
        
        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="absolute -top-6 left-8 text-comunicar-lavender">
              <Quote size={48} />
            </div>
            
            <div className="pt-6">
              <p className="text-xl md:text-2xl italic mb-6">
                {testimonials[currentIndex].quote}
              </p>
              
              <div className="flex flex-col">
                <span className="font-bold text-lg">
                  {testimonials[currentIndex].author}
                </span>
                <span className="text-comunicar-blue">
                  {testimonials[currentIndex].service}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-comunicar-lavender/10 transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-comunicar-lavender w-6"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-comunicar-lavender/10 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;