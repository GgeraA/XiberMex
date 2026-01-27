// src/components/maria/sections/HeroSection.tsx
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
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0E7E92]">

      {/* GRADIENTE SUTIL - Más minimalista que el principal */}
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
          background: 'linear-gradient(135deg, rgba(14,126,146,0.95) 0%, rgba(0,131,143,0.9) 50%, rgba(28,27,62,0.85) 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* PATRÓN SUTIL - Inspirado en diseño mexicano minimalista */}
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

          {/* TÍTULO PRINCIPAL - Minimalista pero impactante */}
          <motion.h1
            variants={textItem}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-4"
          >
            Mar<span className="text-[#4DD0E1]">IA</span>
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.p
            variants={textItem}
            className="text-xl md:text-2xl text-white/80 font-light mb-6"
          >
            Inteligencia Artificial con Identidad Mexicana
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
            Una compañera de infancia creada para guiar, educar y sembrar valores 
            en las nuevas generaciones mediante tecnología con rostro humano.
          </motion.p>

          {/* CTA MINIMALISTA */}
          <motion.div
            variants={textItem}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          >
            <motion.a
              href="#tecnologia"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: '#0E7E92'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-3 rounded-full bg-white text-[#0E7E92] font-medium text-sm tracking-wide"
            >
              Ver Tecnología
            </motion.a>

            <motion.a
              href="#identidad"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#4DD0E1',
                color: '#4DD0E1'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-3 rounded-full border border-white/40 text-white font-medium text-sm tracking-wide"
            >
              Conocer Identidad
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;