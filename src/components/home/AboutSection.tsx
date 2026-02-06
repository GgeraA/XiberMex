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

  const particles = useMemo(() => {
    return generateParticles()
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-[#1C1B3E] to-[#0E1A2B] py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0E1A2B] to-transparent" />
      {/* HALO ROTATORIO */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full border border-[#4DD0E1]/10 -translate-x-1/2 -translate-y-1/2"
      />

      {/* GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#4DD0E1]/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* MICRO PARTICULAS */}
      {particles.map((particle, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-[#4DD0E1]/40 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{ y: [-10, 10] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            top: '50%',
            left: '50%',
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12 items-center">

        {/* QUIENES SOMOS */}
        <motion.div
          animate={{ opacity: active === 'mind' ? .4 : 1 }}
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

          {/* DATA FLOW */}
          <motion.div
            animate={{ backgroundPosition: ['0%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="mt-8 h-px"
            style={{
              background:
                'linear-gradient(90deg,transparent,#4DD0E1,transparent)',
              backgroundSize: '200% 100%',
            }}
          />
        </motion.div>

        {/* DIAGRAMA MARIA (solo desktop) */}
        <div className="relative hidden md:flex justify-center">

          <div className="relative">

            <img
              src="/images/Mar.png"
              className="w-48 opacity-90 pointer-events-none"
            />

            {/* CORAZON */}
            <div
              onMouseEnter={() => setActive('heart')}
              onMouseLeave={() => setActive(null)}
              className="absolute top-[40%] left-1/2 -translate-x-1/2 cursor-pointer"
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#4DD0E1] shadow-[0_0_15px_#4DD0E1]" />
                <div className="absolute inset-0 animate-ping bg-[#4DD0E1]/50 rounded-full" />
              </div>
            </div>

            {/* MENTE */}
            <div
              onMouseEnter={() => setActive('mind')}
              onMouseLeave={() => setActive(null)}
              className="absolute top-[18%] left-1/2 -translate-x-1/2 cursor-pointer"
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#00838F] shadow-[0_0_15px_#00838F]" />
                <div className="absolute inset-0 animate-ping bg-[#00838F]/50 rounded-full" />
              </div>
            </div>

            {/* LINEAS */}
            <motion.div
              animate={{ backgroundPosition: ['0%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[18%] left-full w-32 h-px"
              style={{
                background:
                  'linear-gradient(90deg,#4DD0E1,transparent)',
                backgroundSize: '200% 100%',
              }}
            />

            <motion.div
              animate={{ backgroundPosition: ['200%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute top-[40%] right-full w-32 h-px"
              style={{
                background:
                  'linear-gradient(90deg,#00838F,transparent)',
                backgroundSize: '200% 100%',
              }}
            />

          </div>
        </div>

        {/* COMO LO HACEMOS */}
        <motion.div
          animate={{ opacity: active === 'heart' ? .4 : 1 }}
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

          {/* DATA FLOW */}
          <motion.div
            animate={{ backgroundPosition: ['0%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="mt-8 h-px"
            style={{
              background:
                'linear-gradient(90deg,transparent,#00838F,transparent)',
              backgroundSize: '200% 100%',
            }}
          />
        </motion.div>

      </div>

      {/* MOBILE EXTRA */}
      <div className="md:hidden mt-16 px-8 text-center text-[#AAB7C4]">
        <p>Explora nuestros procesos y filosofía deslizando.</p>
      </div>

    </section>
  )
}
