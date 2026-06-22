import React from "react";

export default function About() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-cyan-700 via-blue-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-6">
            About SLIIT Football
          </h1>

          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Football is more than a sport. At SLIIT Football, we build
            champions, leaders, and lifelong friendships through passion,
            dedication, and teamwork.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold mb-10 text-center">
          Our Story
        </h2>

        <div className="space-y-6 text-lg text-gray-300 leading-9">
          <p>
            SLIIT Football Club has grown into one of the most respected
            university football communities in Sri Lanka.
          </p>

          <p>
            Every year, talented players join our team to represent the
            university in competitive tournaments while developing their
            football abilities and leadership skills.
          </p>

          <p>
            Through hard work, discipline, and commitment, we continue
            building a strong football culture that inspires future
            generations of athletes.
          </p>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">
            Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-slate-800 p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-5">
                Our Mission
              </h3>

              <p className="text-gray-300 leading-8">
                To provide opportunities for students to excel in football,
                improve teamwork, and develop leadership skills while
                maintaining sportsmanship and discipline.
              </p>
            </div>

            <div className="bg-slate-800 p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-5">
                Our Vision
              </h3>

              <p className="text-gray-300 leading-8">
                To become the leading university football club in Sri Lanka
                and create future football leaders who inspire others.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          Club Statistics
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-slate-900 rounded-xl p-10 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
            <p className="mt-4">Players</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-10 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">20+</h3>
            <p className="mt-4">Matches Per Year</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-10 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">15+</h3>
            <p className="mt-4">Tournaments</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-10 text-center">
            <h3 className="text-5xl font-bold text-cyan-400">10+</h3>
            <p className="mt-4">Awards</p>
          </div>

        </div>
      </section>

      {/* Why Join */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Join SLIIT Football?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Professional Training
              </h3>

              <p className="text-gray-300">
                Learn from experienced coaches and improve your skills.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Teamwork
              </h3>

              <p className="text-gray-300">
                Build friendships and learn the importance of collaboration.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Competition
              </h3>

              <p className="text-gray-300">
                Participate in university tournaments and championships.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16">
          Our Facilities
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-900 p-10 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">
              Football Ground
            </h3>

            <p className="text-gray-300">
              Well-maintained training grounds for daily practice and matches.
            </p>
          </div>

          <div className="bg-slate-900 p-10 rounded-xl">
            <h3 className="text-3xl font-bold mb-4">
              Fitness Center
            </h3>

            <p className="text-gray-300">
              Modern gym facilities to improve strength and conditioning.
            </p>
          </div>

        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">
            Leadership Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold">
                Team Captain
              </h3>
              <p className="text-gray-400 mt-2">
                Leading players both on and off the field.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold">
                Head Coach
              </h3>
              <p className="text-gray-400 mt-2">
                Responsible for training and match preparation.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold">
                Club Manager
              </h3>
              <p className="text-gray-400 mt-2">
                Organizing club activities and tournaments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 bg-gradient-to-r from-cyan-700 to-blue-900 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Become Part of Our Journey
        </h2>

        <p className="text-xl text-gray-200 mb-10">
          Join SLIIT Football and experience the passion of the game.
        </p>

        <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:scale-105 transition">
          Register Now
        </button>
      </section>

    </div>
  );
}