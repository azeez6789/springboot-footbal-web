import React from "react";

export default function About() {
  return (
    <div className="bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-700 to-blue-900">
        <div className="text-center px-6">
          <h1 className="text-6xl font-bold mb-6">
            About SLIIT Football
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            More than a game. A family united by passion,
            teamwork, dedication, and excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-8 text-center">
          Our Story
        </h2>

        <p className="text-lg leading-9 text-gray-300">
          SLIIT Football Club has become one of the leading university
          football communities in Sri Lanka. Through years of hard work,
          discipline, and commitment, our players have represented the
          university in numerous competitions while inspiring future
          generations of athletes.
        </p>

        <p className="text-lg leading-9 text-gray-300 mt-6">
          Football is not only about winning trophies. It is about
          creating friendships, building character, and developing
          leadership skills that last a lifetime.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">
            Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-slate-800 p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-gray-300">
                To create an environment where student-athletes
                can develop their football skills, teamwork,
                leadership, and sportsmanship.
              </p>
            </div>

            <div className="bg-slate-800 p-10 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-gray-300">
                To become the most respected university football
                program in Sri Lanka while producing outstanding
                athletes and leaders.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-slate-900 p-8 rounded-xl text-center">
            <h3 className="text-5xl font-bold text-cyan-400">15+</h3>
            <p className="mt-3">Tournaments</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-center">
            <h3 className="text-5xl font-bold text-cyan-400">50+</h3>
            <p className="mt-3">Players</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-center">
            <h3 className="text-5xl font-bold text-cyan-400">10+</h3>
            <p className="mt-3">Awards</p>
          </div>

          <div className="bg-slate-900 p-8 rounded-xl text-center">
            <h3 className="text-5xl font-bold text-cyan-400">100%</h3>
            <p className="mt-3">Dedication</p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">
            Why Choose SLIIT Football?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Professional Training
              </h3>
              <p className="text-gray-300">
                Structured coaching programs designed for all skill levels.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Team Spirit
              </h3>
              <p className="text-gray-300">
                Build lifelong friendships and leadership qualities.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Competitions
              </h3>
              <p className="text-gray-300">
                Participate in major university tournaments.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Facilities
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-900 p-10 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Training Ground
            </h3>

            <p className="text-gray-300">
              Modern football facilities for daily practice sessions.
            </p>
          </div>

          <div className="bg-slate-900 p-10 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Fitness Center
            </h3>

            <p className="text-gray-300">
              Strength and conditioning programs for athletes.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-bold text-xl">
                Can beginners join?
              </h3>
              <p className="text-gray-300 mt-2">
                Yes. We welcome players of all skill levels.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-bold text-xl">
                How can I register?
              </h3>
              <p className="text-gray-300 mt-2">
                Visit our registration page and complete the form.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 text-center bg-gradient-to-r from-cyan-700 to-blue-900">

        <h2 className="text-5xl font-bold mb-6">
          Join Our Football Family
        </h2>

        <p className="text-xl mb-10">
          Be part of something bigger than football.
        </p>

        <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:scale-105 transition">
          Register Now
        </button>

      </section>

    </div>
  );
}