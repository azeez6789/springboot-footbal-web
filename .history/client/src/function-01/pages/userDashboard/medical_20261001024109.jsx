import React from "react";
import AdminLayout from "../../component/userDashboard/AdminLayout1";
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


        <div
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 "
        >

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