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
      <div className="max-w-6xl mx-auto px-6">
        
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
            className="h-px bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1] mx-auto mb-8"
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

        {/* VENTAJAS EN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-b from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#0E7E92] hover:shadow-xl transition-all duration-300">
                
                {/* ICONO Y DESTACADO */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0E7E92]/10 to-[#4DD0E1]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{advantage.icon}</span>
                  </div>
                  <span className="px-3 py-1 bg-[#0E7E92]/10 text-[#0E7E92] rounded-full text-xs font-semibold">
                    {advantage.highlight}
                  </span>
                </div>

                {/* TÍTULO Y DESCRIPCIÓN */}
                <h3 className="text-xl font-semibold text-[#1C1B3E] mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {advantage.description}
                </p>

                {/* CARACTERÍSTICAS */}
                <div className="space-y-2">
                  {advantage.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#4DD0E1] rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COMPARATIVA CON COMPETENCIA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0E7E92]/5 to-[#4DD0E1]/5 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-light text-[#1C1B3E] mb-8 text-center">
            ¿Por qué elegir <span className="font-semibold text-[#0E7E92]">MarIA</span> sobre otras soluciones?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Competidores Internacionales',
                points: ['Genéricos, sin identidad local', 'Precios en dólares', 'Soporte limitado en español', 'Falta de contexto cultural']
              },
              {
                title: 'MarIA',
                points: ['Identidad mexicana auténtica', 'Precios en pesos, accesibles', 'Soporte local 24/7', 'Contexto cultural relevante'],
                isMarIA: true
              },
              {
                title: 'Competidores Locales',
                points: ['Tecnología limitada', 'Escalabilidad reducida', 'Contenido educativo básico', 'Falta de innovación']
              }
            ].map((comparison, index) => (
              <div key={index} className={`rounded-xl p-6 ${
                comparison.isMarIA 
                  ? 'bg-gradient-to-br from-[#0E7E92] to-[#00838F] text-white'
                  : 'bg-white'
              }`}>
                <h4 className={`text-lg font-semibold mb-4 ${
                  comparison.isMarIA ? 'text-white' : 'text-[#1C1B3E]'
                }`}>
                  {comparison.title}
                </h4>
                <ul className="space-y-3">
                  {comparison.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 ${
                        comparison.isMarIA ? 'bg-white' : 'bg-[#4DD0E1]'
                      }`}></div>
                      <span className={comparison.isMarIA ? 'text-white/90' : 'text-gray-700'}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantageSection;