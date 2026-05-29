// src/components/sections/HansaMosaicHighlightsSection.jsx

import mosaicPhotoOne from "../../assets/images/mosaic-photo-1.png";
import mosaicPhotoTwo from "../../assets/images/mosaic-photo-2.png";
import mosaicOverlayOne from "../../assets/images/mosaic-overlay-1.jpg";
import mosaicOverlayTwo from "../../assets/images/mosaic-overlay-2.png";

function HansaMosaicHighlightsSection() {
  return (
    <section
      className="hansa-mosaic"
      aria-label="Hansa Careers business and recruitment highlights"
    >
      <div className="hansa-mosaic__grid">
        <article className="hansa-mosaic__tile hansa-mosaic__tile--text hansa-mosaic__tile--teal">
          <div className="hansa-mosaic__text">
            <h2>No fees charged to candidates</h2>

            <p>
              Hansa Careers does not charge candidates for taking part in the
              recruitment process. Job seekers can review opportunities, receive
              information and speak with us without paying recruitment fees to
              our agency.
            </p>
          </div>
        </article>

        <article className="hansa-mosaic__tile hansa-mosaic__tile--image hansa-mosaic__tile--photo-text">
          <img
            src={mosaicOverlayOne}
            alt="Human recruitment communication"
          />

          <div className="hansa-mosaic__photo-content">
            <h2>Real people. Clear communication.</h2>

            <p>
              We keep recruitment human, direct and practical — focused on
              understanding people, roles and expectations before decisions are
              made.
            </p>
          </div>
        </article>

        <article className="hansa-mosaic__tile hansa-mosaic__tile--image">
          <img
            src={mosaicPhotoOne}
            alt="Professional recruitment support"
          />
        </article>

        <article className="hansa-mosaic__tile hansa-mosaic__tile--image">
          <img
            src={mosaicPhotoTwo}
            alt="Human recruitment coordination"
          />
        </article>

        <article className="hansa-mosaic__tile hansa-mosaic__tile--text hansa-mosaic__tile--blue">
          <div className="hansa-mosaic__text">
            <h2>Part of Handke Holding OÜ</h2>

            <p>
              Hansa Careers is owned by Handke Holding OÜ, which is also the
              owner of SDE, a brand operating in the IT sector.
            </p>

            <a
              href="https://www.handkeholding.com"
              target="_blank"
              rel="noreferrer"
              className="hansa-mosaic__link"
            >
              www.handkeholding.com
            </a>
          </div>
        </article>

        <article className="hansa-mosaic__tile hansa-mosaic__tile--image hansa-mosaic__tile--sde">
          <img
            src={mosaicOverlayTwo}
            alt="SDE IT brand by Handke Holding OÜ"
          />

          <div className="hansa-mosaic__photo-content hansa-mosaic__photo-content--left">
            <h2>
  Discover our 
  <br />
 second brand - SDE
</h2>

            <a
              href="https://www.sddestonie.com"
              target="_blank"
              rel="noreferrer"
            >
              www.sddestonie.com
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default HansaMosaicHighlightsSection;