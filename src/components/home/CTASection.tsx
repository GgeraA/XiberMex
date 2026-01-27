const CTASection = () => {
  return (
    <section className="bg-[#00838F] py-16 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        ¿Listo para transformar tu negocio?
      </h2>
      <p className="mb-6">
        Contáctanos para una cotización personalizada.
      </p>
      <a
        href="/contacto"
        className="inline-block bg-[#4DD0E1] text-[#1C1B3E] px-8 py-4 font-semibold rounded-lg hover:bg-[#76E7EA] transition"
      >
        Solicitar Cotización
      </a>
    </section>
  );
};

export default CTASection;
