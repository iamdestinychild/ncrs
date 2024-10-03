import styles from './styles.module.css'
import { useState } from 'react'
import GalleryShowCard from '../galleryShowCard/gallerycard';
import Image from 'next/image';


export default function GalleryCard({img, alt, index}){
    const [showCard, setShowCard] = useState(false)

    const showGallery = ()=>{
        setShowCard(true)
        document.body.style.top = `-${window.scrollY}px`
        document.body.classList.add('no-scroll')
    }

    return (
        <>
        <div onClick={()=>showGallery()} className={styles.grid_card}>
            <Image src={img} alt={alt} className={styles.grid_card_img} fill/>
        </div>
        {
            showCard && <GalleryShowCard image={img} index={index} galleryState={setShowCard}/>
        }
        </>
    )
}

