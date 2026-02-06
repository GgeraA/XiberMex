// src/components/layout/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const mainMenuItems = [
    {
      name: 'PROYECTOS',
      dropdownItems: ['MarIA', 'Punto móvil'],
    },
    {
      name: 'SOLUCIONES',
      dropdownItems: [
        'Consultoría IT',
        'Transformación digital',
        'Automatización de procesos',
        'Business Intelligence',
        'Ciberseguridad',
      ],
    },
    {
      name: 'RECURSOS',
      dropdownItems: [
        'Blog técnico',
        'Documentación',
        'Tutoriales',
        'Casos de éxito',
        'Centro de ayuda',
      ],
    },
  ];

  const projectRoutes: Record<string, string> = {
    MarIA: '/proyectos/maria',
    'Punto móvil': '/proyectos/puntomovil',
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="group">
            <span className="text-2xl font-bold tracking-wide text-white">
              XIBERMEX
            </span>
            <span className="block text-xs tracking-widest text-[#4DD0E1]/80">
              Estrategias Tecnológicas
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {mainMenuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.span
                  whileHover={{ color: '#4DD0E1' }}
                  className="cursor-pointer text-sm tracking-widest text-white uppercase"
                >
                  {item.name}
                </motion.span>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2
                      rounded-xl border border-[#4DD0E1]/30
                      bg-[#1C1B3E]/95 backdrop-blur-xl"
                    >
                      <div className="p-5 space-y-2">
                        {item.dropdownItems.map((sub) => (
                          <Link
                            key={sub}
                            to={projectRoutes[sub] || '#'}
                            className="block text-sm text-[#AAB7C4] hover:text-[#4DD0E1]"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-[#4DD0E1] text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#0B0E2A]/95 backdrop-blur-xl z-50"
          >
            <div className="p-8">

              {/* Close */}
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#4DD0E1] text-xl mb-10"
              >
                ✕
              </button>

              {mainMenuItems.map((item) => (
                <div key={item.name} className="mb-8">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.name ? null : item.name)
                    }
                    className="text-white tracking-widest uppercase mb-3"
                  >
                    {item.name}
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 space-y-2"
                      >
                        {item.dropdownItems.map((sub) => (
                          <Link
                            key={sub}
                            onClick={() => setMobileOpen(false)}
                            to={projectRoutes[sub] || '#'}
                            className="block text-[#AAB7C4]"
                          >
                            {sub}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
