import { motion, cubicBezier } from 'framer-motion';

const services = [
  {
    title: 'Desarrollo Web',
    description: 'Soluciones web responsivas, escalables y personalizadas.',
    icon: '/icons/web-dev.svg',
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Automatiza tus procesos con IA y Machine Learning.',
    icon: '/icons/ai.svg',
  },
  {
    title: 'Consultoría IT',
    description: 'Estrategias tecnológicas para empresas modernas.',
    icon: '/icons/consulting.svg',
  },
  {
    title: 'Ciberseguridad',
    description: 'Protege tus sistemas y datos críticos.',
    icon: '/icons/cybersecurity.svg',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(6px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: cubicBezier(0.25, 0.1, 0.25, 1),
    },
  },
};

const ServicesSection = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#1C1B3E] text-center mb-14"
        >
          Nuestros Servicios
        </motion.h2>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: '0px 0px 30px rgba(77,208,225,0.35)',
              }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="group relative bg-[#F8FAFC] rounded-xl p-8 border border-transparent hover:border-[#4DD0E1]/50"
            >
              {/* ICONO */}
              <motion.img
                src={service.icon}
                alt={service.title}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-16 h-16 mb-6 mx-auto"
              />

              {/* TEXTO */}
              <h3 className="text-xl font-semibold text-[#00838F] text-center">
                {service.title}
              </h3>

              <p className="mt-3 text-center text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Glow decorativo */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-[#4DD0E1]/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
