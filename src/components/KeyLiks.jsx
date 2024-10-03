"use client";
import Users from "/public/icons/Users";
import Download from "/public/icons/download";
import Contact from "/public/icons/Contact";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "/public/styling/keylinks.module.css";

export default function KeyLink() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
    {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.keylink}>
      <h1 className={styles.keylink_heading}>KeyLinks</h1>
      <Slider {...settings} className={styles.keylink_slider}>
        <div className={styles.keylink_slide}>
          <div className={styles.keylink_slide_inner}>
            <div className={styles.icon_container}>
              <Users customStyle={styles.icon} />
            </div>
            <div className={styles.keylink_slide_content}>
              <p>Leadership</p>
              <h1>Meet our Management</h1>
            </div>
          </div>
        </div>
        <div className={styles.keylink_slide}>
          <div className={styles.keylink_slide_inner}>
            <div className={styles.icon_container}>
              <Download customStyle={styles.icon} />
            </div>
            <div className={styles.keylink_slide_content}>
              <p>Downloads</p>
              <h1>Downloadable Resources</h1>
            </div>
          </div>
        </div>
        <div className={styles.keylink_slide}>
          <div className={styles.keylink_slide_inner}>
            <div className={styles.icon_container}>
              <Contact customStyle={styles.icon} />
            </div>
            <div className={styles.keylink_slide_content}>
              <p>Contact</p>
              <h1>Get in Touch with us</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}