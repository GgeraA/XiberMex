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
      ease: [0.25, 0.1, 0.25, 1], // ✅ cubic-bezier (easeOut premium)
    },
  },
};

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/software.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-[#1C1B3E]/80" />

      {/* GRADIENTE ANIMADO */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background:
            'linear-gradient(120deg, rgba(0,131,143,0.15), rgba(77,208,225,0.15), rgba(28,27,62,0.2))',
          backgroundSize: '200% 200%',
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
        <motion.div
          className="max-w-4xl"
          variants={textContainer}
          initial="hidden"
          animate="show"
        >
          {/* MARCA */}
          <motion.h1
            variants={textItem}
            className="text-5xl md:text-7xl font-bold text-white tracking-wide"
          >
            XIBERMEX
          </motion.h1>

          {/* ESLOGAN */}
          <motion.p
            variants={textItem}
            className="mt-4 text-xl md:text-2xl text-[#AAB7C4]"
          >
            Estrategias Tecnológicas
          </motion.p>

          {/* DESCRIPCIÓN */}
          <motion.p
            variants={textItem}
            className="mt-6 text-lg text-[#4DD0E1]"
          >
            Desarrollo de software, innovación digital  
            y soluciones tecnológicas a la medida.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={textItem}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#contacto"
              whileHover={{
                scale: 1.08,
                boxShadow: '0px 0px 25px rgba(77,208,225,0.6)',
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-4 rounded-lg bg-[#00838F] text-white font-semibold"
            >
              Cotizar Proyecto
            </motion.a>

            <motion.a
              href="#servicios"
              whileHover={{
                scale: 1.08,
                backgroundColor: '#4DD0E1',
                color: '#1C1B3E',
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-4 rounded-lg border border-[#4DD0E1] text-[#4DD0E1] font-semibold"
            >
              Ver Servicios
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
