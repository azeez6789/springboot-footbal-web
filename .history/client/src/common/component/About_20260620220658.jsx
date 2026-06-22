import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-x-hidden relative">

      {/* ===== BACKGROUND EFFECTS ===== */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-green-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />
      <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),transparent_60%)]" />

      {/* ===== HEADER (GLASSMORPHISM) ===== */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">

            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={Logo} className="w-10 h-10" />
              <h1 className="text-xl font-bold tracking-wide">SPORTS HUB</h1>
            </div>

            {/* Nav */}
            <nav className="hidden md:flex gap-8 text-sm text-white/80">
              <a onClick={() => navigate('/')} className="hover:text-white cursor-pointer">Home</a>
              <a onClick={() => navigate('/pages/tournament')} className="hover:text-white cursor-pointer">Tournaments</a>
              <a onClick={() => navigate('/pages/event')} className="hover:text-white cursor-pointer">Events</a>
              <a onClick={() => navigate('/pages/ticket')} className="hover:text-white cursor-pointer">Tickets</a>
              <a onClick={() => navigate('/component/about')} className="text-blue-400 cursor-pointer">About</a>
            </nav>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/component/login')}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 transition"
              >
                Log In
              </button>

              <button
                onClick={() => navigate('/component/register')}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold hover:scale-105 transition"
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

        <p className="mt-6 text-white/70 max-w-3xl mx-auto text-lg">
          A next-generation sports ecosystem built for players, teams, and fans to connect,
          compete, and celebrate the game.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur hover:bg-white/20 transition">
            Explore Features
          </button>
          <button className="px-6 py-3 rounded-xl bg-blue-500/80 hover:bg-blue-500 transition">
            Join Now
          </button>
        </div>
      </section>

      {/* ===== GLASS CARDS SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 relative z-10">

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.02] transition">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-white/70 leading-7">
            We aim to revolutionize sports management by providing a unified digital platform
            that simplifies tournaments, improves engagement, and connects communities.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:scale-[1.02] transition">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul className="space-y-3 text-white/70">
            <li>✔ Real-time event tracking</li>
            <li>✔ Smooth tournament registration</li>
            <li>✔ Secure ticket system</li>
            <li>✔ Modern UI experience</li>
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
            className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
          >
            <h3 className="text-3xl font-bold text-blue-400">{num}</h3>
            <p className="text-white/60 mt-2">{label}</p>
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
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <h3 className="text-xl font-bold text-blue-300">{year} - {title}</h3>
              <p className="text-white/70 mt-2">{desc}</p>
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
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl text-center hover:scale-105 transition"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-green-400 mb-4" />
              <h3 className="font-bold text-lg">{team} Team</h3>
              <p className="text-white/60 mt-2">Professional & dedicated members</p>
            </div>
          ))}

        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-10 text-center border-t border-white/10 bg-white/5 backdrop-blur-xl relative z-10">
        <p className="text-white/60">© 2026 Sports Hub. All rights reserved.</p>
      </footer>

    </div>
  );
}