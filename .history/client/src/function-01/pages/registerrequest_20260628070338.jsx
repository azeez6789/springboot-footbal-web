import { useState, useEffect } from "react";
import {
  getAllUsers,
  updateUser,
  deleteUser,
  getAllPlayerProfiles,
  createPlayerProfileWithImage,
  updatePlayerProfileWithImage,
  deletePlayerProfile,
  getPlayerProfileByUserId
} from "../../common/services/userService";

export default function RegisterRequest() {
  const [users, setUsers] = useState([]);
  const [playerProfiles, setPlayerProfiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [editingProfile, setEditingProfile] = useState(null);
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  // User form state
  const [userFormData, setUserFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    dob: "",
    role: "",
    password: "",
  });

  // Player profile form state
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
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      alert("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const fetchPlayerProfiles = async () => {
    try {
      setLoading(true);
      const data = await getAllPlayerProfiles();
      setPlayerProfiles(data);
    } catch (error) {
      console.error("Error fetching player profiles:", error);
      alert("Failed to fetch player profiles");
    } finally {
      setLoading(false);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setUserFormData({
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      phoneNumber: user.phoneNumber,
      dob: user.dob,
      role: user.role,
      password: "",
    });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUser(editingUser.id, userFormData);
      alert("User updated successfully!");
      setEditingUser(null);
      setUserFormData({
        fullName: "",
        username: "",
        email: "",
        phoneNumber: "",
        dob: "",
        role: "",
        password: "",
      });
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        setLoading(true);
        await deleteUser(userId);
        alert("User deleted successfully!");
        fetchUsers();
        fetchPlayerProfiles();
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Failed to delete user");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCreateProfile = (userId) => {
    setSelectedUserId(userId);
    const user = users.find(u => u.id === userId);
    setProfileFormData({
      userId: userId,
      fullName: user ? user.fullName : "",
      position: "",
      age: "",
      jerseyNumber: "",
      bio: "",
      profilePicture: null,
    });
    setShowProfileForm(true);
  };

  const handleEditProfile = (profile) => {
    setEditingProfile(profile);
    setProfileFormData({
      userId: profile.userId,
      fullName: profile.fullName,
      position: profile.position,
      age: profile.age,
      jerseyNumber: profile.jerseyNumber,
      bio: profile.bio,
      profilePicture: null,
    });
    setShowProfileForm(true);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("userId", profileFormData.userId);
      formData.append("fullName", profileFormData.fullName);
      formData.append("position", profileFormData.position);
      formData.append("age", profileFormData.age);
      if (profileFormData.jerseyNumber) {
        formData.append("jerseyNumber", profileFormData.jerseyNumber);
      }
      if (profileFormData.bio) {
        formData.append("bio", profileFormData.bio);
      }
      if (profileFormData.profilePicture) {
        formData.append("profilePicture", profileFormData.profilePicture);
      }

      if (editingProfile) {
        await updatePlayerProfileWithImage(editingProfile.id, formData);
        alert("Player profile updated successfully!");
        setEditingProfile(null);
      } else {
        await createPlayerProfileWithImage(formData);
        alert("Player profile created successfully!");
      }

      setShowProfileForm(false);
      setProfileFormData({
        userId: "",
        fullName: "",
        position: "",
        age: "",
        jerseyNumber: "",
        bio: "",
        profilePicture: null,
      });
      fetchPlayerProfiles();
    } catch (error) {
      console.error("Error saving player profile:", error);
      alert("Failed to save player profile");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProfile = async (profileId) => {
    if (window.confirm("Are you sure you want to delete this player profile?")) {
      try {
        setLoading(true);
        await deletePlayerProfile(profileId);
        alert("Player profile deleted successfully!");
        fetchPlayerProfiles();
      } catch (error) {
        console.error("Error deleting profile:", error);
        alert("Failed to delete player profile");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileFormData({
        ...profileFormData,
        profilePicture: file,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1220] to-[#020617] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">User Management</h1>

        {/* Users Table */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
          {loading && users.length === 0 ? (
            <p className="text-center text-white/60">Loading users...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4">ID</th>
                    <th className="text-left py-3 px-4">Full Name</th>
                    <th className="text-left py-3 px-4">Username</th>
                    <th className="text-left py-3 px-4">Email</th>
                    <th className="text-left py-3 px-4">Phone</th>
                    <th className="text-left py-3 px-4">Role</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4">{user.id}</td>
                      <td className="py-3 px-4">{user.fullName}</td>
                      <td className="py-3 px-4">{user.username}</td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">{user.phoneNumber || "-"}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          user.role === 'admin' ? 'bg-red-500/20 text-red-400' :
                          user.role === 'player' ? 'bg-green-500/20 text-green-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleEditUser(user)}
                          className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg mr-2 text-sm"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
                        >
                          Delete
                        </button>
                        {user.role === 'player' && (
                          <button
                            onClick={() => handleCreateProfile(user.id)}
                            className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded-lg ml-2 text-sm"
                          >
                            Create Profile
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Edit User Modal */}
        {editingUser && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-6 w-full max-w-md">
              <h3 className="text-xl font-semibold mb-4">Edit User</h3>
              <form onSubmit={handleUpdateUser} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={userFormData.fullName}
                  onChange={(e) => setUserFormData({...userFormData, fullName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Username"
                  value={userFormData.username}
                  onChange={(e) => setUserFormData({...userFormData, username: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={userFormData.email}
                  onChange={(e) => setUserFormData({...userFormData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={userFormData.phoneNumber}
                  onChange={(e) => setUserFormData({...userFormData, phoneNumber: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                />
                <input
                  type="date"
                  value={userFormData.dob}
                  onChange={(e) => setUserFormData({...userFormData, dob: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                />
                <select
                  value={userFormData.role}
                  onChange={(e) => setUserFormData({...userFormData, role: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                  required
                >
                  <option value="fan">Fan</option>
                  <option value="player">Player</option>
                  <option value="admin">Admin</option>
                </select>
                <input
                  type="password"
                  placeholder="New Password (leave blank to keep current)"
                  value={userFormData.password}
                  onChange={(e) => setUserFormData({...userFormData, password: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                />
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500"
                  >
                    {loading ? "Updating..." : "Update"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingUser(null)}
                    className="flex-1 py-3 rounded-xl font-semibold bg-gray-600 hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Player Profiles Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold mb-4">Player Profiles</h2>
          {loading && playerProfiles.length === 0 ? (
            <p className="text-center text-white/60">Loading player profiles...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {playerProfiles.map((profile) => (
                <div key={profile.id} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  {profile.profilePicture && (
                    <img
                      src={`data:image/jpeg;base64,${profile.profilePicture}`}
                      alt={profile.fullName}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{profile.fullName}</h3>
                  <p className="text-white/60">Position: {profile.position}</p>
                  <p className="text-white/60">Age: {profile.age}</p>
                  {profile.jerseyNumber && <p className="text-white/60">Jersey: #{profile.jerseyNumber}</p>}
                  {profile.bio && <p className="text-white/60 mt-2 text-sm">{profile.bio}</p>}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleEditProfile(profile)}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg text-sm"
                    >
                      Edit Profile
                    </button>
                    <button
                      onClick={() => handleDeleteProfile(profile.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Player Profile Form Modal */}
        {showProfileForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#1a1a2e] border border-white/10 rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4">
                {editingProfile ? "Edit Player Profile" : "Create Player Profile"}
              </h3>
              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={profileFormData.fullName}
                  onChange={(e) => setProfileFormData({...profileFormData, fullName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Position (e.g., Forward, Midfielder)"
                  value={profileFormData.position}
                  onChange={(e) => setProfileFormData({...profileFormData, position: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={profileFormData.age}
                  onChange={(e) => setProfileFormData({...profileFormData, age: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Jersey Number"
                  value={profileFormData.jerseyNumber}
                  onChange={(e) => setProfileFormData({...profileFormData, jerseyNumber: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                />
                <textarea
                  placeholder="Bio"
                  value={profileFormData.bio}
                  onChange={(e) => setProfileFormData({...profileFormData, bio: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none h-24"
                />
                <div>
                  <label className="block mb-2 text-white/60">Profile Picture</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 outline-none"
                  />
                  {profileFormData.profilePicture && (
                    <p className="mt-2 text-sm text-green-400">
                      Selected: {profileFormData.profilePicture.name}
                    </p>
                  )}
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500"
                  >
                    {loading ? "Saving..." : (editingProfile ? "Update" : "Create")}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowProfileForm(false);
                      setEditingProfile(null);
                      setProfileFormData({
                        userId: "",
                        fullName: "",
                        position: "",
                        age: "",
                        jerseyNumber: "",
                        bio: "",
                        profilePicture: null,
                      });
                    }}
                    className="flex-1 py-3 rounded-xl font-semibold bg-gray-600 hover:bg-gray-700"
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
