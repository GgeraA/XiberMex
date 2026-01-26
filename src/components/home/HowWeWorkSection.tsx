const steps = [
  {
    title: 'Análisis & Estrategia',
    description: 'Entendemos tus necesidades y objetivos del negocio.',
  },
  {
    title: 'Diseño & Prototipo',
    description: 'Creamos prototipos interactivos y visuales.',
  },
  {
    title: 'Desarrollo & QA',
    description: 'Construimos soluciones sólidas de alta calidad.',
  },
  {
    title: 'Lanzamiento & Soporte',
    description: 'Implementamos y acompañamos el crecimiento.',
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="bg-[#1C1B3E] py-20 text-white">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Cómo trabajamos</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="p-6">
              <div className="w-12 h-12 bg-[#00838F] rounded-full mx-auto text-xl font-bold flex items-center justify-center">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-[#AAB7C4]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
