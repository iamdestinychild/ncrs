"use client"

import styles from './styles.module.css'
import Image from 'next/image'
import {gallery} from '../../../data'
import { Cancel, Next, Prev } from '@/componets/IconsPalette';
import { useState, useEffect } from 'react';
import GalleryCard from '@/componets/galleryCard/gallerycard';

export default function Gallery(){
    const [imageArray, setImageArray] = useState<string[]>([])
    
    return(
        <main>
             <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>Media</span></p>
                    <p className={styles.heading_two}>Our Visions, Mission and Our Team</p>
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Project Exhibition</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <h1>Gallery</h1>
                    <div className={styles.section_two_cards}>
                        {   
                         Array.isArray(gallery) ? 
                            gallery.map((card, index)=>(
                            <GalleryCard key={index} index={index} img={card} alt={card}/>
                            )):
                            <div></div>
                        }
                    </div>
                    
                </div>
            </section>
        </main>
    )
}

