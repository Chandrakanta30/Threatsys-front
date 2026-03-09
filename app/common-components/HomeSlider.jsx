"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function BannerSlider() {
  return (
    <section className="creative-fullpage--slider banner">
      <div className="banner-horizental">

        <Swiper
          modules={[Pagination, Parallax, Autoplay]}
          pagination={{ type: "progressbar" }}
          autoplay={{ delay: 5000 }}
          parallax={true}
          speed={1200}
          className="swiper-container-h"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slider-inner text-black-banner">

              <img
                className="light-img"
                src="/images/banner/cstm-banner-3.jpg"
                alt="banner"
              />

              <div className="swiper-content">
                <div className="title-area">
                  <p className="tag">OUR VISION</p>

                  <h1 className="hero-title">
                    Shape the Future of
                    <br />
                    <span style={{ color: "#2267cc" }}>
                      Cybersecurity
                    </span>
                  </h1>
                </div>

                <p className="disc">
                  Credibly leverage existing business experiences through
                  magnetic mindshare.
                </p>

                <a href="#" className="button1 mt-0">
                  Know More
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slider-inner text-black-banner">

              <img
                className="light-img"
                src="/images/banner/cstm-banner-1.jpg"
                alt="banner"
              />

              <div className="swiper-content">
                <div className="title-area">
                  <p className="tag">LEARNING</p>

                  <h1 className="hero-title">
                    Free Events <br />
                    <span style={{ color: "#2267cc" }}>
                      Masterclasses
                    </span>
                  </h1>
                </div>

                <p className="disc">
                  Conveniently formulate progressive users for error-free
                  interfaces.
                </p>

                <a href="#" className="button1 mt-0">
                  Explore Now
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slider-inner text-black-banner">

              <img
                className="light-img"
                src="/images/banner/cstm-banner-2.jpg"
                alt="banner"
              />

              <div className="swiper-content">
                <div className="title-area">
                  <p className="tag">LEARNING</p>

                  <h1 className="hero-title">
                    <span style={{ color: "#2267cc" }}>
                      DevSecOps
                    </span>
                    <br />
                    Practical Approach
                  </h1>
                </div>

                <p className="disc">
                  Conveniently formulate progressive users for error-free
                  interfaces.
                </p>

                <a href="#" className="button1 mt-0">
                  Explore Now
                </a>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
}