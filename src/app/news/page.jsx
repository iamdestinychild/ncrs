"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import { RightArrow } from "../../components/IconsPalette";
import NewsLetter from "../../components/newsletter/NewsLetter";
import BlogCard from "../../components/blogCard/BlogCard";
import { getAllNews, getNewsImage } from "../../../api";
import { useQuery, useQueries } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";
import { useRouter } from "next/navigation";

export default function News() {
  const router = useRouter();

  // Fetch news data
  const {
    data: newsData,
    isLoading: newsLoading,
    isError: newsError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
  });

  const newsPosts = newsData?.news || [];

  // Fetch images for all news posts in parallel
  const imageQueries = useQueries({
    queries: newsPosts.map((newsPost) => ({
      queryKey: ["newsImage", newsPost.image],
      queryFn: () => getNewsImage(newsPost.image),
      enabled: !!newsPost.image, // Only fetch if an image exists
    })),
  });

  // Check if any image is still loading
  const isImagesLoading = imageQueries.some((query) => query.isLoading);

  // Create an image map for easy access
  const newsImages = newsPosts.reduce((acc, newsPost, index) => {
    acc[newsPost.slug] = imageQueries[index]?.data || "/images/default.jpeg"; // Fallback image
    return acc;
  }, {});

  return (
    <>
      <main className={styles.news}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.hero_layer}></div>
          <div className={styles.hero_content}>
            <p className={styles.heading_one}>
              Home / <span>Media</span>
            </p>
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

        {/* News Posts Section */}
        <section>
          <div className={styles.blog_post_slide}>
            <div className={styles.blog_post_slide_cards_outer}>
              <div className={styles.blog_post_slide_cards}>
                {newsLoading ? (
                  // Show Skeleton loaders while fetching news
                  [...Array(4)].map((_, index) => (
                    <Skeleton
                      key={index}
                      variant="rectangular"
                      animation="wave"
                      width={350}
                      height={300}
                      style={{ borderRadius: "8px", marginBottom: "20px" }}
                    />
                  ))
                ) : newsPosts.length > 0 ? (
                  newsPosts.map((newsPost) => (
                    <BlogCard
                      key={newsPost.slug}
                      img={newsImages[newsPost.slug]}
                      heading={newsPost.heading}
                      author={newsPost.author}
                      loading={isImagesLoading}
                      date={newsPost.date}
                      slug={`/news/${newsPost.slug}`}
                      onClick={() => router.push(`/news/${newsPost.slug}`)} // Navigate dynamically
                    />
                  ))
                ) : (
                  [...Array(4)].map((_, index) => (
                    <Skeleton
                      key={index}
                      variant="rectangular"
                      animation="wave"
                      width={350}
                      height={300}
                      style={{ borderRadius: "8px", marginBottom: "20px" }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsLetter />
      </main>
    </>
  );
}
