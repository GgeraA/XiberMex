// src/components/layout/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar proyecto actual basado en la ruta
  const getCurrentProject = () => {
    if (location.pathname.includes('/proyectos/maria')) {
      return 'maria';
    } else if (location.pathname.includes('/proyectos/puntomovil')) {
      return 'puntomovil';
    }
    return 'home';
  };

  const currentProject = getCurrentProject();

  // Calcular estilos según proyecto y scroll
  const getNavbarStyles = () => {
    const isProjectPage = currentProject !== 'home';

    if (!isScrolled) {
      // Cuando scroll es 0 o menor a 20
      if (currentProject === 'maria') {
        return {
          background: 'bg-white/80 backdrop-blur-md',
          textColor: 'text-[#0E7E92]',
          border: 'border-b border-[#0E7E92]/20',
          logoColor: 'text-[#0E7E92]',
          sublogoColor: 'text-[#0E7E92]/80',
          buttonLines: 'bg-[#0E7E92]'
        };
      } else if (currentProject === 'puntomovil') {
        return {
          background: 'bg-white/80 backdrop-blur-md',
          textColor: 'text-[#2E7D32]',
          border: 'border-b border-[#2E7D32]/20',
          logoColor: 'text-[#2E7D32]',
          sublogoColor: 'text-[#2E7D32]/80',
          buttonLines: 'bg-[#2E7D32]'
        };
      } else {
        // Home page - fondo oscuro
        return {
          background: 'bg-transparent backdrop-blur-md',
          textColor: 'text-white',
          border: '',
          logoColor: 'text-white',
          sublogoColor: 'text-[#4DD0E1]/80',
          buttonLines: 'bg-white'
        };
      }
    }

    // Cuando scroll es mayor a 20 (navbar sólido)
    if (currentProject === 'maria') {
      return {
        background: 'bg-[#0E7E92]',
        textColor: 'text-white',
        border: 'border-b border-white/20',
        logoColor: 'text-white',
        sublogoColor: 'text-white/90',
        buttonLines: 'bg-white'
      };
    } else if (currentProject === 'puntomovil') {
      return {
        background: 'bg-[#2E7D32]',
        textColor: 'text-white',
        border: 'border-b border-white/20',
        logoColor: 'text-white',
        sublogoColor: 'text-white/90',
        buttonLines: 'bg-white'
      };
    } else {
      // Home page con scroll > 20
      return {
        background: 'bg-[#1C1B3E]',
        textColor: 'text-white',
        border: 'border-b border-[#4DD0E1]/20',
        logoColor: 'text-white',
        sublogoColor: 'text-[#4DD0E1]/80',
        buttonLines: 'bg-white'
      };
    }
  };

  const styles = getNavbarStyles();

  // Obtener color de fondo sólido para el menú móvil
  const getMobileMenuBackground = () => {
    switch (currentProject) {
      case 'maria':
        return 'from-[#0E7E92] via-[#0b6a7a] to-[#0E7E92]';
      case 'puntomovil':
        return 'from-[#2E7D32] via-[#256c29] to-[#2E7D32]';
      default:
        return 'from-[#1C1B3E] via-[#0f0e29] to-[#1C1B3E]';
    }
  };

  const mobileMenuBg = getMobileMenuBackground();

  // Bloquear scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const mainMenuItems = [
    {
      name: 'PROYECTOS',
      dropdownItems: ['MarIA', 'Punto Móvil'],
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
    'MarIA': '/proyectos/maria',
    'Punto Móvil': '/proyectos/puntomovil',
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  // Obtener color del botón hamburguesa según el estado
  const getHamburgerColor = () => {
    if (currentProject === 'home' && !isScrolled) {
      return 'bg-white';
    } else if (currentProject === 'maria' && !isScrolled) {
      return 'bg-[#0E7E92]';
    } else if (currentProject === 'puntomovil' && !isScrolled) {
      return 'bg-[#2E7D32]';
    }
    return 'bg-white';
  };

  const hamburgerColor = getHamburgerColor();

  return (
    <>
      {/* Navbar Principal - Siempre visible */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${styles.background} ${styles.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="group z-50">
              <span className={`text-xl md:text-2xl font-bold tracking-wide transition-colors ${styles.logoColor}`}>
                XIBERMEX
              </span>
              <span className={`block text-xs tracking-widest transition-colors ${styles.sublogoColor}`}>
                Estrategias Tecnológicas
              </span>
            </Link>

            {/* Menú Desktop */}
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
                    whileHover={{ 
                      color: currentProject === 'maria' ? '#FFFFFF' : 
                            currentProject === 'puntomovil' ? '#FFFFFF' : 
                            '#4DD0E1' 
                    }}
                    className={`relative cursor-pointer text-sm tracking-widest uppercase transition-colors ${styles.textColor}`}
                  >
                    {item.name}
                    {/* Línea inferior animada */}
                    <span className={`absolute left-0 -bottom-1 w-0 h-[1px] ${
                      currentProject === 'maria' ? 'bg-white' :
                      currentProject === 'puntomovil' ? 'bg-white' :
                      'bg-[#4DD0E1]'
                    } group-hover:w-full transition-all duration-300`} />
                  </motion.span>

                  {/* Dropdown Desktop */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.25 }}
                        className={`absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2
                                   rounded-xl border ${
                                     currentProject === 'maria' ? 'border-white/30 bg-[#0E7E92]/95' :
                                     currentProject === 'puntomovil' ? 'border-white/30 bg-[#2E7D32]/95' :
                                     'border-[#4DD0E1]/30 bg-[#1C1B3E]/95'
                                   } backdrop-blur-xl
                                   shadow-[0_0_40px_rgba(77,208,225,0.15)]`}
                      >
                        <div className="p-5 space-y-2">
                          {item.dropdownItems.map((sub) => {
                            const route = projectRoutes[sub] || '#';

                            return (
                              <Link
                                key={sub}
                                to={route}
                                className="block text-sm text-[#AAB7C4]
                                           hover:text-white
                                           transition-colors"
                                onClick={() => setActiveDropdown(null)}
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

            {/* Botón Hamburguesa Móvil - Versión Minimalista */}
            <motion.button
              onClick={toggleMobileMenu}
              className={`md:hidden relative z-[60] w-10 h-10 flex items-center justify-center rounded-full ${
                isScrolled || currentProject !== 'home' ? 'bg-white/20' : 'bg-black/10'
              } backdrop-blur-sm border ${
                currentProject === 'maria' && !isScrolled ? 'border-[#0E7E92]/30' :
                currentProject === 'puntomovil' && !isScrolled ? 'border-[#2E7D32]/30' :
                'border-white/20'
              } hover:border-white/30 transition-all duration-300`}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <div className="relative w-5 h-5">
                {/* Línea superior */}
                <motion.span
                  animate={isMobileMenuOpen ?
                    {
                      rotate: 45,
                      y: 8,
                      width: "100%"
                    } :
                    {
                      rotate: 0,
                      y: 0,
                      width: "100%"
                    }
                  }
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-0 left-0 w-full h-[2px] ${hamburgerColor} origin-center rounded-full`}
                />

                {/* Línea media */}
                <motion.span
                  animate={isMobileMenuOpen ?
                    {
                      opacity: 0,
                      x: -5
                    } :
                    {
                      opacity: 1,
                      x: 0
                    }
                  }
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                  }}
                  className={`absolute top-1/2 left-0 w-full h-[2px] ${hamburgerColor} -translate-y-1/2 rounded-full`}
                />

                {/* Línea inferior */}
                <motion.span
                  animate={isMobileMenuOpen ?
                    {
                      rotate: -45,
                      y: -8,
                      width: "100%"
                    } :
                    {
                      rotate: 0,
                      y: 0,
                      width: "100%"
                    }
                  }
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                  }}
                  className={`absolute bottom-0 left-0 w-full h-[2px] ${hamburgerColor} origin-center rounded-full`}
                />
              </div>
            </motion.button>

            {/* Espaciador para desktop */}
            <div className="w-32 hidden md:block" />
          </div>
        </div>
      </nav>

      {/* Menú Móvil - MODAL DE PANTALLA COMPLETA */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay oscuro que cubre TODO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`fixed inset-0 ${
                currentProject === 'maria' ? 'bg-[#0E7E92]/95' :
                currentProject === 'puntomovil' ? 'bg-[#2E7D32]/95' :
                'bg-[#1C1B3E]/95'
              } backdrop-blur-xl z-[55] md:hidden`}
              onClick={closeMobileMenu}
            />

            {/* Modal de pantalla completa */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              className="fixed inset-0 z-[60] md:hidden overflow-hidden"
            >
              {/* Contenido del modal - Scrollable */}
              <div className={`h-full w-full flex flex-col bg-gradient-to-b ${mobileMenuBg}`}>

                {/* Cabecera fija */}
                <div className={`flex-shrink-0 p-6 border-b ${
                  currentProject === 'maria' ? 'border-white/20' :
                  currentProject === 'puntomovil' ? 'border-white/20' :
                  'border-[#4DD0E1]/20'
                } bg-gradient-to-b ${
                  currentProject === 'maria' ? 'from-[#0E7E92]' :
                  currentProject === 'puntomovil' ? 'from-[#2E7D32]' :
                  'from-[#1C1B3E]'
                } to-transparent`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">XIBERMEX</span>
                      <span className="block text-sm text-white/90 mt-1">
                        Estrategias Tecnológicas
                      </span>
                    </div>

                    <button
                      onClick={closeMobileMenu}
                      className={`w-10 h-10 flex items-center justify-center
                               rounded-full border ${
                                 currentProject === 'maria' ? 'border-white/30' :
                                 currentProject === 'puntomovil' ? 'border-white/30' :
                                 'border-[#4DD0E1]/30'
                               }
                               hover:border-white hover:bg-white/10
                               transition-colors`}
                      aria-label="Cerrar menú"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Contenido principal - Scrollable */}
                <div className="flex-grow overflow-y-auto p-6">
                  <div className="space-y-8 max-w-md mx-auto">
                    {mainMenuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className={`bg-gradient-to-r from-transparent ${
                          currentProject === 'maria' ? 'to-white/10' :
                          currentProject === 'puntomovil' ? 'to-white/10' :
                          'to-[#4DD0E1]/5'
                        } 
                                   rounded-2xl p-5 border ${
                                     currentProject === 'maria' ? 'border-white/20' :
                                     currentProject === 'puntomovil' ? 'border-white/20' :
                                     'border-[#4DD0E1]/10'
                                   }
                                   shadow-lg`}
                      >
                        <button
                          onClick={() => setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 rounded-lg ${
                              currentProject === 'maria' ? 'bg-gradient-to-br from-white/20 to-white/10' :
                              currentProject === 'puntomovil' ? 'bg-gradient-to-br from-white/20 to-white/10' :
                              'bg-gradient-to-br from-[#4DD0E1]/20 to-[#00838F]/20'
                            } flex items-center justify-center`}>
                              <span className="text-lg text-white">
                                {index === 0 ? '🚀' : index === 1 ? '💡' : '📚'}
                              </span>
                            </div>
                            <span className="text-xl font-semibold text-white">
                              {item.name}
                            </span>
                          </div>
                          <motion.span
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-white text-xl"
                          >
                            ▼
                          </motion.span>
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-6 space-y-3">
                                {item.dropdownItems.map((sub, subIndex) => {
                                  const route = projectRoutes[sub] || '#';
                                  const isProject = sub === 'MarIA' || sub === 'Punto Móvil';

                                  return (
                                    <motion.div
                                      key={sub}
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: subIndex * 0.05 }}
                                    >
                                      <Link
                                        to={route}
                                        className={`block py-4 px-5 rounded-xl
                                                 ${isProject ?
                                            `bg-gradient-to-r ${
                                              currentProject === 'maria' ? 'from-white/20 to-white/10' :
                                              currentProject === 'puntomovil' ? 'from-white/20 to-white/10' :
                                              'from-[#4DD0E1]/10 to-[#00838F]/10'
                                            } border-white/40` :
                                            'bg-gradient-to-r from-transparent to-white/5 border-white/20'
                                          }
                                                 border
                                                 text-white hover:text-white/90
                                                 hover:border-white
                                                 transition-all duration-300
                                                 flex items-center justify-between`}
                                        onClick={closeMobileMenu}
                                      >
                                        <div className="flex items-center">
                                          <div className={`w-2 h-2 rounded-full mr-3 ${
                                            isProject ? 'bg-white' : 'bg-white/60'
                                          }`} />
                                          <span className="font-medium">{sub}</span>
                                        </div>
                                        {isProject && (
                                          <span className={`text-xs px-2 py-1 rounded-full ${
                                            currentProject === 'maria' ? 'bg-white/30' :
                                            currentProject === 'puntomovil' ? 'bg-white/30' :
                                            'bg-[#4DD0E1]/20'
                                          } text-white`}>
                                            Proyecto
                                          </span>
                                        )}
                                      </Link>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Pie fijo */}
                <div className={`flex-shrink-0 p-6 border-t ${
                  currentProject === 'maria' ? 'border-white/20' :
                  currentProject === 'puntomovil' ? 'border-white/20' :
                  'border-[#4DD0E1]/20'
                } bg-gradient-to-b from-transparent ${
                  currentProject === 'maria' ? 'to-[#0E7E92]' :
                  currentProject === 'puntomovil' ? 'to-[#2E7D32]' :
                  'to-[#1C1B3E]'
                }`}>
                  <p className="text-sm text-center text-white/60">
                    © {new Date().getFullYear()} XIBERMEX - Estrategias Tecnológicas
                  </p>
                  <p className="text-xs text-center text-white/40 mt-2">
                    Todos los derechos reservados
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;