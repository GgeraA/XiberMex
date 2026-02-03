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
    <section className="relative bg-[#1C1B3E] py-32 overflow-hidden">

      {/* Glow decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#4DD0E1]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* QUIÉNES SOMOS */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative p-10 rounded-xl border border-[#4DD0E1]/30 bg-[#1C1B3E]/80 backdrop-blur"
        >
          <span className="text-xs tracking-widest text-[#4DD0E1] uppercase">
            Sobre nosotros
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Quiénes somos
          </h2>

          <p className="mt-6 text-[#AAB7C4] leading-relaxed">
            Somos una empresa de desarrollo de software enfocada en crear
            soluciones tecnológicas, automatización e inteligencia artificial
            para organizaciones que buscan escalar con eficiencia.
          </p>

          {/* Línea TRON */}
          <div className="mt-8 h-px bg-gradient-to-r from-[#4DD0E1] to-transparent" />
        </motion.div>

        {/* CÓMO LO HACEMOS */}
        <motion.div
          variants={panelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative p-10 rounded-xl border border-[#00838F]/40 bg-[#1C1B3E]/80 backdrop-blur"
        >
          <span className="text-xs tracking-widest text-[#00838F] uppercase">
            Metodología
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Cómo lo hacemos
          </h2>

          <p className="mt-6 text-[#AAB7C4] leading-relaxed">
            Diseñamos, prototipamos y desarrollamos productos digitales
            personalizados utilizando tecnologías modernas y metodologías
            ágiles orientadas a resultados.
          </p>

          {/* Línea TRON */}
          <div className="mt-8 h-px bg-gradient-to-r from-[#00838F] to-transparent" />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
