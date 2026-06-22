import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/opt3.png";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
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

    // TODO: API call (Spring Boot / MongoDB)
    navigate("/component/login");
  };

  return (
    <div className="bg-white">
         {/* Header */}
         <header className="bg-gray-900 text-white h-10">
           <div className="absolute z-0 -top-500 w-screen h-900 bg-[radial-gradient(circle_at_right,_rgba(170,76,820,0.2),_rgba(60,900,400,0.6),_transparent_80%)]"></div>
           <div className="relative z-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between items-center py-3">
               <div className="flex items-center justify-between  text-2xl">
                 <div className="flex items-center space-x-2  ml-1 mr-40">
                   <img src={Logo} className="w-25  h-25 mt-1"></img>
                 </div>
                 <nav className="hidden md:flex space-x-8">
                    <a  className="hover:text-blue-400 transition-colors" onClick={() => navigate('/operator/onlinebookingPage')}>Home</a>
                   <a  className="hover:text-blue-400 transition-colors" onClick={() => navigate('/operator/onlinebookingPage')}>Tournaments</a>
                   <a  className="hover:text-blue-400 transition-colors" onClick={() => navigate('/customersupport/feedback')}>Events</a>
                   <a  className="hover:text-yellow-400 transition-colors" onClick={()=> navigate ('/customersupport/complaint')}>Tickets</a>
                   <a href="#" className="hover:text-blue-400 transition-colors"onClick={() => navigate ('/component/about')}>About</a>
                 </nav>
               </div>
               <div className="hidden md:flex items-center space-x-4 ml-auto">
                 <button className=" bg-gradient-to-r from-blue-500 to-green-400 text-white px-5 py-2 rounded-lg whitespace-nowrap  text-xl" onClick={() => navigate('/component/login')}>Log In</button>
                 <button onClick={() => navigate('/component/register')} className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-5 py-2 rounded-lg whitespace-nowrap text-xl">
                   Get Started
                 </button>
               </div>
             </div>
           </div>
         </header>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
            required
          />

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
            required
          />

          {/* Phone */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
          />

          {/* DOB */}
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
          />

          {/* ROLE */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
          >
            <option value="fan">Fan</option>
            <option value="player">Player</option>
            <option value="admin">Admin</option>
          </select>

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
            required
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-indigo-500 outline-none"
            required
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white
            bg-gradient-to-r from-indigo-500 to-green-600
            hover:from-indigo-600 hover:to-green-700
            transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Register
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/component/login")}
            className="text-indigo-400 cursor-pointer font-semibold hover:text-indigo-300"
          >
            Login
          </span>
        </p>
      </div>
    
  );
}