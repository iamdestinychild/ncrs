"use client"
import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.css'
import {motion} from "framer-motion"
import {useRef, useEffect, useState} from "react"

export default function ProgramsSlide(){

    const [width, setWidth] = useState(0)
    const cardOuter = useRef(null)

    useEffect(()=>{
      if (cardOuter.current) {
        const scrollWidth = cardOuter.current.scrollWidth;
        const offsetWidth = cardOuter.current.offsetWidth;
        if (scrollWidth !== undefined && offsetWidth !== undefined) {
            setWidth(scrollWidth - offsetWidth);
        }
    }
    },[])

    return(
        <div className={styles.programs}>
        <h1 className={styles.programs_heading}>Recent Research Projects</h1>
        
        <motion.div ref={cardOuter} whileTap={{cursor:"grabbing"}} className={styles.card_outer}>
            <motion.div drag="x" dragConstraints={{right:0, left:-width}} className={styles.programs_cards}>

              <div className={styles.programs_card}>
                <div className={styles.programs_card_banner_cover}>
                  <Image src="/images/blog-slide.jpeg" alt="image" className={styles.programs_card_banner} fill/>
                </div>
                <div className={styles.programs_card_content}>
                  <p className="text-[18px]">Climate Change  Awareness Campaign</p>
                  <div className={styles.programs_card_content_link_cover}>
                    <Link href="#" className={styles.programs_card_content_link}>Learn More</Link>
                  </div>
                </div>
              </div>

              <div className={styles.programs_card}>
                <div className={styles.programs_card_banner_cover}>
                  <Image src="/images/blog-slide.jpeg" alt="image" className={styles.programs_card_banner} fill/>
                </div>
                <div className={styles.programs_card_content}>
                  <p className="text-[18px]">Climate Change  Awareness Campaign</p>
                  <div className={styles.programs_card_content_link_cover}>
                    <Link href="#" className={styles.programs_card_content_link}>Learn More</Link>
                  </div>
                </div>
              </div>

              <div className={styles.programs_card}>
                <div className={styles.programs_card_banner_cover}>
                  <Image src="/images/slide-02.jpg" alt="image" className={styles.programs_card_banner} fill/>
                </div>
                <div className={styles.programs_card_content}>
                  <p className="text-[18px]">Climate Change  Awareness Campaign</p>
                  <div className={styles.programs_card_content_link_cover}>
                    <Link href="#" className={styles.programs_card_content_link}>Learn More</Link>
                  </div>
                </div>
              </div>

              <div className={styles.programs_card}>
                <div className={styles.programs_card_banner_cover}>
                  <Image src="/images/slide-02.jpg" alt="image" className={styles.programs_card_banner} fill/>
                </div>
                <div className={styles.programs_card_content}>
                  <p className="text-[18px]">Climate Change  Awareness Campaign</p>
                  <div className={styles.programs_card_content_link_cover}>
                    <Link href="#" className={styles.programs_card_content_link}>Learn More</Link>
                  </div>
                </div>
              </div>

            </motion.div>
        </motion.div>
        
      </div>
    )
}