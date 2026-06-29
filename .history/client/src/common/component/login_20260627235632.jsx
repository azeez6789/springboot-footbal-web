import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
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

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

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

<div className="min-h-screen flex items-center justify-center bg-[#070A12] relative overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute w-[400px] h-[400px] bg-blue-500/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
  <div className="absolute w-[400px] h-[400px] bg-green-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />

  {/* LOGIN CARD */}
  <div className="w-full max-w-md p-8 rounded-2xl
    bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-10">

    {/* LOGO */}
    <div className="flex justify-center mb-6">
      <img src={Logo} alt="Logo" className="w-20 h-20" />
    </div>

    {/* TITLE */}
    <h1 className="text-3xl font-bold text-center text-white mb-2">
      Welcome Back
    </h1>

    <p className="text-center text-white/60 mb-8">
      Login to continue your journey
    </p>

    {/* FORM */}
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* EMAIL */}
      <div>
        <label className="block text-white/70 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg
          bg-white/5 text-white border border-white/10
          focus:outline-none focus:border-blue-400 focus:bg-white/10 transition"
          required
        />
      </div>

      {/* PASSWORD */}
      <div>
        <label className="block text-white/70 mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-lg
          bg-white/5 text-white border border-white/10
          focus:outline-none focus:border-green-400 focus:bg-white/10 transition"
          required
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="w-full py-3 rounded-lg font-semibold text-black
        bg-gradient-to-r from-blue-500 to-green-400
        hover:from-blue-600 hover:to-green-500
        transition-all duration-300 hover:scale-[1.02] active:scale-95"
      >
        Login
      </button>
    </form>

    {/* REGISTER LINK */}
    <p className="text-center mt-6 text-white/60">
      Don’t have an account?{" "}
      <span
        onClick={() => navigate("/component/register")}
        className="text-blue-400 cursor-pointer font-semibold hover:text-green-300"
      >
        Register
      </span>
    </p>
  </div>
</div>

);
}