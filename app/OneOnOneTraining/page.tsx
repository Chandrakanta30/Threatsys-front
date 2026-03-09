import React from "react";

const benefits = [
  {
    img: "/images/audit-1.png",
    text: "Focused attention and face to face instructor support",
  },
  {
    img: "/images/checklist.png",
    text: "Focused attention and face to face instructor support face instructor support.",
  },
  {
    img: "/images/training.png",
    text: "Focused attention and face to face instructor support face instructor support.",
  },
];

const progressItems = [
  { img: "/images/progress.png", label: "Your Progress" },
  { img: "/images/darts.png", label: "Your Goals" },
  { img: "/images/speed.png", label: "Your Pace" },
];

const faqs = [
  {
    question: "What learning modes does your program offer?",
    answer:
      "The batches listed above provide an online instructor-led classroom training experience. However, you can also opt for personalized 1-on-1 training by getting in touch with our course advisors.",
  },
  {
    question: "Are all listed batches guaranteed to run?",
    answer:
      "Yes, 99% of our training batches are guaranteed to run. Only in emergencies or unforeseen circumstances are batches subject to change.",
  },
  {
    question: "What additional value do your batches provide?",
    answer:
      "Our batches focus on certification goals and provide skill-based training that can be directly applied on the job.",
  },
  {
    question: "What options do I have if my desired course isn't listed?",
    answer:
      "You can request a batch by reaching out to us or filling the suggestion form.",
  },
];

function OneOnOneTraining() {
  return (
    <>
      {/* Banner */}
      <section className="inner-banner about-banner">
        <div className="container">
          <div className="page-banner-content">
            <h2>1-on-1 Training</h2>

            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li className="active">1-on-1 Training</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section testimonials-section one-onSection">
        <div className="container">
          <div className="row">
            {/* Left */}
            <div className="col-md-6">
              <div className="testimonial-text">
                <h2>
                  Why Choose <span style={{ color: "#2267cc" }}>1-on-1</span>{" "}
                  Training
                </h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  eiusmod tempor incididunt labore dolore magna aliqua.
                </p>

                <a
                  href="#"
                  className="button1"
                  data-bs-toggle="modal"
                  data-bs-target="#scheduleaDemo"
                >
                  Schedule a Demo
                </a>
              </div>
            </div>

            {/* Right Swiper */}
            <div className="col-md-6">
              <div className="testimonial-swiper">
                <div className="swiper mySwiper">
                  <div className="swiper-wrapper">
                    {benefits.map((item, index) => (
                      <div
                        className="swiper-slide testimonial-card"
                        key={index}
                      >
                        <div className="profile">
                          <img
                            src={item.img}
                            className="avatar"
                            alt="benefit"
                          />
                        </div>

                        <p className="comment">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="section progrs-sec">
        <div className="container">
          <div className="icon-section">
            {progressItems.map((item, index) => (
              <div className="icon-box" key={index}>
                <div className="icon-div">
                  <img src={item.img} alt={item.label} />
                </div>

                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="subPage-hading">
            Frequently Asked <span style={{ color: "#2267cc" }}>Questions</span>
          </h2>

          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div className="accordion-item border-0" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      index !== 0 ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                  >
                    {faq.question}
                  </button>
                </h2>

                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OneOnOneTraining;
