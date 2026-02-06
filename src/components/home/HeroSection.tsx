import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const textItem: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const textContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const carouselItem: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-transparent">

      {/* VIDEO */}
      <div className="relative h-[115vh] w-full">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/software.mp4" type="video/mp4" />
        </video>

        {/* Oscurecido neutro */}
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />

        {/* HUD scan */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,transparent,rgba(77,208,225,.08),transparent)] animate-scan" />

        {/* CONTENIDO */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
          <motion.div
            className="max-w-4xl"
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
          >

            {/* TITULO */}
            <motion.h1
              variants={textItem}
              animate={{
                textShadow: [
                  '0 0 20px rgba(77,208,225,.4)',
                  '0 0 45px rgba(77,208,225,.8)',
                  '0 0 20px rgba(77,208,225,.4)',
                ],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="
                text-5xl md:text-7xl font-bold uppercase
                tracking-[0.35em] text-white
              "
            >
              XIBERMEX
            </motion.h1>

            {/* ESLOGAN */}
            <motion.p
              variants={textItem}
              className="mt-6 text-lg md:text-2xl uppercase tracking-[0.4em] text-[#AAB7C4]"
            >
              Estrategias Tecnológicas
            </motion.p>

            {/* Línea energética */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-auto mt-6 h-px w-64 bg-gradient-to-r from-transparent via-[#4DD0E1] to-transparent"
            />

            <motion.p
              variants={textItem}
              className="mt-8 text-lg text-[#4DD0E1]"
            >
              Desarrollo de software, innovación digital <br />
              y soluciones tecnológicas a la medida.
            </motion.p>

            {/* BOTONES */}
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
                  boxShadow: '0 0 25px rgba(77,208,225,0.5)',
                  backgroundColor: 'rgba(77,208,225,0.15)',
                }}
                whileTap={{ scale: 0.95 }}
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

      {/* CARDS FLOTANTES */}
      <div className="relative z-20 -mt-40 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 px-8">

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
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="
                backdrop-blur-xl
                bg-white/5
                border border-[#4DD0E1]/30
                rounded-2xl p-8
                shadow-[0_0_40px_rgba(77,208,225,0.25)]
                hover:shadow-[0_0_60px_rgba(77,208,225,0.4)]
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
      </div>
    </section>
  );
};

export default HeroSection;
