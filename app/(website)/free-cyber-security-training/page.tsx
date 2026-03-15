"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const FreeCyberSecurityTraining = () => {
  const [content, setContent] = useState<any>({});

  useEffect(() => {
    axios.get("/api/free_cyber_training").then((res) => setContent(res.data));
  }, []);

  if (!content.description) return <p>Loading...</p>;

  return (
    <>
      <section>
        {/* Banner */}
        <section className="inner-banner about-banner">
          <div className="container">
            <div className="page-banner-content">
              <h2>Free Cyber Security Training</h2>
              <ul className="list-style">
                <li>
                  <a href="./index.html">Home</a>
                </li>
                <li>
                  <a href="">Resources</a>
                </li>
                <li className="active">Free Cyber Security Training</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Course Description */}
        <section className="section pb-0">
          <div className="container">
            <h2 className="subPage-hading text-align-center" data-splitting>
              Course <span style={{ color: "#2267cc" }}>Description</span>
            </h2>
            <p className="sub-head">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              placeat ipsa consequatur, soluta voluptates illum deserunt porro
              repudiandae accusamus a molestias earum alias fugit error non eum
              unde ab voluptatibus? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Sit sint repellat tenetur velit inventore
              aspernatur nostrum ducimus magni, libero est beatae minus sed
              voluptas, officiis provident doloremque facere. Laboriosam,
              molestiae.
            </p>
          </div>
        </section>

        {/* Expectations / Features */}
        <section className="section expect-section">
          <div className="container">
            <div className="row align-items-start expect-row">
              {/* Left Image */}
              <div className="col-lg-6 col-md-12 col-12">
                <div className="expect-image-wrap">
                  <div className="img-container wow animate__animated animate__fadeInLeft">
                    <img
                      src="/images/about_image_1.jpg"
                      alt="Student Learning"
                      className="expect-image"
                    />
                  </div>
                </div>
              </div>

              {/* Right Features */}
              <div className="col-lg-6 col-md-12 col-12">
                <div className="expect-content">
                  <div className="row g-4">
                    <div className="col-12 col-md-6">
                      <div className="feature-card wow animate__animated animate__flipInX">
                        <h4>What?</h4>
                        <p>
                          A campaign to endorse and expand{" "}
                          <strong>cybersecurity skills</strong> through
                          complimentary training
                        </p>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="feature-card wow animate__animated animate__flipInX">
                        <h4>When?</h4>
                        <p>
                          Next Batch <br />
                          <strong className="fs">15-18 Sep 2025</strong>
                        </p>
                        <div id="timer">
                          <span id="days">6</span>D
                          <span style={{ color: "#fff" }}></span>
                          <span id="hours">23</span>H
                          <span style={{ color: "#fff" }}></span>
                          <span id="minutes">58</span>M
                          <span style={{ color: "#fff" }}></span>
                          <span id="seconds">28</span>S
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="feature-card wow animate__animated animate__flipInX">
                        <h4>Why?</h4>
                        <p>
                          The need to address a worldwide Cybersecurity skills
                          gap of <strong>3.4 Million</strong> Professionals
                        </p>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="feature-card wow animate__animated animate__flipInX">
                        <h4>Our Mission</h4>
                        <p>
                          Training <strong>1 Million</strong> Professionals in
                          Cybersecurity Skills by 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="section benefit-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-12">
              <h2>
                Who Can <span style={{ color: "#f8c80c" }}>Benefit</span>?
              </h2>

              <div className="row">
                {[
                  {
                    img: "/images/success.png",
                    text: "A Fresher looking to explore cybersecurity as a career option",
                  },
                  {
                    img: "/images/instructor.png",
                    text: "An Instructor looking to add value & meaning to your work",
                  },
                  {
                    img: "/images/building.png",
                    text: "An Institution looking to diversify and train or hire cybersecurity educators",
                  },
                ].map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="left-box-benefit">
                      <div className="feature-icon-wrap">
                        <img src={item.img} alt="benefit" />
                      </div>
                      <p>
                        <strong>{item.text.split(" ")[0]}</strong>{" "}
                        {item.text.substring(item.text.indexOf(" ") + 1)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Form */}
            <div className="col-lg-5 col-md-12 col-12">
              <div className="instructor-sidebar">
                <h4 className="title">Register for Free Session</h4>

                <form>
                  <div className="form-grp">
                    <input type="text" placeholder="Name" />
                  </div>

                  <div className="form-grp">
                    <input type="email" placeholder="E-mail" />
                  </div>

                  <div className="form-grp">
                    <input type="number" placeholder="Phone" />
                  </div>

                  <div className="form-grp">
                    <textarea placeholder="Type Message" />
                  </div>

                  <button type="submit" className="button1 mt-2">
                    Reserve My Spot
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="section">
        <div className="container">
          <div className="row">
            {[
              {
                img: "/images/book.png",
                title: "Upskill for FREE",
                desc: "At InfosecTrain, we are committed to making the internet a safer place for all...",
              },
              {
                img: "/images/trophy.png",
                title: "Expert Guidance",
                desc: "Industry experts not only train you on the essentials of cybersecurity...",
              },
              {
                img: "/images/discussion.png",
                title: "Train the Trainer",
                desc: "By training educators, we create a ripple effect that ensures students...",
              },
            ].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="practice-test-card">
                  <div className="practice-testImg">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="subPage-hading">
            Frequently Asked <span style={{ color: "#2267cc" }}>Questions</span>
          </h2>

          <div className="accordion" id="faqAccordion">
            {/* You can later convert this to React state-based accordion */}
            <div className="accordion-item border-0">
              <h2 className="accordion-header">
                <button className="accordion-button">
                  What learning modes does your program offer?
                </button>
              </h2>
              <div className="accordion-collapse show">
                <div className="accordion-body">
                  Online instructor-led training, 1-on-1 sessions, self-paced
                  learning, and onsite options.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section inquiry-courses">
        <div className="container">
          <h2 className="text-align-center">
            Join Our Initiative – Train{" "}
            <span style={{ color: "#063bae" }}>1 Million</span> Individuals by
            2025
          </h2>

          <div className="center-btn">
            <button className="button1 mt-0">Download Course Content</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeCyberSecurityTraining;
