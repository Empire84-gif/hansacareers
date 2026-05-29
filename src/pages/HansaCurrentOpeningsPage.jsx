import HansaHeader from "../components/layout/HansaHeader.jsx";
import HansaFooter from "../components/layout/HansaFooter.jsx";
import HansaCurrentOpeningsHeroSection from "../components/sections/HansaCurrentOpeningsHeroSection.jsx";
import HansaCurrentOpeningsSection from "../components/sections/HansaCurrentOpeningsSection.jsx";

function HansaCurrentOpeningsPage() {
  return (
    <main className="hansa-page">
      <HansaHeader />
      <HansaCurrentOpeningsHeroSection />
      <HansaCurrentOpeningsSection />
      <HansaFooter />
    </main>
  );
}

export default HansaCurrentOpeningsPage;