import { useEffect, useRef } from "react";
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
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`; // Cyan/blue tint
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

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-x-hidden relative font-sans">

      {/* ===== CONNECTED STARS CANVAS BACKGROUND ===== */}
      <StarryBackground />

      {/* ===== BACKGROUND GLOW EFFECTS ===== */}
      <div className="fixed w-[500px] h-[500px] bg-blue-500/30 blur-[120px] rounded-full top-[-100px] left-[-100px] pointer-events-none z-0" />
      <div className="fixed w-[500px] h-[500px] bg-green-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px] pointer-events-none z-0" />
      <div className="fixed w-full h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),transparent_60%)] pointer-events-none z-0" />

      {/* ===== HEADER (GLASSMORPHISM) ===== */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Sports Hub Logo" className="w-10 h-10 object-contain" />
              <h1 className="text-xl font-bold tracking-wide">SPORTS HUB</h1>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex gap-8 text-sm text-white/80 font-medium">
              <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
              <button onClick={() => navigate('/pages/tournament')} className="hover:text-white transition-colors">Tournaments</button>
              <button onClick={() => navigate('/pages/event')} className="hover:text-white transition-colors">Events</button>
              <button onClick={() => navigate('/pages/ticket')} className="hover:text-white transition-colors">Tickets</button>
              <button onClick={() => navigate('/component/about')} className="text-blue-400 font-semibold">About</button>
            </nav>

            {/* Buttons */}
            <div className="flex gap-3 text-sm">
              <button
                onClick={() => navigate('/component/login')}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 transition-all font-medium"
              >
                Log In
              </button>

              <button
                onClick={() => navigate('/component/register')}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold hover:scale-105 transition-all"
              >
                Get Started
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="text-center py-24 px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
          About Our Platform
        </h1>

        <p className="mt-6 text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
          A next-generation sports ecosystem built for players, teams, and fans to connect,
          compete, and celebrate the game.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur hover:bg-white/20 transition-all font-medium text-sm">
            Explore Features
          </button>
          <button 
            onClick={() => navigate('/component/register')}
            className="px-6 py-3 rounded-xl bg-blue-500/80 hover:bg-blue-500 transition-all font-medium text-sm shadow-lg"
          >
            Join Now
          </button>
        </div>
      </section>

      {/* ===== GLASS CARDS SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.02] transition-all shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-white/70 leading-relaxed text-sm md:text-base">
            We aim to revolutionize sports management by providing a unified digital platform
            that simplifies tournaments, improves engagement, and connects communities.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.02] transition-all shadow-xl">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul className="space-y-3 text-white/70 text-sm md:text-base">
            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Real-time event tracking</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Smooth tournament registration</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Secure ticket system</li>
            <li className="flex items-center gap-2"><span className="text-green-400">✔</span> Modern UI experience</li>
          </ul>
        </div>

      </section>

      {/* ===== STATS ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">

        {[
          ["500+", "Teams"],
          ["1200+", "Players"],
          ["300+", "Events"],
          ["50+", "Tournaments"],
        ].map(([num, label], i) => (
          <div
            key={i}
            className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all shadow-lg"
          >
            <h3 className="text-3xl font-bold text-blue-400">{num}</h3>
            <p className="text-white/60 mt-2 text-sm">{label}</p>
          </div>
        ))}

      </section>

      {/* ===== TIMELINE ===== */}
      <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>

        <div className="space-y-6">

          {[
            ["2022", "Idea Started", "The concept of a unified sports platform was born."],
            ["2023", "Development", "We built the first working prototype."],
            ["2024", "Beta Launch", "Users started testing and giving feedback."],
            ["2026", "Global Release", "Fully launched with advanced features."],
          ].map(([year, title, desc], i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-md hover:border-white/20 transition-all"
            >
              <h3 className="text-xl font-bold text-blue-300">{year} - {title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="py-20 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

          {["Development", "Design", "Support"].map((team, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:scale-105 transition-all shadow-lg"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-400 mb-4 shadow-md" />
              <h3 className="font-bold text-lg">{team} Team</h3>
              <p className="text-white/60 mt-2 text-sm">Professional & dedicated members</p>
            </div>
          ))}

        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 text-center border-t border-white/10 bg-white/5 backdrop-blur-xl relative z-10">
        <p className="text-white/60 text-xs">© 2026 Sports Hub. All rights reserved.</p>
      </footer>

    </div>
  );
}