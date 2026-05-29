// src/pages/HansaContactPage.jsx

import { useEffect } from "react";

import HansaHeader from "../components/layout/HansaHeader.jsx";
import HansaFooter from "../components/layout/HansaFooter.jsx";
import contactCityImage from "../assets/images/contact-city.jpg";

function HansaContactPage() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert("Thank you. Your message has been prepared for submission.");
    form.reset();

    if (window.turnstile) {
      window.turnstile.reset();
    }
  };

  return (
    <main className="hansa-page">
      <HansaHeader />

      <section className="hansa-contact-hero">
        <div className="hansa-container hansa-contact-hero__inner">
          <div className="hansa-contact-hero__content">
            <h1>Contact</h1>
            <p>
              Get in touch with Hansa Careers for recruitment cooperation,
              candidate support, business enquiries or general information.
            </p>
          </div>
        </div>
      </section>

      <section className="hansa-contact-section">
        <img
          className="hansa-contact-section__image"
          src={contactCityImage}
          alt="City view"
        />

        <div className="hansa-contact-section__shade" />

        <div className="hansa-container hansa-contact-section__inner">
          <div className="hansa-contact-panel">
            <div className="hansa-contact-panel__info">
              <span className="hansa-contact-panel__label">
                Contact Details
              </span>

              <h2>Hansa Careers</h2>

              <p className="hansa-contact-panel__lead">
                A European recruitment brand owned and operated by Handke
                Holding OÜ.
              </p>

              <div className="hansa-contact-details">
  <div className="hansa-contact-details__item hansa-contact-details__item--wide">
                  <span>Registered address</span>
                  <p>
                    Harju maakond, Tallinn, Kesklinna linnaosa,
                    <br />
                    Sakala tn 7-2, 10141, Estonia
                  </p>
                </div>

                <div className="hansa-contact-details__item">
                  <span>Registry code</span>
                  <p>17387477</p>
                </div>

                <div className="hansa-contact-details__item">
                  <span>VAT EU</span>
                  <p>EE102932869</p>
                </div>

                

                <div className="hansa-contact-details__item">
                  <span>Email</span>
                  <p>
                    <a href="mailto:office@hansacareers.ee">
                      office@hansacareers.ee
                    </a>
                  </p>
                </div>

                <div className="hansa-contact-details__item">
                  <span>Phone</span>
                  <p>
                    <a href="tel:+37256171770">+372 5617 1770</a>
                  </p>
                </div>
              </div>
            </div>

            <form className="hansa-contact-form" onSubmit={handleSubmit}>
              <div className="hansa-contact-form__head">
                <span className="hansa-contact-panel__label">
                  Send a Message
                </span>

                <h2>How can we help?</h2>

                <p>
                  Send us a short message and we will respond through the most
                  appropriate communication channel.
                </p>
              </div>

              <div className="hansa-contact-form__grid">
                <label className="hansa-contact-field">
                  <span>Full name</span>
                  <input
                    type="text"
                    name="fullName"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="hansa-contact-field">
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </label>

                <label className="hansa-contact-field">
                  <span>Phone number</span>
                  <input type="tel" name="phone" autoComplete="tel" />
                </label>

                <label className="hansa-contact-field">
                  <span>I am contacting as</span>
                  <select name="contactType" required defaultValue="">
                    <option value="" disabled>
                      Select option
                    </option>
                    <option value="candidate">Candidate</option>
                    <option value="employer">Employer</option>
                    <option value="business">Business partner</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <label className="hansa-contact-field hansa-contact-field--full">
                <span>Message</span>
                <textarea name="message" rows="5" required />
              </label>

              <div className="hansa-contact-checks">
                <label className="hansa-contact-check">
                  <input type="checkbox" name="acceptPrivacy" required />
                  <span>
                    I confirm that I have read and understood the{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>{" "}
                    and consent to the processing of my personal data in
                    accordance with Regulation (EU) 2016/679 (GDPR) for the
                    purpose of handling my enquiry.
                  </span>
                </label>

                <label className="hansa-contact-check">
                  <input type="checkbox" name="acceptTerms" required />
                  <span>
                    I have read and accept the{" "}
                    <a
                      href="/terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </a>
                    .
                  </span>
                </label>
              </div>

              <div className="hansa-contact-turnstile">
                <div
                  className="cf-turnstile"
                  data-sitekey="0x4AAAAAACEs7UVKIee4kVYl"
                />
              </div>

              <button type="submit" className="hansa-contact-submit">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <HansaFooter />
    </main>
  );
}

export default HansaContactPage;