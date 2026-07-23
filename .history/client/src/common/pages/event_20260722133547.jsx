import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

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

export default function EventPage() {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: "SLIIT Sports Fest 2026",
      type: "Annual Sports Festival",
      venue: "SLIIT Main Ground",
      date: "2026 July 15",
      status: "Upcoming",
      desc: "The biggest annual sports festival with multiple games, competitions, and entertainment.",
    },
    {
      id: 2,
      name: "Football Night Showdown",
      type: "Night Match Event",
      venue: "Indoor Arena",
      date: "2026 August 01",
      status: "Live",
      desc: "Night football event with DJ, lights, and high-energy matches.",
    },
    {
      id: 3,
      name: "Freshers Welcome Sports Day",
      type: "Freshers Event",
      venue: "Faculty Grounds",
      date: "2026 September 05",
      status: "Coming Soon",
      desc: "A welcome sports event for new students with fun games and matches.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-y-auto relative font-sans">

      {/* ================= CONNECTED STARS CANVAS BACKGROUND ================= */}
      <StarryBackground />

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">

          <div className="flex items-center gap-3">
            <img src={Logo} className="w-10 h-10 object-contain" alt="SLIIT Sports Logo" />
            <h1 className="font-bold tracking-wide">SLIIT SPORTS</h1>
          </div>

          <nav className="hidden md:flex gap-6 text-white/70 font-medium text-sm">
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => navigate("/pages/tournament")} className="hover:text-white transition-colors">Tournaments</button>
            <button className="text-blue-400 font-semibold" onClick={() => navigate("/pages/event")}>Events</button>
            <button onClick={() => navigate("/pages/ticket")} className="hover:text-white transition-colors">Ticket</button>
            <button onClick={() => navigate("/component/about")} className="hover:text-white transition-colors">About</button>
          </nav>

          <div className="flex gap-3 text-sm font-medium">
            <button onClick={() => navigate("/component/login")} className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-all rounded-xl">Login</button>
            <button onClick={() => navigate("/register")} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 hover:opacity-90 transition-all text-black rounded-xl">Join</button>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text tracking-tight">
          SLIIT Event Arena
        </h1>
        <p className="text-white/60 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          Explore sports events, live shows, freshers days, and university celebrations.
        </p>
      </section>

      {/* ================= EVENT STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl hover:bg-white/[0.08] transition-colors">
          <h2 className="text-3xl md:text-4xl text-blue-400 font-bold">12</h2>
          <p className="text-white/60 text-sm mt-1">Total Events</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl hover:bg-white/[0.08] transition-colors">
          <h2 className="text-3xl md:text-4xl text-green-400 font-bold">5</h2>
          <p className="text-white/60 text-sm mt-1">Live Events</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl hover:bg-white/[0.08] transition-colors">
          <h2 className="text-3xl md:text-4xl text-blue-400 font-bold">8</h2>
          <p className="text-white/60 text-sm mt-1">Upcoming</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl hover:bg-white/[0.08] transition-colors">
          <h2 className="text-3xl md:text-4xl text-green-400 font-bold">20+</h2>
          <p className="text-white/60 text-sm mt-1">Clubs Participating</p>
        </div>

      </section>

      {/* ================= EVENT CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 relative z-10">

        {events.map((e) => (
          <div key={e.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:border-white/20 transition-all flex flex-col justify-between">

            <div>
              <h2 className="text-xl font-bold">{e.name}</h2>
              <p className="text-white/60 text-sm mt-1">{e.type}</p>

              <div className="mt-4 text-sm text-white/70 space-y-1 font-mono">
                <p>Venue: <span className="text-white">{e.venue}</span></p>
                <p>Date: <span className="text-white">{e.date}</span></p>
                <p>Status: <span className="text-blue-400">{e.status}</span></p>
              </div>
            </div>

            <button
              onClick={() => setSelectedEvent(e)}
              className="mt-6 w-full py-2.5 bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold rounded-xl hover:opacity-90 transition-all text-sm"
            >
              View Event
            </button>

          </div>
        ))}

      </section>

      {/* ================= EVENT DETAILS ================= */}
      {selectedEvent && (
        <section className="max-w-5xl mx-auto px-6 py-10 relative z-10">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-2xl shadow-2xl animate-fade-in">

            <h2 className="text-3xl font-bold mb-4 tracking-tight">{selectedEvent.name}</h2>

            <p className="text-white/60 mb-6 leading-relaxed">{selectedEvent.desc}</p>

            <div className="grid md:grid-cols-2 gap-4 text-white/70 text-sm">
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl">Type: <span className="text-white font-medium">{selectedEvent.type}</span></div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl">Venue: <span className="text-white font-medium">{selectedEvent.venue}</span></div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl">Date: <span className="text-white font-medium">{selectedEvent.date}</span></div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl">Status: <span className="text-blue-400 font-medium">{selectedEvent.status}</span></div>
            </div>

            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-6 px-6 py-2.5 bg-white/10 hover:bg-white/20 transition-all rounded-xl text-sm font-medium"
            >
              Back
            </button>

          </div>

        </section>
      )}

      {/* ================= SCHEDULE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">Event Schedule</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:bg-white/[0.08] transition-colors">
              <h3 className="font-bold text-blue-400">Day {i + 1}</h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Matches, performances, and sports activities planned for the day.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">Event Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-40 bg-white/10 hover:bg-white/15 transition-all rounded-xl border border-white/10 backdrop-blur-md cursor-pointer"></div>
          ))}

        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">Latest Event News</h2>

        <div className="space-y-4">

          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:bg-white/[0.08] transition-colors">
              <h3 className="font-bold text-base">Event Update #{i + 1}</h3>
              <p className="text-white/60 text-sm mt-1">
                Latest updates, schedules, and announcements for SLIIT sports events.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">FAQ</h2>

        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl">
              <h3 className="font-bold text-base">Event Question {i + 1}</h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Information about participation, rules, and scheduling.
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t border-white/10 text-white/50 text-sm bg-white/5 backdrop-blur-xl relative z-10">
        © 2026 SLIIT Event System. All rights reserved.
      </footer>

    </div>
  );
}