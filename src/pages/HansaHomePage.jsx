// src/pages/HansaHomePage.jsx

import heroVideo from "../assets/images/hero.mp4";

import HansaHeader from "../components/layout/HansaHeader.jsx";
import HansaAboutUsSection from "../components/sections/HansaAboutUsSection.jsx";
import HansaIndustriesSection from "../components/sections/HansaIndustriesSection.jsx";
import HansaMarqueeImageSection from "../components/sections/HansaMarqueeImageSection.jsx";
import HansaRecruitmentSupportSection from "../components/sections/HansaRecruitmentSupportSection.jsx";
import HansaMarqueeImageTwoSection from "../components/sections/HansaMarqueeImageTwoSection.jsx";
import HansaMosaicHighlightsSection from "../components/sections/HansaMosaicHighlightsSection.jsx";
import HansaValuesSection from "../components/sections/HansaValuesSection.jsx";
import HansaFooter from "../components/layout/HansaFooter.jsx";
import HansaContactBarSection from "../components/sections/HansaContactBarSection.jsx";

function HansaHomePage() {
  return (
    <main className="hansa-page">
      <section className="hansa-hero">
        <HansaHeader />

        <video
          className="hansa-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="hansa-container hansa-hero__inner">
          <div className="hansa-hero__content">
            <p className="hansa-hero__eyebrow">Simple • Modern • European</p>

            <h1>Reliable recruitment support across Europe</h1>

            <p className="hansa-hero__text">
              We connect the right talent with reliable employers, creating
              clear, professional and human recruitment experiences for both
              companies and candidates.
            </p>

            <div className="hansa-hero__actions">
              <a
                href="/current-openings"
                className="hansa-button hansa-button--primary"
              >
                Current Openings
              </a>

              <a
                href="/contact"
                className="hansa-button hansa-button--secondary"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <HansaAboutUsSection />
      <HansaContactBarSection />
      <HansaMarqueeImageSection />
      <HansaIndustriesSection />
       <HansaMarqueeImageTwoSection />
      <HansaRecruitmentSupportSection />
      <HansaMosaicHighlightsSection />
      <HansaValuesSection />
      <HansaFooter />
    </main>
  );
}

export default HansaHomePage;