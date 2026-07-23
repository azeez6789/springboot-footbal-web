import React, { useState } from "react";
import AdminLayout from "../component/AdminLayout";
import { Search, Eye, Check, X, User } from "lucide-react";

export default function PlayerProfiles() {
  const [searchTerm, setSearchTerm] = useState("");

  const players = [
    {
      id: 26,
      name: "azzzz",
      position: "GOALKEEPER",
      age: 26,
      jersey: 56,
      bio: "hhhhh",
      avatar: null,
    },
    {
      id: 25,
      name: "azeezz",
      position: "DEFENDER",
      age: 14,
      jersey: 56,
      bio: "3ffffff",
      avatar: "https://via.placeholder.com/150", // replace with actual image URL if present
    },
    {
      id: 25,
      name: "ABDUL AZEEZ",
      position: "DEFENDER",
      age: 23,
      jersey: 45,
      bio: "HI MY NAME IS ABDUL AZEEZ",
      avatar: null,
    },
  ];

  return (
    <AdminLayout>
      {/* OUTER GLASS CONTAINER (Matches Image 1 Outer Wrapper) */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 text-white w-full max-w-full">
        
        {/* TOP HEADER BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
          <div className="flex items-center gap-3">
            {/* SLIIT LOGO PLACEHOLDER */}
            <div className="w-9 h-9 rounded-full bg-amber-600/30 border border-amber-500/50 flex items-center justify-center font-bold text-xs text-amber-400">
              SLIIT
            </div>
            <span className="font-bold text-lg tracking-wide text-white">SLIIT FOOTBALL</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/70">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="text-blue-400 font-semibold cursor-pointer">Requests</span>
            <span className="hover:text-white cursor-pointer transition-colors">Events</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white transition-all border border-white/10">
              Login
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-xs text-black font-semibold transition-all">
              Join
            </button>
          </div>
        </div>

        {/* TITLE & TOTAL PROFILES */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Player Profiles</h1>
            <p className="text-white/50 text-sm mt-1">Manage and view active player registrations.</p>
          </div>
          <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white/70">
            Total Profiles: {players.length}
          </span>
        </div>

        {/* SEARCH BAR (Matches Image 1 style) */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input
            type="text"
            placeholder="Search by full name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 outline-none focus:border-blue-400/50 transition-all"
          />
        </div>

        {/* PLAYER CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player, index) => (
            <div
              key={index}
              /* GLASS CARD BG EXACT MATCH TO IMAGE 1 */
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300"
            >
              <div>
                {/* PROFILE HEADER (Avatar, Name, Position) */}
                <div className="flex items-center gap-4 mb-6">
                  {player.avatar ? (
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-14 h-14 rounded-full object-cover border border-white/10"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-slate-700/50 border border-white/10 flex items-center justify-center text-white/50">
                      <User size={28} />
                    </div>
                  )}

                  <div>
                    <h3 className="font-bold text-lg text-white leading-tight">{player.name}</h3>
                    <p className="text-xs text-white/50 mt-0.5">User ID: {player.id}</p>
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-md bg-blue-600/30 border border-blue-500/40 text-[10px] font-semibold text-blue-300 tracking-wider">
                      {player.position}
                    </span>
                  </div>
                </div>

                {/* STATS (Age & Jersey Number) */}
                <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                  <div>
                    <span className="text-white/40 block">Age</span>
                    <span className="font-semibold text-white text-sm">{player.age}</span>
                  </div>
                  <div>
                    <span className="text-white/40 block">Jersey Number</span>
                    <span className="font-semibold text-white text-sm">{player.jersey}</span>
                  </div>
                </div>

                {/* BIOGRAPHY BOX */}
                <div className="mb-6">
                  <span className="text-white/40 text-xs block mb-1">Biography</span>
                  <div className="bg-black/20 border border-white/5 rounded-xl p-3 text-xs text-white/70 min-h-[48px]">
                    {player.bio}
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS (View Details, Accept, Reject) */}
              <div className="flex items-center gap-2 pt-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white/80 border border-white/10 rounded-xl py-2 text-xs transition-colors">
                  <Eye size={14} />
                  <span>View Details</span>
                </button>
                <button className="p-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 transition-colors">
                  <Check size={16} />
                </button>
                <button className="p-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 transition-colors">
                  <X size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </AdminLayout>
  );
}