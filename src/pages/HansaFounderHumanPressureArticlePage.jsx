import HansaHeader from "../components/layout/HansaHeader.jsx";
import HansaFooter from "../components/layout/HansaFooter.jsx";
import HansaFounderBlogHeroSection from "../components/sections/HansaFounderBlogHeroSection.jsx";
import HansaFounderHumanPressureArticleContentSection from "../components/sections/HansaFounderHumanPressureArticleContentSection.jsx";

function HansaFounderHumanPressureArticlePage() {
  return (
    <main className="hansa-page">
      <HansaHeader />
      <HansaFounderBlogHeroSection />
      <HansaFounderHumanPressureArticleContentSection />
      <HansaFooter />
    </main>
  );
}

export default HansaFounderHumanPressureArticlePage;