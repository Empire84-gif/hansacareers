// src/pages/HansaPrivacyPolicyPage.jsx

import HansaHeader from "../components/layout/HansaHeader.jsx";
import HansaFooter from "../components/layout/HansaFooter.jsx";
import HansaLegalHeroSection from "../components/sections/HansaLegalHeroSection.jsx";

function HansaPrivacyPolicyPage() {
  return (
    <main className="hansa-page">
      <HansaHeader />

      <HansaLegalHeroSection
        label="Legal"
        title="Privacy Policy"
        text="This document explains how personal data is processed in connection with the services provided under the Hansa Careers brand."
      />

      <section className="hansa-legal-content">
        <div className="hansa-container hansa-legal-content__inner">
          <div className="hansa-legal-document" id="privacy-policy">
            <nav className="hansa-legal-toc" aria-label="Privacy Policy table of contents">
              <h2>Table of Contents</h2>

              <ul>
                <li><a href="#section-1">1. General Information and Data Controller</a></li>
                <li><a href="#section-2">2. Categories of Individuals Whose Data We Process</a></li>
                <li><a href="#section-3">3. Scope of Personal Data Processed</a></li>
                <li><a href="#section-4">4. Purposes and Legal Bases for Processing Personal Data</a></li>
                <li><a href="#section-5">5. Legal Bases for Processing Personal Data</a></li>
                <li><a href="#section-6">6. Sources of Personal Data</a></li>
                <li><a href="#section-7">7. Recipients of Personal Data</a></li>
                <li><a href="#section-8">8. Transfers of Personal Data Outside the European Economic Area (EEA)</a></li>
                <li><a href="#section-9">9. Data Retention Periods</a></li>
                <li><a href="#section-10">10. Voluntary Provision of Personal Data</a></li>
                <li><a href="#section-11">11. Data Storage Locations and Security Measures</a></li>
                <li><a href="#section-12">12. Your Rights Related to the Processing of Personal Data</a></li>
                <li><a href="#section-13">13. Personal Data Breaches</a></li>
                <li><a href="#section-14">14. Automated Decision-Making and Profiling</a></li>
                <li><a href="#section-15">15. Supervisory Authority</a></li>
                <li><a href="#section-16">16. Jurisdiction and Applicable Law</a></li>
                <li><a href="#section-17">17. Updates to the Privacy Policy</a></li>
                <li><a href="#section-18">18. Marketing Activities and Contact with the Controller</a></li>
                <li><a href="#section-19">19. Cookies and Similar Technologies</a></li>
                <li><a href="#section-20">20. Server Logs</a></li>
              </ul>
            </nav>

            <p className="hansa-legal-document__updated">
              Last updated: December 4, 2025
            </p>

            <section className="hansa-legal-section">
              <h2 id="section-1">1. General Information and Data Controller</h2>

              <p>
                <strong>1.1. Scope of this document</strong>
                <br />
                This document outlines the rules governing the processing of
                personal data of individuals who use services provided under the
                Hansa Careers brand, operated by Handke Holding OÜ, a company
                registered in the Republic of Estonia. The purpose of this
                Privacy Policy is to clearly and transparently explain how and
                to what extent personal data is processed when individuals
                interact with the Controller in the course of its business
                activities.
              </p>

              <p>
                <strong>1.2. Information about the Data Controller</strong>
              </p>

              <div className="hansa-legal-company-box">
                <p>
                  Handke Holding OÜ
                  <br />
                  Harju maakond, Kesklinna linnaosa
                  <br />
                  Sakala tn 7-2, 10141 Tallinn
                  <br />
                  Estonia
                  <br />
                  <br />
                  registration number (registrikood): 17387477
                  <br />
                  VAT EU: EE102932869
                </p>
              </div>

              <p>
                <strong>1.3. Nature of business activities</strong>
                <br />
                The Controller operates in the field of employment intermediation
                services within the European Union and the European Economic Area,
                particularly facilitating communication and cooperation between
                employers and individuals seeking employment.
              </p>

              <p>
                <strong>1.4. Individuals covered by this Privacy Policy</strong>
                <br />
                This Privacy Policy applies in particular to individuals who:
              </p>

              <ul>
                <li>use services provided by the Controller,</li>
                <li>visit the website www.hansacareers.ee,</li>
                <li>participate in recruitment processes,</li>
                <li>contact the Controller for business, administrative, or informational purposes,</li>
                <li>engage in professional correspondence with the Controller,</li>
                <li>represent public or private entities in the context of formal cooperation.</li>
              </ul>

              <p>
                <strong>1.5. Purposes for which data is processed</strong>
                <br />
                The rules set out in this Policy apply to the processing of
                personal data in connection with:
              </p>

              <ul>
                <li>operating and maintaining the website www.hansacareers.ee,</li>
                <li>providing employment intermediation services,</li>
                <li>conducting client assignments and B2B cooperation,</li>
                <li>managing ongoing business and administrative correspondence,</li>
                <li>fulfilling obligations arising from applicable European Union and Estonian law.</li>
              </ul>

              <p>
                <strong>1.6. Legal basis</strong>
                <br />
                This Privacy Policy has been prepared in accordance with:
              </p>

              <ul>
                <li>Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 (GDPR),</li>
                <li>the Estonian Personal Data Protection Act (Isikuandmete kaitse seadus),</li>
                <li>other applicable legislation of the European Union and the Republic of Estonia.</li>
              </ul>

              <p>
                <strong>1.7. Communication Language and Contact Methods</strong>
                <br />
                The primary language of the Data Controller’s activities is English.
                Written communication may be conducted in any official language of
                the European Union or the European Economic Area.
              </p>

              <p>
                The preferred and recommended method of contacting the Data
                Controller is electronic communication, in particular:
              </p>

              <ul>
                <li>via e-mail at: <strong>office@hansacareers.ee</strong>,</li>
                <li>
                  through the contact form available on the website:{" "}
                  <a href="/#contact">www.hansacareers.ee</a>,
                </li>
                <li>by phone: <strong>+372 5617 1770</strong>.</li>
              </ul>

              <p>
                Contact with the Data Controller may also be conducted by postal
                correspondence to the address specified in Section 1.2. In order
                to ensure efficient handling of requests and an appropriate level
                of personal data protection, the Data Controller, operating
                entirely in a digital environment, nevertheless recommends the use
                of electronic communication. Traditional postal correspondence,
                due to the nature of the information transmitted, including the
                potential transmission of personal data, may be associated with
                longer processing times and an increased risk of data loss or
                unauthorized access.
              </p>

              <p>
                <strong>1.8. Voluntary nature of providing data and Controller’s responsibility</strong>
                <br />
                Providing personal data is voluntary; however, in certain cases it
                is necessary to access the Controller’s services, participate in
                recruitment processes, or receive a response to an inquiry. Failure
                to provide required data may make it impossible to achieve these
                purposes.
              </p>

              <p>
                The Controller is not required to appoint a Data Protection Officer,
                as the nature and scope of processing do not meet the criteria set
                out in Article 37(1) of the GDPR.
              </p>

              <p>The Controller is responsible for:</p>

              <ul>
                <li>ensuring that data processing is carried out in accordance with applicable law,</li>
                <li>implementing appropriate technical and organizational measures to safeguard personal data,</li>
                <li>enabling and fulfilling the rights of data subjects,</li>
                <li>cooperating with the Estonian supervisory authority — the Andmekaitse Inspektsioon.</li>
              </ul>
            </section>

           
            <section className="hansa-legal-section">
  <h2 id="section-2">2. Categories of Individuals Whose Data We Process</h2>

  <p>
    As part of the operations of Hansa Careers, operated by Handke Holding OÜ,
    only the personal data necessary for providing employment intermediation
    services, maintaining business relationships, and ensuring ongoing
    operational and organizational communication is processed. All processing
    activities are carried out in accordance with the principles of lawfulness,
    fairness, transparency, and data minimization as defined in Article 5(1) of
    the GDPR, and are always limited to what is necessary and proportionate to
    the purpose for which the data is processed. The Controller processes
    personal data relating to the following categories of individuals:
  </p>

  <p>
    <strong>2.1. Candidates participating in recruitment processes</strong>
    <br />
    Individuals applying for employment through Hansa Careers in response to
    specific, currently active recruitment processes for which job
    advertisements have been published. The data processed may include, in
    particular, information contained in a professional résumé, contact details,
    and any other information provided by the candidate in relation to the
    recruitment process. Candidate data may be obtained:
  </p>

  <ul>
    <li>directly from the candidate,</li>
    <li>
      from publicly available sources, but only to the extent that the candidate
      has made such information publicly accessible, in accordance with Article
      14 of the GDPR.
    </li>
  </ul>

  <p>
    This data is processed solely for the purpose of carrying out a specific
    recruitment process and is shared exclusively with clients for whom that
    recruitment process is conducted.
  </p>

  <p>
    <strong>2.2. Candidates submitting data outside active recruitment processes</strong>
    <br />
    The Controller processes candidate data exclusively in relation to specific
    and active recruitment processes. If the Controller is not conducting any
    ongoing recruitment processes, or if individuals submit their data —
    particularly professional résumés or messages — without reference to a
    specific job advertisement, such data is not accepted or used in any
    recruitment process. Data submitted on a voluntary basis, without responding
    to a specific job advertisement, is not reviewed, stored, or forwarded, and
    may be deleted immediately upon receipt, unless otherwise required by law.
    The Controller does not maintain a database of spontaneous or unsolicited
    candidate submissions and does not use such submissions in future
    recruitment processes. Contact is made only with individuals who have
    explicitly applied for a specific job posting or who have publicly expressed
    an interest in employment — for example, through publicly available posts on
    social media — and solely to the extent necessary to initiate communication
    regarding the relevant job opportunity.
  </p>

  <p>
    <strong>2.3. Clients and their representatives</strong>
    <br />
    Individuals and representatives of business entities with whom the
    Controller cooperates in the provision of employment intermediation services.
    The data processed includes, in particular, names, contact details,
    professional roles, and information necessary for executing contracts or
    business cooperation.
  </p>

  <p>
    <strong>2.4. Potential clients and business partners</strong>
    <br />
    Individuals with whom contact has been established for the purpose of
    proposing cooperation, or whose data has been obtained from publicly
    available sources such as company websites or professional business
    platforms. This data is processed on the basis of the Controller’s
    legitimate interest in conducting business activities and developing business
    relationships.
  </p>

  <p>
    <strong>2.5. Contractors and service providers</strong>
    <br />
    Individuals conducting business activity as sole proprietors and
    representatives of entities providing services to the Controller that are
    necessary for the operation of the business, particularly technical,
    accounting, legal, or communication services. This data is processed for the
    purpose of performing contracts, maintaining ongoing communication, and
    fulfilling statutory obligations.
  </p>

  <p>
    <strong>
      2.6. Other individuals contacting the Controller and representatives of
      public authorities
    </strong>
    <br />
    Individuals who send inquiries through contact forms, email, or other
    communication channels, as well as representatives of public bodies and
    institutions with whom the Controller conducts official correspondence. This
    data is processed solely for the purpose of handling correspondence,
    providing responses, or fulfilling legal obligations.
  </p>

  <p>
    <strong>2.7. Minors</strong>
    <br />
    The services provided by the Controller are intended exclusively for adults
    aged 18 years of age or older. The Controller does not knowingly collect or
    process personal data of minors. If the Controller becomes aware that
    personal data of a person under the age of 18 has been collected, such data
    will be deleted without undue delay, unless further retention is required by
    applicable law.
  </p>

  <p>
    <strong>Additional Information</strong>
  </p>

  <p>The Controller:</p>

  <ul>
    <li>does not obtain data from non-public sources,</li>
    <li>does not conduct systematic monitoring of individuals,</li>
    <li>does not process data irrelevant to the purposes pursued.</li>
  </ul>
</section>

<section className="hansa-legal-section">
  <h2 id="section-3">3. Scope of Personal Data Processed</h2>

  <p>
    The scope of personal data processed depends on the nature of the
    relationship between the Controller and the data subject, as well as the
    purpose for which the data is provided. The Controller processes only the
    data necessary to achieve specific, lawful purposes, in strict adherence to
    the principle of data minimization. Personal data is processed in a manner
    that is adequate, relevant, and limited to what is necessary, in accordance
    with Article 5(1)(c) of the GDPR and § 11 of the Estonian Personal Data
    Protection Act (Isikuandmete kaitse seadus).
  </p>

  <p>
    <strong>3.1. Identification and contact data</strong>
    <br />
    The Controller may process, in particular, the following categories of data:
  </p>

  <ul>
    <li>first and last name,</li>
    <li>email address,</li>
    <li>telephone number,</li>
    <li>
      other contact details voluntarily provided in correspondence or through a
      contact form,
    </li>
    <li>
      business-related information in the context of professional communication
      such as company name, job title, business email address, and business phone
      number.
    </li>
  </ul>

  <p>
    This data is processed for the purposes of communication, responding to
    inquiries, performing cooperation, or fulfilling administrative obligations.
  </p>

  <p>
    <strong>3.2. Data of candidates participating in recruitment processes</strong>
    <br />
    When active recruitment processes are underway, the Controller processes data
    provided by candidates exclusively in response to specific recruitment
    advertisements. The processed data may include:
  </p>

  <ul>
    <li>
      information contained in a résumé (CV), such as professional experience,
      education, qualifications, skills, and language proficiency,
    </li>
    <li>
      the content of the message submitted in connection with the application,
    </li>
    <li>
      other information voluntarily provided by the candidate in relation to the
      advertised position.
    </li>
  </ul>

  <p>
    The Controller does not obtain candidate data from sources other than direct
    contact in response to a job posting and does not process candidate data
    beyond what is necessary for the specific recruitment process.
  </p>

  <p>
    <strong>3.3. Candidates submitting data outside recruitment processes</strong>
    <br />
    If the Controller is not conducting active recruitment processes or has not
    published job advertisements, personal data submitted on an unsolicited basis
    — particularly CVs sent without reference to a specific job posting — is not
    accepted or used. Such data is deleted without further processing, and the
    Controller does not create databases or records of spontaneously submitted
    applications. The Controller only accepts and reviews applications submitted
    in response to specific, active recruitment advertisements.
  </p>

  <p>
    <strong>3.4. Client and business cooperation data</strong>
    <br />
    The Controller processes personal data of clients and their representatives
    to the extent necessary for providing employment intermediation services and
    conducting business cooperation. This data may include:
  </p>

  <ul>
    <li>name of the contact person,</li>
    <li>email address and telephone number,</li>
    <li>job title or professional role,</li>
    <li>information contained in contracts, invoices, and accounting documentation.</li>
  </ul>

  <p>
    This data is processed to perform contracts, maintain working
    communications, and comply with tax and accounting obligations.
  </p>

  <p>
    <strong>3.5. Data contained in communication and correspondence</strong>
    <br />
    The Controller processes data contained in correspondence conducted via
    email, contact forms, or other communication channels. The scope of the
    processed data depends on the content of the message sent by the
    correspondent and is limited to what is necessary to respond or address the
    matter.
  </p>

  <p>
    <strong>3.6. Technical and operational data related to the website</strong>
    <br />
    When using the website www.hansacareers.ee, technical data may be processed,
    such as:
  </p>

  <ul>
    <li>IP address,</li>
    <li>browser and operating system information,</li>
    <li>date and time of connection,</li>
    <li>technical data stored in server logs.</li>
  </ul>

  <p>
    This data is used solely to ensure website security, protect against misuse,
    and enable correct website functioning. In this regard, the Controller uses
    services provided by Cloudflare, Inc., which processes technical data as a
    processor on behalf of the Controller.
  </p>

  <p>
    <strong>3.7. Data related to video communication</strong>
    <br />
    For online meetings or calls, the Controller may use the Whereby platform.
    Processing is limited to the data necessary to establish a connection, such
    as the participant’s name or username, IP address, and technical connection
    data. The Controller does not record meetings or store their content unless
    participants are informed in advance and provide their consent.
  </p>

  <p>
    <strong>3.8. Special categories of personal data</strong>
    <br />
    As a rule, the Controller does not process special categories of personal
    data as defined in Article 9 of the GDPR. The Controller does not request
    such data and does not require its submission. If such data is provided
    voluntarily in correspondence or documents, it will be processed only to the
    extent necessary to fulfill the purpose for which it was submitted or will be
    deleted without delay.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-4">4. Purposes and Legal Bases for Processing Personal Data</h2>

  <p>
    The Controller processes personal data only to the extent necessary to
    conduct its activities in compliance with applicable law, and in a manner
    consistent with the principles of fairness, transparency, and data
    minimization. Data processing is carried out in accordance with Articles 5
    and 6 of Regulation (EU) 2016/679 (GDPR) and the provisions of the Estonian
    Personal Data Protection Act (Isikuandmete kaitse seadus). Personal data is
    processed solely for clearly defined, legitimate purposes and is not further
    used in any manner incompatible with those purposes.
  </p>

  <p>
    <strong>4.1. Conducting recruitment processes</strong>
    <br />
    Personal data of candidates is processed for the purposes of:
  </p>

  <ul>
    <li>
      receiving and reviewing applications submitted in response to specific
      recruitment advertisements,
    </li>
    <li>communicating with candidates throughout the recruitment process,</li>
    <li>
      assessing the candidate’s professional profile in relation to the
      requirements of a given job offer,
    </li>
    <li>
      forwarding candidate data to clients who are potential employers —
      strictly within the scope of the specific recruitment process.
    </li>
  </ul>

  <p>
    <strong>Legal basis:</strong>
    <br />
    Article 6(1)(a) GDPR — consent of the candidate,
    <br />
    Article 6(1)(b) GDPR — steps taken at the request of the data subject prior
    to entering into a contract,
    <br />
    Article 9(2)(a) GDPR — explicit consent where the candidate voluntarily
    discloses special categories of personal data.
  </p>

  <p>
    <strong>4.2. Retaining applications for future recruitment</strong>
    <br />
    Candidate data may be stored after the conclusion of a recruitment process
    only if the candidate provides separate and explicit consent. The data is
    stored for the period specified in the consent or until the consent is
    withdrawn.
  </p>

  <p>
    <strong>Legal basis:</strong>
    <br />
    Article 6(1)(a) GDPR.
  </p>

  <p>
    <strong>4.3. Entering into and performing contracts</strong>
    <br />
    Data of clients, contractors, and business partners is processed for the
    purposes of:
  </p>

  <ul>
    <li>entering into and performing contracts,</li>
    <li>providing employment intermediation services,</li>
    <li>handling commercial, administrative, and operational communications.</li>
  </ul>

  <p>
    <strong>Legal basis:</strong>
    <br />
    Article 6(1)(b) GDPR — performance of a contract,
    <br />
    Article 6(1)(c) GDPR — compliance with legal obligations arising from tax
    and accounting regulations.
  </p>

  <p>
    <strong>4.4. Maintaining business relationships and B2B marketing</strong>
    <br />
    Contact details of company representatives may be processed for the purposes
    of:
  </p>

  <ul>
    <li>conducting ongoing business communication,</li>
    <li>presenting cooperation proposals,</li>
    <li>direct marketing in B2B relations.</li>
  </ul>

  <p>
    <strong>Legal basis:</strong>
    <br />
    Article 6(1)(f) GDPR — the Controller’s legitimate interest in conducting
    and developing business activities.
    <br />
    The data subject has the right to object to such processing.
  </p>

  <p>
    <strong>4.5. Responding to inquiries and conducting correspondence</strong>
    <br />
    Data of individuals who contact the Controller via contact forms, email, or
    telephone is processed for the purpose of providing responses and conducting
    ongoing correspondence.
  </p>

  <p>
    <strong>Legal basis:</strong>
    <br />
    Article 6(1)(f) GDPR — the Controller’s legitimate interest.
  </p>

  <p>
    <strong>4.6. Settlements, accounting, and archiving</strong>
    <br />
    Personal data is processed to fulfill accounting, tax, and archiving
    obligations arising from the laws of the Republic of Estonia.
  </p>

  <p>
    <strong>Legal basis:</strong>
    <br />
    Article 6(1)(c) GDPR — the Controller’s legal obligation.
  </p>

  <p>
    <strong>4.7. Ensuring the security of forms and IT systems (Cloudflare)</strong>
    <br />
    The Controller implements technical and organizational measures to protect
    the website and contact forms against spam, abuse, and automated
    submissions. For this purpose, Cloudflare services are used, including
    Turnstile security mechanisms, which may process technical user data such as:
  </p>

  <ul>
    <li>IP address,</li>
    <li>browser and operating system data,</li>
    <li>technical information necessary for risk assessment.</li>
  </ul>

  <p>
    This data is processed solely to ensure security and integrity of the IT
    systems.
  </p>

  <p>
    <strong>Legal basis:</strong>
    <br />
    Article 6(1)(f) GDPR — the Controller’s legitimate interest in protecting
    the website and data.
  </p>

  <p>
    <strong>4.8. Establishing, pursuing, or defending legal claims</strong>
    <br />
    Personal data may be processed for the purpose of establishing, pursuing, or
    defending against legal claims.
  </p>

  <p>
    <strong>Legal basis:</strong>
    <br />
    Article 6(1)(f) GDPR — the Controller’s legitimate interest.
  </p>

  <p>
    <strong>4.9. Fulfilling obligations towards public authorities</strong>
    <br />
    Personal data may be transferred to authorized public authorities, courts, or
    supervisory bodies to the extent required by law.
  </p>

  <p>
    <strong>Legal basis:</strong>
    <br />
    Article 6(1)(c) GDPR — the Controller’s legal obligation.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-5">5. Legal Bases for Processing Personal Data</h2>

  <p>
    The Controller processes personal data only when there is a clear and lawful
    basis for doing so, as provided under:
  </p>

  <ul>
    <li>
      Regulation (EU) 2016/679 of the European Parliament and of the Council of
      April 27, 2016 (GDPR),
    </li>
    <li>
      the Estonian Personal Data Protection Act – Isikuandmete kaitse seadus
      (IKS, RT I, 26.03.2019, 10).
    </li>
  </ul>

  <p>
    All processing activities are carried out in accordance with the principles
    set out in Article 5 GDPR and § 11 IKS, in particular the principles of
    lawfulness, fairness, transparency, purpose limitation, data minimization,
    integrity, and confidentiality.
  </p>

  <p>
    <strong>5.1. Legal bases for processing personal data (Article 6 GDPR)</strong>
    <br />
    The Controller processes personal data on the following legal bases:
  </p>

  <p>
    <strong>a) Consent of the data subject</strong>
    <br />
    (Article 6(1)(a) GDPR; § 10(1) IKS)
    <br />
    Applies in situations where the individual voluntarily and unambiguously
    provides consent, in particular for:
  </p>

  <ul>
    <li>participation in future recruitment processes,</li>
    <li>transmission of data to a potential employer,</li>
    <li>
      processing of additional data voluntarily provided, such as likeness or
      image.
    </li>
  </ul>

  <p>
    Consent may be withdrawn at any time without affecting the lawfulness of
    processing carried out prior to its withdrawal (Article 7(3) GDPR).
  </p>

  <p>
    <strong>
      b) Performance of a contract or steps taken prior to entering into a contract
    </strong>
    <br />
    (Article 6(1)(b) GDPR; § 10(1)(2) IKS)
  </p>

  <ul>
    <li>conducting recruitment processes and employment intermediation services,</li>
    <li>establishing and performing cooperation with clients and contractors,</li>
    <li>preparing and executing service proposals,</li>
    <li>maintaining operational communication throughout the cooperation.</li>
  </ul>

  <p>
    <strong>c) Compliance with a legal obligation</strong>
    <br />
    (Article 6(1)(c) GDPR; § 10(1)(3) IKS)
    <br />
    Covers processing required by Estonian and EU law, in particular:
  </p>

  <ul>
    <li>
      Raamatupidamise seadus §§ 12–13 — obligation to maintain and store
      accounting records for 7 years,
    </li>
    <li>tax and reporting obligations,</li>
    <li>obligations related to public audits and financial inspections.</li>
  </ul>

  <p>
    <strong>d) Legitimate interest of the Controller</strong>
    <br />
    (Article 6(1)(f) GDPR; § 11(2) IKS)
    <br />
    Processing necessary for the Controller’s legitimate purposes, such as:
  </p>

  <ul>
    <li>conducting ongoing communication and handling inquiries,</li>
    <li>developing professional relationships and B2B cooperation,</li>
    <li>
      direct marketing within a business context, in accordance with
      Elektroonilise side seadus § 102,
    </li>
    <li>ensuring the security of IT systems, contact forms, and documentation,</li>
    <li>preventing abuse, as well as protection against spam and attacks,</li>
    <li>establishing, pursuing, or defending legal claims.</li>
  </ul>

  <p>
    The Controller always assesses whether its legitimate interests override the
    rights and freedoms of the data subject (Article 6(1)(f) GDPR in conjunction
    with Recital 47 GDPR).
  </p>

  <p>
    <strong>
      e) Performance of a task carried out in the public interest
    </strong>
    <br />
    (Article 6(1)(e) GDPR; § 10(1)(4) IKS)
    <br />
    Applies to situations involving processing conducted within or under the
    supervision of public institutions, particularly labor market and mobility
    programs such as Eesti Töötukassa, EURES, or EU programs, where such
    processing occurs.
  </p>

  <p>
    <strong>
      5.2. Processing of special categories of personal data (Article 9 GDPR)
    </strong>
    <br />
    As a rule, the Controller does not process special categories of personal
    data referred to in Article 9(1) GDPR. If a data subject voluntarily
    discloses such information, such as health or disability data:
  </p>

  <ul>
    <li>
      processing takes place only on the basis of explicit consent
      (Article 9(2)(a) GDPR; § 21 IKS),
    </li>
    <li>
      such data is subject to enhanced technical and organizational security
      measures (Article 32 GDPR),
    </li>
    <li>lack of consent does not result in any negative consequences.</li>
  </ul>

  <p>
    <strong>5.3. General principles of data processing</strong>
    <br />
    The Controller ensures that all personal data processing operations comply
    with:
  </p>

  <ul>
    <li>Articles 5 and 6 GDPR,</li>
    <li>§ 11 Isikuandmete kaitse seadus,</li>
    <li>Article 32 GDPR — regarding processing security,</li>
    <li>Article 24 GDPR — accountability principle.</li>
  </ul>

  <p>
    The Controller does not conduct automated decision-making or profiling within
    the meaning of Article 22 GDPR.
  </p>

  <p>
    <strong>5.4. Compliance assessment and internal documentation</strong>
    <br />
    To ensure compliance with the GDPR and Estonian law, the Controller maintains
    and updates:
  </p>

  <ul>
    <li>a record of processing activities (Article 30 GDPR),</li>
    <li>
      legitimate interest assessments for processing under Article 6(1)(f) GDPR,
    </li>
    <li>information security documentation,</li>
    <li>
      procedures for responding to personal data breaches (Articles 33–34 GDPR,
      § 23 IKS).
    </li>
  </ul>
</section>

<section className="hansa-legal-section">
  <h2 id="section-6">6. Sources of Personal Data</h2>

  <p>
    The personal data processed by the Controller originates exclusively from
    lawful sources and is obtained in a manner compliant with applicable law, in
    particular Articles 13 and 14 of Regulation (EU) 2016/679 and the relevant
    provisions of the Estonian Personal Data Protection Act (Isikuandmete kaitse
    seadus).
  </p>

  <p>
    If personal data is obtained from sources other than directly from the data
    subject, the Controller fulfils the information obligation within a
    reasonable period, no later than within 30 days from the date of collection,
    unless otherwise required by law.
  </p>

  <p>
    <strong>6.1. Data obtained directly from data subjects</strong>
    <br />
    Personal data is voluntarily provided to the Controller by individuals, in
    particular through:
  </p>

  <ul>
    <li>contact forms available on the website,</li>
    <li>email correspondence,</li>
    <li>telephone conversations or online meetings,</li>
    <li>responses to recruitment advertisements published by the Controller,</li>
    <li>ongoing communication during cooperation or business contacts.</li>
  </ul>

  <p>
    The scope of the provided data depends on the nature of the contact and the
    purpose for which the individual is reaching out to the Controller.
  </p>

  <p>
    <strong>6.2. Data obtained as part of recruitment processes</strong>
    <br />
    With regard to job candidates, personal data is obtained exclusively:
  </p>

  <ul>
    <li>
      directly from candidates responding to a specific recruitment advertisement
      published by the Controller,
    </li>
    <li>
      within communication initiated by the candidate in the context of a
      specific position.
    </li>
  </ul>

  <p>
    The Controller does not accept and does not process résumés or other
    candidate data submitted spontaneously if no active recruitment processes are
    underway or if the data does not relate to a specific job offer.
  </p>

  <p>
    Such data is deleted without undue delay and is not used for any recruitment
    purposes.
  </p>

  <p>
    The Controller does not use non-public data sources and does not collect data
    from private or restricted social media profiles.
  </p>

  <p>
    <strong>6.3. Data of clients, contractors, and business partners</strong>
    <br />
    Personal data of clients, contractors, and their representatives is obtained
    through:
  </p>

  <ul>
    <li>direct professional contacts,</li>
    <li>negotiations, contract conclusion, and performance,</li>
    <li>publicly available sources related to professional or business activity.</li>
  </ul>

  <p>
    Such data is processed solely to the extent necessary to conduct business
    cooperation, operational communication, and fulfil legal obligations.
  </p>

  <p>
    <strong>6.4. Data of representatives of public authorities and institutions</strong>
    <br />
    The Controller processes personal data of representatives of offices, public
    institutions, and supervisory authorities strictly within the scope arising
    from:
  </p>

  <ul>
    <li>conducting official correspondence,</li>
    <li>fulfilling legal obligations,</li>
    <li>cooperation with relevant public administration authorities.</li>
  </ul>

  <p>
    The scope of the processed data typically includes the individual’s name,
    official email address, position or function, and other data provided in the
    context of formal communication.
  </p>

  <p>
    The legal bases for such processing are, in particular, Article 6(1)(c) and
    Article 6(1)(f) of Regulation (EU) 2016/679.
  </p>

  <p>
    <strong>6.5. Technical data and form security</strong>
    <br />
    When using the Controller’s website and contact forms, basic technical data
    may be automatically processed, such as:
  </p>

  <ul>
    <li>IP address,</li>
    <li>date and time of connection,</li>
    <li>technical information about the browser and operating system,</li>
    <li>data necessary to ensure secure communication.</li>
  </ul>

  <p>
    To protect contact forms against abuse, spam, and automated submissions, the
    Controller uses the services of a security infrastructure provider
    (Cloudflare, Inc.).
  </p>

  <p>
    As part of this mechanism, technical user data — including IP address and
    connection-related information — may be processed.
  </p>

  <p>
    Data processing in this context is carried out on the basis of:
  </p>

  <ul>
    <li>
      Article 6(1)(f) GDPR — the Controller’s legitimate interest in ensuring
      system security and protection against abuse,
    </li>
    <li>
      appropriate safeguards and legal mechanisms applicable to data transfers
      outside the European Union.
    </li>
  </ul>

  <p>
    <strong>6.6. Registry, accounting, and documentation data</strong>
    <br />
    Personal data processed for accounting, tax, or archiving purposes originates
    from:
  </p>

  <ul>
    <li>clients and contractors directly,</li>
    <li>contractual and billing documentation,</li>
    <li>official correspondence related to business operations.</li>
  </ul>

  <p>
    The scope and retention period for such data are determined directly by
    applicable Estonian and EU legal requirements.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-7">7. Recipients of Personal Data</h2>

  <p>
    Personal data processed under the Hansa Careers brand, operated by Handke
    Holding OÜ, may be disclosed only to recipients who:
  </p>

  <ul>
    <li>are legally entitled to receive the data under applicable law, or</li>
    <li>
      process the data on behalf of the Controller in connection with the
      performance of specific business or legal purposes.
    </li>
  </ul>

  <p>
    All data disclosures are carried out in accordance with Articles 28 and
    44–49 of Regulation (EU) 2016/679, as well as the relevant provisions of the
    Estonian Personal Data Protection Act (Isikuandmete kaitse seadus), with
    full respect for the principles of data minimization, confidentiality, and
    purpose limitation.
  </p>

  <p>
    <strong>7.1. Potential employers and recruitment partners</strong>
    <br />
    Candidate data may be shared with potential employers or recruitment
    partners exclusively:
  </p>

  <ul>
    <li>as part of a specific recruitment process,</li>
    <li>after informing the candidate in advance,</li>
    <li>to the extent necessary to assess professional qualifications,</li>
    <li>
      on the basis of an appropriate legal basis, in particular the candidate’s
      consent or steps taken prior to entering into a contract.
    </li>
  </ul>

  <p>
    Data is not disclosed in bulk, nor is it used outside the clearly defined
    recruitment process.
  </p>

  <p>
    <strong>
      7.2. Technical and organizational entities processing data on behalf of
      the Controller
    </strong>
    <br />
    Personal data may be entrusted to entities supporting the Controller’s
    operations, in particular:
  </p>

  <ul>
    <li>hosting and server infrastructure providers,</li>
    <li>email and contact form service providers,</li>
    <li>providers of IT tools and communication systems,</li>
    <li>providers of online meeting and video communication tools,</li>
    <li>
      providers of security solutions and anti-abuse systems, including form
      protection tools,
    </li>
    <li>accounting and bookkeeping service providers,</li>
    <li>law firms, tax advisors, and business advisors.</li>
  </ul>

  <p>
    These entities process personal data solely on the basis of a data
    processing agreement and are required to:
  </p>

  <ul>
    <li>maintain confidentiality,</li>
    <li>apply appropriate technical and organizational measures,</li>
    <li>
      process data exclusively on documented instructions from the Controller.
    </li>
  </ul>

  <p>
    <strong>7.3. Candidates and clients</strong>
    <br />
    Personal data may be shared with candidates or clients only to the extent
    necessary to fulfil a specific purpose, in particular:
  </p>

  <ul>
    <li>
      providing candidates with information about working conditions, job
      location, or employer profile,
    </li>
    <li>
      providing clients with information about a candidate within an ongoing
      recruitment process.
    </li>
  </ul>

  <p>
    The scope of the data disclosed is always limited to the minimum required
    and depends on the stage of the process.
  </p>

  <p>
    <strong>7.4. Public authorities and institutions</strong>
    <br />
    Personal data may be transferred to authorized public authorities strictly
    to the extent required by law, in particular:
  </p>

  <ul>
    <li>tax authorities,</li>
    <li>labor offices and labor market institutions,</li>
    <li>the data protection supervisory authority,</li>
    <li>courts, law enforcement agencies, and other supervisory bodies,</li>
    <li>institutions of the European Union and the European Economic Area.</li>
  </ul>

  <p>
    <strong>7.5. Providers of online communication services</strong>
    <br />
    For online meetings or remote communication, personal data such as name,
    email address, or technical connection data may be processed by providers of
    remote communication tools. Such processing is carried out solely to enable
    communication and organize meetings, and is based on the Controller’s
    legitimate interest or steps taken before entering into a contract.
  </p>

  <p>
    <strong>7.6. Recipients of technical data for security purposes</strong>
    <br />
    To ensure the security of the website, IT infrastructure, and contact forms,
    technical user data — such as IP address or connection information — may be
    processed by network security service providers. When data is transferred
    outside the European Union, appropriate legal safeguards required under
    Articles 44–49 GDPR are applied.
  </p>

  <p>
    <strong>7.7. General principles of data disclosure</strong>
    <br />
    The Controller:
  </p>

  <ul>
    <li>does not sell personal data,</li>
    <li>does not disclose data to third parties without a legal basis,</li>
    <li>
      does not transfer data for advertising, marketing, or profiling purposes,
    </li>
    <li>
      does not provide data to social media platforms or commercial portals for
      marketing purposes.
    </li>
  </ul>

  <p>
    Each data recipient processes personal data in accordance with the principles
    of security, confidentiality, and purpose limitation, and only to the extent
    necessary to perform the assigned task.
  </p>

  <p>
    <strong>7.8. Embedded map service (OpenStreetMap)</strong>
    <br />
    The Website includes an embedded interactive map provided by OpenStreetMap,
    used solely for the purpose of presenting the registered address of the
    Controller and facilitating contact with the Controller.
  </p>

  <p>
    The map is displayed in the form of an iframe and is loaded directly from
    OpenStreetMap servers. The Controller does not receive any personal data
    from OpenStreetMap and does not have access to personal data processed by
    this service.
  </p>

  <p>
    OpenStreetMap Foundation is established in the United Kingdom, which is a
    third country covered by a European Commission decision confirming an
    adequate level of data protection, pursuant to Article 45 of Regulation (EU)
    2016/679 (GDPR).
  </p>

  <p>
    Depending on the user’s device, browser configuration, and network settings,
    OpenStreetMap may process technical data, such as IP address, in accordance
    with its own privacy policy.
  </p>

  <p>
    The embedded map is used exclusively for informational and contact purposes
    and is not used for tracking, analytics, profiling, or marketing activities.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-8">
    8. Transfers of Personal Data Outside the European Economic Area (EEA)
  </h2>

  <p>
    As a rule, the Controller does not transfer personal data outside the
    European Economic Area (EEA) or to international organizations. Core
    data-processing operations are carried out within the territory of the
    European Union, in particular using infrastructure located in the EU,
    including in the Republic of Estonia.
  </p>

  <p>
    The Controller uses hosting and email services provided by Zone Media OÜ,
    operating under the trade name zone.ee, whose data-processing infrastructure
    is located within the territory of the European Union. Personal data
    processed in connection with website operation and email communication is
    generally processed within the European Economic Area (EEA) and benefits
    from the protections afforded under Regulation (EU) 2016/679 (GDPR).
  </p>

  <p>
    To ensure the security of the website, contact forms, and protection against
    abuse and automated activity, the Controller also uses services provided by
    Cloudflare, Inc. As part of this, technical data — for example, IP address,
    network connection data, browser and device information, and other data
    necessary for security assessment — may be processed. Due to the global
    nature of Cloudflare’s infrastructure, such data may be transferred or made
    accessible outside the EEA, in particular to the United States.
  </p>

  <p>
    Transfers of data carried out through the use of Cloudflare services are
    conducted in accordance with Chapter V of the GDPR, in particular on the
    basis of the European Commission’s Standard Contractual Clauses (Article 46
    GDPR) and — where applicable — mechanisms provided under the EU–US Data
    Privacy Framework. The Controller applies additional technical and
    organizational safeguards, such as encrypted data transmission and limiting
    the scope of processed information to what is strictly necessary to ensure
    the security and integrity of the service.
  </p>

  <p>
    Apart from the situations described above, the Controller does not carry out
    regular or planned transfers of personal data to third countries.
    Recruitment processes, communication with clients and contractors, email
    correspondence, and day-to-day operations are conducted using tools and
    services that process data within the European Union.
  </p>

  <p>
    The Controller permits contact via external messaging platforms only at the
    initiative of the individual contacting the Controller and strictly for
    informational purposes. Because the servers of such services may be located
    outside the EEA, they are not considered a recommended or secure channel for
    communications involving personal data.
  </p>

  <p>
    The Controller strongly recommends that application documents,
    special-category data, and other sensitive information be submitted
    exclusively through official communication channels.
  </p>

  <p>
    In any case where personal data is transferred outside the EEA, the
    Controller ensures that such transfer takes place solely to the extent
    necessary to achieve a specific purpose, after conducting a transfer risk
    assessment, and in accordance with the principles of data minimization,
    confidentiality, and processing security, in line with Articles 32 and 44–49
    GDPR.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-9">9. Data Retention Periods</h2>

  <p>
    The Controller retains personal data only for the period necessary to fulfill
    the purposes for which the data was collected, in accordance with Article
    5(1)(e) of Regulation (EU) 2016/679 (GDPR) and § 17 of the Estonian Personal
    Data Protection Act (Isikuandmete kaitse seadus).
  </p>

  <p>
    Upon expiry of the relevant retention periods, the data is permanently
    deleted, anonymized, or archived in a manner that prevents identification of
    the individual, unless applicable Estonian or EU law requires further
    retention.
  </p>

  <p>Retention periods are determined with regard to:</p>

  <ul>
    <li>the purpose of processing,</li>
    <li>the legal basis for processing,</li>
    <li>the nature of the relationship with the data subject,</li>
    <li>limitation periods for claims under Estonian law.</li>
  </ul>

  <p>
    <strong>9.1. Candidate data</strong>
  </p>

  <p>
    <strong>a)</strong> Personal data processed for a recruitment process in
    response to a specific job advertisement, based on Article 6(1)(b) GDPR, is
    retained for the period necessary to establish, exercise, or defend legal
    claims arising from the Controller’s services.
  </p>

  <p>
    <strong>b)</strong> Data processed in connection with contact initiated by
    the Controller for recruitment-related purposes, based on Article 6(1)(f)
    GDPR, is retained until the communication relating to the specific matter is
    concluded.
  </p>

  <p>
    <strong>c)</strong> Personal data shared with potential employers for the
    purpose of conducting a specific recruitment process, based on Article
    6(1)(a) GDPR, is retained until the withdrawal of consent or the conclusion
    of the recruitment process, whichever occurs first.
  </p>

  <p>
    <strong>d)</strong> Data processed for the purpose of invoicing and providing
    services to clients in support of recruitment activities, based on Article
    6(1)(f) GDPR, is retained until the expiry of claims following the conclusion
    of the contract — generally for 3 years, calculated at the end of the
    calendar year, in accordance with Estonian law.
  </p>

  <p>
    <strong>e)</strong> Data processed for the purpose of establishing,
    exercising, or defending legal claims arising from the services provided,
    based on Article 6(1)(f) GDPR, is retained until the expiry of such claims
    following the termination of the contract — generally for 3 years, unless a
    longer period is required by law.
  </p>

  <p>
    <strong>f)</strong> Data processed for the purpose of communication relating
    to the Controller’s operations, based on Article 6(1)(f) GDPR, is retained
    for the period necessary to handle the specific matter.
  </p>

  <p>
    <strong>g)</strong> Data retained in the Controller’s database for future
    recruitment processes, based on Article 6(1)(a) GDPR, is stored for no longer
    than 12 months from the date consent is given, or until consent is withdrawn
    — whichever occurs first.
  </p>

  <p>
    <strong>h)</strong> Application documents, particularly résumés, submitted
    outside a response to a specific job advertisement or during periods when no
    active recruitment processes are underway, are not processed and are deleted
    without undue delay.
  </p>

  <p>
    <strong>9.2. Client data</strong>
  </p>

  <p>
    <strong>a)</strong> Personal data processed for the purpose of taking steps
    prior to entering into a contract or performing a contract, based on Article
    6(1)(b) GDPR, is retained for the period required by law, particularly with
    regard to accounting and tax obligations — generally 7 years under Estonian
    law, unless a longer period applies.
  </p>

  <p>
    <strong>b)</strong> Data processed for ongoing communication related to
    contract conclusion, performance, or settlement, based on Article 6(1)(f)
    GDPR, is retained for the duration of the cooperation, unless further
    processing is necessary to achieve another lawful purpose.
  </p>

  <p>
    <strong>c)</strong> Data processed for reporting, accounting, and taxation
    purposes, based on Article 6(1)(c) GDPR, is retained for the period required
    under Estonian law — generally 7 years.
  </p>

  <p>
    <strong>d)</strong> Data processed to establish, exercise, or defend legal
    claims arising from contract performance, based on Article 6(1)(f) GDPR, is
    retained until the expiry of claims — generally 3 years, unless the law
    provides for a longer period.
  </p>

  <p>
    <strong>9.3. Other categories of data</strong>
  </p>

  <p>
    <strong>a)</strong> Data of potential clients and contractors is retained for
    the period necessary to fulfill the purpose of contact or cooperation, but
    not longer than 3 years from the date of last communication, unless further
    retention is needed to defend legal claims.
  </p>

  <p>
    <strong>b)</strong> Data of suppliers, service providers, and business
    partners is retained for the duration of the cooperation and thereafter in
    accordance with limitation periods for claims and accounting/tax obligations.
  </p>

  <p>
    <strong>c)</strong> Data of individuals contacting the Controller is retained
    for the period necessary to respond and close the matter, and subsequently —
    if justified — until the expiry of claims, not longer than 3 years.
  </p>

  <p>
    <strong>d)</strong> Data of representatives of public authorities and
    institutions is retained for the period necessary to fulfill a legal
    obligation or conclude an administrative matter, and thereafter for the
    statutory archiving period, not exceeding 10 years.
  </p>

  <p>
    <strong>9.4. Technical data and form security</strong>
    <br />
    Technical data processed as part of the protection of contact forms
    (Cloudflare Turnstile), including IP address and technical information, is
    processed automatically and on a short-term basis solely for risk assessment,
    abuse prevention, and ensuring the security of services.
  </p>

  <p>
    This data is not retained by the Controller and is not used for marketing or
    profiling purposes. Retention depends on the settings and security
    procedures of the service provider and may include short-term technical logs
    stored only for the time necessary to ensure system security or to analyze
    potential incidents.
  </p>

  <p>
    If no security incidents occur, such technical data is not stored long-term.
  </p>

  <p>
    <strong>9.5. Final provisions</strong>
    <br />
    Once the above retention periods expire, personal data is permanently
    deleted, anonymized, or archived in a manner that prevents identification of
    the individual, in accordance with § 17(4) of the Estonian Personal Data
    Protection Act.
  </p>

  <p>
    The Controller regularly reviews stored data and the necessity of its further
    processing, ensuring that personal data is not retained longer than required
    for the purposes for which it was collected.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-10">10. Voluntary Provision of Personal Data</h2>

  <p>
    <strong>10.1.</strong> As a rule, the provision of personal data is
    voluntary. In certain cases, however, the provision of specific data is
    necessary in order to perform particular actions, provide services, conduct a
    recruitment process, or enter into or perform a contract with the Controller.
    Failure to provide the required data may result in the inability to carry out
    certain activities or achieve a specific purpose.
  </p>

  <p>
    <strong>10.2.</strong> In particular:
  </p>

  <ul>
    <li>
      participation in a recruitment process requires the provision of contact
      details and the submission of application documents;
    </li>
    <li>
      submitting inquiries via a contact form or by email requires the provision
      of data enabling the identification of the sender;
    </li>
    <li>
      entering into, performing, or settling a contract requires the provision of
      data necessary to fulfil contractual, tax, or accounting obligations;
    </li>
    <li>
      the use of certain website functionalities may require the processing of
      basic technical data necessary for the security and proper operation of the
      systems.
    </li>
  </ul>

  <p>
    <strong>10.3.</strong> The Controller always informs individuals which data
    is required for the specific purpose and which data is optional. The scope of
    processed data is limited to what is necessary, in accordance with the data
    minimization principle set out in Article 5(1)(c) GDPR.
  </p>

  <p>
    <strong>10.4.</strong> In cases where data is processed on the basis of
    consent, providing consent is entirely voluntary. Consent may be withdrawn at
    any time without affecting the lawfulness of processing carried out prior to
    withdrawal, in accordance with Article 7(3) GDPR.
  </p>

  <p>
    <strong>10.5.</strong> The Controller takes measures to ensure the
    transparency of personal data processing and to provide individuals with
    genuine control over the scope, purpose, and duration of the processing of
    the information they provide.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-11">11. Data Storage Locations and Security Measures</h2>

  <p>
    <strong>11.1.</strong> Personal data processed by the Controller is stored
    exclusively in electronic form, on devices and systems under the Controller’s
    sole control, or with external service providers operating within the
    European Economic Area (EEA) who ensure compliance with Regulation (EU)
    2016/679 (GDPR) and the Estonian Personal Data Protection Act
    (Isikuandmete kaitse seadus).
  </p>

  <p>
    <strong>
      11.2. Physical and virtual locations of data processing and storage include,
      in particular:
    </strong>
  </p>

  <ul>
    <li>
      an encrypted laptop owned by the Controller, secured with a password,
      full-disk encryption, and multi-factor authentication;
    </li>
    <li>
      an encrypted external storage device used for periodic backups, kept in a
      secure location and separated from the primary system;
    </li>
    <li>
      the infrastructure of the hosting and email provider Zone Media OÜ
      (zone.ee), located at Lõõtsa 5, 11415 Tallinn, Estonia, with servers
      located within the territory of the European Union and security measures
      aligned with Article 32 GDPR and relevant provisions of the Isikuandmete
      kaitse seadus;
    </li>
    <li>
      servers and systems supporting the Controller’s operations, including
      services related to electronic document signing and administrative
      processes, located primarily within the EEA and operated in accordance with
      documented GDPR compliance; in exceptional cases where data is processed
      outside the EEA, such processing occurs solely under mechanisms permitted
      by Article 46 GDPR, in particular the Standard Contractual Clauses.
    </li>
  </ul>

  <p>
    The Controller does not maintain paper documentation — all personal data is
    processed exclusively in digital form.
  </p>

  <p>
    <strong>11.3.</strong> The Controller implements appropriate technical and
    organizational measures to ensure a level of security appropriate to the
    risks associated with processing, in accordance with Article 32 GDPR and the
    Estonian Personal Data Protection Act. These measures include, in particular:
  </p>

  <ul>
    <li>encrypted data transmission (SSL/TLS);</li>
    <li>encryption of devices and storage media;</li>
    <li>restricted access to data, limited to the Controller;</li>
    <li>use of strong, unique passwords and multi-factor authentication;</li>
    <li>regular updates of operating systems, software, and security tools;</li>
    <li>creation and secure storage of backups;</li>
    <li>use of firewalls and security software;</li>
    <li>
      automatic device locking and physical protection against unauthorized
      access;
    </li>
    <li>no use of private, unsecured devices for data processing;</li>
    <li>
      cooperation exclusively with service providers who ensure GDPR compliance;
    </li>
    <li>
      maintaining documentation related to data processing agreements and
      incident logging;
    </li>
    <li>
      implementation of procedures for responding to personal data breaches, in
      accordance with Articles 33–34 GDPR;
    </li>
    <li>
      regular reviews of security measures and permissions, in line with the
      principles of privacy by design and privacy by default (Article 25 GDPR).
    </li>
  </ul>
</section>

<section className="hansa-legal-section">
  <h2 id="section-12">
    12. Your Rights Related to the Processing of Personal Data
  </h2>

  <p>
    Individuals whose personal data is processed by the Controller are entitled
    to the rights set out in Regulation (EU) 2016/679 (GDPR) and the Estonian
    Personal Data Protection Act (Isikuandmete kaitse seadus). The Controller
    ensures full respect for all rights of data subjects and facilitates their
    exercise in accordance with applicable law.
  </p>

  <p>
    In particular, you have the right to obtain clear and transparent information
    regarding the processing of your data, and the rights of access,
    rectification, restriction of processing, erasure, portability, objection,
    and withdrawal of consent — to the extent and under the conditions laid down
    in the GDPR.
  </p>

  <p>
    <strong>12.1. Right of access to data and copies</strong>
    <br />
    You have the right to obtain confirmation as to whether the Controller
    processes your personal data and, if so, the right to access that data and
    receive a copy, in accordance with Article 15 GDPR. If the request is
    submitted electronically, the information will be provided in a commonly used
    electronic format.
  </p>

  <p>
    <strong>12.2. Right to rectification</strong>
    <br />
    You have the right to request the immediate rectification of inaccurate
    personal data or the completion of incomplete data, in accordance with
    Article 16 GDPR. The Controller will make corrections after verifying the
    legitimacy of the request.
  </p>

  <p>
    <strong>12.3. Right to restrict processing</strong>
    <br />
    You have the right to request restriction of processing in particular:
  </p>

  <ul>
    <li>
      when you contest the accuracy of the data — for a period enabling the
      Controller to verify it;
    </li>
    <li>
      when the processing is unlawful and you oppose the deletion of the data;
    </li>
    <li>
      when the Controller no longer needs the data for its purposes, but you need
      it to establish, exercise, or defend legal claims;
    </li>
    <li>
      when you have objected to the processing — pending verification of whether
      the Controller’s legitimate grounds override your interests.
    </li>
  </ul>

  <p>
    <strong>12.4. Right to erasure</strong>
    <br />
    You have the right to request the deletion of personal data in the cases set
    out in Article 17 GDPR, particularly when the data is no longer necessary for
    the purposes for which it was collected, when you withdraw consent, or when
    the processing was unlawful.
  </p>

  <p>
    This right does not apply if further processing is necessary for the
    Controller to comply with legal obligations or to establish, exercise, or
    defend legal claims, in accordance with Article 17(3) GDPR.
  </p>

  <p>
    <strong>12.5. Right to data portability</strong>
    <br />
    You have the right to receive the personal data you have provided to the
    Controller in a structured, commonly used, machine-readable format and to
    transmit it to another controller, where the processing is based on consent
    or a contract and is carried out by automated means, in accordance with
    Article 20 GDPR.
  </p>

  <p>
    <strong>12.6. Right to object</strong>
    <br />
    You have the right to object at any time to the processing of your personal
    data where it is based on the Controller’s legitimate interest (Article
    6(1)(f) GDPR).
  </p>

  <p>
    Following an objection, the Controller will cease processing the data unless
    it demonstrates compelling legitimate grounds for the processing that
    override your interests, rights, and freedoms, or unless processing is
    necessary to establish, exercise, or defend legal claims.
  </p>

  <p>
    This right does not apply where data is processed to fulfill legal
    obligations imposed on the Controller.
  </p>

  <p>
    <strong>12.7. Right to withdraw consent</strong>
    <br />
    Where processing is based on consent, you have the right to withdraw it at
    any time. Withdrawal of consent does not affect the lawfulness of processing
    carried out prior to its withdrawal, in accordance with Article 7(3) GDPR.
  </p>

  <p>
    <strong>12.8. Right to lodge a complaint with a supervisory authority</strong>
    <br />
    If you believe that the processing of your personal data violates the GDPR or
    the Estonian Personal Data Protection Act, you have the right to lodge a
    complaint with the competent supervisory authority, in particular:
  </p>

  <p>
    <strong>
      Andmekaitse Inspektsioon (AKI) – the Estonian Data Protection Inspectorate.
    </strong>
  </p>

  <p>
    If you reside or work in another EU Member State, you may also lodge a
    complaint with the supervisory authority competent for that Member State, in
    accordance with Article 77 GDPR.
  </p>

  <p>
    <strong>12.9. Right not to be subject to automated decision-making</strong>
    <br />
    You have the right not to be subject to a decision based solely on automated
    processing, including profiling, which produces legal effects concerning you
    or similarly significantly affects you, in accordance with Article 22 GDPR.
  </p>

  <p>
    The Controller does not engage in automated decision-making or profiling. All
    decisions concerning candidates, clients, and business partners are made by
    authorized personnel.
  </p>

  <p>
    <strong>12.10. Exercising your rights and contacting the Controller</strong>
    <br />
    To exercise the rights set out in this Privacy Policy, you may contact the
    Controller, in particular via electronic means:
  </p>

  <p>
    Email: <strong>office@hansacareers.ee</strong>
  </p>

  <p>
    The Controller operates fully digitally and recommends electronic
    communication as the primary and most secure method for matters involving the
    processing of personal data. Electronic communication ensures faster handling
    of requests and reduces the risk of unauthorized access to data.
  </p>

  <p>
    Written correspondence may be sent to the Controller’s registered address:
  </p>

  <p>
    <strong>
      Handke Holding OÜ, Harju maakond, Kesklinna linnaosa, Sakala tn 7-2,
      10141 Tallinn, Estonia
    </strong>
  </p>

  <p>
    However, the Controller does not recommend sending documents containing
    personal data — particularly application documents, copies of identity
    documents, or sensitive information — by traditional mail. Such
    correspondence may involve risks of unauthorized disclosure during postal
    handling and remains outside the Controller’s full control.
  </p>

  <p>
    The Controller responds to requests regarding the exercise of rights without
    undue delay, and no later than one month from receipt, in accordance with
    Article 12(3) GDPR. In particularly complex cases, this period may be
    extended by a further two months, in which case the data subject will be
    informed.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-13">13. Personal Data Breaches</h2>

  <p>
    In the event of a personal data breach — understood as the accidental or
    unlawful destruction, loss, alteration, unauthorized disclosure of, or access
    to personal data — the Controller promptly undertakes actions aimed at
    mitigating the effects of the incident and preventing its recurrence.
  </p>

  <p>
    The Controller assesses each incident individually, evaluating the nature and
    scope of the breach as well as the potential risks to the rights and freedoms
    of the affected individuals. Appropriate technical and organizational
    measures are then implemented to eliminate the cause of the breach and reduce
    its impact. All incidents related to data security are documented in
    accordance with the accountability principle set out in Article 5(2) of
    Regulation (EU) 2016/679 (GDPR) and § 25(3) of the Estonian Personal Data
    Protection Act (Isikuandmete kaitse seadus).
  </p>

  <p>
    If a personal data breach is likely to result in a risk to the rights or
    freedoms of natural persons, the Controller reports the breach to the
    competent supervisory authority —{" "}
    <strong>
      Andmekaitse Inspektsioon (AKI), Tatari 39, 10134 Tallinn, Estonia
    </strong>{" "}
    — no later than 72 hours after becoming aware of it, in accordance with
    Article 33 GDPR and § 25 of the Estonian Personal Data Protection Act, unless
    the breach is unlikely to result in such a risk.
  </p>

  <p>
    Where a personal data breach is likely to result in a high risk to the rights
    or freedoms of natural persons, the Controller will, without undue delay,
    inform the affected individuals about the nature of the breach, its potential
    consequences, and the measures taken or proposed to mitigate its adverse
    effects, in accordance with Article 34 GDPR.
  </p>

  <p>
    The Controller maintains an internal procedure for responding to personal
    data breaches, covering incident identification, risk assessment, remedial
    actions, and notification obligations. The effectiveness of this procedure is
    regularly reviewed to ensure compliance with the GDPR and Estonian law and to
    maintain a high level of security in the processing of personal data.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-14">14. Automated Decision-Making and Profiling</h2>

  <p>
    The Controller does not engage in automated decision-making processes,
    including profiling, that would produce legal effects concerning an
    individual or similarly significantly affect them, within the meaning of
    Article 22 of Regulation (EU) 2016/679 (GDPR) and § 23 of the Estonian
    Personal Data Protection Act.
  </p>

  <p>
    All decisions relating to candidates, clients, and business partners are made
    by a human being, based on an individual assessment of the information,
    documents, or correspondence provided. No decisions are made solely by
    automated means.
  </p>

  <p>
    The Controller does not employ profiling that involves the automated
    assessment of personal characteristics, qualifications, behavior, preferences,
    or professional situation for the purpose of making decisions that would
    produce legal effects or significantly affect the individual.
  </p>

  <p>
    As part of routine administrative processes, the Controller may use technical
    tools for auxiliary purposes, such as email filtering, organizing
    submissions, or classifying incomplete forms. However, these tools do not
    make independent decisions about individuals and do not replace human
    judgment.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-15">15. Supervisory Authority</h2>

  <p>
    If you have concerns regarding the manner in which your personal data is
    processed, or if you believe that your rights under Regulation (EU) 2016/679
    (GDPR) have been violated, you have the right to lodge a complaint with a
    competent supervisory authority, regardless of your place of residence, place
    of work, or the place where the alleged infringement occurred, in accordance
    with Article 77 GDPR and § 21 of the Estonian Personal Data Protection Act
    (Isikuandmete kaitse seadus).
  </p>

  <p>
    For the activities carried out by the Controller, the competent supervisory
    authority in the Republic of Estonia is:
  </p>

  <p>
    <strong>
      Andmekaitse Inspektsioon (AKI), Tatari 39, 10134 Tallinn, Estonia
    </strong>
    <br />
    tel.: +372 627 4135
    <br />
    email: <a href="mailto:info@aki.ee">info@aki.ee</a>
    <br />
    website:{" "}
    <a href="https://www.aki.ee" target="_blank" rel="noreferrer">
      https://www.aki.ee
    </a>
  </p>

  <p>
    If you reside or work in another European Union Member State, you may also
    lodge a complaint with the supervisory authority competent for your place of
    residence or employment, in accordance with Article 77 GDPR.
  </p>

  <p>
    An up-to-date list of data protection authorities in EU Member States is
    available on the website of the European Data Protection Board (EDPB):{" "}
    <a href="https://edpb.europa.eu" target="_blank" rel="noreferrer">
      https://edpb.europa.eu
    </a>
  </p>

  <p>
    The Controller nevertheless encourages you to contact them directly
    beforehand regarding any matters related to data processing, preferably via
    email at:{" "}
    <a href="mailto:office@hansacareers.ee">office@hansacareers.ee</a>.
  </p>

  <p>
    If necessary, you may also contact the Administrator in writing by sending
    correspondence to the company’s registered address. Please note that
    traditional postal communication may be less secure for personal data, which
    is why electronic contact remains the preferred method.
  </p>

  <p>
    The Controller will make every effort to address each matter transparently,
    diligently, and in full compliance with the GDPR, without undue delay.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-16">16. Jurisdiction and Applicable Law</h2>

  <p>
    This Privacy Policy is governed by the laws of the Republic of Estonia and
    is interpreted in accordance with Regulation (EU) 2016/679 (GDPR) and the
    Estonian Personal Data Protection Act (Isikuandmete kaitse seadus).
  </p>

  <p>
    To the extent permitted by applicable law, any disputes or claims related to
    the processing of personal data, the use of the Controller’s website, or the
    services provided by the Controller shall fall under the jurisdiction of the
    courts of the Republic of Estonia, competent for the Controller’s registered
    office.
  </p>

  <p>
    The provisions of this section do not affect or limit the rights of
    individuals arising from mandatory provisions of European Union law, in
    particular consumer protection rules and the rights of data subjects in the
    EU or the European Economic Area, including those linked to their habitual
    residence or place of work.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-17">17. Updates to the Privacy Policy</h2>

  <p>
    The Controller may periodically update this Privacy Policy in order to ensure
    its compliance with applicable laws and regulations — in particular
    Regulation (EU) 2016/679 (GDPR) and the Estonian Personal Data Protection Act
    (Isikuandmete kaitse seadus) — as well as in connection with changes to the
    scope of its business activities, applied technologies, or personal data
    processing procedures.
  </p>

  <p>
    The version of the Privacy Policy published on the Controller’s website,
    marked with the date of its most recent update, shall always apply. Each new
    version replaces all previous versions of the document as of the date of its
    publication.
  </p>

  <p>
    The Controller recommends that data subjects regularly review the Privacy
    Policy in order to stay informed about the current rules governing the
    processing of personal data and the rights available to them.
  </p>

  <p>
    In the event of introducing changes that are significant from the perspective
    of data subjects — in particular changes affecting the purposes or legal
    bases of processing, or modifications to the categories of data recipients —
    the Controller will inform data subjects in a clear and transparent manner.
    Such information may be provided through a prominent notice published on the
    Controller’s website or, where feasible and where the Controller holds a
    current email address of the data subject, by email.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-18">18. Marketing Activities and Contact with the Controller</h2>

  <p>
    The Controller informs that the website does not use cookies or other
    tracking technologies and does not carry out automated collection of personal
    data for marketing or analytical purposes. Use of the website does not
    involve profiling or automated processing of users’ personal data in any
    form.
  </p>

  <p>
    Marketing activities carried out by the Controller are limited exclusively to
    the promotion of its own recruitment services, in particular through the
    publication of information and job offers on social media platforms and by
    posting recruitment advertisements online. The Controller does not use
    website users’ data or their behavior to create marketing profiles.
  </p>

  <p>
    As part of direct marketing activities, the Controller may contact
    representatives of companies in B2B relationships — for example by using
    their first name, surname, job title or business email address — solely for
    the purpose of presenting its recruitment service offerings. The legal basis
    for such processing is the Controller’s legitimate interest consisting in
    conducting business activities and promoting its own services.
  </p>

  <p>
    Any person to whom the Controller directs marketing communications has the
    right to object at any time to the processing of their personal data for this
    purpose. An objection may be submitted by sending an email to:{" "}
    <a href="mailto:office@hansacareers.ee">office@hansacareers.ee</a>. Upon
    receipt of such an objection, the data will no longer be used for direct
    marketing purposes.
  </p>

  <p>
    The Controller also enables users to initiate contact independently — either
    via the contact form or by email. Data provided in this manner, including
    first name, last name, email address or the content of the message, are used
    exclusively for the purpose of responding, conducting correspondence or
    handling the inquiry, on the basis of the Controller’s legitimate interest.
  </p>

  <p>
    Personal data processed in connection with marketing and contact activities
    are not transferred outside the European Economic Area (EEA), and the
    processing itself is carried out in accordance with the principles of data
    minimisation, transparency and purpose limitation set out in Article 5(1)
    GDPR.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-19">19. Cookies and Similar Technologies</h2>

  <p>
    The Controller’s website does not use cookies or any other tracking
    technologies typically employed for marketing, advertising, or analytics
    purposes. The Controller does not collect statistics on user behavior, does
    not use analytics tools, and does not store information about how users
    navigate the website. Use of the website does not involve profiling or
    monitoring of users.
  </p>

  <p>
    The only external technology used on the website is Cloudflare Turnstile,
    implemented solely to protect the contact forms against spam, automated
    submissions, and abuse. This solution does not use marketing cookies, does
    not track users, and is not used to analyze user behavior.
  </p>

  <p>
    As part of the operation of Cloudflare Turnstile, only basic technical data —
    such as the user’s IP address or browser signals — may be processed. Such
    processing occurs exclusively for the purpose of ensuring the security of the
    service and the integrity of the forms, based on the Controller’s legitimate
    interest.
  </p>

  <p>
    Because the website does not use cookies requiring user consent, there is no
    need to display a cookie banner or obtain any form of consent to use the
    website, in accordance with the ePrivacy Directive and the Estonian
    Electronic Communications Act (Elektroonilise side seadus).
  </p>

  <p>
    If, in the future, the Controller implements cookies or similar technologies
    that require user consent — for example to improve functionality or enable
    anonymous statistics — users will be informed clearly and in advance, in a
    manner compliant with applicable law. In such a case, consent will be
    obtained in accordance with ePrivacy rules, the GDPR, and Estonian
    telecommunications law.
  </p>

  <p>
    Users will be able to manage their cookie preferences at any time through
    their browser settings or through a cookie management panel, should one be
    implemented in the future.
  </p>
</section>

<section className="hansa-legal-section">
  <h2 id="section-20">20. Server Logs</h2>

  <p>
    Using the website involves sending requests to the server on which it is
    hosted. Each network request is automatically recorded in so-called server
    logs and may include the following technical data:
  </p>

  <ul>
    <li>the user’s device IP address;</li>
    <li>the date and time of the request;</li>
    <li>information about the browser and operating system used;</li>
    <li>the address of the visited subpage;</li>
    <li>any technical error messages.</li>
  </ul>

  <p>
    This data is technical in nature and is not used to identify users directly
    or to create user profiles. It is not processed for marketing or analytics
    purposes.
  </p>

  <p>
    Server logs are processed in particular for the purpose of:
  </p>

  <ul>
    <li>ensuring the security and stability of the website;</li>
    <li>diagnosing technical system or network errors;</li>
    <li>detecting abuse, intrusion attempts, and security incidents.</li>
  </ul>

  <p>
    The legal basis for processing the technical data contained in server logs is
    Article 6(1)(f) GDPR — the Controller’s legitimate interest in ensuring the
    security of IT systems, in accordance with Article 32 GDPR and § 24 of the
    Estonian Personal Data Protection Act (Isikuandmete kaitse seadus).
  </p>

  <p>
    Server logs are retained for no longer than 90 days, unless further retention
    is necessary due to a security incident, abuse, or the need to defend against
    legal claims. After this period, the data is automatically deleted or
    anonymized.
  </p>
</section>



          </div>
        </div>
      </section>

      <HansaFooter />
    </main>
  );
}

export default HansaPrivacyPolicyPage;