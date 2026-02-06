import { motion } from 'framer-motion'

const DividerBlock = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0E1A2B]">

      {/* GLOW CENTRAL */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#4DD0E1]/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* LINEA TRON ANIMADA */}
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
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="p-8 md:p-10 rounded-2xl bg-white/5 border border-[#4DD0E1]/30 backdrop-blur-xl"
        >
          <span className="text-xs tracking-widest uppercase text-[#4DD0E1]">
            Misión
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Impulsar la transformación digital
          </h3>

          <p className="mt-6 text-[#AAB7C4] leading-relaxed text-sm md:text-base">
            Impulsar la transformación digital de empresas, comunidades y proyectos mediante
            soluciones tecnológicas inteligentes, accesibles y seguras, que mejoren la vida de las
            personas y potencien la competitividad de nuestros clientes.
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

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8, delay: .15 }}
          className="p-8 md:p-10 rounded-2xl bg-white/5 border border-[#00838F]/35 backdrop-blur-xl"
        >
          <span className="text-xs tracking-widest uppercase text-[#00838F]">
            Visión
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white">
            Referente latinoamericano en innovación
          </h3>

          <p className="mt-6 text-[#AAB7C4] leading-relaxed text-sm md:text-base">
            Convertirnos en un referente latinoamericano en innovación tecnológica, liderando
            proyectos que integren IA, automatización y comunicación digital, con impacto positivo en la
            sociedad y en la economía global.
          </p>

          {/* DATA FLOW */}
          <motion.div
            animate={{ backgroundPosition: ['200%', '0%'] }}
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
    </section>
  )
}

export default DividerBlock
