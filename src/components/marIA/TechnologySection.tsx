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
          <div className="inline-flex rounded-xl bg-white p-2 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ml-6 ${
                  activeTab === tab.id
                    ? 'bg-[#0E7E92] text-white'
                    : 'text-gray-600 hover:text-[#0E7E92]'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONTENIDO DE PESTAÑAS */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          
          {/* ARQUITECTURA */}
          {activeTab === 'arquitectura' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* COLUMNA IZQUIERDA */}
                <div>
                  <h3 className="text-2xl font-light text-[#1C1B3E] mb-6">
                    Núcleo Inteligente
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] flex items-center justify-center">
                        <span className="text-white text-xl">🤖</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C1B3E] mb-1">Procesamiento de Lenguaje Natural</h4>
                        <p className="text-gray-600 text-sm">
                          Comprensión y generación de lenguaje natural con contexto cultural mexicano
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] flex items-center justify-center">
                        <span className="text-white text-xl">🧠</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C1B3E] mb-1">Aprendizaje Automático</h4>
                        <p className="text-gray-600 text-sm">
                          Modelos que evolucionan con cada interacción, mejorando respuestas y personalización
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* COLUMNA DERECHA */}
                <div>
                  <h3 className="text-2xl font-light text-[#1C1B3E] mb-6">
                    Personalización Avanzada
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Adaptación por edad y nivel educativo',
                      'Contextualización regional (modismos locales)',
                      'Preferencias de aprendizaje individuales',
                      'Historial de interacciones para seguimiento'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#4DD0E1] rounded-full mr-3"></div>
                        <span className="text-gray-700">{item}</span>
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
              className="space-y-8"
            >
              <h3 className="text-2xl font-light text-[#1C1B3E] mb-6">
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
                    className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:border-[#0E7E92] transition-colors"
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${platform.color} mx-auto mb-4 flex items-center justify-center`}>
                      <span className="text-2xl">{platform.icon}</span>
                    </div>
                    <h4 className="font-semibold text-[#1C1B3E] mb-2">{platform.title}</h4>
                    <p className="text-sm text-gray-600">{platform.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-gray-100">
                <h4 className="text-lg font-medium text-[#1C1B3E] mb-4">Conexiones Externas</h4>
                <div className="flex flex-wrap gap-2">
                  {['Bases de datos', 'CRM', 'Plataformas de mensajería', 'Sistemas educativos', 'APIs de pago', 'Analytics'].map((item, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
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
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-light text-[#1C1B3E] mb-6">
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
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0E7E92]/10 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#0E7E92]"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light text-[#1C1B3E] mb-6">
                    Especificaciones Técnicas
                  </h3>
                  <div className="bg-gradient-to-br from-[#0E7E92]/5 to-[#4DD0E1]/5 rounded-xl p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-[#1C1B3E] mb-1">Lenguajes</h4>
                        <p className="text-sm text-gray-600">Python, JavaScript, TypeScript</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C1B3E] mb-1">Frameworks</h4>
                        <p className="text-sm text-gray-600">React Native, TensorFlow, Node.js</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C1B3E] mb-1">Infraestructura</h4>
                        <p className="text-sm text-gray-600">Cloud native, escalado automático, alta disponibilidad</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1C1B3E] mb-1">Seguridad</h4>
                        <p className="text-sm text-gray-600">Encriptación end-to-end, compliance COPPA</p>
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