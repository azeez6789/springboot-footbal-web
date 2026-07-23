import React, { useState, useEffect, useRef } from "react";
import { User, Shield, Calendar, Hash, FileText, Upload, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../common/assets/opt3.png";

// Interactive Particle Constellation Canvas Component
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

    // Dynamic particle density based on screen dimensions
    const particleCount = Math.floor((width * height) / 10000);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    // Canvas animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Particle position update
        p.x += p.vx;
        p.y += p.vy;

        // Screen collision/bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw individual star point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`; // Cyan/Blue dynamic tint
        ctx.fill();

        // Connect nearby points with glowing lines
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

export default function PlayerProfileForm() {
  const navigate = useNavigate();

  // 1. Form state managing inputs expected by your Spring Boot controller
  const [formData, setFormData] = useState({
    userId: "",
    fullName: "",
    position: "",
    age: "",
    jerseyNumber: "",
    bio: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Handle textual input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input changes and set preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create a local URL for instant UI preview
    }
  };

  // 2. Submit data as multipart/form-data to match your Spring Boot @RequestParam layout
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    // Build FormData container
    const dataToSend = new FormData();
    dataToSend.append("userId", formData.userId);
    dataToSend.append("fullName", formData.fullName);
    dataToSend.append("position", formData.position);
    dataToSend.append("age", formData.age);
    dataToSend.append("jerseyNumber", formData.jerseyNumber);
    dataToSend.append("bio", formData.bio);
    
    if (profilePicture) {
      dataToSend.append("profilePicture", profilePicture);
    }

    try {
      const response = await fetch("http://localhost:8081/api/player-profiles/with-image", {
        method: "POST",
        body: dataToSend, // Fetch configures the headers automatically for FormData
      });

      if (!response.ok) {
        throw new Error("Failed to save player profile. Check backend server logs.");
      }

      const result = await response.json();
      console.log("Success:", result);
      
      setMessage({ type: "success", text: "Profile registered and saved successfully!" });
      
      // Redirect back to the profile table display page after a short delay
      setTimeout(() => {
        navigate("/pages/playerform"); 
      }, 2000);

    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: err.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white selection:bg-blue-500/30 relative overflow-hidden flex flex-col justify-between font-sans">
      
      {/* ===== CONNECTED STARS CANVAS BACKGROUND ===== */}
      <StarryBackground />

      {/* ===== BACKGROUND GLOW EFFECTS ===== */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/10 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="SLIIT Logo" className="w-10 h-10 object-contain" />
            <h1 className="font-bold tracking-wider text-sm md:text-base">SLIIT FOOTBALL</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-white/70 text-sm font-medium">
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => navigate("/player-requests")} className="hover:text-white transition-colors">Requests</button>
            <button onClick={() => navigate("/pages/event")} className="hover:text-white transition-colors">Events</button>
          </nav>
          <div className="flex gap-3 text-sm font-medium">
            <button onClick={() => navigate("/player-requests")} className="px-4 py-2 bg-white/10 hover:bg-white/15 transition-all rounded-xl flex items-center gap-2">
              <ArrowLeft size={14} /> Back
            </button>
          </div>
        </div>
      </header>

      {/* ===== CONTENT FORM CONTAINER ===== */}
      <div className="max-w-3xl mx-auto w-full px-6 py-12 relative z-10 flex-grow">
        
        {/* Headings */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-green-400 bg-clip-text text-transparent">
            Create Player Profile
          </h1>
          <p className="text-sm text-white/50 mt-2">
            Fill out your details to link your profile to the team roster database.
          </p>
        </div>

        {/* API Response Messages */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-xl border text-center text-sm backdrop-blur-xl transition-all ${
            message.type === "success" 
              ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" 
              : "bg-rose-500/10 border-rose-500/30 text-rose-400"
          }`}>
            {message.text}
          </div>
        )}

        {/* Main Request Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl space-y-6">
          
          {/* PROFILE PICTURE UPLOAD STRIP */}
          <div className="flex flex-col items-center justify-center border-b border-white/10 pb-6">
            <div className="relative group w-24 h-24 bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden mb-3 shadow-inner">
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <User className="text-white/20 w-10 h-10" />
              )}
              <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-[10px] uppercase font-bold tracking-wider text-blue-400">
                <Upload size={16} className="mb-1" />
                Upload
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
            <span className="text-xs text-white/40">Profile Image (Optional)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* User ID Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                <Hash size={14} className="text-blue-400" /> User ID *
              </label>
              <input
                type="number"
                name="userId"
                required
                placeholder="Enter your system user numerical ID"
                value={formData.userId}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
              />
            </div>

            {/* Full Name Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                <User size={14} className="text-blue-400" /> Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="First and last name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Position Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                <Shield size={14} className="text-blue-400" /> Field Position *
              </label>
              <select
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="w-full bg-[#111928] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              >
                <option value="" disabled className="text-white/30">Select position...</option>
                <option value="Goalkeeper">Goalkeeper</option>
                <option value="Defender">Defender</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Forward">Forward</option>
              </select>
            </div>

            {/* Age Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                <Calendar size={14} className="text-blue-400" /> Player Age *
              </label>
              <input
                type="number"
                name="age"
                required
                min="15"
                max="50"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

          </div>

          {/* Jersey Number Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
              <Hash size={14} className="text-blue-400" /> Jersey Number (Optional)
            </label>
            <input
              type="text"
              name="jerseyNumber"
              placeholder="e.g., 10 or 07"
              value={formData.jerseyNumber}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            />
          </div>

          {/* Bio Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
              <FileText size={14} className="text-blue-400" /> Biography / Player Background
            </label>
            <textarea
              name="bio"
              rows="4"
              placeholder="Write a brief overview of your playing career, strong foot, or milestones..."
              value={formData.bio}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none leading-relaxed"
            />
          </div>

          {/* Form Action Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3.5 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg hover:opacity-90 disabled:opacity-50 transition-all duration-300 transform active:scale-[0.99]"
          >
            {loading ? "Saving to Database..." : "Register Profile Data"}
          </button>

        </form>
      </div>

      {/* ===== FOOTER BAR ===== */}
      <footer className="border-t border-white/5 py-4 text-center text-xs text-white/20 relative z-10 bg-white/5 backdrop-blur-xl">
        &copy; 2026 SLIIT Football Club Administration Panel. All Rights Reserved.
      </footer>
      
    </div>
  );
}