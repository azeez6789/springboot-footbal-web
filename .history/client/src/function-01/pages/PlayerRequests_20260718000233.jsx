import React, { useState } from "react";
import {
  Search,
  User,
  CheckCircle,
  XCircle,
  Eye,
  Clock,
  Shield,
  Trophy,
  Mail,
  Phone,
} from "lucide-react";

export default function PlayerRequest() {
  const [search, setSearch] = useState("");

  const [requests, setRequests] = useState([
    {
      id: 1,
      name: "Mohamed Arafan",
      email: "arafan@gmail.com",
      phone: "0771234567",
      age: 22,
      position: "Forward",
      team: "SLIIT Warriors",
      status: "Pending",
    },
    {
      id: 2,
      name: "Kasun Perera",
      email: "kasun@gmail.com",
      phone: "0715552222",
      age: 21,
      position: "Midfielder",
      team: "Blue Lions",
      status: "Pending",
    },
    {
      id: 3,
      name: "Nimal Silva",
      email: "nimal@gmail.com",
      phone: "0769988776",
      age: 23,
      position: "Goal Keeper",
      team: "Royal FC",
      status: "Approved",
    },
    {
      id: 4,
      name: "Amal Fernando",
      email: "amal@gmail.com",
      phone: "0701122334",
      age: 20,
      position: "Defender",
      team: "Campus Stars",
      status: "Rejected",
    },
  ]);

  const approve = (id) => {
    setRequests(
      requests.map((item) =>
        item.id === id ? { ...item, status: "Approved" } : item
      )
    );
  };

  const reject = (id) => {
    setRequests(
      requests.map((item) =>
        item.id === id ? { ...item, status: "Rejected" } : item
      )
    );
  };

  const filtered = requests.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

      {/* Background */}
      <div className="fixed w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full top-[-200px] left-[-200px]" />
      <div className="fixed w-[600px] h-[600px] bg-green-500/20 blur-[160px] rounded-full bottom-[-200px] right-[-200px]" />

      <div className="relative z-10 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Player Registration Requests
            </h1>

            <p className="text-white/60 mt-2">
              Review player profile registration requests
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-xl">

            <p className="text-white/60 text-sm">
              Pending Requests
            </p>

            <h2 className="text-3xl font-bold text-yellow-400">
              {
                requests.filter((x) => x.status === "Pending").length
              }
            </h2>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl mb-8">

          <div className="flex items-center gap-3">

            <Search />

            <input
              type="text"
              placeholder="Search player..."
              className="bg-transparent outline-none flex-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-6">

          {filtered.map((player) => (

            <div
              key={player.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:bg-white/10 transition duration-300"
            >

              {/* Top */}

              <div className="flex justify-between">

                <div className="flex gap-4">

                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-green-400 flex items-center justify-center">

                    <User size={38} />

                  </div>

                  <div>

                    <h2 className="text-2xl font-bold">
                      {player.name}
                    </h2>

                    <p className="text-white/60">
                      {player.position}
                    </p>

                    <p className="text-blue-300 mt-1">
                      {player.team}
                    </p>

                  </div>

                </div>

                <div>

                  {player.status === "Pending" && (
                    <span className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full flex items-center gap-2">
                      <Clock size={16} />
                      Pending
                    </span>
                  )}

                  {player.status === "Approved" && (
                    <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full flex items-center gap-2">
                      <CheckCircle size={16} />
                      Approved
                    </span>
                  )}

                  {player.status === "Rejected" && (
                    <span className="bg-red-500/20 text-red-300 px-4 py-2 rounded-full flex items-center gap-2">
                      <XCircle size={16} />
                      Rejected
                    </span>
                  )}

                </div>

              </div>

              {/* Details */}

              <div className="grid grid-cols-2 gap-5 mt-8">

                <div className="bg-white/5 rounded-xl p-4">

                  <Mail className="text-blue-400 mb-2" />

                  <p className="text-white/50 text-sm">
                    Email
                  </p>

                  <p>{player.email}</p>

                </div>

                <div className="bg-white/5 rounded-xl p-4">

                  <Phone className="text-green-400 mb-2" />

                  <p className="text-white/50 text-sm">
                    Phone
                  </p>

                  <p>{player.phone}</p>

                </div>

                <div className="bg-white/5 rounded-xl p-4">

                  <Shield className="text-yellow-400 mb-2" />

                  <p className="text-white/50 text-sm">
                    Age
                  </p>

                  <p>{player.age}</p>

                </div>

                <div className="bg-white/5 rounded-xl p-4">

                  <Trophy className="text-purple-400 mb-2" />

                  <p className="text-white/50 text-sm">
                    Position
                  </p>

                  <p>{player.position}</p>

                </div>

              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-8">

                <button className="flex-1 bg-blue-500 hover:bg-blue-600 rounded-xl py-3 flex justify-center items-center gap-2">
                  <Eye size={18} />
                  View
                </button>

                {player.status === "Pending" && (
                  <>
                    <button
                      onClick={() => approve(player.id)}
                      className="flex-1 bg-green-500 hover:bg-green-600 rounded-xl py-3 flex justify-center items-center gap-2"
                    >
                      <CheckCircle size={18} />
                      Approve
                    </button>

                    <button
                      onClick={() => reject(player.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 rounded-xl py-3 flex justify-center items-center gap-2"
                    >
                      <XCircle size={18} />
                      Reject
                    </button>
                  </>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}