import styles from './styles.module.css'
import { useState } from 'react'
import GalleryShowCard from '@/componets/galleryShowCard/gallerycard';
import Image from 'next/image';

interface GalleryProp {
    img: string,
    alt: string,
    index: number
}

export default function GalleryCard({img, alt, index}:GalleryProp){
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

