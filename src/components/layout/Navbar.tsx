// src/components/layout/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

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
        'Ver todas las funciones',
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
        'Ver todas las funciones',
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

          {/* Menú central */}
          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {mainMenuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Item */}
                <motion.span
                  whileHover={{ color: '#4DD0E1' }}
                  className="relative cursor-pointer text-sm tracking-widest text-white uppercase"
                >
                  {item.name}
                  {/* Línea inferior animada */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#4DD0E1] group-hover:w-full transition-all duration-300" />
                </motion.span>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2
                                 rounded-xl border border-[#4DD0E1]/30
                                 bg-[#1C1B3E]/95 backdrop-blur-xl
                                 shadow-[0_0_40px_rgba(77,208,225,0.15)]"
                    >
                      <div className="p-5 space-y-2">
                        {item.dropdownItems.map((sub) => {
                          const route = projectRoutes[sub] || '#';

                          return (
                            <Link
                              key={sub}
                              to={route}
                              className="block text-sm text-[#AAB7C4]
                                         hover:text-[#4DD0E1]
                                         transition-colors"
                            >
                              {sub}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Espaciador */}
          <div className="w-32 hidden md:block" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
