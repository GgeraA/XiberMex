import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion';

const panelVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(6px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

const AboutSection = () => {
  return (
    <section
      className="
        relative
        bg-gradient-to-b from-[#1C1B3E] to-[#0E1A2B]
        py-20 md:py-32
        overflow-hidden
      "
    >
      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-1/2 left-1/2
            w-[380px] h-[380px]
            md:w-[600px] md:h-[600px]
            bg-[#4DD0E1]/10
            rounded-full blur-3xl
            -translate-x-1/2 -translate-y-1/2
          "
        />
      </div>

      <div
        className="
          relative max-w-7xl mx-auto
          px-6 md:px-8
          grid grid-cols-1 md:grid-cols-2
          gap-12 md:gap-16
        "
      >
        {/* QUIÉNES SOMOS */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            relative
            p-8 md:p-10
            rounded-2xl
            border border-[#4DD0E1]/25
            bg-white/5
            backdrop-blur-xl
          "
        >
          <span className="text-xs tracking-widest text-[#4DD0E1] uppercase">
            Sobre nosotros
          </span>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white">
            Quiénes somos
          </h2>

          <p className="mt-6 text-sm md:text-base text-[#AAB7C4] leading-relaxed">
            Somos una empresa de desarrollo de software enfocada en crear
            soluciones tecnológicas, automatización e inteligencia artificial
            para organizaciones que buscan escalar con eficiencia.
          </p>

          {/* Línea energética */}
          <div className="mt-8 h-px bg-gradient-to-r from-[#4DD0E1] to-transparent" />
        </motion.div>

        {/* CÓMO LO HACEMOS */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            relative
            p-8 md:p-10
            rounded-2xl
            border border-[#00838F]/35
            bg-white/5
            backdrop-blur-xl
          "
        >
          <span className="text-xs tracking-widest text-[#00838F] uppercase">
            Metodología
          </span>

          <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white">
            Cómo lo hacemos
          </h2>

          <p className="mt-6 text-sm md:text-base text-[#AAB7C4] leading-relaxed">
            Diseñamos, prototipamos y desarrollamos productos digitales
            personalizados utilizando tecnologías modernas y metodologías
            ágiles orientadas a resultados.
          </p>

          {/* Línea energética */}
          <div className="mt-8 h-px bg-gradient-to-r from-[#00838F] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
