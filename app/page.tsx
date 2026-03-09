"use client"; // Required in Next.js 13+ with app directory
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Parallax, Autoplay } from "swiper";
// Navigation
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
// import LogoSlider from "./common-components/LogoSlider";
import { useState } from "react";
// import { ArrowIcon } from "./common-components/ArrowComponent";
// import { ReadMoreButton } from "./common-components/ReadMoreButton";
import HomeSlider from "./common-components/HomeSlider";
import AdvisorsSection from "./common-components/AdvisorsSection";
import TestimonialsSection from "./common-components/TestimonialsSection";
// SwiperCore.use([Navigation, Pagination, Parallax, Autoplay]);

export default function Home() {
  return (
    <>
      <section className="banner d-none">
        <div className="container-fluid">
          <div className="align-items-center">
            <div className="hero-content">
              <div>
                <h1 className="sub-text">
                  Pioneering Cybersecurity Education in India
                </h1>
              </div>

              <h1 className="hero-title" id="headline" data-splitting>
                Shape the Future of
                <span style={{ color: "#f8c80c" }}> Cybersecurity</span>
              </h1>

              <p className="hero-subtitle wow fadeInUp" data-wow-delay="0.2s">
                At Threatsys Academy, we are committed to shaping the next
                generation of cybersecurity experts.
              </p>

              <div className="hero-buttons wow fadeInUp" data-wow-delay="0.4s">
                <a href="#" className="button1">
                  <span className="button1__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button1__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button1__icon-svg button1__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeSlider />

      <section className="section vision-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 p-0">
              <div className="flex-div">
                <img src="images/mission2.png" alt="Mission" />
                <h3>
                  On a mission to train and empower 50,000 Cyber Commandos by
                  2030.
                </h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 p-0">
              <div className="flex-div right-vis">
                <img src="images/student_grp.png" alt="students" />

                <h4>
                  <span>1</span>
                  <span>4</span>
                  <span>5</span>
                  <span>5</span>
                  <p>Learners</p>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section features-div d-none">
        <div className="features-section">
          <div className="boxes row">
            <div className="col-md-3 col-sm-3 col-6">
              <div className="feature-box wow fadeInUp">
                <div
                  className="number"
                  data-target="24"
                  data-k="true"
                  data-plus="false"
                >
                  0
                </div>
                <div className="text">
                  <p>Learners Worldwide</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-6">
              <div className="feature-box wow fadeInUp">
                <div
                  className="number"
                  data-target="100"
                  data-k="true"
                  data-plus="false"
                >
                  0
                </div>
                <div className="text">
                  <p>Cyber Commandos by 2030</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-6">
              <div className="feature-box wow fadeInUp">
                <div className="number" data-target="70" data-plus="true">
                  0
                </div>
                <div className="text">
                  <p>Security Tools</p>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-3 col-6">
              <div className="feature-box wow fadeInUp">
                <div className="number" data-target="4.8" data-plus="false">
                  0
                </div>
                <div className="text">
                  <p>Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section partners d-none">
        <img
          className="bg-abs"
          src="images/wave-abs-01.png"
          alt="Background img"
        />
        <img
          className="bg-abs2"
          src="images/wave-abs-02.png"
          alt="Background img"
        />

        <h2 data-splitting>Authorized Training Partners</h2>

        <div className="container">
          <div className="row" id="partnerRow">
            {[...Array(12)].map((_, i) => (
              <div className="col-md-2" key={i}>
                <div className="partner-logo">
                  <img src="" alt="Partner Logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section courses-offered">
        <div className="container">
          <h2 data-splitting className="text-align-center">
            Discover <span style={{ color: "#2267cc" }}> Courses</span> by
            Category
          </h2>

          <p className="text-align-center mb-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
            solutan amet consectetur adipisicing Quod solutan amet consectetur
            adipisicing!
          </p>

          <div className="row">
            {/* Course 1 */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <a
                href="cyber-security-details-page.html"
                className="course-div wow fadeInUp"
                data-name="01"
                data-wow-delay="0s"
              >
                <div>
                  <div className="course-icon">
                    <img
                      className="col-icon"
                      src="/images/cyber-crime.png"
                      alt="Cyber Security"
                    />
                    <img
                      className="wh-icon"
                      src="/images/cyber-crime-wh.png"
                      alt="Cyber Security"
                    />
                  </div>
                </div>

                <div>
                  <h4>Cyber Security</h4>
                  <p>
                    Protect systems and networks from digital threats and
                    attacks.
                  </p>
                </div>
              </a>
            </div>

            {/* Course 2 */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div
                className="course-div wow fadeInUp"
                data-name="02"
                data-wow-delay="0.5s"
              >
                <div>
                  <div className="course-icon">
                    <img
                      className="col-icon"
                      src="/images/secure-data.png"
                      alt="Cloud Security"
                    />
                    <img
                      className="wh-icon"
                      src="/images/secure-data-wh.png"
                      alt="Cloud Security"
                    />
                  </div>
                </div>

                <div>
                  <h4>Cloud Security</h4>
                  <p>
                    Secure cloud-based platforms, infrastructure, and stored
                    data.
                  </p>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div
                className="course-div wow fadeInUp"
                data-name="03"
                data-wow-delay="1s"
              >
                <div>
                  <div className="course-icon">
                    <img
                      className="col-icon"
                      src="/images/regulation.png"
                      alt="GRC"
                    />
                    <img
                      className="wh-icon"
                      src="/images/regulation-wh.png"
                      alt="GRC"
                    />
                  </div>
                </div>

                <div>
                  <h4>Governance, Risk & Compliance</h4>
                  <p>
                    Ensures integrity by managing risks, policies, and
                    compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Course 4 */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div
                className="course-div wow fadeInUp"
                data-name="04"
                data-wow-delay="1.5s"
              >
                <div>
                  <div className="course-icon">
                    <img
                      className="col-icon"
                      src="/images/security-audit.png"
                      alt="Security Testing"
                    />
                    <img
                      className="wh-icon"
                      src="/images/security-audit-wh.png"
                      alt="Security Testing"
                    />
                  </div>
                </div>

                <div>
                  <h4>Security Testing</h4>
                  <p>
                    Identify vulnerabilities in systems through ethical testing
                    methods.
                  </p>
                </div>
              </div>
            </div>

            {/* Course 5 */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="course-div wow fadeInUp" data-name="05">
                <div>
                  <div className="course-icon">
                    <img
                      className="col-icon"
                      src="/images/safety.png"
                      alt="Data Privacy"
                    />
                    <img
                      className="wh-icon"
                      src="/images/safety-wh.png"
                      alt="Data Privacy"
                    />
                  </div>
                </div>

                <div>
                  <h4>Data Privacy</h4>
                  <p>Ensure personal data is handled securely and lawfully.</p>
                </div>
              </div>
            </div>

            {/* Course 6 */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div
                className="course-div wow fadeInUp"
                data-name="06"
                data-wow-delay="0.5s"
              >
                <div>
                  <div className="course-icon">
                    <img
                      className="col-icon"
                      src="/images/audit.png"
                      alt="Auditing"
                    />
                    <img
                      className="wh-icon"
                      src="/images/audit-wh.png"
                      alt="Auditing"
                    />
                  </div>
                </div>

                <div>
                  <h4>Auditing</h4>
                  <p>
                    Evaluate and monitor security controls and compliance
                    procedures.
                  </p>
                </div>
              </div>
            </div>

            {/* Course 7 */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div
                className="course-div wow fadeInUp"
                data-name="07"
                data-wow-delay="1s"
              >
                <div>
                  <div className="course-icon">
                    <img
                      className="col-icon"
                      src="/images/team-leader.png"
                      alt="Business Leadership"
                    />
                    <img
                      className="wh-icon"
                      src="/images/team-leader-wh.png"
                      alt="Business Leadership"
                    />
                  </div>
                </div>

                <div>
                  <h4>Business Leadership</h4>
                  <p>
                    Develop leadership skills to manage cybersecurity teams
                    effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Course 8 */}
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
              <div
                className="course-div wow fadeInUp"
                data-name="08"
                data-wow-delay="1.5s"
              >
                <div>
                  <div className="course-icon">
                    <img
                      className="col-icon"
                      src="/images/operational.png"
                      alt="Security Operations"
                    />
                    <img
                      className="wh-icon"
                      src="/images/operational-wh.png"
                      alt="Security Operations"
                    />
                  </div>
                </div>

                <div>
                  <h4>Security Operations</h4>
                  <p>Monitor and respond to security incidents in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section categories-section d-none">
        <div className="container">
          <div className="section-heading">
            <span className="badge">Trending Categories</span>
            <h2 data-splitting>
              Choose Your <span style={{ color: "#fac90b" }}>Learning</span>{" "}
              Path
            </h2>
            <p>Explore our most popular learning paths and skill areas.</p>
          </div>

          <div className="category-slider">
            <div className="swiper CSwiper">
              <div className="swiper-wrapper">
                {[
                  "Graphic Design",
                  "Finance",
                  "Development",
                  "Marketing",
                  "Life Style",
                  "Management",
                  "Management",
                ].map((item, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="category-card">
                      <img src="images/secure-data.png" alt={item} />
                      <h4>{item}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="swiper-button-prev custom-prev"></div>
              <div className="swiper-button-next custom-next"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-slider d-none">
        <div className="container">
          <h2 data-splitting className="text-align-center">
            We Are <span style={{ color: "#2267cc" }}> Dedicated</span> <br />
            To Serve You All Time
          </h2>

          <div className="swiper mySwiper2">
            <div className="swiper-wrapper">
              {[
                {
                  title: "UI/UX Design",
                  text: "We’re wildly passionate about our purpose, and it has us transforming everything",
                },
                {
                  title: "Business Planning",
                  text: "Our customers get solutions and business opportunities instead of just projects.",
                },
                {
                  title: "Project Management",
                  text: "Our global community of about 5,000 people can be found working from corporate",
                },
                {
                  title: "Cyber Security",
                  text: "We know our people are our greatest asset, and we are putting our money.",
                },
                {
                  title: "Cyber Security",
                  text: "We know our people are our greatest asset, and we are putting our money.",
                },
              ].map((service, i) => (
                <div className="swiper-slide" key={i}>
                  <div className="service-card">
                    <div className="icon">
                      <img src="images/cyber-crime.png" alt={service.title} />
                    </div>
                    <h3>{service.title}</h3>
                    <div className="divider"></div>
                    <p>{service.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev custom-prev"></div>
            <div className="swiper-button-next custom-next"></div>
          </div>
        </div>
      </section>

      <section className="section inquiry-courses">
        <div className="container">
          <h2 className="text-align-center" data-splitting>
            Get Your Quality Skills{" "}
            <span style={{ color: "#063bae" }}>Certificate</span>
            <br />
            Through Threatsys Academy
          </h2>

          <div className="center-btn">
            <a
              // href="/"
              className="button1 mt-0"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <span className="button1__icon-wrapper">
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button1__icon-svg"
                  width="10"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              Start your journey today – Enroll Now
            </a>
          </div>
        </div>
      </section>

      <section className="section top-rated-courses">
        <div className="container">
          <h2 className="text-align-center" data-splitting="true">
            Explore Top-Rated <span style={{ color: "#2267cc" }}>Courses</span>
          </h2>

          <div
            className="custom-tabs nav nav-pills"
            id="pills-tab"
            role="tablist"
          >
            <div className="tab-bg-slide" id="tabBg"></div>

            <button
              className="nav-link active"
              id="tab1-tab"
              data-bs-toggle="pill"
              data-bs-target="#tab1"
              type="button"
              role="tab"
              aria-selected="true"
            >
              Trending Courses
            </button>

            <button
              className="nav-link"
              id="tab2-tab"
              data-bs-toggle="pill"
              data-bs-target="#tab2"
              type="button"
              role="tab"
              aria-selected="false"
            >
              New Courses
            </button>

            <button
              className="nav-link"
              id="tab3-tab"
              data-bs-toggle="pill"
              data-bs-target="#tab3"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Career Oriented
            </button>

            <button
              className="nav-link"
              id="tab4-tab"
              data-bs-toggle="pill"
              data-bs-target="#tab4"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Combo Courses
            </button>
          </div>

          <div className="tab-content container" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="tab1"
              role="tabpanel"
              aria-labelledby="tab1-tab"
            >
              <div className="course-container">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                    <a className="course-box" href="/single-course-details">
                      <div className="course-image">
                        <img src="/images/bg-img.jpg" alt="Course Image 1" />
                        <div className="badge-type">CISSP</div>
                      </div>

                      <div className="course-header">
                        <div className="course-title">
                          CISSP Certification Training
                        </div>

                        <div className="course-meta">
                          <div className="c-time">
                            <img src="/images/time.png" alt="Time Icon" />
                            <span>24 Hrs</span>
                          </div>

                          <div className="c-time">
                            <img src="/images/video.png" alt="Video Icon" />
                            <span>LIVE Instructor-led Training</span>
                          </div>
                        </div>
                      </div>

                      <div className="exprt-talk">Talk To Our Experts</div>
                    </a>
                  </div>
                </div>

                <div className="details-btn text-align-center">
                  <a href="/our-courses">
                    <p>View All Courses</p>

                    <div className="arrow">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/images/abstract-1.png"
          alt="Abstract"
          className="abstract-image1"
        />
      </section>

      <section className="section clientele-section">
        {/* <img src="images/bg-1.png" alt="background img" className="clientele-background" /> */}

        <h2 data-splitting className="text-align-center">
          Our Distinguished <span style={{ color: "#fac90b" }}> Clientele</span>
        </h2>

        {/* slider 1 */}
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
              <img src="images/brand-logos/Aadhaar.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/airtel.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/alphabet.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/amazon.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/infopulse.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/microsoft.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/razorpay.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/shadowfax.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/verizon.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/axis.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/evolvous.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/infopulse.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/nandighosa.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/paysecure.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/payten.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/paytm.png" alt="Logo" />
            </div>
          </div>
        </div>

        {/* slider 2 */}
        <div
          className="slider"
          // reverse={true}
          style={
            {
              "--width": "200px",
              "--height": "200px",
              "--imageQuantity": 7,
            } as React.CSSProperties
          }
        >
          <div className="list">
            <div className="item">
              <img src="images/brand-logos/firstbank.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/logo-1.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/payten.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/united-nation.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/bihar.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/fnb.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/gemini.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/i3ms.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/jsw.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/marketwolf.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/logo-1.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/sevenpay.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/ministery-mines.png" alt="Logo" />
            </div>
            <div className="item">
              <img src="images/brand-logos/suyog.png" alt="Logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="section choose-us-section">
        <img
          src="images/threatsys-logo-bg.png"
          alt="Background Logo"
          className="background-logo-shd"
        />

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="image-container wow fadeInLeft">
                <img src="images/team.jpg" alt="Influencer Group" />

                <div
                  className="insight-badge wow fadeInLeft"
                  data-wow-delay="1s"
                >
                  27K+ <span> Program Enrollments</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12">
              <div className="content wow fadeInRight" data-wow-delay="0.5s">
                <h1 className="sub-text">Why Choose Us</h1>

                <h2 data-splitting>
                  Lead the fight against cybercrime{" "}
                  <span style={{ color: "#2267cc" }}> with expertise</span>
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus repellat vitae nemo a pariatur eligendi.
                </p>

                <div className="features">
                  <div>Certified Trainers</div>
                  <div>Highly Interactive Sessions</div>
                  <div>Skill-based Training</div>
                  <div>Certification Focus</div>
                  <div>Flexible Schedule</div>
                  <div>Tailored Solutions</div>
                  <div>Post Training Assistance</div>
                  <div>Access Recorded Sessions</div>
                </div>

                <a href="#" className="button1 mt-0">
                  <span className="button1__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button1__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button1__icon-svg button1__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="shape-divider">
          <svg
            width="100%"
            height="300"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#023096"
              d="M0,0 L0,160 C720,320 720,320 1440,160 L1440,0 Z"
            />
          </svg>
        </div>

        <div className="container">
          <h2 data-splitting>
            Success That <span style={{ color: "#f8c80c" }}>Speaks</span> for
            Itself
          </h2>

          <p className="subtitle wow fadeInUp">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className="vdo-container">
            <div className="vdo-box wow fadeInUp">
              <img src="images/vdo-conference.jpg" alt="Vdos" />

              <button
                className="custom-button"
                data-fancybox
                data-src="https://www.youtube.com/watch?v=57mY9scI98c"
              >
                <div className="button-container">
                  <div className="button-shadow"></div>

                  <label className="button-label">
                    <div className="button-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z" />
                      </svg>
                    </div>
                  </label>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="foundation-section section">
        <div className="container">
          <div className="row foundation-container">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="foundation-content">
                <h1 className="sub-text">Threatsys Foundation</h1>

                <h2 data-splitting>
                  Empowering Minds, Securing Futures,{" "}
                  <span style={{ color: "#2267cc" }}>Shaping Tomorrow</span>
                </h2>

                <p className="description wow fadeInUp">
                  Threatsys Foundation is the backbone of Threatsys Academy.
                  With a mission to build a safer digital future, the foundation
                  drives initiatives in cybersecurity awareness, skill
                  development, and community empowerment.
                </p>

                <p className="description mt-3 wow fadeInUp">
                  From free workshops to research initiatives, we’re dedicated
                  to training the next generation of cyber defenders and
                  bridging the global cybersecurity skill gap.
                </p>

                <a href="#" className="button1">
                  <span className="button1__icon-wrapper">
                    <svg viewBox="0 0 14 15" fill="none" width="10">
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      className="button1__icon-svg button1__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Visit Threatsys Foundation
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12">
              <div className="foundation-images wow fadeInRight">
                <div className="image-box">
                  <img
                    src="images/foundation-1.jpg"
                    alt="Cybersecurity Workshop"
                  />
                </div>

                <div className="image-box">
                  <img
                    src="images/foundation-2.jpg"
                    alt="Cybersecurity Training"
                  />
                </div>

                <div className="year-experience-circle">
                  <img src="images/year-exp.svg" alt="Years" />
                  <h2>
                    <span className="counter">6</span>+
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdvisorsSection />
      <TestimonialsSection />
    </>
  );
}
