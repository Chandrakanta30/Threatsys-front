import React from "react";

const OurTeam = () => {
  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Our Team</h2>

            <ul className="list-style">
              <li>
                <a href="./index.html">Home</a>
              </li>

              <li>
                <a href="./about-us.html">About Us</a>
              </li>

              <li className="active">Our Team</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section our-team-section">
        <div className="container">
          <h2
            className="subPage-hading text-align-center"
            data-splitting="true"
          >
            Our Visionary <span style={{ color: "#2267cc" }}>Leaders</span>
          </h2>

          <p className="sub-head wow fadeInUp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            doloremque veniam quaerat dicta, distinctio omnis fuga quos hic
            sequi eos ducimus id, asperiores, rem excepturi sint eaque obcaecati
            maxime impedit.
          </p>

          <div className="row">
            {/* Member 1 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team-card wow fadeInUp">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#memberdetails"
                  className="hover-arrow"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                <div className="team-outer">
                  <img src="/images/team-img.jpg" alt="Team Member" />
                </div>

                <div className="team-info">
                  <h3>Alex Edwards</h3>
                  <p>Fullstack Developer</p>
                </div>
              </div>
            </div>

            {/* Member 2 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team-card wow fadeInUp">
                <div className="hover-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>

                <div className="team-outer">
                  <img src="/images/team-img.jpg" alt="Team Member" />
                </div>

                <div className="team-info">
                  <h3>Wendy Chandler</h3>
                  <p>Java Developer</p>
                </div>
              </div>
            </div>

            {/* Member 3 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team-card wow fadeInUp">
                <div className="hover-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>

                <div className="team-outer">
                  <img src="/images/team-img.jpg" alt="Team Member" />
                </div>

                <div className="team-info">
                  <h3>James Grant</h3>
                  <p>Fullstack Developer</p>
                </div>
              </div>
            </div>

            {/* Member 4 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team-card wow fadeInUp">
                <div className="hover-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>

                <div className="team-outer">
                  <img src="/images/team-img.jpg" alt="Team Member" />
                </div>

                <div className="team-info">
                  <h3>James Grant</h3>
                  <p>Fullstack Developer</p>
                </div>
              </div>
            </div>

            {/* Member 5 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team-card wow fadeInUp">
                <div className="hover-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>

                <div className="team-outer">
                  <img src="/images/team-img.jpg" alt="Team Member" />
                </div>

                <div className="team-info">
                  <h3>Alex Edwards</h3>
                  <p>Fullstack Developer</p>
                </div>
              </div>
            </div>

            {/* Member 6 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team-card wow fadeInUp">
                <div className="hover-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>

                <div className="team-outer">
                  <img src="/images/team-img.jpg" alt="Team Member" />
                </div>

                <div className="team-info">
                  <h3>Wendy Chandler</h3>
                  <p>Java Developer</p>
                </div>
              </div>
            </div>

            {/* Member 7 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team-card wow fadeInUp">
                <div className="hover-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>

                <div className="team-outer">
                  <img src="/images/team-img.jpg" alt="Team Member" />
                </div>

                <div className="team-info">
                  <h3>James Grant</h3>
                  <p>Fullstack Developer</p>
                </div>
              </div>
            </div>

            {/* Member 8 */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="team-card wow fadeInUp">
                <div className="hover-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>

                <div className="team-outer">
                  <img src="/images/team-img.jpg" alt="Team Member" />
                </div>

                <div className="team-info">
                  <h3>James Grant</h3>
                  <p>Fullstack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
