"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Index() {
  useEffect(() => {
    new Swiper(".newsSwiper", {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".nav-btn.next",
        prevEl: ".nav-btn.prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }, []);

  return (
    <>
      <section className="section team-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h3 className="wow fadeInLeft top-text">Why Choose Us</h3>
              <h2
                className="wow fadeInLeft"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Reliable Solutions
                <br />{" "}
                <span className="gradient-text">
                  for Cybersecurity Excellence
                </span>
              </h2>
              <div className="why-ch tilt-box reveal">
                <img src="./images/demo-3.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 wow fadeInRight">
              <div className="why-choose-text mt-5">
                <h3>Threatsys People</h3>
                <p>
                  Our team brings years of offensive cybersecurity expertise,
                  backed by top certifications, bug bounty achievements, and
                  active community contributions.
                </p>
              </div>
              <div className="why-choose-text">
                <h3>Customer Service</h3>
                <p>
                  Whether you need specific security testing or a long-term
                  partner to protect your IT assets, we offer smart, tailored,
                  and comprehensive solutions.
                </p>
              </div>
              <div className="why-choose-text">
                <h3>Customer Support</h3>
                <p>
                  Our cybersecurity support engineers are trusted, dedicated,
                  and experienced — always ready to go the extra mile with
                  simple, effective solutions and 24×7 availability.
                </p>
              </div>
              <div className="why-choose-text">
                <h3>Satisfaction</h3>
                <p>
                  Threatsys is committed to delivering cutting-edge
                  cybersecurity solutions that exceed expectations and ensure
                  customer satisfaction with a smile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-section section">
        <div className="container">
          <div className="custom-news-section">
            <h3 className="wow fadeInUp top-text text-align-center">
              Customer success
            </h3>
            <h2
              className="wow fadeInUp text-align-center"
              data-wow-delay="0.2s"
              data-cursor="-opaque"
            >
              Find out how companies from
              <br />
              <span className="gradient-text"> succeed with Threatsys</span>
            </h2>

            <div className="swiper newsSwiper">
              <div className="swiper-wrapper">
                {/* News 1 */}
                <div className="swiper-slide">
                  <div className="news-box">
                    <div className="news-img tilt-box">
                      <img src="/images/about-image-3.jpg" alt="News Image" />
                    </div>

                    <div className="custom-news-content">
                      <h3>
                        Ensuring Data Security for One Crore Women Under
                        Subhadra Yojana
                      </h3>
                      <p>
                        Overview Subhadra Yojana, launched by Prime Minister
                      </p>

                      <a href="#" className="text-btn">
                        <span>View Case Study</span>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            stroke="#286fd9"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* News 2 */}
                <div className="swiper-slide">
                  <div className="news-box">
                    <div className="news-img tilt-box">
                      <img src="/images/about-image-1.jpg" alt="News Image" />
                    </div>

                    <div className="custom-news-content">
                      <h3>
                        Threatsys’s Lead Security Manager bags Cyber Samurai
                        2023 award
                      </h3>
                      <p>
                        Overview Subhadra Yojana, launched by Prime Minister
                      </p>

                      <a href="#" className="text-btn">
                        <span>View Case Study</span>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            stroke="#286fd9"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* News 3 */}
                <div className="swiper-slide">
                  <div className="news-box">
                    <div className="news-img tilt-box">
                      <img src="/images/about-image-2.jpg" alt="News Image" />
                    </div>

                    <div className="custom-news-content">
                      <h3>
                        Threatsys has expanded its operations by launching its
                        subsidiary, Threatsys Kenya Limited in Kenya.
                      </h3>
                      <p>
                        Overview Subhadra Yojana, launched by Prime Minister
                      </p>

                      <a href="#" className="text-btn">
                        <span>View Case Study</span>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            stroke="#286fd9"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* News 4 */}
                <div className="swiper-slide">
                  <div className="news-box">
                    <div className="news-img tilt-box">
                      <img src="/images/about-image-3.jpg" alt="News Image" />
                    </div>

                    <div className="custom-news-content">
                      <h3>
                        Threatsys’s Lead Security Manager bags Cyber Samurai
                        2023 award
                      </h3>
                      <p>
                        Overview Subhadra Yojana, launched by Prime Minister
                      </p>

                      <a href="#" className="text-btn">
                        <span>View Case Study</span>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            stroke="#286fd9"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="next-prev justify-content-center">
                <div className="nav-btn prev"></div>
                <div className="nav-btn next"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
