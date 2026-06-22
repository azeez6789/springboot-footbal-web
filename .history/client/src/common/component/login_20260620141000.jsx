import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // TODO: API call
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gray-900
      bg-[radial-gradient(circle_at_top_right,_rgba(79,70,229,0.35),_rgba(16,185,129,0.25),_transparent_70%)]">

      {/* LOGIN CARD */}
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl
        bg-gray-900/60 backdrop-blur-xl border border-white/10">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-20 h-20" />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Login to continue your journey
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg 
              bg-gray-800 text-white border border-gray-700
              focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg 
              bg-gray-800 text-white border border-gray-700
              focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white
            bg-gradient-to-r from-indigo-500 to-green-600
            hover:from-indigo-600 hover:to-green-700
            transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Login
          </button>
        </form>

        {/* REGISTER LINK */}
        <p className="text-center mt-6 text-gray-400">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/component/register")}
            className="text-indigo-400 cursor-pointer font-semibold hover:text-indigo-300"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}