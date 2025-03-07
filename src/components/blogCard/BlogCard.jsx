import Image from "next/image"
import Link from "next/link"
import styles from './styles.module.css'
import { RightArrow } from "../IconsPalette"
import Skeleton from '@mui/material/Skeleton';



export default function BlogCard({ img, loading, heading, author, date, slug, }) {
    return(
        <div className={styles.blog_post_slide_card}>
            <div className={styles.blog_post_slide_card_banner_cover}>
                {loading ? <Skeleton variant="rectangular" animation="wave" height={231}  style={{ borderRadius: "8px", marginBottom: "20px" }}/> :<Image src={img} alt={heading} className={styles.blog_post_slide_card_banner} fill/>}
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