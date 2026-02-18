// src/components/puntomovil/sections/WhatIsSection.tsx
import { motion } from 'framer-motion';

const WhatIsSection = () => {
  return (
    <section id="que-es" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* COLUMNA IZQUIERDA - TEXTO MEJORADO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              type: "spring",
              stiffness: 100
            }}
            className="relative"
          >
            {/* FONDO SUTIL CON EFECTO TECNOLÓGICO */}
            <div className="absolute -left-6 -top-6 w-48 h-48 bg-gradient-to-br from-[#2E7D32]/5 to-[#8BC34A]/5 rounded-full blur-2xl opacity-60"></div>
            <div className="relative space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-[#212121] mb-8">
                ¿Qué es <span className="text-[#2E7D32] font-semibold bg-gradient-to-r from-[#2E7D32] to-[#8BC34A] bg-clip-text text-transparent">Punto Móvil</span>?
              </h2>

              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  Punto Móvil es una aplicación de punto de venta diseñada para celulares, que ofrece
                  herramientas completas para gestionar cobros e inventario, con un enfoque más flexible
                  y adaptado a las necesidades locales.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  Nuestra solución elimina la necesidad de costosos equipos de punto de venta tradicionales,
                  permitiendo a cualquier comerciante convertir su smartphone en una terminal de ventas
                  completa y profesional.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-8 border-t border-gray-200/60"
                >
                  <h3 className="text-xl font-semibold text-[#212121] mb-6 pb-3 border-b border-gray-200/40">
                    Beneficios <span className="text-[#2E7D32]">clave</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { text: 'Sin inversión en hardware' },
                      { text: 'Fácil configuración' },
                      { text: 'Adaptado a comercios locales' },
                      { text: 'Soporte técnico incluido' }
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start p-3 rounded-lg bg-gradient-to-r from-gray-50 to-white border border-gray-200/60 hover:border-[#8BC34A]/40 hover:shadow-sm transition-all duration-300 group"
                      >
                        <span className="text-gray-700 text-lg pt-1">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA - IMAGEN MEJORADA */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="relative group"
          >
            {/* FONDO CON EFECTO DE LUZ */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2E7D32]/10 via-[#8BC34A]/5 to-[#00BCD4]/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

            {/* MARCO DE LA APLICACIÓN TECNOLÓGICO */}
            <div className="relative bg-gradient-to-br from-white to-gray-50/90 rounded-3xl p-6 shadow-2xl border-2 border-gray-200/80 group-hover:border-[#8BC34A]/40 transition-all duration-300 overflow-hidden">

              {/* CONTENEDOR DE LA IMAGEN CON EFECTOS */}
              <div className="relative bg-gradient-to-br from-[#2E7D32] via-[#4CAF50] to-[#00BCD4] rounded-2xl overflow-hidden border border-white/20 shadow-inner">

                {/* EFECTO DE RESPLANDOR EN BORDES */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#2E7D32]/30 via-[#8BC34A]/20 to-[#00BCD4]/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

                {/* CONTENEDOR DE IMAGEN */}
                <div className="relative h-96 flex items-center justify-center overflow-hidden">
                  {/* IMAGEN PRINCIPAL */}
                  <motion.img
                    src="/images/punto_movil_t.jpeg"
                    alt="Punto Móvil App"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.05 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  />

                  {/* OVERLAY TECNOLÓGICO */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E7D32]/10 to-transparent pointer-events-none"></div>

                  {/* EFECTO DE SCAN LÍNEA */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{ y: [0, 384, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />

                  {/* PARTÍCULAS FLOTANTES DE TRANSACCIONES */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-white to-[#8BC34A] shadow-lg"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -30, 0],
                          x: [0, Math.random() * 20 - 10, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ELEMENTOS DECORATIVOS ANIMADOS */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#8BC34A]/30 to-[#2E7D32]/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#00BCD4]/30 to-[#8BC34A]/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;