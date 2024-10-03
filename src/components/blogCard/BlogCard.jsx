import Image from "next/image"
import Link from "next/link"
import styles from './styles.module.css'
import { RightArrow } from "../IconsPalette"



export default function BlogCard({img,heading,author,date,slug,}){
    return(
        <div className={styles.blog_post_slide_card}>
            <div className={styles.blog_post_slide_card_banner_cover}>
                <Image src={img} alt={heading} className={styles.blog_post_slide_card_banner} fill/>
            </div>
            <div className={styles.blog_post_slide_card_content_one}>
            <p>{author}</p>
            <p>{date}</p>
            </div>
            <h1 className={styles.blog_post_slide_card_heading}>{heading}</h1>
            <Link href={slug} className={styles.blog_post_slide_card_link}>
                <p>Continue Reading</p>
                <RightArrow iconStyle={styles.blog_post_slide_card_arrow}/>
            </Link>
      </div>
      
    )
}