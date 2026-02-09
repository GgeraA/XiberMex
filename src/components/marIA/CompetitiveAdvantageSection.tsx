// src/components/maria/sections/CompetitiveAdvantageSection.tsx
import { motion } from 'framer-motion';

const CompetitiveAdvantageSection = () => {
  const advantages = [
    {
      title: 'Avatar Personalizable',
      description: 'Cambio de avatar según el requerimiento, permitiendo adaptación a diferentes contextos y audiencias.',
      icon: '🎭',
      features: ['Múltiples personalidades', 'Adaptación contextual', 'Expresión cultural', 'Identificación emocional'],
      highlight: 'Único en el mercado'
    },
    {
      title: 'Exclusividad en Educación Infantil',
      description: 'Enfoque especializado en segmento infantil con énfasis en valores y desarrollo integral.',
      icon: '👶',
      features: ['Contenido validado por pedagogos', 'Enfoque en valores', 'Seguridad certificada', 'Desarrollo progresivo'],
      highlight: 'Segmento protegido'
    },
    {
      title: 'Identidad Cultural Mexicana',
      description: 'Inspirada en la muñeca tradicional Lele, con estética, lenguaje y valores profundamente mexicanos.',
      icon: '🇲🇽',
      features: ['Estética Lele reinterpretada', 'Modismos locales', 'Tradiciones integradas', 'Símbolos culturales'],
      highlight: 'Diferencia cultural'
    },
    {
      title: 'Flexibilidad Tecnológica',
      description: 'Puede integrarse en apps móviles, plataformas web, dispositivos inteligentes y sistemas existentes.',
      icon: '🔌',
      features: ['Multiplataforma', 'APIs abiertas', 'Integración sencilla', 'Compatibilidad total'],
      highlight: 'Tecnología adaptable'
    },
    {
      title: 'Escalabilidad Regional',
      description: 'Diseñada para crecer hacia otros mercados latinoamericanos con adaptaciones culturales específicas.',
      icon: '🌎',
      features: ['Arquitectura modular', 'Localización fácil', 'Modelo replicable', 'Alianzas regionales'],
      highlight: 'Potencial continental'
    },
    {
      title: 'Tecnología con Propósito',
      description: 'MarIA no es genérica; habla como nosotros, piensa como nosotros. Diseñada en México, para mexicanos.',
      icon: '💭',
      features: ['Lenguaje natural contextual', 'Pensamiento cultural', 'Empatía digital', 'Propósito educativo'],
      highlight: 'Alma digital mexicana'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#1C1B3E] mb-4"
          >
            Ventajas <span className="text-[#0E7E92]">Competitivas</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '140px' }}
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
            Seis pilares que posicionan a MarIA como líder indiscutible en educación digital infantil con identidad mexicana
          </motion.p>
        </div>

        {/* VENTAJAS EN GRID - DISEÑO MEJORADO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {advantages.map((advantage, index) => (
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
              whileHover={{ y: -8 }}
              className="group"
            >
              {/* CARD CON DISEÑO TECNOLÓGICO SUTIL */}
              <div className="relative h-full">
                {/* FONDO CON EFECTO DE LUZ */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0E7E92]/20 via-[#4DD0E1]/10 to-[#0E7E92]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200"></div>
                
                {/* CARD PRINCIPAL */}
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50/80 rounded-2xl p-7 border-2 border-gray-200/80 group-hover:border-[#0E7E92]/40 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#0E7E92]/10 overflow-hidden">
                  
                  {/* EFECTO DE LÍNEA SUPERIOR */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent group-hover:from-[#0E7E92] group-hover:via-[#4DD0E1] group-hover:to-[#0E7E92] transition-all duration-500"></div>
                  
                  {/* ICONO Y DESTACADO - DISEÑO MEJORADO */}
                  <div className="flex items-start justify-between mb-7">
                    <div className="relative">
                      <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-[#0E7E92]/15 to-[#4DD0E1]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white/50 shadow-inner">
                        <span className="text-3xl">{advantage.icon}</span>
                      </div>
                      {/* RESPLANDOR DEL ICONO */}
                      <div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-[#0E7E92]/10 to-transparent opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-[#0E7E92]/10 to-[#4DD0E1]/10 text-[#0E7E92] rounded-full text-base font-semibold border border-[#0E7E92]/20 group-hover:border-[#0E7E92]/40 transition-colors">
                      {advantage.highlight}
                    </span>
                  </div>

                  {/* TÍTULO Y DESCRIPCIÓN */}
                  <h3 className="text-2xl font-semibold text-[#1C1B3E] mb-5 group-hover:text-[#0E7E92] transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-7 leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* CARACTERÍSTICAS - DISEÑO MEJORADO */}
                  <div className="space-y-3 pt-5 border-t border-gray-200/60">
                    {advantage.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.05 + index * 0.1 }}
                        className="flex items-center group/feature"
                      >
                        {/* INDICADOR ANIMADO */}
                        <div className="relative mr-4">
                          <div className="w-2.5 h-2.5 bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] rounded-full"></div>
                          {/* ANILLO DE RESPLANDOR */}
                          <div className="absolute -inset-1 rounded-full bg-[#0E7E92]/20 opacity-0 group-hover/feature:opacity-100 transition duration-300"></div>
                        </div>
                        <span className="text-gray-700 text-lg group-hover/feature:text-[#1C1B3E] transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* EFECTO INFERIOR */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent group-hover:via-[#4DD0E1]/30 transition-all duration-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COMPARATIVA CON COMPETENCIA - DISEÑO MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* FONDO CON EFECTO */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E7E92]/5 via-[#4DD0E1]/5 to-[#0E7E92]/5 rounded-2xl border-2 border-gray-200/50"></div>
          
          <div className="relative rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-light text-[#1C1B3E] mb-10 text-center">
              ¿Por qué elegir <span className="font-semibold text-[#0E7E92]">MarIA</span> sobre otras soluciones?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Competidores Internacionales',
                  points: ['Genéricos, sin identidad local', 'Precios en dólares', 'Soporte limitado en español', 'Falta de contexto cultural'],
                  color: 'from-gray-500/10 to-gray-400/5'
                },
                {
                  title: 'MarIA',
                  points: ['Identidad mexicana auténtica', 'Precios en pesos, accesibles', 'Soporte local 24/7', 'Contexto cultural relevante'],
                  isMarIA: true,
                  color: 'from-[#0E7E92] to-[#00838F]'
                },
                {
                  title: 'Competidores Locales',
                  points: ['Tecnología limitada', 'Escalabilidad reducida', 'Contenido educativo básico', 'Falta de innovación'],
                  color: 'from-blue-500/10 to-cyan-400/5'
                }
              ].map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group/comparison"
                >
                  <div className={`relative h-full rounded-2xl p-7 border-2 ${
                    comparison.isMarIA 
                      ? 'bg-gradient-to-br from-[#0E7E92] to-[#00838F] text-white border-[#0E7E92]/30'
                      : `bg-gradient-to-br ${comparison.color} border-gray-200/70`
                  } shadow-lg hover:shadow-xl transition-all duration-300`}>
                    
                    {/* EFECTO DE LUZ PARA MARÍA */}
                    {comparison.isMarIA && (
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 via-transparent to-white/10 rounded-2xl opacity-0 group-hover/comparison:opacity-100 blur transition duration-500"></div>
                    )}
                    
                    <div className="relative">
                      <h4 className={`text-xl font-semibold mb-6 pb-4 border-b ${
                        comparison.isMarIA 
                          ? 'text-white border-white/30' 
                          : 'text-[#1C1B3E] border-gray-300/50'
                      }`}>
                        {comparison.title}
                      </h4>
                      <ul className="space-y-4">
                        {comparison.points.map((point, pointIndex) => (
                          <motion.li 
                            key={pointIndex}
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: pointIndex * 0.05 + index * 0.1 }}
                            className="flex items-start group/item"
                          >
                            <div className={`flex-shrink-0 w-2 h-2 rounded-full mr-4 mt-2.5 ${
                              comparison.isMarIA 
                                ? 'bg-white/90' 
                                : 'bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1]'
                            }`}></div>
                            <span className={`text-lg leading-relaxed ${
                              comparison.isMarIA 
                                ? 'text-white/95 group-hover/item:text-white' 
                                : 'text-gray-700 group-hover/item:text-[#1C1B3E]'
                            } transition-colors`}>
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* BADGE PARA MARÍA */}
                    {comparison.isMarIA && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-white text-[#0E7E92] rounded-full text-base font-semibold shadow-lg">
                        Recomendado
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantageSection;