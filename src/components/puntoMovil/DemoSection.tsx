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
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#212121] mb-4"
          >
            Prueba <span className="text-[#2E7D32]">Punto Móvil</span> Ahora
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '80px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-px bg-gradient-to-r from-[#2E7D32] to-[#00BCD4] mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Experimenta la potencia de nuestro punto de venta móvil sin necesidad de descargar nada. 
            La demo funciona directamente en tu navegador.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA - PASOS DE LA DEMO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-[#212121] mb-4">
                Selecciona tu tipo de negocio:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {userTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setUserType(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      userType === type.id
                        ? 'border-[#2E7D32] bg-[#2E7D32]/5'
                        : 'border-gray-200 hover:border-[#8BC34A]'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">{type.icon}</span>
                      <span className={`font-medium ${
                        userType === type.id ? 'text-[#2E7D32]' : 'text-gray-700'
                      }`}>
                        {type.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* PASOS */}
            <div className="space-y-6">
              {demoSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#8BC34A] flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-[#212121]">{step.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* COLUMNA DERECHA - BOTÓN DE DEMO Y PREVIEW */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* DISPOSITIVO SIMULADO */}
            <div className="relative mx-auto max-w-sm mb-10">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl">
                {/* BARRA SUPERIOR */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-gray-900 rounded-b-2xl"></div>
                
                {/* PANTALLA DE LA DEMO */}
                <div className="bg-gradient-to-br from-[#2E7D32] to-[#00BCD4] rounded-2xl p-8">
                  <div className="text-white text-center">
                    <div className="text-5xl mb-4"></div>
                    <h3 className="text-2xl font-bold mb-2">Demo Interactiva</h3>
                    <p className="text-white/80 mb-6">Prueba todas las funciones en tiempo real</p>
                    
                    {/* SIMULACIÓN DE BOTONES DE LA APP */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="text-2xl">💰</div>
                        <div className="text-sm mt-1">Cobrar</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="text-2xl">📊</div>
                        <div className="text-sm mt-1">Reportes</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="text-2xl">📦</div>
                        <div className="text-sm mt-1">Inventario</div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3">
                        <div className="text-2xl">🧾</div>
                        <div className="text-sm mt-1">Tickets</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOTÓN HOME */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-400 rounded-full"></div>
              </div>
            </div>

            {/* BOTÓN DE ACCIÓN PRINCIPAL */}
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-[#2E7D32] to-[#00BCD4] text-white font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <span className="mr-3 text-2xl"></span>
              Iniciar Demo Ahora
              <span className="ml-3 text-2xl"></span>
            </motion.a>

            {/* TEXTO SECUNDARIO */}
            <p className="mt-6 text-gray-600 text-sm">
              No requiere registro • Demo gratuita • Funciona en Chrome, Safari y Firefox
            </p>

            {/* OPCIONES ALTERNATIVAS */}
            <div className="mt-8 space-y-3">
              <a href="#contacto" className="block text-[#2E7D32] hover:underline font-medium">
                📅 Agendar demo personalizada con un especialista
              </a>
              <a href="#caracteristicas" className="block text-gray-600 hover:text-[#2E7D32] hover:underline">
                📋 Ver características técnicas detalladas
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;