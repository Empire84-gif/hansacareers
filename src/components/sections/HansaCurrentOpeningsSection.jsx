import { useMemo, useState } from "react";

import smartphoneImage from "../../assets/images/smartphone.png";
import whatsappImage from "../../assets/images/whatsapp.png";

const jobDatabase = [
  {
    id: 1,
    title: "ICU Nurse (Advanced Critical Care)",
    loc: "Helsinki, Finland",
    desc: [
      "Full-time position for an experienced ICU Nurse providing advanced critical care to adult patients in a tertiary hospital environment. The role includes ventilator support, continuous monitoring, and emergency response within multidisciplinary medical teams.",
      "The position is offered under a full-time employment contract in accordance with Finnish labor law. Work is performed on-site in a shift-based system.",
      "The employer offers a stable hospital role, structured onboarding, and support during the credential verification and local competency validation process. If relocation or accommodation support is available for this role, it will be confirmed and described in the individual employment offer.",
      "The salary is competitive and depends on experience; exact conditions are presented individually during the recruitment process.",
    ],
    requirements: [
      "EU-recognized Registered Nurse qualification",
      "ICU specialization",
      "Minimum 7 years of ICU experience in a hospital setting",
      "Finnish language level C1 mandatory",
      "English B2 or higher",
    ],
  },
  {
    id: 2,
    title: "Principal Backend Engineer (Regulated Payments)",
    loc: "Amsterdam, Netherlands",
    desc: [
      "Senior engineering role focused on the development and operation of backend services for regulated payment systems. The position involves ownership of production components subject to strict compliance and audit requirements.",
      "This is a full-time permanent employment contract governed by Dutch labor law. Work is performed on-site or in a hybrid model depending on project requirements.",
      "The employer offers long-term projects, clear technical ownership, and a mature engineering environment with strong security and compliance practices. Equipment, onboarding, and benefits follow the employer’s internal policy and will be confirmed during the recruitment process.",
      "Compensation is aligned with senior market standards and depends on experience; details are shared with shortlisted candidates.",
    ],
    requirements: [
      "At least 10 years of backend engineering experience",
      "Proven experience with payment systems and transactional integrity",
      "Experience working in regulated or audited environments",
      "Dutch language level C1 mandatory",
      "English language level C1",
    ],
  },
  {
    id: 3,
    title: "Senior Network Security Architect (Zero Trust)",
    loc: "Berlin, Germany",
    desc: [
      "Architect-level position responsible for the design and implementation of enterprise Zero Trust security architectures in large-scale environments. The role requires cooperation with technical, security, and business stakeholders.",
      "The role is offered as a full-time employment contract under German labor law. On-site presence is required for workshops and key implementation phases.",
      "The employer offers high autonomy, architecture ownership, and collaboration with experienced security teams. Project scope, benefits, and any additional allowances are defined by the employer and presented during the recruitment process.",
      "Salary is competitive and determined individually based on experience.",
    ],
    requirements: [
      "Minimum 12 years of experience in network and security architecture",
      "Demonstrated experience with Zero Trust and identity-based security models",
      "Hands-on knowledge of IAM and network segmentation technologies",
      "German language level C1 mandatory",
      "English language level C1",
    ],
  },
  {
    id: 4,
    title: "AI Governance & Model Risk Director",
    loc: "Amsterdam, Netherlands",
    desc: [
      "Senior leadership position responsible for AI governance frameworks and model risk management in regulated environments. The role includes oversight of compliance readiness and interaction with internal governance bodies.",
      "This position is offered as a full-time executive employment contract under Dutch labor law, with on-site or hybrid work depending on organizational needs.",
      "The employer offers a senior leadership scope, direct impact on governance decisions, and cooperation with compliance, legal, and engineering stakeholders. Executive benefits and any variable compensation components follow the employer’s internal policy and are confirmed during the recruitment process.",
      "Remuneration is aligned with executive-level market standards and discussed individually.",
    ],
    requirements: [
      "Minimum 12 years of experience in risk management, compliance, or AI governance",
      "Strong knowledge of GDPR and EU regulatory frameworks",
      "Proven senior leadership and stakeholder management experience",
      "Dutch language level C1 mandatory",
      "English language level C1",
    ],
  },
  {
    id: 5,
    title: "High-Frequency Systems Architect (FPGA & Low Latency)",
    loc: "Frankfurt am Main, Germany",
    desc: [
      "Specialist role focused on the design and optimization of ultra-low-latency systems for financial market infrastructure. The position involves hardware-level and network-level performance engineering in a controlled environment.",
      "The role is offered as a full-time on-site employment contract under German labor law and is subject to strict internal security and compliance policies.",
      "The employer offers work on high-impact trading infrastructure, access to specialized hardware, and cooperation with experienced performance engineering teams. Onboarding and benefits follow the employer’s internal policy and will be presented during the recruitment process.",
      "Salary and additional benefits are determined individually based on qualifications and experience.",
    ],
    requirements: [
      "At least 10 years of experience in low-latency systems engineering",
      "Strong FPGA development experience",
      "Proven background in high-performance networking",
      "German language level C1 mandatory",
      "English language level C1",
    ],
  },
];

function HansaCurrentOpeningsSection() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [activeJob, setActiveJob] = useState(null);

  const locations = useMemo(() => {
    return [...new Set(jobDatabase.map((job) => job.loc))].sort();
  }, []);

  const filteredJobs = selectedLocation
    ? jobDatabase.filter((job) => job.loc === selectedLocation)
    : jobDatabase;

  function closeModal() {
    setActiveJob(null);
  }

  return (
    <>
      <section className="hansa-openings">
        <div className="hansa-container">
          <div className="hansa-openings__wrap">
            <div className="hansa-openings__left">
              <span className="hansa-section-label">Where will your career take you next?</span>

              <h2>Available Positions</h2>

              <p className="hansa-openings__lead">
                Selected roles for qualified professionals seeking structured
                recruitment support and clear information before applying.
              </p>

              <div className="hansa-openings__filter">
                <select
                  value={selectedLocation}
                  onChange={(event) => setSelectedLocation(event.target.value)}
                  aria-label="Search by location"
                >
                  <option value="">Search by location...</option>

                  {locations.map((location) => (
                    <option value={location} key={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hansa-openings__table-wrap">
                <table className="hansa-openings-table">
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>Location</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredJobs.map((job) => (
                      <tr key={job.id} onClick={() => setActiveJob(job)}>
                        <td>{job.title}</td>
                        <td>{job.loc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <aside className="hansa-openings__right" aria-label="Social media">
              <div className="hansa-phone-mockup">
                <img
                  src={smartphoneImage}
                  alt="Hansa Careers mobile social media preview"
                  className="hansa-phone-mockup__image"
                />

                <div className="hansa-phone-mockup__overlay">
                  <div className="hansa-phone-mockup__icon" aria-hidden="true">
                    <i className="bi bi-hand-thumbs-up-fill"></i>
                  </div>

                  <p>
                    Follow us <br />
                    on <span>facebook</span>
                  </p>
                </div>
              </div>

              <a
                href="https://www.facebook.com/profile.php?id=61584773555098"
                target="_blank"
                rel="noreferrer"
                className="hansa-openings__follow"
              >
                Follow
              </a>

              <div className="hansa-openings-whatsapp">
                <div className="hansa-openings-whatsapp__image-wrap">
                  <img
                    src={whatsappImage}
                    alt="WhatsApp contact QR code"
                    className="hansa-openings-whatsapp__image"
                  />
                </div>

                <a
                  href="https://wa.me/37256171770"
                  target="_blank"
                  rel="noreferrer"
                  className="hansa-openings-whatsapp__button"
                >
                  Open WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {activeJob && (
        <div
          className="hansa-job-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeJob.title}
          onClick={closeModal}
        >
          <div
            className="hansa-job-modal__window"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="hansa-job-modal__close"
              onClick={closeModal}
              aria-label="Close job details"
            >
              ×
            </button>

            <h3>{activeJob.title}</h3>

            <p className="hansa-job-modal__location">
              <strong>Location:</strong> {activeJob.loc}
            </p>

            <div className="hansa-job-modal__divider"></div>

            <div className="hansa-job-modal__description">
              {activeJob.desc.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p>
                <strong>Requirements:</strong>
              </p>

              <ul>
                {activeJob.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="hansa-job-modal__note">
                Recruitment is conducted according to equal opportunity
                principles. Personal data is processed exclusively for
                recruitment purposes in accordance with GDPR.
              </p>
            </div>

            <a href="/contact" className="hansa-job-modal__apply">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default HansaCurrentOpeningsSection;