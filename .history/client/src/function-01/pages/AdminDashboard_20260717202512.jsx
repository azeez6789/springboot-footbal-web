import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Calendar,
  Ticket,
  DollarSign,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  UserCircle,
  TrendingUp,
  Shield,
  LogOut,
  ChevronRight,
  Activity,
  Award,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = useNavigate();

  const stats = [
    { title: "Total Players", value: "2540", icon: Users, growth: "+12%" },
    { title: "Active Teams", value: "126", icon: Shield, growth: "+8%" },
    { title: "Tournaments", value: "48", icon: Trophy, growth: "+15%" },
    { title: "Revenue", value: "$45,800", icon: DollarSign, growth: "+21%" }
  ];

  const players = [
    { name: "A. Perera", position: "Forward", team: "SLIIT Warriors", status: "Active" },
    { name: "M. Fernando", position: "Midfielder", team: "Blue Lions", status: "Active" },
    { name: "K. Silva", position: "Defender", team: "Royal FC", status: "Pending" },
    { name: "R. Mendis", position: "Goal Keeper", team: "Campus Stars", status: "Active" }
  ];

  const tournaments = [
    { name: "SLIIT Football Cup 2026", date: "August 12, 2026", teams: "32 Teams", status: "Running" },
    { name: "Inter University Championship", date: "September 05, 2026", teams: "24 Teams", status: "Upcoming" },
    { name: "Freshers League", date: "October 20, 2026", teams: "16 Teams", status: "Planning" }
  ];

  const activities = [
    "New player registration approved",
    "Tournament schedule updated",
    "New team created",
    "Ticket payment received",
    "Match result published"
  ];

  return (
    // 1. Locked main screen wrapper height to prevent window scrolling
    <div className="h-screen w-screen bg-[#050816] text-white relative overflow-hidden flex">
      {/* Background Blobs */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none"></div>
      <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[160px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none"></div>

      {/* 2. SIDEBAR - Now perfectly static relative to layout viewport */}
      <div className={`${sidebarOpen ? "w-72" : "w-20"} h-screen bg-white/5 border-r border-white/10 backdrop-blur-xl p-5 transition-all duration-300 flex flex-col justify-between flex-shrink-0 z-20`}>
        <div>
          <div className="flex items-center justify-between mb-10">
            {sidebarOpen && (
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400">
                  <Trophy className="text-black" />
                </div>
                <h1 className="text-M font-bold whitespace-nowrap">ADMIN DASHBOARD</h1>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 bg-white/10 rounded-xl hover:bg-white/20"
            >
              {sidebarOpen ? < X /> : <Menu />}
            </button>
          </div>

         <div className="space-y-3">
  <div
    onClick={() => navigate("/")}
    className="flex items-center gap-4 p-3 rounded-xl text-white/80 hover:bg-blue-500/20 cursor-pointer transition"
  >
    <LayoutDashboard className="text-blue-400" />
    {sidebarOpen && <span>Dashboard</span>}
  </div>

  <div
    onClick={() => navigate("/pages/Regrequest")}
    className="flex items-center gap-4 p-3 rounded-xl text-white/80 hover:bg-blue-500/20 cursor-pointer transition"
  >
    <Users className="text-blue-400" />
    {sidebarOpen && <span>Requests</span>}
  </div>

  <div
    onClick={() => navigate("/pages/tournament")}
    className="flex items-center gap-4 p-3 rounded-xl text-white/80 hover:bg-blue-500/20 cursor-pointer transition"
  >
    <Trophy className="text-blue-400" />
    {sidebarOpen && <span>Tournaments</span>}
  </div>

  <div
    onClick={() => navigate("/pages/event")}
    className="flex items-center gap-4 p-3 rounded-xl text-white/80 hover:bg-blue-500/20 cursor-pointer transition"
  >
    <Calendar className="text-blue-400" />
    {sidebarOpen && <span>Matches</span>}
  </div>

  <div
    onClick={() => navigate("/pages/ticket")}
    className="flex items-center gap-4 p-3 rounded-xl text-white/80 hover:bg-blue-500/20 cursor-pointer transition"
  >
    <Ticket className="text-blue-400" />
    {sidebarOpen && <span>Tickets</span>}
  </div>

  <div
    onClick={() => navigate("/component/register")}
    className="flex items-center gap-4 p-3 rounded-xl text-white/80 hover:bg-blue-500/20 cursor-pointer transition"
  >
    <Settings className="text-blue-400" />
    {sidebarOpen && <span>Settings</span>}
  </div>
</div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-4 p-3 rounded-xl text-red-400 hover:bg-red-500/20 cursor-pointer">
            <LogOut className="flex-shrink-0" />
            {sidebarOpen && <span>Logout</span>}
          </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT CONTAINER - This handles the scrolling now */}
      <div className="flex-1 h-screen overflow-y-auto p-8 relative z-10">
        {/* HEADER */}
        <div className="flex justify-between items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-white/60 mt-2">Manage SLIIT Football Platform</p>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
              <Search size={18} />
              <input placeholder="Search..." className="bg-transparent outline-none w-32" />
            </div>
            <Bell className="text-blue-400" />
            <UserCircle size={42} className="text-green-400" />
          </div>
        </div>

        {/* STATISTICS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white/60">{item.title}</p>
                  <h2 className="text-3xl font-bold mt-3">{item.value}</h2>
                  <div className="flex items-center gap-2 text-green-400 mt-3">
                    <TrendingUp size={16} />
                    {item.growth}
                  </div>
                </div>
                <item.icon size={40} className="text-blue-400" />
              </div>
            </div>
          ))}
        </div>

        {/* ANALYTICS & SYSTEM STATUS */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-blue-400" />
              <h2 className="text-2xl font-bold">Performance Analytics</h2>
            </div>

            <div className="h-56 flex items-end gap-4">
              {[40, 65, 55, 90, 70, 85, 100].map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className="flex-1 bg-gradient-to-t from-blue-500 to-green-400 rounded-t-xl"
                ></div>
              ))}
            </div>

            <div className="flex justify-between text-white/50 text-sm mt-5">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6">System Status</h2>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span>Server</span>
                <CheckCircle className="text-green-400" />
              </div>
              <div className="flex justify-between items-center">
                <span>Database</span>
                <CheckCircle className="text-green-400" />
              </div>
              <div className="flex justify-between items-center">
                <span>Security</span>
                <Shield className="text-blue-400" />
              </div>
              <div className="flex justify-between items-center">
                <span>Backup</span>
                <Clock className="text-yellow-400" />
              </div>
            </div>
          </div>
        </div>

        {/* PLAYER MANAGEMENT */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Player Management</h2>
            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 text-white/50 text-left">
                  <th className="pb-4">Player</th>
                  <th>Position</th>
                  <th>Team</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition">
                    <td className="py-5 font-semibold">{player.name}</td>
                    <td className="text-white/70">{player.position}</td>
                    <td className="text-white/70">{player.team}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        player.status === "Active"
                          ? "bg-green-400/20 text-green-300"
                          : "bg-yellow-400/20 text-yellow-300"
                      }`}>
                        {player.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* TOURNAMENT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tournaments.map((tour, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex justify-between items-center">
                <Trophy className="text-yellow-400" />
                <Star className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mt-5">{tour.name}</h3>
              <p className="text-white/60 mt-3">{tour.date}</p>
              <p className="text-blue-300 mt-2">{tour.teams}</p>
              <div className="flex justify-between items-center mt-6">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                  {tour.status}
                </span>
                <ChevronRight className="text-white/60" />
              </div>
            </div>
          ))}
        </div>

        {/* RECENT ACTIVITIES & QUICK ACTIONS */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-blue-400" />
              <h2 className="text-2xl font-bold">Recent Activities</h2>
            </div>
            <div className="space-y-4">
              {activities.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <p className="text-white/80">{item}</p>
                  </div>
                  <span className="text-xs text-white/50">Today</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-blue-500/20 border border-blue-400/20 rounded-xl p-5 hover:bg-blue-500/30 transition">
                <Users className="mx-auto text-blue-400 mb-3" />
                <p>Add Player</p>
              </button>
              <button className="bg-green-500/20 border border-green-400/20 rounded-xl p-5 hover:bg-green-500/30 transition">
                <Trophy className="mx-auto text-green-400 mb-3" />
                <p>Create Tournament</p>
              </button>
              <button className="bg-yellow-500/20 border border-yellow-400/20 rounded-xl p-5 hover:bg-yellow-500/30 transition">
                <Calendar className="mx-auto text-yellow-400 mb-3" />
                <p>Schedule Match</p>
              </button>
              <button className="bg-purple-500/20 border border-purple-400/20 rounded-xl p-5 hover:bg-purple-500/30 transition">
                <Ticket className="mx-auto text-purple-400 mb-3" />
                <p>Manage Tickets</p>
              </button>
            </div>
          </div>
        </div>

        {/* TOP PERFORMERS */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-yellow-400" />
            <h2 className="text-2xl font-bold">Top Performers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="font-bold">Top Scorer</h3>
              <p className="text-white/60 mt-3">A. Perera</p>
              <span className="text-yellow-300">12 Goals</span>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="font-bold">Best Assist</h3>
              <p className="text-white/60 mt-3">K. Silva</p>
              <span className="text-green-300">10 Assists</span>
            </div>
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="font-bold">MVP Player</h3>
              <p className="text-white/60 mt-3">M. Fernando</p>
              <span className="text-blue-300">Season MVP</span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center text-white/50 py-8 border-t border-white/10">
          <p>© 2026 SLIIT Football Admin Dashboard</p>
          <p className="text-sm mt-2">Manage • Monitor • Grow Football Community</p>
        </footer>
      </div>
    </div>
  );
}