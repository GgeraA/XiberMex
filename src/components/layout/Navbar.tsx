// src/components/layout/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

    // Datos para los dropdowns principales
    const mainMenuItems = [
        {
            name: 'PROYECTOS',
            dropdownItems: [
                'MarIA',
                'Punto móvil',
            ]
        },
        {
            name: 'SOLUCIONES',
            dropdownItems: [
                'Consultoría IT',
                'Transformación digital',
                'Automatización de procesos',
                'Business Intelligence',
                'Ciberseguridad',
                'Ver todas las funciones'
            ]
        },
        {
            name: 'RECURSOS',
            dropdownItems: [
                'Blog técnico',
                'Documentación',
                'Tutoriales',
                'Casos de éxito',
                'Centro de ayuda',
                'Ver todas las funciones'
            ]
        },
    ];

    // Datos para los dropdowns
    const featureDropdowns = [
        {
            title: 'SITIO WEB',
            items: [
                'Sitios web',
                'Plantillas web',
                'Creador de sitios web con IA',
                'Diseño inteligente',
                'Portafolios',
                'Blogs',
                'Analytics',
                'Enterprise',
                'Ver todas las funciones'
            ]
        },
        {
            title: 'COMERCIO',
            items: [
                'Comercio electrónico',
                'Plantillas de ecommerce',
                'Tiendas online',
                'Servicios',
                'Facturación',
                'Reserva de citas',
                'Productos digitales',
                'Donaciones',
                'Soluciones financieras',
                'Ver todas las funciones'
            ]
        },
        {
            title: 'MARKETING',
            items: [
                'Herramientas de marketing',
                'Email Marketing',
                'Herramientas para SEO',
                'Herramientas gratuitas',
                'Herramientas PARA EMPRESAS',
                'Búsqueda de dominios',
                'Transferencia de dominios',
                'Correo empresarial'
            ]
        }
    ];

    const projectRoutes: Record<string, string> = {
        'MarIA': '/proyectos/maria',
        'Punto móvil': '/proyectos/puntomovil',
    };

    const handleMouseEnter = (itemName: string) => {
        setActiveDropdown(itemName);
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        // Solo ocultar si el mouse sale del contenedor completo
        const relatedTarget = e.relatedTarget as HTMLElement;
        if (!e.currentTarget.contains(relatedTarget)) {
            setActiveDropdown(null);
        }
    };

    return (
        <nav className="bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo a la izquierda */}
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="flex flex-col hover:opacity-80 transition-opacity"
                        >
                            <span className="text-2xl font-bold text-[#1C1B3E] tracking-tight">
                                XIBERMEX
                            </span>
                            <span className="text-[#AAB7C4] text-xs font-normal tracking-wide mt-0.5">
                                Estrategias Tecnológicas
                            </span>
                        </Link>
                    </div>

                    {/* Menú central - Solo texto sin estilos */}
                    <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        {mainMenuItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.name)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="text-[#1C1B3E] font-normal text-sm cursor-pointer hover:text-[#00838F] transition-colors">
                                    {item.name}
                                </span>

                                {/* Dropdown que aparece al hacer hover */}
                                {activeDropdown === item.name && (
                                    <div
                                        className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg z-50 rounded"
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="py-3 px-4">
                                            {item.name === 'PROYECTOS' && (
                                                <div className="mb-2">
                                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                        PROYECTOS DESTACADOS
                                                    </h4>
                                                </div>
                                            )}

                                            <div className="space-y-2">
                                                {item.dropdownItems.map((subItem) => {
                                                    // SI ES LA SECCIÓN DE PROYECTOS, USA LOS ENLACES
                                                    if (item.name === 'PROYECTOS') {
                                                        const route = projectRoutes[subItem];

                                                        return (
                                                            <Link
                                                                key={subItem}
                                                                to={route || '#'}
                                                                className="block py-1.5 text-sm text-gray-700 hover:text-[#00838F] hover:bg-gray-50 -mx-2 px-2 rounded transition-colors"
                                                            >
                                                                <div className="flex items-center">
                                                                    <div className="w-2 h-2 bg-[#00838F] rounded-full mr-2"></div>
                                                                    {subItem}
                                                                </div>
                                                            </Link>
                                                        );
                                                    }

                                                    return (
                                                        <Link
                                                            key={subItem}
                                                            to="#"
                                                            className={`block py-1.5 text-sm ${subItem.includes('Ver todas las funciones')
                                                                ? 'font-semibold text-[#00838F] mt-2 pt-2 border-t border-gray-100'
                                                                : 'text-gray-700 hover:text-[#00838F]'
                                                                } transition-colors`}
                                                        >
                                                            {subItem}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Dropdowns de características - SITIO WEB, COMERCIO, MARKETING */}
                        {featureDropdowns.map((dropdown) => (
                            <div
                                key={dropdown.title}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(dropdown.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="text-[#1C1B3E] font-normal text-sm cursor-pointer hover:text-[#00838F] transition-colors">
                                    {dropdown.title}
                                </span>

                                {/* Dropdown grande tipo Squarespace */}
                                {activeDropdown === dropdown.title && (
                                    <div
                                        className="absolute left-0 top-full mt-2 w-72 bg-white border border-gray-200 shadow-xl z-50 rounded-lg"
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <div className="p-5">
                                            <h3 className="text-lg font-semibold text-[#1C1B3E] mb-3">
                                                {dropdown.title}
                                            </h3>
                                            <div className="space-y-2">
                                                {dropdown.items.map((item) => (
                                                    <div key={item}>
                                                        {item === 'Ver todas las funciones' ? (
                                                            <div className="mt-3 pt-3 border-t border-gray-100">
                                                                <Link
                                                                    to="#"
                                                                    className="text-sm font-semibold text-[#00838F] hover:underline"
                                                                >
                                                                    {item}
                                                                </Link>
                                                            </div>
                                                        ) : item === 'Herramientas PARA EMPRESAS' ? (
                                                            <div className="mt-3 pt-3 border-t border-gray-100">
                                                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 block">
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        ) : (
                                                            <Link
                                                                to="#"
                                                                className="block py-1.5 text-sm text-gray-700 hover:text-[#00838F] transition-colors"
                                                            >
                                                                {item}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Espacio vacío a la derecha para balance */}
                    <div className="hidden md:block w-32"></div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;