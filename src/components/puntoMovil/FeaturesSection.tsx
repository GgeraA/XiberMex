// src/components/puntomovil/sections/FeaturesSection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    /*{
      title: 'Cobro con QR y Medios Digitales',
      description: 'Acepta pagos con QR, tarjetas y transferencias desde cualquier dispositivo móvil.',
      icon: '📱',
      details: [
        'Generación de códigos QR dinámicos',
        'Integración con múltiples pasarelas de pago',
        'Soporte para NFC y contactless',
        'Confirmación instantánea de transacciones'
      ],
      color: 'from-[#2E7D32] to-[#4CAF50]'
    },*/
    {
      title: 'Tickets y Comprobantes Electrónicos',
      description: 'Genera tickets profesionales y comprobantes fiscales digitales automáticamente.',
      icon: '🧾',
      details: [
        'Formatos personalizables',
        'Almacenamiento en la nube',
        'Envío automático por correo/SMS',
        'Cumplimiento SAT'
      ],
      color: 'from-[#00BCD4] to-[#26A69A]'
    },
    {
      title: 'Control de Inventario Básico',
      description: 'Gestiona tu stock, recibe alertas y sincroniza múltiples ubicaciones.',
      icon: '📦',
      details: [
        'Registro de productos desde el smartphone',
        'Genera código de barras y/o QR',
        'Alertas de stock bajo',
        'Sincronización en tiempo real'
      ],
      color: 'from-[#8BC34A] to-[#AED581]'
    },
    {
      title: 'Reportes en Tiempo Real',
      description: 'Monitorea tus ventas, ingresos y métricas clave desde cualquier lugar.',
      icon: '📊',
      details: [
        'Dashboard interactivo',
        'Gráficos y estadísticas',
        'Exportación a Excel/PDF',
        'Análisis por periodo'
      ],
      color: 'from-[#4CAF50] to-[#2E7D32]'
    },
    {
      title: 'Campañas y Fidelización',
      description: 'Crea promociones, programas de lealtad y conecta con tus clientes.',
      icon: '🎯',
      details: [
        'Cupones digitales',
        'Programas de puntos',
        'Marketing por SMS/Email',
        'Análisis de clientes frecuentes'
      ],
      color: 'from-[#26A69A] to-[#00BCD4]'
    },
    /*{
      title: 'Seguridad Bancaria',
      description: 'Protección de transacciones con los más altos estándares de seguridad.',
      icon: '🛡️',
      details: [
        'Encriptación end-to-end',
        'Certificación PCI DSS',
        'Autenticación biométrica',
        'Backups automáticos'
      ],
      color: 'from-[#212121] to-[#2E7D32]'
    }*/
  ];

  return (
    <section id="caracteristicas" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* ENCABEZADO MEJORADO */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-4xl font-light text-[#212121] mb-4"
          >
            Funciones <span className="text-[#2E7D32] font-semibold bg-gradient-to-r from-[#2E7D32] to-[#8BC34A] bg-clip-text text-transparent">Principales</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '120px' }}
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
            Todo lo que necesitas para gestionar tu negocio desde tu teléfono, con la seguridad 
            y profesionalismo de un sistema tradicional.
          </motion.p>
        </div>

        {/* SELECTOR DE FUNCIONES PARA MÓVIL - MEJORADO */}
        <div className="md:hidden mb-8 relative">
          <div className="relative">
            <select
              value={activeFeature}
              onChange={(e) => setActiveFeature(Number(e.target.value))}
              className="w-full px-5 py-3.5 text-lg rounded-xl border-2 border-gray-300/80 bg-white text-[#212121] font-medium focus:border-[#2E7D32] focus:ring-4 focus:ring-[#2E7D32]/10 outline-none transition-all appearance-none"
            >
              {features.map((feature, index) => (
                <option key={index} value={index}>
                  {feature.title}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <span className="text-gray-600 text-lg">▼</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* LISTA DE FUNCIONES - LADO IZQUIERDO MEJORADO */}
          <div className="lg:col-span-1">
            <div className="hidden md:block space-y-3">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 relative group ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-[#2E7D32] to-[#8BC34A] text-white shadow-xl'
                      : 'bg-gradient-to-br from-gray-50 to-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200/70 hover:border-[#8BC34A]/40'
                  }`}
                > 
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeFeature === index 
                        ? 'bg-white/20' 
                        : 'bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-300/50'
                    }`}>
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <span className="font-medium text-lg">{feature.title}</span>
                  </div>
                  
                  {/* EFECTO DE LÍNEA EN HOVER */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-white to-[#8BC34A]' 
                      : 'bg-gradient-to-r from-transparent via-gray-300/50 to-transparent group-hover:via-[#8BC34A]'
                  }`}></div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* DETALLE DE LA FUNCIÓN - LADO DERECHO MEJORADO */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative h-full"
            >
              {/* FONDO CON EFECTO */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#2E7D32]/10 via-[#8BC34A]/5 to-[#00BCD4]/5 rounded-2xl opacity-0 hover:opacity-100 blur transition duration-500"></div>
              
              {/* CARD PRINCIPAL */}
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50/90 rounded-2xl p-8 border-2 border-gray-200/80 hover:border-[#8BC34A]/30 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden">
                
                {/* EFECTO DE LÍNEA SUPERIOR */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2E7D32] via-[#8BC34A] to-[#00BCD4] rounded-t-2xl"></div>
                
                <div className="flex items-start space-x-8 mb-10">
                  <div className="relative">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center flex-shrink-0 shadow-lg border-2 border-white/50`}>
                      <span className="text-4xl">{features[activeFeature].icon}</span>
                    </div>
                    {/* RESPLANDOR DEL ICONO */}
                    <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br opacity-0 hover:opacity-20 blur transition duration-500"></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#212121] mb-4">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {features[activeFeature].description}
                    </p>
                  </div>
                </div>

                {/* DETALLES MEJORADOS */}
                <div className="grid md:grid-cols-2 gap-5 mb-10">
                  {features[activeFeature].details.map((detail, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-5 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200/70 hover:border-[#8BC34A]/40 transition-all duration-300 group/detail"
                    >
                      <div className="relative flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-[#8BC34A]/10 flex items-center justify-center group-hover/detail:scale-110 transition-transform duration-300">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#8BC34A]"></div>
                        </div>
                        {/* ANILLO DE RESPLANDOR */}
                        <div className="absolute -inset-2 rounded-full bg-[#8BC34A]/5 opacity-0 group-hover/detail:opacity-100 transition duration-300"></div>
                      </div>
                      <span className="text-gray-700 text-lg pt-1.5">{detail}</span>
                    </motion.div>
                  ))}
                </div>

                {/* EJEMPLO VISUAL MEJORADO */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-10 border-t border-gray-200/60"
                >
                  <h4 className="text-xl font-semibold text-[#212121] mb-8 pb-3 border-b border-gray-200/40">
                    Así funciona en la práctica:
                  </h4>
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200/70">
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                      {[
                        { step: '1', label: 'Escanea producto', color: 'from-[#2E7D32] to-[#4CAF50]', icon: '📱' },
                        { step: '2', label: 'Genera ticket', color: 'from-[#8BC34A] to-[#AED581]', icon: '🧾' },
                        { step: '3', label: 'Procesa pago', color: 'from-[#00BCD4] to-[#26A69A]', icon: '💳' },
                        { step: '4', label: 'Actualiza inventario', color: 'from-[#26A69A] to-[#00BCD4]', icon: '📦' }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="text-center group/step"
                          whileHover={{ y: -5, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white mx-auto mb-3 shadow-lg group-hover/step:shadow-xl transition-shadow duration-300`}>
                            <span className="text-2xl font-bold">{item.step}</span>
                            {/* ICONO FLOTANTE */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-md">
                              <span className="text-sm">{item.icon}</span>
                            </div>
                          </div>
                          <span className="text-gray-700 text-lg font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;