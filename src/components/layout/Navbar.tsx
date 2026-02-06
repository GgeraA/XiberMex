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

  // Determinar si estamos en una página con fondo claro
  const isLightBackgroundPage = () => {
    return location.pathname.includes('/proyectos/maria') || 
           location.pathname.includes('/proyectos/puntomovil');
  };

  // Calcular colores según fondo y scroll
  const getNavbarStyles = () => {
    const isLightPage = isLightBackgroundPage();
    
    if (isScrolled) {
      // Cuando hay scroll, navbar sólido
      return {
        background: 'bg-[#1C1B3E]',
        textColor: 'text-white',
        border: 'border-b border-[#4DD0E1]/20',
        logoColor: 'text-white',
        sublogoColor: 'text-[#4DD0E1]/80',
        buttonLines: 'bg-white'
      };
    }
    
    if (isLightPage) {
      // Páginas con fondo claro (MarIA, Punto Móvil)
      return {
        background: 'bg-white/90 backdrop-blur-md',
        textColor: 'text-[#1C1B3E]',
        border: 'border-b border-gray-200',
        logoColor: 'text-[#1C1B3E]',
        sublogoColor: 'text-[#00838F]',
        buttonLines: 'bg-[#1C1B3E]'
      };
    }
    
    // Páginas con fondo oscuro (Home, etc.)
    return {
      background: 'bg-transparent backdrop-blur-md',
      textColor: 'text-white',
      border: '',
      logoColor: 'text-white',
      sublogoColor: 'text-[#4DD0E1]/80',
      buttonLines: 'bg-white'
    };
  };

  const styles = getNavbarStyles();

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
                    whileHover={{ color: '#4DD0E1' }}
                    className={`relative cursor-pointer text-sm tracking-widest uppercase transition-colors ${styles.textColor}`}
                  >
                    {item.name}
                    {/* Línea inferior animada */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#4DD0E1] group-hover:w-full transition-all duration-300" />
                  </motion.span>

                  {/* Dropdown Desktop */}
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

            {/* Botón Hamburguesa Móvil */}
            <motion.button
              onClick={toggleMobileMenu}
              className="md:hidden relative z-[60] w-12 h-12 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={isMobileMenuOpen ? 
                    { rotate: 45, y: 9 } : 
                    { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className={`absolute top-0 left-0 w-full h-0.5 origin-center ${styles.buttonLines}`}
                />
                <motion.span
                  animate={isMobileMenuOpen ? 
                    { opacity: 0, x: -10 } : 
                    { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.2 }}
                  className={`absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 ${styles.buttonLines}`}
                />
                <motion.span
                  animate={isMobileMenuOpen ? 
                    { rotate: -45, y: -9 } : 
                    { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 w-full h-0.5 origin-center ${styles.buttonLines}`}
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
              className="fixed inset-0 bg-[#1C1B3E]/95 backdrop-blur-xl z-[55] md:hidden"
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
              <div className="h-full w-full flex flex-col bg-gradient-to-b from-[#1C1B3E] via-[#0f0e29] to-[#1C1B3E]">
                
                {/* Cabecera fija */}
                <div className="flex-shrink-0 p-6 border-b border-[#4DD0E1]/20 
                              bg-gradient-to-b from-[#1C1B3E] to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-white">XIBERMEX</span>
                      <span className="block text-sm text-[#4DD0E1]/80 mt-1">
                        Estrategias Tecnológicas
                      </span>
                    </div>
                    
                    <button
                      onClick={closeMobileMenu}
                      className="w-10 h-10 flex items-center justify-center
                               rounded-full border border-[#4DD0E1]/30
                               hover:border-[#4DD0E1] hover:bg-[#4DD0E1]/10
                               transition-colors"
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
                        className="bg-gradient-to-r from-transparent to-[#4DD0E1]/5 
                                   rounded-2xl p-5 border border-[#4DD0E1]/10
                                   shadow-lg"
                      >
                        <button
                          onClick={() => setActiveDropdown(
                            activeDropdown === item.name ? null : item.name
                          )}
                          className="flex items-center justify-between w-full text-left"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4DD0E1]/20 to-[#00838F]/20 
                                          flex items-center justify-center">
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
                            className="text-[#4DD0E1] text-xl"
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
                                                   'bg-gradient-to-r from-[#4DD0E1]/10 to-[#00838F]/10 border-[#4DD0E1]/40' : 
                                                   'bg-gradient-to-r from-transparent to-[#4DD0E1]/5 border-[#4DD0E1]/20'
                                                 }
                                                 border
                                                 text-white hover:text-[#4DD0E1]
                                                 hover:border-[#4DD0E1]
                                                 transition-all duration-300
                                                 flex items-center justify-between`}
                                        onClick={closeMobileMenu}
                                      >
                                        <div className="flex items-center">
                                          <div className={`w-2 h-2 rounded-full mr-3 ${isProject ? 'bg-[#4DD0E1]' : 'bg-white/60'}`} />
                                          <span className="font-medium">{sub}</span>
                                        </div>
                                        {isProject && (
                                          <span className="text-xs px-2 py-1 rounded-full bg-[#4DD0E1]/20 text-[#4DD0E1]">
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
                <div className="flex-shrink-0 p-6 border-t border-[#4DD0E1]/20
                              bg-gradient-to-b from-transparent to-[#1C1B3E]">
                  <p className="text-sm text-center text-[#AAB7C4]/60">
                    © {new Date().getFullYear()} XIBERMEX - Estrategias Tecnológicas
                  </p>
                  <p className="text-xs text-center text-[#AAB7C4]/40 mt-2">
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