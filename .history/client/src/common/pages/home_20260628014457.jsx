import { useState } from 'react';
import { Car, MapPin, Clock, Shield, Users, ChevronRight, ChevronDown, Star, Menu, X } from 'lucide-react';
import Logo from '../assets/opt3.png'
import {useNavigate} from 'react-router-dom'

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
            <a onClick={() => navigate('/')} className="hover:text-white cursor-pointer">Request</a>
        <a onClick={() => navigate('/pages/tournament')} className="hover:text-white cursor-pointer">Tournaments</a>
        <a onClick={() => navigate('/pages/event')} className="hover:text-white cursor-pointer">Events</a>
        <a onClick={() => navigate('/pages/ticket')} className="hover:text-white cursor-pointer">Tickets</a>
        <a onClick={() => navigate('/component/about')} className="text-blue-400">About</a>
      </nav>

      <div className="flex gap-3">
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

</div>

);
}