import React, { useState } from 'react';
import SideBar1 from './sideBar1'; // Ensure path matches your file structure

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <SideBar1 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      
      <main className="flex-1 overflow-y-auto p-6">
        {/* Main layout content */}
      </main>
    </div>
  );
}