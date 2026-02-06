import { motion, easeInOut } from 'framer-motion';

const testimonials = [
  {
    name: 'Cliente A',
    feedback: 'XIBERMEX transformó nuestro sistema con IA.',
  },
  {
    name: 'Cliente B',
    feedback: 'Trabajo profesional, procesos claros y resultados excelentes.',
  },
  {
    name: 'Cliente C',
    feedback: 'Desarrollo web moderno, rápido y totalmente recomendado.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
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
      duration: 0.7,
      ease: easeInOut,
    },
  },
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden 
      bg-gradient-to-b from-[#1C1B3E]/90 via-[#141336] to-[#0B0E2A]">

      {/* Líneas energéticas TRON */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#4DD0E1]/40 via-transparent to-transparent" />
        <div className="absolute bottom-24 right-20 w-64 h-px bg-gradient-to-r from-transparent to-[#4DD0E1]/40" />
      </div>

      {/* Glow ambiental */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[700px] 
          bg-[#4DD0E1]/10 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#4DD0E1]">
            Testimonios
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
            Confianza construida con resultados
          </h2>

          <p className="mt-4 text-[#AAB7C4] max-w-xl mx-auto">
            Empresas que apostaron por tecnología clara, procesos sólidos
            y una visión a futuro.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 0 30px rgba(77,208,225,0.35)',
              }}
              className="relative p-8 rounded-2xl
                border border-[#4DD0E1]/30
                bg-[#0F102A]/70 backdrop-blur-xl
                transition-all duration-300"
            >
              {/* Comillas holográficas */}
              <div className="absolute -top-6 -left-4 text-6xl font-bold 
                text-[#4DD0E1]/15 select-none">
                “
              </div>

              <p className="relative z-10 text-[#E2E8F0] leading-relaxed">
                {t.feedback}
              </p>

              {/* Línea TRON */}
              <div className="my-6 h-px bg-gradient-to-r from-[#4DD0E1] via-[#4DD0E1]/40 to-transparent" />

              <footer className="text-sm font-semibold text-[#4DD0E1]">
                {t.name}
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
