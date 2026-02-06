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
    <section
      className="
        relative
        bg-gradient-to-b
        from-[#1C1B3E] via-[#0E1A2B] to-[#1C1B3E]
        py-24 md:py-32
        overflow-hidden
      "
    >
      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-1/2 left-1/2
            w-[400px] h-[400px]
            md:w-[600px] md:h-[600px]
            bg-[#4DD0E1]/10
            rounded-full blur-3xl
            -translate-x-1/2 -translate-y-1/2
          "
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-2xl md:text-4xl
            font-bold text-white
            text-center mb-16 md:mb-24
          "
        >
          Cómo trabajamos
        </motion.h2>

        {/* TIMELINE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-120px' }}
          className="relative flex flex-col gap-16 md:gap-24"
        >
          {/* Línea central desktop */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-[#4DD0E1] to-transparent hidden md:block" />

          {/* Línea lateral mobile */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#4DD0E1] to-transparent md:hidden" />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className={`relative flex ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Card */}
                <div
                  className={`
                    relative
                    w-full md:w-5/12
                    ml-10 md:ml-0
                    p-6 md:p-8
                    rounded-2xl
                    bg-white/5
                    backdrop-blur-xl
                    border border-[#4DD0E1]/25
                    shadow-[0_0_30px_rgba(77,208,225,0.15)]
                    ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}
                  `}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#4DD0E1]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-[#AAB7C4] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Línea energética */}
                  <div className="mt-6 h-px bg-gradient-to-r from-[#4DD0E1] to-transparent" />
                </div>

                {/* Nodo */}
                <div
                  className="
                    absolute
                    left-4 md:left-1/2
                    top-6
                    md:-translate-x-1/2
                  "
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="
                      w-10 h-10 md:w-12 md:h-12
                      rounded-full
                      bg-[#00838F]
                      text-white
                      flex items-center justify-center
                      font-bold text-sm md:text-base
                      shadow-[0_0_25px_rgba(77,208,225,0.6)]
                    "
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
