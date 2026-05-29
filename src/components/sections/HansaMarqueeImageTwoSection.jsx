// src/components/sections/HansaMarqueeImageTwoSection.jsx

import marqueeImageTwo from "../../assets/images/marquee2.png";

function HansaMarqueeImageTwoSection() {
  const steps = [
    {
      number: "01",
      title: "Initial conversation",
      text: "We discuss your experience, goals, availability and preferred location to find the right match.",
    },
    {
      number: "02",
      title: "Offer with full clarity",
      text: "You receive clear terms: salary, working hours, accommodation and contract type. Everything is transparent.",
    },
    {
      number: "03",
      title: "Employer confirmation",
      text: "We coordinate the final details and start date with the employer on your behalf.",
    },
    {
      number: "04",
      title: "Relocation support",
      text: "We help you arrange the practical details so you know exactly what to expect.",
    },
  ];

  return (
    <section
      className="hansa-process-marquee"
      aria-label="Hansa Careers recruitment process"
    >
      <img
        src={marqueeImageTwo}
        alt="Hansa Careers recruitment process"
        className="hansa-process-marquee__image"
      />

      <div className="hansa-container hansa-process-marquee__inner">
        <div className="hansa-process-marquee__left">
          <span className="hansa-process-marquee__label">How It Works</span>

          <h2>A straightforward and structured process.</h2>

          <p>
            We keep you informed at every step, from the first conversation to
            the final employer confirmation.
          </p>
        </div>

        <div className="hansa-process-marquee__right">
          {steps.map((step) => (
            <article className="hansa-process-step" key={step.number}>
              <span className="hansa-process-step__number">{step.number}</span>

              <div className="hansa-process-step__content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HansaMarqueeImageTwoSection;