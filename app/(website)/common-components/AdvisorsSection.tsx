"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function AdvisorsSection() {
  return (
    <section className="section advisors-section">
      <div className="container">
        <h2 className="text-align-center" data-splitting>
          Your Expert Course <span style={{ color: "#f8c80c" }}>Advisors</span>
        </h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          velit libero repellendus.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="advisors-carousel"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <a href="#" className="testimonial-item">
              <div className="quote-icon">
                <img src="/images/quote-left.png" alt="quote" />
              </div>

              <p>
                Lorem Ipsum has been the industry`&apos;`s standard dummy text
                ever since the printer took a galley.
              </p>

              <div className="testimonial-author">
                <img src="/images/testimonial-02.png" alt="Author" />

                <div>
                  <h4>David Matin</h4>
                  <span>18+ Years of Experience</span>
                </div>
              </div>
            </a>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <a href="#" className="testimonial-item">
              <div className="quote-icon">
                <img src="/images/quote-left.png" alt="quote" />
              </div>

              <p>
                Lorem Ipsum has been the industry`&apos;`s standard dummy text
                ever since the printer took a galley.
              </p>

              <div className="testimonial-author">
                <img src="/images/testimonial-02.png" alt="Author" />

                <div>
                  <h4>David Matin</h4>
                  <span>9+ Years of Experience</span>
                </div>
              </div>
            </a>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <a href="#" className="testimonial-item">
              <div className="quote-icon">
                <img src="/images/quote-left.png" alt="quote" />
              </div>

              <p>
                Lorem Ipsum has been the industry`&apos;`s standard dummy text
                ever since the printer took a galley.
              </p>

              <div className="testimonial-author">
                <img src="/images/testimonial-02.png" alt="Author" />

                <div>
                  <h4>David Matin</h4>
                  <span>4+ Years of Experience</span>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
