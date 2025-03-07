"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { Cancel, Prev, Next } from "../IconsPalette";

export default function GalleryShowCard({ image, index, title, slideMap, galleryState }) {
    const [currentImg, setCurrentImg] = useState(image);
    const [currentValue, setCurrentValue] = useState(index);
    const [currentTitle, setCurrentTitle] = useState(title);

    const showGallery = () => {
        galleryState(false);
        document.body.classList.remove("no-scroll");
    };

    const next = () => {
        setCurrentValue((prevValue) => {
            const newValue = prevValue + 1;
            if (newValue < slideMap.length) {
                setCurrentImg(slideMap[newValue].file_url);
                setCurrentTitle(slideMap[newValue].title); 
                return newValue;
            }
            return prevValue;
        });
    };

    const prev = () => {
        setCurrentValue((prevValue) => {
            const newValue = prevValue - 1;
            if (newValue >= 0) {
                setCurrentImg(slideMap[newValue].file_url); 
                setCurrentTitle(slideMap[newValue].title);
                return newValue;
            }
            return prevValue;
        });
    };

    return (
        <main className={styles.gallery_card_cover}>
            <div className={styles.gallery_card_container}>
                <div onClick={showGallery} className={styles.cancel}>
                    <Cancel iconStyle={styles.icon_cancel} />
                </div>
                <div className={styles.gallery_card}>
                    <div className={styles.gallery_card_banner_cover} style={{ position: "relative" }}>
                        <Image src={currentImg} alt={currentTitle} className={styles.gallery_card_banner} fill />
                        <div className={styles.details}>
                            <div className={styles.details_blur}></div>
                            <h1>{currentTitle}</h1>
                        </div>
                    </div>
                </div>
                <div className={styles.gallery_card_pagination}>
                    <div onClick={prev}>
                        <Prev iconStyle={styles.icon_prev} />
                    </div>
                    <div onClick={next}>
                        <Next iconStyle={styles.icon_next} />
                    </div>
                </div>
            </div>
        </main>
    );
}
