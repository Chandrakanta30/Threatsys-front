"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="row">
          {/* Left Text */}
          <div className="col-md-6">
            <div className="testimonial-text">
              <h2 data-splitting>
                Feedback That <span style={{ color: "#2267cc" }}>Speaks</span>{" "}
                <br /> Louder Than Words
              </h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                eiusmod tempor incididunt labore dolore magna aliqua enim minim
                ve.
              </p>

              <a href="/testimonial" className="button1">
                <span className="button1__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="10"
                    className="button1__icon-svg"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                View All
              </a>
            </div>
          </div>

          {/* Right Slider */}
          <div className="col-md-6">
            <div className="testimonial-swiper">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="testimonial-card">
                    <div className="profile">
                      <img
                        src="/images/testimonial-02.png"
                        className="avatar"
                        alt="avatar"
                      />

                      <span className="quote-badge">❝</span>
                    </div>

                    <p className="comment">
                      Lorem ipsum dolor amet consectur elit adicing sed do usmod
                      tempor enim minim veniam quis nostrud exer citation.
                    </p>

                    <div className="stars">★★★★★</div>

                    <h3 className="name">Tom Hurley</h3>
                    <p className="role">Content Creator</p>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="testimonial-card">
                    <div className="profile">
                      <img
                        src="/images/testimonial-03.png"
                        className="avatar"
                        alt="avatar"
                      />

                      <span className="quote-badge">❝</span>
                    </div>

                    <p className="comment">
                      Lorem ipsum dolor amet consectur elit adicing sed do usmod
                      tempor enim minim veniam quis nostrud exer citation.
                    </p>

                    <div className="stars">★★★★★</div>

                    <h3 className="name">Robert Lane</h3>
                    <p className="role">Developer</p>
                  </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="testimonial-card">
                    <div className="profile">
                      <img
                        src="/images/testimonial-02.png"
                        className="avatar"
                        alt="avatar"
                      />

                      <span className="quote-badge">❝</span>
                    </div>

                    <p className="comment">
                      Lorem ipsum dolor amet consectur elit adicing sed do usmod
                      tempor enim minim veniam quis nostrud exer citation.
                    </p>

                    <div className="stars">★★★★★</div>

                    <h3 className="name">Tom Hurley</h3>
                    <p className="role">Content Creator</p>
                  </div>
                </SwiperSlide>
              </Swiper>

              <img className="map" src="/images/map-shape-3.png" alt="map" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
