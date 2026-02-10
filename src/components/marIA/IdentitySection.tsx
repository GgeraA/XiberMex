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
            className="space-y-10 lg:space-y-12" // Aumenté el espaciado
          >
            {/* CONTENEDOR PRINCIPAL CON MÁS PRESENCIA */}
            <div className="flex flex-col items-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 shadow-xl border border-gray-100">

              {/* AVATAR INTERACTIVO - TAMAÑO AUMENTADO */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 mb-8"> {/* Más grande */}
                  {/* CÍRCULO DE FONDO CON EFECTO DE PROFUNDIDAD */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0E7E92] via-[#00838F] to-[#0E7E92] opacity-90"
                  />

                  {/* ANILLOS CONCÉNTRICOS CON ANIMACIÓN */}
                  <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-pulse-slow"></div>
                  <div className="absolute inset-6 rounded-full border-3 border-white/30"></div>

                  {/* AVATAR ANIMADO - MÁS GRANDE */}
                  <motion.div
                    key={activeAvatar}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: 1
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      duration: 0.5
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <span className="text-8xl lg:text-9xl">{avatars[activeAvatar]}</span>
                  </motion.div>

                  {/* EFECTO DE RESPLANDOR */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                {/* INDICADORES DE AVATAR - MEJORADOS */}
                <div className="flex space-x-4">
                  {avatars.map((avatar, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveAvatar(index)}
                      className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-xl lg:text-2xl transition-all duration-300 ${activeAvatar === index
                          ? 'bg-gradient-to-br from-[#0E7E92] to-[#00838F] text-white shadow-lg shadow-[#0E7E92]/30'
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700'
                        }`}
                    >
                      {avatar}
                      {/* INDICADOR ACTIVO */}
                      {activeAvatar === index && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute -bottom-1 w-2 h-2 rounded-full bg-[#0E7E92]"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* ETIQUETA INSPIRACIÓN - MÁS DESTACADA */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-5 lg:p-6 border border-gray-200/50 shadow-sm"
              >
                <span className="text-xs lg:text-sm font-semibold text-gray-600 tracking-widest uppercase">
                  Inspirada en la muñeca tradicional
                </span>
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-[#1C1B3E] mt-2"
                  whileHover={{ scale: 1.05 }}
                >
                  Una muñeca mexciana
                  <span className="text-lg lg:text-xl text-[#0E7E92] ml-2">✨</span>
                </motion.h3>
                <p className="text-sm lg:text-base text-gray-500 mt-3 max-w-xs">
                  Representación digital de arte tradicional
                </p>
              </motion.div>

              {/* DECORACIÓN ADICIONAL */}
              <div className="flex space-x-2 mt-6">
                {[1, 2, 3].map((dot) => (
                  <motion.div
                    key={dot}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, delay: dot * 0.2, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-[#0E7E92]/30"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA - CONTENIDO (TEXTO MÁS GRANDE) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* FRASE DE IMPACTO */}
            <blockquote className="border-l-4 border-[#0E7E92] pl-6 py-3">
              <p className="text-2xl md:text-3xl font-light text-[#1C1B3E] italic leading-relaxed">
                "MarIA es mucho más que una inteligencia artificial: es una compañera de infancia"
              </p>
            </blockquote>

            {/* DESCRIPCIÓN PRINCIPAL */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Diseñada primordialmente para niños, MarIA interactúa de manera natural, empática
                y culturalmente relevante, despertando la curiosidad y el deseo de aprender.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Su arquitectura combina procesamiento de lenguaje natural, aprendizaje automático
                y una <span className="font-medium text-[#0E7E92]">identidad profundamente mexicana </span>
                que la convierte en un puente entre tradición y futuro.
              </p>
            </div>

            {/* VALORES DIFERENCIADORES */}
            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-xl font-semibold text-[#1C1B3E] mb-6">
                Lo que hace diferente a MarIA:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <div className="w-3 h-3 bg-[#4DD0E1] rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* MISIÓN */}
            <div className="bg-gradient-to-r from-[#0E7E92]/5 to-[#4DD0E1]/5 rounded-xl p-8 mt-8">
              <h4 className="text-xl font-medium text-[#1C1B3E] mb-4">Su misión</h4>
              <p className="text-gray-700 text-lg leading-relaxed">
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