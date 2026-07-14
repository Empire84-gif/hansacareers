import smartphoneImage from "../../assets/images/smartphone.png";
import whatsappImage from "../../assets/images/whatsapp.png";

function HansaCurrentOpeningsSection() {
  return (
    <section className="hansa-openings">
      <div className="hansa-container">
        <div className="hansa-openings__wrap">
          <div className="hansa-openings__left">
            <span className="hansa-section-label">
              Where will your career take you next?
            </span>

            <h2>Available Positions</h2>

            <p className="hansa-openings__lead">
              There are currently no open positions available. New vacancies
              will be published here as soon as they become available.
            </p>

            <div className="hansa-openings__empty">
              <p>Please check back soon for new opportunities.</p>
            </div>
          </div>

          <aside className="hansa-openings__right" aria-label="Social media">
            <div className="hansa-phone-mockup">
              <img
                src={smartphoneImage}
                alt="Hansa Careers mobile social media preview"
                className="hansa-phone-mockup__image"
              />

              <div className="hansa-phone-mockup__overlay">
                <div className="hansa-phone-mockup__icon" aria-hidden="true">
                  <i className="bi bi-hand-thumbs-up-fill"></i>
                </div>

                <p>
                  Follow us <br />
                  on <span>facebook</span>
                </p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/profile.php?id=61584773555098"
              target="_blank"
              rel="noreferrer"
              className="hansa-openings__follow"
            >
              Follow
            </a>

            <div className="hansa-openings-whatsapp">
              <div className="hansa-openings-whatsapp__image-wrap">
                <img
                  src={whatsappImage}
                  alt="WhatsApp contact QR code"
                  className="hansa-openings-whatsapp__image"
                />
              </div>

              <a
                href="https://wa.me/37256171770"
                target="_blank"
                rel="noreferrer"
                className="hansa-openings-whatsapp__button"
              >
                Open WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default HansaCurrentOpeningsSection;
