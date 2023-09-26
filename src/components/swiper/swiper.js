import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css"

import leadboard from '../../images/123loadboard.webp'
import amazon from '../../images/Amazon.webp'
import dat from '../../images/dat.webp'
import sylectus from '../../images/sylectus.webp'
import dhl from '../../images/DHL.webp'
import fedex from '../../images/fedex.webp'

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";
function SwiperSlider() {


    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

      const [slideNumber, setSlideNumber] = useState(4)
    
    useEffect(() => {
        if(window.innerWidth < 769){
            setSlideNumber(2)
        }

        return
      }, []);

  return (
    <>
      <Swiper
        slidesPerView={slideNumber}
        spaceBetween={30}
        slidesPerGroup={slideNumber}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide><img src={amazon} alt="teamofnexus company slider"/></SwiperSlide>
        <SwiperSlide><img src={dat} alt="teamofnexus company slider"/></SwiperSlide>
        <SwiperSlide><img src={sylectus} alt="teamofnexus company slider"/></SwiperSlide>
        <SwiperSlide><img src={leadboard} alt="teamofnexus company slider"/></SwiperSlide>
        <SwiperSlide><img src={dhl} alt="teamofnexus company slider"/></SwiperSlide>
        <SwiperSlide><img src={leadboard} alt="teamofnexus company slider"/></SwiperSlide>
        <SwiperSlide><img src={fedex} alt="teamofnexus company slider"/></SwiperSlide>
      </Swiper>
    </>
  );
}


export default SwiperSlider;