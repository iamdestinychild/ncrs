"use client";
import { useQuery } from "@tanstack/react-query";
import { getProject, getProjectImages } from "../../../../api";
import styles from "./styles.module.css";
import Image from "next/image";
import Skeleton from "@mui/material/Skeleton";

export default function Planning({ params }) {
  // Fetch project details
  const {
    data: projectData,
    isLoading: projectLoading,
    isError: projectError,
  } = useQuery({
    queryKey: ["project", params.slug],
    queryFn: async () => await getProject(params.slug),
  });

  const project = projectData?.project;

  // Fetch project image only when project data is available
  const {
    data: projectImage,
    isLoading: imageLoading,
    isError: imageError,
  } = useQuery({
    queryKey: ["projectImage", project?.imageUrl],
    queryFn: () => getProjectImages(project.imageUrl.split("image/")[1]),
    enabled: !!project?.imageUrl, // Runs only when imageUrl is available
  });

  // Handle loading state
  if (projectLoading) {
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
  if (projectError) {
    return (
      <main className={styles.main}>
        <div className="flex flex-col justify-center items-center my-10 text-red-500 text-lg font-semibold">
          <p>Error loading project. Please try again.</p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>{project.title}</h1>
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
              src={projectImage}
              alt="Project Image"
              className={styles.image}
              width={800}
              height={400}
            />
          )}
        </div>
        <div className={styles.title_small}>
          <p>{project.author_name}</p>
          <p>04 October 2024</p>
        </div>
        <div className={styles.dash}></div>
        <article className={styles.article}>
          <p dangerouslySetInnerHTML={{ __html: project.article }}></p>
        </article>
      </div>
    </main>
  );
}
