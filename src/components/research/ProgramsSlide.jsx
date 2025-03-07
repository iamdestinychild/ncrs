"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { getAllProject, getProjectImages } from "../../../api";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";

export default function ProgramsSlide() {
  const [width, setWidth] = useState(0);
  const cardOuter = useRef(null);
  const [projectImages, setProjectImages] = useState({});

  // Fetch projects using React Query
  const { data: projectsData, isLoading: projectsLoading, isError: projectsError } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => await getAllProject(5),
  });

  // Extract projects
  const projects = projectsData?.projects || [];

  // Fetch project images
  const fetchProjectImages = async (projectPosts) => {
    const imagesArray = await Promise.all(
      projectPosts.map(async (projectPost) => {
        try {
          if (!projectPost.image) return { [projectPost.slug]: "/fallback.jpg" };
          const imageUrl = await getProjectImages(projectPost.image);
          return { [projectPost.slug]: imageUrl };
        } catch {
          return { [projectPost.slug]: "/fallback.jpg" };
        }
      })
    );
    return Object.assign({}, ...imagesArray);
  };

  // Fetch images only when projects are available
  const { data: imagesData, isLoading: imagesLoading } = useQuery({
    queryKey: ["projectImages", projects],
    queryFn: () => fetchProjectImages(projects),
    enabled: projects.length > 0, // Ensure query runs only when projects exist
  });

  // Update state when imagesData is available
  useEffect(() => {
    if (imagesData) {
      setProjectImages(imagesData);
    }
  }, [imagesData]);

  // Calculate scroll width
  useEffect(() => {
    if (cardOuter.current) {
      const scrollWidth = cardOuter.current.scrollWidth;
      const offsetWidth = cardOuter.current.offsetWidth;
      if (scrollWidth !== undefined && offsetWidth !== undefined) {
        setWidth(scrollWidth - offsetWidth);
      }
    }
  }, [projects]);

  return (
    <div className={styles.programs}>
      <h1 className={styles.programs_heading}>Recent Research Projects</h1>

      {projectsLoading || projectsError ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="m-3">
              <Skeleton variant="rectangular" animation="wave" height={231} width={400} />
            </div>
          ))}
        </div>
      ) : (
        <motion.div ref={cardOuter} whileTap={{ cursor: "grabbing" }} className={styles.card_outer}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={styles.programs_cards}>
            {projects.map((project, index) => (
              <div key={index} className={styles.programs_card}>
                <div className={styles.programs_card_banner_cover}>
                  {imagesLoading ? (
                    <Skeleton variant="rectangular" animation="wave" height={231} width={400} />
                  ) : (
                    <Image
                      src={projectImages[project.slug] || "/fallback.jpg"}
                      alt={project.title}
                      className={styles.programs_card_banner}
                      width={400} 
                      height={250} 
                    />
                  )}
                </div>
                <div className={styles.programs_card_content}>
                  <p className="text-[18px]">{project.title}</p>
                  <div className={styles.programs_card_content_link_cover}>
                    <Link href={`/projects/${project.slug}`} className={styles.programs_card_content_link}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
