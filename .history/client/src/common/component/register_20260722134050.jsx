import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";
import Logo from "../assets/opt3.png";

// Interactive Particle Constellation Canvas Component
const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Dynamic particle density based on screen dimensions
    const particleCount = Math.floor((width * height) / 10000);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    // Canvas render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Particle position update
        p.x += p.vx;
        p.y += p.vy;

        // Screen collision/bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw individual star point
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`; // Dynamic cyan/blue tint
        ctx.fill();

        // Connect nearby points with glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 110;

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / maxDist) * 0.25;
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        dob: formData.dob,
        role: formData.role,
        password: formData.password,
      });

      console.log("Saved User:", response);

      alert("Registration Successful!");
      navigate("/component/login");
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message || "Registration Failed");
      } else {
        alert("Cannot connect to Spring Boot Server");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070A12] text-white relative overflow-hidden py-10 font-sans">

      {/* CONNECTED STARS CANVAS BACKGROUND */}
      <StarryBackground />

      {/* GLOW BACKGROUND ORBS */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10 pointer-events-none z-0" />
      <div className="absolute w-72 h-72 bg-green-400/20 rounded-full blur-3xl bottom-10 right-10 pointer-events-none z-0" />

      {/* REGISTER CARD */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl z-10 mx-4">

        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
        </div>

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-white/60 text-sm mt-1 mb-6">
          Join SLIIT Football Community
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/30 text-white focus:border-blue-400 focus:bg-white/10 outline-none transition-all text-sm"
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/30 text-white focus:border-green-400 focus:bg-white/10 outline-none transition-all text-sm"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/30 text-white focus:border-blue-400 focus:bg-white/10 outline-none transition-all text-sm"
            required
          />

          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/30 text-white focus:border-green-400 focus:bg-white/10 outline-none transition-all text-sm"
          />

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-400 focus:bg-white/10 outline-none transition-all text-sm [color-scheme:dark]"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-green-400 focus:bg-white/10 outline-none transition-all text-sm"
          >
            <option value="fan" className="bg-[#070A12] text-white">Fan</option>
            <option value="player" className="bg-[#070A12] text-white">Player</option>
            <option value="admin" className="bg-[#070A12] text-white">Admin</option>
          </select>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/30 text-white focus:border-blue-400 focus:bg-white/10 outline-none transition-all text-sm"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-white/30 text-white focus:border-green-400 focus:bg-white/10 outline-none transition-all text-sm"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-black bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 transition-all shadow-lg active:scale-[0.99] disabled:opacity-50 text-sm mt-2"
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </form>

        <p className="text-center text-white/60 mt-6 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/component/login")}
            className="text-blue-400 cursor-pointer font-semibold hover:text-green-300 transition-colors"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}