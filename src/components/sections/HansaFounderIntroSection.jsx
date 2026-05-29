// src/components/sections/HansaFounderIntroSection.jsx

import founderPhoto from "../../assets/images/khandke001.png";
import founderSignature from "../../assets/images/signature.png";

function HansaFounderIntroSection() {
  return (
    <section className="hansa-founder-quote">
      <div className="hansa-container">
        <div className="hansa-founder-quote__grid">
          <div className="hansa-founder-quote__content">
            <span className="hansa-founder-quote__badge">Our Mission</span>

            <div className="hansa-founder-quote__mark" aria-hidden="true">
              <i className="bi bi-quote"></i>
            </div>

            <blockquote className="hansa-founder-quote__text">
              <em>
                With deep respect for work and a genuine desire to help others
                succeed, we dedicate ourselves to connecting exceptional talent
                with outstanding employers. <br />Every placement we make is built on
                trust, transparency, and a commitment to creating opportunities
                that transform lives and businesses across Europe.
              </em>
            </blockquote>

            <img
              src={founderSignature}
              alt="Karl Handke signature"
              className="hansa-founder-quote__signature"
            />

            <div className="hansa-founder-quote__author">
  <div className="hansa-founder-quote__author-text">
    <div className="hansa-founder-quote__name">Karl Sebastian Handke</div>
    <div className="hansa-founder-quote__title">
  Founder & CEO of Handke Holding OÜ
</div>
  </div>

  <a
  href="https://www.linkedin.com/in/karl-sebastian-handke-82586b3b0/"
  target="_blank"
  rel="noreferrer"
  className="hansa-founder-quote__linkedin"
  aria-label="Karl Sebastian Handke on LinkedIn"
>
  <i className="bi bi-linkedin" aria-hidden="true"></i>
</a>
</div>

            
          </div>

          <div className="hansa-founder-quote__image-wrap">
            <div className="hansa-founder-quote__image-frame">
              <div className="hansa-founder-quote__decoration" aria-hidden="true"></div>

              <img
                src={founderPhoto}
                alt="Karl Handke, Founder of Hansa Careers"
                className="hansa-founder-quote__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HansaFounderIntroSection;