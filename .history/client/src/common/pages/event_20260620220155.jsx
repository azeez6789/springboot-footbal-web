import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

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
    <div className="min-h-screen bg-[#070A12] text-white overflow-y-auto">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">

          <div className="flex items-center gap-3">
            <img src={Logo} className="w-10 h-10" />
            <h1 className="font-bold">SLIIT SPORTS</h1>
          </div>

          <nav className="hidden md:flex gap-6 text-white/70">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/pages/tournament")}>Tournaments</button>
            <button className="text-blue-400"onClick={() => navigate("/pages/event")}>Events</button>
            <button onClick={() => navigate("/about")}>Ticket</button>
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
          SLIIT Event Arena
        </h1>
        <p className="text-white/60 mt-6 max-w-2xl mx-auto">
          Explore sports events, live shows, freshers days, and university celebrations.
        </p>
      </section>

      {/* ================= EVENT STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6">

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <h2 className="text-3xl text-blue-400 font-bold">12</h2>
          <p className="text-white/60">Total Events</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <h2 className="text-3xl text-green-400 font-bold">5</h2>
          <p className="text-white/60">Live Events</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <h2 className="text-3xl text-blue-400 font-bold">8</h2>
          <p className="text-white/60">Upcoming</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
          <h2 className="text-3xl text-green-400 font-bold">20+</h2>
          <p className="text-white/60">Clubs Participating</p>
        </div>

      </section>

      {/* ================= EVENT CARDS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">

        {events.map((e) => (
          <div key={e.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

            <h2 className="text-xl font-bold">{e.name}</h2>
            <p className="text-white/60 text-sm mt-1">{e.type}</p>

            <div className="mt-4 text-sm text-white/70 space-y-1">
              <p>Venue: {e.venue}</p>
              <p>Date: {e.date}</p>
              <p>Status: {e.status}</p>
            </div>

            <button
              onClick={() => setSelectedEvent(e)}
              className="mt-5 w-full py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black rounded-xl"
            >
              View Event
            </button>

          </div>
        ))}

      </section>

      {/* ================= EVENT DETAILS ================= */}
      {selectedEvent && (
        <section className="max-w-5xl mx-auto px-6 py-10">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-4">{selectedEvent.name}</h2>

            <p className="text-white/60 mb-6">{selectedEvent.desc}</p>

            <div className="grid md:grid-cols-2 gap-4 text-white/70">
              <div className="p-4 bg-white/5 rounded-xl">Type: {selectedEvent.type}</div>
              <div className="p-4 bg-white/5 rounded-xl">Venue: {selectedEvent.venue}</div>
              <div className="p-4 bg-white/5 rounded-xl">Date: {selectedEvent.date}</div>
              <div className="p-4 bg-white/5 rounded-xl">Status: {selectedEvent.status}</div>
            </div>

            <button
              onClick={() => setSelectedEvent(null)}
              className="mt-6 px-6 py-3 bg-white/10 rounded-xl"
            >
              Back
            </button>

          </div>

        </section>
      )}

      {/* ================= SCHEDULE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Event Schedule</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
              <h3 className="font-bold">Day {i + 1}</h3>
              <p className="text-white/60 text-sm mt-2">
                Matches, performances, and sports activities planned for the day.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Event Gallery</h2>

        <div className="grid md:grid-cols-4 gap-4">

          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-40 bg-white/10 rounded-xl border border-white/10"></div>
          ))}

        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Latest Event News</h2>

        <div className="space-y-4">

          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="font-bold">Event Update #{i + 1}</h3>
              <p className="text-white/60 text-sm">
                Latest updates, schedules, and announcements for SLIIT sports events.
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
            <h3 className="font-bold">Event Question {i + 1}</h3>
            <p className="text-white/60 text-sm mt-2">
              Information about participation, rules, and scheduling.
            </p>
          </div>
        ))}

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t border-white/10 text-white/50">
        © 2026 SLIIT Event System
      </footer>

    </div>
  );
}