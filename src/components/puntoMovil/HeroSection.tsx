// src/components/puntomovil/sections/HeroSection.tsx
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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
  const demoLink = "https://puntomovil-7635f.web.app/"; 

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-[#2E7D32] to-[#8BC34A]">

      {/* GRADIENTE ANIMADO */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(46,125,50,0.95) 0%, rgba(139,195,74,0.9) 50%, rgba(0,188,212,0.85) 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* PATRÓN SUTIL */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/20 rounded-full"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center pt-16 mt-12">
        <motion.div
          className="max-w-5xl"
          variants={textContainer}
          initial="hidden"
          animate="show"
        >
          {/* BADGE PROYECTO */}
          <motion.div
            variants={textItem}
            className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <span className="text-sm font-medium text-white/90">Proyecto XIBERMEX</span>
          </motion.div>

          {/* TÍTULO PRINCIPAL */}
          <motion.h1
            variants={textItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4"
          >
            <span className="text-[#212121]">PUNTO</span> 
            <span className="text-white"> MÓVIL</span>
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.p
            variants={textItem}
            className="text-xl md:text-2xl text-white/80 font-light mb-6"
          >
            Punto de venta móvil para comercios modernos
          </motion.p>

          {/* LÍNEA DIVISORIA SUTIL */}
          <motion.div
            variants={textItem}
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto my-8"
          />

          {/* DESCRIPCIÓN BREVE */}
          <motion.p
            variants={textItem}
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            La aplicación de punto de venta diseñada para celulares, con herramientas completas 
            para gestionar cobros e inventarios en tiempo real, además, está adaptada para las necesidades locales.
          </motion.p>

          {/* CTA PRINCIPAL - DEMO */}
          <motion.div
            variants={textItem}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          >
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: '#2E7D32'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-4 rounded-full bg-white text-[#2E7D32] font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl"
            >
              Probar Demo Ahora
            </motion.a>

            <motion.a
              href="#caracteristicas"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#2E7D32',
                color: '#2E7D32'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-semibold text-lg tracking-wide"
            >
              Ver Características
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
      </div>
    </section>
  );
};

export default HeroSection;