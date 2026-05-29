// src/components/sections/HansaValuesSection.jsx

function HansaValuesSection() {
  const values = [
    {
      icon: "bi bi-eye",
      title: "Transparency",
      text: "Every candidate receives clear information about job conditions, contracts and expectations. Every employer knows what to expect from our process. No hidden terms, no unclear conditions, no surprises.",
    },
    {
      icon: "bi bi-shield-check",
      title: "Compliance",
      text: "We work with respect for GDPR, candidate rights and local labour requirements in the markets where we operate. Data protection and legal integrity are part of our structure.",
    },
    {
      icon: "bi bi-heart",
      title: "Fairness",
      text: "We do not charge fees to candidates. We believe in respectful communication, equal treatment and ethical recruitment practices throughout the entire process.",
    },
    {
      icon: "bi bi-person-check",
      title: "Accountability",
      text: "When we commit to a process, we take responsibility for it. When we present a candidate, they are verified. When we describe a role, the information must be accurate.",
    },
    {
      icon: "bi bi-diagram-3",
      title: "Simplicity",
      text: "Recruitment does not need to be complicated. We reduce unnecessary friction and focus on what matters: matching the right people with the right positions efficiently.",
    },
    {
      icon: "bi bi-repeat",
      title: "Consistency",
      text: "The same standards apply to every candidate, every employer and every placement. Trust is built through repeated quality, not exceptions.",
    },
  ];

  return (
    <section className="hansa-values" id="values">
      <div className="hansa-container">
        <div className="hansa-values__header">
          <span className="hansa-section-label">Our Values</span>

          <h2>What drives our work</h2>

          <p className="hansa-values__lead">
            We believe that recruitment should be transparent, structured and
            fair. These are not just aspirations — they are operational
            principles that guide how we work.
          </p>

          <p className="hansa-values__text">
            Candidates are not resources. Employers are not transactions. Both
            deserve clarity, respect and a process that works as it should.
          </p>
        </div>

        <div className="hansa-values__grid">
          {values.map((value) => (
            <article className="hansa-value-card" key={value.title}>
              <div className="hansa-value-card__icon" aria-hidden="true">
                <i className={value.icon}></i>
              </div>

              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </article>
          ))}
        </div>

        <div className="hansa-values__closing">
          <p className="hansa-values__closing-main">
            We do not promise perfection. <br />We promise consistency,
            accountability and a commitment to doing things properly.
          </p>

          <p className="hansa-values__closing-sub">
            If these principles align with your expectations, we would be
            pleased to work with you.
          </p>

          <div className="hansa-values__actions">
            <a
              href="/contact"
              className="hansa-values__button hansa-values__button--secondary"
            >
              Contact
              <i className="bi bi-envelope" aria-hidden="true"></i>
            </a>

            <a
              href="/current-openings"
              className="hansa-values__button hansa-values__button--primary"
            >
              Current Openings
              <i className="bi bi-briefcase" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HansaValuesSection;