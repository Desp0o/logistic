import {React, useRef} from "react";

import './main.css'

import clock from './images/clock.png'
import logo  from './images/logo.png'
import sliderIMG from './images/slider_img.webp'

function Main() {
    const navRef = useRef()

    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 500) {
            
          }
    });

    

    return(
        <div style={{width:'100%', height:'100%'}}>

            {/* ზედა ფიქსირებული სექცია */}
            <div className="top_section" ref={navRef}>
                <div className="top_section_left">
                    <img className="top_section_left_icon" src={clock} />
                    <p className="top_section_left_txt">MON - SUN: 24 HOURS</p>
                </div>

                <div className="top_section_right">
                   <span className="svgClass"> <svg className="top_section_right_facebook_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 
                    225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></span>
                    <p className="top_section_right_txt">+1 (847) 861-0035</p>
                </div>
            </div>

            {/* ნავიგაცია */}
            <div className="navbar">
                <div className="navbar_left">
                    <img className="navbar_logo" src={logo} />
                </div>

                <div className="navbar_right">
                    <ul>
                        <li className="navbar_links">home</li>
                        <li className="navbar_links">about us</li>
                        <li className="navbar_links">service</li>
                        <li className="navbar_links">customers</li>
                        <li className="navbar_links">contact</li>
                    </ul>
                </div>
            </div>

            {/* სლაიდერი */}
            <div className="slider">
                <img className="sliderIMG" src={sliderIMG} />
            </div>


            <div style={{height:'250vh'}}></div>
        </div>
    )
}

export default Main;