"use client";

import Image from "next/image";
import { useState } from "react";
import StarRating from "./StarRating";

const featured = [
  {
    title: "Bleach",
    subtitle: "Thousand-Year Blood War",
    image: "/images/bleach.jpg",
    rating: 4,
  },
  {
    title: "Hanging",
    subtitle: "",
    image: "/images/hanging.jpg",
    rating: 5,
  },
];

export default function FeaturedAnime() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="px-4">
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2">
        {featured.map((anime, i) => (
          <div
            key={anime.title}
            className="relative flex-shrink-0 w-44 h-56 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={anime.image}
              alt={anime.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-sm font-bold text-white leading-tight">{anime.title}</h3>
              {anime.subtitle && (
                <p className="text-[10px] text-gray-300 mt-0.5">{anime.subtitle}</p>
              )}
              <div className="mt-1.5">
                <StarRating rating={anime.rating} />
              </div>
            </div>
            {/* Navigation arrow */}
            {i === 0 && (
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-black/40 rounded-full text-white/70 hover:text-white transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        {[0, 1, 2].map((dot) => (
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
