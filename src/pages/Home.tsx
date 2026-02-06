import HeroSection from '../components/home/HeroSection';
import ProjectsCarousel from '../components/home/ProjectsCarousel';
import DividerBlock from '../components/home/DividerBlock';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import HowWeWorkSection from '../components/home/HowWeWorkSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsCarousel />
      <DividerBlock />
      <AboutSection />
      <ServicesSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;

