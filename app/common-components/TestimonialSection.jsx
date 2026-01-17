"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  return (
    <section className="section full-testimonial">
      <div className="container">
        <img
          src="../images/quotes.png"
          alt="Logo"
          className="line-logo-img"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,              // ⏱ auto slide every 3s
            disableOnInteraction: false, // keeps autoplay after swipe
            pauseOnMouseEnter: true,     // pauses on hover
          }}
          pagination={{ clickable: true }}
          className="msgswiper"
        >
          <SwiperSlide>
            <div className="service-text-testimonial">
              <h4>
                Threatsys&apos;s team went deep down into the rabbit hole to
                understand the product and find several bugs...
              </h4>
              <p>Security Officer, Leading Healthcare Company</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="service-text-testimonial">
              <h4>
                Threatsys delivers industry-leading security testing with
                exceptional depth and accuracy.
              </h4>
              <p>CTO, Global FinTech Company</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
