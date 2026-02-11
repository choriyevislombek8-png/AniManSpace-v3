import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Fon qatlami */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0f001a_0%,#000_70%)]" />
      <ParticlesBackground />

      {/* Engil gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-black/70 pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl w-full space-y-10 md:space-y-14">
        {/* Katta sarlavha */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] via-[#c084fc] to-[#ff6bcb] animate-gradient-x">
            AniManSpace
          </span>
        </h1>

        {/* Ikkinchi qator */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide">
          <span className="text-cyan-300/90 drop-shadow-[0_0_15px_#00f0ff] animate-glow-cyan">
            Your Personal Anime Galaxy
          </span>
        </div>

        {/* Tavsif */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300/80 max-w-3xl mx-auto leading-relaxed font-light">
          Stream anime • Read manhwa • Level up • Chat with your AI waifu companion
          <br className="hidden sm:block" />
          <span className="text-pink-400 font-medium">— all in one cosmic universe</span>
        </p>

        {/* Tugmalar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 pt-8 md:pt-12">
          {/* Birinchi tugma */}
          <button
            className="
              group relative px-10 py-6 text-xl md:text-2xl font-bold rounded-2xl
              bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600
              hover:from-pink-500 hover:via-purple-500 hover:to-cyan-500
              text-white shadow-2xl shadow-purple-500/40
              border border-white/10 hover:border-white/30
              transition-all duration-500 transform hover:scale-105 active:scale-95
              overflow-hidden
            "
          >
            <span className="relative z-10 flex items-center gap-3">
              Launch Your Journey
              <span className="text-2xl">✦</span>
            </span>
            <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-700" />
          </button>

          {/* Ikkinchi tugma */}
          <button
            className="
              group relative px-10 py-6 text-xl md:text-2xl font-semibold rounded-2xl
              bg-black/40 backdrop-blur-xl border border-cyan-500/40
              hover:border-cyan-400 hover:bg-black/60
              text-cyan-300 hover:text-cyan-200
              shadow-lg shadow-cyan-900/30
              transition-all duration-500 transform hover:scale-105 active:scale-98
            "
          >
            Meet Your AI Companion
            <span className="ml-2 text-xl">🤖</span>
          </button>
        </div>

        {/* Kichik matn */}
        <div className="pt-6 text-sm md:text-base text-gray-400/70">
          Already joined by <span className="text-cyan-300 font-medium">1,200+</span> otaku explorers
        </div>
      </div>

      {/* Pastki gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </main>
  );
}
