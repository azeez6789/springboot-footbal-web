import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AdminLayout from "../component/AdminLayout.jsx";
import {
  Users,
  Trophy,
  Calendar,
  Ticket,
  DollarSign,
  Bell,
  Search,
  UserCircle,
  TrendingUp,
  Shield,
  ChevronRight,
  Activity,
  Award,
  CheckCircle,
  Clock,
  Star
} from "lucide-react";

// Canvas Particle Constellation Component
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

    // Create particles
    const particleCount = Math.floor((width * height) / 10000); // Scale with screen size
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.3
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Star Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`; // Matching blue accent
        ctx.fill();

        // Connect nearby stars
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
            // Dynamic opacity based on distance
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

return (
    <AdminLayout>
      {/* Put your dashboard stats, tables, and quick actions here directly */}
    </AdminLayout>
  );

// Variants for staggered entrance animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 260, damping: 20 } 
  }
};

export default function AdminDashboard() {
  const navigate = useNavigate();

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
    <div className="h-screen w-screen bg-[#050816] text-white relative overflow-hidden flex font-sans">
      
      {/* ================= CONNECTED STARS CANVAS BACKGROUND ================= */}
      <StarryBackground />

      {/* Ambient Moving Glow Orbs (Layered on top of stars) */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[160px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0"
      />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 h-screen overflow-y-auto p-8 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* HEADER */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-between items-center bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8 gap-4"
          >
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-white/60 mt-1">Manage SLIIT Football Platform</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl focus-within:border-blue-400 transition-colors">
                <Search size={18} className="text-white/50" />
                <input 
                  placeholder="Search..." 
                  className="bg-transparent outline-none w-32 focus:w-44 transition-all duration-300 text-white placeholder-white/40" 
                />
              </div>
              <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="relative cursor-pointer">
                <Bell className="text-blue-400" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
                <UserCircle size={42} className="text-green-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* STATISTICS CARDS */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white/60 text-sm">{item.title}</p>
                      <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
                      <div className="flex items-center gap-1.5 text-green-400 text-sm mt-3">
                        <TrendingUp size={16} />
                        <span>{item.growth}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-500/10 rounded-xl">
                      <Icon size={32} className="text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ANALYTICS & SYSTEM STATUS */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="text-blue-400" />
                <h2 className="text-2xl font-bold">Performance Analytics</h2>
              </div>

              <div className="h-56 flex items-end gap-3 sm:gap-4 pt-4">
                {[40, 65, 55, 90, 70, 85, 100].map((height, index) => (
                  <div key={index} className="flex-1 h-full flex flex-col justify-end items-center group">
                    <motion.div
                      initial={{ height: "0%" }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      className="w-full bg-gradient-to-t from-blue-500 to-green-400 rounded-t-xl group-hover:brightness-125 transition-all relative"
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-xs text-white transition-opacity whitespace-nowrap pointer-events-none">
                        {height}%
                      </div>
                    </motion.div>
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
              <h2 className="text-xl font-bold mb-6">System Status</h2>
              <div className="space-y-5">
                {[
                  { name: "Server", icon: CheckCircle, color: "text-green-400" },
                  { name: "Database", icon: CheckCircle, color: "text-green-400" },
                  { name: "Security", icon: Shield, color: "text-blue-400" },
                  { name: "Backup", icon: Clock, color: "text-yellow-400" }
                ].map((status, index) => {
                  const StatusIcon = status.icon;
                  return (
                    <motion.div 
                      key={index} 
                      whileHover={{ x: 3 }}
                      className="flex justify-between items-center p-2 rounded-lg hover:bg-white/5 transition-colors"
                    >
                      <span className="text-white/80">{status.name}</span>
                      <StatusIcon className={status.color} size={20} />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* PLAYER MANAGEMENT */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Player Management</h2>
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold shadow-lg hover:shadow-green-500/20 transition-all"
              >
                View All
              </motion.button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
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
                    <motion.tr 
                      key={index} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                      className="border-b border-white/10 transition-colors"
                    >
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
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* TOURNAMENT CARDS */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-8">
            {tournaments.map((tour, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
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
              </motion.div>
            ))}
          </motion.div>

          {/* RECENT ACTIVITIES & QUICK ACTIONS */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Recent Activities */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Activity className="text-blue-400" />
                <h2 className="text-2xl font-bold">Recent Activities</h2>
              </div>
              <div className="space-y-3">
                {activities.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                      <p className="text-white/80 text-sm">{item}</p>
                    </div>
                    <span className="text-xs text-white/50">Today</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Add Player", icon: Users, color: "blue" },
                  { label: "Create Tournament", icon: Trophy, color: "green" },
                  { label: "Schedule Match", icon: Calendar, color: "yellow" },
                  { label: "Manage Tickets", icon: Ticket, color: "purple" }
                ].map((action, index) => {
                  const ActionIcon = action.icon;
                  const colorMap = {
                    blue: "bg-blue-500/20 hover:bg-blue-500/30 border-blue-400/20 text-blue-400",
                    green: "bg-green-500/20 hover:bg-green-500/30 border-green-400/20 text-green-400",
                    yellow: "bg-yellow-500/20 hover:bg-yellow-500/30 border-yellow-400/20 text-yellow-400",
                    purple: "bg-purple-500/20 hover:bg-purple-500/30 border-purple-400/20 text-purple-400"
                  };
                  return (
                    <motion.button 
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`border rounded-xl p-5 text-center transition-all ${colorMap[action.color]}`}
                    >
                      <ActionIcon className="mx-auto mb-3" size={24} />
                      <p className="text-sm font-medium text-white">{action.label}</p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* TOP PERFORMERS */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-yellow-400" />
              <h2 className="text-2xl font-bold">Top Performers</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: "Top Scorer", name: "A. Perera", stat: "12 Goals", color: "text-yellow-300" },
                { title: "Best Assist", name: "K. Silva", stat: "10 Assists", color: "text-green-300" },
                { title: "MVP Player", name: "M. Fernando", stat: "Season MVP", color: "text-blue-300" }
              ].map((performer, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -4 }}
                  className="bg-white/5 rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <h3 className="font-bold text-sm text-white/80">{performer.title}</h3>
                  <p className="text-lg font-semibold mt-2">{performer.name}</p>
                  <span className={`text-sm font-medium ${performer.color}`}>{performer.stat}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FOOTER */}
          <footer className="text-center text-white/50 py-8 border-t border-white/10">
            <p>© 2026 SLIIT Football Admin Dashboard</p>
            <p className="text-sm mt-1">Manage • Monitor • Grow Football Community</p>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}