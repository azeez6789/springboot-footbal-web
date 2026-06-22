import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

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
    <div className="min-h-screen bg-[#070A12] text-white overflow-y-auto">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img src={Logo} className="w-10 h-10" />
            <h1 className="font-bold">SLIIT FOOTBALL</h1>
          </div>

          <nav className="hidden md:flex gap-6 text-white/70">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/pages/tournament")}>Tournaments</button>
            <button onClick={() => navigate("/pages/event")}>Events</button>
             <button onClick={() => navigate("/")}>Ticket</button>
            <button onClick={() => navigate("/component/about")}>About</button>
          </nav>

          <div className="flex gap-3">
            <button onClick={() => navigate("/login")} className="px-4 py-2 bg-white/10 rounded-xl">Login</button>
            <button onClick={() => navigate("/register")} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black rounded-xl">Join</button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
          SLIIT Tournament Universe
        </h1>
        <p className="text-white/60 mt-6 max-w-2xl mx-auto">
          Explore competitive football tournaments, rankings, live matches, and team battles across SLIIT.
        </p>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <h2 className="text-3xl text-blue-400 font-bold">3</h2>
          <p className="text-white/60">Active Tournaments</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <h2 className="text-3xl text-green-400 font-bold">36</h2>
          <p className="text-white/60">Total Teams</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <h2 className="text-3xl text-blue-400 font-bold">120+</h2>
          <p className="text-white/60">Players</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <h2 className="text-3xl text-green-400 font-bold">5</h2>
          <p className="text-white/60">Championships</p>
        </div>
      </section>

      {/* ================= TOURNAMENT LIST ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">

        {tournaments.map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

            <h2 className="text-xl font-bold">{t.name}</h2>
            <p className="text-white/60 text-sm mt-1">{t.type}</p>

            <div className="mt-4 text-sm text-white/70 space-y-1">
              <p>Teams: {t.teams}</p>
              <p>Venue: {t.venue}</p>
              <p>Date: {t.date}</p>
              <p>Status: {t.status}</p>
              <p>Prize: {t.prize}</p>
            </div>

            <button
              onClick={() => setSelected(t)}
              className="mt-5 w-full py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black rounded-xl"
            >
              View Details
            </button>

          </div>
        ))}

      </section>

      {/* ================= DETAILS ================= */}
      {selected && (
        <section className="max-w-5xl mx-auto px-6 py-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">{selected.name}</h2>
            <p className="text-white/60 mb-6">{selected.desc}</p>

            <div className="grid md:grid-cols-2 gap-4 text-white/70">
              <div className="p-4 bg-white/5 rounded-xl">Type: {selected.type}</div>
              <div className="p-4 bg-white/5 rounded-xl">Teams: {selected.teams}</div>
              <div className="p-4 bg-white/5 rounded-xl">Venue: {selected.venue}</div>
              <div className="p-4 bg-white/5 rounded-xl">Date: {selected.date}</div>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="mt-6 px-6 py-3 bg-white/10 rounded-xl"
            >
              Back
            </button>
          </div>
        </section>
      )}

      {/* ================= MATCH SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Upcoming Matches</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="font-bold">Team A vs Team B</h3>
              <p className="text-white/60 text-sm">Stadium Match</p>
              <p className="text-white/60 text-sm">Time: 6:00 PM</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>

        <div className="space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="font-bold">Tournament Update #{i + 1}</h3>
              <p className="text-white/60 text-sm">
                SLIIT football tournament updates, team rankings, and match highlights.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="mb-4 p-4 bg-white/5 border border-white/10 rounded-xl">
            <h3 className="font-bold">Question {i + 1}</h3>
            <p className="text-white/60 text-sm mt-2">
              Tournament rules, registration details, and participation guidelines.
            </p>
          </div>
        ))}
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t border-white/10 text-white/50">
        © 2026 SLIIT Football Tournament System
      </footer>

    </div>
  );
}