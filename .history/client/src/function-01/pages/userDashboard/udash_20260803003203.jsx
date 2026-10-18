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

const StarryBackground = () => {



const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

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
    <div className="min-h-screen bg-[#0b1220] text-white  rounded-2xl selection:bg-blue-500/30 relative overflow-hidden font-sans">
        <StarryBackground />

        <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0" />
        <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />


        <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        {/* after this three dot header space are wide */}
        <div className="flex items-center gap-3">...
           
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
        </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 pt-10 relative z-10">
        </section>

    
    
    </div>

    </AdminLayout>
  );
}