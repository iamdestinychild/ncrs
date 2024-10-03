"use client"

import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../app/globals.css";


export default function Hero(){

  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipe: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const webSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipe: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  

  return (
    <>
    <div className={styles.web_hero}>
    <Slider {...webSettings} className={styles.web_hero_inner}>

      <div className={styles.web_hero_slide}>
          <div className={styles.web_hero_slide_banner}>
            <Image src='/images/hero-1.jpg' alt='image' className={styles.web_hero_slide_banner_img} fill/>
            <div className={styles.web_hero_slide_shade}></div>
          </div>
          <div className={styles.web_hero_slide_content}>
              <div className={styles.web_line_block}></div>
              <div className={styles.web_hero_text_cover}>
                <p className={styles.web_hero_text_one}>National Centre for Remote Sensing</p> 
                <h1 className={styles.web_hero_text_two}>Nigeria’s Geospatial Centre of Excellence</h1>
                <p className={styles.web_hero_text_three}>Championing geospatial innovation and excellence, we Undertaking pure and applied research and development for national economic growth and development</p>   
              </div>
          </div>
      </div>



    <div className={styles.web_hero_slide}>
      <div className={styles.web_hero_slide_banner}>
        <Image src='/images/hero-2.jpg' alt='image' className={styles.web_hero_slide_banner_img} fill/>
        <div className={styles.web_hero_slide_shade}></div>
      </div>
      <div className={styles.web_hero_slide_two_content}>
              {/* <div className={styles.web_line_block}></div> */}
        <div className={styles.web_hero_text_cover}>
          <h1 className={styles.web_hero_text_two}>Transforming Data into Actionable Insights for National Growth.</h1>
        </div>
      </div>
    </div>



    <div className={styles.web_hero_slide}>
      <div className={styles.web_hero_slide_banner}>
        <Image src='/images/hero-3.jpg' alt='image' className={styles.web_hero_slide_banner_img} fill/>
        <div className={styles.web_hero_slide_shade}></div>
      </div>
      <div className={styles.web_hero_slide_three_content}>
          {/* <div className={styles.web_line_block}></div> */}
          <h1 className={styles.web_hero_slide_three_text}>We are here to guide you on your journey.</h1>
      </div>
    </div>

  </Slider>
    </div>
    
    <div className={styles.mobile_hero}>
      <Slider {...settings} className={styles.mobile_hero_inner}>

        <div className={styles.mobile_hero_slide}>
            <div className={styles.mobile_hero_slide_banner}>
              <Image src='/images/hero-1.jpg' alt='image' className={styles.mobile_hero_slide_banner_img} fill/>
              <div className={styles.mobile_hero_slide_shade}></div>
            </div>
            <div className={styles.mobile_hero_slide_content}>
                <div className={styles.line_block}></div>
                <h1>Here at NCRS We bring to life the future of geography</h1>
            </div>
          </div>

      

          <div className={styles.mobile_hero_slide}>
            <div className={styles.mobile_hero_slide_banner}>
              <Image src='/images/hero-2.jpg' alt='image' className={styles.mobile_hero_slide_banner_img} fill/>
              <div className={styles.mobile_hero_slide_shade}></div>
            </div>
            <div className={styles.mobile_hero_slide_content}>
                <div className={styles.line_block}></div>
                <h1>We offer state of the art information on Remote Sensory information.</h1>
            </div>
          </div>

      

          <div className={styles.mobile_hero_slide}>
            <div className={styles.mobile_hero_slide_banner}>
              <Image src='/images/hero-3.jpg' alt='image' className={styles.mobile_hero_slide_banner_img} fill/>
              <div className={styles.mobile_hero_slide_shade}></div>
            </div>
            <div className={styles.mobile_hero_slide_content}>
                <div className={styles.line_block}></div>
                <h1>We are here to guide you on your journey.</h1>
            </div>
          </div>

      </Slider>
    </div>
    </>
  )
}