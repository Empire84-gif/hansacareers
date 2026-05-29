import photo1 from "../../assets/images/photo1.jpg";
import photo2 from "../../assets/images/photo2.png";
import photo3 from "../../assets/images/photo3.png";

function HansaRecruitmentSupportSection() {
  const items = [
    {
      image: photo1,
      imageAlt: "Employer recruitment support",
      label: "For Employers",
      title: "Employer recruitment support",
      subtitle:
        "Clear hiring support for companies looking for reliable people.",
      text: "We support employers with candidate sourcing, initial screening and recruitment coordination for selected roles across Europe. Our work is focused on clarity, communication and practical support throughout the hiring process.",
      button: "For Employers",
      href: "/for-employers",
    },
    {
      image: photo2,
      imageAlt: "Candidate recruitment support",
      label: "For Candidates",
      title: "Candidate support",
      subtitle:
        "A respectful and transparent process for people looking for work.",
      text: "Candidates receive clear information about opportunities, expectations and next steps. We do not charge recruitment fees to candidates and we aim to keep communication simple, honest and respectful.",
      button: "Current Openings",
      href: "/current-openings",
      reverse: true,
    },
    {
      image: photo3,
      imageAlt: "Clear process coordination",
      label: "Process",
      title: "Structured recruitment coordination",
      subtitle: "A clear process from first contact to final decision.",
      text: "We help organize communication, candidate information and key steps between employers and applicants. Our approach is practical, GDPR-conscious and focused on accountability.",
      button: "Contact",
      href: "/contact",
    },
  ];

  return (
    <section className="hansa-recruitment-support" id="recruitment-support">
      <div className="hansa-container">
        <div className="hansa-recruitment-support__head">
          <span className="hansa-section-label">What We Do</span>

          <h2>Recruitment support for employers and candidates</h2>

          <p>
            We help companies and job seekers move through the hiring process with clearer communication, better organization and a more human approach.
          </p>
        </div>

        <div className="hansa-recruitment-support__list">
          {items.map((item) => (
            <article
              className={
                item.reverse
                  ? "hansa-support-row hansa-support-row--reverse"
                  : "hansa-support-row"
              }
              key={item.title}
            >
              <div className="hansa-support-row__media">
                <img src={item.image} alt={item.imageAlt} />
              </div>

              <div className="hansa-support-row__content">
                <span className="hansa-support-row__label">{item.label}</span>

                <h3>{item.title}</h3>

                <p className="hansa-support-row__subtitle">
                  {item.subtitle}
                </p>

                <p className="hansa-support-row__text">{item.text}</p>

                <a href={item.href} className="hansa-support-row__button">
                  {item.button}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HansaRecruitmentSupportSection;