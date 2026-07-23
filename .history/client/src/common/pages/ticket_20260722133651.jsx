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

export default function TicketPage() {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([
    {
      id: 1,
      question: "How can I join SLIIT Football team?",
      answer: "You can join through official trials announced on the Events page.",
      status: "Answered",
    },
    {
      id: 2,
      question: "When is the next tournament?",
      answer: "Next tournament starts in July 2026 at main ground.",
      status: "Answered",
    },
  ]);

  const [form, setForm] = useState({ question: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitTicket = (e) => {
    e.preventDefault();

    if (!form.question.trim()) return;

    const newTicket = {
      id: tickets.length + 1,
      question: form.question,
      answer: "Pending response from admin...",
      status: "Pending",
    };

    setTickets([newTicket, ...tickets]);
    setForm({ question: "" });
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-y-auto relative">

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
            <h1 className="font-bold tracking-wider text-sm md:text-base">SLIIT FOOTBALL SUPPORT</h1>
          </div>

          <nav className="hidden md:flex gap-6 text-white/70 text-sm font-medium">
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => navigate("/pages/tournament")} className="hover:text-white transition-colors">Tournaments</button>
            <button onClick={() => navigate("/pages/event")} className="hover:text-white transition-colors">Events</button>
            <button onClick={() => navigate("/pages/ticket")} className="hover:text-white transition-colors">Tickets</button>
            <button onClick={() => navigate("/component/about")} className="hover:text-white transition-colors">About</button>
          </nav>

          <div className="flex gap-3 text-sm font-medium">
            <button onClick={() => navigate("/component/login")} className="px-4 py-2 bg-white/10 hover:bg-white/15 transition-all rounded-xl">
              Login
            </button>
            <button onClick={() => navigate("/component/register")} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold rounded-xl hover:opacity-90 transition-all">
              Join
            </button>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center py-20 px-6 relative z-10">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
          SLIIT Football Support Center
        </h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Ask questions about tournaments, teams, schedules, and football activities. Our team will respond quickly.
        </p>
      </section>

      {/* ================= ASK QUESTION BOX ================= */}
      <section className="max-w-4xl mx-auto px-6 relative z-10">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">

          <h2 className="text-xl font-bold mb-4">Submit Your Question</h2>

          <form onSubmit={submitTicket} className="flex flex-col gap-4">

            <textarea
              name="question"
              value={form.question}
              onChange={handleChange}
              placeholder="Type your question about SLIIT Football..."
              className="w-full h-32 p-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
            />

            <button
              type="submit"
              className="py-3 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg hover:opacity-90 active:scale-[0.99] transition-all"
            >
              Submit Ticket
            </button>

          </form>

        </div>

      </section>

      {/* ================= TICKET LIST ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">

        <h2 className="text-2xl font-bold mb-6">Your Tickets</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {tickets.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg flex flex-col justify-between"
            >

              <div>
                <h3 className="font-bold text-lg">{t.question}</h3>

                <p className="text-white/60 mt-3 text-sm leading-relaxed">
                  {t.answer}
                </p>
              </div>

              <div className="mt-6 flex justify-between items-center pt-4 border-t border-white/5">

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    t.status === "Answered"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                  }`}
                >
                  {t.status}
                </span>

                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                  View Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20 relative z-10">

        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl hover:border-white/20 transition-all"
            >
              <h3 className="font-bold text-base">General Question {i + 1}</h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Information about SLIIT football tournaments, events, rules, and participation.
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-8 border-t border-white/10 text-white/50 text-xs relative z-10 bg-white/5 backdrop-blur-xl">
        © 2026 SLIIT Football Support System. All Rights Reserved.
      </footer>

    </div>
  );
}