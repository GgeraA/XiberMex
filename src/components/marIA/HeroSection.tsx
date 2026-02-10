// src/components/maria/sections/HeroSection.tsx
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

  // Efecto de parallax con movimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[95vh] w-full overflow-hidden bg-[#0E7E92]">

      {/* IMAGEN DE FONDO - Patrones inspirados en arte mexicano */}
      <div className="absolute inset-0">
        {/* Patrón geométrico sutil */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 2px, transparent 2px),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Gradientes orgánicos superpuestos */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#4DD0E1] to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-[#1C1B3E] to-transparent"></div>
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
              rgba(14, 126, 146, 0.7) 0%,
              rgba(0, 131, 143, 0.6) 25%,
              rgba(77, 208, 225, 0.5) 50%,
              rgba(28, 27, 62, 0.4) 75%,
              rgba(14, 126, 146, 0.7) 100%
            )
          `,
          backgroundSize: '300% 300%',
        }}
      />

      {/* PARTÍCULAS FLOTANTES */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
              width: Math.random() * 40 + 10 + 'px',
              height: Math.random() * 40 + 10 + 'px',
            }}
            animate={{
              y: [null, `-${Math.random() * 100 + 50}px`],
              x: [null, `-${Math.random() * 50 + 25}px`],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
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
            <div className="w-2 h-2 rounded-full bg-[#4DD0E1] mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-white/90 tracking-wide">
              Proyecto XIBERMEX
            </span>
          </motion.div>

          {/* TÍTULO PRINCIPAL */}
          <motion.h1
            variants={textItem}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight mb-4"
          >
            Mar<span className="text-[#4DD0E1] bg-clip-text bg-gradient-to-r from-[#4DD0E1] to-[#AAB7C4]">IA</span>
          </motion.h1>

          {/* SUBTÍTULO */}
          <motion.p
            variants={textItem}
            className="text-xl md:text-2xl text-white/80 font-light mb-6"
          >
            Inteligencia Artificial con <span className="text-[#4DD0E1] font-medium">Identidad Mexicana</span>
          </motion.p>

          {/* LÍNEA DIVISORIA SUTIL */}
          <motion.div
            variants={textItem}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#4DD0E1] to-transparent mx-auto md:mx-0 my-8"
          />

          {/* DESCRIPCIÓN BREVE */}
          <motion.p
            variants={textItem}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
          >
            Una compañera de infancia creada para guiar, educar y sembrar valores
            en las nuevas generaciones mediante tecnología con <span className="text-[#4DD0E1]">rostro humano</span>.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={textItem}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <motion.a
              href="#tecnologia"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.95)',
                color: '#0E7E92',
                boxShadow: '0 10px 30px rgba(77, 208, 225, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-4 rounded-full bg-white text-[#0E7E92] font-medium text-sm tracking-wide flex items-center justify-center space-x-2"
            >
              <span>Explorar Tecnología</span>
            </motion.a>

            <motion.a
              href="#identidad"
              whileHover={{
                scale: 1.05,
                borderColor: '#4DD0E1',
                color: '#4DD0E1',
                backgroundColor: 'rgba(77, 208, 225, 0.1)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-8 py-4 rounded-full border border-white/40 text-white font-medium text-sm tracking-wide flex items-center justify-center space-x-2 hover:border-[#4DD0E1]"
            >
              <span>Conocer a MarIA</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* COLUMNA DERECHA - REPRESENTACIÓN VISUAL DE MARIA */}
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
          {/* CONTENEDOR PRINCIPAL */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

            {/* ANILLOS CONCÉNTRICOS */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#4DD0E1]/30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute inset-8 rounded-full border border-white/20"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />

            {/* CIRCULO PRINCIPAL CON GRADIENTE */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#0E7E92] via-[#00838F] to-[#1C1B3E] 
                          shadow-2xl shadow-[#4DD0E1]/20 
                          flex items-center justify-center
                          overflow-hidden">

              {/* PATRÓN INTERNO INSPIRADO EN ARTE MEXICANO */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 30% 30%, white 1px, transparent 1px),
                    radial-gradient(circle at 70% 70%, white 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />

              {/* CONTENEDOR PARA LA IMAGEN DE MARIA */}
              <div className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full 
                            bg-gradient-to-br from-white/5 to-transparent 
                            border border-white/10 
                            flex items-center justify-center
                            overflow-hidden">

                {/* ESPACIO PARA LA IMAGEN DE MARIA - Puedes reemplazar esto */}
                <img
                  src="/images/maria2.jpeg"
                  alt="MarIA Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* PARTÍCULAS FLOTANTES ALREDEDOR */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#4DD0E1]"
                  style={{
                    left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                    top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* ELEMENTOS DECORATIVOS EXTERNOS */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#4DD0E1] to-[#00838F] opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#1C1B3E] to-[#4DD0E1] opacity-20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
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
            <p className="text-sm text-white/60 tracking-wide">
              Representación visual de MarIA
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;