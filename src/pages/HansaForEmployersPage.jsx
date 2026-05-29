import HansaHeader from "../components/layout/HansaHeader.jsx";
import HansaFooter from "../components/layout/HansaFooter.jsx";
import HansaForEmployersHeroSection from "../components/sections/HansaForEmployersHeroSection.jsx";
import HansaEuropeanRecruitmentSection from "../components/sections/HansaEuropeanRecruitmentSection.jsx";
import HansaEmployerIndustriesMosaicSection from "../components/sections/HansaEmployerIndustriesMosaicSection.jsx";
import HansaEstoniaBridgeSection from "../components/sections/HansaEstoniaBridgeSection.jsx";
import HansaEmployerAdvantagesSection from "../components/sections/HansaEmployerAdvantagesSection.jsx";
import HansaEmployerTestimonialsSection from "../components/sections/HansaEmployerTestimonialsSection.jsx";
import HansaEmployerFinalCtaSection from "../components/sections/HansaEmployerFinalCtaSection.jsx";

function HansaForEmployersPage() {
  return (
    <main className="hansa-page">
      <HansaHeader />
      <HansaForEmployersHeroSection />
      <HansaEuropeanRecruitmentSection />
      <HansaEstoniaBridgeSection />
      <HansaEmployerIndustriesMosaicSection />
      <HansaEmployerAdvantagesSection />
      <HansaEmployerTestimonialsSection />
      <HansaEmployerFinalCtaSection />
      <HansaFooter />
    </main>
  );
}

export default HansaForEmployersPage;