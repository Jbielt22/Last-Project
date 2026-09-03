"use client";

import { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      {/* Sidebar Admin */}
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Area Konten Utama */}
      <div className="flex-1 flex flex-col lg:pl-64 min-w-0">
        {/* Navbar Admin */}
        <AdminNavbar onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Isi dari setiap halaman (page.tsx) akan dimasukkan di sini */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}