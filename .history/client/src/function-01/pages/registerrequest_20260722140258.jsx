import React, { useState, useEffect } from "react";
import { getAllUsers, updateUser, deleteUser } from "../../common/services/userService";

export default function RegisterRequestPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
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
                        <button className="px-3 py-1.5 text-xs font-medium bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg border border-blue-500/10 transition-colors">
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
  );
}