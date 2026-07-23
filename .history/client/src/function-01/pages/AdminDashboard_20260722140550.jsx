import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  Trophy,
  Calendar,
  Ticket,
  Settings,
  LogOut,
  X,
  Shield,
  DollarSign,
  Search,
  Bell,
  CheckCircle,
  ShieldCheck,
  Clock,
} from "lucide-react";
import {
  getAllUsers,
  updateUser,
  deleteUser,
} from "../../common/services/userService";

export default function AdminDashboard() {
  // -------------------------------------------------------------
  // 📌 ACTIVE TAB STATE ("dashboard" or "requests")
  // -------------------------------------------------------------
  const [activeTab, setActiveTab] = useState("requests"); // Default open tab

  // User management state for Requests view
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
  });

  // Fetch users when tab switches to requests
  useEffect(() => {
    if (activeTab === "requests") {
      fetchUsers();
    }
  }, [activeTab]);

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
    });
    setShowUserForm(true);
  };

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData((prev) => ({ ...prev, [name]: value }));
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

  // Dynamic Sidebar Link Style matching reference image
  const getMenuClass = (tabName) =>
    `w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
      activeTab === tabName
        ? "bg-[#151c2e] text-white shadow-sm border border-blue-500/15"
        : "text-gray-400 hover:bg-white/5 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-[#070b15] text-white relative overflow-hidden font-sans flex">
      
      {/* ============================================================= */}
      {/* 📌 PERMANENT EXACT SIDEBAR (NEVER CHANGES OR RE-RENDERS)      */}
      {/* ============================================================= */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-[#0c101d] border-r border-white/5 flex flex-col justify-between p-5 z-50">
        <div className="space-y-6">
          
          {/* HEADER BADGE */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 bg-[#00d2ff] text-black px-3 py-2 rounded-2xl shadow-lg shadow-cyan-500/10">
              <div className="w-6 h-6 rounded-lg bg-black/10 flex items-center justify-center">
                <Trophy size={16} className="text-black" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-sm text-black tracking-tight">
                Admin Dashboard
              </span>
            </div>
            
            <button className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5">
              <X size={16} />
            </button>
          </div>

          {/* NAVIGATION BUTTONS */}
          <nav className="space-y-1.5 pt-2">
            <button onClick={() => setActiveTab("dashboard")} className={getMenuClass("dashboard")}>
              <LayoutDashboard size={18} className="text-blue-400" />
              <span>Dashboard</span>
            </button>

            <button onClick={() => setActiveTab("requests")} className={getMenuClass("requests")}>
              <Users size={18} className="text-blue-400" />
              <span>Requests</span>
            </button>

            <button onClick={() => setActiveTab("players")} className={getMenuClass("players")}>
              <Trophy size={18} className="text-blue-400" />
              <span>Players Profile</span>
            </button>

            <button onClick={() => setActiveTab("matches")} className={getMenuClass("matches")}>
              <Calendar size={18} className="text-blue-400" />
              <span>Matches</span>
            </button>

            <button onClick={() => setActiveTab("tickets")} className={getMenuClass("tickets")}>
              <Ticket size={18} className="text-blue-400" />
              <span>Tickets</span>
            </button>

            <button onClick={() => setActiveTab("settings")} className={getMenuClass("settings")}>
              <Settings size={18} className="text-blue-400" />
              <span>Settings</span>
            </button>
          </nav>
        </div>

        {/* LOGOUT BUTTON */}
        <div className="pt-4 border-t border-white/5">
          <button className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-medium text-sm">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ============================================================= */}
      {/* 📌 MAIN CONTENT AREA (CHANGES CONTENT BASED ON ACTIVE TAB)   */}
      {/* ============================================================= */}
      <main className="flex-1 ml-64 relative z-10 min-h-screen flex flex-col p-8 space-y-6">

        {/* ------------------------------------------------------------- */}
        {/* VIEW 1: DASHBOARD ANALYTICS (WHEN 'Dashboard' TAB IS ACTIVE)  */}
        {/* ------------------------------------------------------------- */}
        {activeTab === "dashboard" && (
          <div className="space-y-8">
            {/* TOP BAR */}
            <div className="flex justify-between items-center bg-[#0d1322] p-6 rounded-2xl border border-white/5">
              <div>
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-gray-400 text-sm mt-1">Manage SLIIT Football Platform</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-[#151c2e] text-sm text-white pl-9 pr-4 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <button className="p-2.5 bg-[#151c2e] rounded-xl border border-white/10 text-gray-300 hover:text-white">
                  <Bell size={18} />
                </button>
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Users size={20} />
                </div>
              </div>
            </div>

            {/* METRICS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div className="bg-[#0d1322] border border-white/5 p-5 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Total Players</p>
                  <h3 className="text-2xl font-bold text-white mt-1">2,540</h3>
                  <span className="text-xs text-emerald-400 font-semibold mt-1 inline-block">↗ +12%</span>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                  <Users size={22} />
                </div>
              </div>

              <div className="bg-[#0d1322] border border-white/5 p-5 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Active Teams</p>
                  <h3 className="text-2xl font-bold text-white mt-1">126</h3>
                  <span className="text-xs text-emerald-400 font-semibold mt-1 inline-block">↗ +8%</span>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                  <Shield size={22} />
                </div>
              </div>

              <div className="bg-[#0d1322] border border-white/5 p-5 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Tournaments</p>
                  <h3 className="text-2xl font-bold text-white mt-1">48</h3>
                  <span className="text-xs text-emerald-400 font-semibold mt-1 inline-block">↗ +15%</span>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                  <Trophy size={22} />
                </div>
              </div>

              <div className="bg-[#0d1322] border border-white/5 p-5 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-400 font-medium">Revenue</p>
                  <h3 className="text-2xl font-bold text-white mt-1">$45,800</h3>
                  <span className="text-xs text-emerald-400 font-semibold mt-1 inline-block">↗ +21%</span>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                  <DollarSign size={22} />
                </div>
              </div>
            </div>

            {/* PERFORMANCE & STATUS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-[#0d1322] border border-white/5 p-6 rounded-2xl space-y-6">
                <h3 className="text-lg font-bold text-white">Performance Analytics</h3>
                <div className="h-48 flex items-end justify-between gap-3 pt-6 border-b border-white/5 pb-2">
                  {[40, 75, 50, 90, 60, 80, 100].map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                      <div style={{ height: `${height}%` }} className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg" />
                      <span className="text-xs text-gray-400 font-mono">
                        {["Jan","Feb","Mar","Apr","May","Jun","Jul"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0d1322] border border-white/5 p-6 rounded-2xl space-y-6">
                <h3 className="text-lg font-bold text-white">System Status</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-sm text-gray-300">Server</span>
                    <CheckCircle size={18} className="text-emerald-400" />
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-sm text-gray-300">Database</span>
                    <CheckCircle size={18} className="text-emerald-400" />
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-sm text-gray-300">Security</span>
                    <ShieldCheck size={18} className="text-blue-400" />
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-300">Backup</span>
                    <Clock size={18} className="text-amber-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* VIEW 2: REQUESTS USER TABLE (WHEN 'Requests' TAB IS ACTIVE)   */}
        {/* ------------------------------------------------------------- */}
        {activeTab === "requests" && (
          <div className="bg-[#0d1322] border border-white/5 rounded-2xl p-6 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex justify-between items-center">
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
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
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
        )}

        {/* EDIT USER MODAL OVERLAY */}
        {showUserForm && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#0e1322] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl space-y-4">
              <h2 className="text-xl font-bold text-white">Update Account Details</h2>
              <form onSubmit={handleUserSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Full Name</label>
                  <input
                    name="fullName"
                    value={userFormData.fullName}
                    onChange={handleUserInputChange}
                    required
                    className="w-full p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Username</label>
                  <input
                    name="username"
                    value={userFormData.username}
                    onChange={handleUserInputChange}
                    required
                    className="w-full p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userFormData.email}
                    onChange={handleUserInputChange}
                    required
                    className="w-full p-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white"
                  />
                </div>
                <div className="flex gap-3 mt-4">
                  <button type="submit" className="flex-1 bg-blue-500 text-white p-2 rounded-lg text-sm font-semibold">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowUserForm(false)}
                    className="flex-1 bg-white/10 text-white p-2 rounded-lg text-sm font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}