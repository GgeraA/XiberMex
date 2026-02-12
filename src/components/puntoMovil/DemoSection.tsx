// src/components/puntomovil/sections/DemoSection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const DemoSection = () => {
  const demoLink = "https://puntomovil-7635f.web.app/"; 
  const [userType, setUserType] = useState('comerciante');

  const demoSteps = [
    {
      step: 1,
      title: 'Accede a la Demo',
      description: 'Haz clic en el botón de abajo para abrir la demo en tu navegador.',
    },
    {
      step: 2,
      title: 'Explora las Funciones',
      description: 'Prueba el cobro con QR, gestión de inventario y generación de reportes.',
    },
    {
      step: 3,
      title: 'Personaliza para tu Negocio',
      description: 'Configura productos, precios y métodos de pago como lo harías en tu negocio.',
    },
    {
      step: 4,
      title: 'Solicita una Demo Personalizada',
      description: 'Si necesitas características especiales, agenda una sesión con nuestro equipo.',
    }
  ];

  const userTypes = [
    { id: 'comerciante', label: 'Comerciante', icon: '🛒' },
    { id: 'pyme', label: 'PYME', icon: '🏢' },
    { id: 'emprendedor', label: 'Emprendedor', icon: '🚀' },
    { id: 'ecommerce', label: 'E-commerce', icon: '🛍️' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ENCABEZADO MEJORADO */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-light text-[#212121] mb-4"
          >
            Prueba <span className="text-[#2E7D32] font-semibold bg-gradient-to-r from-[#2E7D32] to-[#8BC34A] bg-clip-text text-transparent">Punto Móvil</span> Ahora
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#2E7D32] via-[#8BC34A] to-[#00BCD4] mx-auto mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Experimenta la potencia de nuestro punto de venta móvil sin necesidad de descargar nada. 
            La demo funciona directamente en tu navegador.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA - PASOS DE LA DEMO MEJORADA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100 
            }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#212121] mb-6">
                Selecciona tu tipo de negocio:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {userTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    onClick={() => setUserType(type.id)}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-5 rounded-xl border-2 transition-all duration-300 relative group ${
                      userType === type.id
                        ? 'border-[#2E7D32] bg-gradient-to-br from-[#2E7D32]/10 to-[#8BC34A]/5 shadow-md'
                        : 'border-gray-200/70 hover:border-[#8BC34A]/50 bg-gradient-to-br from-white to-gray-50/90'
                    }`}
                  >
                    {/* INDICADOR DE SELECCIÓN */}
                    {userType === type.id && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#8BC34A] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                    
                    <div className="flex flex-col items-center">
                      <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{type.icon}</span>
                      <span className={`font-medium text-lg ${
                        userType === type.id ? 'text-[#2E7D32]' : 'text-gray-700 group-hover:text-[#2E7D32]'
                      } transition-colors`}>
                        {type.label}
                      </span>
                    </div>
                    
                    {/* EFECTO DE LÍNEA INFERIOR */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-300 ${
                      userType === type.id 
                        ? 'bg-gradient-to-r from-[#2E7D32] to-[#8BC34A]' 
                        : 'bg-gradient-to-r from-transparent via-gray-300/30 to-transparent group-hover:via-[#8BC34A]'
                    }`}></div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* PASOS MEJORADOS */}
            <div className="space-y-6 pt-4">
              {demoSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.5,
                    type: "spring" 
                  }}
                  className="flex items-start space-x-5 group/step"
                >
                  {/* NÚMERO DEL PASO CON EFECTO */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#8BC34A] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover/step:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    {/* ANILLO DE RESPLANDOR */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#2E7D32]/20 to-[#8BC34A]/20 opacity-0 group-hover/step:opacity-100 blur transition duration-300"></div>
                  </div>
                  
                  {/* CONTENIDO DEL PASO */}
                  <div className="pt-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-[#212121] text-lg group-hover/step:text-[#2E7D32] transition-colors">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    
                    {/* INDICADOR DE PROGRESO */}
                    {index < demoSteps.length - 1 && (
                      <div className="absolute -bottom-8 left-7 w-1 h-6 bg-gradient-to-b from-[#8BC34A]/30 to-transparent"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* COLUMNA DERECHA - BOTÓN DE DEMO Y PREVIEW MEJORADO */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100 
            }}
            className="text-center relative"
          >
            {/* FONDO CON EFECTO */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#2E7D32]/10 via-[#8BC34A]/5 to-[#00BCD4]/10 rounded-3xl opacity-0 hover:opacity-100 blur-xl transition duration-500"></div>
            
            {/* DISPOSITIVO SIMULADO MEJORADO */}
            <div className="relative mx-auto max-w-sm mb-12 group/device">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border-2 border-gray-700/50 group-hover/device:border-[#8BC34A]/30 transition-all duration-300">
                {/* BARRA SUPERIOR */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-7 bg-gray-900 rounded-b-2xl border-x-2 border-gray-700/50"></div>
                
                {/* EFECTO DE RESPLANDOR */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#2E7D32]/20 via-[#8BC34A]/10 to-[#00BCD4]/10 rounded-3xl opacity-0 group-hover/device:opacity-100 blur-sm transition duration-500"></div>
                
                {/* PANTALLA DE LA DEMO */}
                <div className="relative bg-gradient-to-br from-[#2E7D32] via-[#4CAF50] to-[#00BCD4] rounded-2xl p-8 overflow-hidden">
                  {/* EFECTO DE SCAN */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    animate={{ y: [0, 200, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="text-white text-center relative z-10">
                    <h3 className="text-2xl font-bold mb-3">Demo</h3>
                    <p className="text-white/90 text-lg mb-8">Prueba todas las funciones en tiempo real</p>
                    
                    {/* SIMULACIÓN DE BOTONES DE LA APP MEJORADA */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {[
                        { icon: '💰', label: 'Cobrar', color: 'from-[#2E7D32] to-[#4CAF50]' },
                        { icon: '📊', label: 'Reportes', color: 'from-[#00BCD4] to-[#26A69A]' },
                        { icon: '📦', label: 'Inventario', color: 'from-[#8BC34A] to-[#AED581]' },
                        { icon: '🧾', label: 'Tickets', color: 'from-[#4CAF50] to-[#2E7D32]' }
                      ].map((button, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -5, scale: 1.05 }}
                          className={`bg-gradient-to-br ${button.color}/30 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300`}
                        >
                          <div className="text-2xl">{button.icon}</div>
                          <div className="text-sm mt-1 font-small">{button.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTÓN HOME MEJORADO */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 rounded-full"></div>
                </div>
              </div>
              
              {/* EFECTOS EXTERNOS DEL DISPOSITIVO */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#8BC34A]/30 to-[#2E7D32]/20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* BOTÓN DE ACCIÓN PRINCIPAL MEJORADO */}
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-12 py-6 rounded-full bg-gradient-to-r from-[#2E7D32] via-[#8BC34A] to-[#00BCD4] text-white font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group/button"
            >
              {/* EFECTO DE LUZ EN HOVER */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700"></div>
              
              Probar Demo Ahora
            </motion.a>

            {/* TEXTO SECUNDARIO */}
            <p className="mt-6 text-gray-600 text-lg">
              No requiere registro • Demo gratuita • Funciona en Chrome, Safari y Firefox
            </p>

            {/* OPCIONES ALTERNATIVAS MEJORADAS */}
            <div className="mt-10 space-y-4">
              <motion.a 
                href="#contacto"
                whileHover={{ x: 5 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 text-[#2E7D32] hover:text-[#1B5E20] font-medium text-lg group/link transition-all duration-300 border border-gray-300/50 hover:border-[#8BC34A]/40"
              >
                <span className="mr-3 text-xl">📅</span>
                Agendar demo personalizada con un especialista
                <svg className="w-5 h-5 ml-3 opacity-0 group-hover/link:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              
              <motion.a 
                href="#caracteristicas"
                whileHover={{ x: 5 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 hover:text-[#2E7D32] font-medium text-lg group/link2 transition-all duration-300 border border-gray-300/50 hover:border-[#8BC34A]/30"
              >
                <span className="mr-3 text-xl">📋</span>
                Ver características técnicas detalladas
                <svg className="w-5 h-5 ml-3 opacity-0 group-hover/link2:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;