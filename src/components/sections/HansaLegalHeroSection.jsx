// src/components/sections/HansaLegalHeroSection.jsx

function HansaLegalHeroSection({
  label = "Legal",
  title = "Privacy Policy",
  text = "Clear information about how Hansa Careers processes personal data, protects privacy and communicates with individuals using our services.",
}) {
  return (
    <section className="hansa-legal-hero">
      <div className="hansa-container hansa-legal-hero__inner">
        <div className="hansa-legal-hero__content">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

export default HansaLegalHeroSection;