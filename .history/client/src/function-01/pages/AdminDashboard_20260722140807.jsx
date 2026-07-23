import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Calendar,
  Ticket,
  Settings,
  LogOut,
  X,
  Shield,
  DollarSign,
  Search,
  Bell,
  CheckCircle,
  ShieldCheck,
  Clock,
} from "lucide-react";

// ==========================================
// 🌟 EXACT MATCH SIDEBAR COMPONENT
// ==========================================
function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
      isActive
        ? "bg-[#151c2e] text-white shadow-sm border border-blue-500/15"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-[#0c101d] border-r border-white/5 flex flex-col justify-between p-5 z-50">
      <div className="space-y-6">
        {/* HEADER BADGE */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-[#00d2ff] text-black px-3 py-2 rounded-2xl shadow-lg shadow-cyan-500/10">
            <div className="w-6 h-6 rounded-lg bg-black/10 flex items-center justify-center">
              <Trophy size={16} className="text-black" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-sm text-black tracking-tight">
              Admin Dashboard
            </span>
          </div>

          <button className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5">
            <X size={16} />
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className="space-y-1.5 pt-2">
          <NavLink to="/" className={menuClass}>
            <LayoutDashboard size={18} className="text-blue-400" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/pages/Regrequest" className={menuClass}>
            <Users size={18} className="text-blue-400" />
            <span>Requests</span>
          </NavLink>

          <NavLink to="/function-01/profile" className={menuClass}>
            <Trophy size={18} className="text-blue-400" />
            <span>Players Profile</span>
          </NavLink>

          <NavLink to="/pages/matches" className={menuClass}>
            <Calendar size={18} className="text-blue-400" />
            <span>Matches</span>
          </NavLink>

          <NavLink to="/pages/ticket" className={menuClass}>
            <Ticket size={18} className="text-blue-400" />
            <span>Tickets</span>
          </NavLink>

          <NavLink to="/settings" className={menuClass}>
            <Settings size={18} className="text-blue-400" />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* LOGOUT */}
      <div className="pt-4 border-t border-white/5">
        <NavLink
          to="/login"
          className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-medium text-sm"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
}

// ==========================================
// STARRY BACKGROUND CANVAS COMPONENT
// ==========================================
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

// ==========================================
// MAIN ADMIN DASHBOARD PAGE
// ==========================================
export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#070b15] text-white selection:bg-blue-500/30 relative overflow-hidden font-sans flex">
      {/* SIDEBAR */}
      <Sidebar />

      {/* BACKGROUND CANVAS */}
      <StarryBackground />

      {/* BACKGROUND GLOW */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full top-[-200px] left-[100px] pointer-events-none z-0" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/10 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 ml-64 relative z-10 min-h-screen flex flex-col p-8 space-y-8">
        
        {/* HEADER BAR */}
        <div className="flex justify-between items-center bg-[#0d1322] p-6 rounded-2xl border border-white/5">
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm mt-1">Manage SLIIT Football Platform</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#151c2e] text-sm text-white pl-9 pr-4 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="p-2.5 bg-[#151c2e] rounded-xl border border-white/10 text-gray-300 hover:text-white">
              <Bell size={18} />
            </button>
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Users size={20} />
            </div>
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-[#0d1322] border border-white/5 p-5 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400 font-medium">Total Players</p>
              <h3 className="text-2xl font-bold text-white mt-1">2,540</h3>
              <span className="text-xs text-emerald-400 font-semibold mt-1 inline-block">↗ +12%</span>
            </div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
              <Users size={22} />
            </div>
          </div>

          <div className="bg-[#0d1322] border border-white/5 p-5 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400 font-medium">Active Teams</p>
              <h3 className="text-2xl font-bold text-white mt-1">126</h3>
              <span className="text-xs text-emerald-400 font-semibold mt-1 inline-block">↗ +8%</span>
            </div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
              <Shield size={22} />
            </div>
          </div>

          <div className="bg-[#0d1322] border border-white/5 p-5 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400 font-medium">Tournaments</p>
              <h3 className="text-2xl font-bold text-white mt-1">48</h3>
              <span className="text-xs text-emerald-400 font-semibold mt-1 inline-block">↗ +15%</span>
            </div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
              <Trophy size={22} />
            </div>
          </div>

          <div className="bg-[#0d1322] border border-white/5 p-5 rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400 font-medium">Revenue</p>
              <h3 className="text-2xl font-bold text-white mt-1">$45,800</h3>
              <span className="text-xs text-emerald-400 font-semibold mt-1 inline-block">↗ +21%</span>
            </div>
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
              <DollarSign size={22} />
            </div>
          </div>
        </div>

        {/* ANALYTICS & SYSTEM STATUS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-[#0d1322] border border-white/5 p-6 rounded-2xl space-y-6">
            <h3 className="text-lg font-bold text-white">Performance Analytics</h3>
            <div className="h-48 flex items-end justify-between gap-3 pt-6 border-b border-white/5 pb-2">
              {[40, 75, 50, 90, 60, 80, 100].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <div
                    style={{ height: `${height}%` }}
                    className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all hover:opacity-80"
                  />
                  <span className="text-xs text-gray-400 font-mono">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1322] border border-white/5 p-6 rounded-2xl space-y-6">
            <h3 className="text-lg font-bold text-white">System Status</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-gray-300">Server</span>
                <CheckCircle size={18} className="text-emerald-400" />
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-gray-300">Database</span>
                <CheckCircle size={18} className="text-emerald-400" />
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-gray-300">Security</span>
                <ShieldCheck size={18} className="text-blue-400" />
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-gray-300">Backup</span>
                <Clock size={18} className="text-amber-400" />
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}