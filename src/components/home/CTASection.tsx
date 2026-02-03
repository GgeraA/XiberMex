import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative bg-[#1C1B3E] py-28 overflow-hidden">

      {/* Glow ambiental */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#4DD0E1]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative max-w-4xl mx-auto px-8 text-center"
      >
        {/* Label superior */}
        <span className="text-xs tracking-widest uppercase text-[#4DD0E1]">
          Activación de proyecto
        </span>

        {/* Headline */}
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
          ¿Listo para transformar tu negocio?
        </h2>

        {/* Subtexto */}
        <p className="mt-6 text-[#AAB7C4] max-w-xl mx-auto">
          Diseñamos soluciones digitales, automatización e inteligencia artificial
          para llevar tu empresa al siguiente nivel.
        </p>

        {/* Botón futurista */}
        <motion.a
          href="/contacto"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(77, 208, 225, 0.45)',
          }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 mt-12 px-10 py-4
                     border border-[#4DD0E1] text-[#4DD0E1]
                     font-semibold rounded-lg
                     bg-[#1C1B3E]/60 backdrop-blur
                     hover:bg-[#4DD0E1]/10 transition"
        >
          <span>Solicitar Cotización</span>
          <span className="text-lg">→</span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTASection;
