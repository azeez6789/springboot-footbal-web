import React from "react";
import AdminLayout from "../component/AdminLayout";
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
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-between items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
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
        </motion.div>

        {/* STATISTICS CARDS */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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
        </motion.div>

        {/* ANALYTICS & SYSTEM STATUS */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Performance Analytics</h2>
            </div>

            <div className="h-56 flex items-end gap-3 pt-4 overflow-x-auto">
              {[40, 65, 55, 90, 70, 85, 100].map((height, index) => (
                <div key={index} className="flex-1 min-w-[24px] h-full flex flex-col justify-end items-center group">
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="w-full bg-gradient-to-t from-blue-500 to-green-400 rounded-t-xl group-hover:brightness-125 transition-all relative"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between text-white/50 text-sm mt-5 px-1">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">System Status</h2>
            <div className="space-y-4">
              {[
                { name: "Server", icon: CheckCircle, color: "text-green-400" },
                { name: "Database", icon: CheckCircle, color: "text-green-400" },
                { name: "Security", icon: Shield, color: "text-blue-400" },
                { name: "Backup", icon: Clock, color: "text-yellow-400" }
              ].map((status, index) => {
                const StatusIcon = status.icon;
                return (
                  <div key={index} className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 text-white">
                    <span className="text-white/80">{status.name}</span>
                    <StatusIcon className={status.color} size={20} />
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* PLAYER MANAGEMENT */}
        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Player Management</h2>
            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-white">
              <thead>
                <tr className="border-b border-white/10 text-white/50 text-sm">
                  <th className="pb-4 font-normal">Player</th>
                  <th className="pb-4 font-normal">Position</th>
                  <th className="pb-4 font-normal">Team</th>
                  <th className="pb-4 font-normal">Status</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="py-4 font-semibold">{player.name}</td>
                    <td className="text-white/70">{player.position}</td>
                    <td className="text-white/70">{player.team}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${
                        player.status === "Active"
                          ? "bg-green-400/20 text-green-300 border border-green-500/30"
                          : "bg-yellow-400/20 text-yellow-300 border border-yellow-500/30"
                      }`}>
                        {player.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* TOURNAMENT CARDS */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tournaments.map((tour, index) => (
            <div key={index} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-between text-white">
              <div>
                <div className="flex justify-between items-center">
                  <Trophy className="text-yellow-400" />
                  <Star size={18} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mt-4">{tour.name}</h3>
                <p className="text-white/60 text-sm mt-2">{tour.date}</p>
                <p className="text-blue-300 text-sm mt-1">{tour.teams}</p>
              </div>
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium">
                  {tour.status}
                </span>
                <ChevronRight size={18} className="text-white/60" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* RECENT ACTIVITIES & QUICK ACTIONS */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        </motion.div>

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