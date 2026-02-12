// src/components/maria/sections/BusinessModelSection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const BusinessModelSection = () => {
  const [activeModel, setActiveModel] = useState('suscripcion');

  const businessModels = [
    {
      id: 'suscripcion',
      title: 'Suscripción Educativa',
      icon: '🔄',
      description: 'Acceso mensual o anual a contenidos interactivos, cuentos, juegos y actividades guiadas por MarIA.',
      features: [
        'Contenido educativo ilimitado',
        'Actualizaciones mensuales',
        'Perfiles familiares múltiples',
        'Soporte prioritario'
      ],
      revenue: 'Recurrente',
      target: 'Familias individuales'
    },
    {
      id: 'licenciamiento',
      title: 'Licenciamiento Escolar',
      icon: '🏫',
      description: 'Integración en colegios y centros educativos como herramienta de apoyo en clases y actividades extracurriculares.',
      features: [
        'Panel de control para educadores',
        'Reportes de progreso por estudiante',
        'Contenido alineado a planes de estudio',
        'Soporte técnico dedicado'
      ],
      revenue: 'Anual por estudiante',
      target: 'Instituciones educativas'
    },
    {
      id: 'contenido',
      title: 'Contenido Premium',
      icon: '🎯',
      description: 'Módulos especializados (valores, historia, ciencia, arte) que los padres pueden adquirir para reforzar aprendizajes.',
      features: [
        'Módulos temáticos específicos',
        'Contenido exclusivo',
        'Actividades prácticas',
        'Material descargable'
      ],
      revenue: 'Pago único por módulo',
      target: 'Padres específicos'
    },
    {
      id: 'merchandising',
      title: 'Merchandising',
      icon: '🛍️',
      description: 'Productos digitales y físicos inspirados en MarIA: personajes, apps complementarias, libros ilustrados y materiales educativos.',
      features: [
        'Aplicaciones complementarias',
        'Libros y materiales físicos',
        'Avatares y personalización',
        'Eventos y experiencias'
      ],
      revenue: 'Venta directa',
      target: 'Comunidad MarIA'
    }
  ];

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
            Modelo de <span className="text-[#0E7E92]">Negocio</span> Escalable
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Cuatro pilares comerciales diseñados para maximizar alcance y sostenibilidad
          </motion.p>
        </div>

        {/* MODELOS DE NEGOCIO */}
        <div className="mb-12">
          {/* SELECTOR DE MODELOS */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {businessModels.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(model.id)}
                className={`px-6 py-3 rounded-full flex items-center space-x-3 transition-all duration-300 ${
                  activeModel === model.id
                    ? 'bg-[#0E7E92] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{model.icon}</span>
                <span className="font-medium">{model.title}</span>
              </button>
            ))}
          </div>

          {/* DETALLE DEL MODELO ACTIVO */}
          <motion.div
            key={activeModel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12"
          >
            {businessModels.map((model) => (
              model.id === activeModel && (
                <div key={model.id} className="grid md:grid-cols-2 gap-12">
                  {/* COLUMNA IZQUIERDA */}
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] flex items-center justify-center">
                        <span className="text-3xl">{model.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-[#1C1B3E]">{model.title}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="px-3 py-1 bg-[#0E7E92]/10 text-[#0E7E92] rounded-full text-sm">
                            {model.revenue}
                          </span>
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-600">{model.target}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg mb-8">
                      {model.description}
                    </p>

                    <h4 className="text-lg font-semibold text-[#1C1B3E] mb-4">Características Incluidas:</h4>
                    <ul className="space-y-3">
                      {model.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-[#4DD0E1] rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* COLUMNA DERECHA - VISUALIZACIÓN */}
                  <div className="bg-gradient-to-br from-[#0E7E92]/5 to-[#4DD0E1]/5 rounded-xl p-8">
                    <h4 className="text-lg font-semibold text-[#1C1B3E] mb-6">Potencial de Mercado</h4>
                    
                    <div className="space-y-6">
                      {model.id === 'suscripcion' && (
                        <>
                          <div>
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>Familias con niños 3-12 años</span>
                              <span>15M+</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '85%' }}
                                transition={{ delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1]"
                              />
                            </div>
                          </div>
                          <div className="text-center text-3xl font-bold text-[#0E7E92]">
                            $299 <span className="text-lg text-gray-600">/mes</span>
                          </div>
                        </>
                      )}

                      {model.id === 'licenciamiento' && (
                        <>
                          <div>
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>Escuelas privadas en México</span>
                              <span>45K+</span>
                            </div>
                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '60%' }}
                                transition={{ delay: 0.5 }}
                                className="h-full bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1]"
                              />
                            </div>
                          </div>
                          <div className="text-center text-3xl font-bold text-[#0E7E92]">
                            $99 <span className="text-lg text-gray-600">/estudiante/año</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )
            ))}
          </motion.div>
        </div>

        {/* VISIÓN ECONÓMICA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-gray-100"
        >
          <h3 className="text-2xl font-light text-[#1C1B3E] mb-6">
            Más que un Producto, un <span className="text-[#0E7E92]">Ecosistema</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada pilar comercial se complementa, creando un ecosistema sostenible 
            donde MarIA no solo educa, sino que construye comunidad y genera valor 
            económico a largo plazo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModelSection;