"use client";
import { getNewsBySlug, getNewsImage } from "../../../../api";
import styles from "./styles.module.css";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";
import formatDate from "../../../../dateFormater";

export default function Planning({ params }) {
  // Fetch news post
  const {
    data: newsData,
    isLoading: newsLoading,
    isError: newsError,
  } = useQuery({
    queryKey: ["news", params.slug],
    queryFn: () => getNewsBySlug(params.slug),
  });

  const newsPost = newsData?.news;

  // Fetch news image (only when news data is available)
  const {
    data: newsImage,
    isLoading: imageLoading,
    isError: imageError,
  } = useQuery({
    queryKey: ["newsImage", newsPost?.imageUrl],
    queryFn: () => getNewsImage(newsPost.imageUrl.split("image/")[1]),
    enabled: !!newsPost?.imageUrl, // Runs only when imageUrl is available
  });

  // Handle loading state
  if (newsLoading) {
    return (
      <main className={styles.main}>
        <div className={styles.container}>
          <Skeleton variant="text" width="60%" height={50} animation="wave" />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={370}
            animation="wave"
          />
          <Skeleton variant="text" width="40%" height={30} animation="wave" />
          <Skeleton variant="text" width="80%" height={20} animation="wave" />
          <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
        </div>
      </main>
    );
  }

  // Handle error state
  if (newsError) {
    return (
      <main className={styles.main}>
        <div className="flex flex-col justify-center items-center my-10 text-red-500 text-lg font-semibold">
          <p>Error loading news. Please try again.</p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{newsPost.title}</h1>
        <div className={styles.image_container}>
          {imageLoading ? (
            <Skeleton
              variant="rectangular"
              animation="wave"
              width="100%"
              height={370}
              className={styles.skeleton}
            />
          ) : (
            <Image
              src={newsImage}
              alt={newsPost.title}
              className={styles.image}
              width={800}
              height={400}
            />
          )}
        </div>
        <div className={styles.title_small}>
          <p>{newsPost.author_name}</p>
          <p>{formatDate(newsPost.publishing_date)}</p>
        </div>
        <div className={styles.dash}></div>
        <article className={styles.article}>
          <p dangerouslySetInnerHTML={{ __html: newsPost.article }}></p>
        </article>
      </div>
    </main>
  );
}
