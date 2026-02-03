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
    <section className="relative bg-[#1C1B3E] py-28 overflow-hidden">

      {/* Glow ambiental */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[700px] bg-[#4DD0E1]/10 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="relative max-w-6xl mx-auto px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-widest uppercase text-[#4DD0E1]">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 0 25px rgba(77, 208, 225, 0.25)',
              }}
              className="relative p-8 rounded-xl border border-[#4DD0E1]/30 bg-[#1C1B3E]/80 backdrop-blur"
            >
              {/* Comillas holográficas */}
              <div className="absolute -top-4 -left-4 text-5xl text-[#4DD0E1]/20">
                “
              </div>

              <p className="text-[#E2E8F0] leading-relaxed">
                {t.feedback}
              </p>

              {/* Línea separadora TRON */}
              <div className="my-6 h-px bg-gradient-to-r from-[#4DD0E1] to-transparent" />

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
