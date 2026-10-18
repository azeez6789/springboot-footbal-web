import React from "react";
import AdminLayout from "../../component/AdminLayout";
import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  DollarSign,
  Search,
  Bell,
  UserCircle,
  TrendingUp,
  Shield,
  Activity,
  CheckCircle,
  Clock,
  Award,
  ChevronRight,
  Star,
  Calendar,
  Ticket
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

export default function AdminDashboard() {

    console.log("Admin Dashboard Rendered");
 
    const stats = [
    { title: "Total Players", value: "2,540", icon: Users, growth: "+12%" },
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
    <AdminLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-full space-y-8"
      >
        {/* HEADER */}
        <div className="min-h-screen bg-[#070A12] text-white overflow-y-auto rounded-2xl relative font-sans">
        
        {/* ================= BACKGROUND CANVAS & ORBS ================= */}
        <StarryBackground />
        <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0" />
        <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />

        <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
                  <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
                    <div className="flex items-center gap-3">
                      <img src={Logo} alt="SLIIT Logo" className="w-10 h-10 object-contain" />
                      <h1 className="font-bold tracking-wider text-sm md:text-base">SLIIT FOOTBALL</h1>
                    </div>
        
                    <nav className="hidden md:flex gap-6 text-white/70 text-sm font-medium">
                      <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
                      <button onClick={() => navigate("/pages/tournament")} className="hover:text-white transition-colors">Tournaments</button>
                      <button onClick={() => navigate("/pages/event")} className="hover:text-white transition-colors">Events</button>
                      <button onClick={() => navigate("/pages/ticket")} className="hover:text-white transition-colors">Ticket</button>
                      <button onClick={() => navigate("/component/about")} className="hover:text-white transition-colors">About</button>
                    </nav>
        
                    <div className="flex gap-3 text-sm font-medium">
                      <button onClick={() => navigate("/component/login")} className="px-4 py-2 bg-white/15 hover:bg-white/20 transition-all rounded-xl">Login</button>
                      <button onClick={() => navigate("/component/register")} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold rounded-xl hover:opacity-90 transition-all">Join</button>
                    </div>
                  </div>
                </header>


  {/* ================= PAGE TITLE & SEARCH BAR ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Tournaments</h2>
              <p className="text-sm text-white/60 mt-1">Manage and view active tournament registrations.</p>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="bg-white/5 px-3 py-2 rounded-xl border border-white/10 text-xs text-blue-400 font-mono">
                Total Tournaments: {tournaments.length}
              </div>
              <button
                onClick={() => navigate("/component/tounform")}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold text-sm rounded-xl hover:opacity-90 transition-all whitespace-nowrap"
              >
                Organize Tournament
              </button>
            </div>
          </div>

            {/* Search Box matching the player profile style */}
          <div className="relative mb-8">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by tournament name or organizer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 backdrop-blur-xl transition-all"
            />
          </div>
        </section>


        {/* ================= TOURNAMENT CARDS GRID ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-white/50">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs tracking-widest uppercase">Loading tournaments...</span>
            </div>
          ) : filteredTournaments.length === 0 ? (
            <div className="p-12 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl text-white/40 italic">
              No tournaments found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTournaments.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div>
                    {/* Top row: Logo/Avatar & Title */}
                    <div className="flex items-center gap-4 mb-5">
                      {item.logo ? (
                        <img src={item.logo} alt="Logo" className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/60 font-bold border border-white/10">
                          🏆
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-base text-white">{item.tournamentName || item.name || "Unnamed Tournament"}</h3>
                        <p className="text-xs text-white/50 font-mono mt-0.5">Organizer: {item.fullName || "Admin"}</p>
                      </div>
                    </div>

                    {/* Badge details */}
                    <div className="mb-5">
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider inline-block">
                        {item.prize ? `Prize: ${item.prize}` : "Tournament"}
                      </span>
                    </div>

                    {/* Meta info grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                        <span className="text-white/40 block mb-0.5">Email</span>
                        <span className="text-white/80 font-medium truncate block">{item.email || "N/A"}</span>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                        <span className="text-white/40 block mb-0.5">Date</span>
                        <span className="text-white/80 font-medium block">{item.date || "N/A"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelected(item)}
                      className="flex-1 py-2 text-xs font-medium bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-xl border border-blue-500/10 transition-colors text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 text-xs font-medium bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl border border-red-500/10 transition-colors text-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        
        {/* ================= DETAILS MODAL / SECTION ================= */}
        {selected && (
          <section className="max-w-3xl mx-auto px-6 py-10 relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                {selected.logo && (
                  <img src={selected.logo} alt="Logo" className="w-16 h-16 rounded-xl object-cover border border-white/10" />
                )}
                <div>
                  <h2 className="text-2xl font-bold">{selected.tournamentName || selected.name}</h2>
                  <p className="text-xs text-white/50 font-mono mt-1">Organized by {selected.fullName || "Admin"} ({selected.email || "No email"})</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-white/70 text-sm mb-6">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl"><strong className="text-white">Prize Pool:</strong> {selected.prize || "N/A"}</div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl"><strong className="text-white">Date:</strong> {selected.date || "N/A"}</div>
              </div>

              <div className="p-4 bg-white/5 border border-white/5 rounded-xl mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Rules & Regulations</h4>
                <ul className="text-xs text-white/70 space-y-1 list-disc list-inside">
                  <li>Only 16 teams can register</li>
                  <li>Tournament deadline applies</li>
                  <li>It is an 11-a-side tournament and 90 minutes</li>
                  <li>Be on time otherwise give penalty</li>
                  <li>You can only register 15 players</li>
                </ul>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-sm font-medium rounded-xl transition-all"
              >
                Back to List
              </button>
            </div>
          </section>
        )}

         {/* ================= FOOTER ================= */}
        <footer className="text-center py-8 border-t border-white/10 text-white/50 text-xs relative z-10 bg-white/5 backdrop-blur-xl">
          © 2026 SLIIT Football Tournament System. All Rights Reserved.
        </footer>

        </div>

      
        <div 
          variants={itemVariants}
          className="flex flex-wrap justify-between items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 gap-4"
        >

          <div>
            <h1 className="text-3xl font-bold text-white">User Dashboard</h1>
            <p className="text-white/60 mt-1">Manage SLIIT Football Platform</p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl focus-within:border-blue-400 transition-colors">
              <Search size={18} className="text-white/50" />
              <input 
                placeholder="Search..." 
                className="bg-transparent outline-none w-28 focus:w-40 transition-all duration-300 text-white placeholder-white/40" 
              />
            </div>
            <div className="relative cursor-pointer">
              <Bell className="text-blue-400" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full" />
            </div>
            <UserCircle size={42} className="text-green-400 cursor-pointer" />
          </div>
        </div>

        {/* STATISTICS CARDS */}
        <div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h2 className="text-3xl font-bold text-white mt-2">{item.value}</h2>
                    <div className="flex items-center gap-1.5 text-green-400 text-sm mt-3">
                      <TrendingUp size={16} />
                      <span>{item.growth}</span>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Icon size={32} className="text-blue-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        

        

        

        {/* RECENT ACTIVITIES & QUICK ACTIONS */}
        <div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Recent Activities</h2>
            </div>
            <div className="space-y-3">
              {activities.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-white/80 text-sm">{item}</p>
                  </div>
                  <span className="text-xs text-white/50">Today</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Add Player", icon: Users, color: "border-blue-400/20 text-blue-400 bg-blue-500/20" },
                { label: "Create Tournament", icon: Trophy, color: "border-green-400/20 text-green-400 bg-green-500/20" },
                { label: "Schedule Match", icon: Calendar, color: "border-yellow-400/20 text-yellow-400 bg-yellow-500/20" },
                { label: "Manage Tickets", icon: Ticket, color: "border-purple-400/20 text-purple-400 bg-purple-500/20" }
              ].map((action, index) => {
                const ActionIcon = action.icon;
                return (
                  <button key={index} className={`border rounded-xl p-5 text-center transition-all ${action.color}`}>
                    <ActionIcon className="mx-auto mb-3" size={24} />
                    <p className="text-sm font-medium text-white">{action.label}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* TOP PERFORMERS */}
        <div variants={itemVariants} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Top Performers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Top Scorer", name: "A. Perera", stat: "12 Goals", color: "text-yellow-300" },
              { title: "Best Assist", name: "K. Silva", stat: "10 Assists", color: "text-green-300" },
              { title: "MVP Player", name: "M. Fernando", stat: "Season MVP", color: "text-blue-300" }
            ].map((performer, index) => (
              <div key={index} className="bg-white/5 rounded-xl p-5 border border-white/10 text-white">
                <h3 className="font-bold text-sm text-white/80">{performer.title}</h3>
                <p className="text-lg font-semibold mt-2">{performer.name}</p>
                <span className={`text-sm font-medium ${performer.color}`}>{performer.stat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <footer className="text-center text-white/50 py-8 border-t border-white/10">
          <p>© 2026 SLIIT Football Admin Dashboard</p>
        </footer>
      </motion.div>
    </AdminLayout>
  );
}