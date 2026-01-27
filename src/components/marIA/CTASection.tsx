// src/components/maria/sections/CTASection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('demo');

  const ctaOptions = [
    {
      id: 'demo',
      title: 'Solicitar Demostración',
      description: 'Agenda una sesión personalizada para ver a MarIA en acción.',
      icon: '🎬',
      buttonText: 'Agendar Demo',
      color: 'from-[#0E7E92] to-[#00838F]'
    },
    {
      id: 'licenciamiento',
      title: 'Licenciamiento Escolar',
      description: 'Implementa MarIA en tu institución educativa.',
      icon: '🏫',
      buttonText: 'Contactar Ventas',
      color: 'from-[#1C1B3E] to-[#0E7E92]'
    },
    {
      id: 'whitepaper',
      title: 'Descargar Whitepaper',
      description: 'Accede al documento completo con especificaciones técnicas y estudios de caso.',
      icon: '📄',
      buttonText: 'Descargar PDF',
      color: 'from-[#4DD0E1] to-[#0E7E92]'
    }
  ];

  const socialNetworks = [
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'bg-blue-600' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'bg-sky-500' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'bg-pink-600' },
    { name: 'YouTube', icon: '🎥', url: '#', color: 'bg-red-600' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log('Form submitted:', { email, interest });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#1C1B3E] mb-4"
          >
            ¿Listo para <span className="text-[#0E7E92]">Transformar</span> la Educación?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '120px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-px bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1] mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Elige cómo quieres comenzar tu viaje con MarIA. Estamos aquí para guiarte en cada paso.
          </motion.p>
        </div>

        {/* OPCIONES DE ACCIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ctaOptions.map((option) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: option.id === 'demo' ? 0.1 : option.id === 'licenciamiento' ? 0.2 : 0.3 }}
              className={`relative overflow-hidden rounded-2xl p-8 text-white bg-gradient-to-br ${option.color} cursor-pointer transition-transform hover:scale-[1.02] ${
                interest === option.id ? 'ring-4 ring-white/30' : ''
              }`}
              onClick={() => setInterest(option.id)}
            >
              {/* PATRÓN DE FONDO */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-6">{option.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                <p className="text-white/90 mb-8">{option.description}</p>
                <div className={`px-6 py-3 bg-white text-[#0E7E92] rounded-full font-medium text-center ${
                  interest === option.id ? 'animate-pulse' : ''
                }`}>
                  {option.buttonText}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FORMULARIO DE CONTACTO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-light text-[#1C1B3E] mb-2 text-center">
              Déjanos tus datos
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Un especialista se pondrá en contacto contigo en menos de 24 horas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0E7E92] focus:ring-2 focus:ring-[#0E7E92]/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interés principal
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0E7E92] focus:ring-2 focus:ring-[#0E7E92]/20 outline-none transition-all"
                >
                  {ctaOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje adicional (opcional)
                </label>
                <textarea
                  placeholder="Cuéntanos más sobre tus necesidades o preguntas..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0E7E92] focus:ring-2 focus:ring-[#0E7E92]/20 outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-[#0E7E92] to-[#00838F] text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Enviar Solicitud
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* REDES SOCIALES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-100 text-center"
        >
          <h4 className="text-lg font-medium text-[#1C1B3E] mb-6">
            Síguenos en redes sociales
          </h4>
          
          <div className="flex justify-center space-x-4 mb-8">
            {socialNetworks.map((network) => (
              <motion.a
                key={network.name}
                href={network.url}
                whileHover={{ y: -5 }}
                className={`w-12 h-12 ${network.color} rounded-full flex items-center justify-center text-white`}
              >
                <span className="text-xl">{network.icon}</span>
              </motion.a>
            ))}
          </div>

          <p className="text-gray-600">
            Un proyecto de{' '}
            <span className="font-semibold text-[#1C1B3E]">XIBERMEX</span>
            {' • '}
            <span className="text-[#AAB7C4]">Estrategias Tecnológicas</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;