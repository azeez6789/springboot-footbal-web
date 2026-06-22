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

         <div className="max-w-3xl mx-auto p-8">
              <h1 className="text-4xl font-bold mb-6">About SLIIT Football</h1>
                <p className="text-gray-700 mb-4">
                    SLIIT Football is a vibrant and passionate football community based at the Sri Lanka Institute of Information Technology (SLIIT). We are dedicated to fostering a love for football among students, providing opportunities for skill development, and promoting camaraderie through the beautiful game. Our community is open to players of all skill levels, from beginners to seasoned athletes, and we organize regular training sessions, friendly matches, and competitive tournaments to bring football enthusiasts together. Join us to experience the thrill of the game, make lasting friendships, and be part of a supportive football family at SLIIT!
                </p>
         </div>
    </div>
    
  );
}