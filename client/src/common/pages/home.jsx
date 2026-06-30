import { useState, useEffect } from 'react';
import { Car, MapPin, Clock, Shield, Users, ChevronRight, ChevronDown, Star, Menu, X, Trophy, Calendar, Award } from 'lucide-react';
import Logo from '../assets/opt3.png'
import {useNavigate} from 'react-router-dom'
import { createPlayerProfileWithImage, getAllUsers } from '../services/userService';

export default function ParkingLandingPage() {
const [openFaq, setOpenFaq] = useState(null);
const navigate = useNavigate();
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [showProfileForm, setShowProfileForm] = useState(false);
const [users, setUsers] = useState([]);
const [profileFormData, setProfileFormData] = useState({
  userId: "",
  fullName: "",
  position: "",
  age: "",
  jerseyNumber: "",
  bio: "",
  profilePicture: null,
});
const [isSubmitting, setIsSubmitting] = useState(false);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data || []);
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  };
  fetchUsers();
}, []);

const handleProfileSubmit = async (e) => {
  e.preventDefault();
  if (!profileFormData.userId || !profileFormData.fullName || !profileFormData.position || !profileFormData.age) {
    alert("Please fill in all required fields (User, Full Name, Position, Age)");
    return;
  }
  setIsSubmitting(true);
  try {
    const formData = new FormData();
    formData.append("userId", profileFormData.userId);
    formData.append("fullName", profileFormData.fullName);
    formData.append("position", profileFormData.position);
    formData.append("age", parseInt(profileFormData.age));
    if (profileFormData.jerseyNumber) formData.append("jerseyNumber", profileFormData.jerseyNumber);
    if (profileFormData.bio) formData.append("bio", profileFormData.bio);
    if (profileFormData.profilePicture) formData.append("profilePicture", profileFormData.profilePicture);

    await createPlayerProfileWithImage(formData);
    setShowProfileForm(false);
    // Reset form
    setProfileFormData({
      userId: "",
      fullName: "",
      position: "",
      age: "",
      jerseyNumber: "",
      bio: "",
      profilePicture: null,
    });
    navigate('/function-01/request');
  } catch (err) {
    console.error(err);
    alert("Failed to save profile. Ensure the User ID exists and input is valid.");
  } finally {
    setIsSubmitting(false);
  }
};

const handleImageChange = (e) => {
  setProfileFormData({
    ...profileFormData,
    profilePicture: e.target.files[0],
  });
};

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
question: "How can I provide feedback about the website or football activities? ",
answer: "You can submit your suggestions, comments, or concerns through the Feedback page available on the website."
}
];

return (

<div className="min-h-screen bg-[#070A12] text-white overflow-hidden relative">

{/* ===== BACKGROUND GLOW ===== */}
<div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
<div className="absolute w-[500px] h-[500px] bg-green-400/20 blur-[160px] rounded-full bottom-[-120px] right-[-120px]" />

{/* ===== HEADER (GLASS) ===== */}
<header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-center py-4">

      <div className="flex items-center gap-3">
        <img src={Logo} className="w-10 h-10" />
        <span className="font-bold text-xl">SLIIT FOOTBALL</span>
      </div>

      <nav className="hidden md:flex gap-8 text-white/80 text-sm">
        <a onClick={() => navigate('/')} className="hover:text-white cursor-pointer">Home</a>
            <a onClick={() => navigate('/function-01/request')} className="hover:text-white cursor-pointer">Request</a>
        <a onClick={() => setShowProfileForm(true)} className="hover:text-white cursor-pointer font-semibold text-blue-400">Profile</a>
        <a onClick={() => navigate('/pages/tournament')} className="hover:text-white cursor-pointer">Tournaments</a>
        <a onClick={() => navigate('/pages/event')} className="hover:text-white cursor-pointer">Events</a>
        <a onClick={() => navigate('/pages/ticket')} className="hover:text-white cursor-pointer">Tickets</a>
        <a onClick={() => navigate('/component/about')} className="hover:text-white cursor-pointer">About</a>
      </nav>

      <div className="flex gap-3">
        <button
          onClick={() => setShowProfileForm(true)}
          className="px-5 py-2 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300 backdrop-blur hover:bg-blue-500/40 transition"
        >
          Profile
        </button>

        <button
          onClick={() => navigate('/component/login')}
          className="px-5 py-2 rounded-xl bg-white/10 border border-white/10 backdrop-blur hover:bg-white/20 transition"
        >
          Log In
        </button>

        <button
          onClick={() => navigate('/component/register')}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-green-400 text-black font-semibold"
        >
          Get Started
        </button>
      </div>

    </div>
  </div>
</header>

{/* ===== HERO ===== */}
<section className="text-center py-24 px-6 relative z-10">
  <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-300 text-transparent bg-clip-text">
    More Than a Game
  </h1>
  <p className="text-white/70 mt-6 max-w-2xl mx-auto">
    Join the SLIIT Football community and experience teamwork, passion, and victory.
  </p>

  <button className="mt-8 px-6 py-3 bg-white/10 border border-white/10 rounded-xl backdrop-blur hover:bg-white/20">
    Get Started
  </button>
</section>

{/* ===== GLASS STATS ===== */}
<section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">

  {[
    ["10+", "Championships"],
    ["390+", "Matches"],
    ["90%", "Win Rate"],
    ["99%", "Success"],
  ].map(([num, label], i) => (
    <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
      <h3 className="text-3xl text-blue-400 font-bold">{num}</h3>
      <p className="text-white/60 mt-2">{label}</p>
    </div>
  ))}

</section>

{/* ===== HERO IMAGE SECTION ===== */}
<section className="max-w-6xl mx-auto px-6 py-10">
  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-10">

    <img src="/public/chat1.png" className="w-96 rounded-xl" />

    <div>
      <h2 className="text-3xl font-bold mb-4">10+ Years of Excellence</h2>
      <p className="text-white/70">
        SLIIT Football has built a strong legacy of teamwork, discipline, and success.
      </p>
    </div>

  </div>
</section>

{/* ===== SERVICES (GLASS STYLE) ===== */}
<section className="max-w-6xl mx-auto px-6 py-16 space-y-4">

  {[
    ["Live Match Updates", MapPin],
    ["Secure Data Protection", Shield],
    ["Customer Support", Users],
    ["Football Updates", Clock],
  ].map(([title, Icon], i) => (
    <div key={i} className="flex justify-between items-center p-5 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl hover:bg-white/10 transition">
      <div className="flex items-center gap-4">
        <Icon className="text-blue-400" />
        <span>{title}</span>
      </div>
      <ChevronRight />
    </div>
  ))}

</section>

{/* ===== TESTIMONIALS ===== */}
<section className="max-w-6xl mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold text-center mb-10">What Fans Say</h2>

  <div className="space-y-6">

    {[1,2,3].map((i) => (
      <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6">
        <p className="text-white/70">
          “SLIIT Football is more than a team — it's a family.”
        </p>
      </div>
    ))}

  </div>

</section>

{/* ===== UPCOMING FIXTURES & RESULTS ===== */}
<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
  {/* Recent Results */}
  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
    <div className="flex items-center gap-3 mb-6">
      <Trophy className="text-yellow-400 w-6 h-6" />
      <h2 className="text-2xl font-bold">Recent Results</h2>
    </div>
    <div className="space-y-4">
      <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
        <div className="text-sm font-semibold">SLIIT Football</div>
        <div className="flex items-center gap-3 bg-white/10 px-3 py-1 rounded-lg">
          <span className="text-green-400 font-bold">2</span>
          <span className="text-white/40">-</span>
          <span className="text-white font-semibold">1</span>
        </div>
        <div className="text-sm text-white/70">UOC (University of Colombo)</div>
      </div>
      <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
        <div className="text-sm font-semibold">SLIIT Football</div>
        <div className="flex items-center gap-3 bg-white/10 px-3 py-1 rounded-lg">
          <span className="text-green-400 font-bold">3</span>
          <span className="text-white/40">-</span>
          <span className="text-white font-semibold">0</span>
        </div>
        <div className="text-sm text-white/70">KDU (Kotelawala Defence Univ.)</div>
      </div>
    </div>
  </div>

  {/* Upcoming Matches */}
  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
    <div className="flex items-center gap-3 mb-6">
      <Calendar className="text-blue-400 w-6 h-6" />
      <h2 className="text-2xl font-bold">Upcoming Fixtures</h2>
    </div>
    <div className="space-y-4">
      <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm">vs UOM (Univ. of Moratuwa)</div>
          <div className="text-xs text-white/50 mt-1">SLIIT Grounds, Malabe</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-blue-400 font-semibold">July 5, 2026</div>
          <div className="text-xs text-white/60">04:00 PM</div>
        </div>
      </div>
      <div className="bg-white/5 border border-white/5 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm">vs NSBM Green University</div>
          <div className="text-xs text-white/50 mt-1">NSBM Grounds, Homagama</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-blue-400 font-semibold">July 12, 2026</div>
          <div className="text-xs text-white/60">03:30 PM</div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* ===== LEAGUE STANDINGS & TOP PERFORMERS ===== */}
<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
  {/* League Standings */}
  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6">
    <div className="flex items-center gap-3 mb-6">
      <Trophy className="text-green-400 w-6 h-6" />
      <h2 className="text-2xl font-bold">League Standings</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-white/10 text-white/60 text-xs uppercase">
            <th className="py-2">Pos</th>
            <th className="py-2">Team</th>
            <th className="py-2 text-center">P</th>
            <th className="py-2 text-center">W</th>
            <th className="py-2 text-center">GD</th>
            <th className="py-2 text-center">Pts</th>
          </tr>
        </thead>
        <tbody>
          {[
            { pos: 1, name: "SLIIT Football", p: 8, w: 7, gd: "+15", pts: 22, highlight: true },
            { pos: 2, name: "UOM Moratuwa", p: 8, w: 5, gd: "+8", pts: 17 },
            { pos: 3, name: "UOC Colombo", p: 8, w: 4, gd: "+4", pts: 14 },
            { pos: 4, name: "NSBM Green", p: 8, w: 3, gd: "-1", pts: 10 },
            { pos: 5, name: "IIT", p: 8, w: 2, gd: "-6", pts: 7 },
            { pos: 6, name: "KDU Defence", p: 8, w: 1, gd: "-12", pts: 4 }
          ].map((team) => (
            <tr
              key={team.pos}
              className={`border-b border-white/5 ${team.highlight ? 'bg-blue-500/10 text-blue-300 font-semibold' : 'text-white/80'}`}
            >
              <td className="py-3 font-bold">{team.pos}</td>
              <td className="py-3">{team.name}</td>
              <td className="py-3 text-center">{team.p}</td>
              <td className="py-3 text-center">{team.w}</td>
              <td className="py-3 text-center">{team.gd}</td>
              <td className="py-3 text-center font-bold">{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Top Performers */}
  <div className="bg-[#0f172a]/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col justify-between">
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Award className="text-yellow-400 w-6 h-6" />
        <h2 className="text-2xl font-bold">Top Performers</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Goals Leaderboard */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-4">
          <h3 className="text-xs uppercase text-white/50 font-bold mb-3 tracking-wider">Top Scorers</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold truncate max-w-[100px]">A. Perera</span>
              <span className="text-xs bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full font-bold">12 G</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold truncate max-w-[100px]">M. Fernando</span>
              <span className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-semibold">8 G</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold truncate max-w-[100px]">S. De Silva</span>
              <span className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-semibold">7 G</span>
            </div>
          </div>
        </div>

        {/* Assists Leaderboard */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-4">
          <h3 className="text-xs uppercase text-white/50 font-bold mb-3 tracking-wider">Top Assists</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold truncate max-w-[100px]">K. Silva</span>
              <span className="text-xs bg-green-400/20 text-green-300 px-2 py-0.5 rounded-full font-bold">10 A</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold truncate max-w-[100px]">T. Gunasekara</span>
              <span className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-semibold">7 A</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold truncate max-w-[100px]">R. Mendis</span>
              <span className="text-xs bg-white/10 text-white/80 px-2 py-0.5 rounded-full font-semibold">5 A</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-xl flex items-center justify-between text-xs">
      <span className="text-white/60">Selections & trials are coming up next week!</span>
      <button 
        onClick={() => navigate('/pages/event')}
        className="text-blue-400 hover:text-blue-300 font-semibold"
      >
        View Details &rarr;
      </button>
    </div>
  </div>
</section>

{/* ===== FAQ ===== */}
<section className="max-w-4xl mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

  {faqs.map((faq, index) => (
    <div key={index} className="mb-3 bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-xl">

      <button
        onClick={() => toggleFaq(index)}
        className="w-full flex justify-between p-4"
      >
        {faq.question}
        <ChevronDown className={`${openFaq === index ? "rotate-180" : ""}`} />
      </button>

      {openFaq === index && (
        <div className="p-4 text-white/70">
          {faq.answer}
        </div>
      )}

    </div>
  ))}

</section>

{/* ===== FOOTER ===== */}
<footer className="text-center py-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">
  <p className="text-white/60">© 2026 SLIIT Football</p>
</footer>

{/* ===== PROFILE FORM MODAL ===== */}
{showProfileForm && (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
    <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative z-10 max-h-[90vh] overflow-y-auto">
      
      {/* LOGO */}
      <div className="flex justify-center mb-6">
        <img src={Logo} alt="Logo" className="w-20 h-20" />
      </div>

      {/* TITLE */}
      <h1 className="text-3xl font-bold text-center text-white mb-2">
        Create Player Profile
      </h1>

      <p className="text-center text-white/60 mb-8">
        Enter details to register a new player profile
      </p>

      <form onSubmit={handleProfileSubmit} className="space-y-5">
        <div>
          <label className="block text-white/70 mb-2">Select User</label>
          {users.length > 0 ? (
            <select
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
              value={profileFormData.userId}
              onChange={(e) => setProfileFormData({ ...profileFormData, userId: e.target.value })}
              required
            >
              <option value="" disabled className="bg-[#0b1220] text-white/50">-- Select User --</option>
              {users.map((user) => (
                <option key={user.id} value={user.id} className="bg-[#0b1220]">
                  {user.fullName} ({user.email})
                </option>
              ))}
            </select>
          ) : (
            <input
              type="number"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
              placeholder="User ID (e.g. 1)"
              value={profileFormData.userId}
              onChange={(e) => setProfileFormData({ ...profileFormData, userId: e.target.value })}
              required
            />
          )}
        </div>

        <div>
          <label className="block text-white/70 mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-green-400 focus:bg-white/10 transition"
            placeholder="Full Name"
            value={profileFormData.fullName}
            onChange={(e) => setProfileFormData({ ...profileFormData, fullName: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="block text-white/70 mb-2">Position</label>
          <select
            className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
            value={profileFormData.position}
            onChange={(e) => setProfileFormData({ ...profileFormData, position: e.target.value })}
            required
          >
            <option value="" disabled className="bg-[#0b1220] text-white/50">-- Select Position --</option>
            <option value="Goalkeeper" className="bg-[#0b1220]">Goalkeeper</option>
            <option value="Defender" className="bg-[#0b1220]">Defender</option>
            <option value="Midfielder" className="bg-[#0b1220]">Midfielder</option>
            <option value="Forward" className="bg-[#0b1220]">Forward</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white/70 mb-2">Age</label>
            <input
              type="number"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-green-400 focus:bg-white/10 transition"
              placeholder="Age"
              value={profileFormData.age}
              onChange={(e) => setProfileFormData({ ...profileFormData, age: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-white/70 mb-2">Jersey Number</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
              placeholder="Jersey No."
              value={profileFormData.jerseyNumber}
              onChange={(e) => setProfileFormData({ ...profileFormData, jerseyNumber: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-white/70 mb-2">Bio</label>
          <textarea
            className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:outline-none focus:border-green-400 focus:bg-white/10 transition h-24 resize-none"
            placeholder="Tell us about the player..."
            value={profileFormData.bio}
            onChange={(e) => setProfileFormData({ ...profileFormData, bio: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-white/70 mb-2">Player Photo</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full text-sm text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 file:cursor-pointer"
            required
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 transition disabled:opacity-50"
          >
            {isSubmitting ? "Saving Profile..." : "Save Profile"}
          </button>

          <button
            type="button"
            onClick={() => setShowProfileForm(false)}
            className="w-full py-3 rounded-lg font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition mt-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}

</div>

);
}