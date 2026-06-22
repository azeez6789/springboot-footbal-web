import { useState } from 'react';
import { Car, MapPin, Clock, Shield, Users, ChevronRight, ChevronDown, Star, Menu, X } from 'lucide-react';
import Logo from '../assets/opt3.png'
import {useNavigate} from 'react-router-dom'

export default function ParkingLandingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
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
                <a  className="hover:text-blue-400 transition-colors" onClick={() => navigate('/operator/onlinebookingPage')}>Booking</a>
                <a  className="hover:text-blue-400 transition-colors" onClick={() => navigate('/customersupport/feedback')}>Feedback</a>
                <a  className="hover:text-yellow-400 transition-colors" onClick={()=> navigate ('/customersupport/complaint')}>Complaint</a>
                <a href="#" className="hover:text-blue-400 transition-colors">About</a>
              </nav>
            </div>
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              <button className=" bg-gradient-to-r from-indigo-300   to-green-900 px-10 py-3 font-medium transition-colors   rounded-lg mr-10 text-2xl" onClick={() => navigate('/login')}>Log In</button>
              <button onClick={() => navigate('/register')} className="bg-gradient-to-r from-indigo-300  to-green-900 px-10 py-3    rounded-lg font-medium transition-colors  text-2xl  mr-00">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
            
      <section className="bg-gray-900 text-white py-50">
       
      </section>
      

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="-mt-57 mb-27 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
               More Than a Game{' '}
                <span className="text-indigo-400">FOOTBALL</span>{' '}
               It's Our Passion
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
               Join the SLIIT Football community and support your team every step of the way.
              </p>
              <button onClick={() => navigate('/register')} className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-lg font-medium text-lg transition-colors inline-flex items-center space-x-2">
                <span>Get Started</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <div className=" rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img src='/public/chat1.png' className="w-600 ml-20 mb-5"></img>
              </div>
            </div>
            
          </div>
        </div>
      </section>

     </div>
  );
}