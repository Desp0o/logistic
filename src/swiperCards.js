import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import './cardSwiper.css'
import "swiper/css/pagination";
import "swiper/css/navigation";

import brad from './images/brad.jpg'
import linda from './images/linda.jpg'
import Ignatiev from './images/Ignatiev.jpg'
import Mariabella from './images/Mariabella.jpg'
import caruso from './images/caruso.jpg'
import Owens from './images/freeman.jpg'
import garfild from './images/garfild.jpg'

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";
function SwiperCards() {

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

      const [slideNumber, setSlideNumber] = useState(2)
    
    useEffect(() => {
        if(window.innerWidth < 769){
            setSlideNumber(1)
        }

        return
      }, [window.innerWidth]);

  return (
    <div >
      <Swiper 
        slidesPerView={slideNumber}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        autoplay={{
            delay: 5000,
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
                    <blockquote>Great Service, they deliver as expected!</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Gordon Norman</h2>
                    <blockquote>The best logistic company with a high quality service and responsible team, thank u guys for being helpful and professionals.</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Sue Shei</h2>
                    <blockquote>High level professionals who provide best service!</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src="https://www.devweb.cc/static/media/despo_img.59fe330819c9a9131b84.png" alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Tonrike Despotashvili</h2>
                    <blockquote>The best Service in USA ! Recommended to everyone . You rock guys !</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src={linda} alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Linda Nelson</h2>
                    <blockquote>The best Service in USA ! Recommended to everyone . You rock guys !</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src={Ignatiev} alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Joseph Ignatiev</h2>
                    <blockquote> Your team has done a phenomenal job for us, starting from the moment I reached out to you. Logistics Plus’s level of communication and overall performance has been excellent!</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src={Mariabella} alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Mariabella Wilder</h2>
                    <blockquote>I just wanted to take a moment of your time to thank you for the spectacular service you provide!</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src={caruso} alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Ronen Caruso</h2>
                    <blockquote>his Nexus Logistics team is amazing. Professional, timely, communicative. They work seamlessly and when troubleshooting is needed, 
                        they always find the right solution</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src={Owens} alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>John Owens</h2>
                    <blockquote>Thanks to NexusLogistics for helping us deliver on our promise of prompt delivery to our customers!</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src={garfild} alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Garfield Deacon</h2>
                    <blockquote> I used this service and I was pleasantly surprised with it. </blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>

        <SwiperSlide className="haha">
            <figure className="snip1390 hover"><img src={brad} alt="profile-sample5" className="profile" />
                <figcaption>
                    <h2>Brad Baily</h2>
                    <blockquote> With the nexus logistic solution, we've been able to meet our needs and more. We're very happy with the solution.</blockquote>
                </figcaption>
            </figure>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}


export default SwiperCards;