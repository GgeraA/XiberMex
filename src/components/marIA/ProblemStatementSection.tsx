// src/components/maria/sections/ProblemStatementSection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const ProblemStatementSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const problems = [
    {
      title: 'Desconexión Cultural',
      description: 'La mayoría de herramientas educativas digitales carecen de identidad cultural mexicana, creando una brecha entre tradición y tecnología.',
      icon: '🌎',
      stat: '85%',
      statText: 'Sin identidad local',
      gradient: 'from-[#0E7E92] to-[#4DD0E1]'
    },
    {
      title: 'Seguridad Digital',
      description: 'Falta de plataformas educativas seguras diseñadas específicamente para niños, con protección de datos y contenido apropiado.',
      icon: '🛡️',
      stat: '70%',
      statText: 'Preocupados por la seguridad',
      gradient: 'from-[#00838F] to-[#0E7E92]'
    },
    {
      title: 'Educación Impersonal',
      description: 'Soluciones genéricas que no se adaptan al ritmo individual ni a las necesidades específicas de cada niño.',
      icon: '📚',
      stat: '1:25',
      statText: 'Ratio atención personal',
      gradient: 'from-[#4DD0E1] to-[#00838F]'
    },
    {
      title: 'Valores en la Tecnología',
      description: 'Ausencia de herramientas que integren valores universales y locales en la experiencia de aprendizaje digital.',
      icon: '❤️',
      stat: '92%',
      statText: 'Buscan valores en educación',
      gradient: 'from-[#0E7E92] to-[#1C1B3E]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ENCABEZADO CON ANIMACIÓN MEJORADA */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-[#1C1B3E] mb-4"
          >
            El Problema que{' '}
            <motion.span 
              className="text-[#0E7E92] relative inline-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Resolvemos
            </motion.span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '120px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-0.5 bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1] mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            En un mundo cada vez más digitalizado, identificamos cuatro brechas críticas en 
            la educación infantil que MarIA está diseñada para cerrar.
          </motion.p>
        </motion.div>

        {/* PROBLEMAS CON ANIMACIONES MEJORADAS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              {/* ELEMENTO DECORATIVO DE FONDO */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${problem.gradient})` }}
              />
              
              {/* CARD PRINCIPAL */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                
                {/* EFECTO DE ILUMINACIÓN EN HOVER */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0E7E92] to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ 
                    scaleX: hoveredCard === index ? 1 : 0,
                    opacity: hoveredCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* ICONO CON ANIMACIÓN */}
                <div className="flex items-start justify-between mb-8">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="relative"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center shadow-lg`}>
                      <motion.span 
                        className="text-4xl"
                        animate={hoveredCard === index ? { 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {problem.icon}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* ESTADÍSTICA CON ANIMACIÓN */}
                  <motion.div
                    className="text-right"
                  >
                    <motion.div 
                      className="text-4xl font-bold bg-gradient-to-r bg-clip-text text-gray-200"
                      style={{ backgroundImage: `linear-gradient(to right, ${problem.gradient})` }}
                      animate={hoveredCard === index ? { 
                        scale: [1, 1.05, 1],
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {problem.stat}
                    </motion.div>
                    <motion.div
                      className="text-sm text-gray-500 mt-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {problem.statText}
                    </motion.div>
                  </motion.div>
                </div>

                {/* CONTENIDO */}
                <motion.h3
                  className="text-2xl font-semibold text-[#1C1B3E] mb-4"
                  animate={hoveredCard === index ? { 
                    color: '#0E7E92'
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {problem.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-600 leading-relaxed text-lg"
                  animate={hoveredCard === index ? { 
                    paddingLeft: '1rem',
                    borderLeft: '3px solid #4DD0E1'
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {problem.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SOLUCIÓN MARIA CON ANIMACIONES MEJORADAS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* EFECTO DE PARTÍCULAS EN FONDO */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 60 + 20}px`,
                  height: `${Math.random() * 60 + 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* GRADIENTE ANIMADO */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#0E7E92] via-[#00838F] to-[#0E7E92]"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          />

          <div className="relative p-8 md:p-12 lg:p-16 text-white">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl md:text-4xl font-light mb-6">
                  La{' '}
                  <motion.span 
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#4DD0E1]"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    Solución MarIA
                  </motion.span>
                </h3>
                <motion.p
                  className="text-white/90 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Nace como respuesta a estas brechas, combinando tecnología de vanguardia con 
                  identidad cultural mexicana para crear una experiencia educativa segura, 
                  personalizada y culturalmente relevante.
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { label: 'Identidad Cultural', value: '100%' },
                  { label: 'Seguridad Infantil', value: 'Prioridad'},
                  { label: 'Personalización', value: 'Adaptativa' },
                  { label: 'Valores Integrados', value: 'Esencial'}
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.15)'
                    }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    <motion.div
                      className="text-3xl mb-3"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                    </motion.div>
                    <motion.div
                      className="text-2xl font-bold mb-2"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    >
                      {item.value}
                    </motion.div>
                    <div className="text-sm text-white/80">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatementSection;