import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import { RightArrow } from '../../components/IconsPalette'
import BlogPostSlide from '../../components/blogSlide/BlogSlide'
import NewsLetter from '../../components/newsletter/NewsLetter'
import BlogCard from '../../components/blogCard/BlogCard'
import {allPosts} from '../../../data'

export default function News(){
    return(
        <>
        <main className={styles.news}>
        <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>Media</span></p>
                    {/* <p className={styles.heading_two}>Our Visions, Mission and Our Team</p> */}
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Latest News & Updates</h1>
                        </div>
                    </div>
                </div>
            </section>
        <section>
        <div className={styles.blog_post_slide}>
            <div className={styles.blog_post_slide_cards_outer}>
                <div className={styles.blog_post_slide_cards}>
                    {
                    Array.isArray(allPosts) ? 
                    allPosts.map((post, index) =>(
                        <BlogCard
                        key={index} 
                        img={post.img} 
                        heading={post.heading} 
                        author={post.author} 
                        date={post.date} 
                        slug={post.slug} />
                    )):
                    <div></div>
                    }
                </div>
            </div>
      </div>
        </section>
        <NewsLetter />
        </main>
        </>
    )
}

