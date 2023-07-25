import React, {useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { FaPlay } from "react-icons/fa";
import '../style/slider.scss';
import RoundedButton from "./RoundedButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function SliderSlick() {

  return (
    <div className="slider-container">
      <div className="slider-container__container">
      <div className="slider-container__container__overlayed-content">
        <h1 className="slider-container__container__overlayed-content__title1">
          <span className="slider-container__container__overlayed-content__title1--blue">Shine a light on your brand!</span></h1>

        <p className="slider-container__container__overlayed-content__content">
        Shine a light on your brand with LED Truck. Our unique LED advertising trucks are designed to showcase your message, ensuring maximum.
        </p>

        <RoundedButton fontSize={'20px'} text={'Learn More'} link ={'./#1'} />

        <div className="slider-container__container__overlayed-content__watch-div">
          <button className="slider-container__container__overlayed-content__watch-div__btn-video">
            <FaPlay/>
          </button>
          Watch Video
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        className="slider-container__container__slider-content"
      >
        <SwiperSlide>
          <img className="slider-container__container__slider-content__truck-slide" src={"/assets/truckmain5.png"} alt="logo" />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
