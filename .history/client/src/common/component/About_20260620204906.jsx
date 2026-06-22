import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 via-green-800 to-black py-32">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-6">
            About SLIIT Football Club
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building champions through teamwork, discipline,
            leadership and excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-emerald-400 mb-8">
          Our Story
        </h2>

        <p className="text-gray-300 leading-8">
          SLIIT Football Club is one of the most active sports communities
          in the university. Our goal is to provide students with the
          opportunity to compete, develop football skills, and build
          lifelong friendships.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10">

          <div className="bg-zinc-800 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-emerald-400 mb-4">
              Mission
            </h3>

            <p className="text-gray-300">
              To inspire students through football and provide
              opportunities for growth and success.
            </p>
          </div>

          <div className="bg-zinc-800 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold text-emerald-400 mb-4">
              Vision
            </h3>

            <p className="text-gray-300">
              To become the leading university football club in Sri Lanka.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-12">
          Club Statistics
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-zinc-900 p-8 rounded-xl text-center">
            <h3 className="text-5xl text-emerald-400 font-bold">50+</h3>
            <p>Players</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl text-center">
            <h3 className="text-5xl text-emerald-400 font-bold">20+</h3>
            <p>Matches</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl text-center">
            <h3 className="text-5xl text-emerald-400 font-bold">15+</h3>
            <p>Tournaments</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl text-center">
            <h3 className="text-5xl text-emerald-400 font-bold">10+</h3>
            <p>Awards</p>
          </div>

        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-12 text-center">
            Facilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Football Ground
              </h3>

              <p className="text-gray-300">
                Modern training facilities for players.
              </p>
            </div>

            <div className="bg-zinc-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Fitness Center
              </h3>

              <p className="text-gray-300">
                Strength and conditioning training.
              </p>
            </div>

            <div className="bg-zinc-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Coaching Team
              </h3>

              <p className="text-gray-300">
                Professional coaching support.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-gradient-to-r from-emerald-700 to-lime-500">

        <h2 className="text-5xl font-bold mb-6">
          Join Our Football Family
        </h2>

        <p className="text-xl mb-8">
          Become part of the next generation of SLIIT Football.
        </p>

        <button
          onClick={() => navigate("/component/register")}
          className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          Register Now
        </button>

      </section>

    </div>
  );
}