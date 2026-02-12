import { motion } from 'framer-motion'
//import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative bg-[#070B18] pt-20 pb-10 overflow-hidden">

      {/* LINEA SUPERIOR NEON */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#4DD0E1] to-transparent" />

      {/* glow suave */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#4DD0E1]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* LOGO */}
        <div className="flex justify-center mb-10">
          <img
            src="/images/LogoFooter.png"
            alt="XIBERMEX"
            className="h-14 opacity-90"
          />
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-10 text-sm tracking-widest uppercase">

          {['Servicios', 'Proyectos', 'Contacto'].map((item) => (
            <motion.div
              key={item}
              whileHover={{ color: '#4DD0E1' }}
              transition={{ duration: .3 }}
              className="text-[#AAB7C4] cursor-pointer"
            >
              {item}
            </motion.div>
          ))}

        </div>

        {/* DIVIDER */}
        <div className="mt-12 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* COPYRIGHT */}
        <p className="mt-8 text-center text-xs text-[#AAB7C4]/60 tracking-widest">
          © {new Date().getFullYear()} XIBERMEX — ESTRATEGIAS TECNOLÓGICAS
        </p>

      </div>
    </footer>
  )
}
