// src/pages/PuntoMovil.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const PuntoMovilProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 font-sans">
      
      {/* Header minimalista */}
      <header className="w-full px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-lg font-medium text-[#1C1B3E] hover:text-[#00838F] transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver
          </Link>
          <div className="text-sm">
            <span className="text-gray-500">Proyecto</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="font-medium text-[#1C1B3E]">PuntoMovil</span>
          </div>
        </div>
      </header>

      {/* Hero Section - Más ancha */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-[#1C1B3E] to-[#00838F] text-white px-6 py-2 rounded-full text-sm font-medium mb-8">
            EN DESARROLLO
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1C1B3E] tracking-tight mb-6">
            PuntoMovil
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Sistema de ventas móvil integral para comercios
          </p>

          {/* Línea divisoria */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-16"></div>

          {/* Descripción elegante */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Solución completa de punto de venta diseñada para dispositivos móviles que permite gestionar inventarios, 
              procesar transacciones y analizar ventas desde cualquier lugar.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de características próximas */}
      <section className="bg-white border-t border-gray-100 py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center text-[#1C1B3E] mb-16">
              Características planeadas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Ventas móviles',
                  description: 'Procesa transacciones desde cualquier dispositivo móvil',
                  icon: '📱'
                },
                {
                  title: 'Gestión de inventario',
                  description: 'Control de stock en tiempo real con alertas automáticas',
                  icon: '📦'
                },
                {
                  title: 'Reportes avanzados',
                  description: 'Análisis detallado de ventas y rendimiento del negocio',
                  icon: '📊'
                },
                {
                  title: 'Multi-dispositivo',
                  description: 'Sincronización en tiempo real entre diferentes terminales',
                  icon: '🔄'
                },
                {
                  title: 'Facturación electrónica',
                  description: 'Generación de comprobantes fiscales digitales',
                  icon: '🧾'
                },
                {
                  title: 'Soporte offline',
                  description: 'Funcionalidad limitada sin conexión a internet',
                  icon: '📶'
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-xl p-8 hover:border-[#00838F] hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-[#1C1B3E] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline de desarrollo */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center text-[#1C1B3E] mb-12">
              Cronología del proyecto
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  phase: 'Investigación y planificación',
                  status: 'Completado',
                  description: 'Análisis de mercado y definición de requerimientos'
                },
                {
                  phase: 'Diseño de interfaz',
                  status: 'En progreso',
                  description: 'Desarrollo de UI/UX y prototipos interactivos'
                },
                {
                  phase: 'Desarrollo backend',
                  status: 'Próximo',
                  description: 'Implementación de lógica de negocio y APIs'
                },
                {
                  phase: 'Pruebas y lanzamiento',
                  status: 'Próximo',
                  description: 'Testing, optimización y despliegue final'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-3 h-3 bg-[#00838F] rounded-full mt-2 mr-4"></div>
                  <div className="flex-grow border-b border-gray-200 pb-8">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-medium text-[#1C1B3E]">{item.phase}</h3>
                      <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                        item.status === 'Completado' 
                          ? 'bg-green-100 text-green-800'
                          : item.status === 'En progreso'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA para interés */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-light text-[#1C1B3E] mb-6">
            ¿Te interesa este proyecto?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Estamos desarrollando PuntoMovil para revolucionar la manera en que los comercios manejan sus ventas.
            Déjanos tus datos si quieres ser de los primeros en probarlo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-[#1C1B3E] text-white px-8 py-3 rounded-full font-medium hover:bg-[#00838F] transition-all duration-300"
            >
              Expresar interés
            </Link>
            <button className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300">
              Más información
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1B3E] text-white/80 py-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-medium text-white">PuntoMovil</span>
              <span className="mx-3 opacity-40">•</span>
              <span className="opacity-70">Sistema de ventas móvil</span>
            </div>
            <div className="text-sm opacity-70">
              Un proyecto de <span className="font-medium text-white">XIBERMEX</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PuntoMovilProject;