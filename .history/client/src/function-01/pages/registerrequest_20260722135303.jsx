import { useState, useEffect, useRef } from "react";
import {
  getAllUsers,
  updateUser,
  deleteUser,
} from "../../common/services/userService";
import { useNavigate, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Calendar,
  Ticket,
  Settings,
  LogOut,
  X,
  Search
} from "lucide-react";

// =========================================================================
// 🌟 EXACT SIDEBAR COMPONENT (MATCHING DASHBOARD SCREENSHOT)
// =========================================================================
function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
      isActive
        ? "bg-blue-600/20 text-white font-semibold shadow-sm border border-blue-500/20"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <aside className="fixed left-0 top-0 w-60 h-screen bg-[#0e1322] border-r border-white/5 flex flex-col justify-between p-4 z-50">
      
      {/* ------------------------------------------------------------- */}
      {/* 📌 SIDEBAR HEADER: LOGO, TITLE & CLOSE BUTTON                  */}
      {/* ------------------------------------------------------------- */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Trophy size={18} />
            </div>
            <span className="font-bold text-base text-white tracking-wide">
              Admin Dashboard
            </span>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors p-1">
            <X size={18} />
          </button>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 📌 NAVIGATION MENU LINKS                                      */}
        {/* ------------------------------------------------------------- */}
        <nav className="space-y-1">
          <NavLink to="/" className={menuClass}>
            <LayoutDashboard size={18} className="text-blue-400" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/function-01/request" className={menuClass}>
            <Users size={18} className="text-blue-400" />
            <span>Requests</span>
          </NavLink>

          <NavLink to="/function-01/profile" className={menuClass}>
            <Trophy size={18} className="text-blue-400" />
            <span>Players Profile</span>
          </NavLink>

          <NavLink to="/pages/matches" className={menuClass}>
            <Calendar size={18} className="text-blue-400" />
            <span>Matches</span>
          </NavLink>

          <NavLink to="/pages/ticket" className={menuClass}>
            <Ticket size={18} className="text-blue-400" />
            <span>Tickets</span>
          </NavLink>

          <NavLink to="/settings" className={menuClass}>
            <Settings size={18} className="text-blue-400" />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 📌 SIDEBAR FOOTER: LOGOUT BUTTON                              */}
      {/* ------------------------------------------------------------- */}
      <div className="pt-4 border-t border-white/5">
        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all font-medium text-sm"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </NavLink>
      </div>

    </aside>
  );
}

// ==========================================
// STARRY BACKGROUND CANVAS COMPONENT
// ==========================================
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

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.fill();

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

// ==========================================
// MAIN REGISTER REQUEST PAGE
// ==========================================
export default function RegisterRequest() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showUserForm, setShowUserForm] = useState(false);

  const [userFormData, setUserFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    dob: "",
    role: "",
    password: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUsers();
      setUsers(data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleEditUserClick = (user) => {
    setEditingUser(user);
    setUserFormData({
      fullName: user.fullName || "",
      username: user.username || "",
      email: user.email || "",
      phoneNumber: user.phoneNumber || "",
      dob: user.dob || "",
      role: user.role || "",
      password: "",
    });
    setShowUserForm(true);
  };

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await updateUser(editingUser.id, userFormData);
      }
      setShowUserForm(false);
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#070b15] text-white selection:bg-blue-500/30 relative overflow-hidden font-sans flex">
      
      {/* ------------------------------------------------------------- */}
      {/* 📌 RENDER EXACT SIDEBAR HERE                                  */}
      {/* ------------------------------------------------------------- */}
      <Sidebar />

      {/* CANVAS BACKGROUND */}
      <StarryBackground />

      {/* BACKGROUND AMBIENT GLOW */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full top-[-200px] left-[100px] pointer-events-none z-0" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/10 blur-[180px] rounded-full bottom-[-200px] right-[-200px] pointer-events-none z-0" />

      {/* ------------------------------------------------------------- */}
      {/* 📌 MAIN CONTENT AREA (Offset by ml-60 for Sidebar space)       */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 ml-60 relative z-10 min-h-screen flex flex-col">

        {/* HEADER */}
        <header className="sticky top-0 z-40 bg-[#070b15]/80 backdrop-blur-xl border-b border-white/5 px-8 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                Admin Panel
              </span>
            </div>

            <div className="flex gap-3 text-sm font-medium">
              <button 
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-white/10 hover:bg-white/15 transition-all rounded-xl text-xs font-medium"
              >
                Switch Account
              </button>
            </div>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="max-w-7xl mx-auto px-8 py-10 flex-1 w-full space-y-8">

          {/* USERS TABLE CONTAINER */}
          <div className="bg-[#0e1322]/80 border border-white/5 rounded-2xl p-6 backdrop-blur-xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Registered Users
                </h2>
                <p className="text-xs text-gray-400 mt-1">
                  Manage platform accounts and authorization details.
                </p>
              </div>
              <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 text-xs text-blue-400 font-mono">
                Total Records: {users.length}
              </div>
            </div>

            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-3 text-white/50">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs tracking-widest uppercase">Loading accounts...</span>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-white/5">
                <table className="w-full text-sm border-collapse">
                  <thead className="text-gray-400 bg-white/[0.02] border-b border-white/5 font-medium">
                    <tr>
                      <th className="p-4 text-left font-semibold">ID</th>
                      <th className="p-4 text-left font-semibold">Full Name</th>
                      <th className="p-4 text-left font-semibold">Username</th>
                      <th className="p-4 text-left font-semibold">Email</th>
                      <th className="p-4 text-left font-semibold">Role</th>
                      <th className="p-4 text-center font-semibold">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-white/5">
                    {users.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="p-8 text-center text-gray-500 italic">
                          No registered users found.
                        </td>
                      </tr>
                    ) : (
                      users.map((u) => (
                        <tr key={u.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="p-4 font-mono text-gray-400">{u.id}</td>
                          <td className="p-4 font-medium text-white">{u.fullName}</td>
                          <td className="p-4 text-gray-300 font-mono text-xs">{u.username || "-"}</td>
                          <td className="p-4 text-gray-300">{u.email}</td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                              {u.role || "User"}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex gap-2 justify-center">
                              <button
                                onClick={() => handleEditUserClick(u)}
                                className="px-3 py-1.5 text-xs font-medium bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg border border-blue-500/10 transition-colors"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteUser(u.id)}
                                className="px-3 py-1.5 text-xs font-medium bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg border border-red-500/10 transition-colors"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* EDIT USER MODAL OVERLAY */}
          {showUserForm && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-[#0e1322] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl space-y-4">
                
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-white">
                    Update Account Details
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5">Modify properties for user ID: {editingUser?.id}</p>
                </div>

                <form onSubmit={handleUserSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-medium">Full Name</label>
                    <input
                      name="fullName"
                      value={userFormData.fullName}
                      onChange={handleUserInputChange}
                      required
                      className="w-full p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-medium">Username</label>
                    <input
                      name="username"
                      value={userFormData.username}
                      onChange={handleUserInputChange}
                      required
                      className="w-full p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="Username"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-medium">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={userFormData.email}
                      onChange={handleUserInputChange}
                      required
                      className="w-full p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="name@domain.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-medium">Phone Number</label>
                      <input
                        name="phoneNumber"
                        value={userFormData.phoneNumber}
                        onChange={handleUserInputChange}
                        className="w-full p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="Phone"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1 font-medium">System Role</label>
                      <select
                        name="role"
                        value={userFormData.role}
                        onChange={handleUserInputChange}
                        className="w-full p-2.5 bg-[#0e1322] border border-white/10 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
                      >
                        <option value="">Select Role</option>
                        <option value="USER">User</option>
                        <option value="PLAYER">Player</option>
                        <option value="ADMIN">Admin</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1 font-medium">Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      value={userFormData.dob}
                      onChange={handleUserInputChange}
                      className="w-full p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div className="flex gap-3 mt-6 pt-2">
                    <button 
                      type="submit" 
                      className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 p-2.5 rounded-lg text-black font-semibold text-sm hover:opacity-95 active:scale-[0.99] transition-all"
                    >
                      Save Changes
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setShowUserForm(false);
                        setEditingUser(null);
                      }}
                      className="flex-1 bg-white/10 hover:bg-white/15 p-2.5 rounded-lg text-sm font-medium transition-colors text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </form>

              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}