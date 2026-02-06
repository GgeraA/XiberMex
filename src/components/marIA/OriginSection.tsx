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
      <div className="max-w-6xl mx-auto px-6">
        
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

        {/* TIMELINE */}
        <div className="relative mb-20">
          {/* LÍNEA CENTRAL */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0E7E92] to-[#4DD0E1]"></div>
          
          {/* HITOS */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* CONTENIDO DEL HITO */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'
                }`}>
                  <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full ${milestone.color} mb-4`}>
                    <span className="text-xl">{milestone.icon}</span>
                    <span className="font-semibold">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C1B3E] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">
                    {milestone.description}
                  </p>
                </div>

                {/* PUNTO EN LA LÍNEA */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-[#0E7E92] rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EQUIPO FUNDADOR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0E7E92]/5 to-[#4DD0E1]/5 rounded-2xl p-8"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-light text-[#1C1B3E] mb-2">
              Equipo Fundador
            </h3>
            <p className="text-gray-600">
              Especialistas multidisciplinarios que combinaron ingeniería con sensibilidad cultural
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0E7E92] to-[#4DD0E1] flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{member.emoji}</span>
                </div>
                <h4 className="font-semibold text-[#1C1B3E]">{member.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EVOLUCIÓN FUTURA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-full bg-[#0E7E92] text-white">
            <span className="text-xl">🚀</span>
            <span className="font-medium">Evolución continua hacia nuevos mercados y sectores</span>
          </div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            MarIA continúa evolucionando, manteniendo su esencia mexicana mientras 
            se adapta a las necesidades de educación, comercio, atención ciudadana y más.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OriginSection;