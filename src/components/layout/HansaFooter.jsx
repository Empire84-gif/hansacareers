import hansaLogo from "../../assets/images/logo.png";

function HansaFooter() {
  return (
    <footer id="contact" className="hansa-footer" aria-label="Footer">
      <div className="hansa-container">
        <div className="hansa-footer__brand">
          <a href="#" aria-label="Hansa Careers home">
            <img src={hansaLogo} alt="Hansa Careers" />
          </a>
        </div>

        <div className="hansa-footer__grid">
          <section className="hansa-footer__col" aria-label="Address">
            <p className="hansa-footer__label">Address</p>

            <div className="hansa-footer__lines">
              <p>Handke Holding OÜ</p>
              <p>Sakala tn 7-2</p>
              <p>10141 Tallinn, Estonia</p>
            </div>
          </section>

          <section className="hansa-footer__col" aria-label="Contact">
            <p className="hansa-footer__label">Contact</p>

            <div className="hansa-footer__lines">
              <a href="mailto:office@hansacareers.ee">
                office@hansacareers.ee
              </a>
              <a href="tel:+37256171770">+372 5617 1770</a>
            </div>

            <div className="hansa-footer__meta">
              <p>Registry code: 17387477</p>
              <p>VAT EU: EE102932869</p>
            </div>
          </section>

          <section className="hansa-footer__col" aria-label="Legal">
            <p className="hansa-footer__label">Legal</p>

            <div className="hansa-footer__lines">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms and Conditions</a>
              <a href="/candidate-terms">Terms of Service for Candidates</a>
            </div>
          </section>
        </div>

        <div className="hansa-footer__bottom">
          <p>© 2026 Hansa Careers — Part of Handke Holding OÜ</p>

          <p>
            Website powered by{" "}
            <a
              href="https://www.sddestonie.com"
              target="_blank"
              rel="noopener noreferrer"
            >
               Solutions Digitales d&apos;Estonie
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default HansaFooter;