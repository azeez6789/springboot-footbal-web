
import React, { useState } from "react";
import SideBar1 from "./sideBar1";
import StarryBackground from "../StarryBackground";
import { motion } from "framer-motion";
import "../public/football-stadium.jpg"; // Ensure the image is in the public folder

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-screen bg-[#050816] text-white relative overflow-hidden flex font-sans">

      {/* ===== FULL-PAGE FOOTBALL STADIUM BACKGROUND ===== */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              110deg,
              rgba(5, 12, 30, 0.86),
              rgba(4, 8, 18, 0.80),
              rgba(0, 35, 29, 0.86)
            ),
            url('/football-stadium.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* ===== EXISTING ANIMATED PARTICLE BACKGROUND ===== */}
      <StarryBackground />

      {/* ===== ANIMATED BLUE GLOW ORB ===== */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0"
      />

      {/* ===== ANIMATED GREEN GLOW ORB ===== */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[160px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0"
      />

      {/* ===== SIDEBAR ===== */}
      <div className="relative z-10 shrink-0">
        <SideBar1
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      {/* ===== MAIN DASHBOARD CONTENT ===== */}
      <main className="flex-1 min-w-0 h-screen overflow-y-auto p-8 relative z-10">

        {/* Your dashboard page renders here */}
        {children}

      </main>

    </div>
  );
}
