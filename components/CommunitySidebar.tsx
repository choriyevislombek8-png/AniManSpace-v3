import Image from "next/image";

export default function CommunitySidebar() {
  return (
    <div className="bg-[#0a1628]/60 border border-[#1e3a6e]/40 rounded-2xl p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-white">Community Chat</h3>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2">
          <polyline points="20,6 9,17 4,12" />
        </svg>
      </div>

      {/* Yukari profile card */}
      <div className="relative rounded-xl overflow-hidden h-48">
        <Image
          src="/images/yukari.jpg"
          alt="Yukari character"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="text-lg font-bold text-white">Yukari</h4>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-semibold text-gray-300">Lv. 7</span>
            <div className="flex-1 h-1.5 bg-gray-700/60 rounded-full overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#ff6bcb]" />
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 justify-center">
        {["#ff6bcb", "#fbbf24", "#00f0ff", "#a78bfa", "#f87171"].map((color, i) => (
          <div
            key={i}
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill={color}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Join button */}
      <button className="w-full py-2.5 text-sm font-semibold text-white bg-[#0a1628]/80 border border-[#1e3a6e]/60 rounded-xl hover:border-[#00f0ff]/40 hover:text-cyan-300 transition-colors">
        Join the Community
      </button>

      {/* Footer text */}
      <p className="text-[10px] text-gray-500 text-center">
        Anisognesy - Noriwood Satage | Solgore
      </p>
    </div>
  );
}
