const services = [
  {
    title: 'Desarrollo Web',
    description: 'Soluciones web responsivas, escalables y personalizadas.',
    icon: '/icons/web-dev.svg',
  },
  {
    title: 'Inteligencia Artificial',
    description: 'Automatiza tus procesos con IA y Machine Learning.',
    icon: '/icons/ai.svg',
  },
  {
    title: 'Consultoría IT',
    description: 'Estrategias tecnológicas para empresas modernas.',
    icon: '/icons/consulting.svg',
  },
  {
    title: 'Ciberseguridad',
    description: 'Protege tus sistemas y datos críticos.',
    icon: '/icons/cybersecurity.svg',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-[#1C1B3E] mb-8">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#F8FAFC] rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-[#00838F]">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
