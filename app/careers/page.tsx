export default function Index() {
  return (
    <>
      <section className="section career-section">
        <div className="container">
          <h2
            className="wow text-align-center sub-page-mr wow fadeInUp"
            data-wow-delay="0.2s"
            data-cursor="-opaque"
          >
            Nice to meet you! We’re here to keep your digital world safe
            <br />{" "}
            <span className="gradient-text">
              {" "}
              so you can focus on what matters most
            </span>
          </h2>
          <p className="text-align-center mb-40 wow fadeInUp">
            Cybersecurity isn’t just about hackers and defenses; it’s about
            people and how security shapes their daily lives. Protecting the
            world is an ambitious yet vital goal that unites us. Our mission
            drives the way we design solutions, serve customers, and help
            organizations and communities reach their potential. To make this
            mission a reality, we hire world-class talent—people who share our
            values and ambitions, not just those with a background in security
            or a college degree. This “new collar” approach allows us to invest
            in people and training, equipping them with the skills needed for
            the workforce of tomorrow.
          </p>

          <div className="career-layout">
            <div className="layout-container">
              <div className="card card-top-left tilt-box">
                <div className="card-img-placeholder" title=""></div>
              </div>
              <div className="card card-bottom-left tilt-box">
                <div className="card-img-placeholder" title=""></div>
              </div>
              <div className="card card-main tilt-box">
                <div className="card-img-placeholder" title=""></div>
              </div>
              <div className="card card-top-right tilt-box">
                <div className="card-img-placeholder" title=""></div>
              </div>
              <div className="card card-bottom-right tilt-box">
                <div className="card-img-placeholder" title=""></div>
              </div>

              <div className="square sq-tl-1"></div>
              <div className="square sq-tl-2 sq-lg"></div>
              <div className="square sq-tl-3 sq-lg"></div>

              <div className="square sq-bl-1"></div>

              <div className="square sq-tr-1"></div>

              <div className="square sq-br-1"></div>
              <div className="square sq-br-2 sq-lg"></div>
              <div className="square sq-br-3"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section data-section">
        <div className="container">
          <div className="why-choose-counter-list">
            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="icon-box">
                <img src="./images/learning.png" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">Learning</span>
                </h3>
                <p>Learn exciting career enhancement opportunity</p>
              </div>
            </div>

            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="icon-box">
                <img src="./images/flexibility.png" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">Flexibility</span>
                </h3>
                <p>
                  Flexible work hours, Work as per project schedules & enjoy
                </p>
              </div>
            </div>

            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="icon-box">
                <img src="./images/icon-why-choose-counter-3.svg" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">Be Recognised</span>
                </h3>
                <p>Get Recognition with your value added efforts of work</p>
              </div>
            </div>

            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="icon-box">
                <img src="./images/retreat.png" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">Fun</span>
                </h3>
                <p>Board games, team outings, company parties, and more</p>
              </div>
            </div>

            <div
              className="why-choose-counter-item wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="icon-box">
                <img src="./images/revenue.png" alt="" />
              </div>
              <div className="why-choose-counter-content">
                <h3>
                  <span className="counter">Exposure</span>
                </h3>
                <p>Gain Global Exposure with our worldwide business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section jobs-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="wow fadeInLeft top-text">We are Hiring</h3>
              <h2
                className="necessitatibus dolor magni nesciunt facere, ab illumt"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Discover Our Latest
                <br />{" "}
                <span className="gradient-text">Exciting Job Openings</span>
              </h2>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <p className="wow fadeInRight">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                exercitationem blanditiis asperiores hic dolor et ratione ipsum
                modi dolorum fugit! Voluptatum quos odit necessitatibus dolor
                magni nesciunt facere, ab illum necessitatibus dolor magni
                nesciunt facere, ab illum.
              </p>
            </div>
          </div>

          <form className="search-bar-container">
            <div className="field-group">
              <i className="fas fa-briefcase"></i>
              <div className="select-wrapper">
                <label className="visually-hidden">Industry</label>
                <select
                  id="industry-select"
                  className="search-select"
                  aria-label="Industry"
                >
                  <option value="" disabled selected hidden>
                    Industry
                  </option>
                  <option value="tech">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
                <i className="fas fa-angle-down dropdown-arrow"></i>
              </div>
            </div>

            <div className="field-group">
              <i className="fas fa-map-marker-alt"></i>
              <div className="select-wrapper">
                <label className="visually-hidden">Location</label>
                <select
                  id="location-select"
                  className="search-select"
                  aria-label="Location"
                >
                  <option value="" disabled selected hidden>
                    Location
                  </option>
                  <option value="ny">New York</option>
                  <option value="sf">San Francisco</option>
                  <option value="london">London</option>
                </select>
                <i className="fas fa-angle-down dropdown-arrow"></i>
              </div>
            </div>

            <div className="field-group">
              <i className="fas fa-th-large"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Keyword"
              />
            </div>

            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
              Search
            </button>
          </form>

          <div className="row">
            <div className="col-lg-6">
              <div className="job-card">
                <h3>Cyber Security Consultant</h3>

                <div className="description">
                  <p>
                    Location: <span>Bhubaneswar</span>
                  </p>
                  <p>
                    Working Day: <span>5 Day</span>
                  </p>
                  <p>
                    Description:{" "}
                    <span>
                      We are seeking a creative, talented and knowledgeable
                      designer capable of producing stunning, user-centric, web
                      &amp; mobile interfaces.
                    </span>
                  </p>
                </div>
                <div className="job-details">
                  <div>
                    <i className="fa fa-briefcase"></i> 5 - 6 yrs
                  </div>
                  <div>
                    <i className="fa fa-map-marker-alt"></i> Bhubaneswar, Odisha
                  </div>
                </div>
                <div className="job-footer">
                  <button
                    className="apply-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#applyJobModal"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="job-card">
                <h3>Research Executive</h3>

                <div className="description">
                  <p>
                    Location: <span>Bhubaneswar</span>
                  </p>
                  <p>
                    Working Day: <span>5 Day</span>
                  </p>
                  <p>
                    Description:{" "}
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores, tempore animi. Dignissimos eum numquam iste.
                    </span>
                  </p>
                </div>
                <div className="job-details">
                  <div>
                    <i className="fa fa-briefcase"></i> 5 - 6 yrs
                  </div>
                  <div>
                    <i className="fa fa-map-marker-alt"></i> Bhubaneswar, Odisha
                  </div>
                </div>
                <div className="job-footer">
                  <button
                    className="apply-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#applyJobModal"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
