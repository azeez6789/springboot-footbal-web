import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    dob: "",
    role: "fan",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(formData);

    alert("Registration Successful!");

    navigate("/component/login");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>

      {/* REGISTER CARD */}
      <div
        className="relative z-10 w-full max-w-xl
        bg-white/5 backdrop-blur-lg
        border border-white/10
        rounded-3xl shadow-2xl
        p-8"
      >

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-20 h-20" />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Create Account
        </h1>

        <p className="text-center text-white/60 mb-8">
          Join the SLIIT Football Community
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 text-white border border-white/10
            focus:outline-none focus:border-blue-400
            focus:bg-white/10 transition"
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 text-white border border-white/10
            focus:outline-none focus:border-green-400
            focus:bg-white/10 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 text-white border border-white/10
            focus:outline-none focus:border-blue-400
            focus:bg-white/10 transition"
            required
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 text-white border border-white/10
            focus:outline-none focus:border-green-400
            focus:bg-white/10 transition"
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 text-white border border-white/10
            focus:outline-none focus:border-blue-400
            focus:bg-white/10 transition"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 text-white border border-white/10
            focus:outline-none focus:border-green-400
            focus:bg-white/10 transition"
          >
            <option value="fan" className="bg-black">
              Fan
            </option>
            <option value="player" className="bg-black">
              Player
            </option>
            <option value="admin" className="bg-black">
              Admin
            </option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 text-white border border-white/10
            focus:outline-none focus:border-blue-400
            focus:bg-white/10 transition"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 text-white border border-white/10
            focus:outline-none focus:border-green-400
            focus:bg-white/10 transition"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-black
            bg-gradient-to-r from-blue-500 to-green-400
            hover:from-blue-600 hover:to-green-500
            transition-all duration-300
            hover:scale-[1.02]
            active:scale-95"
          >
            Register
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="text-center mt-6 text-white/60">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/component/login")}
            className="text-blue-400 cursor-pointer font-semibold hover:text-green-300"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}