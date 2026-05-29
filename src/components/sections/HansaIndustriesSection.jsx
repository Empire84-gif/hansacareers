import { useEffect, useRef } from "react";

import manufacturingImage from "../../assets/images/manufacturing.png";
import logisticsImage from "../../assets/images/logistics.png";
import constructionImage from "../../assets/images/construction.png";
import hospitalityImage from "../../assets/images/hospitality.png";
import warehousingImage from "../../assets/images/warehousing.png";
import retailImage from "../../assets/images/retail.png";
import agricultureImage from "../../assets/images/agriculture.png";
import skilledTradesImage from "../../assets/images/skilled-trades.png";
import healthcareImage from "../../assets/images/healthcare.png";
import customerServiceImage from "../../assets/images/customer-service.png";

const industries = [
  {
    image: manufacturingImage,
    name: "Manufacturing",
  },
  {
    image: logisticsImage,
    name: "Logistics",
  },
  {
    image: constructionImage,
    name: "Construction",
  },
  {
    image: hospitalityImage,
    name: "Hospitality",
  },
  {
    image: warehousingImage,
    name: "Warehousing",
  },
  {
    image: retailImage,
    name: "Retail",
  },
  {
    image: agricultureImage,
    name: "Agriculture",
  },
  {
    image: skilledTradesImage,
    name: "Skilled Trades",
  },
  {
    image: healthcareImage,
    name: "Healthcare",
  },
  {
    image: customerServiceImage,
    name: "Customer Service",
  },
];

function HansaIndustriesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(
      ".hansa-industry-card"
    );

    if (!cards || cards.length === 0) {
      return undefined;
    }

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

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="industries" className="hansa-industries" ref={sectionRef}>
      <div className="hansa-container">
        <div className="hansa-industries__head">
          <p className="hansa-section-label">Industries</p>

          <h2>Industries we recruit for</h2>

          <p>
            We work with companies across Europe in sectors that value skilled,
            dedicated and reliable professionals.
          </p>
        </div>

        <div className="hansa-industries__grid">
          {industries.map((industry, index) => (
  <article
    className="hansa-industry-card"
    key={industry.name}
    style={{
      "--delay": `${index * 70}ms`,
      "--image-offset": industry.imageOffset || "0px",
    }}
  >
    <div className="hansa-industry-card__image-wrap">
      <img
        src={industry.image}
        alt={industry.name}
        className="hansa-industry-card__image"
        loading="lazy"
      />
    </div>

    <h3>{industry.name}</h3>
  </article>
))}
        </div>

        <p className="hansa-industries__footer">
          These sectors are only the beginning. Hansa Careers supports employers
          across established industries, operational roles and specialist labour
          markets where clear coordination and reliable people matter.
        </p>

        <div className="hansa-industries__actions">
          <a
            href="/current-openings"
            className="hansa-industries__button hansa-industries__button--primary"
          >
            Current Openings
          </a>

          <a
            href="/for-employers"
            className="hansa-industries__button hansa-industries__button--secondary"
          >
            For Employers
          </a>
        </div>
      </div>
    </section>
  );
}

export default HansaIndustriesSection;