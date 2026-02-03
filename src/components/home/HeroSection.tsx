import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const textContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const carouselItem: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* ================= VIDEO HERO ================= */}
      <div className="relative h-[115vh] w-full">

        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/software.mp4" type="video/mp4" />
        </video>

        {/* GRADIENTE */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{
            background:
              'linear-gradient(120deg, rgba(77,208,225,0.08), rgba(0,131,143,0.1), rgba(28,27,62,0.12))',
            backgroundSize: '200% 200%',
          }}
        />

        {/* CONTENIDO CENTRAL */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <motion.div
            className="max-w-4xl"
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
          >
            <motion.h1
              variants={textItem}
              className="
                text-5xl md:text-7xl font-bold uppercase
                tracking-[0.35em] text-white
                drop-shadow-[0_0_30px_rgba(77,208,225,0.35)]
              "
            >
              XIBERMEX
            </motion.h1>

            <motion.p
              variants={textItem}
              className="
                mt-6 text-lg md:text-2xl uppercase
                tracking-[0.4em] text-[#AAB7C4]
              "
            >
              Estrategias Tecnológicas
            </motion.p>

            <motion.p
              variants={textItem}
              className="mt-8 text-lg text-[#4DD0E1]"
            >
              Desarrollo de software, innovación digital <br />
              y soluciones tecnológicas a la medida.
            </motion.p>

            <motion.div
              variants={textItem}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              <motion.a
                href="#contacto"
                whileHover={{
                  scale: 1.08,
                  boxShadow: '0 0 35px rgba(77,208,225,0.6)',
                  color: '#ffffff',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 280 }}
                className="
                  px-10 py-4 rounded-lg
                  bg-[#00838F] text-white font-semibold
                  tracking-widest
                "
                style={{ color: '#ffffff' }}
              >
                COTIZAR PROYECTO
              </motion.a>

              <motion.a
                href="#servicios"
                whileHover={{
                  scale: 1.08,
                  backgroundColor: '#4DD0E1',
                  color: '#1C1B3E',
                  boxShadow: '0 0 25px rgba(77,208,225,0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 280 }}
                className="
                  px-10 py-4 rounded-lg
                  border border-[#4DD0E1]
                  text-[#4DD0E1] font-semibold
                  tracking-widest
                "
              >
                VER SERVICIOS
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ================= CARRUSEL FLOTANTE ================= */}
      <div className="relative z-20 -mt-40 pb-24">
        <motion.div
          className="
            mx-auto max-w-6xl
            bg-[#1C1B3E]/80 backdrop-blur-xl
            rounded-3xl
            border border-[#4DD0E1]/30
            shadow-[0_0_60px_rgba(77,208,225,0.25)]
            px-10 py-14
          "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

            {[
              {
                title: 'Software a Medida',
                text: 'Aplicaciones web y móviles diseñadas para escalar tu negocio.',
              },
              {
                title: 'Automatización',
                text: 'Optimización de procesos con tecnología inteligente.',
              },
              {
                title: 'Transformación Digital',
                text: 'Estrategias modernas para empresas del futuro.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={carouselItem}
                className="
                  rounded-2xl p-8
                  bg-[#0E1A2B]/60
                  border border-[#4DD0E1]/20
                  hover:border-[#4DD0E1]
                  transition-all
                "
              >
                <h3 className="text-xl font-semibold text-[#4DD0E1] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#AAB7C4] text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
