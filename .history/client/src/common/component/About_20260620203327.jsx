import React from "react";
import { FaFutbol, FaUsers, FaTrophy, FaBullseye } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-cyan-400">SLIIT Football</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg text-gray-300">
          SLIIT Football is more than just a sports team. We are a community
          of passionate athletes, students, and supporters united by our love
          for football and commitment to excellence.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 px-8 md:px-20 py-10">
        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
          <FaBullseye className="text-cyan-400 text-5xl mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To inspire students through football, develop athletic excellence,
            and foster teamwork, leadership, and sportsmanship both on and off
            the field.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
          <FaTrophy className="text-yellow-400 text-5xl mb-4" />
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To become one of the leading university football programs,
            recognized for outstanding performance, discipline, and student
            development.
          </p>
        </div>

      </section>

      {/* Stats Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          <div className="bg-white/10 p-8 rounded-2xl">
            <FaUsers className="text-cyan-400 text-5xl mx-auto mb-4" />
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-gray-300 mt-2">Active Players</p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl">
            <FaFutbol className="text-green-400 text-5xl mx-auto mb-4" />
            <h3 className="text-4xl font-bold">250+</h3>
            <p className="text-gray-300 mt-2">Matches Played</p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl">
            <FaTrophy className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-4xl font-bold">15+</h3>
            <p className="text-gray-300 mt-2">Tournament Wins</p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-8 md:px-20">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Our Team
          </h2>

          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            The SLIIT Football Team consists of talented and dedicated players
            who represent the university in inter-university competitions and
            national-level tournaments. Through rigorous training and teamwork,
            our athletes continuously strive for excellence and success.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-700">
        <p className="text-gray-400">
          © 2026 SLIIT Football Club. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}