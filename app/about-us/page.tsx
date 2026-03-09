export default function About() {
  return (
    <>
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>Threatsys Academy</h2>
            <ul className="list-style">
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./about-us.html">About Us</a>
              </li>
              <li className="active">Threatsys Academy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="subPage-hading text-align-center" data-splitting>
            Inspiring Paths, Remarkable{" "}
            <span style={{ color: "#2267cc" }}>Achievements</span>
          </h2>

          <p className="sub-head d-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="row sub-fstSection">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-6">
                  <div className="left-img img-hover">
                    <img src="/images/demo-2.jpg" alt="about img" />
                  </div>

                  <div className="exp">
                    <h3>6+</h3>
                    <span>Years of Experience</span>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-6">
                  <h1 className="bg-title">Threatsys Academy</h1>

                  <div className="right-img img-hover">
                    <img src="/images/demo-1.jpg" alt="about img" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12">
              <div className="content-div content-p">
                <p>
                  Threatsys Technologies Private Limited is a CERT-IN associated
                  & ISO-27001, ISO 20000, SOC 2 Type 2 certified company that
                  has been at the forefront of Cyber Security Services.
                </p>

                <p className="mb-0">
                  Threatsys is a leading cyber security Consulting Partner that
                  specializes in securing the IT infrastructure and assets of
                  enterprises globally.
                </p>

                <a href="#" className="button1">
                  <span className="button1__icon-wrapper">
                    <svg viewBox="0 0 14 15" width="10">
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                    </svg>
                    <svg
                      viewBox="0 0 14 15"
                      width="10"
                      className="button1__icon-svg--copy"
                    >
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                    </svg>
                  </span>
                  Contact Us
                </a>

                <div className="row about-num">
                  <div className="col-md-5 col-6">
                    <h3>40+</h3>
                    <span>Certification Courses</span>
                  </div>

                  <div className="col-md-5 col-6">
                    <h3>10K</h3>
                    <span>Learners Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section p-0 about-sec2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="card wow fadeInUp">
                <div className="icon-div">
                  <img src="/images/reading.png" alt="" />
                </div>
                <h4>24K</h4>
                <span>STUDENT ENROLLED</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="card wow fadeInUp">
                <div className="icon-div">
                  <img src="/images/whiteboard.png" alt="" />
                </div>
                <h4>30.6K</h4>
                <span>CLASS COMPLETED</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="card wow fadeInUp">
                <div className="icon-div">
                  <img src="/images/rating.png" alt="" />
                </div>
                <h4>100%</h4>
                <span>SATISFACTION RATE</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="card wow fadeInUp">
                <div className="icon-div">
                  <img src="/images/coach.png" alt="" />
                </div>
                <h4>300+</h4>
                <span>TOP INSTRUCTORS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-sec">
        <div className="box">
          <h2>VISION</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="icon-msn">
            <img src="/images/mission.png" alt="Vision" />
          </div>
        </div>

        <div className="box">
          <h2>MISSION</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="icon-msn">
            <img src="/images/targeting.png" alt="Mission" />
          </div>
        </div>

        <div className="box">
          <h2>VALUES</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="icon-msn">
            <img src="/images/team.png" alt="Values" />
          </div>
        </div>
      </section>

      <section className="section faq-section pt-0">
        <div className="container">
          <h2 className="subPage-hading">
            Frequently Asked <span style={{ color: "#2267cc" }}>Questions</span>
          </h2>

          <div className="accordion" id="faqAccordion">
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  What learning modes does your program offer?
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  The batches listed above provide an online instructor-led
                  training experience.
                </div>
              </div>
            </div>

            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  Are all listed batches guaranteed to run?
                </button>
              </h2>

              <div id="collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes, 99% of our training batches are guaranteed to run.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div
          className="slider"
          style={
            {
              "--width": "150px",
              "--height": "50px",
              "--imageQuantity": 10,
            } as React.CSSProperties
          }
        >
          <div className="list">
            <div className="item">
              <img src="/images/brand-logos/Aadhaar.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="/images/brand-logos/airtel.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="/images/brand-logos/alphabet.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="/images/brand-logos/amazon.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="/images/brand-logos/microsoft.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="/images/brand-logos/razorpay.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="/images/brand-logos/verizon.png" alt="Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
