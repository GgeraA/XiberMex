// src/components/puntomovil/sections/FeaturesSection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
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
    },
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
        'Registro de productos con imágenes',
        'Alertas de stock bajo',
        'Códigos de barras integrados',
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
    {
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
    }
  ];

  return (
    <section id="caracteristicas" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-[#212121] mb-4"
          >
            Funciones <span className="text-[#2E7D32]">Principales</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '120px' }}
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
            Todo lo que necesitas para gestionar tu negocio desde tu teléfono, con la seguridad 
            y profesionalismo de un sistema tradicional.
          </motion.p>
        </div>

        {/* SELECTOR DE FUNCIONES PARA MÓVIL */}
        <div className="md:hidden mb-8">
          <select
            value={activeFeature}
            onChange={(e) => setActiveFeature(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-[#212121] font-medium focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 outline-none"
          >
            {features.map((feature, index) => (
              <option key={index} value={index}>
                {feature.title}
              </option>
            ))}
          </select>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* LISTA DE FUNCIONES - LADO IZQUIERDO */}
          <div className="lg:col-span-1">
            <div className="hidden md:block space-y-2">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-[#2E7D32] to-[#8BC34A] text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="font-medium">{feature.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* DETALLE DE LA FUNCIÓN - LADO DERECHO */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-start space-x-6 mb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-3xl">{features[activeFeature].icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#212121] mb-2">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {features[activeFeature].description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {features[activeFeature].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-gray-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#8BC34A]/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#2E7D32]"></div>
                    </div>
                    <span className="text-gray-700">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* EJEMPLO VISUAL */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-gray-200"
              >
                <h4 className="text-lg font-semibold text-[#212121] mb-4">
                  Así funciona en la práctica:
                </h4>
                <div className="bg-gradient-to-r from-[#2E7D32]/10 to-[#00BCD4]/10 rounded-xl p-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#2E7D32] flex items-center justify-center text-white mx-auto mb-2">
                        <span className="text-xl">1</span>
                      </div>
                      <span className="text-sm text-gray-700">Escanea producto</span>
                    </div>
                    <div className="text-gray-400">→</div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#8BC34A] flex items-center justify-center text-white mx-auto mb-2">
                        <span className="text-xl">2</span>
                      </div>
                      <span className="text-sm text-gray-700">Genera ticket</span>
                    </div>
                    <div className="text-gray-400">→</div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#00BCD4] flex items-center justify-center text-white mx-auto mb-2">
                        <span className="text-xl">3</span>
                      </div>
                      <span className="text-sm text-gray-700">Procesa pago</span>
                    </div>
                    <div className="text-gray-400">→</div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#26A69A] flex items-center justify-center text-white mx-auto mb-2">
                        <span className="text-xl">4</span>
                      </div>
                      <span className="text-sm text-gray-700">Actualiza inventario</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;