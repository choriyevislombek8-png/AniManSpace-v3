import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AniManSpace - Anime & Manhwa Universe",
  description: "Enter your anime universe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-black text-white min-h-screen overflow-x-hidden`}>
        {/* Kosmik fon */}
        <ParticlesBackground />

        {/* Asosiy kontent */}
        <div className="relative z-10">
          {children}
        </div>

        <Toaster richColors theme="dark" position="top-center" />
      </body>
    </html>
  );
}
