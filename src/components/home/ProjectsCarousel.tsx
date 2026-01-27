import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'MarIA',
    image: '/images/maria.jpeg',
    link: '/proyectos/maria',
    category: 'Inteligencia Artificial',
    stack: ['React', 'Node.js', 'OpenAI'],
  },
  {
    title: 'Punto Móvil',
    image: '/images/puntomovil.jpeg',
    link: '/proyectos/puntomovil',
    category: 'Aplicación Móvil',
    stack: ['React Native', 'Firebase'],
  },
];

const AUTO_PLAY_DELAY = 4000;

const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const prevIndex =
    (activeIndex - 1 + projects.length) % projects.length;
  const nextIndex =
    (activeIndex + 1) % projects.length;

  // 🧲 Autoplay
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="relative py-32 overflow-hidden bg-[#1C1B3E]">

      {/* 🌊 Background animado */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          background:
            'linear-gradient(120deg, #1C1B3E, #00838F, #4DD0E1)',
          backgroundSize: '200% 200%',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white text-center mb-20"
        >
          Proyectos desarrollados
        </motion.h2>

        <div
          className="flex items-center justify-center gap-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* PROYECTO ANTERIOR */}
          <div
            className="hidden md:block cursor-pointer opacity-60 hover:opacity-80 transition"
            onClick={() => setActiveIndex(prevIndex)}
          >
            <img
              src={projects[prevIndex].image}
              className="h-72 w-[420px] object-cover rounded-2xl rotate-[-4deg]"
            />
          </div>

          {/* PROYECTO ACTIVO */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={projects[activeIndex].link}
                className="group relative block"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-[#4DD0E1]/40">

                  {/* Imagen */}
                  <img
                    src={projects[activeIndex].image}
                    className="h-[440px] w-[620px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* 🖼 Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Texto */}
                  <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <p className="text-sm text-[#4DD0E1] uppercase tracking-wider">
                      {projects[activeIndex].category}
                    </p>

                    <h3 className="text-3xl font-bold text-white mt-1">
                      {projects[activeIndex].title}
                    </h3>

                    <p className="mt-2 text-sm text-[#AAB7C4]">
                      {projects[activeIndex].stack.join(' · ')}
                    </p>

                    <span className="inline-block mt-4 text-[#4DD0E1] font-semibold">
                      Ver proyecto →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* PROYECTO SIGUIENTE */}
          <div
            className="hidden md:block cursor-pointer opacity-60 hover:opacity-80 transition"
            onClick={() => setActiveIndex(nextIndex)}
          >
            <img
              src={projects[nextIndex].image}
              className="h-72 w-[420px] object-cover rounded-2xl rotate-[4deg]"
            />
          </div>
        </div>

        {/* INDICADORES */}
        <div className="mt-14 flex justify-center gap-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-[#4DD0E1] scale-125'
                  : 'bg-[#AAB7C4]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
