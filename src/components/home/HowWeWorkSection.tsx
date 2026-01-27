import { motion, easeInOut } from 'framer-motion';

const steps = [
  {
    title: 'Análisis & Estrategia',
    description: 'Entendemos tus necesidades y objetivos del negocio.',
  },
  {
    title: 'Diseño & Prototipo',
    description: 'Creamos prototipos interactivos y visuales.',
  },
  {
    title: 'Desarrollo & QA',
    description: 'Construimos soluciones sólidas de alta calidad.',
  },
  {
    title: 'Lanzamiento & Soporte',
    description: 'Implementamos y acompañamos el crecimiento.',
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

const itemVariants = {
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

const HowWeWorkSection = () => {
  return (
    <section className="relative bg-[#1C1B3E] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-20"
        >
          Cómo trabajamos
        </motion.h2>

        {/* TIMELINE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="relative flex flex-col gap-20"
        >
          {/* Línea central */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-[#4DD0E1] to-transparent hidden md:block" />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Contenido */}
                <div
                  className={`md:w-5/12 bg-[#1C1B3E] border border-[#4DD0E1]/30 rounded-xl p-8 shadow-lg ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[#4DD0E1]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[#AAB7C4] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Nodo */}
                <div className="absolute md:left-1/2 md:-translate-x-1/2 mt-10 md:mt-0">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 rounded-full bg-[#00838F] text-white flex items-center justify-center font-bold shadow-[0_0_25px_rgba(77,208,225,0.6)]"
                  >
                    {index + 1}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
