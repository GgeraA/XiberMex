// src/components/maria/sections/MarketSection.tsx
import { motion } from 'framer-motion';

const MarketSection = () => {
  const marketSegments = [
    {
      title: 'Padres y Familias',
      icon: '👨‍👩‍👧‍👦',
      description: 'Buscadores de herramientas seguras y educativas para sus hijos que combinen tecnología con valores.',
      size: '15M+',
      opportunity: 'Alta',
      color: 'from-blue-500 to-cyan-400',
      features: [
        'Seguridad como prioridad',
        'Contenido educativo de calidad',
        'Valores y desarrollo integral',
        'Flexibilidad horaria'
      ]
    },
    {
      title: 'Escuelas y Centros Educativos',
      icon: '🏫',
      description: 'Instituciones interesadas en innovación pedagógica y herramientas de apoyo para el aprendizaje.',
      size: '45K+',
      opportunity: 'Media-Alta',
      color: 'from-green-500 to-emerald-400',
      features: [
        'Integración curricular',
        'Seguimiento de progreso',
        'Herramientas para educadores',
        'Contenido alineado a SEP'
      ]
    },
    {
      title: 'Instituciones Culturales y Editoriales',
      icon: '📚',
      description: 'Organizaciones que buscan difundir valores y tradiciones a través de tecnología innovadora.',
      size: '5K+',
      opportunity: 'Media',
      color: 'from-purple-500 to-pink-400',
      features: [
        'Contenido culturalmente relevante',
        'Alianzas estratégicas',
        'Audiencias cautivas',
        'Proyectos especiales'
      ]
    },
    {
      title: 'Instituciones Gubernamentales',
      icon: '🏛️',
      description: 'Agencias y dependencias que necesitan soluciones de educación digital con alcance masivo.',
      size: '500+',
      opportunity: 'Alta',
      color: 'from-orange-500 to-yellow-400',
      features: [
        'Programas sociales educativos',
        'Cobertura nacional',
        'Contenido validado',
        'Reportes y métricas'
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#1C1B3E] mb-4"
          >
            Mercado <span className="text-[#0E7E92]">Objetivo</span>
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
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Cuatro segmentos estratégicos con necesidades específicas que MarIA está diseñada para satisfacer
          </motion.p>
        </div>

        {/* SEGMENTOS DE MERCADO - DISEÑO MEJORADO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {marketSegments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 90 
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              {/* CARD CON DISEÑO TECNOLÓGICO SUTIL */}
              <div className="relative h-full">
                {/* FONDO CON EFECTO DE LUZ */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${segment.color} rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500`}></div>
                
                {/* CARD PRINCIPAL */}
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50/90 rounded-2xl border-2 border-gray-200/80 group-hover:border-[#0E7E92]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl overflow-hidden">
                  
                  {/* BARRA SUPERIOR CON GRADIENTE */}
                  <div className={`h-2 bg-gradient-to-r ${segment.color} group-hover:h-3 transition-all duration-300`}></div>
                  
                  <div className="p-7">
                    {/* ENCABEZADO DEL SEGMENTO - DISEÑO MEJORADO */}
                    <div className="flex items-start justify-between mb-7">
                      <div className="flex items-center space-x-5">
                        <div className="relative">
                          {/* ÍCONO CON EFECTO */}
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border-2 border-white/70 shadow-inner group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl">{segment.icon}</span>
                          </div>
                          {/* RESPLANDOR DEL ICONO */}
                          <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-gray-200/30 to-transparent opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-semibold text-[#1C1B3E] group-hover:text-[#0E7E92] transition-colors duration-300">
                            {segment.title}
                          </h3>
                          
                          {/* BADGES MEJORADOS */}
                          <div className="flex flex-wrap gap-2 mt-3">
                            <div className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-base font-medium border border-gray-300/50 group-hover:border-gray-400/50 transition-colors">
                              Tamaño: <span className="font-semibold">{segment.size}</span>
                            </div>
                            <div className={`px-4 py-2 rounded-full text-base font-medium border transition-colors ${
                              segment.opportunity === 'Alta' 
                                ? 'bg-gradient-to-r from-green-100/80 to-green-50/80 text-green-800 border-green-300/50 group-hover:border-green-400/50'
                                : segment.opportunity === 'Media-Alta'
                                ? 'bg-gradient-to-r from-blue-100/80 to-blue-50/80 text-blue-800 border-blue-300/50 group-hover:border-blue-400/50'
                                : 'bg-gradient-to-r from-yellow-100/80 to-yellow-50/80 text-yellow-800 border-yellow-300/50 group-hover:border-yellow-400/50'
                            }`}>
                              <span className="opacity-80">Oportunidad:</span> <span className="font-semibold">{segment.opportunity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DESCRIPCIÓN */}
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed border-l-3 border-gray-300/50 pl-4 py-1 group-hover:border-[#0E7E92]/50 transition-colors">
                      {segment.description}
                    </p>

                    {/* CARACTERÍSTICAS ESPECÍFICAS - DISEÑO MEJORADO */}
                    <div>
                      <h4 className="text-base font-semibold text-gray-500 uppercase tracking-wider mb-5 pb-2 border-b border-gray-200/60 group-hover:text-gray-600 transition-colors">
                        Necesidades Específicas
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {segment.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: featureIndex * 0.05 + index * 0.1 }}
                            className="flex items-start group/feature"
                          >
                            <div className="relative mt-1.5 mr-3 flex-shrink-0">
                              {/* INDICADOR ANIMADO */}
                              <div className={`w-2.5 h-2.5 bg-gradient-to-br ${segment.color} rounded-full`}></div>
                              {/* ANILLO DE RESPLANDOR */}
                              <div className="absolute -inset-1 rounded-full bg-gradient-to-br opacity-0 group-hover/feature:opacity-20 transition duration-300"></div>
                            </div>
                            <span className="text-gray-700 text-lg group-hover/feature:text-[#1C1B3E] transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* EFECTO INFERIOR */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent group-hover:via-gray-300/50 transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESUMEN DE MERCADO - DISEÑO MEJORADO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* FONDO CON EFECTO DE LUZ */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0E7E92] via-[#4DD0E1] to-[#0E7E92] rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
          
          {/* CARD PRINCIPAL */}
          <div className="relative bg-gradient-to-r from-[#0E7E92] to-[#00838F] rounded-2xl border-2 border-[#0E7E92]/30 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
            
            {/* EFECTO DE PATRÓN SUTIL */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative p-8 md:p-12 text-white">
              {/* ESTADÍSTICAS */}
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { value: '15M+', label: 'Familias Potenciales' },
                  { value: '45K+', label: 'Instituciones Educativas' },
                  { value: '$500M+', label: 'Mercado Total Anual' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group/stat"
                  >
                    <div className="text-4xl md:text-5xl font-bold mb-3 group-hover/stat:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-white/90 text-lg">
                      {stat.label}
                    </div>
                    {/* LÍNEA INFERIOR */}
                    <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/stat:via-white/50 transition-all duration-300"></div>
                  </motion.div>
                ))}
              </div>

              {/* SECCIÓN INFERIOR */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-10 border-t border-white/20"
              >
                <h4 className="text-2xl font-light mb-6 text-center group-hover:text-white transition-colors">
                  Cobertura <span className="font-bold">Estratégica</span>
                </h4>
                <div className="relative">
                  <p className="text-white/95 text-lg text-center max-w-3xl mx-auto leading-relaxed">
                    MarIA está posicionada para capturar los segmentos más valiosos del mercado educativo mexicano, 
                    ofreciendo soluciones específicas para cada tipo de usuario mientras mantiene una identidad coherente 
                    y valores compartidos.
                  </p>
                  {/* DECORACIÓN */}
                  <div className="flex justify-center mt-8 space-x-2">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                        className="w-2 h-2 rounded-full bg-white/50"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;