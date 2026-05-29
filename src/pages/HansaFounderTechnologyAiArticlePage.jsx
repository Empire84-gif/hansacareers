import HansaHeader from "../components/layout/HansaHeader.jsx";
import HansaFooter from "../components/layout/HansaFooter.jsx";
import HansaFounderBlogHeroSection from "../components/sections/HansaFounderBlogHeroSection.jsx";
import HansaFounderTechnologyAiArticleContentSection from "../components/sections/HansaFounderTechnologyAiArticleContentSection.jsx";

function HansaFounderTechnologyAiArticlePage() {
  return (
    <main className="hansa-page">
      <HansaHeader />
      <HansaFounderBlogHeroSection />
      <HansaFounderTechnologyAiArticleContentSection />
      <HansaFooter />
    </main>
  );
}

export default HansaFounderTechnologyAiArticlePage;