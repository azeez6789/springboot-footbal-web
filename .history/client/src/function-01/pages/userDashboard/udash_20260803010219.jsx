import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../component/AdminLayout";
import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  DollarSign,
  Search,
  Bell,
  UserCircle,
  TrendingUp,
  Shield,
  Activity,
  CheckCircle,
  Clock,
  Award,
  ChevronRight,
  Star,
  Calendar,
  Ticket
} from "lucide-react";

const StarryBackground = () => {

    
 return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
};



export default function AdminDashboard() {

    const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchTournaments();
      }, []);
    
      const fetchTournaments = async () => {
        try {
          setLoading(true);
          const response = await getAllTournaments();
          const data = response.data || response;
          setTournaments(Array.isArray(data) ? data : []);
        } catch (error) {
          console.log("Error fetching tournaments:", error);
        } finally {
          setLoading(false);
        }
      };
    
      const handleDelete = async (id) => {
        try {
          await deleteTournament(id);
          fetchTournaments();
        } catch (error) {
          console.log("Error deleting tournament:", error);
        }
      };
    
      // Filter tournaments matching the search query based on tournament name or organizer full name
      const filteredTournaments = tournaments.filter((item) => {
        const name = item.tournamentName || item.name || "";
        const fullName = item.fullName || "";
        const query = searchQuery.toLowerCase();
        return name.toLowerCase().includes(query) || fullName.toLowerCase().includes(query);
      });


  const stats = [
    { title: "Total Players", value: "2,540", icon: Users, growth: "+12%" },
    { title: "Active Teams", value: "126", icon: Shield, growth: "+8%" },
    { title: "Tournaments", value: "48", icon: Trophy, growth: "+15%" },
    { title: "Revenue", value: "$45,800", icon: DollarSign, growth: "+21%" }
  ];

  const players = [
    { name: "A. Perera", position: "Forward", team: "SLIIT Warriors", status: "Active" },
    { name: "M. Fernando", position: "Midfielder", team: "Blue Lions", status: "Active" },
    { name: "K. Silva", position: "Defender", team: "Royal FC", status: "Pending" },
    { name: "R. Mendis", position: "Goal Keeper", team: "Campus Stars", status: "Active" }
  ];

  const tournaments = [
    { name: "SLIIT Football Cup 2026", date: "August 12, 2026", teams: "32 Teams", status: "Running" },
    { name: "Inter University Championship", date: "September 05, 2026", teams: "24 Teams", status: "Upcoming" },
    { name: "Freshers League", date: "October 20, 2026", teams: "16 Teams", status: "Planning" }
  ];

  const activities = [
    "New player registration approved",
    "Tournament schedule updated",
    "New team created",
    "Ticket payment received",
    "Match result published"
  ];

  return (
    <AdminLayout>
    <div className="min-h-screen bg-[#0b1220] text-white  rounded-2xl selection:bg-blue-500/30 relative overflow-hidden font-sans">
        <StarryBackground />

        <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0" />
        <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />


        <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        {/* after this three dot header space are wide */}
        <div className="flex items-center gap-3">
           
        <nav className="hidden md:flex gap-6 text-white/70 text-sm font-medium">
            <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
            <button onClick={() => navigate("/pages/tournament")} className="hover:text-white transition-colors">Tournaments</button>
            <button onClick={() => navigate("/pages/event")} className="hover:text-white transition-colors">Events</button>
            <button onClick={() => navigate("/pages/ticket")} className="hover:text-white transition-colors">Ticket</button>
            <button onClick={() => navigate("/component/about")} className="hover:text-white transition-colors">About</button>
        </nav>


        <div className="flex gap-3 text-sm font-medium">
            <button onClick={() => navigate("/component/login")} className="px-4 py-2 bg-white/15 hover:bg-white/20 transition-all rounded-xl">Login</button>
            <button onClick={() => navigate("/component/register")} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold rounded-xl hover:opacity-90 transition-all">Join</button>
            </div>
        
        </div>
        </div>
        </header>

        <section className="max-w-7xl mx-auto px-6 pt-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Tournaments</h2>
              <p className="text-sm text-white/60 mt-1">Manage and view active tournament registrations.</p>
            </div>

            {/*unwanted statement*/}
            <div className="flex items-center gap-4 w-full md:w-auto">
            
            {/*total tournamnet */  }
            <div className="bg-white/5 px-3 py-2 rounded-xl border border-white/10 text-xs text-blue-400 font-mono">
                Total Tournaments: {tournaments.length}
            </div>  

             <button
                onClick={() => navigate("/component/tounform")}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold text-sm rounded-xl hover:opacity-90 transition-all whitespace-nowrap"
              >
                Organize Tournament
              </button>             
          </div>
        </div>

      <div className="relative mb-8">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-white/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>

{/* ABC */ }
             <input
              type="text"
              placeholder="Search by tournament name or organizer..."
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 backdrop-blur-xl transition-all"
            />
        </div>
        </section>


        <section className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-white/50">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs tracking-widest uppercase">Loading tournaments...</span>
            </div>
          ) : filteredTournaments.length === 0 ? (
            <div className="p-12 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl text-white/40 italic">
              No tournaments found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTournaments.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div>
                    {/* Top row: Logo/Avatar & Title */}
                    <div className="flex items-center gap-4 mb-5">
                      {item.logo ? (
                        <img src={item.logo} alt="Logo" className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/60 font-bold border border-white/10">
                          🏆
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-base text-white">{item.tournamentName || item.name || "Unnamed Tournament"}</h3>
                        <p className="text-xs text-white/50 font-mono mt-0.5">Organizer: {item.fullName || "Admin"}</p>
                      </div>
                    </div>

                    {/* Badge details */}
                    <div className="mb-5">
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider inline-block">
                        {item.prize ? `Prize: ${item.prize}` : "Tournament"}
                      </span>
                    </div>

                    {/* Meta info grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                        <span className="text-white/40 block mb-0.5">Email</span>
                        <span className="text-white/80 font-medium truncate block">{item.email || "N/A"}</span>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                        <span className="text-white/40 block mb-0.5">Date</span>
                        <span className="text-white/80 font-medium block">{item.date || "N/A"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelected(item)}
                      className="flex-1 py-2 text-xs font-medium bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-xl border border-blue-500/10 transition-colors text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 text-xs font-medium bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl border border-red-500/10 transition-colors text-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>


        <section className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
          {loading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-3 text-white/50">
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-xs tracking-widest uppercase">Loading tournaments...</span>
            </div>
          ) : filteredTournaments.length === 0 ? (
            <div className="p-12 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-xl text-white/40 italic">
              No tournaments found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTournaments.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div>
                    {/* Top row: Logo/Avatar & Title */}
                    <div className="flex items-center gap-4 mb-5">
                      {item.logo ? (
                        <img src={item.logo} alt="Logo" className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white/60 font-bold border border-white/10">
                          🏆
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-base text-white">{item.tournamentName || item.name || "Unnamed Tournament"}</h3>
                        <p className="text-xs text-white/50 font-mono mt-0.5">Organizer: {item.fullName || "Admin"}</p>
                      </div>
                    </div>

                    {/* Badge details */}
                    <div className="mb-5">
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider inline-block">
                        {item.prize ? `Prize: ${item.prize}` : "Tournament"}
                      </span>
                    </div>

                    {/* Meta info grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                        <span className="text-white/40 block mb-0.5">Email</span>
                        <span className="text-white/80 font-medium truncate block">{item.email || "N/A"}</span>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                        <span className="text-white/40 block mb-0.5">Date</span>
                        <span className="text-white/80 font-medium block">{item.date || "N/A"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelected(item)}
                      className="flex-1 py-2 text-xs font-medium bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-xl border border-blue-500/10 transition-colors text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-4 py-2 text-xs font-medium bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl border border-red-500/10 transition-colors text-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>


         {selected && (
          <section className="max-w-3xl mx-auto px-6 py-10 relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                {selected.logo && (
                  <img src={selected.logo} alt="Logo" className="w-16 h-16 rounded-xl object-cover border border-white/10" />
                )}
                <div>
                  <h2 className="text-2xl font-bold">{selected.tournamentName || selected.name}</h2>
                  <p className="text-xs text-white/50 font-mono mt-1">Organized by {selected.fullName || "Admin"} ({selected.email || "No email"})</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-white/70 text-sm mb-6">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl"><strong className="text-white">Prize Pool:</strong> {selected.prize || "N/A"}</div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl"><strong className="text-white">Date:</strong> {selected.date || "N/A"}</div>
              </div>

              <div className="p-4 bg-white/5 border border-white/5 rounded-xl mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">Rules & Regulations</h4>
                <ul className="text-xs text-white/70 space-y-1 list-disc list-inside">
                  <li>Only 16 teams can register</li>
                  <li>Tournament deadline applies</li>
                  <li>It is an 11-a-side tournament and 90 minutes</li>
                  <li>Be on time otherwise give penalty</li>
                  <li>You can only register 15 players</li>
                </ul>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/15 text-sm font-medium rounded-xl transition-all"
              >
                Back to List
              </button>
            </div>
          </section>
        )}

{/* ================= FOOTER ================= */}
        <footer className="text-center py-8 border-t border-white/10 text-white/50 text-xs relative z-10 bg-white/5 backdrop-blur-xl">
          © 2026 SLIIT Football Tournament System. All Rights Reserved.
        </footer>
    
    
    </div>

    </AdminLayout>
  );
}