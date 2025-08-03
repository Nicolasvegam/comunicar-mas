import React, { useState } from "react";
import { MapPin, Clock, Mail, Calendar } from "lucide-react";


const ContactItem = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white p-3 rounded-lg shadow-md text-comunicar-lavender">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-medium text-lg text-gray-800">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al enviar el correo');
      }

      setSubmitStatus({
        type: 'success',
        message: '¡Gracias! Hemos recibido tu consulta y te contactaremos pronto.'
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar tu consulta. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="bg-white p-6 rounded-2xl shadow-lg" onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-6 text-center text-gray-800" id="agendar">Agenda tu primera consulta</h3>
      
      {submitStatus.message && (
        <div className={`mb-4 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {submitStatus.message}
        </div>
      )}
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">
              Teléfono (opcional)
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
              placeholder="Tu número de teléfono"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
            placeholder="tu@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-1 text-gray-700">
            Servicio
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
          >
            <option value="">Selecciona un servicio</option>
            <option value="Fonoaudiología">Fonoaudiología</option>
            <option value="Terapia Ocupacional">Terapia Ocupacional</option>
            <option value="Psicología Infantil">Psicología Infantil</option>
            <option value="Evaluación General">Evaluación General</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
            Mensaje (opcional)
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-comunicar-lavender focus:border-comunicar-lavender transition-colors"
            placeholder="Cuéntanos brevemente sobre tu hijo/a"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Calendar size={18} />
          {isSubmitting ? 'Enviando...' : 'Agendar ahora'}
        </button>
      </div>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-comunicar-lavender/20 rounded-full blur-3xl opacity-20 transform translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Visítanos en Providencia, Santiago</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Centro de Intervención Temprana Comunicar Más
              </h3>
              <div className="space-y-6">
                <ContactItem icon={MapPin} title="Dirección">
                  <address className="not-italic">
                    Holanda 099, piso 9, oficina 904<br />
                    Providencia, Santiago<br />
                    Región Metropolitana, Chile
                  </address>
                </ContactItem>
                
                <ContactItem icon={Clock} title="Horario de atención">
                  <p>Lunes a viernes: 8:00 - 19:00 hrs</p>
                  <p className="text-sm mt-1">Sábados: 9:00 - 13:00 hrs</p>
                </ContactItem>
                
                
                <ContactItem icon={Mail} title="Email">
                  <a 
                    href="mailto:comunicarmascl@gmail.com" 
                    className="text-comunicar-lavender hover:underline"
                  >
                    comunicarmascl@gmail.com
                  </a>
                </ContactItem>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Recibimos pacientes de:</strong> Las Condes, Providencia, 
                  Ñuñoa, Vitacura, La Reina y toda la Región Metropolitana
                </p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6089!2d-70.6115!3d-33.4242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf0c9e9df5af%3A0xace21c3ec592418f!2sHolanda%20099%2C%207510040%20Providencia%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1681739456304!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Centro Comunicar Más - Holanda 099, Providencia"
                aria-label="Ubicación de Comunicar Más en Google Maps"
              ></iframe>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;