import {React, useRef, useState, useEffect} from "react";
import Fade from 'react-reveal/Fade';
import CountUp, { useCountUp } from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

import './main.css'
import './searching.css'
import './Counting_numbers.css'
import './swiper.css'
import './aboutUs.css'
import './services.css'
import './footer.css'

import SwiperSlider from "./swiper";
import SwiperCards from "./swiperCards"; 

import clock from './images/clock.png'
import logo  from './images/logo.png'
import xmark from './images/xmark.svg'
import bars from './images/bars.svg'
import bg1 from './images/bg1.jpg'
import mainbg from './images/bgMain.jfif'
import boxturck from './images/boxtruck.png'

const textArr = [
    {
       id:1,
       image: `${mainbg}`,
       key: 'a',
       smallText:'we delivery faster',
       header1: 'we help to',
       header2: 'deliver your load'
    },
  
    {
        id:2,
        key: 'a1',
        image: `${boxturck}`,
        smallText:'we search loads for you',
        header1: 'we help to grow',
        header2: 'your bussines'
    }
  ]

function Main() {
    const navRef       = useRef()
    const homeRef      = useRef()
    const aboutRef     = useRef()
    const serviceRef   = useRef()
    const customersRef = useRef()
    const contactRef   = useRef()

    
    const [appClass, setAppClass] = useState('App overflow_hidden')
    const [loader, setLoader] = useState('loader')
    const [burgerLogo, setBurgerLogo] = useState(bars)
    const [isActive, setIsActive] = useState(false)
    const [dashboard, setDashboard] = useState('dashboard')
    const [navbarClass, setNavbarClass] = useState('navbar')
    const [bgClass, setBgClass] = useState('slider')
    const [topTop, setToTop] = useState('toTop')

    useEffect(()=>{
        const Loadtimer = setTimeout(() => {
            setAppClass('App')
            setLoader('loader no_loader')
        }, 0);

        return ()=>{
            clearTimeout(Loadtimer)
        }
    },[])
    
    function handleClicl(){
        if(!isActive){
            setBurgerLogo(xmark)
            setIsActive(true)
            setDashboard('dashboard dashboard_Active')
        }else{
            setBurgerLogo(bars)
            setIsActive(false)
            setDashboard('dashboard')
        }
    }

    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 10) {
            setNavbarClass('navbar navbar_fixed') 
            setBgClass('slider slider_after_fixed')
          }else{
            setNavbarClass('navbar') 
            setBgClass('slider')
          }

          if (window.scrollY > 800) {
            setToTop('toTop topActive')
          }else{
            setToTop('toTop')
          }

    });
    

    //სოციალური ქსელების ლინკი
    const socialLink = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
   
    //ჩასქროლვა მითითებულ დივთან
    const refScroll = (refname) => {
        refname.current?.scrollIntoView({behavior: 'smooth'});
      };

    //   სლაიდერის ფუნქციონალი
    const [index, setIndex] = useState(0)
    const slideLength = textArr.length 

    useEffect(()=>{
    
        const textTimer = setInterval(()=>{
          if(index === slideLength-1){
            setIndex(0)
          }else{
            setIndex(index+1)
          }
          
        },7000)
  
        return ()=>{
          clearInterval(textTimer)
        }
       },[index])

    return(
        <div className={appClass}>

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


            {/* ****************************************************************************** */}
            {/* ზედა ფიქსირებული სექცია */}
            <div className="top_section" ref={homeRef}>
                <div className="top_section_left">
                    <img className="top_section_left_icon" src={clock} alt="nexus logistic icon"/>
                    <p className="top_section_left_txt">MON - SUN: 24 HOURS</p>
                </div>

                <div className="top_section_right">
                   <span className="svgClass" onClick={()=>socialLink('https://www.facebook.com/profile.php?id=100087955494800')}> <svg className="top_section_right_facebook_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 
                    225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></span>
                    <p className="top_section_right_txt">+1 (213) 785-7673</p>
                </div>
            </div>
             
            
            {/* ****************************************************************************** */}
            {/* ნავიგაცია */}
            <div className={navbarClass} ref={navRef}>
                <div className="navbar_left">
                    <img className="navbar_logo" src={logo} alt="teamofnexus logo" onClick={()=> refScroll(homeRef)}/>
                    <h3 onClick={()=> refScroll(homeRef)}>Nexus Logistics LLC</h3>
                </div>

                <div className="navbar_right">
                    <ul>
                        <li className="navbar_links links_underline" onClick={()=> refScroll(homeRef)}>home</li>
                        <li className="navbar_links links_underline" onClick={()=> refScroll(aboutRef)}>about us</li>
                        <li className="navbar_links links_underline" onClick={()=> refScroll(serviceRef)}>service</li>
                        <li className="navbar_links links_underline" onClick={()=> refScroll(customersRef)}>customers</li>
                        <li className="navbar_links links_underline" onClick={()=> refScroll(contactRef)}>contact</li>
                    </ul>
                </div>

                <div className="burger_menu" onClick={handleClicl}>
                    <img className="burger_menu_icon" src={burgerLogo} alt="teamofnexus" />
                </div>
            </div>

            <div className={dashboard} onClick={()=>handleClicl()}>
                    <ul>
                        <li className="navbar_links" onClick={()=> refScroll(homeRef)}>home</li>
                        <li className="navbar_links" onClick={()=> refScroll(aboutRef)}>about us</li>
                        <li className="navbar_links" onClick={()=> refScroll(serviceRef)}>service</li>
                        <li className="navbar_links" onClick={()=> refScroll(customersRef)}>customers</li>
                        <li className="navbar_links" onClick={()=> refScroll(contactRef)}>contact</li>
                    </ul>
            </div>


            {/* ****************************************************************************** */}
            {/* სლაიდერი */}
            <div className={bgClass}>
                {textArr.map((text, slideIndex, imgKey)=>{

                    let textDiv = 'textslider'
                    let text1 = 'line_smallH'
                    let text2 = 'header1'
                    let text3 = 'header2'
                    let sliderBtn = 'slider_btn'
                    let sliderimg = 'sliderIMG'

                        {index === slideIndex  ? textDiv = 'textslider actived' : textDiv = 'textslider'}
                        {index === slideIndex  ? text1 = 'line_smallH animation1' : text1 = 'line_smallH'}
                        {index === slideIndex  ? text2 = 'header1 animation2' : text2 = 'header1'}
                        {index === slideIndex  ? text3 = 'header2 animation3' : text3 = 'header2'}
                        {index === slideIndex  ? sliderBtn = 'slider_btn animation4' : sliderBtn = 'slider_btn'}
                        {index === slideIndex  ? sliderimg = 'sliderIMG sliderIMG_active' : sliderBtn = 'sliderIMG'}


                        if(index===1){
                        sliderimg = 'sliderIMG sliderIMG_active slider_pos'
                        }
                            return(
                            <>
                            <img className={sliderimg} src={text.image} key={imgKey} alt="teamofnexus"/>
                                <div className={textDiv} key={text.id}>
                                    {/* ხაზი და ტექსტი */}
                                    <div className={text1}>
                                        <div className="slider_line"></div>
                                        <p className="slider_small_text">{text.smallText}</p>
                                    </div>

                                    {/*დიდი სათაური*/}
                                    <div className="slider_headers">
                                        <h1 className={text2}>{text.header1}</h1>
                                        <h1 className={text3}>{text.header2}</h1>
                                    </div>


                                    <div className={sliderBtn} onClick={()=> refScroll(serviceRef)}>
                                        <p>our service</p>
                                    </div>
                                </div>
                                </>
                            )


                            })}
            </div>


            {/* ****************************************************************************** */}
            {/* about სექცია */}
            <div className="what_we_do" ref={aboutRef}>
                <div className="what_we_do_overlap">

                    <div className="what_we_do_overlap_left">
                        <img src={bg1} alt="teamofnexus car"/>
                    </div>

                    <div className="what_we_do_overlap_right">
                            <div className="overlap_header">
                                <div className="line"></div>
                                <p>About Us</p>
                            </div>

                            <div className="overlap_txt1">
                                <h1>What we do?</h1>
                            </div>

                            <div className="overlap_txt2">
                                <p>
                                Nexus Logistics LLC is a 24/7 delivery/dispatching/carrier company. We offer the following services: 
                            <b>Recovery Trucks , Best Insurance, Brand New Cars, Experienced Drivers, Live Tracking System, Load Monitoring...</b>
                                </p>
                            </div>

                            <div className="overlap_txt3">
                                <p>
                                We deliver everything on time, our dispatchers work 24/7 to provide information anytime. We have more than 2.5+ years of experience working as a carrier company.
                                Company's priorities are our clients and brokers to feel safe while working with us.
                                </p>
                            </div>

                            <div className="overlap_btn" onClick={()=> refScroll(customersRef)}>
                                <p>happy customers</p>
                            </div>
                    </div>
                </div>

            </div>


            {/* ****************************************************************************** */}
            {/* სერვისები */}
            <div className="services" ref={serviceRef}>
                <div className="service_textes">
                    <div className="service_line_header">
                        <div className="service_line"></div>
                        <p>WHAT WE DO?</p>
                    </div>

                    <h2 className="service_big_header">Our Services</h2>
                    </div>

                <div className="service_cards_section">

                    <Fade left><div className="service_card">
                        <div className="service_card_inner">
                        <svg className="service_icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"/></svg>

                            <p className="card_txt1">24/7 Delivery</p>

                            <p className="card_txt2">We can deliver your product at the best price. We guarantee your delivery with the best insurance companies</p>
                        </div>
                    </div></Fade>

                    <Fade delay={200}><div className="service_card">
                        <div className="service_card_inner">
                        <svg
                        className="service_icons" version="1.1"  viewBox="0 0 32 32">
                            

                            <path  className="puchipuchi_een" d="M30.291,2.87l-9.581,25.26c-0.39,1.029-1.346,1.234-2.123,0.456c0,0-6.036-6.036-6.586-6.586
                                s-0.359-1.631,0.425-2.403l13.316-13.11c0.784-0.772,0.711-0.856-0.163-0.187L10.588,17.784c-0.873,0.669-2.224,0.58-3.002-0.198
                                l-4.172-4.172c-0.778-0.778-0.573-1.733,0.456-2.124l25.26-9.581C30.159,1.319,30.681,1.841,30.291,2.87z M8.707,20.121
                                C8.318,19.732,8,19.864,8,20.414V25c0,0.55,0.386,0.768,0.857,0.485l2.401-1.441c0.472-0.283,0.539-0.833,0.15-1.222L8.707,20.121z"
                                />
                            </svg>

                            <p className="card_txt1">Dispatching Service</p>

                            <p className="card_txt2">The team full of dispatchers are searching for the new loads on various different platforms</p>
                        </div>
                    </div></Fade>

                    <Fade right><div className="service_card">
                        <div className="service_card_inner">
                        <svg className="service_icons" version="1.1" 
	                                            viewBox="0 0 512 512"  >
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path d="M296.661,414.012c-10.65,0-23.142,12.254-27.699,23.253c-3.558,8.593-2.5,16.614,2.91,22.016
                                                                c5.094,5.094,12.655,8.021,20.745,8.021c8.09,0,15.65-2.927,20.753-8.021c5.666-5.666,7.049-13.995,3.891-23.441
                                                                c-2.125-6.383-6.34-13.133-11.255-18.048C303.565,415.352,300.254,414.012,296.661,414.012z M301.303,447.206
                                                                c-3.789,3.789-13.636,3.686-17.323,0.102c-0.12-0.367-0.111-2.5,2.15-6.238c2.944-4.864,7.1-8.294,9.353-9.515
                                                                c2.423,2.876,4.523,6.477,5.589,9.677C302.02,444.058,302.106,446.413,301.303,447.206z"/>
                                                            <path d="M85.069,215.381c3.405,0,6.622-2.048,7.945-5.41c1.732-4.386-0.427-9.344-4.813-11.068
                                                                c-21.973-8.653-39.535-26.223-48.179-48.196c-1.715-4.386-6.656-6.545-11.059-4.821c-4.386,1.724-6.545,6.682-4.821,11.068
                                                                c10.368,26.359,31.437,47.445,57.805,57.83C82.978,215.185,84.036,215.381,85.069,215.381z"/>
                                                            <path d="M392.499,294.571c-2.466,0.708-5.837,1.673-6.733,1.741c-11.793,0-19.268,9.131-24.721,15.795
                                                                c-2.091,2.551-6.135,7.296-8.243,7.177c-3.857-1.929-7.919-2.901-12.049-2.901c-10.061,0-18.773,5.982-20.719,14.242
                                                                c-1.374,5.803,0.648,13.756,10.419,18.637c13.858,6.929,28.186,14.089,34.56,20.463c4.386,4.386,11.972,6.903,20.821,6.903
                                                                c13.44,0,31.309-6.528,37.444-24.943c2.424-7.253,8.218-12.8,13.824-18.159c6.502-6.229,12.655-12.109,12.74-20.557
                                                                c0.06-4.983-2.15-9.745-6.554-14.157c-5.999-5.99-14.165-9.037-24.286-9.037C409.293,289.775,399.582,292.548,392.499,294.571z
                                                                M432.777,312.738c-0.401,1.681-4.651,5.751-7.475,8.457c-6.443,6.161-14.455,13.833-18.21,25.096
                                                                c-4.215,12.638-18.449,13.269-21.257,13.269c-4.975,0-8.098-1.314-8.747-1.894c-8.346-8.346-23.236-15.787-39.006-23.671
                                                                c-0.034-0.017-0.06-0.026-0.094-0.043c1.604-0.649,4.574-0.7,7.185,0.597c2.756,1.382,5.581,2.082,8.405,2.082
                                                                c9.446,0,15.411-7.287,20.668-13.713c3.849-4.685,7.808-9.54,11.52-9.54c3.029,0,6.554-0.998,11.418-2.398
                                                                c6.46-1.843,14.498-4.139,21.82-4.139c5.504,0,9.498,1.323,12.211,4.036C432.401,312.073,432.717,312.738,432.777,312.738z"/>
                                                            <path d="M110.942,187.153l0.008,43.247c0,4.71,3.823,8.533,8.533,8.533c4.71,0,8.533-3.823,8.533-8.533l-0.009-43.247
                                                                c30.814-3.874,55.27-28.339,59.136-59.153H230.4c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533h-43.255
                                                                C183.27,80.119,158.814,55.671,128,51.797V8.533C128,3.823,124.177,0,119.467,0s-8.533,3.823-8.533,8.533v43.264
                                                                c-30.814,3.874-55.27,28.322-59.145,59.136H8.533c-4.71,0-8.533,3.823-8.533,8.533S3.823,128,8.533,128h43.255
                                                                C55.654,158.822,80.119,183.287,110.942,187.153z M119.467,68.275c28.237,0,51.2,22.963,51.2,51.2
                                                                c0,28.22-22.946,51.174-51.157,51.2c-0.017,0-0.026-0.009-0.034-0.009c-0.017,0-0.017,0.009-0.034,0.009
                                                                c-28.228-0.017-51.174-22.972-51.174-51.2C68.267,91.238,91.23,68.275,119.467,68.275z"/>
                                                            <path d="M509.884,259.43c-0.648-4.676-5.018-7.927-9.617-7.287c-4.668,0.649-7.936,4.958-7.287,9.626
                                                                c1.297,9.378,1.954,18.927,1.954,28.365c0,112.111-90.539,203.46-202.342,204.792c-30.345-19.388-58.786-43.128-46.114-72.687
                                                                c22.75-53.103,1.579-72.892-7.467-81.357l-1.698-1.613c-2.586-2.577-5.504-4.326-8.073-5.879
                                                                c-6.246-3.746-7.927-4.753-4.574-14.814c2.219-6.682,5.171-9.796,8.576-13.406c7.893-8.346,13.926-16.649,13.926-40.781
                                                                c0-14.046-7.125-25.25-19.55-30.737c-14.089-6.238-32.905-4.036-42.854,5.001c-6.212,5.649-8.303,13.338-5.726,21.077
                                                                c6.084,18.219-7.817,44.553-33.792,64.034c-6.878,5.154-8.934,2.79-10.155,1.382c-7.62-8.781-7.031-33.749-0.776-40.004
                                                                c4.19-4.19,5.436-9.54,3.328-14.31c-6.912-15.676-51.012-14.473-59.75-14.054c-0.358,0.017-0.657,0.196-0.998,0.256
                                                                c-0.529,0.085-1.024,0.196-1.527,0.375c-0.58,0.222-1.092,0.486-1.596,0.819c-0.41,0.256-0.777,0.512-1.135,0.836
                                                                c-0.452,0.41-0.819,0.853-1.178,1.348c-0.299,0.41-0.555,0.811-0.777,1.271c-0.256,0.529-0.418,1.075-0.563,1.664
                                                                c-0.077,0.324-0.265,0.58-0.307,0.913c-1.084,8.823-1.545,16.563-1.545,25.873c0,102.315,69.282,190.882,168.474,215.39
                                                                c0.683,0.171,1.374,0.256,2.048,0.256c3.831,0,7.322-2.603,8.277-6.494c1.135-4.574-1.664-9.199-6.238-10.325
                                                                C149.274,466.338,85.333,384.572,85.333,290.133c0-5.914,0.222-11.145,0.674-16.469c14.396-0.051,26.692,1.638,32.939,3.55
                                                                c-9.788,15.283-8.713,45.329,3.251,59.119c8.576,9.882,21.018,10.291,33.289,1.084c32.776-24.585,48.384-57.208,39.74-83.081
                                                                c-0.273-0.845-0.546-1.638,1.024-3.063c4.48-4.079,15.915-5.803,24.465-2.014c6.315,2.79,9.387,7.74,9.387,15.13
                                                                c0,19.26-3.883,23.373-9.259,29.056c-3.985,4.224-8.951,9.472-12.373,19.738c-7.672,23.049,4.634,30.438,11.989,34.85
                                                                c1.903,1.143,3.695,2.219,4.787,3.302c0.623,0.623,1.331,1.289,2.108,2.014c7.501,7.023,21.47,20.079,3.439,62.157
                                                                c-20.446,47.71,32.273,80.973,54.784,95.181c1.365,0.853,2.944,1.314,4.557,1.314C412.467,512,512,412.476,512,290.133
                                                                C512,279.91,511.283,269.585,509.884,259.43z"/>
                                                            <path d="M244.642,91.452c14.481-3.789,36.25-6.118,45.491-6.118c14.49,0,28.894,1.51,42.923,4.506
                                                                c-0.307,12.279,4.992,20.702,8.405,26.112c0.939,1.502,2.236,3.55,2.389,3.831c0,30.609-6.263,35.584-6.187,35.61
                                                                c-13.833,0-36.531,12.348-45.065,28.279c-5.24,9.779-4.813,20.113,1.186,29.124c4.113,6.17,7.654,13.03,11.085,19.669
                                                                c7.253,14.046,15.3,29.628,27.93,29.628c2.68,0,5.564-0.7,8.687-2.261c9.95-4.975,17.084-19.115,23.979-32.794
                                                                c3.038-6.025,7.501-14.865,10.146-17.673c8.661,1.178,12.894,9.011,18.62,21.419c4.215,9.131,8.576,18.56,17.135,22.844
                                                                c14.43,7.202,61.85-0.341,88.055-11.469c0.35-0.145,0.589-0.435,0.913-0.623c0.503-0.299,0.981-0.58,1.408-0.964
                                                                c0.41-0.367,0.725-0.785,1.05-1.22c0.333-0.435,0.64-0.862,0.879-1.348c0.247-0.495,0.384-0.998,0.521-1.536
                                                                c0.145-0.529,0.273-1.033,0.316-1.579c0.034-0.563-0.034-1.118-0.119-1.698c-0.043-0.375,0.034-0.734-0.068-1.109
                                                                c-17.911-66.219-66.56-121.301-130.15-147.337c-4.369-1.783-9.353,0.299-11.136,4.659c-1.784,4.361,0.307,9.344,4.668,11.127
                                                                c56.311,23.066,99.874,70.835,117.922,128.649c-26.547,9.344-60.57,12.177-66.62,9.182c-3.209-1.604-6.434-8.576-9.276-14.729
                                                                c-5.948-12.885-14.097-30.532-34.901-31.454c-10.786-0.512-16.811,11.725-24.602,27.179
                                                                c-4.574,9.062-11.477,22.767-16.981,25.472c-3.166-0.751-9.455-12.928-13.21-20.198c-3.473-6.724-7.407-14.345-12.049-21.299
                                                                c-2.517-3.772-2.62-7.356-0.341-11.605c5.862-10.94,23.45-19.268,30.02-19.268c15.428,0,23.253-17.724,23.253-52.676
                                                                c0-4.966-2.552-9.011-5.018-12.919c-3.61-5.734-7.339-11.665-5.129-21.786c0.981-4.497-1.783-8.96-6.246-10.095
                                                                c-17.673-4.454-35.977-6.716-54.391-6.716c-11.503,0-34.79,2.739-49.809,6.682c-4.565,1.195-7.287,5.854-6.093,10.411
                                                                C235.426,89.916,240.085,92.672,244.642,91.452z"/>
                                                            <path d="M119.467,153.609c18.825,0,34.133-15.309,34.133-34.133s-15.309-34.133-34.133-34.133s-34.133,15.309-34.133,34.133
                                                                S100.642,153.609,119.467,153.609z M119.467,102.409c9.412,0,17.067,7.654,17.067,17.067c0,9.412-7.654,17.067-17.067,17.067
                                                                s-17.067-7.654-17.067-17.067C102.4,110.063,110.054,102.409,119.467,102.409z"/>
                                                            <path d="M199.031,150.4c-8.602,22.101-26.189,39.774-48.247,48.478c-4.386,1.732-6.536,6.69-4.804,11.076
                                                                c1.323,3.354,4.54,5.402,7.945,5.402c1.041,0,2.099-0.196,3.123-0.597c26.47-10.453,47.565-31.65,57.89-58.172
                                                                c1.707-4.395-0.469-9.344-4.855-11.051C205.688,143.821,200.738,146.005,199.031,150.4z"/>
                                                            <path d="M28.979,92.971c1.033,0.401,2.091,0.597,3.132,0.597c3.405,0,6.622-2.048,7.945-5.402
                                                                c8.627-21.854,26.095-39.364,47.932-48.034c4.386-1.741,6.528-6.699,4.787-11.085c-1.732-4.369-6.699-6.511-11.085-4.779
                                                                C55.484,34.671,34.526,55.68,24.175,81.903C22.451,86.289,24.602,91.238,28.979,92.971z"/>
                                                            <path d="M150.929,40.132c22.016,8.73,39.552,26.402,48.119,48.478c1.306,3.379,4.531,5.453,7.953,5.453
                                                                c1.024,0,2.065-0.188,3.089-0.58c4.386-1.707,6.571-6.647,4.864-11.042c-10.274-26.487-31.317-47.693-57.719-58.18
                                                                c-4.403-1.741-9.344,0.41-11.085,4.787C144.41,33.434,146.551,38.391,150.929,40.132z"/>
                                                        </g>
                                                    </g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g>
                                                <g>
                                                </g></svg>


                            <p className="card_txt1">24/7 Tracking System</p>

                            <p className="card_txt2">Our automated trucking system will help you check on your delivery status anytime</p>
                        </div>
                    </div></Fade>
                </div>
            </div>
            

            {/* ****************************************************************************** */}
            {/* სერჩინგი */}
            <div className="searching">
                <div className="searching_headers">
                    <h2>Are you Searching</h2>
                    <h2>For a Delivery/Dispatching service?</h2>
                </div>

                <div className="search_btn" onClick={()=> refScroll(contactRef)}>
                    <p>Contact Us</p>
                </div>
            </div>


            {/* ****************************************************************************** */}
            {/*ციფრების თვლა*/}
            <div className="counting_numbers">

                <Fade bottom><div className="num_block">
                    <div className="num_block_inner">
                        <p className="number">
                        <CountUp start={0} end={4100} duration={1.5} delay={0.06} suffix={"+"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall={true}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                             </CountUp>    
                        </p>
                        <p className="under_txt">Deliveries</p>
                    </div>
                </div></Fade>

                <Fade bottom delay={200}><div className="num_block">
                    <div className="num_block_inner">
                        <p className="number">
                        <CountUp start={0} end={3800} duration={1.7} delay={0.08} suffix={"+"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall={true}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                             </CountUp>    
                        </p>
                        <p className="under_txt">Happy Clinets</p>
                    </div>
                </div></Fade>

                <Fade bottom delay={300}><div className="num_block">
                    <div className="num_block_inner">
                        <p className="number">
                        <CountUp start={0} end={20} duration={1.9} delay={0.06} suffix={"+"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall={true}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                             </CountUp>    
                        </p>
                        <p className="under_txt">Dispatchers</p>
                    </div>
                </div></Fade>

                <Fade bottom delay={400}><div className="num_block">
                    <div className="num_block_inner">
                        <p className="number">
                        <CountUp start={0} end={200} duration={2.1} delay={0.06} suffix={"+"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall={true}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                             </CountUp>    
                        </p>
                        <p className="under_txt">Drivers</p>
                    </div>
                </div></Fade>
            </div>


            {/* ****************************************************************************** */}
            {/*ციფრების თვლა რესპონსივი*/}
            <div className="counting_numbers_responsive">

                <Fade left><div className="num_block">
                    <div className="num_block_inner">
                        <p className="number">
                        <CountUp start={0} end={4100} duration={1} delay={0.06} suffix={"+"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall={true}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                             </CountUp>    
                        </p>
                        <p className="under_txt">Deliveries</p>
                    </div>
                </div></Fade>

                <Fade right delay={200}><div className="num_block">
                    <div className="num_block_inner">
                        <p className="number">
                        <CountUp start={0} end={3800} duration={1} delay={0.08} suffix={"+"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall={true}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                             </CountUp>    
                        </p>
                        <p className="under_txt">Happy Clinets</p>
                    </div>
                </div></Fade>

                <Fade left delay={300}><div className="num_block">
                    <div className="num_block_inner">
                        <p className="number">
                        <CountUp start={0} end={20} duration={1} delay={0.06} suffix={"+"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall={true}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                             </CountUp>    
                        </p>
                        <p className="under_txt">Dispatchers</p>
                    </div>
                </div></Fade>

                <Fade right delay={400}><div className="num_block">
                    <div className="num_block_inner">
                        <p className="number">
                        <CountUp start={0} end={200} duration={1} delay={0.06} suffix={"+"}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall={true}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                             </CountUp>    
                        </p>
                        <p className="under_txt">Drivers</p>
                    </div>
                </div></Fade>
            </div>


            {/* ****************************************************************************** */}
            {/* compnay swiper */}
            <div className="compnay_swiper">
                <SwiperSlider />
            </div>


            {/* ****************************************************************************** */}
            {/* რევიუს დივი */}
            <div className="slider2" ref={customersRef}>
            <SwiperCards />
            </div>
            

            {/* ****************************************************************************** */}
            {/* ფუტერი */}
            <div className="footer" ref={contactRef}>
                <div className="footer_inner">
                        <div className="footer_block">
                            <p className="block_header">Adress:</p>
                            <p>2060 NESTER ST APT 2B PHILADELPHIA, PA 19115</p>
                        </div>

                        <div className="footer_block">
                            <p className="block_header">Email:</p>
                            <p className="footer_email">Logisticshrnexus@gmail.com</p>
                        </div>

                        <div className="footer_block">
                            <p className="block_header">Number:</p>
                            <p>+1 (213) 785-7673</p>
                        </div>
                </div>

                <div className="footer_social_block">
                    <div className="footer_social">
                        <div className="footer_social_inner">
                            <p>Follow Us On</p>
                            <svg onClick={()=>socialLink('https://www.facebook.com/profile.php?id=100087955494800')} className="social_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="all_rights">
                <p>© 2022 nexus logistic</p>
            </div>

            {/* <div className={loader}>
            <svg className="loader_svg" viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
            <img className="loader_logo" src={loaderLogo} />
            </div> */}

        </div>
    )
}

export default Main;


