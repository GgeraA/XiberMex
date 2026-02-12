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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ENCABEZADO MEJORADO */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-light text-[#212121] mb-4"
          >
            ¿Para quién es <span className="text-[#2E7D32] font-semibold bg-gradient-to-r from-[#2E7D32] to-[#8BC34A] bg-clip-text text-transparent">Punto Móvil</span>?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '120px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#2E7D32] via-[#8BC34A] to-[#00BCD4] mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Diseñado para todo tipo de comerciantes que buscan una solución práctica, económica y moderna para gestionar sus ventas.
          </motion.p>
        </div>

        {/* GRID DE SEGMENTOS MEJORADO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceSegments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 90
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              {/* CARD CON DISEÑO TECNOLÓGICO */}
              <div className="relative h-full">
                {/* FONDO CON EFECTO DE LUZ */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#2E7D32]/10 via-[#8BC34A]/5 to-[#00BCD4]/5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

                {/* CARD PRINCIPAL */}
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50/90 rounded-2xl p-7 border-2 border-gray-200/80 group-hover:border-[#8BC34A]/40 transition-all duration-300 shadow-lg group-hover:shadow-xl overflow-hidden">

                  {/* EFECTO DE LÍNEA SUPERIOR */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent group-hover:via-[#8BC34A] transition-all duration-500"></div>

                  {/* ICONO CON GRADIENTE MEJORADO */}
                  <div className="relative mb-7">
                    <div className={`w-22 h-22 rounded-2xl ${segment.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white/50`}>
                      <span className="text-4xl">{segment.icon}</span>
                    </div>
                    {/* RESPLANDOR DEL ICONO */}
                    <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
                  </div>

                  {/* TÍTULO Y DESCRIPCIÓN */}
                  <h3 className="text-2xl font-semibold text-[#212121] mb-5 group-hover:text-[#2E7D32] transition-colors duration-300">
                    {segment.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {segment.description}
                  </p>
                  {/* EFECTO INFERIOR */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent group-hover:via-[#8BC34A]/20 transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESUMEN MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-16 border-t border-gray-200/60 text-center relative"
        >
          {/* FONDO CON EFECTO */}
          <div className="absolute -inset-8 bg-gradient-to-r from-[#2E7D32]/5 via-[#8BC34A]/3 to-[#00BCD4]/5 rounded-2xl opacity-0 hover:opacity-100 blur transition duration-500"></div>

          <div className="relative bg-gradient-to-br from-white to-gray-50/90 rounded-2xl p-8 md:p-10 border-2 border-gray-200/80 hover:border-[#8BC34A]/30 transition-all duration-300 shadow-lg hover:shadow-xl">
            <h3 className="text-2xl font-light text-[#212121] mb-6 group-hover:text-[#2E7D32] transition-colors">
              ¿No encuentras tu perfil aquí?
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Punto Móvil es adaptable a cualquier tipo de negocio. Si tienes necesidades específicas,
              contáctanos para crear una solución personalizada.
            </p>
          </div>

          {/* DECORACIÓN */}
          <div className="flex justify-center mt-6 space-x-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                className="w-1 h-6 bg-gradient-to-b from-[#2E7D32] to-[#8BC34A] rounded-full opacity-40"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;