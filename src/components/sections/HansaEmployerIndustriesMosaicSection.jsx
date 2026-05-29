import logisticsImage from "../../assets/images/mosaic-logistics.png";
import hospitalityImage from "../../assets/images/mosaic-hospitality.png";
import healthcareImage from "../../assets/images/mosaic-healthcare.png";
import warehousingImage from "../../assets/images/mosaic-warehousing.png";
import retailImage from "../../assets/images/mosaic-retail.png";

const industries = [
  {
    type: "color",
    title: "Manufacturing",
    text: "Production teams, factory roles and industrial workforce support.",
    colorClass: "hansa-employer-industries-mosaic__tile--red",
  },
  {
    type: "image",
    title: "Logistics",
    text: "Transport, distribution, loading operations and supply chain support.",
    image: logisticsImage,
    alt: "Logistics recruitment support",
  },
  {
    type: "color",
    title: "Construction",
    text: "Reliable candidates for construction, site work and project teams.",
    colorClass: "hansa-employer-industries-mosaic__tile--blue",
  },
  {
    type: "image",
    title: "Hospitality",
    text: "People-focused recruitment for hotels, restaurants and service roles.",
    image: hospitalityImage,
    alt: "Hospitality recruitment support",
  },
  {
    type: "color",
    title: "Agriculture",
    text: "Seasonal, agricultural and practical workforce support across Europe.",
    colorClass: "hansa-employer-industries-mosaic__tile--olive",
  },
  {
    type: "image",
    title: "Healthcare",
    text: "Careful recruitment support for healthcare and care-related positions.",
    image: healthcareImage,
    alt: "Healthcare recruitment support",
  },
  {
    type: "color",
    title: "Skilled Trades",
    text: "Experienced trade professionals for technical and hands-on roles.",
    colorClass: "hansa-employer-industries-mosaic__tile--purple",
  },
  {
    type: "image",
    title: "Warehousing",
    text: "Warehouse, packing, forklift and operational support candidates.",
    image: warehousingImage,
    alt: "Warehousing recruitment support",
  },
  {
    type: "color",
    title: "Customer Service",
    text: "Communication-focused people for client and customer-facing roles.",
    colorClass: "hansa-employer-industries-mosaic__tile--gray",
  },
  {
    type: "image",
    title: "Retail",
    text: "Recruitment support for retail teams and customer-oriented positions.",
    image: retailImage,
    alt: "Retail recruitment support",
  },
];

function HansaEmployerIndustriesMosaicSection() {
  return (
    <section className="hansa-employer-industries" id="employer-industries">
      <div className="hansa-container">
        <div className="hansa-employer-industries__head">
          <span className="hansa-section-label">Our Expertise</span>

          <h2>Industries we recruit for</h2>

          <p className="hansa-employer-industries__lead">
            We work with leading companies across Europe in sectors that value
            skilled, dedicated professionals.
          </p>
        </div>
      </div>

      <div
        className="hansa-employer-industries-mosaic"
        aria-label="Industries supported by Hansa Careers"
      >
        <div className="hansa-employer-industries-mosaic__grid">
          {industries.map((industry) => {
            if (industry.type === "color") {
              return (
                <article
                  className={`hansa-employer-industries-mosaic__tile hansa-employer-industries-mosaic__tile--color ${industry.colorClass}`}
                  key={industry.title}
                >
                  <div className="hansa-employer-industries-mosaic__content">
                    <h3>{industry.title}</h3>
                    <p>{industry.text}</p>
                  </div>
                </article>
              );
            }

            return (
              <article
                className="hansa-employer-industries-mosaic__tile hansa-employer-industries-mosaic__tile--image"
                key={industry.title}
              >
                <img src={industry.image} alt={industry.alt} />

                <div className="hansa-employer-industries-mosaic__overlay">
                  <div className="hansa-employer-industries-mosaic__content">
                    <h3>{industry.title}</h3>
                    <p>{industry.text}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="hansa-container">
  <div className="hansa-employer-industries__text">
    <p>
      These are just the beginning. We work with forward-thinking
      employers across countless industries — from food production and
      technical services to emerging markets and niche sectors.
    </p>

    <p>
      Wherever there is a need for reliable, skilled professionals and a
      commitment to fair employment, Hansa Careers delivers results. Your
      industry is our expertise.
    </p>
 

  <div className="hansa-employer-industries__actions">
    <a href="/contact" className="hansa-employer-industries__button">
      Contact
    </a>
     </div>
  </div>
</div>
    </section>
  );
}

export default HansaEmployerIndustriesMosaicSection;