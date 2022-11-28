import {React, useEffect, useState} from "react";
import './main.css'

const textArr = [
    {
       id:1,
       smallText:'we delivery faster',
       header1: 'we help to',
       header2: 'deliver your load'
    },
  
    {
        id:2,
        smallText:'we search loads for you',
        header1: 'we help to grow',
        header2: 'your bussines'
    }
  ]

function TextSlider() {

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
        <>
        {textArr.map((text, slideIndex)=>{

            let textDiv = 'textslider'
            let text1 = 'line_smallH'
            let text2 = 'header1'
            let text3 = 'header2'
            let sliderBtn = 'slider_btn'
        
            {index === slideIndex  ? textDiv = 'textslider actived' : textDiv = 'textslider'}
            {index === slideIndex  ? text1 = 'line_smallH animation1' : text1 = 'line_smallH'}
            {index === slideIndex  ? text2 = 'header1 animation2' : text2 = 'header1'}
            {index === slideIndex  ? text3 = 'header2 animation3' : text3 = 'header2'}
            {index === slideIndex  ? sliderBtn = 'slider_btn animation4' : sliderBtn = 'slider_btn'}
            
            return(
                <div className={textDiv} key={text.id}>
                    {/* ხაზი და ტექსტი */}
                    <div className={text1}>
                        <div className="slider_line"></div>
                        <p className="slider_small_text">{text.smallText}</p>
                    </div>
        
                    {/*დიდი სათაური*/}
                    <div className="slider_headers">
                        <p className={text2}>{text.header1}</p>
                        <p className={text3}>{text.header2}</p>
                    </div>
        
        
                    <div className={sliderBtn}>
                        <p>our service</p>
                    </div>
                </div>
            )
        
        
        })}
        </>
       )

       

}






export default TextSlider;