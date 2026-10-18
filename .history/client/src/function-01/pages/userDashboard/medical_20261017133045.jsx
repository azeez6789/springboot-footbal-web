// this is regarding the react iconsc import section for the page 
import React from "react";
import AdminLayout from "../../component/userDashboard/AdminLayout1";
// this regarding the animation content for the page
import { motion } from "framer-motion";
// icons for page
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

// animation for the card section like appear in vibrate mode 
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
// animation for the card section like appear in vibrate mode
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

  
        // here motion.div is used to create a container that will animate its child elements when they appear on the screen. The variants prop is used to define the animation states for the container and its children. The className prop is used to apply Tailwind CSS classes for styling the container.

  return (
    <AdminLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-full space-y-8"
      >

       {/* this div for big card section inside this card sectio are auto get background page color for child we want to give specific color  */} 
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 ">
            <div className="space-y-10"> {/* this is for space beetween child cars inside the big card*/}
            {/* this is for inout card for inside the big card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 ">
            <h2 className="text-2xl font-bold text-white pt-2 pb-2">Recent Activities</h2>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6  "></div>
            
            </div>
            
             <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 ">

            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 ">
               <div className="bg-white/5 border border-white/10  font-bold text-black backdrop-blur-xl rounded-2xl p-6 "> Recent Activities  34</div>

            </div>
        </div>
        </div>

        <div className = "bg-white/5 border boder-white/10  backdrop-blur-xl rounded-2xl  p-6"></div>


        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
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
           </motion.div>


          <motion.div
             className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
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
        </motion.div>
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