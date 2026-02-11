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
// Hero qismi va tugmalar tugagandan keyin (masalan pt-12 yoki space-y dan keyin)

<div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
  {/* AI Companion katta karta */}
  <div 
    className="
      relative overflow-hidden rounded-3xl
      bg-gradient-to-br from-purple-950/40 via-indigo-950/40 to-black/60
      backdrop-blur-xl border border-purple-500/30 hover:border-purple-400/60
      shadow-2xl shadow-purple-900/40
      transition-all duration-500 hover:scale-[1.015] hover:shadow-purple-800/50
      group
    "
  >
    {/* Orqa fon uchun nozik gradient va yorug'lik effekti */}
    <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 p-8 md:p-12 lg:p-16">
      {/* Chap taraf — anime qizi rasmi */}
      <div className="
        relative w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80
        rounded-2xl overflow-hidden flex-shrink-0
        border-4 border-purple-500/50 shadow-2xl shadow-purple-900/60
        transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[2deg]
      ">
        <img
          src="https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
          alt="Anime space girl companion"
          className="w-full h-full object-cover"
        />
        {/* Rasm ustiga nozik neon chet */}
        <div className="absolute inset-0 border-2 border-purple-400/40 rounded-2xl pointer-events-none" />
      </div>

      {/* O'ng taraf — matn va tugma */}
      <div className="flex-1 text-center md:text-left space-y-8">
        {/* Speech bubble */}
        <div className="
          inline-block px-8 py-6 rounded-3xl rounded-tl-none
          bg-purple-900/50 backdrop-blur-lg border border-purple-400/40
          text-white text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed
          shadow-xl shadow-purple-900/40
          relative
        ">
          <div className="absolute -left-4 top-6 w-8 h-8 bg-purple-900/50 border-l border-t border-purple-400/40 rotate-45" />
          Salom, kosmonavt 🌌  
          <br />
          Qaysi olamga sayohat qilamiz?
        </div>

        {/* Qisqa tavsif */}
        <p className="text-gray-200/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
          Men sizning shaxsiy anime hamrohingizman.  
          Tavsiyalar, suhbat, motivatsiya yoki shunchaki kosmik gaplashish — hammasiga tayyorman.
        </p>

        {/* Tugma */}
        <button
          className="
            inline-flex items-center gap-4 px-10 md:px-14 py-6 md:py-7 text-xl md:text-2xl font-bold
            rounded-2xl bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600
            hover:from-cyan-500 hover:via-purple-500 hover:to-pink-500
            text-white shadow-2xl shadow-purple-900/50
            border border-cyan-400/30 hover:border-cyan-300/70
            transition-all duration-500 transform hover:scale-105 active:scale-98
            relative overflow-hidden group/btn
          "
        >
          <span className="relative z-10 flex items-center gap-3">
            Open AI Chat
            <span className="text-3xl">→</span>
          </span>

          {/* Tugma ustidagi yorqin effekt */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl" />
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover/btn:opacity-70 blur-2xl transition-opacity duration-700" />
        </button>
      </div>
    </div>
  </div>
</div>
