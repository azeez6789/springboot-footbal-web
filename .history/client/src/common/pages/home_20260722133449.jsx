import { useState, useEffect, useRef } from 'react';
import { Car, MapPin, Clock, Shield, Users, ChevronRight, ChevronDown, Star, Menu, X } from 'lucide-react';
import Logo from '../assets/opt3.png';
import { useNavigate } from 'react-router-dom';

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

export default function ParkingLandingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is SLIIT Football?",
      answer: "SLIIT Football is the official football team and community of the Sri Lanka Institute of Information Technology (SLIIT), dedicated to promoting football excellence, teamwork, and sportsmanship among students."
    },
    {
      question: "How can I join the SLIIT Football Team?",
      answer: "Students can participate in team selections and trials announced by the club. Details regarding registration and trial dates will be published on the website."
    },
    {
      question: "Where can I find upcoming match schedules?",
      answer: "All upcoming fixtures, match dates, venues, and kickoff times are available in the Fixtures section of the website."
    },
    {
      question: "Can I see player profiles and statistics?",
      answer: "Yes. The Players section provides information about team members, including positions, achievements, and season statistics."
    },
    {
      question: "How can I view match results?",
      answer: "Match results and score updates are regularly posted in the Results section after each game."
    },
    {
      question: "Are training sessions conducted regularly?",
      answer: "Yes. Training sessions are conducted throughout the academic year according to the schedule announced by the coaching staff."
    },
    {
      question: "How can I provide feedback about the website or football activities?",
      answer: "You can submit your suggestions, comments, or concerns through the Feedback page available on the website."
    }
  ];

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-hidden relative font-sans">

      {/* ===== CONNECTED STARS CANVAS BACKGROUND ===== */}
      <StarryBackground />

      {/* ===== BACKGROUND GLOW ===== */}
      <div className="fixed w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-120px] left-[-120px] pointer-events-none z-0" />
      <div className="fixed w-[500px] h-[500px] bg-green-400/20 blur-[160px] rounded-full bottom-[-120px] right-[-120px] pointer-events-none z-0" />

      {/* ===== HEADER (GLASS) ===== */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">

            <div className="flex items-center gap-3">
              <img src={Logo} className="w-10 h-10 object-contain" alt="SLIIT Football Logo" />
              <span className="font-bold text-xl tracking-wide">SLIIT FOOTBALL</span>
            </div>

            <nav className="hidden md:flex gap-8 text-white/80 text-sm font-medium">
              <a onClick={() => navigate('/')} className="hover:text-white cursor-pointer transition-colors">Home</a>
              <a onClick={() => navigate('/pages/Regrequest')} className="hover:text-white cursor-pointer transition-colors">Request</a>
              <a onClick={() => navigate('/pages/tournament')} className="hover:text-white cursor-pointer transition-colors">Tournaments</a>
              <a onClick={() => navigate('/pages/event')} className="hover:text-white cursor-pointer transition-colors">Events</a>
              <a onClick={() => navigate('/pages/ticket')} className="hover:text-white cursor-pointer transition-colors">Tickets</a>
              <a onClick={() => navigate('/component/about')} className="text-blue-400 font-semibold cursor-pointer">About</a>
            </nav>

            <div className="flex gap-3 text-sm font-medium">
              <button
                onClick={() => navigate('/component/login')}
                className="px-5 py-2 rounded-xl bg-white/10 border border-white/10 backdrop-blur hover:bg-white/20 transition-all"
              >
                Log In
              </button>

              <button
                onClick={() => navigate('/component/register')}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold hover:opacity-90 transition-all"
              >
                Get Started
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="text-center py-24 px-6 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text tracking-tight">
          More Than a Game
        </h1>
        <p className="text-white/70 mt-6 max-w-2xl mx-auto text-base md:text-lg">
          Join the SLIIT Football community and experience teamwork, passion, and victory.
        </p>

        <button 
          onClick={() => navigate('/component/register')}
          className="mt-8 px-8 py-3 bg-white/10 border border-white/10 rounded-xl backdrop-blur hover:bg-white/20 transition-all font-medium text-sm"
        >
          Get Started
        </button>
      </section>

      {/* ===== GLASS STATS ===== */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {[
          ["10+", "Championships"],
          ["390+", "Matches"],
          ["90%", "Win Rate"],
          ["99%", "Success"],
        ].map(([num, label], i) => (
          <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.08] transition-colors">
            <h3 className="text-3xl md:text-4xl text-blue-400 font-bold">{num}</h3>
            <p className="text-white/60 mt-2 text-sm">{label}</p>
          </div>
        ))}
      </section>

      {/* ===== HERO IMAGE SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 py-10 relative z-10">
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-10">
          <img src="/chat1.png" alt="SLIIT Football Legacy" className="w-full md:w-96 rounded-xl object-cover shadow-2xl" />

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">10+ Years of Excellence</h2>
            <p className="text-white/70 leading-relaxed">
              SLIIT Football has built a strong legacy of teamwork, discipline, and success.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (GLASS STYLE) ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-4 relative z-10">
        {[
          ["Live Match Updates", MapPin],
          ["Secure Data Protection", Shield],
          ["Customer Support", Users],
          ["Football Updates", Clock],
        ].map(([title, Icon], i) => (
          <div key={i} className="flex justify-between items-center p-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl hover:bg-white/10 transition cursor-pointer group">
            <div className="flex items-center gap-4">
              <Icon className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm md:text-base">{title}</span>
            </div>
            <ChevronRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </div>
        ))}
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">What Fans Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 hover:bg-white/[0.08] transition-colors">
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                “SLIIT Football is more than a team — it's a family.”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="max-w-4xl mx-auto px-6 py-16 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">FAQ</h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl transition-all">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium text-sm md:text-base"
              >
                <span>{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${openFaq === index ? "rotate-180 text-blue-400" : ""}`} />
              </button>

              {openFaq === index && (
                <div className="px-5 pb-5 pt-1 text-white/70 text-sm border-t border-white/5 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="text-center py-10 border-t border-white/10 bg-white/5 backdrop-blur-xl relative z-10">
        <p className="text-white/60 text-sm">© 2026 SLIIT Football. All rights reserved.</p>
      </footer>

    </div>
  );
}