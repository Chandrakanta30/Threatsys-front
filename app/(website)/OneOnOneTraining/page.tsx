"use client";
import React, { useEffect, useState } from "react";

function OneOnOneTraining() {
  const [benefits, setBenefits] = useState([]);
  const [progressItems, setProgressItems] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [header, setHeader] = useState<any>({});

  useEffect(() => {
    fetch("/api/one-on-one/faqs")
      .then((res) => res.json())
      .then(setFaqs);
  }, []);

  useEffect(() => {
    fetch("/api/one-on-one/progress")
      .then((res) => res.json())
      .then(setProgressItems);
  }, []);

  useEffect(() => {
    fetch("/api/one-on-one/benefits")
      .then((res) => res.json())
      .then(setBenefits);
  }, []);
  useEffect(() => {
    fetch("/api/one-on-one/header")
      .then((res) => res.json())
      .then(setHeader);
  }, []);

  const renderHeading = (fullText: string, highlight: string) => {
    if (!highlight) return fullText;

    // Split the text by the highlight word (case insensitive)
    const parts = fullText.split(new RegExp(`(${highlight})`, "gi"));

    return (
      <h2>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} style={{ color: "#2267cc" }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </h2>
    );
  };

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
                <h2>{renderHeading(header.heading, header.highlight_text)}</h2>

                <p>{header.description}</p>

                <a
                  href="#"
                  className="button1"
                  data-bs-toggle="modal"
                  data-bs-target="#scheduleaDemo"
                >
                  {header.button_text}
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
