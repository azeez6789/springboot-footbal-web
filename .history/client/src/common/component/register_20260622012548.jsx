import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();

```
if (formData.password !== formData.confirmPassword) {
  alert("Passwords do not match!");
  return;
}

try {
  setLoading(true);

  const response = await axios.post(
    "http://localhost:8080/api/users/register",
    {
      fullName: formData.fullName,
      username: formData.username,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      dob: formData.dob,
      role: formData.role,
      password: formData.password,
    }
  );

  console.log("Saved User:", response.data);

  alert("Registration Successful!");

  navigate("/component/login");
} catch (error) {
  console.error(error);

  if (error.response) {
    alert(error.response.data.message || "Registration Failed");
  } else {
    alert("Cannot connect to Spring Boot server");
  }
} finally {
  setLoading(false);
}
```

};

return ( <div className="min-h-screen flex items-center justify-center bg-[#050816] px-4"> <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full left-10 top-10"></div> <div className="absolute w-[400px] h-[400px] bg-green-500/20 blur-[150px] rounded-full right-10 bottom-10"></div>

```
  <div className="relative w-full max-w-xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-8">

    <div className="flex justify-center mb-4">
      <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
    </div>

    <h1 className="text-4xl font-bold text-center text-white">
      Create Account
    </h1>

    <p className="text-center text-gray-400 mt-2 mb-8">
      Join SLIIT Football Community
    </p>

    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:border-blue-400 outline-none"
        required
      />

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:border-green-400 outline-none"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:border-blue-400 outline-none"
        required
      />

      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:border-green-400 outline-none"
      />

      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:border-blue-400 outline-none"
      />

      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:border-green-400 outline-none"
      >
        <option value="fan">Fan</option>
        <option value="player">Player</option>
        <option value="admin">Admin</option>
      </select>

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:border-blue-400 outline-none"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-white/5 text-white border border-white/10 focus:border-green-400 outline-none"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-lg font-semibold text-black bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 transition-all"
      >
        {loading ? "Registering..." : "Register"}
      </button>

    </form>

    <p className="text-center text-gray-400 mt-6">
      Already have an account?
      <span
        onClick={() => navigate("/component/login")}
        className="text-blue-400 cursor-pointer ml-2 hover:underline"
      >
        Login
      </span>
    </p>
  </div>
</div>


);
}
