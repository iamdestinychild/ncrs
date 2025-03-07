"use client";
import styles from "./styles.module.css";
import BlogCard from "../blogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";
import { getAllNews, getNewsImage } from "../../../api";

export default function BlogSlide() {
  // Fetch news posts
  const {
    data: newsData,
    isLoading: newsLoading,
    isError: newsError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: async ()=> getAllNews(6),
  });


  const fetchNewsImages = async (newsPosts) => {
    const imagesArray = await Promise.all(
      newsPosts.map(async (newsPost) => {
        try {
          const imageUrl = await getNewsImage(newsPost.image);
          return { [newsPost.slug]: imageUrl };
        } catch {
          return { [newsPost.slug]: "/fallback.jpg" };
        }
      })
    );

    return Object.assign({}, ...imagesArray);
  };

  const { data: newsImages, isLoading: newsImageLoading } = useQuery({
    queryKey: ["newsImages", newsData?.news],
    queryFn: () => fetchNewsImages(newsData.news),
    enabled: !!newsData?.news, 
  });

  return (
    <div className={styles.blog_post_slide}>
      <h1 className={styles.blog_post_slide_heading}>Latest News and Updates</h1>
      <h1 className={styles.web_blog_post_slide_heading}>Latest News and Updates</h1>

      <div className={styles.blog_post_slide_cards_outer}>
        <div className={styles.blog_post_slide_cards}>
          {newsLoading || newsError ? (
            // Show 3 skeleton loaders when loading or error occurs
            [...Array(6)].map((_, index) => (
              <div key={index} className="m-3">
              <Skeleton variant="rectangular" animation="wave" height={231} width={400} />
            </div>
            ))
          ) : (
            newsData?.news?.map((newsPost) => (
              <BlogCard
                key={newsPost.slug}
                img={newsImages?.[newsPost.slug] || "/fallback.jpg"}
                loading={newsImageLoading}
                heading={newsPost.title}
                author={newsPost.author_name}
                date={"04 October 2024"}
                slug={`/news/${newsPost.slug}`}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
