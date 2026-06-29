import { useState, useEffect } from "react";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  getAllPlayerProfiles,
  createPlayerProfileWithImage,
  updatePlayerProfileWithImage,
  deletePlayerProfile,
} from "../../common/services/userService";
import Logo from "../../common/assets/opt3.png";
import { useNavigate } from "react-router-dom";

export default function RegisterRequest() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [playerProfiles, setPlayerProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editingProfile, setEditingProfile] = useState(null);
  const [showProfileForm, setShowProfileForm] = useState(false);

  const [userFormData, setUserFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    dob: "",
    role: "",
    password: "",
  });

  const [profileFormData, setProfileFormData] = useState({
    userId: "",
    fullName: "",
    position: "",
    age: "",
    jerseyNumber: "",
    bio: "",
    profilePicture: null,
  });

  useEffect(() => {
    fetchUsers();
    fetchPlayerProfiles();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getAllUsers();
    setUsers(data);
    setLoading(false);
  };

  const fetchPlayerProfiles = async () => {
    setLoading(true);
    const data = await getAllPlayerProfiles();
    setPlayerProfiles(data);
    setLoading(false);
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Delete user?")) {
      await deleteUser(id);
      fetchUsers();
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(profileFormData).forEach((key) => {
      if (profileFormData[key]) {
        formData.append(key, profileFormData[key]);
      }
    });

    if (editingProfile) {
      await updatePlayerProfileWithImage(editingProfile.id, formData);
    } else {
      await createPlayerProfileWithImage(formData);
    }

    setShowProfileForm(false);
    setEditingProfile(null);
    fetchPlayerProfiles();
  };

  const handleImageChange = (e) => {
    setProfileFormData({
      ...profileFormData,
      profilePicture: e.target.files[0],
    });
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white">

      {/* ===== BACKGROUND GLOW ===== */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
      <div className="fixed w-[600px] h-[600px] bg-green-400/20 blur-[180px] rounded-full bottom-[-200px] right-[-200px]" />

      {/* ===== HEADER (NO ASSETS) ===== */}
      <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">

          <div className="flex items-center gap-3">
            <img src={Logo} className="w-10 h-10" />
            
            <h1 className="font-bold">SLIIT FOOTBALL</h1>
          </div>

          <nav className="hidden md:flex gap-6 text-white/70">
            <button onClick={() => navigate("/")}>Home</button>
            <button className="text-blue-400">Requests</button>
            <button onClick={() => navigate("/pages/event")}>Events</button>
          </nav>

          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white/10 rounded-xl">
              Login
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-black rounded-xl">
              Join
            </button>
          </div>

        </div>
      </header>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">

        {/* ===== USERS TABLE ===== */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Registered Users</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-white/60 border-b border-white/10">
                <tr>
                  <th className="p-3 text-left">ID</th>
                  <th className="text-left">Full Name</th>
                  <th className="text-left">Email</th>
                  <th className="text-left">Role</th>
                  <th className="text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {users.map((u) => (
                  <tr key={u.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="p-3">{u.id}</td>
                    <td>{u.fullName}</td>
                    <td>{u.email}</td>
                    <td>
                      <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300">
                        {u.role}
                      </span>
                    </td>
                    <td className="flex gap-2 p-2">
                      <button className="px-3 py-1 bg-blue-500/30 rounded-lg">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(u.id)}
                        className="px-3 py-1 bg-red-500/30 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ===== PLAYER PROFILES ===== */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-bold mb-6">Player Profiles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {playerProfiles.map((p) => (
              <div key={p.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="text-lg font-bold">{p.fullName}</h3>
                <p className="text-white/60">{p.position}</p>
                <p className="text-white/60">Age: {p.age}</p>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-blue-500/30 rounded-lg py-1">
                    Edit
                  </button>
                  <button className="flex-1 bg-red-500/30 rounded-lg py-1">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PROFILE MODAL ===== */}
        {showProfileForm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-[#0f172a] border border-white/10 p-6 rounded-2xl w-[420px]">

              <h2 className="text-xl font-bold mb-4">
                Player Profile
              </h2>

              <form onSubmit={handleProfileSubmit} className="space-y-3">

                <input
                  className="w-full p-3 bg-white/5 rounded-lg"
                  placeholder="Full Name"
                />

                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full p-2"
                />

                <div className="flex gap-3 mt-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-green-400 p-2 rounded-lg text-black font-semibold">
                    Save
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowProfileForm(false)}
                    className="flex-1 bg-white/10 p-2 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}