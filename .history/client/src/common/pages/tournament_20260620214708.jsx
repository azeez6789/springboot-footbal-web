import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

export default function TournamentPage() {
  const navigate = useNavigate();
  const [activeTournament, setActiveTournament] = useState(null);

  const tournaments = [
    {
      id: 1,
      name: "SLIIT Legacy Shield",
      type: "Outdoor Championship",
      teams: 16,
      venue: "SLIIT Main Ground",
      date: "2026 July 20",
      status: "Upcoming",
      prize: "$5000",
      description:
        "The most prestigious football tournament in SLIIT history featuring elite teams competing for legacy glory.",
    },
    {
      id: 2,
      name: "SLIIT Indoor Extravaganza",
      type: "Indoor Futsal Cup",
      teams: 12,
      venue: "SLIIT Indoor Arena",
      date: "2026 August 10",
      status: "Registration Open",
      prize: "$3000",
      description:
        "Fast-paced indoor futsal tournament showcasing technical skills and quick gameplay.",
    },
    {
      id: 3,
      name: "SLIIT Freshers Tournament",
      type: "Freshers Cup",
      teams: 8,
      venue: "Faculty Grounds",
      date: "2026 September 01",
      status: "Coming Soon",
      prize: "$1500",
      description:
        "A welcoming tournament for new students to showcase their football talent.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070A12] text-white relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">

            <div className="flex items-center gap-3">
              <img src={Logo} className="w-10 h-10" />
              <span className="font-bold text-white">SLIIT FOOTBALL</span>
            </div>

            <nav className="hidden md:flex gap-8 text-white/70">
              <a onClick={() => navigate("/")} className="cursor-pointer hover:text-white">Home</a>
              <a onClick={() => navigate("/tournaments")} className="text-blue-400">Tournaments</a>
              <a onClick={() => navigate("/events")} className="hover:text-white">Events</a>
              <a onClick={() => navigate("/about")} className="hover:text-white">About</a>
            </nav>

            <div className="flex gap-3">
              <button
                onClick={() => navigate("/component/login")}
                className="px-5 py-2 rounded-xl bg-white/10 border border-white/10 backdrop-blur"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/component/register")}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold"
              >
                Get Started
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
          SLIIT Tournament Arena
        </h1>
        <p className="text-white/60 mt-6 max-w-2xl mx-auto">
          Explore elite football tournaments, competitive leagues, and freshers events at SLIIT.
        </p>
      </section>

      {/* ================= TOURNAMENT LIST ================= */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20">

        {tournaments.map((t) => (
          <div
            key={t.id}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 hover:scale-105 transition"
          >

            <h2 className="text-xl font-bold text-white">{t.name}</h2>
            <p className="text-white/60 text-sm mt-1">{t.type}</p>

            <div className="mt-4 space-y-2 text-white/70 text-sm">
              <p>Teams: {t.teams}</p>
              <p>Venue: {t.venue}</p>
              <p>Date: {t.date}</p>
              <p>Status: {t.status}</p>
              <p>Prize: {t.prize}</p>
            </div>

            <button
              onClick={() => setActiveTournament(t)}
              className="mt-5 w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold"
            >
              View Details
            </button>

          </div>
        ))}

      </section>

      {/* ================= DETAILS SECTION ================= */}
      {activeTournament && (
        <section className="max-w-5xl mx-auto px-6 pb-20">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8">

            <h2 className="text-3xl font-bold text-white mb-4">
              {activeTournament.name}
            </h2>

            <p className="text-white/70 mb-6">
              {activeTournament.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-white/70">
              <div className="p-4 bg-white/5 rounded-xl">Type: {activeTournament.type}</div>
              <div className="p-4 bg-white/5 rounded-xl">Teams: {activeTournament.teams}</div>
              <div className="p-4 bg-white/5 rounded-xl">Venue: {activeTournament.venue}</div>
              <div className="p-4 bg-white/5 rounded-xl">Date: {activeTournament.date}</div>
              <div className="p-4 bg-white/5 rounded-xl">Status: {activeTournament.status}</div>
              <div className="p-4 bg-white/5 rounded-xl">Prize: {activeTournament.prize}</div>
            </div>

            <button
              onClick={() => setActiveTournament(null)}
              className="mt-6 px-6 py-3 bg-white/10 border border-white/10 rounded-xl"
            >
              Back to Tournaments
            </button>

          </div>

        </section>
      )}

      {/* ================= EXTRA INFO SECTION (TO MAKE PAGE BIG) ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-bold mb-2">Elite Competition</h3>
          <p className="text-white/60 text-sm">
            Compete with top university players in high-level tournaments.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-bold mb-2">Professional Setup</h3>
          <p className="text-white/60 text-sm">
            Stadium-level organization, referees, and match tracking.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="font-bold mb-2">Live Updates</h3>
          <p className="text-white/60 text-sm">
            Stay updated with scores, fixtures, and tournament progress.
          </p>
        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t border-white/10 text-white/50">
        © 2026 SLIIT Football Tournament System
      </footer>

    </div>
  );
}