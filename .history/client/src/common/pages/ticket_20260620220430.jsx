import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

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
    <div className="min-h-screen bg-[#070A12] text-white overflow-y-auto">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">

          <div className="flex items-center gap-3">
            <img src={Logo} className="w-10 h-10" />
            <h1 className="font-bold">SLIIT FOOTBALL SUPPORT</h1>
          </div>

          <nav className="hidden md:flex gap-6 text-white/70">
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/tournaments")}>Tournaments</button>
            <button onClick={() => navigate("/events")}>Events</button>
            <button onClick={() => navigate("/about")}>About</button>
          </nav>

          <div className="flex gap-3">
            <button onClick={() => navigate("/login")} className="px-4 py-2 bg-white/10 rounded-xl">
              Login
            </button>
            <button onClick={() => navigate("/register")} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black rounded-xl">
              Join
            </button>
          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
          SLIIT Football Support Center
        </h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          Ask questions about tournaments, teams, schedules, and football activities. Our team will respond quickly.
        </p>
      </section>

      {/* ================= ASK QUESTION BOX ================= */}
      <section className="max-w-4xl mx-auto px-6">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">

          <h2 className="text-xl font-bold mb-4">Submit Your Question</h2>

          <form onSubmit={submitTicket} className="flex flex-col gap-4">

            <textarea
              name="question"
              value={form.question}
              onChange={handleChange}
              placeholder="Type your question about SLIIT Football..."
              className="w-full h-32 p-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
            />

            <button
              type="submit"
              className="py-3 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold rounded-xl"
            >
              Submit Ticket
            </button>

          </form>

        </div>

      </section>

      {/* ================= TICKET LIST ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold mb-6">Your Tickets</h2>

        <div className="grid md:grid-cols-2 gap-6">

          {tickets.map((t) => (
            <div
              key={t.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
            >

              <h3 className="font-bold text-lg">{t.question}</h3>

              <p className="text-white/60 mt-3 text-sm">
                {t.answer}
              </p>

              <div className="mt-4 flex justify-between items-center">

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    t.status === "Answered"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-yellow-500/20 text-yellow-300"
                  }`}
                >
                  {t.status}
                </span>

                <button className="text-blue-400 text-sm">
                  View Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="mb-4 p-4 bg-white/5 border border-white/10 rounded-xl"
          >
            <h3 className="font-bold">General Question {i + 1}</h3>
            <p className="text-white/60 text-sm mt-2">
              Information about SLIIT football tournaments, events, rules, and participation.
            </p>
          </div>
        ))}

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 border-t border-white/10 text-white/50">
        © 2026 SLIIT Football Support System
      </footer>

    </div>
  );
}