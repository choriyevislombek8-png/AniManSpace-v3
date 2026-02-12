"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Home", active: true },
  { label: "Anime", active: false },
  { label: "Manhwa", active: false },
  { label: "Community Chat", active: false },
  { label: "Offline", active: false },
  { label: "Profile", active: false },
];

export default function Header() {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <header className="flex flex-col gap-3 px-4 pt-4 pb-2">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#7dd3fc]">
          AniManSpace
        </h1>
        <div className="flex items-center gap-3">
          {/* Coins */}
          <div className="flex items-center gap-1.5 bg-[#0d1b3e]/80 border border-[#1e3a6e]/60 rounded-full px-3 py-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path d="M12 6v12M8 10h8M8 14h8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-sm font-semibold text-cyan-300">1200</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0l3 5H2L5 0z" fill="#00f0ff" />
            </svg>
          </div>
          {/* Messages */}
          <div className="relative flex items-center justify-center w-9 h-9 bg-[#0d1b3e]/80 border border-[#1e3a6e]/60 rounded-full">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
              <path d="M4 4h16v12H5.17L4 17.17V4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4.5 h-4.5 bg-red-500 text-[10px] font-bold text-white rounded-full flex items-center justify-center leading-none px-1">
              7
            </span>
          </div>
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-cyan-500/50">
            <Image
              src="/images/avatar-user.jpg"
              alt="User avatar"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide -mx-1 px-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveNav(item.label)}
            className={`whitespace-nowrap px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
              activeNav === item.label
                ? "text-[#00f0ff]"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
