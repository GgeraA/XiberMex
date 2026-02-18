import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionFade from '../ui/SectionFade'

const projects = [
  {
    title: 'MarIA',
    image: '/images/maria2_1.jpg',
    link: '/proyectos/maria',
    category: 'Inteligencia Artificial',
  },
  {
    title: 'Punto Móvil',
    image: '/images/punto_movil_t.jpeg',
    link: '/proyectos/puntomovil',
    category: 'Aplicación Móvil',
  },
]

const AUTO = 5000

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % projects.length)
    }, AUTO)

    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative py-32 -mt-32 overflow-hidden bg-[#0A1024]">

      {/* halo central */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#4DD0E1]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* TITULO */}
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: .9 }}
          className="text-4xl font-bold text-white mb-20"
        >
          Proyectos desarrollados
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* CONTENIDO */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index + 'text'}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: .8 }}
            >

              <p className="text-[#4DD0E1] uppercase tracking-widest text-sm">
                {projects[index].category}
              </p>

              <h3 className="mt-6 text-5xl font-bold text-white relative">

                {projects[index].title}

                {/* NEON LINE */}
                <div className="relative mt-4 h-[2px] w-64 overflow-hidden bg-white/10">

                  <motion.div
                    className="absolute top-0 left-0 h-full w-20"
                    animate={{ x: ['-40%', '140%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, #4DD0E1, transparent)',
                      boxShadow: '0 0 15px rgba(77,208,225,.8)',
                    }}
                  />

                </div>

              </h3>

              <p className="mt-6 text-[#AAB7C4] max-w-md">
                Soluciones digitales modernas impulsadas por inteligencia
                artificial y desarrollo de software avanzado.
              </p>

              <Link
                to={projects[index].link}
                className="inline-block mt-10 text-[#4DD0E1] border border-[#4DD0E1]/40 px-8 py-3 rounded-md hover:bg-[#4DD0E1]/10 transition"
              >
                Ver proyecto →
              </Link>

            </motion.div>
          </AnimatePresence>

           {/* IMAGEN */}
          <div className="relative w-full h-[400px] rounded-xl flex items-center justify-center">

            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={projects[index].image}
                initial={{ opacity: 0, x: 120, scale: .95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -120, scale: .9 }}
                transition={{ duration: .9, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-contain rounded-xl
                 shadow-[0_0_40px_rgba(77,208,225,0.25)] "
              />
            </AnimatePresence>

          </div>
        </div>

        {/* indicadores */}
        <div className="mt-16 flex gap-4">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-8 rounded-full transition ${i === index ? 'bg-[#4DD0E1]' : 'bg-white/20'
                }`}
            />
          ))}
        </div>

      </div>
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0E1A2B] to-transparent" />
    </section>
  )
}
<SectionFade bottom />
