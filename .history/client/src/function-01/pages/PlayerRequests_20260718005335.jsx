import React, { useEffect, useState } from "react";
import { User, Check, X, Eye, Search } from "lucide-react";
import Logo from "../../common/assets/opt3.png";
import { useNavigate } from "react-router-dom";

export default function PlayerRequest() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch player profiles from the backend API
  useEffect(() => {
    fetch("http://localhost:8081/api/player-profiles")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch player profiles");
        }
        return response.json();
      })
      .then((data) => {
        setRequests(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Placeholder handlers for Approve/Reject
  const handleApprove = (id) => {
    console.log(`Approving player with ID: ${id}`);
  };

  const handleReject = (id) => {
    console.log(`Rejecting player with ID: ${id}`);
  };

  // Filter players based on backend 'fullName' field
  const filtered = requests.filter((item) =>
    item.fullName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b1220] text-white selection:bg-blue-500/30">
      
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/10 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none" />

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          
          <div className="flex items-center gap-3">
            <img src={Logo} alt="SLIIT Logo" className="w-10 h-10 object-contain" />
            <h1 className="font-bold tracking-wider text-sm md:text-base">SLIIT FOOTBALL</h1>
          </div>

          <nav className="hidden md:flex gap-6 text-white/70 text-sm font-medium">
            <button onClick={() => navigate("/home")} className="hover:text-white transition-colors">Home</button>
            <button className="text-blue-400 font-semibold">Requests</button>
            <button onClick={() => navigate("/pages/event")} className="hover:text-white transition-colors">Events</button>
          </nav>

          <div className="flex gap-3 text-sm font-medium">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/15 transition-all rounded-xl">
              Login
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 hover:opacity-90 transition-all text-black rounded-xl">
              Join
            </button>
          </div>

        </div>
      </header>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Player Profiles
            </h1>
            <p className="text-xs text-white/40 mt-1">
              Manage and view active player registrations.
            </p>
          </div>
          
          <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 text-xs text-blue-400 font-mono self-start md:self-auto">
            Total Profiles: {requests.length}
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by full name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="py-20 flex flex-col items-center justify-center gap-3 text-white/50">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs tracking-widest uppercase">Loading Player Profiles...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center text-red-400 backdrop-blur-xl">
            <p>Error: {error}</p>
          </div>
        )}

        {/* Cards Grid */}
        {!loading && !error && (
          filtered.length === 0 ? (
            <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-2xl">
              <p className="text-white/40 italic text-sm">No player profiles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((player) => (
                <div 
                  key={player.id} 
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-2xl"
                >
                  <div>
                    {/* Card Top: Avatar & Title */}
                    <div className="flex items-start gap-4">
                      
                      {/* Conditional Profile Image Handling */}
                      <div className="flex-shrink-0 bg-white/5 rounded-2xl w-16 h-16 flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                        {player.profilePicture ? (
                          <img
                            src={player.profilePicture.startsWith('/') 
                              ? `http://localhost:8081${player.profilePicture}` 
                              : `http://localhost:8081/${player.profilePicture}`
                            }
                            alt={player.fullName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              // If server path breaks, seamlessly catch it with an placeholder UI avatar
                              e.target.onerror = null;
                              e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                            }}
                          />
                        ) : (
                          <User className="text-white/40" size={28} />
                        )}
                      </div>

                      <div className="space-y-1 min-w-0">
                        <h3 className="font-semibold text-lg text-white truncate group-hover:text-blue-400 transition-colors">
                          {player.fullName}
                        </h3>
                        <p className="text-xs font-mono text-white/40 truncate">
                          User ID: {player.userId}
                        </p>
                        <div className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider mt-1">
                          {player.position || "Unassigned"}
                        </div>
                      </div>
                    </div>

                    {/* Card Body: Stats & Bio */}
                    <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-xs text-white/40 block mb-0.5">Age</span>
                        <span className="font-medium text-white/80">{player.age ?? "-"}</span>
                      </div>
                      <div>
                        <span className="text-xs text-white/40 block mb-0.5">Jersey Number</span>
                        <span className="font-mono font-medium text-white/80">{player.jerseyNumber ?? "-"}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-xs text-white/40 block mb-1">Biography</span>
                      <p className="text-xs text-white/60 line-clamp-2 leading-relaxed bg-black/20 p-2.5 rounded-lg border border-white/5">
                        {player.bio || "No biography provided."}
                      </p>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                    <button className="flex-1 bg-white/10 hover:bg-white/15 text-white/90 text-xs font-medium py-2 px-3 rounded-xl inline-flex items-center justify-center gap-1.5 transition-colors border border-white/5">
                      <Eye size={14} /> View Details
                    </button>
                    
                    <button 
                      onClick={() => handleApprove(player.id)}
                      className="bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white p-2 rounded-xl border border-emerald-500/20 transition-all"
                      title="Approve Player"
                    >
                      <Check size={16} />
                    </button>
                    <button 
                      onClick={() => handleReject(player.id)}
                      className="bg-rose-500/10 hover:bg-rose-500 text-rose-400 hover:text-white p-2 rounded-xl border border-rose-500/20 transition-all"
                      title="Reject Player"
                    >
                      <X size={16} />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )
        )}

      </div>
    </div>
  );
}