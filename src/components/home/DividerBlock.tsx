import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  { value: 45, label: 'Clientes' },
  { value: 120, label: 'Proyectos' },
  { value: 99, label: 'Satisfacción %' },
  { value: 6, label: 'Años experiencia' },
]

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: false })

  useEffect(() => {
    if (!ref.current) return

    if (inView) {
      animate(0, value, {
        duration: 2,
        onUpdate(v) {
          ref.current!.textContent = Math.round(v).toString()
        },
      })
    } else {
      ref.current.textContent = '0'
    }
  }, [inView, value])

  return <span ref={ref}>0</span>
}

export default function DividerBlock() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0A1024] to-[#0E1A2B]">

      {/* halos */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] border border-[#4DD0E1]/10 rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* linea tron */}
      <motion.div
        animate={{ backgroundPosition: ['0%', '200%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 w-[70%] h-px -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'linear-gradient(90deg,transparent,#4DD0E1,transparent)',
          backgroundSize: '200% 100%',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* MISION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .8 }}
          className="p-8 rounded-2xl bg-white/5 border border-[#4DD0E1]/30 backdrop-blur-xl"
        >
          <span className="text-xs tracking-widest uppercase text-[#4DD0E1]">
            Misión
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Impulsar la transformación digital
          </h3>

          <p className="mt-6 text-[#AAB7C4] text-sm leading-relaxed">
            Impulsar la transformación digital de empresas mediante soluciones tecnológicas inteligentes, accesibles y seguras.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: .8, delay: .15 }}
          className="p-8 rounded-2xl bg-white/5 border border-[#00838F]/35 backdrop-blur-xl"
        >
          <span className="text-xs tracking-widest uppercase text-[#00838F]">
            Visión
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Innovación latinoamericana
          </h3>

          <p className="mt-6 text-[#AAB7C4] text-sm leading-relaxed">
            Liderar proyectos que integren IA, automatización y comunicación digital.
          </p>
        </motion.div>
      </div>

      {/* STATS */}

      <div className="relative z-10 mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto px-6">

        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: .7, delay: i * .1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-[#4DD0E1]">
              +<Counter value={s.value} />
            </div>

            <p className="mt-2 text-xs uppercase tracking-widest text-[#AAB7C4]">
              {s.label}
            </p>

            {/* data flow */}
            <motion.div
              animate={{ backgroundPosition: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="mx-auto mt-4 h-px w-24"
              style={{
                background:
                  'linear-gradient(90deg,transparent,#4DD0E1,transparent)',
                backgroundSize: '200% 100%',
              }}
            />
          </motion.div>
        ))}

      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0E1A2B] to-transparent" />
    </section>
  )
}
