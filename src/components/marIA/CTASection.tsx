// src/components/maria/sections/CTASection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('demo');
  const [message, setMessage] = useState('');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log('Form submitted:', { email, interest, message });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
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
            className="h-1 bg-gradient-to-r from-[#0E7E92] via-[#4DD0E1] to-[#0E7E92] mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Elige cómo quieres comenzar tu viaje con MarIA. Estamos aquí para guiarte en cada paso.
          </motion.p>
        </div>

        {/* OPCIONES DE ACCIÓN - DISEÑO MEJORADO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 90 
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative cursor-pointer"
              onClick={() => setInterest(option.id)}
            >
              {/* FONDO CON EFECTO DE LUZ */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${option.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-500 ${
                interest === option.id ? 'opacity-20' : ''
              }`}></div>
              
              {/* CARD PRINCIPAL */}
              <div className={`relative h-full rounded-2xl p-7 bg-gradient-to-br ${option.color} overflow-hidden border-2 ${
                interest === option.id 
                  ? 'border-white/50 ring-4 ring-white/20' 
                  : 'border-white/30 group-hover:border-white/40'
              } transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                
                {/* PATRÓN DE FONDO SUTIL */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-16 -translate-x-16"></div>
                </div>
                
                {/* EFECTO DE RESPLANDOR ACTIVO */}
                {interest === option.id && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 animate-pulse-slow"></div>
                )}
                
                <div className="relative z-10 space-y-6">
                  {/* ÍCONO */}
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  
                  {/* CONTENIDO */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {option.title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                  
                  {/* BOTÓN */}
                  <div className={`px-6 py-3.5 bg-white rounded-full font-medium text-lg text-center transition-all duration-300 ${
                    interest === option.id 
                      ? 'scale-105 shadow-lg shadow-white/20' 
                      : 'group-hover:shadow-lg group-hover:shadow-white/10'
                  }`}>
                    <span className="bg-gradient-to-r from-[#0E7E92] to-[#00838F] bg-clip-text text-transparent font-semibold">
                      {option.buttonText}
                    </span>
                  </div>
                </div>
                
                {/* INDICADOR DE SELECCIÓN */}
                {interest === option.id && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 rounded-full bg-white animate-ping"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FORMULARIO DE CONTACTO - DISEÑO MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative group">
            {/* FONDO CON EFECTO */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0E7E92]/20 via-[#4DD0E1]/10 to-[#0E7E92]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
            
            {/* CARD DEL FORMULARIO */}
            <div className="relative bg-gradient-to-br from-white to-gray-50/90 rounded-2xl p-8 border-2 border-gray-200/80 group-hover:border-[#0E7E92]/30 transition-all duration-300 shadow-xl group-hover:shadow-2xl overflow-hidden">
              
              {/* EFECTO DE LÍNEA SUPERIOR */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E7E92] via-[#4DD0E1] to-[#0E7E92]"></div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-light text-[#1C1B3E] mb-3">
                  Déjanos tus datos
                </h3>
                <p className="text-gray-600 text-lg">
                  Un especialista se pondrá en contacto contigo en menos de 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* CAMPO EMAIL */}
                <div className="group/field">
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Correo electrónico *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      required
                      className="w-full px-5 py-3.5 text-lg rounded-xl border-2 border-gray-300/80 focus:border-[#0E7E92] focus:ring-4 focus:ring-[#0E7E92]/10 outline-none transition-all bg-white/80 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* CAMPO INTERÉS */}
                <div className="group/field">
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Interés principal
                  </label>
                  <div className="relative">
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-5 py-3.5 text-lg rounded-xl border-2 border-gray-300/80 focus:border-[#0E7E92] focus:ring-4 focus:ring-[#0E7E92]/10 outline-none transition-all bg-white/80 appearance-none"
                    >
                      {ctaOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.title}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <span className="text-gray-600">▼</span>
                    </div>
                  </div>
                </div>

                {/* CAMPO MENSAJE */}
                <div className="group/field">
                  <label className="block text-base font-medium text-gray-700 mb-3">
                    Mensaje adicional (opcional)
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntanos más sobre tus necesidades o preguntas..."
                    rows={4}
                    className="w-full px-5 py-3.5 text-lg rounded-xl border-2 border-gray-300/80 focus:border-[#0E7E92] focus:ring-4 focus:ring-[#0E7E92]/10 outline-none transition-all bg-white/80 placeholder-gray-400 resize-none"
                  />
                </div>

                {/* BOTÓN DE ENVÍO */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group/button overflow-hidden"
                >
                  {/* FONDO DEL BOTÓN */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0E7E92] to-[#00838F] rounded-xl"></div>
                  
                  {/* EFECTO DE LUZ EN HOVER */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700"></div>
                  
                  {/* TEXTO DEL BOTÓN */}
                  <div className="relative py-4 rounded-xl font-semibold text-xl text-white shadow-lg group-hover/button:shadow-xl transition-shadow">
                    Enviar Solicitud
                  </div>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;