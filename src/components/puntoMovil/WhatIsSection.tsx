// src/components/puntomovil/sections/WhatIsSection.tsx
import { motion } from 'framer-motion';

const WhatIsSection = () => {
  return (
    <section id="que-es" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA - TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#212121] mb-6">
              ¿Qué es <span className="text-[#2E7D32]">Punto Móvil</span>?
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Punto Móvil es una aplicación de punto de venta diseñada para celulares, que ofrece 
                herramientas completas para gestionar cobros e inventario, con un enfoque más flexible 
                y adaptado a las necesidades locales.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Nuestra solución elimina la necesidad de costosos equipos de punto de venta tradicionales, 
                permitiendo a cualquier comerciante convertir su smartphone en una terminal de ventas 
                completa y profesional.
              </p>

              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-[#212121] mb-4">
                  Beneficios clave:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Sin inversión en hardware',
                    'Fácil configuración',
                    'Adaptado a comercios locales',
                    'Soporte técnico incluido'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-[#8BC34A] rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* COLUMNA DERECHA - IMAGEN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* MARCO DE LA APLICACIÓN */}
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-2xl">
              {/* CONTENEDOR DE LA IMAGEN */}
              <div className="bg-gradient-to-br from-[#2E7D32] to-[#00BCD4] rounded-2xl overflow-hidden">
                {/* Espacio para la imagen - puedes reemplazar el div por un tag img */}
                <div className="h-96 flex items-center justify-center">
                  <div className="text-center text-white">
                  </div>
                  <img src="/images/puntomovil.jpeg" alt="Punto Móvil App" className="w-full" />
                </div>
              </div>
            </div>

            {/* ELEMENTOS DECORATIVOS */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8BC34A]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00BCD4]/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;