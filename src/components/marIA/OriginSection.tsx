// src/components/maria/sections/OriginSection.tsx
import { motion } from 'framer-motion';

const OriginSection = () => {
  const milestones = [
    {
      year: '2021',
      title: 'Nacimiento en Morelia',
      description: 'Idea concebida como proyecto colaborativo entre especialistas en programación, diseño, narrativa digital y estrategia social.',
      icon: '💡',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      year: '2022',
      title: 'Desarrollo del Equipo',
      description: 'Formación del equipo fundador liderado por Pala, con talentos como Adrián, Rodrigo y Yesua.',
      icon: '👥',
      color: 'bg-green-100 text-green-600'
    },
    {
      year: '2023',
      title: 'Primera Aparición Pública',
      description: 'Presentación en el festival Morelia LAB, demostrando capacidad para conectar con audiencias diversas.',
      icon: '🎪',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      year: '2024',
      title: 'Evolución Escalable',
      description: 'Transformación hacia un modelo modular adaptable a múltiples sectores: educación, comercio, política, atención ciudadana.',
      icon: '📈',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const teamMembers = [
    { name: 'Pala', role: 'Liderazgo & Estrategia', emoji: '👑' },
    { name: 'Adrián', role: 'Arquitectura & Desarrollo', emoji: '👨‍💻' },
    { name: 'Rodrigo', role: 'Diseño & Experiencia', emoji: '🎨' },
    { name: 'Yesua', role: 'Narrativa & Contenido', emoji: '📖' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#1C1B3E] mb-4"
          >
            Un Viaje de <span className="text-[#0E7E92]">3 Años</span> de Innovación
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Desde una idea en Morelia hasta una plataforma escalable con identidad mexicana
          </motion.p>
        </div>

        {/* TIMELINE TECNOLÓGICA - DISEÑO MODERNO */}
        <div className="relative mb-24">
          {/* LÍNEA CENTRAL CON EFECTO TECNOLÓGICO */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            {/* LÍNEA PRINCIPAL CON GRADIENTE Y ANIMACIÓN */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E7E92] via-[#4DD0E1] to-[#0E7E92] animate-pulse-glow"></div>

            {/* EFECTO DE RESPLANDOR */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E7E92]/20 via-[#4DD0E1]/30 to-[#0E7E92]/20 blur-sm"></div>

            {/* PUNTOS CONECTADOS */}
            <div className="absolute inset-0 flex flex-col justify-between py-20">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="relative left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CONECTORES EN MÓVIL */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0E7E92] to-[#4DD0E1]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* HITOS - DISEÑO TECNOLÓGICO */}
          <div className="space-y-8 lg:space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative lg:flex lg:items-center lg:justify-center lg:min-h-[180px]"
              >
                {/* CONTENEDOR DEL HITO */}
                <div className={`
          relative lg:w-5/12 
          ${index % 2 === 0 ? 'lg:pr-12 lg:mr-auto' : 'lg:pl-12 lg:ml-auto lg:order-last'}
        `}>
                  {/* TARJETA TECNOLÓGICA */}
                  <div className="relative group">
                    {/* FONDO CON EFECTO TECNOLÓGICO */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl border-2 border-gray-200/80 group-hover:border-[#0E7E92]/40 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-[#0E7E92]/10"></div>

                    {/* EFECTO DE LUZ EN EL BORDE */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0E7E92] via-[#4DD0E1] to-[#0E7E92] rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>

                    {/* CONTENIDO */}
                    <div className="relative p-6 lg:p-8">
                      {/* CABECERA TECNOLÓGICA */}
                      <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-200/60">
                        <div className="flex items-center space-x-4">
                          {/* ÍCONO CON EFECTO 3D */}
                          <div className="relative">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg ${milestone.color} border-2 border-white/80`}>
                              {milestone.icon}
                            </div>
                            {/* EFECTO DE PROFUNDIDAD */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-50"></div>
                          </div>

                          {/* AÑO CON ESTILO TECNOLÓGICO */}
                          <div>
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                              Año
                            </div>
                            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#1C1B3E] to-[#0E7E92] bg-clip-text text-transparent">
                              {milestone.year}
                            </div>
                          </div>
                        </div>

                        {/* INDICADOR DE POSICIÓN */}
                        <div className={`
                  hidden lg:flex items-center justify-center w-12 h-12 rounded-full 
                  bg-gradient-to-br from-white to-gray-100 border-2 border-gray-300
                  shadow-inner
                  ${index % 2 === 0 ? 'lg:-mr-14' : 'lg:-ml-14'}
                `}>
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1]"></div>
                        </div>
                      </div>

                      {/* CONTENIDO PRINCIPAL */}
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-[#1C1B3E] mb-4">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>

                      {/* LÍNEA INFERIOR ANIMADA */}
                      <div className="mt-6 pt-6 border-t border-gray-200/60">
                        <div className="w-full h-1 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent group-hover:from-[#0E7E92] group-hover:via-[#4DD0E1] group-hover:to-[#0E7E92] transition-all duration-500"></div>
                      </div>
                    </div>

                    {/* INDICADOR MÓVIL */}
                    <div className={`
              absolute -left-10 top-1/2 transform -translate-y-1/2
              lg:hidden flex items-center justify-center
            `}>
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] flex items-center justify-center border-4 border-white shadow-lg">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        {/* RESPLANDOR */}
                        <div className="absolute inset-0 rounded-full bg-[#0E7E92] blur-md opacity-30"></div>
                      </div>
                    </div>
                  </div>

                  {/* CONECTOR EN DESKTOP */}
                  <div className={`
            hidden lg:block absolute top-1/2 transform -translate-y-1/2
            w-12 h-1 bg-gradient-to-r from-gray-300/50 to-gray-300/50
            ${index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}
          `}>
                    <div className="w-full h-full group-hover:bg-gradient-to-r group-hover:from-[#0E7E92] group-hover:to-[#4DD0E1] transition-all duration-500"></div>
                  </div>
                </div>

                {/* PUNTO CENTRAL EN DESKTOP */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    {/* ANILLOS CONCÉNTRICOS */}
                    <div className="absolute inset-0 animate-ping">
                      <div className="w-8 h-8 rounded-full border-4 border-[#0E7E92]/30"></div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] border-4 border-white shadow-xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DECORACIÓN INFERIOR */}
          <div className="hidden lg:flex justify-center mt-12 space-x-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, delay: i * 0.3, repeat: Infinity }}
                className="w-1 h-12 bg-gradient-to-b from-transparent via-[#0E7E92]/30 to-transparent"
              />
            ))}
          </div>
        </div>

        {/* EQUIPO FUNDADOR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0E7E92]/5 to-[#4DD0E1]/5 rounded-2xl p-6 md:p-8 border-2 border-gray-100"
        >
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl font-light text-[#1C1B3E] mb-3">
              Equipo Fundador
            </h3>
            <p className="text-gray-600 text-lg">
              Especialistas multidisciplinarios que combinaron ingeniería con sensibilidad cultural
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 md:p-5 border-2 border-gray-100 hover:border-[#0E7E92]/30 transition-colors duration-300 text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] flex items-center justify-center mx-auto mb-4 border-3 border-white shadow-md">
                  <span className="text-2xl md:text-3xl">{member.emoji}</span>
                </div>
                <h4 className="font-semibold text-[#1C1B3E] text-lg">{member.name}</h4>
                <p className="text-gray-600 mt-1 text-lg">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EVOLUCIÓN FUTURA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center space-x-3 px-6 py-4 rounded-full bg-[#0E7E92] text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <span className="text-2xl">🚀</span>
            <span className="font-medium text-lg">Evolución continua hacia nuevos mercados y sectores</span>
          </div>
          <p className="mt-6 md:mt-8 text-gray-600 text-lg max-w-2xl mx-auto">
            MarIA continúa evolucionando, manteniendo su esencia mexicana mientras
            se adapta a las necesidades de educación, comercio, atención ciudadana y más.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginSection;