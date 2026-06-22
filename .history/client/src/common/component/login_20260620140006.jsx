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

    // Add API call here
    navigate("/");
  };

  return (
    
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4   bg-[radial-gradient(circle_at_right,_rgba(170,76,820,0.2),_rgba(60,900,400,0.6),_transparent_80%)]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6  ">
          <img
            src={Logo}
            alt="SLIIT Football"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Login to your SLIIT Football account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="flex justify-between mb-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-sm">Remember Me</span>
            </label>

            <a
              href="#"
              className="text-indigo-600 text-sm hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition bg-[radial-gradient(circle_at_right,_rgba(170,76,220,0.2),_rgba(60,120,200,0.6),_transparent_80%)]
hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={() => navigate('/component/register')}
            className="text-indigo-600 cursor-pointer font-semibold"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}