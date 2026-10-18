import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Trophy,
  LayoutDashboard,
  Users,
  Calendar,
  Ticket,
  Settings,
  LogOut,
  X,
  Menu,
} from "lucide-react";

export default function SideBar1({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, route: "/pages/userDash" },
    { label: "Medical & First Aid", icon: Users, route: "/pages/medical" },
    { label: "Players Profile", icon: Trophy, route: "/pages/tab3" },
    { label: "Organize Tournament", icon: Calendar, route: "/pages/tab4" },
    { label: "Tickets", icon: Ticket, route: "/pages/tab5" },
    { label: "Settings", icon: Settings, route: "/pages/udash" },
  ];

  return (
    <motion.aside
      animate={{ width: sidebarOpen ? 288 : 80 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="h-screen bg-white/5 border-r border-white/10 backdrop-blur-xl p-5 flex flex-col justify-between flex-shrink-0 z-20 relative select-none"
    >
      <div>
        {/* Header Area */}
        <div className="flex items-center justify-between mb-10 overflow-hidden">
          <div className="flex items-center gap-3">
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
                    className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 shrink-0"
                  >
                    <Trophy className="text-black w-5 h-5" />
                  </motion.div>
                  <h1 className="text-lg font-bold whitespace-nowrap text-white">
                    User Dashboard
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-8 h-8 rounded-full bg-[#1e293b]/70 hover:bg-[#334155] text-slate-300 hover:text-white flex items-center justify-center transition-all ml-auto shrink-0"
            aria-label="Toggle Sidebar"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>

        {/* Navigation Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.route;

            return (
              <motion.div
                key={index}
                whileHover={{ x: 4, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(item.route)}
                className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-colors ${
                  isActive
                    ? "bg-blue-500/20 text-white font-semibold"
                    : "text-white/80"
                }`}
              >
                <Icon className="text-blue-400 flex-shrink-0 w-5 h-5" />
                <AnimatePresence mode="wait">
                  {sidebarOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="whitespace-nowrap text-sm"
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

      {/* Logout Action */}
      <div className="mb-4">
        <motion.div
          whileHover={{ x: 4, backgroundColor: "rgba(239, 68, 68, 0.15)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-4 p-3 rounded-xl text-red-400 cursor-pointer transition-colors"
        >
          <LogOut className="flex-shrink-0 w-5 h-5" />
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="whitespace-nowrap text-sm font-semibold"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.aside>
  );
}