const testimonials = [
  {
    name: 'Cliente A',
    feedback: 'XIBERMEX transformó nuestro sistema con IA!',
  },
  {
    name: 'Cliente B',
    feedback: 'Trabajo profesional y resultados excelentes.',
  },
  {
    name: 'Cliente C',
    feedback: 'Recomiendo 100% su desarrollo web.',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-3xl font-bold text-[#1C1B3E] mb-8">
          Lo que dicen nuestros clientes
        </h2>
        {testimonials.map((t, i) => (
          <blockquote key={i} className="mb-8">
            <p className="text-lg italic text-gray-700">“{t.feedback}”</p>
            <footer className="mt-2 text-sm font-semibold text-[#00838F]">
              — {t.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
