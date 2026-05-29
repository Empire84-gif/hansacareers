import { useEffect, useRef } from "react";

import flexibleImage from "../../assets/images/flexible.png";
import laptopImage from "../../assets/images/laptop2.png";
import qualityImage from "../../assets/images/lupa.png";
import communicationImage from "../../assets/images/woman.png";
import europeImage from "../../assets/images/hands.png";
import languageImage from "../../assets/images/men.png";
import transparencyImage from "../../assets/images/desk.png";
import professionalImage from "../../assets/images/profi.png";

const advantages = [
  {
    number: "01",
    title: "Flexibility tailored to your hiring needs",
    text: "We adapt our recruitment support to your timeline, priorities and business reality. Whether you need urgent hiring support or long-term recruitment planning, we keep the process simple, structured and easy to follow.",
    image: flexibleImage,
    alt: "A woman and a man reviewing documents",
  },
  {
    number: "02",
    title: "Remote-first cooperation across Europe",
    text: "Distance does not slow us down. We communicate clearly, stay available and coordinate recruitment processes across borders with a practical, modern and transparent approach.",
    image: laptopImage,
    alt: "A laptop on a desk with a hand holding a cup",
  },
  {
    number: "03",
    title: "Quality over quantity",
    text: "We focus on people who genuinely match the role, the expectations and the company environment. Our goal is not to send more candidates, but to send better prepared candidates.",
    image: qualityImage,
    alt: "A magnifying glass",
  },
  {
    number: "04",
    title: "Clear and human communication",
    text: "Good recruitment depends on trust. We keep communication professional, direct and respectful, making sure employers always understand what is happening at each stage.",
    image: communicationImage,
    alt: "A woman talking on a smartphone",
  },
  {
    number: "05",
    title: "European recruitment mindset",
    text: "We support employers looking beyond one local market. Our approach is built around cross-border understanding, cultural awareness and practical coordination between employers and candidates.",
    image: europeImage,
    alt: "A hand using a smartphone",
  },
  {
    number: "06",
    title: "Communication without unnecessary barriers",
    text: "We keep written communication clear and adapt to the needs of each cooperation. The process should feel understandable, organised and easy to manage from the employer’s side.",
    image: languageImage,
    alt: "Two men in suits having a conversation",
  },
  {
    number: "07",
    title: "Transparency as a standard",
    text: "We believe recruitment should be handled responsibly, with clear expectations, honest updates and no unnecessary confusion. Employers know where the process stands and what the next step is.",
    image: transparencyImage,
    alt: "A woman and a man sitting at a desk",
  },
  {
    number: "08",
    title: "Professional recruitment coordination",
    text: "Every cooperation is managed with structure, care and attention to detail. We combine a human approach with organised recruitment coordination for employers across Europe.",
    image: professionalImage,
    alt: "A woman holding a laptop",
  },
];

function HansaEmployerAdvantagesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const items = section.querySelectorAll(".hansa-employer-advantage");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      className="hansa-employer-advantages"
      ref={sectionRef}
    >
      <div className="hansa-container">
        <div className="hansa-employer-advantages__intro">
          <span className="hansa-employer-advantages__label">
            Our Commitment
          </span>

          <h2>Why employers work with Hansa Careers</h2>

          <p>
            Recruitment support built around trust, clarity and practical
            cooperation for companies looking for reliable professionals across
            Europe.
          </p>
        </div>

        <div className="hansa-employer-advantages__list">
          {advantages.map((item, index) => (
            <article
              className={`hansa-employer-advantage ${
                index % 2 !== 0 ? "hansa-employer-advantage--reverse" : ""
              }`}
              key={item.number}
              style={{ "--delay": `${index * 80}ms` }}
            >
              <div className="hansa-employer-advantage__media">
                <img src={item.image} alt={item.alt} />
              </div>

              <div className="hansa-employer-advantage__content">
                <span className="hansa-employer-advantage__number">
                  {item.number}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="hansa-employer-advantages__closing">
          <p>
            A clear process, reliable communication and a professional approach
            to recruitment coordination.
          </p>

          <a href="/contact" className="hansa-employer-advantages__button">
            Start Cooperation
          </a>
        </div>
      </div>
    </section>
  );
}

export default HansaEmployerAdvantagesSection;