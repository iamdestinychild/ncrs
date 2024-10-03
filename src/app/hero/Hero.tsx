"use client"

import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hero(){

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 7000, // Auto-scroll speed in milliseconds
  };

  return (
    <>
    <div className={styles.web_hero}>
    <Slider {...settings} className={styles.web_hero_inner}>

      <div className={styles.web_hero_slide}>
          <div className={styles.web_hero_slide_banner}>
            <Image src='/img/hero-1.jpg' alt='image' className={styles.web_hero_slide_banner_img} fill/>
            <div className={styles.web_hero_slide_shade}></div>
          </div>
          <div className={styles.web_hero_slide_content}>
              <div className={styles.web_line_block}></div>
              <p className={styles.web_hero_text_one}>Here at NCRS</p> 
              <h1 className={styles.web_hero_text_two}>We bring to life the future of geography</h1>
              <p className={styles.web_hero_text_three}>The project aims to design and develop a comprehensive website for the National Center for Remote Sensing (NCRS) along with a consultancy subdomain.</p>   
          </div>
      </div>



    <div className={styles.web_hero_slide}>
      <div className={styles.web_hero_slide_banner}>
        <Image src='/img/hero-2.jpg' alt='image' className={styles.web_hero_slide_banner_img} fill/>
        <div className={styles.web_hero_slide_shade}></div>
      </div>
      <div className={styles.web_hero_slide_two_content}>
          {/* <div className={styles.web_line_block}></div> */}
          <h1 className={styles.web_hero_slide_two_text}>We offer state of the art information on Remote Sensory information.</h1>
      </div>
    </div>



    <div className={styles.web_hero_slide}>
      <div className={styles.web_hero_slide_banner}>
        <Image src='/img/hero-3.jpg' alt='image' className={styles.web_hero_slide_banner_img} fill/>
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
              <Image src='/img/hero-1.jpg' alt='image' className={styles.mobile_hero_slide_banner_img} fill/>
              <div className={styles.mobile_hero_slide_shade}></div>
            </div>
            <div className={styles.mobile_hero_slide_content}>
                <div className={styles.line_block}></div>
                <h1>Here at NCRS We bring to life the future of geography</h1>
            </div>
          </div>

      

          <div className={styles.mobile_hero_slide}>
            <div className={styles.mobile_hero_slide_banner}>
              <Image src='/img/hero-2.jpg' alt='image' className={styles.mobile_hero_slide_banner_img} fill/>
              <div className={styles.mobile_hero_slide_shade}></div>
            </div>
            <div className={styles.mobile_hero_slide_content}>
                <div className={styles.line_block}></div>
                <h1>We offer state of the art information on Remote Sensory information.</h1>
            </div>
          </div>

      

          <div className={styles.mobile_hero_slide}>
            <div className={styles.mobile_hero_slide_banner}>
              <Image src='/img/hero-3.jpg' alt='image' className={styles.mobile_hero_slide_banner_img} fill/>
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