const AboutSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-3xl font-bold text-[#1C1B3E] mb-6">
            Quiénes somos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Somos una empresa de desarrollo de software enfocada en crear
            soluciones tecnológicas, automatización e inteligencia artificial
            para empresas que buscan escalar y optimizar sus procesos.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1C1B3E] mb-6">
            Cómo lo hacemos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Analizamos, diseñamos y desarrollamos productos digitales
            personalizados con tecnologías modernas y metodologías ágiles.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
