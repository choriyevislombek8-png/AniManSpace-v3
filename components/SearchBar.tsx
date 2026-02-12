"use client";

import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="px-4">
      <div className="flex items-center gap-2 bg-[#0a1628]/80 border border-[#1e3a6e]/50 rounded-xl px-4 py-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="text-gray-500 flex-shrink-0"
        >
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          placeholder="Anime yoki Manhwa qidir..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-sm text-gray-200 placeholder-gray-500 outline-none"
        />
        <button className="w-8 h-8 flex items-center justify-center bg-[#00f0ff]/20 rounded-lg hover:bg-[#00f0ff]/30 transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L15 22l-4-9-9-4L22 2z" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
