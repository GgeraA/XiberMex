import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden
      bg-gradient-to-b from-[#0B0E2A] via-[#10143A] to-[#00838F]/20">

      {/* Glow ambiental */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px]
          bg-[#4DD0E1]/20 rounded-full blur-3xl
          -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Contenedor principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative max-w-4xl mx-auto px-6 md:px-8"
      >
        {/* Panel futurista */}
        <div className="relative overflow-hidden rounded-2xl
          border border-[#4DD0E1]/30
          bg-[#0F102A]/70 backdrop-blur-xl
          p-12 text-center">

          {/* Línea neón animada (horizontal) */}
          <motion.div
            aria-hidden
            className="absolute top-0 left-0 h-px w-1/3
              bg-gradient-to-r from-transparent via-[#4DD0E1] to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '400%' }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Línea neón animada (vertical) */}
          <motion.div
            aria-hidden
            className="absolute top-0 right-0 w-px h-1/3
              bg-gradient-to-b from-transparent via-[#4DD0E1] to-transparent"
            initial={{ y: '-100%' }}
            animate={{ y: '400%' }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Contenido */}
          <span className="text-xs tracking-[0.3em] uppercase text-[#4DD0E1]">
            Activación de proyecto
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
            ¿Listo para transformar tu negocio?
          </h2>

          <p className="mt-6 text-[#AAB7C4] max-w-xl mx-auto">
            Diseñamos soluciones digitales, automatización e inteligencia artificial
            para llevar tu empresa al siguiente nivel.
          </p>

          {/* Botón futurista */}
          <motion.a
            href="/contacto"
            whileHover={{
              scale: 1.06,
              boxShadow: '0 0 35px rgba(77,208,225,0.55)',
            }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 mt-14 px-12 py-4
              border border-[#4DD0E1]
              text-[#1C1B3E] font-semibold
              rounded-lg
              bg-[#4DD0E1]
              hover:bg-[#76E7EA]
              transition"
          >
            <span>Solicitar Cotización</span>
            <span className="text-lg">→</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
