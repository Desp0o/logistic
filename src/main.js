import {React, useRef, useState} from "react";
import SwiperSlider from "./components/swiper/swiper";
import SwiperCards from "./components/swiper/swiperCards"; 
import AboutUs from "./components/aboutUs/aboutUs";
import Services from "./components/services/services";
import Searching from "./components/searching/searching";
import Counting from "./components/counting/counting";
import Footer from "./components/footer/footer";
import MainSlider from "./components/mainSlider/mainSlider";
import Navbar from "./components/navbar/navbar";

import './main.css'

function Main() {
    const homeRef      = useRef()
    const aboutRef     = useRef()
    const serviceRef   = useRef()
    const customersRef = useRef()
    const contactRef   = useRef()

    const [bgClass, setBgClass] = useState('slider')
    const [topTop, setToTop] = useState('toTop')

    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 10) {
            setBgClass('slider slider_after_fixed')
          }else{
            setBgClass('slider')
          }

          if (window.scrollY > 800) {
            setToTop('toTop topActive')
          }else{
            setToTop('toTop')
          }

    });
   
    const refScroll = (refname) => {
        refname.current?.scrollIntoView({behavior: 'smooth'});
    };
    

    return(
        <div className='App'>

            <div ref={homeRef}>
                <Navbar homeRefScroll={()=> refScroll(homeRef)}
                        aboutRefScroll={()=> refScroll(aboutRef)}
                        serviceRefScroll={()=> refScroll(serviceRef)}
                        customersRefScroll={()=> refScroll(customersRef)}
                        contactRefScroll={()=> refScroll(contactRef)}
                />
            </div>

            <div className={topTop} onClick={()=>refScroll(homeRef)}>
            <svg  className="toTop_svg"  viewBox="0 0 24 24" version="1.1">
                <title>arrow-up</title>
                <desc>Created with sketchtool.</desc>
                <g id="directional">
                    <g id="arrow-up">
                        <polygon id="Shape" points="4 15 12 7 20 15 18 17 12 11 6 17"></polygon>
                    </g>
                </g>
            </svg>
            </div>

            {/* სლაიდერი */}
            <MainSlider bgClass={bgClass} refScroll={()=> refScroll(serviceRef)}/>
    
            {/* about სექცია */}
            <div ref={aboutRef}>
                <AboutUs refScroll={()=> refScroll(customersRef)}/>
            </div>
           
            {/* სერვისები */}
            <div ref={serviceRef}>
                <Services />
            </div>
            
            {/* სერჩინგი */}
            <Searching refScroll={()=> refScroll(contactRef)}/>

            {/*ციფრების თვლა*/}
            <Counting />

            {/* compnay swiper */}
            <div className="compnay_swiper">
                <SwiperSlider />
            </div>

            {/* რევიუს დივი */}
            <div className="slider2" ref={customersRef}>
            <SwiperCards />
            </div>
            
            {/* ფუტერი */}
            <div ref={contactRef}>
                <Footer />
            </div>

            <div className="all_rights">
                <p>© 2022 nexus logistic</p>
            </div>

        </div>
    )
}

export default Main;


