// src/components/Sidebar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Calendar,
  Ticket,
  Settings,
  Menu,
  X,
  LogOut
} from "lucide-react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { label: "Dashboard", icon: LayoutDashboard, route: "/" },
    { label: "Requests", icon: Users, route: "/pages/Regrequest" },
    { label: "Players Profile", icon: Trophy, route: "/pages/playerRequest" },
    { label: "Matches", icon: Calendar, route: "/pages/playerform" },
    { label: "Tickets", icon: Ticket, route: "/pages/ticket" },
    { label: "Settings", icon: Settings, route: "/component/register" }
  ];

  return (
    <motion.div
      animate={{ width: sidebarOpen ? 288 : 80 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="h-screen bg-white/5 border-r border-white/10 backdrop-blur-xl p-5 flex flex-col justify-between flex-shrink-0 z-20 relative"
    >
      <div>
        
        <div className="flex items-center justify-between mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.05 }}
                  className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400"
                >
                  <Trophy className="text-black" />
                </motion.div>
                <h1 className="text-lg font-bold whitespace-nowrap">Admin Dashboard</h1>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Navigation Items */}
        <div className="space-y-3">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.route;

            return (
              <motion.div
                key={index}
                whileHover={{ x: 4, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(item.route)}
                className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors ${
                  isActive ? "bg-blue-500/20 text-white font-semibold" : "text-white/80"
                }`}
              >
                <Icon className="text-blue-400 flex-shrink-0" />
                <AnimatePresence mode="wait">
                  {sidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Logout Button */}
      <div className="mb-4">
        <motion.div
          whileHover={{ x: 4, backgroundColor: "rgba(239, 68, 68, 0.15)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/home")}
          className="flex items-center gap-4 p-3 rounded-xl text-red-400 cursor-pointer transition-colors"
        >
          <LogOut className="flex-shrink-0" />
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="whitespace-nowrap"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}