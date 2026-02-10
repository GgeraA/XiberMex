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
      color: 'from-[#00BCD4] to-[#26A69A]'
    },
    {
      title: 'Ventas',
      description: 'Cotizaciones, planes empresariales y licenciamiento.',
      icon: '💰',
      contact: 'ventas@puntomovil.com',
      color: 'from-[#2E7D32] to-[#4CAF50]'
    },
    {
      title: 'Desarrollo',
      description: 'Integraciones personalizadas y desarrollo a medida.',
      icon: '👨‍💻',
      contact: 'desarrollo@puntomovil.com',
      color: 'from-[#8BC34A] to-[#AED581]'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        
        {/* ENCABEZADO MEJORADO */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-2xl sm:text-3xl md:text-4xl font-light text-[#212121] mb-3 md:mb-4"
          >
            Comienza tu <span className="text-[#2E7D32] font-semibold bg-gradient-to-r from-[#2E7D32] to-[#8BC34A] bg-clip-text text-transparent">Transformación Digital</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '120px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#2E7D32] via-[#8BC34A] to-[#00BCD4] mx-auto mb-4 md:mb-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2"
          >
            ¿Listo para llevar tu negocio al siguiente nivel? Completa el formulario y nos pondremos 
            en contacto contigo en menos de 24 horas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          
          {/* FORMULARIO DE CONTACTO - RESPONSIVE MEJORADO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100 
            }}
            className="relative group"
          >
            {/* FONDO CON EFECTO */}
            <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-br from-[#2E7D32]/10 via-[#8BC34A]/5 to-[#00BCD4]/10 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
            
            {/* CARD DEL FORMULARIO */}
            <div className="relative bg-gradient-to-br from-white to-gray-50/90 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200/60 md:border-2 md:border-gray-200/80 group-hover:border-[#8BC34A]/30 transition-all duration-300 shadow-lg md:shadow-xl group-hover:shadow-xl md:group-hover:shadow-2xl overflow-hidden">
              
              {/* EFECTO DE LÍNEA SUPERIOR */}
              <div className="absolute top-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-[#2E7D32] via-[#8BC34A] to-[#00BCD4] rounded-t-xl md:rounded-t-2xl"></div>
              
              <h3 className="text-xl sm:text-2xl font-semibold text-[#212121] mb-6 md:mb-8 pb-3 md:pb-4 border-b border-gray-200/60">
                Solicita Información
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* NOMBRE Y EMAIL - MEJORADO PARA MÓVIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                  <div className="group/field sm:col-span-1">
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 md:px-5 md:py-3.5 text-base md:text-lg rounded-lg md:rounded-xl border border-gray-300 md:border-2 md:border-gray-300/80 focus:border-[#2E7D32] focus:ring-2 md:focus:ring-4 focus:ring-[#2E7D32]/10 outline-none transition-all bg-white/80 placeholder-gray-400"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="group/field sm:col-span-1">
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-3.5 text-base md:text-lg rounded-lg md:rounded-xl border border-gray-300 md:border-2 md:border-gray-300/80 focus:border-[#2E7D32] focus:ring-2 md:focus:ring-4 focus:ring-[#2E7D32]/10 outline-none transition-all bg-white/80 placeholder-gray-400"
                        placeholder="tu@negocio.com"
                      />
                    </div>
                  </div>
                </div>

                {/* TELÉFONO Y TIPO DE NEGOCIO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
                  <div className="group/field sm:col-span-1">
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-3.5 text-base md:text-lg rounded-lg md:rounded-xl border border-gray-300 md:border-2 md:border-gray-300/80 focus:border-[#2E7D32] focus:ring-2 md:focus:ring-4 focus:ring-[#2E7D32]/10 outline-none transition-all bg-white/80 placeholder-gray-400"
                        placeholder="55 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="group/field sm:col-span-1">
                    <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                      Tipo de negocio *
                    </label>
                    <div className="relative">
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-3.5 text-base md:text-lg rounded-lg md:rounded-xl border border-gray-300 md:border-2 md:border-gray-300/80 focus:border-[#2E7D32] focus:ring-2 md:focus:ring-4 focus:ring-[#2E7D32]/10 outline-none transition-all bg-white/80 appearance-none"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="comerciante">Comerciante independiente</option>
                        <option value="pyme">PYME o negocio pequeño</option>
                        <option value="emprendedor">Emprendedor</option>
                        <option value="ecommerce">Vendedor E-commerce</option>
                        <option value="empresa">Empresa establecida</option>
                        <option value="otro">Otro</option>
                      </select>
                      <div className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <span className="text-gray-600">▼</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MENSAJE */}
                <div className="group/field">
                  <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                    ¿En qué podemos ayudarte? *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 md:px-5 md:py-3.5 text-base md:text-lg rounded-lg md:rounded-xl border border-gray-300 md:border-2 md:border-gray-300/80 focus:border-[#2E7D32] focus:ring-2 md:focus:ring-4 focus:ring-[#2E7D32]/10 outline-none transition-all bg-white/80 placeholder-gray-400 resize-none"
                    placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                  />
                </div>

                {/* NEWSLETTER - MEJORADO PARA MÓVIL */}
                <div className="flex items-start p-3 md:p-4 rounded-lg md:rounded-xl bg-gradient-to-r from-gray-50 to-gray-100/50 border border-gray-300/50">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 md:w-5 md:h-5 text-[#2E7D32] border-gray-400 rounded focus:ring-[#2E7D32]/20 focus:ring-2 md:focus:ring-4 mt-1 flex-shrink-0"
                  />
                  <label htmlFor="newsletter" className="ml-2 md:ml-3 text-gray-700 text-sm md:text-lg">
                    Deseo recibir información sobre actualizaciones y tips para mi negocio
                  </label>
                </div>

                {/* BOTÓN DE ENVÍO - RESPONSIVE */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group/button overflow-hidden"
                >
                  {/* FONDO DEL BOTÓN */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] via-[#8BC34A] to-[#00BCD4] rounded-lg md:rounded-xl"></div>
                  
                  {/* EFECTO DE LUZ EN HOVER */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700"></div>
                  
                  {/* TEXTO DEL BOTÓN */}
                  <div className="relative py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-base md:text-xl text-white shadow-md md:shadow-lg group-hover/button:shadow-lg md:group-hover/button:shadow-xl transition-shadow">
                    Enviar Solicitud
                  </div>
                </motion.button>
              </form>

              <p className="mt-4 md:mt-6 text-center text-gray-500 text-xs md:text-sm lg:text-lg pt-4 md:pt-6 border-t border-gray-200/60">
                Te contactaremos en menos de 24 horas hábiles. No compartimos tu información.
              </p>
            </div>
          </motion.div>

          {/* INFORMACIÓN DE CONTACTO - RESPONSIVE MEJORADO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ 
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100 
            }}
            className="space-y-4 md:space-y-6 lg:space-y-8"
          >
            {/* OPCIONES DE CONTACTO - MEJOR DISTRIBUCIÓN */}
            <div className="relative group">
              {/* FONDO CON EFECTO */}
              <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-br from-[#2E7D32]/10 via-[#8BC34A]/5 to-[#00BCD4]/10 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-white to-gray-50/90 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200/60 md:border-2 md:border-gray-200/80 group-hover:border-[#8BC34A]/30 transition-all duration-300 shadow-lg md:shadow-xl group-hover:shadow-xl md:group-hover:shadow-2xl overflow-hidden">
                
                {/* EFECTO DE LÍNEA SUPERIOR */}
                <div className="absolute top-0 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-[#2E7D32] via-[#8BC34A] to-[#00BCD4] rounded-t-xl md:rounded-t-2xl"></div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#212121] mb-4 md:mb-6 lg:mb-8 pb-3 md:pb-4 border-b border-gray-200/60">
                  Otras formas de contactarnos
                </h3>
                
                <div className="space-y-3 md:space-y-4 lg:space-y-5">
                  {contactOptions.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 3 }}
                      className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl bg-gradient-to-r from-gray-50/80 to-white border border-gray-200/60 md:border-2 md:border-gray-200/70 hover:border-[#8BC34A]/40 transition-all duration-300 group/contact"
                    >
                      <div className={`relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center flex-shrink-0 shadow-md md:shadow-lg group-hover/contact:scale-105 md:group-hover/contact:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}>
                        <span className="text-lg md:text-xl lg:text-2xl text-white">{option.icon}</span>
                      </div>
                      <div className="text-center sm:text-left flex-1 min-w-0">
                        <h4 className="font-semibold text-[#212121] text-base md:text-lg lg:text-xl mb-1 md:mb-2">{option.title}</h4>
                        <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-2 md:mb-3 leading-tight md:leading-relaxed">
                          {option.description}
                        </p>
                        <a 
                          href={`mailto:${option.contact}`} 
                          className="inline-flex items-center justify-center sm:justify-start text-[#2E7D32] hover:text-[#1B5E20] font-medium text-xs md:text-sm lg:text-base group/link transition-colors break-all"
                        >
                          <span className="truncate">{option.contact}</span>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* INFORMACIÓN ADICIONAL - MEJOR DISTRIBUCIÓN */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -3 }}
              className="relative group/info"
            >
              {/* FONDO CON EFECTO */}
              <div className="absolute -inset-0.5 md:-inset-1 bg-gradient-to-br from-[#2E7D32]/10 via-[#8BC34A]/5 to-[#00BCD4]/10 rounded-xl md:rounded-2xl opacity-0 group-hover/info:opacity-100 blur transition duration-500"></div>
              
              <div className="relative bg-gradient-to-r from-[#2E7D32]/5 to-[#00BCD4]/5 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200/60 md:border-2 md:border-gray-200/70 group-hover/info:border-[#8BC34A]/40 transition-all duration-300 shadow-lg md:shadow-xl group-hover/info:shadow-xl md:group-hover/info:shadow-2xl overflow-hidden">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#2E7D32] to-[#8BC34A] flex items-center justify-center shadow-md md:shadow-lg group-hover/info:scale-105 md:group-hover/info:scale-110 transition-transform duration-300">
                      <span className="text-lg md:text-xl lg:text-2xl text-white">📞</span>
                    </div>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h4 className="font-semibold text-[#212121] text-base md:text-lg lg:text-xl mb-2">
                      ¿Prefieres llamarnos?
                    </h4>
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg mb-3 md:mb-4 leading-tight">
                      Nuestro equipo está disponible de lunes a viernes de 9:00 AM a 6:00 PM.
                    </p>
                    <a 
                      href="tel:+525512345678" 
                      className="inline-flex items-center justify-center sm:justify-start text-lg md:text-xl lg:text-2xl font-bold text-[#212121] hover:text-[#2E7D32] transition-colors group/number"
                    >
                      +52 55 1234 5678
                      <svg className="w-4 h-4 md:w-5 md:h-6 ml-2 opacity-0 group-hover/number:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </a>
                    
                    {/* HORARIOS ADICIONALES */}
                    <div className="mt-3 md:mt-4 lg:mt-6 pt-3 md:pt-4 lg:pt-5 border-t border-gray-300/30">
                      <p className="text-gray-600 text-xs md:text-sm lg:text-base">
                        <span className="font-medium text-[#2E7D32]">Soporte prioritario:</span> Para clientes empresariales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;