// src/components/maria/sections/ProblemStatementSection.tsx
import { motion } from 'framer-motion';

const ProblemStatementSection = () => {
  const problems = [
    {
      title: 'Desconexión Cultural',
      description: 'La mayoría de herramientas educativas digitales carecen de identidad cultural mexicana, creando una brecha entre tradición y tecnología.',
      icon: '🌎',
      stat: '85%',
      statText: 'sin identidad local'
    },
    {
      title: 'Seguridad Digital',
      description: 'Falta de plataformas educativas seguras diseñadas específicamente para niños, con protección de datos y contenido apropiado.',
      icon: '🛡️',
      stat: '70%',
      statText: 'preocupados por seguridad'
    },
    {
      title: 'Educación Impersonal',
      description: 'Soluciones genéricas que no se adaptan al ritmo individual ni a las necesidades específicas de cada niño.',
      icon: '📚',
      stat: '1:25',
      statText: 'ratio atención personal'
    },
    {
      title: 'Valores en la Tecnología',
      description: 'Ausencia de herramientas que integren valores universales y locales en la experiencia de aprendizaje digital.',
      icon: '❤️',
      stat: '92%',
      statText: 'buscan valores en educación'
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
            className="text-3xl md:text-4xl font-light text-[#1C1B3E] mb-6"
          >
            El Problema que <span className="text-[#0E7E92]">Resolvemos</span>
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
            En un mundo cada vez más digitalizado, identificamos cuatro brechas críticas en la educación infantil que MarIA está diseñada para cerrar.
          </motion.p>
        </div>

        {/* PROBLEMAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* ICONO Y ESTADÍSTICA */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0E7E92]/10 to-[#4DD0E1]/10 flex items-center justify-center">
                  <span className="text-3xl">{problem.icon}</span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#0E7E92]">{problem.stat}</div>
                  <div className="text-sm text-gray-500">{problem.statText}</div>
                </div>
              </div>

              {/* CONTENIDO */}
              <h3 className="text-xl font-semibold text-[#1C1B3E] mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SOLUCIÓN MARIA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0E7E92] to-[#00838F] rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-light mb-4">
                La <span className="font-bold">Solución MarIA</span>
              </h3>
              <p className="text-white/90 leading-relaxed">
                Nace como respuesta a estas brechas, combinando tecnología de vanguardia con 
                identidad cultural mexicana para crear una experiencia educativa segura, 
                personalizada y culturalmente relevante.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Identidad Cultural', value: '100%' },
                { label: 'Seguridad Infantil', value: 'Prioridad' },
                { label: 'Personalización', value: 'Adaptativa' },
                { label: 'Valores Integrados', value: 'Esencial' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold mb-1">{item.value}</div>
                  <div className="text-sm text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;