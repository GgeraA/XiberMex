// src/components/maria/sections/VisionSection.tsx
import { motion } from 'framer-motion';

const VisionSection = () => {
  const visionMilestones = [
    {
      year: '2026',
      title: 'Líder en México',
      description: 'Consolidación como la compañera educativa digital más confiable para familias mexicanas.',
      icon: '👑',
      metrics: ['500K usuarios', '5K escuelas', '95% satisfacción']
    },
    {
      year: '2028',
      title: 'Expansión Latinoamericana',
      description: 'Adaptación cultural para mercados de Colombia, Argentina y Chile manteniendo esencia mexicana.',
      icon: '🌎',
      metrics: ['3 países', '4M usuarios', 'Alianzas regionales']
    },
    {
      year: '2030',
      title: 'Ecosistema Completo',
      description: 'Plataforma integral con hardware dedicado, contenido premium y comunidad activa.',
      icon: '🚀',
      metrics: ['10+ productos', 'Community features', 'Hardware educativo']
    },
    {
      year: '2032',
      title: 'Transformación Educativa',
      description: 'Referente global en educación infantil digital con valores y tecnología humanizada.',
      icon: '🎯',
      metrics: ['10M niños impactados', 'Reconocimiento UNESCO', 'Modelo replicado']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
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
            className="h-1 bg-gradient-to-r from-[#0E7E92] via-[#4DD0E1] to-[#0E7E92] mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            MarIA no es solo una aplicación: es un ecosistema educativo digital que busca transformar 
            la manera en que los niños aprenden y se relacionan con la tecnología.
          </motion.p>
        </div>

        {/* VISIÓN PRINCIPAL - DISEÑO MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group mb-20"
        >
          {/* FONDO CON EFECTO DE LUZ */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0E7E92] via-[#4DD0E1] to-[#0E7E92] rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
          
          {/* CONTENEDOR PRINCIPAL */}
          <div className="relative bg-gradient-to-r from-[#0E7E92] to-[#00838F] rounded-2xl border-2 border-[#0E7E92]/30 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
            
            {/* EFECTO DE PATRÓN SUTIL */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* TEXTO DE ASPIRACIÓN */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-light group-hover:text-white transition-colors">
                    Nuestra <span className="font-bold">Aspiración</span>
                  </h3>
                  <p className="text-white/95 text-lg leading-relaxed">
                    Convertirnos en la compañera educativa más confiable y culturalmente relevante 
                    para las familias en México y más allá, donde la tecnología no solo informa, 
                    sino que educa con amor, transmite valores y abre caminos hacia una niñez 
                    más plena y con propósito.
                  </p>
                </div>
                
                {/* MÉTRICA DESTACADA */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 group-hover:border-white/30 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-center mb-3 group-hover:scale-105 transition-transform duration-300">
                    10M+
                  </div>
                  <div className="text-center text-white/90 text-lg mb-6">
                    Niños impactados para 2030
                  </div>
                  
                  {/* BARRA DE PROGRESO */}
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '65%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                      className="h-full relative"
                    >
                      {/* GRADIENTE ANIMADO */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white via-[#4DD0E1] to-white animate-shimmer bg-[length:200%_100%]"></div>
                      
                      {/* EFECTO DE RESPLANDOR */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 blur-sm"></div>
                    </motion.div>
                  </div>
                  
                  {/* TEXTO DE PROGRESO */}
                  <div className="text-center text-white/70 text-sm mt-3">
                    Progreso hacia meta: 65%
                  </div>
                </div>
              </div>
              
              {/* DECORACIÓN INFERIOR */}
              <div className="flex justify-center mt-10 pt-8 border-t border-white/20">
                <div className="flex space-x-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-white/60"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ROADMAP VISUAL - DISEÑO MEJORADO */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-light text-[#1C1B3E] mb-12 text-center">
            Camino hacia el <span className="text-[#0E7E92]">Liderazgo</span>
          </h3>
          
          <div className="relative">
            {/* LÍNEA DE TIEMPO CON EFECTO */}
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-2 bg-gradient-to-r from-[#0E7E92] via-[#4DD0E1] to-[#0E7E92] transform -translate-y-1/2 rounded-full shadow-lg"></div>
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2 rounded-full blur-sm"></div>
            
            {/* CONECTORES MÓVIL */}
            <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0E7E92] to-[#4DD0E1] transform -translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {visionMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 90 
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  {/* CARD DE MILESTONE */}
                  <div className="relative h-full">
                    {/* FONDO CON EFECTO */}
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0E7E92]/20 to-[#4DD0E1]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                    
                    <div className="relative h-full bg-gradient-to-br from-white to-gray-50/90 rounded-2xl p-7 border-2 border-gray-200/80 group-hover:border-[#0E7E92]/40 transition-all duration-300 shadow-lg group-hover:shadow-xl overflow-hidden">
                      
                      {/* AÑO CON DISEÑO MEJORADO */}
                      <div className="relative mb-7">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-100 border-4 border-[#0E7E92] flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 group-hover:border-[#4DD0E1] transition-all duration-300">
                          <span className="text-3xl font-bold bg-gradient-to-r from-[#0E7E92] to-[#4DD0E1] bg-clip-text text-transparent">
                            {milestone.year}
                          </span>
                        </div>
                        {/* RESPLANDOR DEL AÑO */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0E7E92]/10 to-transparent opacity-0 group-hover:opacity-100 blur transition duration-500 scale-125"></div>
                      </div>
                      
                      {/* CONTENIDO */}
                      <div className="text-center space-y-6">
                        {/* ÍCONO */}
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {milestone.icon}
                        </div>
                        
                        {/* TÍTULO */}
                        <h4 className="text-xl font-semibold text-[#1C1B3E] group-hover:text-[#0E7E92] transition-colors">
                          {milestone.title}
                        </h4>
                        
                        {/* DESCRIPCIÓN */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {milestone.description}
                        </p>
                        
                        {/* MÉTRICAS */}
                        <div className="space-y-3 pt-6 border-t border-gray-200/60">
                          {milestone.metrics.map((metric, metricIndex) => (
                            <motion.div
                              key={metricIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: metricIndex * 0.1 + index * 0.1 }}
                              className="px-4 py-2.5 bg-gradient-to-r from-gray-100/80 to-gray-50/80 text-gray-700 rounded-full text-lg border border-gray-300/50 group-hover:border-gray-400/50 transition-colors group-hover:text-[#1C1B3E]"
                            >
                              {metric}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* EFECTO INFERIOR */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200/30 to-transparent group-hover:via-[#4DD0E1]/30 transition-all duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* VALOR DIFERENCIAL FINAL - DISEÑO MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative">
            {/* FONDO CON EFECTO */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0E7E92]/20 via-[#4DD0E1]/10 to-[#0E7E92]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
            
            {/* CARD PRINCIPAL */}
            <div className="relative bg-gradient-to-br from-white to-gray-50/90 rounded-2xl p-8 md:p-10 border-2 border-gray-200/80 group-hover:border-[#0E7E92]/30 transition-all duration-300 shadow-lg group-hover:shadow-xl text-center">
              
              {/* ÍCONO */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💫
              </div>
              
              {/* TÍTULO */}
              <h4 className="text-2xl font-semibold text-[#1C1B3E] mb-6 group-hover:text-[#0E7E92] transition-colors">
                Tecnología con Rostro Humano
              </h4>
              
              {/* DESCRIPCIÓN */}
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Donde cada línea de código tiene un propósito educativo, cada interacción 
                construye valores, y cada niño descubre su potencial a través de una 
                tecnología que habla su idioma, conoce su cultura y cree en su futuro.
              </p>
              
              {/* DECORACIÓN INFERIOR */}
              <div className="mt-8 pt-6 border-t border-gray-200/60">
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                      className="w-1 h-6 bg-gradient-to-b from-[#0E7E92] to-[#4DD0E1] rounded-full opacity-50"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;