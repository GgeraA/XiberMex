// src/components/puntomovil/sections/CTASection.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      businessType: '',
      message: ''
    });
  };

  const contactOptions = [
    {
      title: 'Soporte Técnico',
      description: 'Ayuda con la demo, instalación o problemas técnicos.',
      icon: '🔧',
      contact: 'soporte@puntomovil.com',
      color: 'bg-[#00BCD4]'
    },
    {
      title: 'Ventas',
      description: 'Cotizaciones, planes empresariales y licenciamiento.',
      icon: '💰',
      contact: 'ventas@puntomovil.com',
      color: 'bg-[#2E7D32]'
    },
    {
      title: 'Desarrollo',
      description: 'Integraciones personalizadas y desarrollo a medida.',
      icon: '👨‍💻',
      contact: 'desarrollo@puntomovil.com',
      color: 'bg-[#8BC34A]'
    }
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
            className="text-3xl md:text-4xl font-light text-[#212121] mb-4"
          >
            Comienza tu <span className="text-[#2E7D32]">Transformación Digital</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '140px' }}
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
            ¿Listo para llevar tu negocio al siguiente nivel? Completa el formulario y nos pondremos 
            en contacto contigo en menos de 24 horas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* FORMULARIO DE CONTACTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#212121] mb-6">
                Solicita Información
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 outline-none transition-all"
                      placeholder="tu@negocio.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 outline-none transition-all"
                      placeholder="55 1234 5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de negocio *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 outline-none transition-all"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="comerciante">Comerciante independiente</option>
                      <option value="pyme">PYME o negocio pequeño</option>
                      <option value="emprendedor">Emprendedor</option>
                      <option value="ecommerce">Vendedor E-commerce</option>
                      <option value="empresa">Empresa establecida</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ¿En qué podemos ayudarte? *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-[#2E7D32] border-gray-300 rounded focus:ring-[#2E7D32]"
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    Deseo recibir información sobre actualizaciones y tips para mi negocio
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-[#2E7D32] to-[#00BCD4] text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Enviar Solicitud
                </motion.button>
              </form>

              <p className="mt-4 text-center text-sm text-gray-500">
                Te contactaremos en menos de 24 horas hábiles. No compartimos tu información.
              </p>
            </div>
          </motion.div>

          {/* INFORMACIÓN DE CONTACTO */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* OPCIONES DE CONTACTO */}
            <div>
              <h3 className="text-2xl font-semibold text-[#212121] mb-6">
                Otras formas de contactarnos
              </h3>
              
              <div className="space-y-4">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl border border-gray-200 hover:border-[#2E7D32] transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-full ${option.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xl text-white">{option.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#212121]">{option.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{option.description}</p>
                      <a href={`mailto:${option.contact}`} className="text-[#2E7D32] hover:underline font-medium">
                        {option.contact}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* INFORMACIÓN ADICIONAL */}
            <div className="bg-gradient-to-r from-[#2E7D32]/5 to-[#00BCD4]/5 rounded-2xl p-6">
              <h4 className="font-semibold text-[#212121] mb-4">
                📞 ¿Prefieres llamarnos?
              </h4>
              <p className="text-gray-600 mb-4">
                Nuestro equipo está disponible de lunes a viernes de 9:00 AM a 6:00 PM.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center">
                  <span className="text-white">📞</span>
                </div>
                <a href="tel:+525512345678" className="text-xl font-bold text-[#212121] hover:text-[#2E7D32]">
                  +52 55 1234 5678
                </a>
              </div>
            </div>

            {/* PROYECTO XIBERMEX */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-[#212121]">Punto Móvil</h4>
                  <p className="text-gray-600 text-sm">Una solución de XIBERMEX</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm">Estrategias Tecnológicas</p>
                  <a href="/" className="text-[#2E7D32] hover:underline font-medium">
                    Volver al inicio
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;