import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-800 text-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            About SLIIT Football
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            SLIIT Football is more than a sport. We build teamwork,
            leadership, discipline, and passion while representing
            our university with pride.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-200">
              To develop talented football players by providing
              opportunities for training, competition, and personal
              growth while promoting sportsmanship and teamwork.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Our Vision
            </h2>
            <p className="text-gray-200">
              To become the leading university football program in
              Sri Lanka and inspire future generations of athletes.
            </p>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-300">50+</h3>
            <p className="mt-3 text-lg">Active Players</p>
          </div>

          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-300">15+</h3>
            <p className="mt-3 text-lg">Tournaments</p>
          </div>

          <div className="bg-white/10 rounded-xl p-8 text-center">
            <h3 className="text-5xl font-bold text-cyan-300">10+</h3>
            <p className="mt-3 text-lg">Awards Won</p>
          </div>

        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white/10 rounded-xl p-10">
          <h2 className="text-4xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-lg text-gray-200 leading-relaxed">
            SLIIT Football Club has grown into one of the most active
            university sports communities. Through dedication,
            hard work, and teamwork, our players continue to compete
            at the highest level while building lifelong friendships
            and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Join Our Football Family
        </h2>

        <p className="text-lg text-gray-200 mb-8">
          Become part of the SLIIT Football community and support your
          team every step of the way.
        </p>

        <button className="bg-gradient-to-r from-blue-500 to-green-400 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition whitespace-nowrap">
          Get Started
        </button>
      </section>

    </div>
  );
}