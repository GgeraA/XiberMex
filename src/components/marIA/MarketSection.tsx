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
      <div className="max-w-6xl mx-auto px-6">
        
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
            className="h-px bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1] mx-auto mb-8"
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

        {/* SEGMENTOS DE MERCADO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {marketSegments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100"
            >
              {/* CABECERA CON GRADIENTE */}
              <div className={`h-2 bg-gradient-to-r ${segment.color}`}></div>
              
              <div className="p-8">
                {/* ENCABEZADO DEL SEGMENTO */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                      <span className="text-3xl">{segment.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1C1B3E]">{segment.title}</h3>
                      <div className="flex items-center space-x-3 mt-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          Tamaño: {segment.size}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          segment.opportunity === 'Alta' 
                            ? 'bg-green-100 text-green-800'
                            : segment.opportunity === 'Media-Alta'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          Oportunidad: {segment.opportunity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DESCRIPCIÓN */}
                <p className="text-gray-600 mb-8">
                  {segment.description}
                </p>

                {/* CARACTERÍSTICAS ESPECÍFICAS */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Necesidades Específicas
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {segment.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#4DD0E1] rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RESUMEN DE MERCADO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0E7E92] to-[#00838F] rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15M+</div>
              <div className="text-white/80">Familias Potenciales</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45K+</div>
              <div className="text-white/80">Instituciones Educativas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$500M+</div>
              <div className="text-white/80">Mercado Total Anual</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 pt-8 border-t border-white/20"
          >
            <h4 className="text-xl font-light mb-4 text-center">
              Cobertura <span className="font-bold">Estratégica</span>
            </h4>
            <p className="text-white/90 text-center max-w-3xl mx-auto">
              MarIA está posicionada para capturar los segmentos más valiosos del mercado educativo mexicano, 
              ofreciendo soluciones específicas para cada tipo de usuario mientras mantiene una identidad coherente 
              y valores compartidos.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;