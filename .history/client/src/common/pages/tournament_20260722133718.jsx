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

    // Canvas render loop
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
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`; // Dynamic cyan/blue tint
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

export default function TournamentPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const tournaments = [
    {
      name: "SLIIT Legacy Shield",
      type: "Outdoor Championship",
      teams: 16,
      venue: "SLIIT Main Ground",
      date: "2026 July 20",
      status: "Upcoming",
      prize: "$5000",
      desc: "Elite football championship representing legacy and pride."
    },
    {
      name: "SLIIT Indoor Extravaganza",
      type: "Indoor Futsal",
      teams: 12,
      venue: "Indoor Arena",
      date: "2026 August 10",
      status: "Open",
      prize: "$3000",
      desc: "Fast-paced indoor football tournament with technical gameplay."
    },
    {
      name: "SLIIT Freshers Tournament",
      type: "Freshers Cup",
      teams: 8,
      venue: "Faculty Ground",
      date: "2026 September 01",
      status: "Coming Soon",
      prize: "$1500",
      desc: "Entry tournament for new students to showcase talent."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-y-auto relative font-sans">

      {/* ================= CONNECTED STARS CANVAS BACKGROUND ================= */}
      <StarryBackground />

      {/* ================= BACKGROUND GLOW ORBS ================= */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="SLIIT Logo" className="w-10 h-10 object-contain" />
            <h1 className="font-bold tracking-wider text-sm md:text-base">SLIIT FOOTBALL</h1>
          </div>

          <nav className="hidden md:flex gap-6 text-white/70 text-sm font-medium">
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => navigate("/pages/tournament")} className="hover:text-white transition-colors">Tournaments</button>
            <button onClick={() => navigate("/pages/event")} className="hover:text-white transition-colors">Events</button>
            <button onClick={() => navigate("/pages/ticket")} className="hover:text-white transition-colors">Ticket</button>
            <button onClick={() => navigate("/component/about")} className="hover:text-white transition-colors">About</button>
          </nav>

          <div className="flex gap-3 text-sm font-medium">
            <button onClick={() => navigate("/component/login")} className="px-4 py-2 bg-white/10 hover:bg-white/15 transition-all rounded-xl">Login</button>
            <button onClick={() => navigate("/component/register")} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold rounded-xl hover:opacity-90 transition-all">Join</button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6 relative z-10">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
          SLIIT Tournament Universe
        </h1>
        <p className="text-white/60 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Explore competitive football tournaments, rankings, live matches, and team battles across SLIIT.
        </p>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 relative z-10">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl hover:border-white/20 transition-all">
          <h2 className="text-3xl text-blue-400 font-bold">3</h2>
          <p className="text-white/60 text-sm mt-1">Active Tournaments</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl hover:border-white/20 transition-all">
          <h2 className="text-3xl text-green-400 font-bold">36</h2>
          <p className="text-white/60 text-sm mt-1">Total Teams</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl hover:border-white/20 transition-all">
          <h2 className="text-3xl text-blue-400 font-bold">120+</h2>
          <p className="text-white/60 text-sm mt-1">Players</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl hover:border-white/20 transition-all">
          <h2 className="text-3xl text-green-400 font-bold">5</h2>
          <p className="text-white/60 text-sm mt-1">Championships</p>
        </div>
      </section>

      {/* ================= TOURNAMENT LIST ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8 relative z-10">

        {tournaments.map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-white/20 transition-all">

            <div>
              <h2 className="text-xl font-bold">{t.name}</h2>
              <p className="text-blue-400 text-sm mt-1 font-medium">{t.type}</p>

              <div className="mt-4 text-sm text-white/70 space-y-1.5 border-t border-white/5 pt-4">
                <p><span className="text-white/40">Teams:</span> {t.teams}</p>
                <p><span className="text-white/40">Venue:</span> {t.venue}</p>
                <p><span className="text-white/40">Date:</span> {t.date}</p>
                <p><span className="text-white/40">Status:</span> {t.status}</p>
                <p><span className="text-white/40">Prize:</span> {t.prize}</p>
              </div>
            </div>

            <button
              onClick={() => setSelected(t)}
              className="mt-6 w-full py-2.5 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold uppercase tracking-wider text-xs rounded-xl shadow-md hover:opacity-90 active:scale-[0.99] transition-all"
            >
              View Details
            </button>

          </div>
        ))}

      </section>

      {/* ================= DETAILS ================= */}
      {selected && (
        <section className="max-w-5xl mx-auto px-6 py-10 relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-2">{selected.name}</h2>
            <p className="text-white/60 mb-6 text-sm leading-relaxed">{selected.desc}</p>

            <div className="grid md:grid-cols-2 gap-4 text-white/70 text-sm">
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl"><strong className="text-white">Type:</strong> {selected.type}</div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl"><strong className="text-white">Teams:</strong> {selected.teams}</div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl"><strong className="text-white">Venue:</strong> {selected.venue}</div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-xl"><strong className="text-white">Date:</strong> {selected.date}</div>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 px-6 py-2.5 bg-white/10 hover:bg-white/15 text-sm font-medium rounded-xl transition-all"
            >
              Back
            </button>
          </div>
        </section>
      )}

      {/* ================= MATCH SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold mb-6">Upcoming Matches</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-white/20 transition-all">
              <h3 className="font-bold text-base">Team A vs Team B</h3>
              <p className="text-white/60 text-sm mt-2">Stadium Match</p>
              <p className="text-blue-400 text-sm mt-1 font-medium">Time: 6:00 PM</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>

        <div className="space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:border-white/20 transition-all">
              <h3 className="font-bold text-base">Tournament Update #{i + 1}</h3>
              <p className="text-white/60 text-sm mt-1 leading-relaxed">
                SLIIT football tournament updates, team rankings, and match highlights.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl">
              <h3 className="font-bold text-base">Question {i + 1}</h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Tournament rules, registration details, and participation guidelines.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-8 border-t border-white/10 text-white/50 text-xs relative z-10 bg-white/5 backdrop-blur-xl">
        © 2026 SLIIT Football Tournament System. All Rights Reserved.
      </footer>

    </div>
  );
}