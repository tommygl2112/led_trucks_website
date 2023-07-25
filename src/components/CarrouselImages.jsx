import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper";

function CarrouselImages({ arrayImages, slidesPerView = 3 }) {
  return (
    <>
      <Swiper
        modules={[Autoplay, A11y]}
        spaceBetween={50} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: slidesPerView,
          },
        }}
        className="slides-container"
      >
        {arrayImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="slides-container__slide" src={'/assets/' + image} alt="logo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CarrouselImages