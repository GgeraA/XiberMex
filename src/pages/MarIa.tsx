// MarIAProject.tsx
import HeroSection from '../components/marIA/HeroSection';
import ProblemStatementSection from '../components/marIA/ProblemStatementSection';
import IdentitySection from '../components/marIA/IdentitySection';
import TechnologySection from '../components/marIA/TechnologySection';
import OriginSection from '../components/marIA/OriginSection';
// import BusinessModelSection from '../components/marIA/BusinessModelSection';
import MarketSection from '../components/marIA/MarketSection';
import CompetitiveAdvantageSection from '../components/marIA/CompetitiveAdvantageSection';
import VisionSection from '../components/marIA/VisionSection';
import CTASection from '../components/marIA/CTASection';

const MarIAProject = () => {
  return (
    <>
      <HeroSection />
      <IdentitySection />
      <ProblemStatementSection />
      <TechnologySection />
      <OriginSection />
      {/* <BusinessModelSection /> */}
      <MarketSection />
      <CompetitiveAdvantageSection />
      <VisionSection />
      <CTASection />
    </>
  );
};

export default MarIAProject;