// src/components/maria/sections/OriginSection.tsx
import { motion } from 'framer-motion';

const OriginSection = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Nacimiento en Morelia',
      description: 'Idea concebida como proyecto colaborativo entre especialistas en programación, diseño, narrativa digital y estrategia social.',
      icon: '💡',
      color: 'from-blue-500/20 to-blue-600/10',
      dotColor: 'bg-blue-500'
    },
    {
      year: '2022',
      title: 'Desarrollo del Equipo',
      description: 'Formación del equipo fundador liderado por Pala, con talentos como Adrián, Rodrigo y Yesua.',
      icon: '👥',
      color: 'from-green-500/20 to-green-600/10',
      dotColor: 'bg-green-500'
    },
    {
      year: '2023',
      title: 'Primera Aparición Pública',
      description: 'Presentación en el festival Morelia LAB, demostrando capacidad para conectar con audiencias diversas.',
      icon: '🎪',
      color: 'from-purple-500/20 to-purple-600/10',
      dotColor: 'bg-purple-500'
    },
    {
      year: '2024',
      title: 'Evolución Escalable',
      description: 'Transformación hacia un modelo modular adaptable a múltiples sectores: educación, comercio, política, atención ciudadana.',
      icon: '📈',
      color: 'from-orange-500/20 to-orange-600/10',
      dotColor: 'bg-orange-500'
    }
  ];

  const teamMembers = [
    { name: 'Pala', role: 'Liderazgo & Estrategia', emoji: '👑' },
    { name: 'Adrián', role: 'Arquitectura & Desarrollo', emoji: '👨‍💻' },
    { name: 'Rodrigo', role: 'Diseño & Experiencia', emoji: '🎨' },
    { name: 'Yesua', role: 'Narrativa & Contenido', emoji: '📖' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ENCABEZADO */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1C1B3E] mb-4"
          >
            Un Viaje de <span className="text-[#0E7E92]">3 Años</span> de Innovación
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Desde una idea en Morelia hasta una plataforma escalable con identidad mexicana
          </motion.p>
        </div>

        {/* TIMELINE MEJORADA - DISEÑO MODERNO Y RESPONSIVE */}
        <div className="relative mb-16 md:mb-24">
          {/* LÍNEA CENTRAL - SOLO DESKTOP */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
            {/* LÍNEA CON GRADIENTE ANIMADO */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E7E92] via-[#4DD0E1] to-[#0E7E92]"></div>
            
            {/* EFECTO DE RESPLANDOR */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E7E92]/20 via-[#4DD0E1]/30 to-[#0E7E92]/20 blur-sm"></div>
            
            {/* PUNTOS DE CONEXIÓN */}
            <div className="absolute inset-0 flex flex-col justify-evenly py-12">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="relative left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] border-2 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* LÍNEA VERTICAL PARA MÓVIL */}
          <div className="lg:hidden absolute left-4 sm:left-6 top-0 bottom-0 w-0.5">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E7E92] to-[#4DD0E1]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* HITOS - DISEÑO MEJORADO */}
          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative lg:flex lg:items-center lg:justify-center lg:min-h-[200px]"
              >
                {/* CONTENEDOR PRINCIPAL */}
                <div className={`
                  relative lg:w-5/12 
                  ${index % 2 === 0 ? 'lg:pr-12 lg:mr-auto' : 'lg:pl-12 lg:ml-auto lg:order-last'}
                `}>
                  
                  {/* CARD MODERNA CON DISEÑO TECNOLÓGICO */}
                  <div className="relative group">
                    {/* FONDO CON EFECTO DE PROFUNDIDAD */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/80 rounded-xl sm:rounded-2xl border border-gray-200/60 group-hover:border-[#0E7E92]/40 transition-all duration-300 shadow-sm group-hover:shadow-lg"></div>
                    
                    {/* EFECTO DE ILUMINACIÓN EN HOVER */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0E7E92]/10 via-[#4DD0E1]/5 to-[#0E7E92]/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                    
                    {/* CONTENIDO */}
                    <div className="relative p-4 sm:p-6">
                      {/* CABECERA CON AÑO E ICONO */}
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        {/* CONTENEDOR DE AÑO E ICONO */}
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          {/* PUNTO INDICADOR - MÓVIL */}
                          <div className="lg:hidden relative">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${milestone.dotColor} flex items-center justify-center border-2 border-white shadow-md`}>
                              <span className="text-white text-sm sm:text-base">{milestone.icon}</span>
                            </div>
                            {/* ANILLO ANIMADO */}
                            <motion.div
                              className="absolute -inset-2 rounded-full border-2 border-current"
                              style={{ color: milestone.dotColor.replace('bg-', '') }}
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </div>
                          
                          {/* AÑO CON ESTILO MODERNO */}
                          <div className="relative">
                            <div className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                              Año
                            </div>
                            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#1C1B3E] to-[#0E7E92] bg-clip-text text-transparent">
                              {milestone.year}
                            </div>
                          </div>
                        </div>
                        
                        {/* ICONO PARA DESKTOP */}
                        <div className="hidden lg:block relative">
                          <div className={`w-14 h-14 rounded-xl ${milestone.color} flex items-center justify-center text-2xl border border-white/50 shadow-md`}>
                            {milestone.icon}
                          </div>
                        </div>
                      </div>

                      {/* TÍTULO Y DESCRIPCIÓN */}
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-[#1C1B3E] leading-tight">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>

                      {/* LÍNEA INFERIOR CON EFECTO */}
                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200/50">
                        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent group-hover:via-[#4DD0E1]/50 transition-all duration-300"></div>
                      </div>
                    </div>

                    {/* CONECTOR PARA MÓVIL */}
                    <div className="lg:hidden absolute -left-12 sm:-left-14 top-6">
                      <div className="w-6 h-0.5 bg-gradient-to-r from-[#0E7E92] to-transparent"></div>
                    </div>
                  </div>

                  {/* CONECTOR PARA DESKTOP */}
                  <div className={`
                    hidden lg:block absolute top-1/2 transform -translate-y-1/2
                    w-12 h-0.5 bg-gradient-to-r from-gray-300/50 to-gray-300/50
                    ${index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}
                  `}>
                    <div className="w-full h-full group-hover:bg-gradient-to-r group-hover:from-[#0E7E92] group-hover:to-[#4DD0E1] transition-all duration-300"></div>
                  </div>
                </div>

                {/* PUNTO CENTRAL PARA DESKTOP */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full ${milestone.dotColor} flex items-center justify-center border-3 border-white shadow-lg`}>
                      <span className="text-white text-sm">{milestone.icon}</span>
                    </div>
                    {/* ANILLO CONCÉNTRICO ANIMADO */}
                    <motion.div
                      className="absolute -inset-3 rounded-full border border-current opacity-20"
                      style={{ color: milestone.dotColor.replace('bg-', '') }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LÍNEAS DE CONEXIÓN HORIZONTALES PARA DESKTOP */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-12">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-0.5 bg-gradient-to-r from-gray-300/30 to-gray-300/30"
                style={{ top: `${25 + i * 25}%` }}
                animate={{
                  background: [
                    'linear-gradient(to right, rgba(14, 126, 146, 0.3), rgba(77, 208, 225, 0.3))',
                    'linear-gradient(to right, rgba(14, 126, 146, 0.5), rgba(77, 208, 225, 0.5))',
                    'linear-gradient(to right, rgba(14, 126, 146, 0.3), rgba(77, 208, 225, 0.3))'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>

        {/* EQUIPO FUNDADOR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0E7E92]/5 to-[#4DD0E1]/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200/50"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-light text-[#1C1B3E] mb-2 sm:mb-3">
              Equipo Fundador
            </h3>
            <p className="text-gray-600 text-base sm:text-lg">
              Especialistas multidisciplinarios que combinaron ingeniería con sensibilidad cultural
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200/60 hover:border-[#0E7E92]/30 transition-colors duration-300 text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] flex items-center justify-center mx-auto mb-3 sm:mb-4 border-2 sm:border-3 border-white shadow-md">
                  <span className="text-xl sm:text-2xl md:text-3xl">{member.emoji}</span>
                </div>
                <h4 className="font-semibold text-[#1C1B3E] text-sm sm:text-base md:text-lg">{member.name}</h4>
                <p className="text-gray-600 text-xs sm:text-sm md:text-lg mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EVOLUCIÓN FUTURA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1] text-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-xl sm:text-2xl">🚀</span>
            <span className="font-medium text-sm sm:text-base md:text-lg">
              Evolución continua hacia nuevos mercados y sectores
            </span>
          </div>
          <p className="mt-4 sm:mt-6 md:mt-8 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            MarIA continúa evolucionando, manteniendo su esencia mexicana mientras
            se adapta a las necesidades de educación, comercio, atención ciudadana y más.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginSection;