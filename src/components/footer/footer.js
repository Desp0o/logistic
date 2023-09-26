import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
        <div className="footer">
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
                        <a href='https://www.facebook.com/profile.php?id=100087955494800'target='_blank' rel="noopener noreferrer">
                        <svg className="social_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

  )
}
