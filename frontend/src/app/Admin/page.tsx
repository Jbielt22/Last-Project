"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>({});
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/dashboard");
        if (res.ok) {
          const data = await res.json();
          setStats(data.stats || {});
          setMessages(data.messages || []);
        }
      } catch (error) {
        console.error("Gagal mengambil data dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statCards = [
    {
      title: "Total Projects",
      value: stats?.total_projects ?? 0,
      icon: "🚀",
      color: "from-blue-500 to-indigo-500",
      href: "/admin/projects",
      description: "Proyek portofolio aktif",
    },
    {
      title: "Total Skills",
      value: stats?.total_skills ?? 0,
      icon: "⚡",
      color: "from-amber-500 to-orange-500",
      href: "/admin/skills",
      description: "Keahlian & teknologi",
    },
    {
      title: "Certificates",
      value: stats?.total_certificates ?? 0,
      icon: "🎓",
      color: "from-emerald-500 to-teal-500",
      href: "/admin/certificates",
      description: "Sertifikat kompetensi",
    },
    {
      title: "Pesan Masuk",
      value: stats?.total_messages ?? 0,
      icon: "✉️",
      color: "from-purple-500 to-pink-500",
      href: "/admin/messages",
      description: `${stats?.unread_messages ?? 0} belum dibaca`,
      badge: stats?.unread_messages ? `${stats.unread_messages} Baru` : undefined,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-indigo-900/40 via-violet-900/30 to-purple-900/30 border border-indigo-500/20 p-6 sm:p-8 backdrop-blur-xl">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-3">
            <span>✨</span> CMS Admin Panel v1.0
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Selamat Datang di Dashboard Admin!
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
            Kelola konten portofolio dinamis Anda mulai dari proyek, keahlian, sertifikasi, hingga pesan kontak yang masuk secara terpusat.
          </p>
        </div>

        {/* Decorative Background Blob */}
        <div className="absolute right-0 top-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />
      </div>

      {/* Grid Statistik Kartu */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800/80 animate-pulse space-y-4"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-xl" />
              <div className="w-1/2 h-8 bg-gray-800 rounded" />
              <div className="w-3/4 h-4 bg-gray-800 rounded" />
            </div>
          ))
        ) : (
          statCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800/60 hover:border-indigo-500/40 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1 transform shadow-xl shadow-black/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-tr ${card.color} flex items-center justify-center text-xl shadow-lg shadow-black`}
                  >
                    {card.icon}
                  </div>
                  {card.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      {card.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-tight">
                  {card.value}
                </h3>
                <p className="text-sm font-semibold text-gray-300 mt-1">
                  {card.title}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-gray-800/60 flex items-center justify-between">
                <span className="text-xs text-gray-500">{card.description}</span>
                <span className="text-xs font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* 2 Column Layout: Recent Messages & Quick Shortcuts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Pesan Masuk Terbaru (2 Kolom) */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-gray-900/50 border border-gray-800/60 backdrop-blur-xl flex flex-col">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800/60">
            <div>
              <h3 className="text-lg font-bold text-white">
                Pesan Kontak Terbaru
              </h3>
              <p className="text-xs text-gray-400">
                Pesan yang dikirimkan oleh pengunjung website
              </p>
            </div>
            <Link
              href="/admin/messages"
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Lihat Semua →
            </Link>
          </div>

          <div className="flex-1">
            {loading ? (
              <div className="space-y-3 py-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gray-800/40 animate-pulse space-y-2"
                  >
                    <div className="h-4 bg-gray-700 rounded w-1/4" />
                    <div className="h-3 bg-gray-700 rounded w-3/4" />
                  </div>
                ))}
              </div>
            ) : messages.length === 0 ? (
              <div className="py-12 text-center text-gray-500 text-sm">
                <span className="text-4xl block mb-2">📭</span>
                Belum ada pesan yang masuk.
              </div>
            ) : (
              <div className="space-y-3 flex-1">
                {messages.slice(0, 5).map((msg) => (
                  <div
                    key={msg.id}
                    className="p-4 rounded-xl bg-gray-950/50 border border-gray-800/50 hover:border-gray-700 transition-colors flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-white truncate">
                          {msg.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({msg.email})
                        </span>
                      </div>
                      {msg.subject && (
                        <p className="text-xs font-medium text-indigo-300">
                          {msg.subject}
                        </p>
                      )}
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                        {msg.message}
                      </p>
                    </div>
                    <div className="text-[11px] text-gray-500 shrink-0 text-right">
                      {new Date(msg.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "short",
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions Shortcuts (1 Kolom) */}
        <div className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800/60 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-white pb-3 border-b border-gray-800/60 mb-4">
              Aksi Cepat
            </h3>

            <div className="space-y-2.5">
              <Link
                href="/admin/projects"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gray-950/60 border border-gray-800/60 hover:border-indigo-500/40 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🚀</span>
                  <div>
                    <span className="font-medium text-gray-200 group-hover:text-white text-sm block">
                      Kelola Data Proyek
                    </span>
                    <span className="text-xs text-gray-500">Tambah/Edit Project</span>
                  </div>
                </div>
                <span className="text-gray-500 group-hover:text-indigo-400">→</span>
              </Link>

              <Link
                href="/admin/skills"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gray-950/60 border border-gray-800/60 hover:border-amber-500/40 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">⚡</span>
                  <div>
                    <span className="font-medium text-gray-200 group-hover:text-white text-sm block">
                      Kelola Keahlian (Skills)
                    </span>
                    <span className="text-xs text-gray-500">Daftar Teknologi</span>
                  </div>
                </div>
                <span className="text-gray-500 group-hover:text-amber-400">→</span>
              </Link>

              <Link
                href="/admin/certificates"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gray-950/60 border border-gray-800/60 hover:border-emerald-500/40 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🎓</span>
                  <div>
                    <span className="font-medium text-gray-200 group-hover:text-white text-sm block">
                      Kelola Sertifikat
                    </span>
                    <span className="text-xs text-gray-500">Penghargaan & Kursus</span>
                  </div>
                </div>
                <span className="text-gray-500 group-hover:text-emerald-400">→</span>
              </Link>

              <Link
                href="/admin/testimonials"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gray-950/60 border border-gray-800/60 hover:border-purple-500/40 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">💬</span>
                  <div>
                    <span className="font-medium text-gray-200 group-hover:text-white text-sm block">
                      Kelola Testimoni
                    </span>
                    <span className="text-xs text-gray-500">Ulasan Klien</span>
                  </div>
                </div>
                <span className="text-gray-500 group-hover:text-purple-400">→</span>
              </Link>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-gray-800/60 text-xs text-indigo-300 leading-relaxed">
            <strong>Tips Pembelajaran:</strong> Pada pertemuan selanjutnya, kita akan membangun form pembuatan dan pengeditan data (CRUD) untuk admin panel.
          </div>
        </div>
      </div>
    </div>
  );
}