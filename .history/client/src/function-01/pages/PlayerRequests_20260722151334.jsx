import React, { useEffect, useState, useRef } from "react";
import { User, Check, X, Eye, Search } from "lucide-react";
import Logo from "../../common/assets/opt3.png";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../component/AdminLayout";

// Interactive Particle Constellation Canvas Component
const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = Math.floor((width * height) / 10000);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 110;

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / maxDist) * 0.25;
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default function PlayerRequest() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

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

  const handleApprove = (id) => {
    console.log(`Approving player with ID: ${id}`);
  };

  const handleReject = (id) => {
    console.log(`Rejecting player with ID: ${id}`);
  };

  const filtered = requests.filter((item) =>
    item.fullName?.toLowerCase().includes(search.toLowerCase())
  );

  const formatImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) {
      return path;
    }
    let cleanPath = path.replace(/\\/g, "/");
    if (cleanPath.includes("uploads/")) {
      cleanPath = cleanPath.substring(cleanPath.indexOf("uploads/") + 8);
    }
    cleanPath = cleanPath.replace(/^\//, "");
    return `http://localhost:8081/uploads/${cleanPath}`;
  };

  return (
    <AdminLayout>
      {/* 
        MATCHED OUTER CARD CONTAINER TO FIRST PAGE:
        bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl
      */}
    <div className="min-h-screen bg-[#0b1220] text-white  rounded-2xl selection:bg-blue-500/30 relative overflow-hidden font-sans">
        
        {/* CANVAS BACKGROUND */}
        <StarryBackground />

        {/* TOP HEADER BAR (EXACT MATCH TO FIRST CODE) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6 relative z-10">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <div className="w-9 h-9 rounded-full bg-amber-600/30 border border-amber-500/50 flex items-center justify-center font-bold text-xs text-amber-400">
              SLIIT
            </div>
            <span className="font-bold text-lg tracking-wide text-white">SLIIT FOOTBALL</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/70">
            <span onClick={() => navigate("/home")} className="hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="text-blue-400 font-semibold cursor-pointer">Requests</span>
            <span onClick={() => navigate("/pages/event")} className="hover:text-white cursor-pointer transition-colors">Events</span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate("/component/login")} 
              className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white transition-all border border-white/10"
            >
              Login
            </button>
            <button 
              onClick={() => navigate("/component/register")} 
              className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-xs text-black font-semibold transition-all"
            >
              Join
            </button>
          </div>
        </div>

        {/* TITLE & TOTAL PROFILES BADGE */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Player Profiles</h1>
            <p className="text-white/50 text-sm mt-1">Manage and view active player registrations.</p>
          </div>
          <span className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-white/70">
            Total Profiles: {requests.length}
          </span>
        </div>

        {/* SEARCH BAR */}
        <div className="relative mb-8 relative z-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input
            type="text"
            placeholder="Search by full name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-white/40 outline-none focus:border-blue-400/50 transition-all"
          />
        </div>

        {/* LOADING / ERROR STATES */}
        {loading && (
          <div className="py-20 flex flex-col items-center justify-center gap-3 text-white/50 relative z-10">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-xs tracking-widest uppercase">Loading Player Profiles...</span>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center text-red-400 relative z-10 mb-6">
            <p>Error: {error}</p>
          </div>
        )}

        {/* PLAYER CARDS GRID */}
        {!loading && !error && (
          filtered.length === 0 ? (
            <div className="text-center py-20 bg-white/5 border border-dashed border-white/10 rounded-2xl relative z-10">
              <p className="text-white/40 italic text-sm">No player profiles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {filtered.map((player) => (
                <div
                  key={player.id}
                  /* 
                    MATCHED PLAYER CARD STYLING TO FIRST CODE:
                    bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10
                  */
                  className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between hover:bg-white/10 transition-all duration-300"
                >
                  <div>
                    {/* PROFILE HEADER */}
                    <div className="flex items-center gap-4 mb-6">
                      {player.profilePicture ? (
                        <img
                          src={
                            player.profilePicture.startsWith("http") || player.profilePicture.startsWith("uploads")
                              ? formatImageUrl(player.profilePicture)
                              : `data:image/jpeg;base64,${player.profilePicture}`
                          }
                          alt={player.fullName}
                          className="w-14 h-14 rounded-full object-cover border border-white/10"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
                          }}
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-slate-700/50 border border-white/10 flex items-center justify-center text-white/50">
                          <User size={28} />
                        </div>
                      )}

                      <div>
                        <h3 className="font-bold text-lg text-white leading-tight">{player.fullName}</h3>
                        <p className="text-xs text-white/50 mt-0.5">User ID: {player.userId || player.id}</p>
                        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-md bg-blue-600/30 border border-blue-500/40 text-[10px] font-semibold text-blue-300 tracking-wider uppercase">
                          {player.position || "Unassigned"}
                        </span>
                      </div>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                      <div>
                        <span className="text-white/40 block">Age</span>
                        <span className="font-semibold text-white text-sm">{player.age ?? "-"}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block">Jersey Number</span>
                        <span className="font-semibold text-white text-sm">{player.jerseyNumber ?? "-"}</span>
                      </div>
                    </div>

                    {/* BIOGRAPHY BOX */}
                    <div className="mb-6">
                      <span className="text-white/40 text-xs block mb-1">Biography</span>
                      <div className="bg-black/20 border border-white/5 rounded-xl p-3 text-xs text-white/70 min-h-[48px]">
                        {player.bio || "No biography provided."}
                      </div>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex items-center gap-2 pt-2">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white/80 border border-white/10 rounded-xl py-2 text-xs transition-colors">
                      <Eye size={14} />
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={() => handleApprove(player.id)}
                      className="p-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 transition-colors"
                      title="Approve Player"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => handleReject(player.id)}
                      className="p-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 transition-colors"
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
    </AdminLayout>
  );
}