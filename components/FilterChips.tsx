"use client";

const filters = [
  {
    label: "Janr",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    label: "Til",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9z" />
      </svg>
    ),
  },
  {
    label: "FunDub/Subtitle",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
      </svg>
    ),
  },
  {
    label: "Offline",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" strokeWidth="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
];

export default function FilterChips() {
  return (
    <div className="flex items-center gap-2 px-4 overflow-x-auto scrollbar-hide">
      {filters.map((filter) => (
        <button
          key={filter.label}
          className="flex items-center gap-1.5 whitespace-nowrap px-3.5 py-2 bg-[#0a1628]/60 border border-[#1e3a6e]/40 rounded-full text-xs font-medium text-gray-300 hover:border-[#00f0ff]/40 hover:text-cyan-300 transition-colors"
        >
          {filter.icon}
          {filter.label}
        </button>
      ))}
    </div>
  );
}
