import React, {useState} from 'react'

import "./navbar.css"

import logo  from '../../images/logo.webp'
import xmark from '../../images/xmark.webp'
import bars from '../../images/bars.webp'
import user from '../../images/user.webp'
import userDark from '../../images/userDark.webp'

export default function Navbar({homeRefScroll, aboutRefScroll, serviceRefScroll, customersRefScroll, contactRefScroll}) {

    const [burgerLogo, setBurgerLogo] = useState(bars)
    const [isActive, setIsActive] = useState(false)
    const [dashboard, setDashboard] = useState('dashboard')
    const [navbarClass, setNavbarClass] = useState('navbar')

    //სოციალური ქსელების ლინკი
    const socialLink = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    }

    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 10) {
            setNavbarClass('navbar navbar_fixed') 
          }else{
            setNavbarClass('navbar') 
          }

          

    });

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


  return (
    <>
    
            {/* ზედა ფიქსირებული სექცია */}
            <div className="top_section">
                <div className='top_section_inner'>
                    <div className="top_section_left">
                        <div className="user_icon_pad">
                            <img className="top_section_left_icon" src={user} alt="nexus logistic icon" onClick={()=>socialLink('https://track.home.pvt.ge/login')}/>
                        </div>
                        <p className="top_section_left_txt" onClick={()=>socialLink('https://track.home.pvt.ge/login')}>LOG IN</p>
                    </div>

                    <div className="top_section_right">
                    <span className="svgClass" onClick={()=>socialLink('https://www.facebook.com/profile.php?id=100087955494800')}> <svg className="top_section_right_facebook_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 
                        225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></span>
                        <p className="top_section_right_txt">+1 (213) 785-7673</p>
                    </div>
                </div>
            </div>
             
            {/* ნავიგაცია */}
            <div className={navbarClass}>
                <div className='navbar_inner'>
                    <div className="navbar_left">
                        <img className="navbar_logo" src={logo} alt="teamofnexus logo" onClick={homeRefScroll}/>
                        <h3 onClick={homeRefScroll}>Nexus Logistics LLC</h3>
                    </div>

                    <div className="navbar_right">
                        <ul>
                            <li className="navbar_links links_underline" onClick={homeRefScroll}>home</li>
                            <li className="navbar_links links_underline" onClick={aboutRefScroll}>about us</li>
                            <li className="navbar_links links_underline" onClick={serviceRefScroll}>service</li>
                            <li className="navbar_links links_underline" onClick={customersRefScroll}>customers</li>
                            <li className="navbar_links links_underline" onClick={contactRefScroll}>contact</li>
                        </ul>
                    </div>

                    <div className="burger_menu" onClick={handleClicl}>
                        <img className="burger_menu_icon" src={burgerLogo} alt="teamofnexus" />
                    </div>
                </div>
            </div>

            <div className={dashboard} onClick={()=>handleClicl()}>
                    <ul>
                        <li className="navbar_links" onClick={homeRefScroll}>home</li>
                        <li className="navbar_links" onClick={aboutRefScroll}>about us</li>
                        <li className="navbar_links" onClick={serviceRefScroll}>service</li>
                        <li className="navbar_links" onClick={customersRefScroll}>customers</li>
                        <li className="navbar_links" onClick={contactRefScroll}>contact</li>
                        <li className="navbar_links log_in" onClick={()=> socialLink('https://www.facebook.com/profile.php?id=100087955494800')}>
                            <img className="dashboard_user_icon" src={userDark} alt="nexus logistic icon" onClick={()=>socialLink('https://track.home.pvt.ge/login')}/>
                            <p className="top_section_left_txt" onClick={()=>socialLink('https://track.home.pvt.ge/login')}>LOG IN</p>
                        </li>
                    </ul>
            </div>
    </>
  )
}
