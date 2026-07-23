import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Calendar,
  Ticket,
  Settings,
  LogOut,
  X,
} from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();

  // Active state matching reference image
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
      isActive
        ? "bg-[#151c2e] text-white shadow-sm border border-blue-500/15"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-[#070b15] text-white relative overflow-hidden font-sans flex">
      
      {/* ------------------------------------------------------------- */}
      {/* 📌 PERMANENT SIDEBAR (NEVER RE-RENDERS ON PAGE CHANGE)         */}
      {/* ------------------------------------------------------------- */}
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
            <NavLink to="/admin" end className={menuClass}>
              <LayoutDashboard size={18} className="text-blue-400" />
              <span>Dashboard</span>
            </NavLink>

            <NavLink to="/admin/requests" className={menuClass}>
              <Users size={18} className="text-blue-400" />
              <span>Requests</span>
            </NavLink>

            <NavLink to="/admin/players" className={menuClass}>
              <Trophy size={18} className="text-blue-400" />
              <span>Players Profile</span>
            </NavLink>

            <NavLink to="/admin/matches" className={menuClass}>
              <Calendar size={18} className="text-blue-400" />
              <span>Matches</span>
            </NavLink>

            <NavLink to="/admin/tickets" className={menuClass}>
              <Ticket size={18} className="text-blue-400" />
              <span>Tickets</span>
            </NavLink>

            <NavLink to="/admin/settings" className={menuClass}>
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

      {/* ------------------------------------------------------------- */}
      {/* 📌 MAIN CONTENT CONTAINER (DYNAMIC PAGE SWAPPING HERE)        */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 ml-64 relative z-10 min-h-screen flex flex-col">
        {/* TOP NAVBAR */}
        <header className="sticky top-0 z-40 bg-[#070b15]/80 backdrop-blur-xl border-b border-white/5 px-8 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Admin Panel
            </span>
            <button 
              onClick={() => navigate("/login")}
              className="px-4 py-2 bg-white/10 hover:bg-white/15 transition-all rounded-xl text-xs font-medium"
            >
              Switch Account
            </button>
          </div>
        </header>

        {/* PAGE CONTENT RENDERS HERE */}
        <div className="p-8 flex-1">
          <Outlet />
        </div>
      </main>

    </div>
  );
}