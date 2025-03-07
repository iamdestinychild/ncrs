"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllGalleryPost } from "../../../api";
import GalleryCard from "../../components/galleryCard/gallerycard";
import Skeleton from "@mui/material/Skeleton";

export default function Gallery() {
  const {
    data,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["galleryPosts"], queryFn: getAllGalleryPost });

  const galleryPosts = data?.galleryPosts || [];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-64 bg-gray-800 text-white flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <p className="text-lg">
            Home / <span className="font-semibold">Media</span>
          </p>
          <h1 className="text-2xl font-bold mt-2">NATIONAL CENTRE FOR REMOTE SENSING</h1>
          <h2 className="text-xl mt-1">Project Exhibition</h2>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {isLoading ? (
              // Skeleton loader when fetching data
              [...Array(6)].map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  animation="wave"
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
              ))
            ) : isError ? (
              // Error message if fetching fails
              <p className="text-center text-red-500 w-full col-span-full">Failed to load gallery. Check your internet connection</p>
            ) : galleryPosts.length > 0 ? (
              galleryPosts.map((card, index) => (
                <GalleryCard
                  key={index}
                  title={card.title}
                  slideMap={galleryPosts}
                  index={index}
                  img={card.file_url}
                  alt={card.title}
                />
              ))
            ) : (
              // No data available message centered
              <div className="w-full col-span-full flex justify-center items-center h-40">
                <p className="text-lg text-gray-600 font-semibold">No gallery items available.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
