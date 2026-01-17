import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const LogoSlider = ({ logos }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={6}
      loop={true}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={2000}
      freeMode={true}
      className="mySwiper"
    >
      {logos.map((logo, index) => (
        <SwiperSlide key={index}>
          <div className="item">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LogoSlider;
