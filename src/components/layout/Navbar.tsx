import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const menu = [
    {
      name: 'PROYECTOS',
      items: ['MarIA', 'Punto móvil'],
    },
    {
      name: 'SOLUCIONES',
      items: [
        'Consultoría IT',
        'Transformación digital',
        'Automatización',
      ],
    },
    {
      name: 'RECURSOS',
      items: ['Blog', 'Documentación'],
    },
  ]

  const routes: Record<string, string> = {
    MarIA: '/proyectos/maria',
    'Punto móvil': '/proyectos/puntomovil',
    'Consultoría IT': '/soluciones/consultoria',
    'Transformación digital': '/soluciones/transformacion',
    Automatización: '/soluciones/automatizacion',
    Blog: '/blog',
    Documentación: '/docs',
  }

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled
            ? 'bg-[#0A1024]/70 backdrop-blur-xl border-b border-[#4DD0E1]/20'
            : 'bg-transparent'}
      `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
  <motion.img
    src="/images/Logooo.png"
    alt="Xibermex"
    className="
      h-17 md:h-20 lg:h-24
      w-auto
      object-contain
    "
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
  />
</Link>


          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-12 absolute left-1/2 -translate-x-1/2">

            {menu.map(m => (
              <div
                key={m.name}
                onMouseEnter={() => setActive(m.name)}
                onMouseLeave={() => setActive(null)}
                className="relative"
              >
                <span className="text-white tracking-widest cursor-pointer hover:text-[#4DD0E1] transition">
                  {m.name}
                </span>

                <AnimatePresence>
                  {active === m.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: .25 }}
                      className="
                        absolute top-full mt-4 left-1/2 -translate-x-1/2
                        bg-[#0B1025]/90 backdrop-blur-xl
                        border border-[#4DD0E1]/30
                        rounded-xl w-60
                      "
                    >
                      <div className="p-5 space-y-2">
                        {m.items.map(i => (
                          <Link
                            key={i}
                            to={routes[i]}
                            className="block text-sm text-[#AAB7C4] hover:text-[#4DD0E1]"
                          >
                            {i}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="
            md:hidden w-10 h-10 rounded-full
            bg-white/10 backdrop-blur
            border border-white/20
            flex items-center justify-center
          "
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050914]/95 backdrop-blur-xl"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: .4 }}
              className="p-10"
            >

              <button
                onClick={() => setOpen(false)}
                className="text-white text-xl mb-10"
              >
                ✕
              </button>

              {menu.map(m => (
                <div key={m.name} className="mb-8">
                  <p
                    onClick={() => setActive(active === m.name ? null : m.name)}
                    className="text-[#4DD0E1] tracking-widest cursor-pointer"
                  >
                    {m.name}
                  </p>

                  {/* Dropdown Desktop */}
                  <AnimatePresence>
                    {active === m.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-3 space-y-2"
                      >
                        {m.items.map(i => (
                          <Link
                            key={i}
                            to={routes[i]}
                            onClick={() => setOpen(false)}
                            className="block text-[#AAB7C4]"
                          >
                            {i}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              ))}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
