// src/components/puntomovil/sections/HeroSection.tsx
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(8px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const demoLink = "https://puntomovil-7635f.web.app/";

  // Efecto de parallax con movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#8BC34A]">

      {/* IMAGEN DE FONDO - Patrones inspirados en diseño móvil */}
      <div className="absolute inset-0">
        {/* Patrón geométrico sutil inspirado en apps móviles */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.1) 100%),
              linear-gradient(0deg, transparent 95%, rgba(255,255,255,0.1) 100%)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Gradientes superpuestos */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#4CAF50] to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-[#212121] to-transparent"></div>
        </div>
      </div>

      {/* GRADIENTE ANIMADO CON TRANSPARENCIA */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: `
            linear-gradient(
              135deg,
              rgba(27, 94, 32, 0.8) 0%,
              rgba(46, 125, 50, 0.7) 25%,
              rgba(139, 195, 74, 0.6) 50%,
              rgba(76, 175, 80, 0.5) 75%,
              rgba(27, 94, 32, 0.8) 100%
            )
          `,
          backgroundSize: '300% 300%',
        }}
      />

      {/* ELEMENTOS DE INTERFAZ MÓVIL FLOTANTES */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Iconos de apps flotantes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              width: Math.random() * 50 + 40 + 'px',
              height: Math.random() * 50 + 40 + 'px',
              rotate: Math.random() * 15 - 7.5
            }}
            animate={{
              y: [null, `-${Math.random() * 100 + 50}px`],
              x: [null, `${Math.random() * 50 - 25}px`],
              rotate: [null, Math.random() * 10 - 5],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Barras de señal y batería flotantes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`signal-${i}`}
            className="absolute w-16 h-4 rounded-full bg-white/5 border border-white/10"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [null, `-${Math.random() * 80 + 40}px`],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 pt-20">

        {/* COLUMNA IZQUIERDA - TEXTO */}
        <motion.div
          className="max-w-2xl mx-auto md:mx-0 md:ml-8 lg:ml-16 text-center md:text-left"
          variants={textContainer}
          initial="hidden"
          animate="show"
        >
          {/* BADGE PROYECTO */}
          <motion.div
            variants={textItem}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 group hover:bg-white/20 transition-all duration-300 mt-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#8BC34A] mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-white/90 tracking-wide">
              Proyecto XIBERMEX
            </span>
          </motion.div>

          {/* TÍTULO PRINCIPAL */}
          <motion.h1
            variants={textItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-[#212121] via-[#424242] to-[#212121] bg-clip-text text-transparent">
              PUNTO
            </span>
            <span className="text-white ml-2">MÓVIL</span>
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.p
            variants={textItem}
            className="text-xl md:text-2xl text-white/80 font-light mb-6"
          >
            Punto de venta móvil para <span className="text-[#8BC34A] font-medium">comercios modernos</span>
          </motion.p>

          {/* LÍNEA DIVISORIA SUTIL */}
          <motion.div
            variants={textItem}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#8BC34A] to-transparent mx-auto md:mx-0 my-8"
          />

          {/* DESCRIPCIÓN BREVE */}
          <motion.p
            variants={textItem}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
          >
            La aplicación de punto de venta diseñada para celulares, con herramientas completas
            para gestionar cobros e inventarios en tiempo real, además, está adaptada para las necesidades locales.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={textItem}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: '#2E7D32',
                boxShadow: '0 10px 30px rgba(139, 195, 74, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-4 rounded-full bg-white text-[#2E7D32] font-medium text-sm tracking-wide flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Probar Demo Ahora</span>
            </motion.a>

            <motion.a
              href="#caracteristicas"
              whileHover={{
                scale: 1.05,
                borderColor: '#8BC34A',
                color: '#8BC34A',
                backgroundColor: 'rgba(139, 195, 74, 0.1)',
                boxShadow: '0 10px 20px rgba(139, 195, 74, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-4 rounded-full border border-white/40 text-white font-medium text-sm tracking-wide flex items-center justify-center space-x-2 hover:border-[#8BC34A]"
            >
              <span>Ver Características</span>
            </motion.a>
          </motion.div>

          {/* TEXTO SECUNDARIO */}
          <motion.p
            variants={textItem}
            className="mt-8 text-sm text-white/60"
          >
            Sin necesidad de descarga • Compatible con iOS y Android • Prueba gratuita
          </motion.p>
        </motion.div>

        {/* COLUMNA DERECHA - CONTENEDOR RECTANGULAR CON IMAGEN Y EFECTOS */}
        <motion.div
          className="mt-12 md:mt-0 md:mr-8 lg:mr-16 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* CONTENEDOR PRINCIPAL RECTANGULAR */}
          <div className="relative w-80 h-64 md:w-96 md:h-72 lg:w-[500px] lg:h-[380px] rounded-3xl overflow-hidden">

            {/* FONDO CON GRADIENTE DINÁMICO */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: `
          linear-gradient(
            135deg,
            rgba(27, 94, 32, 0.9) 0%,
            rgba(46, 125, 50, 0.8) 25%,
            rgba(139, 195, 74, 0.7) 50%,
            rgba(76, 175, 80, 0.6) 75%,
            rgba(27, 94, 32, 0.9) 100%
          )
        `,
                backgroundSize: '300% 300%',
              }}
            />

            {/* PATRÓN TECNOLÓGICO DE VENTAS */}
            <div className="absolute inset-0 opacity-15">
              {/* GRÁFICAS DE BARRAS ANIMADAS */}
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={`bar-${i}`}
                  className="absolute bottom-0 bg-gradient-to-t from-[#8BC34A] to-[#4CAF50] rounded-t-sm"
                  style={{
                    left: `${15 + i * 17}%`,
                    width: '12%',
                    height: `${30 + i * 15}%`,
                  }}
                  animate={{
                    height: [`${30 + i * 15}%`, `${40 + i * 18}%`, `${30 + i * 15}%`],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* PUNTOS DE TRANSACCIÓN */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`transaction-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-white"
                  style={{
                    left: `${10 + (i % 4) * 22}%`,
                    top: `${15 + Math.floor(i / 4) * 25}%`,
                  }}
                  animate={{
                    scale: [1, 1.8, 1],
                    boxShadow: [
                      '0 0 0px rgba(139, 195, 74, 0)',
                      '0 0 10px rgba(139, 195, 74, 0.8)',
                      '0 0 0px rgba(139, 195, 74, 0)'
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>

            {/* MARCO TECNOLÓGICO CON EFECTOS DE LUZ */}
            <div className="absolute inset-0 border-3 border-white/25 rounded-3xl overflow-hidden backdrop-blur-sm">

              {/* EFECTO DE RESPLANDOR EN LOS BORDES */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-transparent via-[#8BC34A]/40 to-transparent animate-pulse-slow blur-sm"></div>

              {/* EFECTO DE CUBO 3D EN LOS BORDES */}
              <div className="absolute inset-0 border-2 border-transparent rounded-3xl">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#8BC34A]/10 via-transparent to-[#4CAF50]/10 animate-shimmer bg-[length:200%_100%]"></div>
              </div>

              {/* CONTENEDOR DE LA IMAGEN PRINCIPAL */}
              <div className="relative w-full h-full flex items-center justify-center p-2">
                {/* MARCO DE LA APLICACIÓN */}
                <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-gray-700/50">

                  {/* FONDO CON EFECTO DE PROFUNDIDAD */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90"></div>

                  {/* PATRÓN SUTIL DE CIRCUITOS */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                linear-gradient(90deg, transparent 95%, rgba(139, 195, 74, 0.3) 100%),
                linear-gradient(0deg, transparent 95%, rgba(139, 195, 74, 0.3) 100%)
              `,
                      backgroundSize: '30px 30px'
                    }}></div>
                  </div>

                  {/* CONTENIDO DE LA IMAGEN/INTERFAZ */}
                  <div className="relative w-full h-full flex flex-col">
                    {/* BARRA SUPERIOR DE LA APP */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700/50">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#8BC34A] animate-pulse"></div>
                        <div className="text-white text-sm font-semibold">PUNTO MÓVIL</div>
                      </div>
                    </div>

                    {/* CONTENIDO PRINCIPAL - IMAGEN */}
                    <div className="flex-1 flex items-center justify-center p-4">
                      <div className="relative w-full h-full rounded-lg overflow-hidden border border-gray-700/60 shadow-inner">
                        {/* IMAGEN DE PUNTO MÓVIL */}
                        <img
                          src="/images/puntomovil.jpeg"
                          alt="Punto Móvil App Interface"
                          className="w-full h-full object-cover"
                        />

                        {/* OVERLAY TECNOLÓGICO */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2E7D32]/10 to-transparent"></div>

                        {/* EFECTO DE HIGHLIGHT EN LA IMAGEN */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer-slow"></div>
                      </div>
                    </div>

                    {/* BARRA INFERIOR CON ESTADÍSTICAS */}
                    <div className="px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700/50">
                    </div>
                  </div>

                  {/* EFECTOS DE ILUMINACIÓN INTERNA */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8BC34A] to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent"></div>
                  </div>
                </div>

                {/* ANILLOS CONCÉNTRICOS TECNOLÓGICOS */}
                <div className="absolute inset-0 pointer-events-none">
                  {[1, 1.1, 1.2].map((scale, i) => (
                    <motion.div
                      key={`ring-${i}`}
                      className="absolute inset-0 border border-[#8BC34A]/20 rounded-2xl"
                      style={{ scale }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [scale, scale * 1.05, scale],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* PARTÍCULAS DE DATOS FLOTANTES */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={`data-particle-${i}`}
                      className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#8BC34A] to-[#4CAF50]"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -40, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.6,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* EFECTOS EXTERNOS DE LUZ */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#8BC34A] to-[#4CAF50] opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute -bottom-4 -left-4 w-28 h-28 rounded-full bg-gradient-to-br from-[#1B5E20] to-[#8BC34A] opacity-20 blur-2xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>

          {/* TEXTO DESCRIPTIVO DEBAJO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-white/70 tracking-wide max-w-md mx-auto">
              Interfaz de ventas móvil • Gestión en tiempo real
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;