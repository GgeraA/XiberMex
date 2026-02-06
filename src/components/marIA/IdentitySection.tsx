// src/components/maria/sections/IdentitySection.tsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const IdentitySection = () => {
  const [activeAvatar, setActiveAvatar] = useState(0);
  const avatars = ['🌱', '📚', '🎨', '🤝'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAvatar((prev) => (prev + 1) % avatars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="identidad" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#1C1B3E] mb-4"
          >
            ¿Quién es <span className="text-[#0E7E92]">MarIA</span>?
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-px bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1] mx-auto mb-8"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA - AVATAR Y ESENCIA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* AVATAR INTERACTIVO */}
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                {/* CÍRCULO DE FONDO */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0E7E92] to-[#00838F]"></div>
                
                {/* AVATAR ANIMADO */}
                <motion.div 
                  key={activeAvatar}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="text-7xl">{avatars[activeAvatar]}</span>
                </motion.div>
                
                {/* ANILLOS CONCÉNTRICOS */}
                <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
                <div className="absolute inset-8 rounded-full border-2 border-white/20"></div>
              </div>

              {/* INDICADORES DE AVATAR */}
              <div className="flex space-x-3">
                {avatars.map((avatar, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveAvatar(index)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${
                      activeAvatar === index 
                        ? 'bg-[#0E7E92] text-white scale-110' 
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>

            {/* ETIQUETA INSPIRACIÓN */}
            <div className="text-center">
              <span className="text-sm font-medium text-gray-500 tracking-wider">
                INSPIRADA EN LA MUÑECA TRADICIONAL
              </span>
              <p className="text-lg font-semibold text-[#1C1B3E] mt-1">
                Lele
              </p>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA - CONTENIDO */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* FRASE DE IMPACTO */}
            <blockquote className="border-l-4 border-[#0E7E92] pl-6 py-2">
              <p className="text-2xl font-light text-[#1C1B3E] italic">
                "MarIA es mucho más que una inteligencia artificial: es una compañera de infancia"
              </p>
            </blockquote>

            {/* DESCRIPCIÓN PRINCIPAL */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Diseñada primordialmente para niños, MarIA interactúa de manera natural, empática 
                y culturalmente relevante, despertando la curiosidad y el deseo de aprender.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Su arquitectura combina procesamiento de lenguaje natural, aprendizaje automático 
                y una <span className="font-medium text-[#0E7E92]">identidad profundamente mexicana</span> 
                que la convierte en un puente entre tradición y futuro.
              </p>
            </div>

            {/* VALORES DIFERENCIADORES */}
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-[#1C1B3E] mb-4">
                Lo que hace diferente a MarIA:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Educa con valores universales',
                  'Incorpora expresiones locales',
                  'Inspira creatividad y seguridad',
                  'Transmite consciencia cultural'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 bg-[#4DD0E1] rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* MISIÓN */}
            <div className="bg-gradient-to-r from-[#0E7E92]/5 to-[#4DD0E1]/5 rounded-xl p-6 mt-6">
              <h4 className="text-lg font-medium text-[#1C1B3E] mb-2">Su misión</h4>
              <p className="text-gray-700">
                Formar niños seguros, creativos y conscientes de su cultura, ofreciendo experiencias 
                enriquecedoras que transforman cada conversación en una oportunidad para crecer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;