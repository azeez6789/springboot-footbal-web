import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Header */}
      <header className="bg-gray-900 text-white h-20">
        <div className="absolute z-0 -top-500 w-screen h-900 bg-[radial-gradient(circle_at_right,_rgba(170,76,820,0.2),_rgba(60,900,400,0.6),_transparent_80%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">

            <div className="flex items-center text-2xl">
              <div className="flex items-center space-x-2 mr-40">
                <img src={Logo} alt="Logo" className="w-20 h-20" />
              </div>

              <nav className="hidden md:flex space-x-8">
                <a
                  className="hover:text-blue-400 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Home
                </a>

                <a
                  className="hover:text-blue-400 cursor-pointer"
                  onClick={() => navigate("/operator/onlinebookingPage")}
                >
                  Tournaments
                </a>

                <a
                  className="hover:text-blue-400 cursor-pointer"
                  onClick={() => navigate("/customersupport/feedback")}
                >
                  Events
                </a>

                <a
                  className="hover:text-yellow-400 cursor-pointer"
                  onClick={() => navigate("/customersupport/complaint")}
                >
                  Tickets
                </a>

                <a
                  className="hover:text-blue-400 cursor-pointer"
                  onClick={() => navigate("/component/about")}
                >
                  About
                </a>
              </nav>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => navigate("/component/login")}
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-5 py-2 rounded-lg whitespace-nowrap text-xl"
              >
                Log In
              </button>

              <button
                onClick={() => navigate("/component/register")}
                className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-5 py-2 rounded-lg whitespace-nowrap text-xl"
              >
                Get Started
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-r from-cyan-700 via-blue-800 to-slate-900">
        <div className="max-w-7xl mx-auto text-center px-8">
          <h1 className="text-6xl font-bold mb-6">
            About SLIIT Football
          </h1>

          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Football is our passion, teamwork is our strength,
            and excellence is our goal.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-5xl font-bold text-center mb-12">
          Our Story
        </h2>

        <p className="text-gray-300 text-lg leading-9">
          SLIIT Football Club is dedicated to developing talented
          student-athletes through training, teamwork, and competition.
          We provide opportunities for players to represent the university
          in major tournaments while building leadership and discipline.
        </p>
      </section>

      {/* Statistics */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">
            Club Statistics
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
              <p>Players</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <h3 className="text-5xl font-bold text-cyan-400">20+</h3>
              <p>Matches</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <h3 className="text-5xl font-bold text-cyan-400">15+</h3>
              <p>Tournaments</p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl text-center">
              <h3 className="text-5xl font-bold text-cyan-400">10+</h3>
              <p>Awards</p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 text-center bg-gradient-to-r from-cyan-700 to-blue-900">
        <h2 className="text-5xl font-bold mb-6">
          Join Our Football Family
        </h2>

        <p className="text-xl mb-10">
          Train, compete, and grow with SLIIT Football.
        </p>

        <button
          onClick={() => navigate("/component/register")}
          className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold"
        >
          Register Now
        </button>
      </section>

    </div>
  );
}