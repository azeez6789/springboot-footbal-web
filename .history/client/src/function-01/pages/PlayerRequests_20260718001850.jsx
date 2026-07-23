import React, { useEffect, useState } from "react";
import { User, Check, X, Eye, Search } from "lucide-react";

export default function PlayerRequest() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Step 3: Fetch player profiles from the backend API
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

  // Placeholder handlers for Approve/Reject (Ready for your PUT endpoints later)
  const handleApprove = (id) => {
    console.log(`Approving player with ID: ${id}`);
    // Once backend status is added: 
    // fetch(`http://localhost:8081/api/player-profiles/${id}/approve`, { method: 'PUT' })...
  };

  const handleReject = (id) => {
    console.log(`Rejecting player with ID: ${id}`);
    // Once backend status is added: 
    // fetch(`http://localhost:8081/api/player-profiles/${id}/reject`, { method: 'PUT' })...
  };

  // Step 4: Filter players based on backend 'fullName' field
  const filtered = requests.filter((item) =>
    item.fullName?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Player Profiles
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Manage and view active player registrations.
            </p>
          </div>
          
          {/* Step 5: Dynamic Counter based on backend records */}
          <div className="bg-slate-900/60 border border-slate-800 px-4 py-2 rounded-xl backdrop-blur-md self-start md:self-auto">
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Total Profiles</span>
            <span className="text-2xl font-bold text-blue-400">{requests.length}</span>
          </div>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by full name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900/40 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Step 6: Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-slate-400 text-lg font-medium">Loading Player Profiles...</h2>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-950/40 border border-red-900/60 p-4 rounded-xl text-center text-red-400 backdrop-blur-md">
            <p>Error: {error}</p>
          </div>
        )}

        {/* Cards Grid */}
        {!loading && !error && (
          filtered.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/20 border border-dashed border-slate-800 rounded-2xl">
              <p className="text-slate-500">No player profiles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((player) => (
                <div 
                  key={player.id} 
                  className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-md hover:border-slate-700/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Card Top: Avatar & Title */}
                    <div className="flex items-start gap-4">
                      {/* Step 8: Conditional Profile Image Rendering */}
                      <div className="flex-shrink-0 bg-slate-800/80 rounded-2xl w-16 h-16 flex items-center justify-center border border-slate-700/50 overflow-hidden shadow-inner">
                        {player.profilePicture ? (
                          <img
                            src={`http://localhost:8081${player.profilePicture}`}
                            alt={player.fullName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <User className="text-slate-400" size={28} />
                        )}
                      </div>

                      <div className="space-y-1 min-w-0">
                        {/* Step 7: Adjusted Data Mappings */}
                        <h3 className="font-semibold text-lg text-slate-100 truncate group-hover:text-blue-400 transition-colors">
                          {player.fullName}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 truncate">
                          User ID: {player.userId}
                        </p>
                        <div className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-1">
                          {player.position || "Unassigned"}
                        </div>
                      </div>
                    </div>

                    {/* Card Body: Stats & Bio */}
                    <div className="mt-6 pt-4 border-t border-slate-800/60 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-xs text-slate-500 block mb-0.5">Age</span>
                        <span className="font-medium text-slate-300">{player.age ?? "-"}</span>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 block mb-0.5">Jersey Number</span>
                        <span className="font-mono font-medium text-slate-300">{player.jerseyNumber ?? "-"}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="text-xs text-slate-500 block mb-1">Biography</span>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed bg-slate-950/40 p-2.5 rounded-lg border border-slate-850">
                        {player.bio || "No biography provided."}
                      </p>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2">
                    <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium py-2 px-3 rounded-xl inline-flex items-center justify-center gap-1.5 transition-colors border border-slate-700/40">
                      <Eye size={14} /> View Details
                    </button>
                    
                    {/* Step 9 Note: Action buttons preserved layout-wise, logs action to console until entity update */}
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