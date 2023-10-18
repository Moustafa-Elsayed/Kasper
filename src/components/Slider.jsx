import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade } from "swiper/modules";
import { useEffect } from "react";
import Aos from "aos";

const Slider = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      effect="fade"
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
    >
      <SwiperSlide>
        <img
          src=".\img\carosul1.jpg"
          alt=""
          style={{ maxWidth: "100%", height: "100vh",display:"block" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=".\img\carosul2jpg.jpg"
          alt=""
          style={{ maxWidth: "100%", height: "100vh",display:"block"  }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src=".\img\carusol3.jpg"
          alt=""
          style={{ maxWidth: "100%", height: "100vh",display:"block"  }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
