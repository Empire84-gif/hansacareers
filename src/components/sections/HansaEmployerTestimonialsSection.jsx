import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const testimonials = [
  {
    text: "Working with Hansa Careers felt clear and professional from the first conversation. The process was structured, communication was simple, and every step was explained without unnecessary complications.",
    author: "HR Manager",
    company: "Manufacturing Company, Netherlands",
  },
  {
    text: "We appreciated the serious and practical approach. Hansa Careers understood what we needed, kept communication transparent, and supported the recruitment process in a way that saved our team time.",
    author: "Operations Director",
    company: "Logistics Company, Germany",
  },
  {
    text: "The cooperation was calm, reliable and well organised. We always knew what was happening, what the next step was, and what kind of candidates we could realistically expect.",
    author: "General Manager",
    company: "Hospitality Group, Finland",
  },
  {
    text: "What stood out was the attention to detail. The recruitment support was not rushed, but it still moved efficiently. The communication was professional, direct and easy to follow.",
    author: "HR Director",
    company: "Healthcare Provider, Sweden",
  },
  {
    text: "A strong recruitment partner for employers who value clarity. The process was transparent, the updates were regular, and the cooperation felt genuinely human and reliable.",
    author: "Regional HR Manager",
    company: "Retail Company, Denmark",
  },
  {
    text: "Hansa Careers helped us approach hiring with more structure. The expectations were realistic, communication was prompt, and the process was handled with professionalism from start to finish.",
    author: "CEO",
    company: "Service Company, Belgium",
  },
  {
    text: "The entire cooperation felt organised and respectful. Hansa Careers listened carefully to our requirements and helped us move through the recruitment process without confusion or unnecessary delays.",
    author: "HR Coordinator",
    company: "Construction Company, Germany",
  },
  {
    text: "We needed a recruitment partner who could communicate clearly and understand our operational needs. Hansa Careers brought structure, patience and a very professional attitude to the process.",
    author: "Recruitment Manager",
    company: "Warehouse Operations Company, Estonia",
  },
  {
    text: "The process was handled with a good balance of speed and quality. We never felt pushed, but we also never felt that things were standing still. Communication was consistent throughout.",
    author: "Managing Director",
    company: "Production Company, Austria",
  },
  {
    text: "Hansa Careers gave us confidence from the beginning. The cooperation was straightforward, the information was clear, and the overall approach felt modern, human and reliable.",
    author: "People Operations Manager",
    company: "Customer Service Company, Ireland",
  },
  {
    text: "We value partners who can keep things simple. Hansa Careers made the recruitment process easier to manage, with clear updates, realistic expectations and a professional tone at every stage.",
    author: "Operations Manager",
    company: "Food Production Company, Norway",
  },
  {
    text: "The support felt personal, not generic. Hansa Careers took time to understand our company, our expectations and the type of people who would fit our working environment.",
    author: "HR Business Partner",
    company: "Skilled Trades Company, Switzerland",
  },
];

function HansaEmployerTestimonialsSection() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = useMemo(
    () => Math.max(0, testimonials.length - visibleCount),
    [visibleCount]
  );

  const updateMetrics = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const firstCard = track?.querySelector(".hansa-testimonial-card");

    if (!viewport || !track || !firstCard) return;

    const trackStyles = window.getComputedStyle(track);
    const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || 0);
    const cardWidth = firstCard.getBoundingClientRect().width;
    const nextStep = cardWidth + gap;
    const nextVisibleCount = Math.max(
      1,
      Math.floor((viewport.getBoundingClientRect().width + gap) / nextStep)
    );

    setStep(nextStep);
    setVisibleCount(nextVisibleCount);
  }, []);

  const goTo = useCallback(
    (index) => {
      if (maxIndex <= 0) {
        setActiveIndex(0);
        return;
      }

      if (index < 0) {
        setActiveIndex(maxIndex);
        return;
      }

      if (index > maxIndex) {
        setActiveIndex(0);
        return;
      }

      setActiveIndex(index);
    },
    [maxIndex]
  );

  useEffect(() => {
    updateMetrics();

    const viewport = viewportRef.current;
    const track = trackRef.current;

    const resizeObserver = new ResizeObserver(updateMetrics);

    if (viewport) resizeObserver.observe(viewport);
    if (track) resizeObserver.observe(track);

    window.addEventListener("resize", updateMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, [updateMetrics]);

  useEffect(() => {
    setActiveIndex((currentIndex) => Math.min(currentIndex, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex <= 0) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) =>
        currentIndex >= maxIndex ? 0 : currentIndex + 1
      );
    }, 8500);

    return () => window.clearInterval(interval);
  }, [isPaused, maxIndex]);

  return (
    <section
      className="hansa-testimonials"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hansa-container">
        <div className="hansa-testimonials__head">
          <span className="hansa-section-label">Client Testimonials</span>

          <h2>What employers say</h2>

          <p>
            Clear cooperation, structured recruitment support and professional
            communication for employers across Europe.
          </p>
        </div>
      </div>

      <div className="hansa-testimonials__viewport" ref={viewportRef}>
        <div
          className="hansa-testimonials__track"
          ref={trackRef}
          style={{
            transform: `translate3d(-${activeIndex * step}px, 0, 0)`,
          }}
        >
          {testimonials.map((item) => (
            <article className="hansa-testimonial-card" key={item.company}>
              <div className="hansa-testimonial-card__mark">“</div>

              <p className="hansa-testimonial-card__text">{item.text}</p>

              <div className="hansa-testimonial-card__author">
                <h3>{item.author}</h3>
                <p>{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="hansa-container">
        <div className="hansa-testimonials__controls">
          <div className="hansa-testimonials__arrows">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>

          <div className="hansa-testimonials__dots">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                type="button"
                key={index}
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => goTo(index)}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HansaEmployerTestimonialsSection;