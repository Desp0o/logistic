import React from 'react'
import "./searching.css"

export default function Searching({refScroll}) {
  return (
    <div className="searching">
        <div className="searching_headers">
            <h2>Are you Searching</h2>
            <h2>For a Delivery/Dispatching service?</h2>
        </div>

        <div className="search_btn" onClick={refScroll}>
            <p>Contact Us</p>
        </div>
    </div>
  )
}
