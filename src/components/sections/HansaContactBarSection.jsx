// src/components/sections/HansaContactBarSection.jsx

function HansaContactBarSection() {
  return (
    <section className="hansa-contact-bar" aria-label="Contact details">
      <div className="hansa-container">
        <div className="hansa-contact-bar__grid">
          <div className="hansa-contact-bar__item">
            <div className="hansa-contact-bar__icon" aria-hidden="true">
              <i className="bi bi-telephone" />
            </div>

            <a className="hansa-contact-bar__value" href="tel:+37256171770">
              +372 5617 1770
            </a>
          </div>

          <div className="hansa-contact-bar__item">
            <div className="hansa-contact-bar__icon" aria-hidden="true">
              <i className="bi bi-envelope" />
            </div>

            <a
              className="hansa-contact-bar__value"
              href="mailto:office@hansacareers.ee"
            >
              office@hansacareers.ee
            </a>
          </div>

          <div className="hansa-contact-bar__item">
            <div className="hansa-contact-bar__icon" aria-hidden="true">
              <i className="bi bi-clock" />
            </div>

            <div className="hansa-contact-bar__value">
              Mon–Fri 9:00–17:00 EET
            </div>
          </div>

          <div className="hansa-contact-bar__item">
            <div className="hansa-contact-bar__icon" aria-hidden="true">
              <i className="bi bi-geo-alt" />
            </div>

            <div className="hansa-contact-bar__value">
              Harju maakond, Kesklinna linnaosa
              <br />
              Sakala tn 7-2, 10141 Tallinn, Estonia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HansaContactBarSection;