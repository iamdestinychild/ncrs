"use client";
import styles from "../../public/styling/hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Swiper
        slidesPerView={1}
      >
        <SwiperSlide className="bg-secondary w-full h-full"></SwiperSlide>
        <SwiperSlide className="bg-primary w-full h-full"></SwiperSlide>
        <SwiperSlide className="bg-primary w-full h-full"></SwiperSlide>
      </Swiper>
    </div>
  );
}
