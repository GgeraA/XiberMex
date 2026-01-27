// src/components/maria/sections/VisionSection.tsx
import { motion } from 'framer-motion';

const VisionSection = () => {
  const visionMilestones = [
    {
      year: '2025',
      title: 'Líder en México',
      description: 'Consolidación como la compañera educativa digital más confiable para familias mexicanas.',
      icon: '👑',
      metrics: ['500K usuarios', '5K escuelas', '95% satisfacción']
    },
    {
      year: '2026',
      title: 'Expansión Latinoamericana',
      description: 'Adaptación cultural para mercados de Colombia, Argentina y Chile manteniendo esencia mexicana.',
      icon: '🌎',
      metrics: ['3 países', '2M usuarios', 'Alianzas regionales']
    },
    {
      year: '2027',
      title: 'Ecosistema Completo',
      description: 'Plataforma integral con hardware dedicado, contenido premium y comunidad activa.',
      icon: '🚀',
      metrics: ['10+ productos', 'Community features', 'Hardware educativo']
    },
    {
      year: '2030',
      title: 'Transformación Educativa',
      description: 'Referente global en educación infantil digital con valores y tecnología humanizada.',
      icon: '🎯',
      metrics: ['10M niños impactados', 'Reconocimiento UNESCO', 'Modelo replicado']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#1C1B3E] mb-4"
          >
            Visión de <span className="text-[#0E7E92]">Futuro</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
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
            MarIA no es solo una aplicación: es un ecosistema educativo digital que busca transformar 
            la manera en que los niños aprenden y se relacionan con la tecnología.
          </motion.p>
        </div>

        {/* VISIÓN PRINCIPAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0E7E92] to-[#00838F] rounded-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-light mb-6">
                Nuestra <span className="font-bold">Aspiración</span>
              </h3>
              <p className="text-white/90 leading-relaxed">
                Convertirnos en la compañera educativa más confiable y culturalmente relevante 
                para las familias en México y más allá, donde la tecnología no solo informa, 
                sino que educa con amor, transmite valores y abre caminos hacia una niñez 
                más plena y con propósito.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold text-center mb-2">10M+</div>
              <div className="text-center text-white/80">Niños impactados para 2030</div>
              <div className="h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-white to-[#4DD0E1]"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROADMAP VISUAL */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-[#1C1B3E] mb-12 text-center">
            Camino hacia el <span className="text-[#0E7E92]">Liderazgo</span>
          </h3>
          
          <div className="relative">
            {/* LÍNEA DE TIEMPO */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1] transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {visionMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  {/* AÑO */}
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-[#0E7E92] flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-2xl font-bold text-[#0E7E92]">{milestone.year}</span>
                  </div>
                  
                  {/* CONTENIDO */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-3xl mb-4">{milestone.icon}</div>
                    <h4 className="text-lg font-semibold text-[#1C1B3E] mb-3">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{milestone.description}</p>
                    
                    <div className="space-y-2">
                      {milestone.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-xs bg-gray-50 text-gray-700 px-3 py-1 rounded-full">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* VALOR DIFERENCIAL FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center space-y-4 px-8 py-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200">
            <div className="text-4xl">💫</div>
            <h4 className="text-xl font-semibold text-[#1C1B3E]">
              Tecnología con Rostro Humano
            </h4>
            <p className="text-gray-600 max-w-2xl">
              Donde cada línea de código tiene un propósito educativo, cada interacción 
              construye valores, y cada niño descubre su potencial a través de una 
              tecnología que habla su idioma, conoce su cultura y cree en su futuro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;