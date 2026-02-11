import ParticlesBackground from "@/components/ParticlesBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6">
      <ParticlesBackground />

      <div className="z-10 text-center space-y-8 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-extrabold neon-glow bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
          AniManSpace
        </h1>

        <p className="text-xl md:text-2xl text-gray-300">
          Enter Your Anime Universe
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <button className="glass-card glow-hover px-10 py-5 text-xl font-semibold rounded-2xl border border-cyan-500/40 hover:border-cyan-400 transition-all">
            Start Exploring
          </button>
          <button className="glass-card glow-hover px-10 py-5 text-xl font-semibold rounded-2xl border border-purple-500/40 hover:border-purple-400 transition-all">
            Talk to AI
          </button>
        </div>
      </div>
    </main>
  );
}
