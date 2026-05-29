function HansaSolutionsSection() {
  const solutions = [
    {
      icon: "bi bi-person-check",
      title: "Candidate Support",
      text: "We support candidates with clear information, respectful communication and transparent recruitment steps from first contact to final decision.",
      button: "Current Openings",
      href: "/current-openings",
    },
    {
      icon: "bi bi-briefcase",
      title: "Employer Support",
      text: "We help employers with candidate sourcing, screening and recruitment coordination for selected roles across European markets.",
      button: "For Employers",
      href: "/for-employers",
    },
    {
      icon: "bi bi-shield-check",
      title: "Process Coordination",
      text: "We keep recruitment structured, GDPR-conscious and practical, reducing unnecessary friction for both companies and candidates.",
      button: "Contact",
      href: "#contact",
    },
  ];

  return (
    <section className="hansa-solutions" id="solutions">
      <div className="hansa-container">
        <div className="hansa-solutions__head">
          <span className="hansa-section-label">Recruitment Support</span>

          <h2>Structured recruitment support for a changing labour market.</h2>

          <p>
            Hansa Careers provides clear, human and practical recruitment
            coordination for employers and candidates across Europe.
          </p>
        </div>

        <div className="hansa-solutions__grid">
          {solutions.map((item) => (
            <article className="hansa-solution-card" key={item.title}>
              <div className="hansa-solution-card__icon" aria-hidden="true">
                <i className={item.icon}></i>
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <a href={item.href} className="hansa-solution-card__button">
                {item.button}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HansaSolutionsSection;