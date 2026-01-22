// src/pages/MarIa.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const MarIAProject: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0E7E92] text-white font-sans">
      
      {/* Header minimalista - Ancho completo */}
      <header className="w-full px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-lg font-medium hover:opacity-80 transition-opacity flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver
          </Link>
          <div className="text-sm">
            <span className="opacity-80">Proyecto</span>
            <span className="mx-2">•</span>
            <span className="font-medium">MarIA</span>
          </div>
        </div>
      </header>

      {/* Hero Section - Ancho completo */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="text-center">
          {/* Título principal minimalista */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4">
            MarIA
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12">
            Inteligencia Artificial educativa para niños
          </p>

          {/* Línea divisoria sutil */}
          <div className="w-24 h-px bg-white/30 mx-auto mb-16"></div>

          {/* Descripción elegante */}
          <div className="max-w-3xl mx-auto mb-20">
            <p className="text-lg md:text-xl leading-relaxed text-white/80">
              Plataforma de aprendizaje adaptativo que utiliza inteligencia artificial para crear experiencias educativas personalizadas, seguras y efectivas para niños.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de características - Diseño más limpio */}
      <section className="bg-white/10 backdrop-blur-sm py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Características principales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: 'Aprendizaje personalizado',
                description: 'Contenido adaptado al ritmo individual de cada niño'
              },
              {
                title: 'Interfaz intuitiva',
                description: 'Diseño especialmente desarrollado para usuarios jóvenes'
              },
              {
                title: 'Contenido validado',
                description: 'Material educativo basado en metodologías pedagógicas'
              },
              {
                title: 'Entorno seguro',
                description: 'Protección completa de datos y privacidad infantil'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl mb-4">
                  {['🎯', '👧', '📚', '🛡️'][index]}
                </div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de beneficios - Más minimalista */}
      <section className="py-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
              ¿Por qué MarIA?
            </h2>
            <p className="text-white/70 text-center mb-16 max-w-2xl mx-auto">
              Combinamos tecnología de vanguardia con principios pedagógicos sólidos
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Adaptación inteligente',
                  items: ['Análisis de progreso en tiempo real', 'Rutas de aprendizaje personalizadas', 'Detección de áreas de mejora']
                },
                {
                  title: 'Experiencia inmersiva',
                  items: ['Interfaz amigable para niños', 'Contenido multimedia interactivo', 'Gamificación educativa']
                },
                {
                  title: 'Para instituciones',
                  items: ['Panel de control para educadores', 'Reportes de progreso detallados', 'Integración con sistemas existentes']
                }
              ].map((section, index) => (
                <div key={index} className="border border-white/20 rounded-xl p-8">
                  <h3 className="text-xl font-medium mb-6 pb-4 border-b border-white/10">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 mr-3"></div>
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final minimalista */}
      <section className="py-16 border-t border-white/10">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-light mb-8">
            ¿Interesado en implementar MarIA?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-white text-[#0E7E92] px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-300"
            >
              Solicitar demostración
            </Link>
            <button className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              Ver documentación técnica
            </button>
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="border-t border-white/10 py-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <span className="text-lg font-medium">MarIA</span>
              <span className="mx-3 opacity-40">•</span>
              <span className="opacity-70">Proyecto de XIBERMEX</span>
            </div>
            <div className="flex space-x-6">
              {['Especificaciones', 'Equipo', 'Contacto'].map((item) => (
                <button 
                  key={item}
                  className="text-sm opacity-70 hover:opacity-100 hover:underline transition-opacity"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarIAProject;