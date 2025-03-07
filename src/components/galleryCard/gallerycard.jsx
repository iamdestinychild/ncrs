import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import GalleryShowCard from "../galleryShowCard/gallerycard";
import Image from "next/image";
import { getGalleryPostImg } from "../../../api";

export default function GalleryCard({ img, title, slideMap, alt, index }) {
  const [galleryImage, setGalleryImage] = useState("/images/default.jpeg");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const imageUrl = await getGalleryPostImg(img);
                setGalleryImage(imageUrl);
            } catch (error) {
                console.error(`Error fetching image for ${img}:`, error);
            }
        };
        fetchImage();
    }
    , [img
        ]);
    
    console.log(galleryImage
        );

  const [showCard, setShowCard] = useState(false);
  const showGallery = () => {
    setShowCard(true);
    // document.body.style.top = `-${window.scrollY}px`
    document.body.classList.add("no-scroll");
  };

  return (
    <>
      <div onClick={() => showGallery()} className={styles.grid_card}>
        <Image src={img} alt={alt} className={styles.grid_card_img} fill />
      </div>
      {showCard && (
        <GalleryShowCard
          image={img}
          title={title}
          slideMap={slideMap}
          index={index}
          galleryState={setShowCard}
        />
      )}
    </>
  );
}
