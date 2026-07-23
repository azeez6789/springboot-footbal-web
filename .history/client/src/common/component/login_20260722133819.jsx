import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
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
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`; // Cyan/blue tint
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

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      console.log(formData);

      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      console.log("Login Success:", response);

      alert("Login Successful");

      // Optional: store token if backend returns one
      // localStorage.setItem("token", response.token);

      navigate("/");

    } catch (error) {
      console.error(error);

      if (error.response) {
        alert(error.response.data.message || "Invalid email or password");
      } else {
        alert("Cannot connect to Spring Boot Server");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070A12] relative overflow-hidden font-sans">

      {/* CONNECTED STARS CANVAS BACKGROUND */}
      <StarryBackground />

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-blue-500/30 blur-[120px] rounded-full top-[-100px] left-[-100px] pointer-events-none z-0" />
      <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px] pointer-events-none z-0" />

      {/* LOGIN CARD */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-10 mx-4">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-white/60 mb-8 text-sm">
          Login to continue your journey
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="block text-white/70 text-sm mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all text-sm"
              required
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-white/70 text-sm mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 text-white placeholder-white/30 border border-white/10 focus:outline-none focus:border-green-400 focus:bg-white/10 transition-all text-sm"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-bold text-black bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 transition-all shadow-lg active:scale-[0.99] disabled:opacity-50 text-sm"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* REGISTER LINK */}
        <p className="text-center mt-6 text-white/60 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/component/register")}
            className="text-blue-400 cursor-pointer font-semibold hover:text-green-300 transition-colors"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}