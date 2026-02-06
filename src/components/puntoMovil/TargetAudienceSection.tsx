// src/components/puntomovil/sections/TargetAudienceSection.tsx
import { motion } from 'framer-motion';

const TargetAudienceSection = () => {
  const audienceSegments = [
    {
      title: 'Comerciantes Independientes',
      description: 'Vendedores ambulantes, dueños de pequeños negocios que necesitan una solución simple y económica.',
      icon: '🛒',
      color: 'bg-gradient-to-br from-[#2E7D32] to-[#8BC34A]'
    },
    {
      title: 'Negocios Pequeños y Medianos',
      description: 'PYMES que buscan digitalizar sus ventas sin grandes inversiones en infraestructura.',
      icon: '🏪',
      color: 'bg-gradient-to-br from-[#00BCD4] to-[#26A69A]'
    },
    {
      title: 'Emprendedores',
      description: 'Personas que inician un negocio y necesitan una solución práctica para gestionar ventas.',
      icon: '🚀',
      color: 'bg-gradient-to-br from-[#8BC34A] to-[#AED581]'
    },
    {
      title: 'Empresas con Movilidad',
      description: 'Compañías que requieren rapidez en transacciones y operaciones en diferentes ubicaciones.',
      icon: '🏃‍♂️',
      color: 'bg-gradient-to-br from-[#26A69A] to-[#00BCD4]'
    },
    {
      title: 'Vendedores en E-commerce',
      description: 'Comerciantes online que necesitan integrar ventas físicas con su tienda digital.',
      icon: '🛍️',
      color: 'bg-gradient-to-br from-[#2E7D32] to-[#4CAF50]'
    },
    {
      title: 'Startups y Nuevos Modelos',
      description: 'Negocios innovadores que requieren flexibilidad y escalabilidad desde el inicio.',
      icon: '💡',
      color: 'bg-gradient-to-br from-[#4CAF50] to-[#2E7D32]'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#212121] mb-4"
          >
            ¿Para quién es <span className="text-[#2E7D32]">Punto Móvil</span>?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-px bg-gradient-to-r from-[#2E7D32] to-[#00BCD4] mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Diseñado para todo tipo de comerciantes que buscan una solución práctica, económica y moderna para gestionar sus ventas.
          </motion.p>
        </div>

        {/* GRID DE SEGMENTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audienceSegments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-200">
                
                {/* ICONO CON GRADIENTE */}
                <div className={`w-20 h-20 rounded-2xl ${segment.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{segment.icon}</span>
                </div>

                {/* TÍTULO Y DESCRIPCIÓN */}
                <h3 className="text-xl font-semibold text-[#212121] mb-4">
                  {segment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {segment.description}
                </p>

                {/* INDICADOR DE HOVER */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="inline-flex items-center text-sm font-medium text-[#2E7D32]">
                    Ideal para este segmento
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESUMEN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200 text-center"
        >
          <h3 className="text-2xl font-light text-[#212121] mb-6">
            ¿No encuentras tu perfil aquí?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Punto Móvil es adaptable a cualquier tipo de negocio. Si tienes necesidades específicas, 
            contáctanos para crear una solución personalizada.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#2E7D32] text-white font-medium hover:bg-[#1B5E20] transition-colors"
          >
            Consultar adaptación personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;