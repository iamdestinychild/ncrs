"use client"
import Link from "next/link"
import Image from "next/image"
import { RightArrow } from "../IconsPalette"
import {posts} from '../../../data'
import styles from './styles.module.css'
import BlogCard from "../blogCard/BlogCard"



export default function BlogSlide(){

    return(
        <div className={styles.blog_post_slide}>
        <h1 className={styles.blog_post_slide_heading}>Blog Posts and Publications</h1>
        <h1 className={styles.web_blog_post_slide_heading}>Blog Posts</h1>
        <div className={styles.blog_post_slide_cards_outer}>
          <div className={styles.blog_post_slide_cards}>
            {
              Array.isArray(posts) ? 
              posts.map((post, index) =>(
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
    )
}