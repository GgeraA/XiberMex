import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

function generateParticles() {
  return [...Array(20)].map(() => ({
    x: Math.random() * 800 - 400,
    y: Math.random() * 600 - 300,
    duration: 4 + Math.random() * 4,
  }))
}

export default function AboutSection() {
  const [active, setActive] = useState<'heart' | 'mind' | null>(null)
  const particles = useMemo(() => generateParticles(), [])

  return (
    <section className="relative bg-gradient-to-b from-[#1C1B3E] to-[#0E1A2B] py-32 overflow-hidden">

      {/* HALO */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full border border-[#4DD0E1]/10 -translate-x-1/2 -translate-y-1/2"
      />

      {/* GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#4DD0E1]/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* PARTICULAS */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-[#4DD0E1]/40 rounded-full"
          initial={{ x: p.x, y: p.y }}
          animate={{ y: [-10, 10] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '50%', left: '50%' }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12 items-center">

        {/* QUIENES SOMOS */}
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          animate={{
            opacity: active === 'heart' ? 0.4 : 1,
            filter: active === 'mind' ? 'blur(0px)' : active ? 'blur(2px)' : 'blur(0px)',
            boxShadow: active === 'mind'
              ? '0 0 35px rgba(77,208,225,.25)'
              : '0 0 0 rgba(0,0,0,0)',
          }}
          transition={{ type: 'spring', stiffness: 120 }}
          onMouseEnter={() => setActive('mind')}
          onMouseLeave={() => setActive(null)}
          className="p-10 rounded-2xl border border-[#4DD0E1]/25 bg-white/5 backdrop-blur-xl"
        >
          <span className="text-xs tracking-widest text-[#4DD0E1] uppercase">
            Sobre nosotros
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Quiénes somos
          </h2>

          <p className="mt-6 text-[#AAB7C4]">
            Somos una empresa enfocada en desarrollo de software,
            automatización e inteligencia artificial.
          </p>
        </motion.div>

        {/* IMAGEN CENTRAL */}
        <div className="relative hidden md:flex justify-center">

          <div className="relative">

            <img
              src="/images/NewMarIA.png"
              className="w-49 opacity-90 pointer-events-none"
            />

            {/* MENTE */}
            <div
              onMouseEnter={() => setActive('mind')}
              onMouseLeave={() => setActive(null)}
              className="absolute top-[45%] left-1/2 -translate-x-1/2 cursor-pointer"
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#00838F] shadow-[0_0_15px_#00838F]" />
                <div className="absolute inset-0 animate-ping bg-[#00838F]/50 rounded-full" />
              </div>

              {/* LINEA A CARD IZQUIERDO */}
              <motion.div
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 right-full w-24 h-px origin-right"
                style={{ background: 'linear-gradient(90deg,#4DD0E1,transparent)' }}
              />
            </div>

            {/* CORAZON */}
            <div
              onMouseEnter={() => setActive('heart')}
              onMouseLeave={() => setActive(null)}
              className="absolute top-[23%] left-1/2 -translate-x-1/2 cursor-pointer"
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#4DD0E1] shadow-[0_0_15px_#4DD0E1]" />
                <div className="absolute inset-0 animate-ping bg-[#4DD0E1]/50 rounded-full" />
              </div>

              {/* LINEA A CARD DERECHO */}
              <motion.div
                animate={{ scaleX: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-full w-24 h-px origin-left"
                style={{ background: 'linear-gradient(90deg,#00838F,transparent)' }}
              />
            </div>

          </div>
        </div>

        {/* COMO LO HACEMOS */}
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          animate={{
            opacity: active === 'mind' ? 0.4 : 1,
            filter: active === 'heart' ? 'blur(0px)' : active ? 'blur(2px)' : 'blur(0px)',
            boxShadow: active === 'heart'
              ? '0 0 35px rgba(0,131,143,.3)'
              : '0 0 0 rgba(0,0,0,0)',
          }}
          transition={{ type: 'spring', stiffness: 120 }}
          onMouseEnter={() => setActive('heart')}
          onMouseLeave={() => setActive(null)}
          className="p-10 rounded-2xl border border-[#00838F]/35 bg-white/5 backdrop-blur-xl"
        >
          <span className="text-xs tracking-widest text-[#00838F] uppercase">
            Metodología
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Cómo lo hacemos
          </h2>

          <p className="mt-6 text-[#AAB7C4]">
            Diseñamos, prototipamos y desarrollamos productos digitales
            con metodologías ágiles.
          </p>
        </motion.div>

      </div>

    </section>
  )
}
