import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-950 text-white min-h-screen overflow-x-hidden">

      {/* HEADER SECTION (YOUR GIVEN CODE) */}
      <header className="bg-gray-900 text-white h-10">
        <div className="absolute z-0 -top-500 w-screen h-900 bg-[radial-gradient(circle_at_right,_rgba(170,76,820,0.2),_rgba(60,900,400,0.6),_transparent_80%)]"></div>

        <div className="relative z-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">

            <div className="flex items-center justify-between text-2xl">

              <div className="flex items-center space-x-2 ml-1 mr-40">
                <img src={Logo} className="w-25 h-25 mt-1" />
              </div>

              <nav className="hidden md:flex space-x-8">
                <a className="hover:text-blue-400 transition-colors" onClick={() => navigate('/')}>Home</a>
                <a className="hover:text-blue-400 transition-colors" onClick={() => navigate('/operator/onlinebookingPage')}>Tournaments</a>
                <a className="hover:text-blue-400 transition-colors" onClick={() => navigate('/customersupport/feedback')}>Events</a>
                <a className="hover:text-yellow-400 transition-colors" onClick={() => navigate('/customersupport/complaint')}>Tickets</a>
                <a className="hover:text-blue-400 transition-colors" onClick={() => navigate('/component/about')}>About</a>
              </nav>

            </div>

            <div className="hidden md:flex items-center space-x-4 ml-auto">
              <button
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-5 py-2 rounded-lg whitespace-nowrap text-xl"
                onClick={() => navigate('/component/login')}
              >
                Log In
              </button>

              <button
                onClick={() => navigate('/component/register')}
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-5 py-2 rounded-lg whitespace-nowrap text-xl"
              >
                Get Started
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-6">About Our Sports Platform</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          We are building a next-generation sports experience platform where players,
          teams, and fans come together to create unforgettable moments.
        </p>
      </section>

      {/* MISSION SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 leading-7">
            Our mission is to connect athletes and sports lovers through a unified digital platform.
            We aim to simplify tournament management, improve event participation, and enhance fan engagement.
          </p>
          <p className="text-gray-400 mt-4 leading-7">
            Whether you're a player, organizer, or supporter, our system is designed to bring value
            to every aspect of sports interaction.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <ul className="space-y-3 text-gray-300">
            <li>✔ Easy tournament registration</li>
            <li>✔ Real-time event updates</li>
            <li>✔ Secure ticket booking system</li>
            <li>✔ Player performance tracking</li>
            <li>✔ Modern UI experience</li>
          </ul>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-gray-900 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">

          <div>
            <h3 className="text-4xl font-bold text-blue-400">500+</h3>
            <p className="text-gray-400">Teams</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-green-400">1200+</h3>
            <p className="text-gray-400">Players</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">300+</h3>
            <p className="text-gray-400">Events</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-pink-400">50+</h3>
            <p className="text-gray-400">Tournaments</p>
          </div>

        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>

        <div className="space-y-8">

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold">2022 - Idea Started</h3>
            <p className="text-gray-400 mt-2">
              The concept of a unified sports platform was born.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold">2023 - Development Phase</h3>
            <p className="text-gray-400 mt-2">
              We built the first prototype with core tournament features.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold">2024 - Beta Launch</h3>
            <p className="text-gray-400 mt-2">
              Early users started testing the platform and giving feedback.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-bold">2026 - Full Release</h3>
            <p className="text-gray-400 mt-2">
              The platform is now fully live with advanced features.
            </p>
          </div>

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold">Developer Team</h3>
            <p className="text-gray-400">Frontend & Backend Engineers</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold">Design Team</h3>
            <p className="text-gray-400">UI/UX Specialists</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="w-20 h-20 bg-gray-700 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold">Support Team</h3>
            <p className="text-gray-400">Customer Assistance</p>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">FAQ</h2>

        <div className="space-y-6">

          <div className="bg-gray-900 p-5 rounded-lg">
            <h3 className="font-bold">What is this platform?</h3>
            <p className="text-gray-400">A sports management and event system.</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg">
            <h3 className="font-bold">Is it free to use?</h3>
            <p className="text-gray-400">Yes, basic features are free for users.</p>
          </div>

          <div className="bg-gray-900 p-5 rounded-lg">
            <h3 className="font-bold">Can I host tournaments?</h3>
            <p className="text-gray-400">Yes, organizers can create and manage events.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-10 text-center">
        <p className="text-gray-400">© 2026 Sports Platform. All rights reserved.</p>
      </footer>

    </div>
  );
}