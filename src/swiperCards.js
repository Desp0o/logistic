import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import './cardSwiper.css'
import "swiper/css/pagination";
import "swiper/css/navigation";

import leadboard from './images/123loadboard.png'
import amazon from './images/Amazon.png'
import dat from './images/dat.png'
import sylectus from './images/sylectus.png'
import dhl from './images/DHL.png'
import fedex from './images/fedex.png'

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";
function SwiperCards() {



  return (
    <div >
      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Pagination, Navigation]}
        className="card_Swiper"
      >
        <SwiperSlide className="haha">
            <figure className="snip1390">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
                <figcaption>
                    <h2>Eleanor Crisp</h2>
                    <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Gordon Norman</h2>
                    <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. </blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Sue Shei</h2>
                    <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src="https://www.devweb.cc/static/media/despo_img.59fe330819c9a9131b84.png" alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Tonrike Despotashvili</h2>
                    <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>


        {/* <SwiperSlide><img src={amazon}/></SwiperSlide>
        <SwiperSlide><img src={dat}/></SwiperSlide>
        <SwiperSlide><img src={sylectus}/></SwiperSlide>
        <SwiperSlide><img src={dhl}/></SwiperSlide>
        <SwiperSlide><img src={fedex}/></SwiperSlide> */}
      </Swiper>
    </div>
  );
}


export default SwiperCards;