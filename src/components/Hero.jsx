"use client";
import Image from "next/image";
import styles from "../../public/styling/hero.module.css";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {

  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipe: false,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
  }
  return (
    <div className={styles.hero}>
      <Slider {...settings} className={`${styles.hero_inner}`}>
        <div className={styles.hero_slide}>
          <Image src='/images/hero-1.jpg' className={styles.hero_slide_banner} alt="image" fill/>
          <div className={styles.hero_slide_blur}></div>
          <div className={styles.hero_slide_content}>
              <div className={styles.dash}></div>
              <h1 className={styles.heading_one}>National Centre for Remote Sensing</h1>
              <h1 className={styles.heading_two}>Nigeria’s Geospatial Centre of Excellence</h1>
            <p className={styles.paragraph}>Championing geospatial innovation and excellence, we Undertaking pure and applied research and development for national economic growth and development</p>
            <Link  className={styles.link} href="/services">Learn More</Link>
          </div>
        </div>
        <div className={styles.hero_slide}>
          <Image src='/images/hero-2.jpg' className={styles.hero_slide_banner} alt="image" fill/>
          <div className={styles.hero_slide_blur}></div>
          <div className={styles.hero_slide_content}>
              <div className={styles.dash}></div>
              <h1 className={styles.heading_one}>National Centre for Remote Sensing</h1>
              <h1 className={styles.heading_two}>Transforming Data into Actionable Insights for National Growth.</h1>
            <p className={styles.paragraph}>Leverage Remote Sensing and GIS to convert vast datasets into actionable insights, driving informed decisions.</p>
            <Link  className={styles.link} href="/services">Learn More</Link>
          </div>
        </div>
        <div className={styles.hero_slide}>
          <Image src='/images/hero-3.jpg' className={styles.hero_slide_banner} alt="image" fill/>
          <div className={`${styles.hero_slide_blur} !opacity-[0.7]`}></div>
          <div className={styles.hero_slide_content}>
              <div className={styles.dash}></div>
              <h1 className={styles.heading_one}>National Centre for Remote Sensing</h1>
              <h1 className={styles.heading_two}>Fostering Innovation in Remote Sensing and Geographic Information System Technologies</h1>
            <Link  className={styles.link} href="/services">Learn More</Link>
          </div>
        </div>
     </Slider>
    </div>
  );
}
