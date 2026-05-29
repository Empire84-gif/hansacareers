import HansaHeader from "../components/layout/HansaHeader.jsx";
import HansaFooter from "../components/layout/HansaFooter.jsx";
import HansaFounderBlogHeroSection from "../components/sections/HansaFounderBlogHeroSection.jsx";
import HansaFounderArticleContentSection from "../components/sections/HansaFounderArticleContentSection.jsx";

function HansaFounderBlogPage() {
  return (
    <main className="hansa-page">
      <HansaHeader />
      <HansaFounderBlogHeroSection />
      <HansaFounderArticleContentSection />
      <HansaFooter />
    </main>
  );
}

export default HansaFounderBlogPage;