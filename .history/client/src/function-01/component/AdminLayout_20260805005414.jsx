import React, { useState } from "react";
import Sidebar from "./Sidebar";
import StarryBackground from "./StarryBackground";
import { motion } from "framer-motion";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-screen bg-[#050816] text-white relative overflow-hidden flex font-sans">
      <StarryBackground />

      {/* Ambient Moving Glow Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[160px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0"
      />

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Container */}
      <div className="flex-1 h-screen overflow-y-auto p-8 relative z-10">
        {children}
      </div>
    </div>
  );
}