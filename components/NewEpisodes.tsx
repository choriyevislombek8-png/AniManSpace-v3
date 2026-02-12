"use client";

import Image from "next/image";
import { useState } from "react";
import StarRating from "./StarRating";

const episodes = [
  { title: "Epis stack 3", image: "/images/episode1.jpg", rating: 4 },
  { title: "Born BS", image: "/images/born.jpg", rating: 5 },
  { title: "Anime: Amati", image: "/images/amati.jpg", rating: 4 },
  { title: "Wallace G", image: "/images/wallace.jpg", rating: 3 },
];

export default function NewEpisodes() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-bold text-white">New Episodes</h2>
        <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
          </svg>
        </button>
      </div>
      <div className="flex items-stretch gap-3 overflow-x-auto scrollbar-hide px-4 pb-2">
        {episodes.map((ep) => (
          <div
            key={ep.title}
            className="relative flex-shrink-0 w-36 h-44 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={ep.image}
              alt={ep.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5">
              <h3 className="text-xs font-bold text-white leading-tight">{ep.title}</h3>
              <div className="mt-1">
                <StarRating rating={ep.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-1.5">
        {[0, 1, 2, 3, 4].map((dot) => (
          <button
            key={dot}
            onClick={() => setActiveDot(dot)}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeDot === dot ? "bg-[#00f0ff]" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
