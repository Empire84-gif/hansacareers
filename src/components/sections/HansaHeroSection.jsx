import HansaHeader from "../layout/HansaHeader.jsx";

import heroVideo from "../../assets/images/hero.mp4";

function HansaHeroSection() {
  return (
    <section className="hansa-hero">
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

      <HansaHeader />

      <div className="hansa-hero__inner">
        <div className="hansa-hero__content">
          <p className="hansa-hero__eyebrow">Simple • Modern • European</p>

          <h1>Reliable recruitment support across Europe.</h1>

          <p className="hansa-hero__text">
            We connect the right talent with reliable employers, creating clear,
            professional and human recruitment experiences for both companies
            and candidates.
          </p>

          <div className="hansa-hero__actions">
            <a
              href="#current-openings"
              className="hansa-button hansa-button--primary"
            >
              Current Openings
            </a>

            <a
              href="#for-employers"
              className="hansa-button hansa-button--secondary"
            >
              For Employers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HansaHeroSection;