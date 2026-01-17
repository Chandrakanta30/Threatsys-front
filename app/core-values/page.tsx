import Image from "next/image";

export default function Index() {
  return (
    <>
      <section className="section info-section mission-sec">
        <div className="container">
          <div className="row sub-page-mr">
            <div className="col-md-6">
              <h2
                className="wow fadeInUp sub-page-mr"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Our Core Mission, Vision &<br />
                <span className="gradient-text">Values Statement</span>
              </h2>
            </div>
            <div className="col-md-6">
              <p>
                We strengthen connections with clients, partners, and
                communities to create a safer digital world—together redefining
                the future of cybersecurity.
              </p>
            </div>
          </div>

          <div className="flex-div">
            <div className="text-and-stats-block wow fadeInLeft">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Our Mission
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Our Vision
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Our Values
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <p className="description">
                    To be the global leader in 360 Degree Cyber Security
                    Services. Building on our technologies, competencies and
                    customer interests, and creating value for our stakeholders
                    and customers. We’ll achieve this by focusing on the
                    intersection of our client’s emerging needs and the
                    acceleration of business and technological change. We reduce
                    the vulnerability of the digital environment implementing
                    combined cyber-security and cyber-defense systems that
                    neutralize advanced threats, thereby contributing to the
                    improvement of security for all.
                  </p>
                </div>

                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p className="description">
                    Threatsys Technologies Pvt. Ltd. will be the first choice
                    Cyber Security solution partner in the technology sector
                    providing Advanced Cyber Security & Risk Management services
                    to businesses throughout the region.
                  </p>
                  <p className="description">
                    Threatsys will become an integral part of our client’s
                    success, collaborating with them to achieve their strategic
                    objectives whilst creating long lasting business value
                    through the delivery and management of their technology with
                    full proof security.
                  </p>
                </div>

                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <p className="description">
                    Our values are the guiding principles upon which Threatsys
                    was founded and how we strive to conduct our business on a
                    daily basis.
                  </p>
                  <p className="description">
                    As a company and as individuals we value above all else
                    honesty, integrity, unselfishness, professionalism and
                    mutual respect. For our staff, we offer a rewarding and
                    challenging environment where personal development can
                    flourish. We hold ourselves accountable to our clients,
                    staff and partners by honouring our commitments, providing
                    results and continually striving to provide the highest
                    quality security services.
                  </p>
                </div>
              </div>

              <img
                src="./images/mission.png"
                alt="Mission"
                className="mission-image"
              />
            </div>

            <div className="image-and-floating-stats">
              <div className="floating-stats-boxes">
                <div className="stat-box white-box">
                  <span className="number">
                    615<span className="plus">+</span>
                  </span>
                  <p className="label">
                    PROJECT <br />
                    COMPLETED
                  </p>
                </div>
                <div className="stat-box blue-box">
                  <span className="number">
                    236<span className="plus">+</span>
                  </span>
                  <p className="label">
                    WINNING <br />
                    AWARDS
                  </p>
                </div>
              </div>

              <div className="worker-image-placeholder tilt-box mission-img wow fadeInRight">
                <img src="./images/mission-img.jpg" alt="Worker" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section culture-sec">
        <div className="container">
          <h2
            className="wow text-align-center sub-page-mr text-white"
            data-wow-delay="0.2s"
            data-cursor="-opaque"
          >
            Built on Trust. Driven by
            <span className="gradient-yl">Expertise and Innovation</span>
          </h2>
          <p className="text-align-center mb-40 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem
            voluptate exercitationem magni. Tempora, quisquam repellendus.
            Maiores, officia pariatur eligendi quis ex doloribus cumque libero,
            ea impedit, voluptas accusamus velit?
          </p>
        </div>
      </section>

      <section className="our-culture-grid">
        <div className="container">
          <div className="flex-div">
            <div className="cc-box">
              <h4>Our Culture</h4>
              <ul className="services">
                <li>
                  We see ourselves as a trusted offensive & defensive security
                  partner, allowing us to help throughout the entire security
                  journey. Our focus is to strengthen security resilience by
                  minimizing the occurrence of attacks, threats, and risks, so
                  that you drive change, innovate, and accelerate growth, the
                  way you want.
                </li>
                <li>
                  We are not rock stars, ninjas or any other disingenuous buzz
                  term. We are creative Cyber Security professionals with
                  versatile 360-degree problem-solving abilities.
                </li>
                <li>
                  Our technical ability is backed up through formal accredited
                  certifications, well-defined easy-to-understand reports, 24×7
                  support, and project status tracking with specific resource
                  engagements.
                </li>
              </ul>
              <img
                src="/images/abstact-BG.png"
                alt="abstract"
                className="abstract-BG"
              />
            </div>

            <div className="cc-box">
              <h4>Our Commitment</h4>
              <ul className="services">
                <li>
                  We’re the trusted partner that takes a proactive approach to
                  your security needs. Threatsys knows more about cyber security
                  than anyone. In a complex world, we are inspired by helping to
                  create peace of mind, a sense of security, and a feeling of
                  control over one’s environment.
                </li>
                <li>
                  Our industry-recognized threat researchers, malware analysts,
                  intelligence analysts, and investigators live on the front
                  lines of cyber conflict every day.
                </li>
                <li>
                  We’re the built-in IT Security support staff that’s always
                  there when you need as per the project engagements. We have
                  the experience and capacity to serve the needs of both local
                  and global enterprises with our 360-degree cyber security
                  solutions.
                </li>
              </ul>
              <img
                src="/images/abstract-BG.png"
                alt="abstract"
                className="abstract-BG"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
