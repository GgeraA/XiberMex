import { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'MarIA',
    image: '/images/maria.jpeg',
    link: '/proyectos/maria',
  },
  {
    title: 'Punto Móvil',
    image: '/images/puntomovil.jpeg',
    link: '/proyectos/puntomovil',
  },
];

const ProjectsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex =
    (activeIndex - 1 + projects.length) % projects.length;
  const nextIndex =
    (activeIndex + 1) % projects.length;

  return (
    <section className="bg-[#1C1B3E] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Proyectos desarrollados
        </h2>

        {/* CAROUSEL */}
        <div className="relative flex items-center justify-center gap-12">

          {/* PROYECTO ANTERIOR */}
          <div
            className="hidden md:block cursor-pointer transform scale-90 rotate-[-4deg] opacity-60 hover:opacity-80 transition-all duration-500"
            onClick={() => setActiveIndex(prevIndex)}
          >
            <img
              src={projects[prevIndex].image}
              className="h-72 w-[420px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* PROYECTO ACTIVO */}
          <Link
            to={projects[activeIndex].link}
            className="relative z-10 transform scale-110 transition-all duration-700"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-4 ring-[#4DD0E1]/40">
              <img
                src={projects[activeIndex].image}
                className="h-[420px] w-[600px] object-cover"
                alt={projects[activeIndex].title}
              />
            </div>

            <p className="mt-6 text-center text-2xl font-semibold text-white">
              {projects[activeIndex].title}
            </p>
          </Link>

          {/* PROYECTO SIGUIENTE */}
          <div
            className="hidden md:block cursor-pointer transform scale-90 rotate-[4deg] opacity-60 hover:opacity-80 transition-all duration-500"
            onClick={() => setActiveIndex(nextIndex)}
          >
            <img
              src={projects[nextIndex].image}
              className="h-72 w-[420px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* CONTROLES */}
        <div className="mt-12 flex justify-center gap-4">
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
