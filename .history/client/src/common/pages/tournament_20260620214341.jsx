import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

export default function TournamentPage() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("home");
  const [selectedTournament, setSelectedTournament] = useState(null);

  const tournaments = [
    {
      id: 1,
      name: "SLIIT Champions League",
      teams: 16,
      location: "Colombo Stadium",
      date: "2026 July 10",
      prize: "$5000",
      status: "Upcoming",
      description:
        "The biggest inter-university football championship featuring top teams across Sri Lanka.",
    },
    {
      id: 2,
      name: "University Football Cup",
      teams: 12,
      location: "Kandy Grounds",
      date: "2026 August 5",
      prize: "$3000",
      status: "Registration Open",
      description:
        "A competitive university-level tournament focusing on young talent development.",
    },
    {
      id: 3,
      name: "Inter Faculty Clash",
      teams: 8,
      location: "SLIIT Main Ground",
      date: "2026 June 30",
      prize: "$1500",
      status: "Live",
      description:
        "Faculty vs faculty intense football battle inside SLIIT campus.",
    },
  ];

  const renderTournamentDetails = (t) => (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-white mb-4">{t.name}</h2>

      <p className="text-white/70 mb-6">{t.description}</p>

      <div className="grid grid-cols-2 gap-4 text-white/80">
        <div className="bg-white/5 p-4 rounded-xl">Teams: {t.teams}</div>
        <div className="bg-white/5 p-4 rounded-xl">Location: {t.location}</div>
        <div className="bg-white/5 p-4 rounded-xl">Date: {t.date}</div>
        <div className="bg-white/5 p-4 rounded-xl">Prize: {t.prize}</div>
      </div>

      <button
        onClick={() => setSelectedTournament(null)}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-400 text-black rounded-xl font-semibold"
      >
        Back to Tournaments
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#070A12] text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[500px] h-[500px] bg-green-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">

            <div className="flex items-center gap-3">
              <img src={Logo} className="w-10 h-10" />
              <span className="font-bold">SPORTS HUB</span>
            </div>

            <nav className="hidden md:flex gap-8 text-white/70">
              <button onClick={() => setActivePage("home")}>Home</button>
              <button onClick={() => setActivePage("tournament")} className="hover:text-white">
                Tournaments
              </button>
              <button onClick={() => setActivePage("events")}>Events</button>
              <button onClick={() => setActivePage("about")}>About</button>
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

      {/* ================= HOME PAGE ================= */}
      {activePage === "home" && (
        <section className="text-center py-24 px-6 relative z-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
            Welcome to Sports Hub
          </h1>
          <p className="text-white/60 mt-6">
            Explore tournaments, events, and live football action.
          </p>

          <button
            onClick={() => setActivePage("tournament")}
            className="mt-8 px-6 py-3 bg-white/10 border border-white/10 rounded-xl"
          >
            View Tournaments
          </button>
        </section>
      )}

      {/* ================= TOURNAMENT LIST ================= */}
      {activePage === "tournament" && !selectedTournament && (
        <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
          <h1 className="text-4xl font-bold text-center mb-10">
            Tournament List
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {tournaments.map((t) => (
              <div
                key={t.id}
                className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl hover:scale-105 transition"
              >
                <h2 className="text-xl font-bold">{t.name}</h2>
                <p className="text-white/60 mt-2">{t.location}</p>
                <p className="text-white/60">{t.date}</p>

                <button
                  onClick={() => setSelectedTournament(t)}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black rounded-xl"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ================= TOURNAMENT DETAILS ================= */}
      {selectedTournament && renderTournamentDetails(selectedTournament)}

      {/* ================= EVENTS PAGE ================= */}
      {activePage === "events" && (
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold">Events Page</h1>
        </section>
      )}

      {/* ================= ABOUT PAGE ================= */}
      {activePage === "about" && (
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold">About Page</h1>
        </section>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t border-white/10 mt-20">
        <p className="text-white/50">© 2026 Sports Hub</p>
      </footer>

    </div>
  );
}