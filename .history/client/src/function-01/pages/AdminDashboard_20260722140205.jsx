import React from "react";
import { Users, Shield, Trophy, DollarSign, Search, Bell, CheckCircle, ShieldCheck, Clock } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      
      {/* HEADER SECTION */}
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

      {/* METRIC CARDS GRID */}
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

      {/* LOWER SECTION: ANALYTICS + SYSTEM STATUS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* CHART SECTION */}
        <div className="lg:col-span-2 bg-[#0d1322] border border-white/5 p-6 rounded-2xl space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            Performance Analytics
          </h3>
          <div className="h-48 flex items-end justify-between gap-3 pt-6 border-b border-white/5 pb-2">
            {[40, 75, 50, 90, 60, 80, 100].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div 
                  style={{ height: `${height}%` }} 
                  className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all hover:opacity-80" 
                />
                <span className="text-xs text-gray-400 font-mono">
                  {["Jan","Feb","Mar","Apr","May","Jun","Jul"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SYSTEM STATUS */}
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

    </div>
  );
}