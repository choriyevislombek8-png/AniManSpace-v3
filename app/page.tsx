import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FilterChips from "@/components/FilterChips";
import FeaturedAnime from "@/components/FeaturedAnime";
import NewEpisodes from "@/components/NewEpisodes";
import CommunityChat from "@/components/CommunityChat";
import CommunitySidebar from "@/components/CommunitySidebar";
import OfflineDownloads from "@/components/OfflineDownloads";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen pb-24">
      {/* Main content area: left content + right sidebar on large screens */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left content column */}
        <div className="flex-1 flex flex-col gap-5">
          <Header />
          <SearchBar />
          <FilterChips />
          <FeaturedAnime />

          {/* Divider */}
          <div className="mx-4 h-px bg-gradient-to-r from-transparent via-[#1e3a6e]/50 to-transparent" />

          <NewEpisodes />

          {/* Divider */}
          <div className="mx-4 h-px bg-gradient-to-r from-transparent via-[#1e3a6e]/50 to-transparent" />

          <CommunityChat />

          {/* Divider */}
          <div className="mx-4 h-px bg-gradient-to-r from-transparent via-[#1e3a6e]/50 to-transparent" />

          <OfflineDownloads />
        </div>

        {/* Right sidebar - visible on large screens */}
        <div className="hidden lg:block w-72 pt-4 pr-4">
          <div className="sticky top-4">
            <CommunitySidebar />
          </div>
        </div>
      </div>

      {/* Mobile community sidebar */}
      <div className="lg:hidden px-4 mt-5">
        <CommunitySidebar />
      </div>

      <BottomNav />
    </main>
  );
}
