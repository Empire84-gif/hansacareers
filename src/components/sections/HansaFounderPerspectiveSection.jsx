import stairsImage from "../../assets/images/stairs.png";
import technologyAiWorkflowImage from "../../assets/images/technology-ai-workflow.png";
import stayingHumanPressureImage from "../../assets/images/staying-human-pressure.png";

function HansaFounderPerspectiveSection() {
  return (
    <section className="hansa-founder-perspective" id="founders-perspective">
      <div className="hansa-founder-perspective__inner">
        <h2 className="hansa-founder-perspective__title">
          Founder’s Perspective
        </h2>

        <div className="hansa-founder-perspective__grid">
          <article className="hansa-founder-perspective__card">
            <div className="hansa-founder-perspective__image-wrap">
              <img
                src={stairsImage}
                alt="Spiral staircase representing building from zero"
                className="hansa-founder-perspective__image"
              />
            </div>

            <div className="hansa-founder-perspective__content">
              <span className="hansa-founder-perspective__category">
                Founder’s Perspective
              </span>

              <h3 className="hansa-founder-perspective__blog-title">
                Building From Zero: Why Consistency Matters More Than Perfect
                Conditions
              </h3>

              <a
                href="/founders-perspective"
                className="hansa-founder-perspective__button"
              >
                Open Article
              </a>
            </div>
          </article>

          <article className="hansa-founder-perspective__card">
            <div className="hansa-founder-perspective__image-wrap">
              <img
                src={technologyAiWorkflowImage}
                alt="Thoughtful professional working with AI, programming and automation tools"
                className="hansa-founder-perspective__image"
              />
            </div>

            <div className="hansa-founder-perspective__content">
              <span className="hansa-founder-perspective__category">
                Technology & AI
              </span>

              <h3 className="hansa-founder-perspective__blog-title">
                Will AI Replace People — Or Only Those Who Refuse to Use It?
              </h3>

              <a
                href="/founders-perspective/will-ai-replace-people"
                className="hansa-founder-perspective__button"
              >
                Open Article
              </a>
            </div>
          </article>

          <article className="hansa-founder-perspective__card">
  <div className="hansa-founder-perspective__image-wrap">
    <img
      src={stayingHumanPressureImage}
      alt="Elegant woman in a red dress walking through geometric architecture"
      className="hansa-founder-perspective__image"
    />
  </div>

  <div className="hansa-founder-perspective__content">
    <span className="hansa-founder-perspective__category">
      Life & Perspective
    </span>

    <h3 className="hansa-founder-perspective__blog-title">
      Staying Human in a World <br />Full of Pressure
    </h3>

    <a
      href="/founders-perspective/staying-human-pressure"
      className="hansa-founder-perspective__button"
    >
      Open Article
    </a>
  </div>
</article>
        </div>
      </div>
    </section>
  );
}

export default HansaFounderPerspectiveSection;