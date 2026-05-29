// src/pages/HansaFounderPage.jsx

import HansaHeader from "../components/layout/HansaHeader.jsx";
import HansaFounderHeroSection from "../components/sections/HansaFounderHeroSection.jsx";
import HansaFounderIntroSection from "../components/sections/HansaFounderIntroSection.jsx";
import HansaFooter from "../components/layout/HansaFooter.jsx";
import HansaFounderStorySection from "../components/sections/HansaFounderStorySection.jsx";
import HansaFounderPerspectiveSection from "../components/sections/HansaFounderPerspectiveSection.jsx";

function HansaFounderPage() {
  return (
    <main className="hansa-page">
  <HansaHeader />
  <HansaFounderHeroSection />
  <HansaFounderIntroSection />
  <HansaFounderStorySection />
  <HansaFounderPerspectiveSection />
  <HansaFooter />
</main>
  );
}

export default HansaFounderPage;