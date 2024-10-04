"use client"
import { useState } from "react"
import Image from "next/image"
import styles from './styles.module.css'
import {gallery} from '../../../data'
import { Cancel, Prev, Next } from "../IconsPalette"




export default function GalleryShowCard({image, index, galleryState}){

    const [currentImg, setCurrentImg] = useState(image)
    let [currentValue, setCurrentValue] = useState(index)

    const showGallery = ()=>{
        galleryState(false)
        document.body.style.top = `${window.scrollY}px`
        document.body.classList.remove('no-scroll')
    }

    const next = () => {
        setCurrentValue(prevValue => {
            const newValue = prevValue + 1;
            if (newValue < gallery.length) {
                setCurrentImg(gallery[newValue]);
                return newValue;
            } else {
                return prevValue;
            }
        });
    };
    
    const prev = () => {
        setCurrentValue(prevValue => {
            const newValue = prevValue - 1;
            if (newValue >= 0) {
                setCurrentImg(gallery[newValue]);
                return newValue;
            } else {
                return prevValue;
            }
        });
    };
    
    return(
        <main className={styles.gallery_card_cover}>
            <div className={styles.gallery_card_container}>
                    <div onClick={()=>showGallery()} className={styles.cancel}>
                        <Cancel iconStyle={styles.icon_cancel}/>
                    </div>
                <div className={styles.gallery_card}>
                    <div className={styles.gallery_card_banner_cover}>
                        <Image src={currentImg} alt="image" className={styles.gallery_card_banner} fill/>
                        <div className={styles.details}>
                            <div className={styles.details_blur}></div>
                    <h1>New Development of SAT5 Satellite...</h1>
                </div>
                    </div>
                </div>
            <div className={styles.gallery_card_pagination}>
                <div onClick={()=>prev()}>
                    <Prev iconStyle={styles.icon_prev}/>
                </div>
                <div onClick={()=>next()}>
                    <Next iconStyle={styles.icon_next}/>
                </div>
                </div>
               
            </div>
        </main>
    )
}