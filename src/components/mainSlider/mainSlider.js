import React, {useState, useEffect} from 'react'
import "./mainSlider.css"

import mainbg from '../../images/bgMain.webp'
import boxturck from '../../images/boxtruck.webp'

export default function MainSlider({bgClass, refScroll}) {

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


  return (
    <div className={bgClass}>
        
          {textArr.map((text, slideIndex, imgKey)=>{

              let textDiv = 'textslider'
              let text1 = 'line_smallH'
              let text2 = 'header1'
              let text3 = 'header2'
              let sliderBtn = 'slider_btn'
              let sliderimg = 'sliderIMG'

              index === slideIndex  ? textDiv = 'textslider actived' : textDiv = 'textslider'
              index === slideIndex  ? text1 = 'line_smallH animation1' : text1 = 'line_smallH'
              index === slideIndex  ? text2 = 'header1 animation2' : text2 = 'header1'
              index === slideIndex  ? text3 = 'header2 animation3' : text3 = 'header2'
              index === slideIndex  ? sliderBtn = 'slider_btn animation4' : sliderBtn = 'slider_btn'
              index === slideIndex  ? sliderimg = 'sliderIMG sliderIMG_active' : sliderBtn = 'sliderIMG'
              
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


                          <div className={sliderBtn} onClick={refScroll}>
                              <p>our service</p>
                          </div>
                         
                        
                      </div>
                  </>
                  )
          })}
        
    </div>
  )
}
