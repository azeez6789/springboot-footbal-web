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

       

        {/* FOOTER */}
        <footer className="text-center text-white/50 py-8 border-t border-white/10">
          <p>© 2026 SLIIT Football Admin Dashboard</p>
        </footer>
      </motion.div>
    </AdminLayout>
  );
}