const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/software.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-[#1C1B3E]/80" />

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          
          {/* Marca */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
            XIBERMEX
          </h1>

          {/* Eslogan */}
          <p className="mt-4 text-xl md:text-2xl text-[#AAB7C4]">
            Estrategias Tecnológicas
          </p>

          {/* Texto descriptivo */}
          <p className="mt-6 text-lg text-[#4DD0E1]">
            Desarrollo de software, innovación digital  
            y soluciones tecnológicas a la medida.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#contacto"
              className="px-8 py-4 rounded-lg bg-[#00838F] text-white font-semibold hover:bg-[#4DD0E1] hover:text-[#1C1B3E] transition"
            >
              Cotizar Proyecto
            </a>

            <a
              href="#servicios"
              className="px-8 py-4 rounded-lg border border-[#4DD0E1] text-[#4DD0E1] hover:bg-[#4DD0E1] hover:text-[#1C1B3E] transition"
            >
              Ver Servicios
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
