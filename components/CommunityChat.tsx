"use client";

import Image from "next/image";
import { useState } from "react";

const messages = [
  {
    user: "ISlomm Sters",
    avatar: "/images/avatar-islomm.jpg",
    time: "19:88",
    text: "",
    reply: {
      user: "Orus",
      avatar: "/images/avatar-orus.jpg",
      text: "Beoreldon abseport",
    },
  },
  {
    user: "Yukari",
    avatar: "/images/avatar-yukari.jpg",
    time: "12.16",
    text: "Memanos peel fing agte",
    reply: null,
  },
];

export default function CommunityChat() {
  const [message, setMessage] = useState("");

  return (
    <section className="space-y-3 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">Community Chat</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-sm text-gray-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span className="font-semibold text-cyan-400">245</span>
            <span className="text-gray-500">online</span>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="bg-[#0a1628]/60 border border-[#1e3a6e]/40 rounded-2xl p-3 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx} className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-[#1e3a6e]/60">
              <Image
                src={msg.avatar}
                alt={msg.user}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">
                  {msg.user}{" "}
                  {msg.user === "Yukari" && (
                    <>
                      <span className="inline-block w-3 h-3 text-cyan-400">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </span>
                    </>
                  )}
                </span>
                <span className="text-[10px] text-gray-500">{msg.time}</span>
              </div>
              {msg.reply && (
                <div className="mt-1.5 bg-[#111d35]/80 border border-[#1e3a6e]/30 rounded-xl px-3 py-2 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={msg.reply.avatar}
                      alt={msg.reply.user}
                      width={20}
                      height={20}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold text-cyan-400">{msg.reply.user}</span>
                    <p className="text-[10px] text-gray-400">{msg.reply.text}</p>
                  </div>
                </div>
              )}
              {msg.text && (
                <p className="text-xs text-gray-300 mt-1">{msg.text}</p>
              )}
            </div>
          </div>
        ))}

        {/* Message input */}
        <div className="flex items-center gap-2 bg-[#0a1628]/80 border border-[#1e3a6e]/40 rounded-xl px-3 py-2.5">
          <input
            type="text"
            placeholder="Kosmosga xabar yoz..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-transparent text-xs text-gray-200 placeholder-gray-500 outline-none"
          />
          <button className="w-7 h-7 flex items-center justify-center bg-[#00f0ff]/20 rounded-lg hover:bg-[#00f0ff]/30 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22l-4-9-9-4L22 2z" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
