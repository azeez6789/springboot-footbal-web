  import React , {useState , useEffect , useRef}  from "react";
  import { User, Shield, Calendar, Circle, Mail, CalendarDays, ShieldCheck, Upload, ArrowLeft } from "lucide-react";
  import {useNavigate} from "react-router-dom";
  import Logo from "../../../common/assets/opt3.png";


export default function PlayerProfileForm() {

    const navigate = useNavigate();

const [formData, setFormData] = useState({
  fullName: "",
  emailAddress: "",
  teamName: "",
  uploadedAmount: "",
  date: "",
  cname: "",
  vname: "",
});

const [paymentReceipt, setPaymentReceipt] = useState(null);
const [previewUrl, setPreviewUrl] = useState(null);
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleFileChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setPaymentReceipt(file);
    setPreviewUrl(URL.createObjectURL(file));
  }
};

    
return (
      <div className="min-h-screen bg-[#0b1220] text-white selection:bg-blue-500/30 relative overflow-hidden flex flex-col justify-between font-sans">
        

        <div className="fixed w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full top-[-200px] left-[-200px] pointer-events-none z-0" />
        <div className="fixed w-[600px] h-[600px] bg-green-400/10 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />

        <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="SLIIT Logo" className="w-10 h-10 object-contain" />
              <h1 className="font-bold tracking-wider text-sm md:text-base">SLIIT FOOTBALL</h1>
            </div>
            <nav className="hidden md:flex gap-6 text-white/70 text-sm font-medium">
              <button onClick={() => navigate("/")} className="hover:text-white transition-colors">Home</button>
              <button onClick={() => navigate("/player-requests")} className="hover:text-white transition-colors">Requests</button>
              <button onClick={() => navigate("/pages/event")} className="hover:text-white transition-colors">Events</button>
            </nav>
            <div className="flex gap-3 text-sm font-medium">
              <button onClick={() => navigate("/pages/tournament")} className="px-4 py-2 bg-white/10 hover:bg-white/15 transition-all rounded-xl flex items-center gap-2">
                <ArrowLeft size={14} /> Back
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto w-full px-6 py-12 relative z-10 flex-grow">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-green-400 bg-clip-text text-transparent">
              Apply for  Tournament & Matches
            </h1>
            <p className="text-sm text-white/50 mt-2">
              Fill out your details regarding the Tournament & Matches
            </p>
          </div>


          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl space-y-6">
            
            <div className="flex flex-col items-center justify-center border-b border-white/10 pb-6">
              <div className="relative group w-24 h-24 bg-black/40 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden mb-3 shadow-inner">
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <User className="text-white/20 w-10 h-10" />
                )}
                <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-[10px] uppercase font-bold tracking-wider text-blue-400">
                  <Upload size={16} className="mb-1" />
                  Upload
                  <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>
              </div>
              <span className="text-xs text-white/40">Upload Payment Recipt </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                  <User size={14} className="text-green-400" /> Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="First and last name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                  <Mail size={14} className="text-green-400" /> Email Address *
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  required
                  placeholder="Enter your Email Address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                  <User size={14} className="text-green-400" /> Univercity or club Name *
                </label>
                <input
                  type="text"
                  name="teamName"
                  required
                  placeholder="club or unversity name "
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className = "space-y-2">
                  <label className = "text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                      <Calendar size = {14} className = "text-green-400"/> Upload Amount
                  </label>

                  <input
                      type = "text"
                      name  = "uploadedAmount"
                      required
                      placeholder = "Uploaded Amount"
                      value = {formData.uploadedAmount}
                      onChange = {handleChange}
                      className = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      />

              </div>


            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                <CalendarDays size={14} className="text-green-400" /> Registered Date *
              </label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
              />
            </div>

            <div className = "space-y-2">
              <label  className = "text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                      <Calendar size = {14} className = "text-green-400"/> Captan Name
              </label>

              <input 
                  type = "text"
                  name = "cname"
                  required
                  placeholder = "Captan Name"
                  value = {formData.cname}
                  onChange = {handleChange}
                  className = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                  />
            </div>

                <div className = "space-y-2">
              <label  className = "text-xs font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
                      <Calendar size = {14} className = "text-green-400"/> Vicecaptan Name
              </label>

              <input 
                  type = "text"
                  name = "vname"
                  required
                  placeholder = "Vicecaptan Name"
                  value = {formData.vname}
                  onChange = {handleChange}
                  className = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono"
                  />
            </div>


            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 py-3.5 bg-gradient-to-r from-blue-500 to-green-400 text-black font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg hover:opacity-90 disabled:opacity-50 transition-all duration-300 transform active:scale-[0.99]"
            >
              {loading ? "Saving to Database..." : "Register Profile Data"}
            </button>

          </form>
        </div>

        <footer className="border-t border-white/5 py-4 text-center text-xs text-white/20 relative z-10 bg-white/5 backdrop-blur-xl">
          &copy; 2026 SLIIT Football Club Administration Panel. All Rights Reserved.
        </footer>
      </div>
    );
  };