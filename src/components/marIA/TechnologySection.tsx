import { motion } from 'framer-motion';
import { useState } from 'react';

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState('arquitectura');

  const tabs = [
    { id: 'arquitectura', label: 'Arquitectura', icon: '🏗️' },
    { id: 'integracion', label: 'Integración', icon: '🔌' },
    { id: 'capacidades', label: 'Capacidades', icon: '⚡' },
  ];

  return (
    <section id="tecnologia" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#1C1B3E] mb-4"
          >
            Tecnología con <span className="text-[#0E7E92]">Propósito</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Una arquitectura modular diseñada para adaptarse a cualquier entorno y necesidad
          </motion.p>
        </div>

        {/* PESTAÑAS */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl bg-white p-2 shadow-sm border border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ml-6 text-base ${
                  activeTab === tab.id
                    ? 'bg-[#0E7E92] text-white border-2 border-[#0E7E92]'
                    : 'text-gray-600 hover:text-[#0E7E92] border border-transparent hover:border-gray-300'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONTENIDO DE PESTAÑAS */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border-2 border-gray-100">
          
          {/* ARQUITECTURA */}
          {activeTab === 'arquitectura' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className="grid md:grid-cols-2 gap-10">
                {/* COLUMNA IZQUIERDA */}
                <div className="border-2 border-gray-100 rounded-xl p-6 bg-white">
                  <h3 className="text-2xl font-light text-[#1C1B3E] mb-8 pb-4 border-b-2 border-gray-100">
                    Núcleo Inteligente
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-5 p-5 rounded-xl border-2 border-gray-200 hover:border-[#0E7E92]/30 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] flex items-center justify-center border-2 border-white shadow-md">
                        <span className="text-white text-2xl">🤖</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C1B3E] mb-3 text-xl">Procesamiento de Lenguaje Natural</h4>
                        <p className="text-gray-600 text-lg">
                          Comprensión y generación de lenguaje natural con contexto cultural mexicano
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-5 p-5 rounded-xl border-2 border-gray-200 hover:border-[#0E7E92]/30 transition-colors">
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] flex items-center justify-center border-2 border-white shadow-md">
                        <span className="text-white text-2xl">🧠</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C1B3E] mb-3 text-xl">Aprendizaje Automático</h4>
                        <p className="text-gray-600 text-lg">
                          Modelos que evolucionan con cada interacción, mejorando respuestas y personalización
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div className="border-2 border-gray-100 rounded-xl p-6 bg-white">
                  <h3 className="text-2xl font-light text-[#1C1B3E] mb-8 pb-4 border-b-2 border-gray-100">
                    Personalización Avanzada
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'Adaptación por edad y nivel educativo',
                      'Contextualización regional (modismos locales)',
                      'Preferencias de aprendizaje individuales',
                      'Historial de interacciones para seguimiento'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-[#0E7E92]/30 transition-colors">
                        <div className="w-3 h-3 bg-[#4DD0E1] rounded-full mr-4 border-2 border-[#4DD0E1]/30"></div>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* INTEGRACIÓN */}
          {activeTab === 'integracion' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className="border-2 border-gray-100 rounded-xl p-8 mb-8 bg-white">
                <h3 className="text-2xl font-light text-[#1C1B3E] mb-8 pb-4 border-b-2 border-gray-100">
                  Sistema Modular Multiplataforma
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: 'Aplicaciones Móviles',
                      description: 'iOS y Android nativos',
                      icon: '📱',
                      color: 'from-blue-500 to-cyan-400'
                    },
                    {
                      title: 'Páginas Web',
                      description: 'Interfaces web responsivas',
                      icon: '🌐',
                      color: 'from-green-500 to-emerald-400'
                    },
                    {
                      title: 'Sistemas de Atención',
                      description: 'Chatbots y asistentes virtuales',
                      icon: '💬',
                      color: 'from-purple-500 to-pink-400'
                    },
                    {
                      title: 'APIs y SDKs',
                      description: 'Integración en sistemas existentes',
                      icon: '🔧',
                      color: 'from-orange-500 to-yellow-400'
                    }
                  ].map((platform, index) => (
                    <div 
                      key={index} 
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#0E7E92] hover:shadow-md transition-all duration-300"
                    >
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${platform.color} mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-lg`}>
                        <span className="text-3xl">{platform.icon}</span>
                      </div>
                      <h4 className="font-semibold text-[#1C1B3E] mb-3 text-xl">{platform.title}</h4>
                      <p className="text-gray-600 text-lg">{platform.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t-2 border-gray-200">
                <h4 className="text-xl font-medium text-[#1C1B3E] mb-6">Conexiones Externas</h4>
                <div className="flex flex-wrap gap-3">
                  {['Bases de datos', 'CRM', 'Plataformas de mensajería', 'Sistemas educativos', 'APIs de pago', 'Analytics'].map((item, index) => (
                    <span 
                      key={index} 
                      className="px-5 py-3 bg-gray-100 text-gray-700 rounded-full text-lg border-2 border-gray-300 hover:border-[#0E7E92] hover:bg-gray-50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CAPACIDADES */}
          {activeTab === 'capacidades' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <div className="grid md:grid-cols-2 gap-10">
                <div className="border-2 border-gray-100 rounded-xl p-6 bg-white">
                  <h3 className="text-2xl font-light text-[#1C1B3E] mb-8 pb-4 border-b-2 border-gray-100">
                    Funcionalidades Principales
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Generación de contenido contextualizado educativo',
                      'Interacción multicanal en lenguaje natural',
                      'Análisis de sentimiento y adaptación emocional',
                      'Creación de rutas de aprendizaje personalizadas',
                      'Evaluación continua del progreso',
                      'Generación de reportes automáticos para padres/educadores'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start p-4 rounded-lg border border-gray-200 hover:border-[#0E7E92]/30 transition-colors">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0E7E92]/10 flex items-center justify-center mr-4 mt-1 border-2 border-[#0E7E92]/20">
                          <div className="w-3 h-3 rounded-full bg-[#0E7E92]"></div>
                        </div>
                        <span className="text-gray-700 text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-2 border-gray-100 rounded-xl p-6 bg-white">
                  <h3 className="text-2xl font-light text-[#1C1B3E] mb-8 pb-4 border-b-2 border-gray-100">
                    Especificaciones Técnicas
                  </h3>
                  <div className="border-2 border-[#0E7E92]/20 rounded-xl p-6 bg-gradient-to-br from-[#0E7E92]/5 to-[#4DD0E1]/5">
                    <div className="space-y-6">
                      <div className="pb-4 border-b border-gray-300">
                        <h4 className="font-medium text-[#1C1B3E] mb-2 text-xl">Lenguajes</h4>
                        <p className="text-gray-600 text-lg">Python, JavaScript, TypeScript</p>
                      </div>
                      <div className="pb-4 border-b border-gray-300">
                        <h4 className="font-medium text-[#1C1B3E] mb-2 text-xl">Frameworks</h4>
                        <p className="text-gray-600 text-lg">React Native, TensorFlow, Node.js</p>
                      </div>
                      <div className="pb-4 border-b border-gray-300">
                        <h4 className="font-medium text-[#1C1B3E] mb-2 text-xl">Infraestructura</h4>
                        <p className="text-gray-600 text-lg">Cloud native, escalado automático, alta disponibilidad</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C1B3E] mb-2 text-xl">Seguridad</h4>
                        <p className="text-gray-600 text-lg">Encriptación end-to-end, compliance COPPA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;