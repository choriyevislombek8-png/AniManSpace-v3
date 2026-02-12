"use client";

import Image from "next/image";
import { useState } from "react";
import StarRating from "./StarRating";

const downloads = [
  { title: "Episode 3", image: "/images/episode1.jpg", rating: 4 },
  { title: "Episode 3", image: "/images/offline-ep2.jpg", rating: 5 },
  { title: "Episode 3", image: "/images/offline-ep3.jpg", rating: 5 },
];

export default function OfflineDownloads() {
  const [activeDot, setActiveDot] = useState(1);

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-lg font-bold text-white">Offline Downloads</h2>
        <div className="flex items-center gap-1">
          <button className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex items-stretch gap-3 overflow-x-auto scrollbar-hide px-4 pb-2">
        {downloads.map((dl, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-32 h-40 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={dl.image}
              alt={dl.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 right-2.5">
              <h3 className="text-xs font-bold text-white leading-tight">{dl.title}</h3>
              <div className="mt-1">
                <StarRating rating={dl.rating} />
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
