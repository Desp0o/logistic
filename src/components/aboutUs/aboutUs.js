import React from 'react'

import bg1 from '../../images/bg1.webp'
import './aboutUs.css'

export default function AboutUs({refScroll}) {
  return (
    <div className="what_we_do">
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

                <div className="overlap_btn" onClick={refScroll}>
                    <p>happy customers</p>
                </div>
            </div>
        </div>
    </div>
  )
}
