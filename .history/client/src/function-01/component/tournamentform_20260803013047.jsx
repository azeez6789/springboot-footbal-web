import React, { useState, useEffect, useRef } from "react";
import { User, Shield, Calendar,Circle , Mail  , CalendarDays   ,  List ,  Hash, ShieldCheck  ,  FileText, Upload, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../../common/assets/opt3.png";
import { createTournament } from "../services/tournamentService";

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
    fullName: "",
    emailAddress: "",
    tournamentName: "",
    prize: "",
    date: "",
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

    const dataToSend = new FormData();

    dataToSend.append("fullName", formData.fullName);
    dataToSend.append("emailAddress", formData.emailAddress);
    dataToSend.append("tournamentName", formData.tournamentName);
    dataToSend.append("prize", formData.prize);
    dataToSend.append("date", formData.date);

 if (profilePicture) {
    dataToSend.append("image", profilePicture);
}

    try {
        const response = await createTournament(dataToSend);

        console.log(response.data);

        setMessage({
            type: "success",
            text: "Tournament Registered Successfully!",
        });

        setTimeout(() => {
            navigate("/pages/playerform");
        }, 2000);

    } catch (err) {
        console.error(err);

        setMessage({
            type: "error",
            text: err.response?.data?.message || "Something went wrong.",
        });
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
          <div className="flex gap-3 text-sm from-blue-500 to-green-400 font-medium">
            <button onClick={() => navigate("/pages/tournament")} className="px-4 py-2 bg-white/10   hover:bg-white/15 transition-all rounded-xl flex items-center gap-2">
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
            Create Tournament & Matches
          </h1>
          <p className="text-sm text-white/50 mt-2">
            Fill out your details regarding the Tournament & Matches
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
            <span className="text-xs text-white/40">Upload Logo (Optional)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* User ID Field */}
           

         {/* Full Name Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                <User size={14} className="text-green-400" /> Full Name *
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

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                <Mail size={14} className="text-green-400" /> Email Address
              </label>
              <input
                type="email"
                name="emailAddress"
                required
                placeholder="Enter your Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
              />
            </div>

            {/* Position Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                <Shield size={14} className="text-green-400" /> Tournament Name  
              </label>
               <input
                type="text"
                name="tournamentName"
                required
                placeholder="Enter Tournament Name"
                value={formData.tournamentName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
              />  
            </div>

            {/* Age Field */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                <Calendar size={14} className="text-green-400" /> Prize 
              </label>
              <input
                type="number"
                name="prize"
                required
                placeholder="Prize money"
                value={formData.prize}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

          </div>

          {/* Jersey Number Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
              <CalendarDays  size={14} className="text-green-400" /> DATE
            </label>
            <input
              type="date"
              name="date"
              placeholder="Tournament Start Date "
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
            />
          </div>

          {/* Bio Field */}
          <div className="space-y-2">
            <h1 className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
              <ShieldCheck  size={30} className="text-green-400" /> Rules And Regulation
            </h1>

            <h6 className = " text-xs font-semibold uppercase tracking-wider  flex items-center gap-2" >
                <Circle size={8}className="text-blue-400 ml-15"/> Only 16 Team Can Register
            </h6>
             <h6 className = " text-xs font-semibold uppercase tracking-wider  flex items-center gap-2" >
                <Circle size={8}className="text-blue-400 ml-15"/> Tournament Deadline is 
            </h6>
             <h6 className = " text-xs font-semibold uppercase tracking-wider  flex items-center gap-2" >
                <Circle size={8}className="text-blue-400 ml-15"/> It is a 11 a Side Tournament and 90 Minutes
            </h6>
             <h6 className = " text-xs font-semibold uppercase tracking-wider  flex items-center gap-2" >
                <Circle size={8}className="text-blue-400 ml-15"/> be on a time otherwise give penalty
            </h6>
             <h6 className = " text-xs font-semibold uppercase tracking-wider  flex items-center gap-2" >
                <Circle   size={8}className="text-blue-400 ml-15"/> You Can Only Register 15 Players
           </h6>
          </div>

          {/* Form Action Submit Button */}
          <button
            type="submit"
            disabled={loading}
            onClick = { () => navigate ("/pages/tournament")}
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
